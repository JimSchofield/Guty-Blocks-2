import './media-block.view.scss';
import './media-block.editor.scss';

const {
    registerBlockType,
    getBlockDefaultClassName
} = wp.blocks;

const { 
    InspectorControls,
    RichText,
    MediaUpload
} = wp.editor;

registerBlockType('guty/media-block', {
    title: 'Media Block',
    icon: 'smiley',
    category: 'common',

    attributes: {
        bodyContent: {
            source: 'html',
            selector: '.copy-bd'
        },
        heading: {
            source: 'html',
            selector: 'h2',
        },
        imgUrl: {
            type: 'string',
            default: 'http://placehold.it/500'
        }
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { attributes } = props;

        // we create a function that will take the changes from RichText
        // and update the attributes
        function changeBodyContent(changes) {
            setAttributes({
                bodyContent: changes
            })
        }

        function changeHeading(heading) {
            // using some nice js features instead of typing
            // { heading: heading }
            setAttributes({ heading });
        }

        function selectImage(value) {
            console.log(value);
            setAttributes({
                imgUrl: value.sizes.full.url,
            })
        }

        return [
            <InspectorControls>
                {/* Later, when we have customizable options we will add stuff here! */}
                <div
                    style={{
                        padding: '1em 0',
                    }}
                >
                    Options
                </div>
            </InspectorControls>,
            <div className={className}>
                <div className="media">
                    <MediaUpload 
                        onSelect={selectImage}
                        render={ ({open}) => {
                            return (
                                <button onClick={open}>
                                    <img 
                                        src={attributes.imgUrl}
                                        />
                                </button>
                            );
                        }}
                    />
                </div>
                <div className="copy">
                    <RichText 
                            className="copy-hd"
                            tagName="h2"
                            placeholder="Enter your heading"
                            value={attributes.heading}
                            onChange={changeHeading}
                            />
                    {/* Content is replaced by this guy.
                    We determin the class name and the html tag that
                    we want it to show as. */}
                    <RichText 
                        className="copy-bd"
                        tagName="div"
                        placeholder="Enter your text here"
                        value={attributes.bodyContent}
                        onChange={changeBodyContent}
                        />
                </div>
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('guty/media-block');
        const { attributes } = props;

        return (
            <div className={className}>
                <div className="media">
                    <img src={attributes.imgUrl}/>
                </div>
                <div className="copy">
                    <RichText.Content 
                        class="copy-hd"
                        tagName="h2"
                        value={attributes.heading}
                        />
                    <RichText.Content 
                        className="copy-bd" 
                        tagName="div" 
                        value={attributes.bodyContent} 
                        />
                </div>
            </div>
        );
    },
});
