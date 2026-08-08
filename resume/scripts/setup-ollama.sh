#!/usr/bin/env bash
# Install/start Ollama and pull the model used by resume:tailor.
set -euo pipefail

MODEL="${OLLAMA_MODEL:-qwen2.5:7b}"

if ! command -v ollama >/dev/null 2>&1; then
  echo "→ Installing Ollama via Homebrew…"
  brew install ollama
fi

echo "→ Starting Ollama service…"
brew services start ollama >/dev/null 2>&1 || true
sleep 2

# Wait until API is up
for i in $(seq 1 30); do
  if curl -sf http://127.0.0.1:11434/api/tags >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

if ! curl -sf http://127.0.0.1:11434/api/tags >/dev/null 2>&1; then
  echo "Ollama API did not become ready. Try: ollama serve" >&2
  exit 1
fi

echo "→ Pulling model: $MODEL"
ollama pull "$MODEL"

echo "✓ Ready. Paste a JD into resume/tailor/jd.txt then run:"
echo "    npm run resume:tailor"
