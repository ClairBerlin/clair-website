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

bundle exec jekyll build || fail "Jekyll build failed"

git add dashboard
git add _site

DEFAULT_COMMIT_MESSAGE="Update como UI"
read -p "enter git commit message [$DEFAULT_COMMIT_MESSAGE]: " COMMIT_MESSAGE
echo "git commit message: ${COMMIT_MESSAGE:=$DEFAULT_COMMIT_MESSAGE}"

git commit -m "$COMMIT_MESSAGE" || fail "nothing to commit"

LATEST_TAG=`git tag | sort -n | tail -n 1`
LATEST_TAG=${LATEST_TAG//[!0-9]/}
DEFAULT_TAG=$(( LATEST_TAG + 1))
read -p "enter git tag [$DEFAULT_TAG]: " TAG
echo "git tag: ${TAG:=$DEFAULT_TAG}"

git tag $TAG

git push origin
git push origin $TAG
