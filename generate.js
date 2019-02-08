const generateTemplateFiles = require('generate-template-files').generateTemplateFiles;
const StringUtility = require('generate-template-files').StringUtility;
const CaseConverterEnum = require('generate-template-files').CaseConverterEnum;
const fs = require('fs');

const BLOCK_TEMPLATES_DIR = './js-templates/block';
const VIEW_BLOCK_TEMPLATES_DIR = './js-templates/block-with-view';
const OUTPUT_DIR = './assets/src/';

generateTemplateFiles([{
    option: "Create Block",
    defaultCase: '(kebabCase)',
    entry: {
        folderPath: BLOCK_TEMPLATES_DIR,
    },
    stringReplacers: ['__namespace__', '__block__', '__prettyname__', '__icon__','__category__'],
    output: {
        path: `${OUTPUT_DIR}__block__`,
        pathAndFileNameDefaultCase: '(kebabCase)',
    },
    onComplete: (data) => {
        console.log('\n Generating... \n');
        // writing the block.js file into the index.js file in the parent directory of block assets
        try {
            const stream = fs.createWriteStream(`${OUTPUT_DIR}/index.js`, {flags: 'a'});
            console.log('\nWriting block to index.js...\n');
    
            const { slotValue } = data.stringReplacers.find(el => el.slot === '__block__');
            const formattedSlotValue = StringUtility.toCase(slotValue, CaseConverterEnum.KebabCase);
            stream.write('import "./' + formattedSlotValue + '/' + formattedSlotValue + '.js";\n');
    
            console.log('\n\n🧱  Done!  Enjoy your blocks! 🧱\n\n');
        } catch(err) {
            console.log('Yikes!  an error:', err);
        }
    }
}, {
    option: "Create Block with View Script",
    defaultCase: '(kebabCase)',
    entry: {
        folderPath: VIEW_BLOCK_TEMPLATES_DIR,
    },
    stringReplacers: ['__namespace__', '__block__', '__prettyname__', '__icon__','__category__'],
    output: {
        path: `${OUTPUT_DIR}__block__`,
        pathAndFileNameDefaultCase: '(kebabCase)',
    },
    onComplete: (data) => {
        console.log('\n Generating... \n');
        // writing the block.js file into the index.js file in the parent directory of block assets
        try {
            // write to index
            const stream = fs.createWriteStream(`${OUTPUT_DIR}/index.js`, {flags: 'a'});
            console.log('\nWriting block to index.js...\n');
    
            const { slotValue } = data.stringReplacers.find(el => el.slot === '__block__');
            const formattedSlotValue = StringUtility.toCase(slotValue, CaseConverterEnum.KebabCase);
            stream.write('import "./' + formattedSlotValue + '/' + formattedSlotValue + '.js";\n');

            // write to index.view.js
            const stream2 = fs.createWriteStream(`${OUTPUT_DIR}/index.view.js`, {flags: 'a'});
            console.log('Writing block to index.view.js...\n');
    
            stream2.write('import "./' + formattedSlotValue + '/' + formattedSlotValue + '.view.js";\n');

    
            console.log('\n🧱  Done!  Enjoy your blocks! 🧱\n\n');
        } catch(err) {
            console.log('Yikes!  an error:', err);
        }
    }
}])