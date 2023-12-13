"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[9470],{77128:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return s}});var a=n(87462),m=n(45987),o=(n(35776),n(3905)),l=n(91515);const r=["components"],i={},d={_frontmatter:i},p=l.Z;function s(e){let{components:t}=e,n=(0,m.Z)(e,r);return(0,o.mdx)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"htmlcontent-component"},"HtmlContent component"),(0,o.mdx)("p",null,"The HtmlContent UI component provides the ability to process and render a layout structure or a block directly inside a UI component configuration. Processing and rendering is executed on the server side."),(0,o.mdx)("p",null,"The layout structure inside HtmlContent must contain only one top-level block. The top-level block may contain as many child blocks or containers as required.\nAll blocks inside HtmlContent are integrated into the layout, so external blocks can refer to them and vice verse."),(0,o.mdx)("h2",{id:"options"},"Options"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Option"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"additionalClasses")),(0,o.mdx)("td",{parentName:"tr",align:null},"Sets custom classes to the component's DOM block."),(0,o.mdx)("td",{parentName:"tr",align:null},"Object"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"{}"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"class")),(0,o.mdx)("td",{parentName:"tr",align:null},"The path to the component class."),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Magento\\Ui\\Component\\HtmlContent"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"component")),(0,o.mdx)("td",{parentName:"tr",align:null},"The path to the component’s JS constructor in terms of RequireJS."),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Magento_Ui/js/form/components/html"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"content")),(0,o.mdx)("td",{parentName:"tr",align:null},"HTML content to be displayed."),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"''"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"template")),(0,o.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,o.mdx)("inlineCode",{parentName:"td"},".html")," template."),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"ui/content/content"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"visible")),(0,o.mdx)("td",{parentName:"tr",align:null},'Initial component\'s visibility. When set to "false", the ',(0,o.mdx)("inlineCode",{parentName:"td"},"display: none")," CSS style is added to the component's DOM block."),(0,o.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"true"))))),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)("h3",{id:"render-layout"},"Render layout"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">\n    <htmlContent name="customer_edit_tab_view">\n       <block class="Magento\\Customer\\Block\\Adminhtml\\Edit\\Tab\\View" name="customer_edit_tab_view" template="Magento_Customer::tab/view.phtml">\n         <arguments>\n                <argument name="sort_order" xsi:type="number">10</argument>\n                <argument name="tab_label" xsi:type="string" translate="true">Customer View</argument>\n         </arguments>\n         <block class="Magento\\Customer\\Block\\Adminhtml\\Edit\\Tab\\View\\PersonalInfo" name="personal_info" template="Magento_Customer::tab/view/personal_info.phtml"/>\n       </block>\n    </htmlContent>\n</form>\n')),(0,o.mdx)("h3",{id:"render-simple-block"},"Render simple block"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">\n    <htmlContent name="giftregistry">\n        <block class="Magento\\GiftRegistry\\Block\\Adminhtml\\Customer\\Edit\\Tab\\Giftregistry" name="giftregistry"/>\n    </htmlContent>\n</form>\n')),(0,o.mdx)("h3",{id:"integration"},"Integration"),(0,o.mdx)("p",null,"This example integrates the HtmlContent component with the ",(0,o.mdx)("a",{parentName:"p",href:"form.md"},"Form")," component."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<form>\n    <htmlContent name="html_content">\n        <settings>\n            <additionalClasses>\n                <class name="html-content-class">true</class>\n            </additionalClasses>\n        </settings>\n        <block name="html_content_block" class="Magento\\Backend\\Block\\Template">\n            <arguments>\n                <argument name="template" xsi:type="string">Vendor_Module::template.phtml</argument>\n            </arguments>\n        </block>\n    </htmlContent>\n</form>\n')),(0,o.mdx)("p",null,"Template ",(0,o.mdx)("inlineCode",{parentName:"p"},"Vendor/Module/view/adminhtml/templates/template.phtml"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/** @var \\Magento\\Framework\\Escaper $escaper */\n?>\n\n<div>\n    <b><?= $escaper->escapeHtml(__('Custom template.')); ?></b>\n</div>\n")),(0,o.mdx)("h4",{id:"result"},"Result"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"13.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f273256e4b17e6f08d5eae8b597f3e41/5530d/ui-htmlcontent-result.webp 320w","/commerce-frontend-core/static/f273256e4b17e6f08d5eae8b597f3e41/0c8fb/ui-htmlcontent-result.webp 640w","/commerce-frontend-core/static/f273256e4b17e6f08d5eae8b597f3e41/94b1e/ui-htmlcontent-result.webp 1280w","/commerce-frontend-core/static/f273256e4b17e6f08d5eae8b597f3e41/61637/ui-htmlcontent-result.webp 1708w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f273256e4b17e6f08d5eae8b597f3e41/dd4a7/ui-htmlcontent-result.png 320w","/commerce-frontend-core/static/f273256e4b17e6f08d5eae8b597f3e41/0f09e/ui-htmlcontent-result.png 640w","/commerce-frontend-core/static/f273256e4b17e6f08d5eae8b597f3e41/bbbf7/ui-htmlcontent-result.png 1280w","/commerce-frontend-core/static/f273256e4b17e6f08d5eae8b597f3e41/9c796/ui-htmlcontent-result.png 1708w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/f273256e4b17e6f08d5eae8b597f3e41/bbbf7/ui-htmlcontent-result.png",alt:"HtmlContent Component example",title:"HtmlContent Component example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"source-files"},"Source files"),(0,o.mdx)("p",null,"Extends ",(0,o.mdx)("inlineCode",{parentName:"p"},"uiComponent"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/components/html.js"},"app/code/Magento/Ui/view/base/web/js/form/components/html.js")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/content/content.html"},"app/code/Magento/Ui/view/base/web/templates/content/content.html")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/Component/HtmlContent.php"},"app/code/Magento/Ui/Component/HtmlContent.php"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-html-content-md-b24284924d4e2c783d7e.js.map