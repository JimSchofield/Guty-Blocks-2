import React from 'react';

const { InspectorControls } = wp.editor;
const { ColorPicker } = wp.components;

const BackgroundRenderProp = (props) => {

    function changeToRGBA({ rgb }) {
        return `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
    }

    return ([
        <InspectorControls>
            <ColorPicker
                onChangeComplete={(value) => props.handleColorChange(changeToRGBA(value))}
                />
        </InspectorControls>,
        <div class="backgroundWrapper" style={{background: props.backgroundColor}}>
            {props.render()}
        </div>
    ])
}

export default BackgroundRenderProp;