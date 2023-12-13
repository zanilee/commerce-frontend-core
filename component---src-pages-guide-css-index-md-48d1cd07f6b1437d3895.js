"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[3248],{60399:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return c},default:function(){return p}});var a=o(87462),r=o(45987),n=(o(35776),o(3905)),i=o(91515);const s=["components"],c={},m={_frontmatter:c},d=i.Z;function p(e){let{components:t}=e,o=(0,r.Z)(e,s);return(0,n.mdx)(d,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"cascading-style-sheets-css"},"Cascading style sheets (CSS)"),(0,n.mdx)("p",null,"The Adobe Commerce and Magento Source applications incorporate ",(0,n.mdx)("a",{parentName:"p",href:"http://lesscss.org/"},"Less"),", a CSS pre-processor that simplifies the management of complex CSS files. To define styles for a store, you can use both CSS and Less stylesheets."),(0,n.mdx)("p",null,"The Commerce application provides a built-in Less UI library, which you can optionally extend."),(0,n.mdx)("p",null,"To customize storefront styles, you need to ",(0,n.mdx)("a",{parentName:"p",href:"../themes/create-storefront.md"},"create a custom design theme"),". Then you can use one of the following approaches:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"If your theme ",(0,n.mdx)("a",{parentName:"li",href:"..//themes/inheritance.md"},"inherits")," from the out-of-the-box Blank or Luma theme, you can override the default Less files. For example, to ",(0,n.mdx)("a",{parentName:"li",href:"ui-library.md#predefined-variables"},"change the values of the variables")," used in the default files."),(0,n.mdx)("li",{parentName:"ul"},"Create your own Less files using the built-in Less preprocessor."),(0,n.mdx)("li",{parentName:"ul"},"Create your own CSS files, optionally having compiled them using third-party CSS preprocessor.")),(0,n.mdx)("h2",{id:"things-to-remember-when-working-with-styles"},"Things to remember when working with styles"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Make sure that you ",(0,n.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html"},"set")," your application to the developer or default ",(0,n.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/setup/application-modes.html"},"mode"),".")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"If your style changes do not apply after refreshing the page, cleaning the static files cache might help. See the ",(0,n.mdx)("a",{parentName:"p",href:"../caching.md#page-caching"},"caching")," for instructions how to do this."))),(0,n.mdx)("h3",{id:"css-merging-minification-and-performance"},"CSS merging, minification, and performance"),(0,n.mdx)("p",null,"There are a couple options to help with CSS and site performance."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Merge CSS files to decrease the number of HTTP requests required to load the page.")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Minification of CSS files reduces the file size being sent. It does this by stripping white space within the file.")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Use CSS critical path to eliminate render-blocking CSS resources."))),(0,n.mdx)("p",null,"To enable / disable these settings, go into Admin > ",(0,n.mdx)("strong",{parentName:"p"},"Stores")," > Setting > ",(0,n.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,n.mdx)("strong",{parentName:"p"},"Advanced")," > ",(0,n.mdx)("strong",{parentName:"p"},"Developer")," > ",(0,n.mdx)("strong",{parentName:"p"},"CSS Settings"),"."),(0,n.mdx)("h2",{id:"walkthrough"},"Walkthrough"),(0,n.mdx)("p",null,"Here is a simple illustration of changing styles using the first approach: changing the color of the buttons of a certain class.\nIn the Blank theme, the buttons of the ",(0,n.mdx)("inlineCode",{parentName:"p"},".action.primary")," class, so called ",(0,n.mdx)("em",{parentName:"p"},"primary")," buttons, are blue. The following image illustrates this:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"881px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/68cfcdfa40c8e26dd7942ad38742f855/5530d/css_over1.webp 320w","/commerce-frontend-core/static/68cfcdfa40c8e26dd7942ad38742f855/0c8fb/css_over1.webp 640w","/commerce-frontend-core/static/68cfcdfa40c8e26dd7942ad38742f855/ea08e/css_over1.webp 881w"],sizes:"(max-width: 881px) 100vw, 881px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/68cfcdfa40c8e26dd7942ad38742f855/dd4a7/css_over1.png 320w","/commerce-frontend-core/static/68cfcdfa40c8e26dd7942ad38742f855/0f09e/css_over1.png 640w","/commerce-frontend-core/static/68cfcdfa40c8e26dd7942ad38742f855/6fa0c/css_over1.png 881w"],sizes:"(max-width: 881px) 100vw, 881px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/68cfcdfa40c8e26dd7942ad38742f855/6fa0c/css_over1.png",alt:"The default view of a product page, with the orange Add to Cart button",title:"The default view of a product page, with the orange Add to Cart button",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"ExampleCorp wants to change the color of the primary buttons to orange. To achieve this, they do the following:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Create a new Orange theme, which inherits from the Blank theme.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"In the Orange theme directory add the overriding ",(0,n.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/ExampleCorp/orange/web/css/source/_theme.less")," file with the following code:"),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre",className:"language-less"},"//  Primary button\n@button-primary__color: @color-white;\n@button-primary__hover__color: @color-white;\n@button-primary__background: @color-orange-red1;\n@button-primary__hover__background: @color-orange-red4;\n@button-primary__border: 1px solid @color-orange-red2;\n@button-primary__hover__border: 1px solid @color-orange-red2;\n")))),(0,n.mdx)("p",null,"ExampleCorp wants to change the color of the primary buttons to a custom color. In the orange theme directory add the overriding ",(0,n.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/ExampleCorp/orange/web/css/source/_theme.less")," file with the following code:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-less"},"//  Primary button\n@btn-color-text: #2e3138;\n@btn-color-background: #d5d7dd;\n@btn-color-background-hover: #d9dbe0;\n@button-primary__color: @btn-color-text;\n@button-primary__hover__color: @btn-color-text;\n@button-primary__background: @btn-color-background;\n@button-primary__hover__background: @btn-color-background-hover;\n@button-primary__border: 1px solid @btn-color-background;\n")),(0,n.mdx)("p",null,"When ExampleCorp ",(0,n.mdx)("a",{parentName:"p",href:"../themes/apply-storefront.md"},"applies their theme"),", the primary buttons will look like on the following image:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"881px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/52b8bb986bd2fb05b4bb2dc3b817df80/5530d/css_over2.webp 320w","/commerce-frontend-core/static/52b8bb986bd2fb05b4bb2dc3b817df80/0c8fb/css_over2.webp 640w","/commerce-frontend-core/static/52b8bb986bd2fb05b4bb2dc3b817df80/ea08e/css_over2.webp 881w"],sizes:"(max-width: 881px) 100vw, 881px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/52b8bb986bd2fb05b4bb2dc3b817df80/dd4a7/css_over2.png 320w","/commerce-frontend-core/static/52b8bb986bd2fb05b4bb2dc3b817df80/0f09e/css_over2.png 640w","/commerce-frontend-core/static/52b8bb986bd2fb05b4bb2dc3b817df80/6fa0c/css_over2.png 881w"],sizes:"(max-width: 881px) 100vw, 881px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/52b8bb986bd2fb05b4bb2dc3b817df80/6fa0c/css_over2.png",alt:"The customized view of a product page, with the grey Add to Cart button",title:"The customized view of a product page, with the grey Add to Cart button",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-css-index-md-48d1cd07f6b1437d3895.js.map