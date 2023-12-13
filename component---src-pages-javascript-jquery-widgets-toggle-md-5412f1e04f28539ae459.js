"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[3468],{15474:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return s}});var a=n(87462),l=n(45987),i=(n(35776),n(3905)),d=n(91515);const o=["components"],r={},m={_frontmatter:r},g=d.Z;function s(e){let{components:t}=e,n=(0,l.Z)(e,o);return(0,i.mdx)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"toggleadvanced-widget"},"ToggleAdvanced widget"),(0,i.mdx)("p",null,"Use the ToggleAdvanced widget to toggle the HTML class for selectors by clicking on a toggle element."),(0,i.mdx)("p",null,"The widget also allows toggling a clicked element class and clicked element text if an element is toggled."),(0,i.mdx)("p",null,"The ToggleAdvanced widget source is ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/web/mage/toggle.js"},"lib/web/mage/toggle.js"),"."),(0,i.mdx)("h2",{id:"initialize"},"Initialize"),(0,i.mdx)("p",null,"For information about how to initialize a widget in a JS component or ",(0,i.mdx)("inlineCode",{parentName:"p"},".phtml")," template, see the ",(0,i.mdx)("a",{parentName:"p",href:"../init.md"},"Initialize JavaScript")," topic."),(0,i.mdx)("p",null,"To instantiate the ToggleAdvanced widget:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'$("#element").toggleAdvanced();\n')),(0,i.mdx)("p",null,"Where:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"#element")," is the selector of the element for which ToggleAdvanced is initialized.")),(0,i.mdx)("p",null,"The following example shows a PHTML file using the script:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},"<script>\n    require([\n        'jquery',\n        'toggleAdvanced'\n    ], function ($) {\n        'use strict';\n\n        $(\"#element\").toggleAdvanced();\n    });\n<\/script>\n")),(0,i.mdx)("h2",{id:"options"},"Options"),(0,i.mdx)("h3",{id:"basetoggleclass"},(0,i.mdx)("inlineCode",{parentName:"h3"},"baseToggleClass")),(0,i.mdx)("p",null,"The class used to toggle on a clicked element."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"active")),(0,i.mdx)("h3",{id:"selectorstoggleclass"},(0,i.mdx)("inlineCode",{parentName:"h3"},"selectorsToggleClass")),(0,i.mdx)("p",null,"The class that will be toggled (added/removed) for selected DOM elements."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"hidden")),(0,i.mdx)("h3",{id:"togglecontainers"},(0,i.mdx)("inlineCode",{parentName:"h3"},"toggleContainers")),(0,i.mdx)("p",null,"The selectors of DOM elements that will be toggled."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")),(0,i.mdx)("h3",{id:"newlabel"},(0,i.mdx)("inlineCode",{parentName:"h3"},"newLabel")),(0,i.mdx)("p",null,"Text of the new label to be used on toggle."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")),(0,i.mdx)("h3",{id:"curlabel"},(0,i.mdx)("inlineCode",{parentName:"h3"},"curLabel")),(0,i.mdx)("p",null,"Text of the old label to be used on toggle."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")),(0,i.mdx)("h3",{id:"currentlabelelement"},(0,i.mdx)("inlineCode",{parentName:"h3"},"currentLabelElement")),(0,i.mdx)("p",null,"Container element of the current label."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")),(0,i.mdx)("h2",{id:"methods"},"Methods"),(0,i.mdx)("h3",{id:"beforecreate"},(0,i.mdx)("inlineCode",{parentName:"h3"},"beforeCreate")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"beforeCreate()")," method used to inject 3rd party functionality before creating."),(0,i.mdx)("h3",{id:"aftercreate"},(0,i.mdx)("inlineCode",{parentName:"h3"},"afterCreate")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"afterCreate()")," method used to inject 3rd party functionality after creating."),(0,i.mdx)("h2",{id:"code-sample"},"Code sample"),(0,i.mdx)("p",null,"The following example shows how to initialize the ToggleAdvanced widget."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<div class="toggle-example">\n    <div class="toggle-wrap">\n        <a href="#"\n           data-mage-init=\'{"toggleAdvanced": {"selectorsToggleClass": "active", "baseToggleClass": "expanded", "toggleContainers": "#toggleContainer", "newLabel": "Expanded Toggle Button"}}\'\n           id="toggle"\n           title="Title"\n           class="action">Toggle Button</a>\n    </div>\n    <div class="toggle-container" id="toggleContainer">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem, corporis ducimus ex in ipsam minima nisi nulla officiis omnis quae quaerat quasi quo ratione reiciendis rem repellendus temporibus, voluptates.</p>\n    </div>\n</div>\n')),(0,i.mdx)("h2",{id:"result"},"Result"),(0,i.mdx)("p",null,"The result is two sections with initial content and toggled content."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/5530d/toggle-widget-initial-result.webp 320w","/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/0c8fb/toggle-widget-initial-result.webp 640w","/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/94b1e/toggle-widget-initial-result.webp 1280w","/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/0b34d/toggle-widget-initial-result.webp 1920w","/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/dc056/toggle-widget-initial-result.webp 1994w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/dd4a7/toggle-widget-initial-result.png 320w","/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/0f09e/toggle-widget-initial-result.png 640w","/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/bbbf7/toggle-widget-initial-result.png 1280w","/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/ac7a9/toggle-widget-initial-result.png 1920w","/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/e877c/toggle-widget-initial-result.png 1994w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/8502899e57d70e0a60fc094a6b54088b/bbbf7/toggle-widget-initial-result.png",alt:"Toggle Widget Initial Result",title:"Toggle Widget Initial Result",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/5530d/toggle-widget-toggled-result.webp 320w","/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/0c8fb/toggle-widget-toggled-result.webp 640w","/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/94b1e/toggle-widget-toggled-result.webp 1280w","/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/0b34d/toggle-widget-toggled-result.webp 1920w","/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/33564/toggle-widget-toggled-result.webp 1990w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/dd4a7/toggle-widget-toggled-result.png 320w","/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/0f09e/toggle-widget-toggled-result.png 640w","/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/bbbf7/toggle-widget-toggled-result.png 1280w","/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/ac7a9/toggle-widget-toggled-result.png 1920w","/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/bd833/toggle-widget-toggled-result.png 1990w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/fd779b01e7e4f9c6ddd8b73826847788/bbbf7/toggle-widget-toggled-result.png",alt:"Toggle Widget Toggled Result",title:"Toggle Widget Toggled Result",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-toggle-md-5412f1e04f28539ae459.js.map