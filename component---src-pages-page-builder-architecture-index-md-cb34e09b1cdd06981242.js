"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[9405],{23318:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return u}});var n=a(87462),r=a(45987),o=(a(35776),a(3905)),i=a(91515);const d=["components"],m={},l=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var p;const s={_frontmatter:m},c=i.Z;function u(e){let{components:t}=e,a=(0,r.Z)(e,d);return(0,o.mdx)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"page-builder-architecture"},"Page Builder Architecture"),(0,o.mdx)("p",null,"We wrote Page Builder in ",(0,o.mdx)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", a superset of JavaScript. Before each release, we transpile the TypeScript to JavaScript."),(0,o.mdx)("p",null,"Use the TypeScript components in the module as a reference to understand the flow of information."),(0,o.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"You do not need to use TypeScript in your module to work with the Page Builder code."),(0,o.mdx)("p",null,"Page Builder also uses core Adobe Commerce technologies such as jQuery, Knockout, and UI Components, along with additional libraries to help with various content types shipped with the module."),(0,o.mdx)("h2",{id:"storage-format"},"Storage format"),(0,o.mdx)("p",null,"Page Builder uses XHTML with inline styles and data attributes for storage and as the master format."),(0,o.mdx)("p",null,"This allows Page Builder to display content with minimum changes to the Commerce storefront and other third-party systems."),(0,o.mdx)("p",null,"Use the following steps to display Page Builder content on a Commerce storefront or third-party system:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Replace all Commerce directives such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"{{image url=path/to/image.png}}"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add custom stylesheet to provide the base styles that the user can't edit. This includes styles for the content types, such as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"slider")," and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"tabs"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"After the content renders, load and initialize the widgets and libraries on the frontend that need initialization, such as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"slider")," and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"tabs"),"."))),(0,o.mdx)("h2",{id:"integration-with-commerce-and-custom-modules"},"Integration with Commerce and custom modules"),(0,o.mdx)("p",null,"When you activate Page Builder, it replaces all WYSIWYG instances by intercepting the WYSIWYG UI Component field and replacing the traditional WYSIWYG editor with the Page Builder editor."),(0,o.mdx)("p",null,"This means you don't have to change your custom extensions if you're using UI components to implement their forms. However, if you don't want your module to use Page Builder for a specific field, you can revert to using the default WYSIWYG again by adding the following entry to the field in your XML configuration file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<item name="wysiwygConfigData" xsi:type="array">\n    <item name="is_pagebuilder_enabled" xsi:type="boolean">false</item>\n</item>\n')),(0,o.mdx)("h2",{id:"big-picture"},"Big picture"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"868px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.99999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/906922a04c56c92ef07d188a5b64f10e/5530d/big-picture.webp 320w","/commerce-frontend-core/static/906922a04c56c92ef07d188a5b64f10e/0c8fb/big-picture.webp 640w","/commerce-frontend-core/static/906922a04c56c92ef07d188a5b64f10e/cef0d/big-picture.webp 868w"],sizes:"(max-width: 868px) 100vw, 868px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/906922a04c56c92ef07d188a5b64f10e/dd4a7/big-picture.png 320w","/commerce-frontend-core/static/906922a04c56c92ef07d188a5b64f10e/0f09e/big-picture.png 640w","/commerce-frontend-core/static/906922a04c56c92ef07d188a5b64f10e/9a8ca/big-picture.png 868w"],sizes:"(max-width: 868px) 100vw, 868px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/906922a04c56c92ef07d188a5b64f10e/9a8ca/big-picture.png",alt:"Page Builder big picture",title:"Page Builder big picture",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Entity"),(0,o.mdx)("th",{parentName:"tr",align:null},"Name in configuration"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Content type"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"component")),(0,o.mdx)("td",{parentName:"tr",align:null},"View model responsible for rendering the preview and master format")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Preview component"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"preview_component")),(0,o.mdx)("td",{parentName:"tr",align:null},"Contains preview specific logic generic for all appearances. Preview component is optional")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Master component"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"master_component")),(0,o.mdx)("td",{parentName:"tr",align:null},"Contains master format rendering logic generic for all appearances. Master component is optional")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Data Store"),(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null},"Contains data for the content type")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Appearance"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"appearance")),(0,o.mdx)("td",{parentName:"tr",align:null},"Configuration for content type that defines look and behavior. Includes data mapping, form, templates, reader.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Preview template"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"preview_template")),(0,o.mdx)("td",{parentName:"tr",align:null},"Template used to display the element in the preview")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Master template"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"master_template")),(0,o.mdx)("td",{parentName:"tr",align:null},"Template used to render the content type to the master format")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Form"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"form")),(0,o.mdx)("td",{parentName:"tr",align:null},"Form used to edit attributes of the content type")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Reader"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"reader")),(0,o.mdx)("td",{parentName:"tr",align:null},"Reads data for the content type from the master format")))),(0,o.mdx)("h2",{id:"data-flow"},"Data flow"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1236px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6744c9bfc85ad70871a9778d65fde18a/5530d/data-flow.webp 320w","/commerce-frontend-core/static/6744c9bfc85ad70871a9778d65fde18a/0c8fb/data-flow.webp 640w","/commerce-frontend-core/static/6744c9bfc85ad70871a9778d65fde18a/0c34c/data-flow.webp 1236w"],sizes:"(max-width: 1236px) 100vw, 1236px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6744c9bfc85ad70871a9778d65fde18a/dd4a7/data-flow.png 320w","/commerce-frontend-core/static/6744c9bfc85ad70871a9778d65fde18a/0f09e/data-flow.png 640w","/commerce-frontend-core/static/6744c9bfc85ad70871a9778d65fde18a/baa93/data-flow.png 1236w"],sizes:"(max-width: 1236px) 100vw, 1236px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/6744c9bfc85ad70871a9778d65fde18a/baa93/data-flow.png",alt:"Page Builder data flow",title:"Page Builder data flow",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\nThe following is a simple overview of the data flow:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Page Builder's reader reads the data from associated elements in the persisted rendered output of the master format. It does this by traversing through the content type's DOM tree and searching for the associated elements declared in the content types definition XML. Then it uses the various attributes, styles, and other configurations to read the data from the specific area of the DOM element.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Page Builder's element converters convert the data for each data mapping entry to an internal supported format if required, this ensures the data collected from the DOM nodes is compatible with Page Builder's internal data store and UI component fields.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Page Builder's mass converters can change data for all content type elements, not just one. For more details, see ",(0,o.mdx)("a",{parentName:"p",href:"configurations.md"},"converter interface"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Page Builder creates its content types and populates the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_PageBuilder/js/data-store")," with data.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"End-users change the data in the data store within the form editor or when using the various live-editing options on the stage.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Page Builder converts the data using mass converters.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Page Builder converts the data using element data converters.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Page Builder updates the preview and master component observables.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Page Builder updates the stage with the associated data from the preview update.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Page Builder completes a render cycle of the master format, which updates the underlying textarea with the changed content.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"When the end-user saves the edited parent entity to the Page Builder instance (such as the CMS page or catalog product), Page Builder saves the rendered master format in the same way as any other content for the field."))),(0,o.mdx)("h3",{id:"mass-converter"},"Mass converter"),(0,o.mdx)("p",null,"A mass converter changes data for all content type elements, not just one. You must define mass converters per appearance."),(0,o.mdx)("p",null,"For example, the content type for two elements, main and image, has data stored in the fields ",(0,o.mdx)("inlineCode",{parentName:"p"},"border"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"border_color"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"border_width"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"background_image"),". A mass converter allows you to change all these fields, not just one of them."),(0,o.mdx)("p",null,"Any content type using background images will have a mass converter. In the following example, we use a mass converter to generate a JSON string for an attribute on an element for the storefront to render as a ",(0,o.mdx)("style",null)," block."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<converters>\n    <converter name="background_images" component="Magento_PageBuilder/js/mass-converter/background-images">\n        <config>\n            <item name="attribute_name" value="background_images"/>\n            <item name="desktop_image_variable" value="background_image"/>\n            <item name="mobile_image_variable" value="mobile_image"/>\n        </config>\n    </converter>\n</converters>\n')),(0,o.mdx)("p",null,"Here's the interface for these converters:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-typescript"},"interface ConverterInterface {\n    /**\n     * Process data after it's read and converted by element converters\n     *\n     * @param {ConverterDataInterface} data\n     * @param {ConverterConfigInterface} config\n     * @returns {object}\n     */\n    fromDom(data: ConverterDataInterface, config: ConverterConfigInterface): object;\n\n    /**\n     * Process data before it's converted by element converters\n     *\n     * @param {ConverterDataInterface} data\n     * @param {ConverterConfigInterface} config\n     * @returns {object}\n     */\n    toDom(data: ConverterDataInterface, config: ConverterConfigInterface): object;\n}\n")),(0,o.mdx)("p",null,"For more information, read about how Page Builder ",(0,o.mdx)("a",{parentName:"p",href:"#datastore"},"stores data"),"."),(0,o.mdx)("h3",{id:"element-converter"},"Element converter"),(0,o.mdx)("p",null,"An element converter changes a single field at a time."),(0,o.mdx)("p",null,"For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<element name="main">\n    <style name="display" source="display"\n           converter="Magento_PageBuilder/js/converter/style/display"\n           preview_converter="Magento_PageBuilder/js/converter/style/preview/display"/>\n</element>\n')),(0,o.mdx)("h2",{id:"datastore"},"Datastore"),(0,o.mdx)("p",null,"Page Builder stores data for content types in a simple object called the DataStore: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_PageBuilder/js/data-store"),"."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"name")," parameter from the ",(0,o.mdx)("a",{parentName:"p",href:"configurations.md"},"content type configuration")," (or ",(0,o.mdx)("inlineCode",{parentName:"p"},"storage_key")," if specified) is the name of a parameter in the DataStore. You can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"subscribe")," method to listen for changes in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DataStore")," and perform custom actions like updating the UI."),(0,o.mdx)("p",null,"This is how the system binds the data from the DataStore to your elements attribute or style. When you include a new attribute or style, you must specify where it should retrieve its data from the content type. These ",(0,o.mdx)("inlineCode",{parentName:"p"},"name")," values normally bind to the field names within UI component forms. The field names are the keys we use to save the data."),(0,o.mdx)("h2",{id:"content-type-configuration"},"Content type configuration"),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"configurations.md"},"content type configuration")," for more information."),(0,o.mdx)("h2",{id:"appearances"},"Appearances"),(0,o.mdx)("p",null,"Appearances provide several ways to customize your content types. For example, you can:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add new style properties to existing content types.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add new attributes to existing content types. This is similar to adding new style properties.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Change templates.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Move data between elements, by data-mapping within the content type's configuration file. For example, a developer can move the ",(0,o.mdx)("inlineCode",{parentName:"p"},"margin")," style property from one element to another.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Change the form for a ","[content type]","."))),(0,o.mdx)("h2",{id:"module-structure"},"Module structure"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"File type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Location"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Content type components"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Vendor/ModuleName/view/adminhtml/web/js/content-type/content-type-name"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Content type templates"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Vendor/ModuleName/view/adminhtml/web/template/content-type/content-type-name/appearance-name"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Styles"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Vendor/ModuleName/view/adminhtml/web/css/source/content-type/content-type-name"))))),(0,o.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"We have also considered introducing an appearance component and/or moving the initialization of the libraries to bindings. This would allow you to add custom logic per appearance changes and libraries per appearance for content types like the ",(0,o.mdx)("inlineCode",{parentName:"p"},"slider")," and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"tabs"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-architecture-index-md-cb34e09b1cdd06981242.js.map