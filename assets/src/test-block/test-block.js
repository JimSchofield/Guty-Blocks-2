import './test-block.view.scss';
import './test-block.editor.scss';

const { registerBlockType } = wp.blocks;

const { InspectorControls } = wp.editor;

registerBlockType('guty-blocks-2/test-block', {
    title: 'This is a test block!',
    icon: 'smiley',
    category: 'common',

    attributes: { },

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
                This is a test block!
            </div>,
        ];
    },

    save(props) {
        const { className } = props;
        // const {  } = props.attributes;

        return (
            <div className={className}>
                This is a test block!
            </div>
        );
    },
});
