#!/bin/bash
cd "$(dirname "$0")"
echo "🚀 Deploying Finance Wizard Group..."
git add -A
git commit -m "${1:-Update site}"
git push
echo "✅ Pushed to GitHub — Vercel auto-deploying..."
