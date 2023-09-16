Paths and Require
=================

You will otice that in the files from the codebase most of the time we do not use `../` on the requires but instead we require files from the application as the root of the project was a node package.

It is important to warn you that it is not the default behavior of node's require, but we change that defining a environment variable called `NODE_PATH` with the path of the root of the project. Doing that we are defining that the roo t of the project may be used as any other package, making our life easier when it comes to requiring files, but it will not prevent you from using relative paths normally when requiring files!

This variable should be set on every entry point of execution of your project for it to work properly, that is why use it in our npm test script on `package.json` file, we do not do that for the production mode, because it is done on the `cluster.js` file directly.

Setting this variable to make your life easier will never bite you, but be aware that you have to remember to set it in case you add new npm scripts that will interact with files that use non-relative paths on `require`.
