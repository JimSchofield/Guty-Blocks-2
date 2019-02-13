import React from 'react';

const { InspectorControls } = wp.editor;
const { ColorPicker } = wp.components;

// We can use a stateless functional component
// because all the state is stored and handled
// inside the block attributes!
const BackgroundRenderProp = (props) => {

    /*
    * This weirdness comes from the fact that the ColorPicker component
    * gives you an object with many representations of colors.  I pull
    * off the rgb object and return it as a string for simplicity
    */
    function changeToRGBA({ rgb }) {
        return `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
    }

    return ([
        // even though these Inspector controls are nested, they show up in the
        // sidebar just fine
        <InspectorControls>
            <ColorPicker
                onChangeComplete={(value) => props.handleColorChange(changeToRGBA(value))}
                />
        </InspectorControls>,
        <div class="backgroundWrapper" style={{background: props.backgroundColor}}>
            {/* Here is where the render props magic happens.  We pass in a function
            that will render out what we want here.  It's very similar to props.children.*/}
            {props.render()}
        </div>
    ])
}

export default BackgroundRenderProp;