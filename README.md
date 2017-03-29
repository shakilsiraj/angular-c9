Setting up NodeJs:

C9 starts any NodeJs workspace with an older version of Node and NPM (mine was Node v4.7.2 and NPM v4.1.2). So, you will need to upgrade the node version to the later versions (I am going to use v7).

To start, use nvm command to upgrade Node:
`nvm install 7`

Tell `nvm` to start using that version:
`nvm use 7.7.4`

Also make that version the default:
`nvm alias default 7`

Check the version of NodeJs now:
`node -v`

Now we will need to update all global packages. First clear the cache:
`npm cache clean -f`

Then update the npm package:
`npm i npm -g`

Then update all global packages:
`npm update -g`

Check if there is any outdated packages:
`npm outdated` - this should return empty.


Typings support for Jasmine:
`typings i -DG dt~jasmine`
