import './some-block.view.scss';
import './some-block.editor.scss';

import BackgroundWrapper from '../mixins/BackgroundWrapper/BackgroundWrapper.jsx';

const { 
    registerBlockType,
    getBlockDefaultClassName
} = wp.blocks;

const { InspectorControls } = wp.editor;

const config = {
    title: 'This is some test block',
    icon: 'format-aside',
    category: 'common',

    attributes: {  },

    edit(props) {
        const { className, setAttributes } = props;
        // const {  } = props.attributes;

        return [
            <InspectorControls>
                <div
                    style={{
                        padding: '1em 0',
                    }}
                >
                    Options
                </div>
            </InspectorControls>,
            <div className={className}>
                This block is using a "Higher Order Block" to include a background color change functionality.
            </div>
        ];
    },

    save(props) {
        // const className = getBlockDefaultClassName('guty-blocks-2/some-block');
        // const { } = props.attributes;

        return (
            <div>
                This block is using a "Higher Order Block" to include a background color change functionality.
            </div>
        );
    },
};

registerBlockType('guty-blocks-2/some-block', BackgroundWrapper(config));
