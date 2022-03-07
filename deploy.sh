#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add -A
read -p 'What is your commit message? : ' commitMessage
git commit -m "$commitMessage"
git push -f git@github.com:nyarehd/VueTodo.git master:gh
cd -
ss