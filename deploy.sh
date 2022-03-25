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
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy with vuepress'

# # if you are deploying to https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# # if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/pullingoff/vue-til.git master:gh-pages

git clone -b gh-pages https://github.com/pullingoff/vue-til/

# .git의 내용을 복사한 후 clone은 삭제한다.
cp -rf TIL/.git ./.git
rm -rf TIL

# 이제 add + commit + push를 차례대로 실행해주면 끝
# $1은 문자열 인자
git add .
git commit -m '$1'

# https://<USERNAME>.github.io/<REPO> 에 배포하는 경우
# git push origin master

# https://<USERNAME>.github.io/<REPO> 에 배포하는 경우
# 필자는 이 경우에 해당한다.
git push origin gh-pages

cd -
