import './__block__.view.scss';
import './__block__.editor.scss';

const { 
    registerBlockType,
    getBlockDefaultClassName
} = wp.blocks;

const { InspectorControls } = wp.editor;

registerBlockType('__namespace__/__block__', {
    title: '__prettyname__(noCase)',
    icon: '__icon__',
    category: '__category__',

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
                __prettyname__(noCase)
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('test/just-in-time-test-1');
        // const {  } = props.attributes;

        return (
            <div className={className}>
                __prettyname__(noCase)
            </div>
        );
    },
});
