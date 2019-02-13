import './render-props-background.view.scss';
import './render-props-background.editor.scss';

const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;

// Pull in our render props component!!
import BackgroundRenderProps from '../mixins/BackgroundRenderProp/BackgroundRenderProp.jsx';

registerBlockType('guty-blocks-2/render-props-background', {
    title: 'Some other block!',
    icon: 'smiley',
    category: 'common',

    // We do have to make a background color attribute to save our selection
    // This is the downside of render props- this block needs to set up 
    // this attribute
    attributes: {
        backgroundColor: {
            type: 'string',
            default: null,
        }
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { backgroundColor } = props.attributes;

        // I like pulling out the update functions to keep things tidy
        function changeBackgroundColor(value) {
            setAttributes({ backgroundColor: value });
        }

        return [
            <InspectorControls>
                {/* I include some options here to show that the options from the render props component
                get combined with any options from the block itself */}
                <div style={{ padding: '1em 0' }} >
                    Options
                </div>
            </InspectorControls>,
            // This component expects the current background Color, a function to handle colors changing,
            // and the render part is what should be wrapped
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
            // The nice thing is that we basically can include everything from the edit method
            // and not include any interactive functions
            <BackgroundRenderProps
                backgroundColor={backgroundColor}
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
