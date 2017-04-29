#!/bin/bash

echo "Installing node.js version 7"
$HOME/.nvm/nvm.sh install 7

echo "Using node.js version 7.7.4"
$HOME/.nvm/nvm.sh use 7.7.4

echo "Setting default node alias to 7"
$HOME/.nvm/nvm.sh alias default 7

echo "Checking current installed node.js version"
node -v

echo "Cleaning current npm cache"
npm cache clean -f

echo "Updating npm package"
npm i npm -g

echo "Updating all global packages"
npm update -g

echo "Downloading project dependencies"
npm i

echo "There should be nothing outdated?"
npm outdated

exit