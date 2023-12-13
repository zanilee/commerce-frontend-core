"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[5578],{2308:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return d}});var a=n(87462),i=n(45987),o=(n(35776),n(3905)),r=n(91515);const l=["components"],s={},p={_frontmatter:s},m=r.Z;function d(e){let{components:t}=e,n=(0,i.Z)(e,l);return(0,o.mdx)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"sortable-widget"},"Sortable widget"),(0,o.mdx)("p",null,"The Sortable widget is a customized jQuery ",(0,o.mdx)("a",{parentName:"p",href:"https://api.jqueryui.com/sortable/"},"Sortable Widget")," that allows you to reorder sortable items using ",(0,o.mdx)("em",{parentName:"p"},"Up")," and ",(0,o.mdx)("em",{parentName:"p"},"Down")," buttons."),(0,o.mdx)("p",null,"The Sortable widget is only available in the adminhtml area."),(0,o.mdx)("p",null,"The widget source file is ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Theme/view/adminhtml/web/js/sortable.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"<Magento_Theme_module_dir>/view/adminhtml/web/js/sortable.js")),"."),(0,o.mdx)("h2",{id:"initialize"},"Initialize"),(0,o.mdx)("p",null,"For information about how to initialize a widget in a JS component or ",(0,o.mdx)("inlineCode",{parentName:"p"},".phtml")," template, see the ",(0,o.mdx)("a",{parentName:"p",href:"../init.md"},"Initialize JavaScript")," topic."),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"sortable()")," function to instantiate the Sortable widget:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#sortable').sortable();\n")),(0,o.mdx)("p",null,"Where:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"#sortable")," is the selector of the block element where Sortable is initialized.")),(0,o.mdx)("p",null,"The following example shows a PHTML file using the script:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},"<script>\n    require([\n            'jquery',\n            'Magento_Theme/js/sortable'\n        ], function ($) {\n            'use strict';\n\n            $('#sortable').sortable();\n        });\n<\/script>\n")),(0,o.mdx)("h2",{id:"methods-options-and-events-inheritance"},"Methods, options, and events inheritance"),(0,o.mdx)("p",null,"Most options, methods, and events for the Sortable widget correspond to the jQuery ",(0,o.mdx)("a",{parentName:"p",href:"https://api.jqueryui.com/sortable/"},"Sortable Widget")," options."),(0,o.mdx)("h2",{id:"options"},"Options"),(0,o.mdx)("h3",{id:"moveupevent"},(0,o.mdx)("inlineCode",{parentName:"h3"},"moveUpEvent")),(0,o.mdx)("p",null,"The name of the event which moves a sortable item up."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"'moveUp'")),(0,o.mdx)("h3",{id:"movedownevent"},(0,o.mdx)("inlineCode",{parentName:"h3"},"moveDownEvent")),(0,o.mdx)("p",null,"The name of the event which moves a sortable item down."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"'moveDown'")),(0,o.mdx)("h2",{id:"code-sample"},"Code sample"),(0,o.mdx)("p",null,"This example shows how to initialize the sortable widget."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},'<ul id="sortable-list">\n    <li>\n        <div>\n            <span>Sortable Item #1</span>\n        </div>\n        <input type="button" class="up" title="Up" value="Up">\n        <input type="button" class="down" title="Down" value="Down">\n    </li>\n    <li>\n        <div>\n            <span>Sortable Item #2</span>\n        </div>\n        <input type="button" class="up" title="Up" value="Up">\n        <input type="button" class="down" title="Down" value="Down">\n    </li>\n    <li>\n        <div>\n            <span>Sortable Item #3</span>\n        </div>\n        <input type="button" class="up" title="Up" value="Up">\n        <input type="button" class="down" title="Down" value="Down">\n    </li>\n</ul>\n\n<script>\nrequire([\n    "jquery",\n    "jquery/ui",\n    "Magento_Theme/js/sortable"\n], function ($) {\n    \'use strict\';\n\n    $(\'#sortable-list\').sortable({\n       axis: \'y\',\n       tolerance: \'pointer\',\n       items: \'li\'\n    });\n});\n<\/script>\n')),(0,o.mdx)("h3",{id:"result"},"Result"),(0,o.mdx)("p",null,"As a result, we see the list of sortable items that can be sorted via ",(0,o.mdx)("em",{parentName:"p"},"Up"),", ",(0,o.mdx)("em",{parentName:"p"},"Down")," buttons or via dragging."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"199px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.87939698492463%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6f019da0056d6683da12dfcdc87dd49d/cb05f/sortable-widget-initial-result.webp 199w"],sizes:"(max-width: 199px) 100vw, 199px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6f019da0056d6683da12dfcdc87dd49d/04c23/sortable-widget-initial-result.png 199w"],sizes:"(max-width: 199px) 100vw, 199px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/6f019da0056d6683da12dfcdc87dd49d/04c23/sortable-widget-initial-result.png",alt:"Sortable widget initial view Example",title:"Sortable widget initial view Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"203px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.38423645320196%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3b2b275ca6ddcb90d29c7113a5498104/3466e/sortable-widget-sorted-result.webp 203w"],sizes:"(max-width: 203px) 100vw, 203px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3b2b275ca6ddcb90d29c7113a5498104/187ee/sortable-widget-sorted-result.png 203w"],sizes:"(max-width: 203px) 100vw, 203px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/3b2b275ca6ddcb90d29c7113a5498104/187ee/sortable-widget-sorted-result.png",alt:"Sortable widget sorted view Example",title:"Sortable widget sorted view Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-sortable-md-1ee0ff081af5abf44b41.js.map