import './background-wrapper-block.view.scss';
import './background-wrapper-block.editor.scss';

import BackgroundWrapper from '../mixins/BackgroundWrapper/BackgroundWrapper.jsx';

const { 
    registerBlockType,
    getBlockDefaultClassName
} = wp.blocks;

const { InspectorControls } = wp.editor;

// Everything is normal up to HERE.
// instead of making an object literal, we define
// the object as "config". Later on we pas this object
// through our "backgroundWrapper" function before 
// we register it
const config = {
    // Normal block stuff in here!
    title: 'Background Wrapper Block',
    icon: 'format-aside',
    category: 'common',

    attributes: {  },

    edit(props) {
        const { className, setAttributes } = props;

        return [
            <InspectorControls>
                <div style={{padding: '1em 0'}}>
                    Options
                </div>
            </InspectorControls>,
            <div className={className}>
                This block is using a "Higher Order Block" to include a background color change functionality.
            </div>
        ];
    },

    save(props) {
        return (
            <div>
                This block is using a "Higher Order Block" to include a background color change functionality.
            </div>
        );
    },
};

// Notice we wrap the object with the function before we register it!
registerBlockType('guty-blocks-2/background-wrapper-block', BackgroundWrapper(config));