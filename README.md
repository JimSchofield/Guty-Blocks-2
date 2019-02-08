# Guty Blocks 2
This is designed to be a minimal, fast build environment for making WordPress Gutenberg blocks.  Our priorities are to:
1) Reduce time to development by making block generation and enqueuing fast
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

## Deleting a block
You will need to delete the block folder *and* remove the import statements from index.js (and index.view.js if it included a view script).

## Setup details
* Instead of creating a php enqueuing  function for each individual block, we import individual blocks into one `index.js` file and one `style.css` file.

* Anything inside of a `*.editor.css` file is inlined in the block using webpack style-loader.  It is never built into the dist folder, and it will not be seen on the front end view of the page.  Anything in `*.view.css` files will be included in the single css file.  This still results in the intended effect of editor styles overwriting view styles, and view styles being in both the editor and the view of the page.

* React and ReactDOM are treated as external dependencies, meaning that they can be referenced in webpack builds, but are not actually included in the index.js build.  This is so we don't duplicate React when we run the blocks.  As a result file sizes for these built blocks are much smaller.

## Block with view script
Sometimes there is a need to run a script on the viewing of a page.  The `build block with view script` sets up a `{blockname}.view.js` file that will only be run on the front end of the site.  Some use cases include:
* When a block outputs carousel slide markup, and the view needs to pick up that markup and make it work.
* If a block places stringified state on a div in the markup.  On viewing the page, the view script can pick up that state and render a live React application using ReactDOM and passing the state into the app as props.

## Thanks
Thanks to Robert a.k.a @codeBelt for creating `generate-template-files` which was a great way to set up block template generation!