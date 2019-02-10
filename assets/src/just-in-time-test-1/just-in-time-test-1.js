// import './just-in-time-test-1.view.scss';
// import './just-in-time-test-1.editor.scss';

import stylesFromFile from './just-in-time-test-1.jit.scss';

const { 
    registerBlockType,
    getBlockDefaultClassName
} = wp.blocks;

const { InspectorControls } = wp.editor;

registerBlockType('test/just-in-time-test-1', {
    title: 'Just in time Test 1',
    icon: 'cloud',
    category: 'common',

    attributes: {
        styles: {
            type: 'string',
        }
     },

    edit(props) {

        const { className, setAttributes } = props;
        const { styles } = props.attributes;

        function refreshStyleSheets() {
            setAttributes({
                styles: stylesFromFile
            });
        }

        return [
            <InspectorControls>
                <div
                    style={{
                        padding: '1em 0',
                    }}
                >
                    <button onClick={refreshStyleSheets}>Refresh style sheets</button>
                </div>
            </InspectorControls>,
            <>
                <style>
                    {styles}
                </style>
                <div className={className}>
                Just in time Test 1
                </div>
            </>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('test/just-in-time-test-1');
        const { styles } = props.attributes;

        return (
            <>
                <style>
                    {styles}
                </style>
                <div className={className}>
                Just in time Test 1
                </div>
            </>
        );
    },
});
