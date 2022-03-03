#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add -A
git commit -m "New deployement"
git push -f git@github.com:nyarehd/VueTodo.git master:gh
cd -
ss