"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7853],{96378:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return s}});var n=t(87462),m=t(45987),o=(t(35776),t(3905)),i=t(91515);const p=["components"],l={},r={_frontmatter:l},d=i.Z;function s(e){let{components:a}=e,t=(0,m.Z)(e,p);return(0,o.mdx)(d,(0,n.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"imageuploader-component"},"ImageUploader component"),(0,o.mdx)("p",null,"The ImageUploader UI component gives users the ability to upload images to the Media Gallery."),(0,o.mdx)("p",null,"This component is a variation of the ",(0,o.mdx)("a",{parentName:"p",href:"file-uploader.md"},"FileUploader component")," and uses the same configuration settings."),(0,o.mdx)("h2",{id:"options"},"Options"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Title"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Default"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"openDialogTitle")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"---"),(0,o.mdx)("td",{parentName:"tr",align:null},"Defines the title that appears when opening the media browser dialog slideout.")))),(0,o.mdx)("h2",{id:"source-files"},"Source files"),(0,o.mdx)("p",null,"Extends ",(0,o.mdx)("a",{parentName:"p",href:"file-uploader.md"},(0,o.mdx)("inlineCode",{parentName:"a"},"FileUploader")),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/element/image-uploader.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/web/js/form/element/image-uploader.js"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/form/element/uploader/image.html"},(0,o.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/web/templates/form/element/uploader/image.html"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/ui_component/etc/definition/imageUploader.xsd"},(0,o.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/ui_component/etc/definition/imageUploader.xsd"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/Component/Form/Element/DataType/Media/Image.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/Component/Form/Element/DataType/Media/Image.php")))),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<form>\n    ...\n    <fieldset>\n        ...\n        <field name="imageUploaderExample" formElement="imageUploader">\n            <settings>\n                <notice translate="true">Some notice.</notice>\n                <label translate="true">Image Uploader Example</label>\n                <componentType>imageUploader</componentType>\n            </settings>\n            <formElements>\n                <imageUploader>\n                    <settings>\n                        <allowedExtensions>jpg jpeg gif png</allowedExtensions>\n                        <maxFileSize>2097152</maxFileSize>\n                        <uploaderConfig>\n                            <param xsi:type="string" name="url">path/to/save</param>\n                        </uploaderConfig>\n                    </settings>\n                </imageUploader>\n            </formElements>\n        </field>\n        ...\n    </fieldset>\n    ...\n</form>\n')),(0,o.mdx)("h2",{id:"result"},"Result"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"556px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/24b6a2b96e85d7e9517aa92810148139/5530d/ui-image-uploader-example.webp 320w","/commerce-frontend-core/static/24b6a2b96e85d7e9517aa92810148139/b4d04/ui-image-uploader-example.webp 556w"],sizes:"(max-width: 556px) 100vw, 556px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/24b6a2b96e85d7e9517aa92810148139/dd4a7/ui-image-uploader-example.png 320w","/commerce-frontend-core/static/24b6a2b96e85d7e9517aa92810148139/68b51/ui-image-uploader-example.png 556w"],sizes:"(max-width: 556px) 100vw, 556px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/24b6a2b96e85d7e9517aa92810148139/68b51/ui-image-uploader-example.png",alt:"ImageUploader Component Example",title:"ImageUploader Component Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-image-uploader-md-5b2021d8cdebe793e1fd.js.map