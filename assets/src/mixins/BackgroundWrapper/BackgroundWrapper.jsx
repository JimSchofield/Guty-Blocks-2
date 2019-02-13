import react from 'react';

// In guty blocks 2 if I import a *.view.css file it will
// simply be included, so I can include commonly used css here!
import './BackgroundWrapper.view.scss';

// We won't assume that blocks have these things, so we need to make sure
// to import them from WordPress
const { InspectorControls } = wp.editor;
const { ColorPicker } = wp.components;

/**
 * Here is the magic.  This is simply a function.  It's taking a block config object
 * (The second argument of 'registerBlockType'), keeping some things, and adding
 * other things to it.  It returns an extended block config object.
 */
const BackgroundWrapper = (blockConfig) => {
     const wrappedConfig = {
         // Keep things from the original!
        title: blockConfig.title,
        icon: blockConfig.icon,
        category: blockConfig.category,

        // We merge in the attributes we need so we don't
        // have to define them in the original block!
        attributes: {
            backgroundColor: {
                type: 'string'
            },
            ...blockConfig.attributes
        },

        // Here we create an edit function that runs ANOTHER edit
        // function from the original block!
        edit(props) {
            const { setAttributes } = props;
            const { backgroundColor } = props.attributes;

            function changeBackgroundColor({rgb}) {
                setAttributes({ backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a}` });
            }

            return ([
                <InspectorControls>
                    <ColorPicker
                        color={backgroundColor}
                        onChangeComplete={(value) => changeBackgroundColor(value)}
                        />
                </InspectorControls>,
                <div className="backgroundWrapper" style={{ background: backgroundColor}}>
                    {/* Since 'edit' is just a function, we make sure to run the original block
                    function here so the original block rendering shows up! */}
                    {blockConfig.edit(props)}
                </div>
                ]
            );
        },

        // Same thing here.  We run a save function that runs the original block
        // save function inside it!
        save(props) {

            const { backgroundColor } = props.attributes;

            return (
                <div className="backgroundWrapper" style={{ background: backgroundColor}}>
                    {blockConfig.save(props)}
                </div> 
            );
        }
    }

    // Important!  We need to pass on the modified block config object!
    return wrappedConfig;
}

export default BackgroundWrapper;