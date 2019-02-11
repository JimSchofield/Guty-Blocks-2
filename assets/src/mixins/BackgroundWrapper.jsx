import react from 'react';

import './BackgroundWrapper.view.scss';

const { InspectorControls } = wp.editor;
const { ColorPicker } = wp.components;

const BackgroundWrapper = (blockConfig) => {
     const wrappedConfig = {
        title: blockConfig.title,
        icon: blockConfig.icon,
        category: blockConfig.category,
        attributes: {
            backgroundColor: {
                type: 'string'
            },
            ...blockConfig.attributes
        },
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
                    {blockConfig.edit(props)}
                </div>
                ]
            );
        },
        save(props) {

            const { backgroundColor } = props.attributes;

            return (
                <div className="backgroundWrapper" style={{ background: backgroundColor}}>
                    {blockConfig.save(props)}
                </div> 
            );
        }
    }

    return wrappedConfig;
}

export default BackgroundWrapper;