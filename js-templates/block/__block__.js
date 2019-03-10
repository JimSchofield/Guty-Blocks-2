import './__block__.view.scss';
import './__block__.editor.scss';

const {
    registerBlockType,
} = wp.blocks;

const { 
    InspectorControls,
    RichText
} = wp.editor;

registerBlockType('__namespace__/__block__', {
    title: '__prettyname__(noCase)',
    icon: '__icon__',
    category: '__category__',

    supports: {
        align: true,
    },

    attributes: {
        align: true,
    },

    edit(props) {
        const { className, setAttributes } = props;
        // const {  } = props.attributes;

        return [
            <InspectorControls>
                <div style={{padding: '1em 0'}}>
                    Options
                </div>
            </InspectorControls>,
            <div className={className}>
                __prettyname__(noCase)
            </div>,
        ];
    },

    save(props) {
        // const className = getBlockDefaultClassName('__namespace__/__block__'); // For use with say, BEM
        // const {  } = props.attributes;

        return (
            <div>
                __prettyname__(noCase)
            </div>
        );
    },
});
