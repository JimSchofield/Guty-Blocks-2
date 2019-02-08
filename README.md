# Guty Blocks 2

This is designed to be a minimal, fast build environment for making WordPress Gutenberg blocks.  Our priorities are to:
1) Be able to generate a new block quickly
2) Have a build that requires minimal enqueuing and minimal file size

## To Use

1) Clone into `plugins` folder of your WordPress instance
2) Activate `Guty blocks 2` in your WordPress admin
3) In the terminal, go to the plugin folder `guty-blocks-2`
4) Run `npm install`

`npm run build` will run the webpack build once.

`npm run watch` will run the webpack watcher and build when files are changed.

## To generate a block

1) In the terminal, go to the plugin folder `guty-blocks-2`
2) Run `node generate`
3) After you follow the prompts your block source files will be in `assets/src/{block name}`
4) Make sure you either run `npm run build` or `npm run watch`
5) Enjoy your block!

## Setup details
Instead of creating a php enqueuing  function for each individual block, we import individual blocks into one `index.js` file and one `style.css` file.

Anything inside of a `*.editor.css` file is inlined in the block using webpack style-loader.  It is never build into the dist folder, and it will not be seen on the front end view of the page.  Anything in `*.view.css` files will be included in the single css file.

