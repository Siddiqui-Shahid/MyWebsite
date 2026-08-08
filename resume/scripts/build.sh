#!/usr/bin/env bash
# Compile a resume .tex → PDF.
#
# Usage:
#   bash resume/scripts/build.sh
#     → compiles resume/resume.tex → resume/resume.pdf + public/resume.pdf
#
#   bash resume/scripts/build.sh /path/to/file.tex [/path/to/out.pdf]
#     → compiles given tex; copies PDF to out path (defaults next to tex)
#     → does NOT overwrite public/resume.pdf unless OUT is public/resume.pdf
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
RESUME_DIR="$ROOT/resume"
PUBLIC_DIR="$ROOT/public"
BUILD_DIR="$RESUME_DIR/build"

TEX_SRC="${1:-$RESUME_DIR/resume.tex}"
OUT_PDF="${2:-}"

if [[ ! -f "$TEX_SRC" ]]; then
  echo "TeX source not found: $TEX_SRC" >&2
  exit 1
fi

TEX_SRC="$(cd "$(dirname "$TEX_SRC")" && pwd)/$(basename "$TEX_SRC")"
TEX_BASENAME="$(basename "$TEX_SRC")"
TEX_STEM="${TEX_BASENAME%.tex}"
OUT_NAME="${TEX_STEM}.pdf"

if [[ -z "$OUT_PDF" ]]; then
  if [[ "$TEX_SRC" == "$RESUME_DIR/resume.tex" ]]; then
    OUT_PDF="$RESUME_DIR/resume.pdf"
  else
    OUT_PDF="$(dirname "$TEX_SRC")/$OUT_NAME"
  fi
fi

mkdir -p "$BUILD_DIR" "$PUBLIC_DIR" "$(dirname "$OUT_PDF")"

cleanup_aux() {
  find "$BUILD_DIR" "$RESUME_DIR" -maxdepth 1 \( \
    -name '*.aux' -o -name '*.log' -o -name '*.out' -o \
    -name '*.fls' -o -name '*.fdb_latexmk' -o -name '*.synctex.gz' \
  \) -delete 2>/dev/null || true
}

run_pdflatex() {
  local engine="$1"
  echo "→ Compiling with $engine (2 passes)…"
  (
    cd "$BUILD_DIR"
    cp "$TEX_SRC" .
    "$engine" -interaction=nonstopmode -halt-on-error "$TEX_BASENAME" >/dev/null
    "$engine" -interaction=nonstopmode -halt-on-error "$TEX_BASENAME" >/dev/null
  )
}

run_docker() {
  echo "→ Compiling with Docker (texlive/texlive)…"
  local src_dir
  src_dir="$(dirname "$TEX_SRC")"
  docker run --rm \
    -v "$src_dir:/work:ro" \
    -v "$BUILD_DIR:/out" \
    -w /out \
    texlive/texlive:latest \
    bash -c "
      set -euo pipefail
      cp /work/$TEX_BASENAME .
      pdflatex -interaction=nonstopmode -halt-on-error $TEX_BASENAME >/dev/null
      pdflatex -interaction=nonstopmode -halt-on-error $TEX_BASENAME >/dev/null
    "
}

run_tectonic() {
  echo "→ Compiling with tectonic…"
  (
    cd "$BUILD_DIR"
    cp "$TEX_SRC" .
    tectonic "$TEX_BASENAME"
  )
}

pick_engine() {
  if command -v tectonic >/dev/null 2>&1; then
    echo "tectonic"
  elif command -v latexmk >/dev/null 2>&1; then
    echo "latexmk"
  elif command -v pdflatex >/dev/null 2>&1; then
    echo "pdflatex"
  else
    echo ""
  fi
}

ENGINE="$(pick_engine)"

if [[ "$ENGINE" == "tectonic" ]]; then
  run_tectonic
elif [[ "$ENGINE" == "latexmk" ]]; then
  echo "→ Compiling with latexmk…"
  (
    cd "$BUILD_DIR"
    cp "$TEX_SRC" .
    latexmk -pdf -interaction=nonstopmode -halt-on-error "$TEX_BASENAME" >/dev/null
  )
elif [[ -n "$ENGINE" ]]; then
  run_pdflatex "$ENGINE"
elif command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
  run_docker
else
  cat <<'EOF' >&2
No LaTeX engine found (and Docker is unavailable).

Install one of:
  • Tectonic (recommended):  brew install tectonic
  • BasicTeX:                brew install --cask basictex
  • Or start Docker Desktop and re-run (uses texlive/texlive image)
EOF
  exit 1
fi

BUILT="$BUILD_DIR/$OUT_NAME"
if [[ ! -f "$BUILT" ]]; then
  echo "Build failed: $BUILT not found" >&2
  exit 1
fi

cp "$BUILT" "$OUT_PDF"
cleanup_aux

echo "✓ Wrote $OUT_PDF"

# Only sync the canonical portfolio resume into public/
if [[ "$TEX_SRC" == "$RESUME_DIR/resume.tex" ]]; then
  cp "$OUT_PDF" "$PUBLIC_DIR/resume.pdf"
  echo "✓ Copied to $PUBLIC_DIR/resume.pdf (served by the site)"
fi
