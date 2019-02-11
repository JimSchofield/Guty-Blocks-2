import './render-props-background.view.scss';
import './render-props-background.editor.scss';

const { registerBlockType } = wp.blocks;

const { InspectorControls } = wp.editor;

import BackgroundRenderProps from '../mixins/BackgroundRenderProp/BackgroundRenderProp.jsx';

registerBlockType('guty-blocks-2/render-props-background', {
    title: 'Some other block!',
    icon: 'smiley',
    category: 'common',

    attributes: {
        backgroundColor: {
            type: 'string',
            default: null,
        }
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { backgroundColor } = props.attributes;

        function changeBackgroundColor(value) {
            console.log(value);
            setAttributes({ backgroundColor: value });
        }

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
            <BackgroundRenderProps
                backgroundColor={backgroundColor}
                handleColorChange={(value) => changeBackgroundColor(value)}
                render={() => {
                    return (
                        <div className={className}>
                            This block is including a background functionality that is using a render prop.
                        </div>
                    );
            }} />
        ];
    },

    save(props) {
        const { backgroundColor } = props.attributes;

        return (
            <BackgroundRenderProps
                render={() => {
                    return (
                        <div>
                            This block is including a background functionality that is using a render prop.
                        </div>
                    );
            }} />
        );
    },
});
