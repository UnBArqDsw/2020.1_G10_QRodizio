
# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# Commit docs
git init
git add -A
git commit -m 'deploy docs'

# push docs to branch gh-pages
git push -f git@github.com:UnBArqDsw/2020.1_G10_QRodizio.git master:gh-pages

cd -