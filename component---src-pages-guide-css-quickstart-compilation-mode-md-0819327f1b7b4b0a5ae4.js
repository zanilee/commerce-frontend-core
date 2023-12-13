"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[4079],{93186:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return x}});var n=t(87462),o=t(45987),r=(t(35776),t(3905)),i=t(91515);const s=["components"],d={},m=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var p;const c={_frontmatter:d},l=i.Z;function x(e){let{components:a}=e,t=(0,o.Z)(e,s);return(0,r.mdx)(l,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"compilation-mode"},"Compilation mode"),(0,r.mdx)("p",null,"After you ",(0,r.mdx)("a",{parentName:"p",href:"../../themes/create-storefront.md"},"create a theme"),", you need to decide which LESS compilation mode to use before changing styles. You can choose between ",(0,r.mdx)("a",{parentName:"p",href:"../preprocess.md"},"two modes"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Server-side compilation mode (default):")," less file is compiled with PHP less library. In developer mode, PHP will generate the CSS files on the fly provided there is not one already. Running static content deploy will compile the stylesheet.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Client-side compilation mode (recommended for theme development):"),' Less files are compiled client-side on every page load, which results in slow response times and "flash of unstyled text" (FOUT) issues.'))),(0,r.mdx)("p",null,"The examples in this topic use the ",(0,r.mdx)("a",{parentName:"p",href:"../quickstart/customize-styles.md#"},"simple approach")," for customizing theme styles. You make changes to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"_extend.less")," file."),(0,r.mdx)("p",null,"In our examples, we will change the color and font of the primary buttons. The default view of the primary buttons can be illustrated by the ",(0,r.mdx)("strong",{parentName:"p"},"Create an Account")," button view on the Customer login page:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"661px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/93aaa717e64baaa8da094dd60ab584c7/5530d/extend_less_screenshot21.webp 320w","/commerce-frontend-core/static/93aaa717e64baaa8da094dd60ab584c7/0c8fb/extend_less_screenshot21.webp 640w","/commerce-frontend-core/static/93aaa717e64baaa8da094dd60ab584c7/07833/extend_less_screenshot21.webp 661w"],sizes:"(max-width: 661px) 100vw, 661px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/93aaa717e64baaa8da094dd60ab584c7/dd4a7/extend_less_screenshot21.png 320w","/commerce-frontend-core/static/93aaa717e64baaa8da094dd60ab584c7/0f09e/extend_less_screenshot21.png 640w","/commerce-frontend-core/static/93aaa717e64baaa8da094dd60ab584c7/4128c/extend_less_screenshot21.png 661w"],sizes:"(max-width: 661px) 100vw, 661px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/93aaa717e64baaa8da094dd60ab584c7/4128c/extend_less_screenshot21.png",alt:"Admin login page with the default view of the primary buttons",title:"Admin login page with the default view of the primary buttons",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"../../themes/create-storefront.md"},"Create a theme"),". In your ",(0,r.mdx)("inlineCode",{parentName:"li"},"theme.xml")," file, specify Luma or Blank as the parent theme."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"../../themes/apply-storefront.md"},"Apply your theme")," in the Admin.")),(0,r.mdx)("h2",{id:"server-side-compilation-mode"},"Server-side compilation mode"),(0,r.mdx)("p",null,"The following is an illustration of how the process of making simple changes looks like with the server-side LESS compilation mode:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Navigate to your theme directory and add the ",(0,r.mdx)("inlineCode",{parentName:"p"},"web/css/source/_extend.less")," file.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Change the color of the buttons by adding the following code in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"_extend.less")," file:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-less"},".action {\n    &.primary {\n        background-color: palevioletred;\n        border-color: palevioletred;\n    }\n}\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"../../caching.md#clean-cache"},"Clean static files cache"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Refresh the page and verify your changes."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"649px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/5530d/extend_less_screenshot121.webp 320w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/0c8fb/extend_less_screenshot121.webp 640w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/d9dbb/extend_less_screenshot121.webp 649w"],sizes:"(max-width: 649px) 100vw, 649px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/dd4a7/extend_less_screenshot121.png 320w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/0f09e/extend_less_screenshot121.png 640w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/1bcec/extend_less_screenshot121.png 649w"],sizes:"(max-width: 649px) 100vw, 649px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/1bcec/extend_less_screenshot121.png",alt:"Less code redefining the color of the primary buttons",title:"Less code redefining the color of the primary buttons",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Change the button font size by adding the following code in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"_extend.less")," file:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-less"},".action {\n    &.primary {\n        background-color: palevioletred;\n        border-color: palevioletred;\n        font-size: 1.5em;\n    }\n}\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Delete all files in the following directories:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"pub/static/frontend/<vendor>/<theme>")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"var/view_preprocessed/pub/static/frontend/<vendor>/<theme>")))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Refresh the page and verify your changes."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"659px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/5530d/extend_less_screenshot221.webp 320w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/0c8fb/extend_less_screenshot221.webp 640w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/f67d4/extend_less_screenshot221.webp 659w"],sizes:"(max-width: 659px) 100vw, 659px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/dd4a7/extend_less_screenshot221.png 320w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/0f09e/extend_less_screenshot221.png 640w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/4978c/extend_less_screenshot221.png 659w"],sizes:"(max-width: 659px) 100vw, 659px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/4978c/extend_less_screenshot221.png",alt:"Admin login page where the font of the buttons was changed",title:"Admin login page where the font of the buttons was changed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,r.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"If you are using server-side compilation mode, you must ",(0,r.mdx)("a",{parentName:"p",href:"../../caching.md#clean-static-files"},"clean generated static view files"),". Continue to the next section to learn how to use Grunt to automate this process."),(0,r.mdx)("h2",{id:"server-side-compilation-mode-with-grunt"},"Server-side compilation mode with Grunt"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Navigate to your theme directory and create a ",(0,r.mdx)("inlineCode",{parentName:"p"},"web/css/source/_extend.less")," file.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Install Grunt and register your theme as described in ",(0,r.mdx)("a",{parentName:"p",href:"../../tools/grunt.md"},"Installing and configuring Grunt"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"From your installation directory, run the following commands:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"grunt exec:<your_theme>")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"grunt less:<your_theme>")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"grunt watch")))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Change the color of the buttons by adding the following code in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"_extend.less")," file:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-less"},".action {\n    &.primary {\n        background-color: palevioletred;\n        border-color: palevioletred;\n    }\n}\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Refresh the page and verify your changes."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"649px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/5530d/extend_less_screenshot121.webp 320w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/0c8fb/extend_less_screenshot121.webp 640w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/d9dbb/extend_less_screenshot121.webp 649w"],sizes:"(max-width: 649px) 100vw, 649px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/dd4a7/extend_less_screenshot121.png 320w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/0f09e/extend_less_screenshot121.png 640w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/1bcec/extend_less_screenshot121.png 649w"],sizes:"(max-width: 649px) 100vw, 649px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/1bcec/extend_less_screenshot121.png",alt:"Admin login page where the color of the button was changed",title:"Admin login page where the color of the button was changed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Change the button font size by adding the following code in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"_extend.less")," file:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-less"},".action {\n    &.primary {\n        background-color: palevioletred;\n        border-color: palevioletred;\n        font-size: 1.5em;\n    }\n}\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Refresh the page and verify your changes."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"659px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/5530d/extend_less_screenshot221.webp 320w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/0c8fb/extend_less_screenshot221.webp 640w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/f67d4/extend_less_screenshot221.webp 659w"],sizes:"(max-width: 659px) 100vw, 659px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/dd4a7/extend_less_screenshot221.png 320w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/0f09e/extend_less_screenshot221.png 640w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/4978c/extend_less_screenshot221.png 659w"],sizes:"(max-width: 659px) 100vw, 659px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/4978c/extend_less_screenshot221.png",alt:"Admin login page where the font of the buttons was changed",title:"Admin login page where the font of the buttons was changed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,r.mdx)("h2",{id:"client-side-compilation-mode"},"Client-side compilation mode"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Navigate to your theme directory and create a ",(0,r.mdx)("inlineCode",{parentName:"p"},"web/css/source/_extend.less")," file.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Log in to the Admin.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("strong",{parentName:"p"},"STORES")," > ",(0,r.mdx)("strong",{parentName:"p"},"Settings")," > ",(0,r.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"p"},"ADVANCED")," > ",(0,r.mdx)("strong",{parentName:"p"},"Developer")," > ",(0,r.mdx)("strong",{parentName:"p"},"Frontend development workflow")," > ",(0,r.mdx)("strong",{parentName:"p"},"Workflow type"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Change the LESS compilation mode to client-side.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"../../caching.md#clean-static-files"},"Clean static view files"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Change the color of the buttons by adding the following code in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"_extend.less")," file:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-less"},".action {\n    &.primary {\n        background-color: palevioletred;\n        border-color: palevioletred;\n    }\n}\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Refresh the page and verify your changes."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"649px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/5530d/extend_less_screenshot121.webp 320w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/0c8fb/extend_less_screenshot121.webp 640w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/d9dbb/extend_less_screenshot121.webp 649w"],sizes:"(max-width: 649px) 100vw, 649px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/dd4a7/extend_less_screenshot121.png 320w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/0f09e/extend_less_screenshot121.png 640w","/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/1bcec/extend_less_screenshot121.png 649w"],sizes:"(max-width: 649px) 100vw, 649px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/5a937981ead0b9180aa7deb75eb98b8a/1bcec/extend_less_screenshot121.png",alt:"Admin login page where the font of the buttons was changed",title:"Admin login page where the font of the buttons was changed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Change the button font size by adding the following code in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"_extend.less")," file:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-less"},".action {\n    &.primary {\n        background-color: palevioletred;\n        border-color: palevioletred;\n        font-size: 1.5em;\n    }\n}\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Refresh the page and verify your changes."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"659px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/5530d/extend_less_screenshot221.webp 320w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/0c8fb/extend_less_screenshot221.webp 640w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/f67d4/extend_less_screenshot221.webp 659w"],sizes:"(max-width: 659px) 100vw, 659px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/dd4a7/extend_less_screenshot221.png 320w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/0f09e/extend_less_screenshot221.png 640w","/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/4978c/extend_less_screenshot221.png 659w"],sizes:"(max-width: 659px) 100vw, 659px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/f4d67839153fea089dce7dba5b8e32ec/4978c/extend_less_screenshot221.png",alt:"Admin login page where the font of the buttons was changed",title:"Admin login page where the font of the buttons was changed",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,r.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"When your instance is in client-side Less compilation mode, simple changes are applied after saving or refreshing the page. For more sophisticated changes, you may need to manually clean the theme sub-directory in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"pub/static/frontend")," directory and generate a new deployment. See ",(0,r.mdx)("a",{parentName:"p",href:"../debug.md"},"Styles debugging"),"."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-css-quickstart-compilation-mode-md-0819327f1b7b4b0a5ae4.js.map