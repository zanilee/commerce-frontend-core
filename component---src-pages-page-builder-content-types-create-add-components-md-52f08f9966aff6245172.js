"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7220],{9831:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var o=n(87462),a=n(45987),i=(n(35776),n(3905)),r=n(91515);const p=["components"],m={},d=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var s;const l={_frontmatter:m},c=r.Z;function u(e){let{components:t}=e,n=(0,a.Z)(e,p);return(0,i.mdx)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"add-components"},"Add components"),(0,i.mdx)("p",null,"In this step, we will create a preview component in order to customize the options menu for our Quote. The options menu is the popup menu that appears when you mouseover a content type, as shown here:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"282px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.81560283687945%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/b48d110d6ebbc462f40803e2b9607da4/84ee0/options-menu-default.webp 282w"],sizes:"(max-width: 282px) 100vw, 282px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/b48d110d6ebbc462f40803e2b9607da4/75fda/options-menu-default.png 282w"],sizes:"(max-width: 282px) 100vw, 282px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/b48d110d6ebbc462f40803e2b9607da4/75fda/options-menu-default.png",alt:"Create config file",title:"Create config file",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"The options menu provides end-users with several functions, including a button to open the content type's form editor, which we will add in ",(0,i.mdx)("a",{parentName:"p",href:"add-form.md"},"Add form"),"."),(0,i.mdx)("h2",{id:"about-components"},"About components"),(0,i.mdx)("p",null,"Components are JavaScript files that define the behaviors of your content type when they appear on the Admin stage (using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"preview.js")," component) and in the storefront (using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"master.js")," component). As such, they are complementary to the templates you added previously in Step 2, acting as the view models to the template's views."),(0,i.mdx)("p",null,"Adding custom component files to your content types is completely optional. Whether you need one or not will depend on the complexity of your content type. If you do not add components to your content type, Page Builder will use these defaults:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Default preview component: ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_PageBuilder/js/content-type/preview"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Default master component: ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_PageBuilder/js/content-type/master")))),(0,i.mdx)("p",null,"When you start developing more complex content types, you will need to create custom preview components in order to make these and other functions available on the Admin stage:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Initiating and using additional 3rd party libraries like sliders and tabs.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Adding image uploader support.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Providing dynamic data into your preview templates from the back-end.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Allowing the back-end to conduct rendering (such as our block and dynamic block content types).")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Declaring special states based on the data stored, for example, showing a disabled state when certain fields are set to specific values."))),(0,i.mdx)("p",null,"Examples of implementing these functions will be added to future tutorials and other topics in this documentation."),(0,i.mdx)("p",null,"Adding your own master component is far less common. The master component is only necessary if you want to manipulate the final output of your content type before it is persisted to the database."),(0,i.mdx)("h2",{id:"component-conventions"},"Component conventions"),(0,i.mdx)("p",null,"The conventions for naming your components and adding them to your module are as follows:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Your preview component must be named ",(0,i.mdx)("inlineCode",{parentName:"li"},"preview.js")," and placed here in your module (",(0,i.mdx)("inlineCode",{parentName:"li"},"view/adminhtml/web/js/content-type/example-quote/"),"):")),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"518px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/06dcc7bdac27728d21e0d1be8b8429e1/5530d/step3-add-component.webp 320w","/commerce-frontend-core/static/06dcc7bdac27728d21e0d1be8b8429e1/cfda6/step3-add-component.webp 518w"],sizes:"(max-width: 518px) 100vw, 518px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/06dcc7bdac27728d21e0d1be8b8429e1/dd4a7/step3-add-component.png 320w","/commerce-frontend-core/static/06dcc7bdac27728d21e0d1be8b8429e1/2f227/step3-add-component.png 518w"],sizes:"(max-width: 518px) 100vw, 518px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/06dcc7bdac27728d21e0d1be8b8429e1/2f227/step3-add-component.png",alt:"Create config file",title:"Create config file",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Your master component must be named ",(0,i.mdx)("inlineCode",{parentName:"p"},"master.js")," and placed here in your module (",(0,i.mdx)("inlineCode",{parentName:"p"},"view/frontend/web/js/content-type/example-quote/"),"):"),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"518px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/22c52793bac34ed5856f7fa83435b0c2/5530d/step3-add-master-component.webp 320w","/commerce-frontend-core/static/22c52793bac34ed5856f7fa83435b0c2/cfda6/step3-add-master-component.webp 518w"],sizes:"(max-width: 518px) 100vw, 518px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/22c52793bac34ed5856f7fa83435b0c2/dd4a7/step3-add-master-component.png 320w","/commerce-frontend-core/static/22c52793bac34ed5856f7fa83435b0c2/2f227/step3-add-master-component.png 518w"],sizes:"(max-width: 518px) 100vw, 518px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/22c52793bac34ed5856f7fa83435b0c2/2f227/step3-add-master-component.png",alt:"Create config file",title:"Create config file",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,i.mdx)("p",null,"We will not create a master component for our Quote example, but the location is given here if you need to include one for more complex content types."),(0,i.mdx)("p",null,"Before continuing, add the preview component file (",(0,i.mdx)("inlineCode",{parentName:"p"},"preview.js"),") to your ",(0,i.mdx)("inlineCode",{parentName:"p"},"PageBuilderQuote")," module within the directory structure noted."),(0,i.mdx)("h2",{id:"component-configuration"},"Component configuration"),(0,i.mdx)("p",null,"In your configuration file, reference your Admin ",(0,i.mdx)("inlineCode",{parentName:"p"},"preview_component")," (",(0,i.mdx)("inlineCode",{parentName:"p"},"preview.js"),") as shown here:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_PageBuilder:etc/content_type.xsd">\n    <type name="example_quote"\n        label="Quote"\n        component="Magento_PageBuilder/js/content-type"\n        preview_component="Example_PageBuilderQuote/js/content-type/example_quote/preview"\n        master_component="Magento_PageBuilder/js/content-type/master">\n        ...\n    </type>\n</config>\n')),(0,i.mdx)("p",null,"A description of each component-related attribute from the Quote configuration follows:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"component")),(0,i.mdx)("td",{parentName:"tr",align:null},"Page Builder provides two component types to choose from: ",(0,i.mdx)("inlineCode",{parentName:"td"},"content-type")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"content-type-collection"),". Use ",(0,i.mdx)("inlineCode",{parentName:"td"},"Magento_PageBuilder/js/content-type")," for static content types that do not have children (like our Quote). Use ",(0,i.mdx)("inlineCode",{parentName:"td"},"Magento_PageBuilder/js/content-type-collection")," for content types that can contain children (container content types). You can also create and specify your own component implementations, provided they conform to the Page Builder interfaces.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"preview_component")),(0,i.mdx)("td",{parentName:"tr",align:null},"Optional. The ",(0,i.mdx)("inlineCode",{parentName:"td"},"preview.js")," file provides rendering logic to the Admin preview template. If your content type does not require any changes to Page Builder's standard rendering logic, you can omit this attribute from the the ",(0,i.mdx)("inlineCode",{parentName:"td"},"type")," element. When you omit the attribute, Page Builder will use ",(0,i.mdx)("inlineCode",{parentName:"td"},"Magento_PageBuilder/js/content-type/preview")," by default.",(0,i.mdx)("br",null),(0,i.mdx)("br",null),"However, if you want to make changes to the option menu for your content type, or other customize other user-interactivity in the Admin, you need to create your own preview component as we have done for the Quote content type.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"master_component")),(0,i.mdx)("td",{parentName:"tr",align:null},"Optional. The ",(0,i.mdx)("inlineCode",{parentName:"td"},"master.js")," file provides rendering logic to the master format storefront template. As with the ",(0,i.mdx)("inlineCode",{parentName:"td"},"preview_component"),", if your content type does not require any specific user-interactivity or other behavior when it's displayed in the storefront, you can simply omit this attribute from the the ",(0,i.mdx)("inlineCode",{parentName:"td"},"type")," element. When you omit the attribute, Page Builder will use ",(0,i.mdx)("inlineCode",{parentName:"td"},"Magento_PageBuilder/js/content-type/master")," by default. ",(0,i.mdx)("br",null),(0,i.mdx)("br",null),"In the Quote configuration, the ",(0,i.mdx)("inlineCode",{parentName:"td"},"master_component")," attribute is only included for discussion. It simply points to the Page Builder default ",(0,i.mdx)("inlineCode",{parentName:"td"},"master.js")," component that would be used the attribute was omitted.")))),(0,i.mdx)("h2",{id:"quote-preview_component"},"Quote ",(0,i.mdx)("inlineCode",{parentName:"h2"},"preview_component")),(0,i.mdx)("p",null,"The Quote ",(0,i.mdx)("inlineCode",{parentName:"p"},"preview_component"),"  (",(0,i.mdx)("inlineCode",{parentName:"p"},"preview.js"),") example is shown here in full for you to copy into your ",(0,i.mdx)("inlineCode",{parentName:"p"},"preview.js")," file, followed by an explanation of its key parts."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'define([\n  \'Magento_PageBuilder/js/content-type/preview\',\n], function (PreviewBase) {\n    \'use strict\';\n    var $super;\n\n    function Preview(parent, config, stageId) {\n    PreviewBase.call(this, parent, config, stageId);\n    }\n\n    Preview.prototype = Object.create(PreviewBase.prototype);\n    $super = PreviewBase.prototype;\n\n    Preview.prototype.retrieveOptions = function retrieveOptions() {\n    var options = $super.retrieveOptions.call(this, arguments);\n\n    // Change option menu icons\n    options.remove.icon = "<i class=\'icon-admin-pagebuilder-error\'></i>";\n\n    // Change tooltips\n    options.edit.title = "Open Editor";\n    options.remove.title = "Delete";\n    // options.move.title = "Move";\n    // options.duplicate.title = "Duplicate";\n\n    // Remove menu options\n    // delete options.move;\n    // delete options.duplicate;\n    // delete options.edit;\n    // delete options.remove;\n\n    return options;\n    };\n    return Preview;\n});\n')),(0,i.mdx)("h3",{id:"extend-from-preview"},"Extend from ",(0,i.mdx)("inlineCode",{parentName:"h3"},"Preview")),(0,i.mdx)("p",null,"The first thing we do in our preview component is extend Page Builder's ",(0,i.mdx)("inlineCode",{parentName:"p"},"Preview")," class (",(0,i.mdx)("inlineCode",{parentName:"p"},"magento2-page-builder/app/code/Magento/PageBuilder/view/adminhtml/web/ts/js/content-type/preview.ts"),") by declaring it as a dependency and calling it from the preview component's constructor as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"define([\n  'Magento_PageBuilder/js/content-type/preview',\n], function (PreviewBase) {\n    'use strict';\n    var $super;\n\n    function Preview(parent, config, stageId) {\n    PreviewBase.call(this, parent, config, stageId);\n    }\n\n    Preview.prototype = Object.create(PreviewBase.prototype);\n    $super = PreviewBase.prototype;\n")),(0,i.mdx)("p",null,"You don't have to extend ",(0,i.mdx)("inlineCode",{parentName:"p"},"Preview")," this way, but if you do, you get access to both its public and protected functions. In our Quote example, we need access to one protected function, discussed next."),(0,i.mdx)("h3",{id:"customize-the-options-menu"},"Customize the options menu"),(0,i.mdx)("p",null,"Our goal for the Quote preview component is to customize the default Page Builder options menu for a content type, as shown here:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"282px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.81560283687945%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/b48d110d6ebbc462f40803e2b9607da4/84ee0/options-menu-default.webp 282w"],sizes:"(max-width: 282px) 100vw, 282px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/b48d110d6ebbc462f40803e2b9607da4/75fda/options-menu-default.png 282w"],sizes:"(max-width: 282px) 100vw, 282px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/b48d110d6ebbc462f40803e2b9607da4/75fda/options-menu-default.png",alt:"Create config file",title:"Create config file",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"To do this, we need to override the protected ",(0,i.mdx)("inlineCode",{parentName:"p"},"retrieveOptions()")," function from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Preview")," class so we can change various options as shown here:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'Preview.prototype.retrieveOptions = function retrieveOptions() {\n    var options = $super.retrieveOptions.call(this, arguments);\n\n    // Change option menu icons\n    options.remove.icon = "<i class=\'icon-admin-pagebuilder-error\'></i>";\n\n    // Change tooltips\n    options.edit.title = "Open Editor";\n    options.remove.title = "Delete";\n    // options.move.title = "Move";\n    // options.duplicate.title = "Duplicate";\n\n    // Remove menu options\n    // delete options.move;\n    // delete options.duplicate;\n    // delete options.edit;\n    // delete options.remove;\n\n    return options;\n};\n')),(0,i.mdx)("p",null,"In the preceding code, we made changes to the options menu icons and tooltips. You can also remove options from the menu. For example, if you don't want end-users to move or duplicate your content type, you can remove those options from your menu using ",(0,i.mdx)("inlineCode",{parentName:"p"},"delete options.move")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"delete options.duplicate")," as shown commented out in the code."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"289px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"83.39100346020761%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/1794196a7769e074d71824fe43bc365d/eca08/options-menu-custom.webp 289w"],sizes:"(max-width: 289px) 100vw, 289px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/1794196a7769e074d71824fe43bc365d/3b5c2/options-menu-custom.png 289w"],sizes:"(max-width: 289px) 100vw, 289px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/1794196a7769e074d71824fe43bc365d/3b5c2/options-menu-custom.png",alt:"Create config file",title:"Create config file",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Even though you can change the base option menu properties as described, we suggest you stick the the default options as much as possible to provide end-users with a consistent experience across Adobe Commerce's content types and other third-party content types that are included as time goes on."),(0,i.mdx)("h2",{id:"quote-master_component"},"Quote ",(0,i.mdx)("inlineCode",{parentName:"h2"},"master_component")),(0,i.mdx)("p",null,"As mentioned previously, our Quote content type has no need for a master component. We are using Page Builder's default master component file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_PageBuilder/js/content-type/master"),"."),(0,i.mdx)("h2",{id:"next"},"Next"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"add-form.md"},"Add form")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-content-types-create-add-components-md-52f08f9966aff6245172.js.map