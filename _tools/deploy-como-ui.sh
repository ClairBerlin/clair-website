#!/usr/bin/env bash

set -e

fail() {
	echo $1
	exit 1
}

[ -d dashboard ] || fail "this script must be called from the top-level directory"
[ -d ../como-ui ] || fail "como-ui must be cloned into .."

pushd ../como-ui
yarn build-prod || fail "frontend build failed"
popd

rm -rf dashboard/*
cp -R ../como-ui/dist/* dashboard/

git add dashboard
git commit -m "Update como UI" || fail "nothing to commit"

bundle exec jekyll build || fail "Jekyll build failed"
git add _site
git commit -m "Build for production"

git push origin

LATEST_TAG=`git tag | sort -n | tail -n 1`
LATEST_TAG=${LATEST_TAG//[!0-9]/}
read -p "enter tag [$(( LATEST_TAG + 1 ))]: " NEW_TAG
echo "tag: ${NEW_TAG:=$(( LATEST_TAG + 1 ))}"

git tag $NEW_TAG
git push origin $NEW_TAG
