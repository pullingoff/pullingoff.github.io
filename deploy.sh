#!/usr/bin/env sh

# abort on errors
set -e

# git pull
# git add -A
# git commit -m "$1 $2 $3 --all.sh master"
# git push origin master

# build
yarn docs:build
# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy with vuepress'

git push -f https://github.com/pullingoff/vue-til.git master:gh-pages


cd -