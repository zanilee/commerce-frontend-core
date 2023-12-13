"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[9714],{31223:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return u}});var n=t(87462),i=t(45987),o=(t(35776),t(3905)),r=t(91515);const s=["components"],m={},d=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var p;const l={_frontmatter:m},c=r.Z;function u(e){let{components:a}=e,t=(0,i.Z)(e,s);return(0,o.mdx)(c,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"add-viewports"},"Add viewports"),(0,o.mdx)("p",null,"By default, Page Builder defines four responsive breakpoints, but only uses two of them for viewports: ",(0,o.mdx)("inlineCode",{parentName:"p"},"desktop")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"mobile"),". The other two breakpoints are ",(0,o.mdx)("inlineCode",{parentName:"p"},"tablet")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"mobile-small"),". This topic shows you how to add viewport previews to these breakpoints and customize them as needed."),(0,o.mdx)("p",null,(0,o.mdx)("img",{parentName:"p",src:"/commerce-frontend-core/assets/9a665a00bc2f5c06dc7eee450df201ac/pagebuilder-adding-viewports.svg",alt:"Add viewports illustration"})),(0,o.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example available"),". An example for adding additional viewports is available for viewing and installing from: ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/commerce-docs/pagebuilder-theme"},"https://github.com/commerce-docs/pagebuilder-theme"),". This example uses an Admin theme, which is typically a best practice for production releases. But during development, you might find that using a module helps simplify your daily workflow. Especially if you're starting from scratch. Then you can even use the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/commerce-docs/pbmodules"},"PB Modules CLI")," to create a starting module."),(0,o.mdx)("h2",{id:"steps-for-adding-viewports"},"Steps for adding viewports"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Create an Admin theme or ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/commerce-docs/pbmodules"},"Create a module"),". Of course you can skip this step if you already have either one.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add a view.xml file. Use this file to define your configuration data for the additional viewports.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add viewport configuration data.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add viewport CSS classes. Create these classes to change the stage width for a selected viewport.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add viewport button images. Create SVG images for your viewport buttons."))),(0,o.mdx)("h3",{id:"step-1-create-or-add-to-an-existing-admin-theme"},"Step 1: Create or add to an existing Admin theme"),(0,o.mdx)("p",null,"To create and apply an Admin theme, follow the instructions described here:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"../../guide/themes/create-admin.md"},"Create an Admin theme"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"../../guide/themes/apply-admin.md"},"Apply an Admin theme"),"."))),(0,o.mdx)("p",null,"Your Admin theme and its required module should have directories set up as shown in the diagram:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{parentName:"p",src:"/commerce-frontend-core/assets/8f8ef4f1b9b0d1e566653aae9553ed26/pagebuilder-admin-viewport-theme-files.svg",alt:"Viewport icons"})),(0,o.mdx)("h3",{id:"step-2-add-a-viewxml-file"},"Step 2: Add a ",(0,o.mdx)("inlineCode",{parentName:"h3"},"view.xml")," file"),(0,o.mdx)("p",null,"Copy the ",(0,o.mdx)("inlineCode",{parentName:"p"},"view.xml")," file from Page Builder (",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento/PageBuilder/etc/view.xml"),") and add it to your theme's ",(0,o.mdx)("inlineCode",{parentName:"p"},"etc")," directory. Before we continue, let's cleanup the ",(0,o.mdx)("inlineCode",{parentName:"p"},"view.xml")," file."),(0,o.mdx)("p",null,"First, delete everything except the ",(0,o.mdx)("inlineCode",{parentName:"p"},"tablet")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"mobile-small")," breakpoints. When you finish, your ",(0,o.mdx)("inlineCode",{parentName:"p"},"view.xml")," file should look like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<view>\n    <vars module="Magento_PageBuilder">\n        <var name="breakpoints">\n            <var name="tablet">\n                <var name="conditions">\n                    <var name="max-width">1024px</var>\n                    <var name="min-width">768px</var>\n                </var>\n                <var name="options">\n                    <var name="products">\n                        <var name="default">\n                            <var name="slidesToShow">4</var>\n                        </var>\n                        <var name="continuous">\n                            <var name="slidesToShow">3</var>\n                        </var>\n                    </var>\n                </var>\n            </var>\n            <var name="mobile-small">\n                <var name="conditions">\n                    <var name="max-width">640px</var>\n                </var>\n                <var name="options">\n                    <var name="products">\n                        <var name="default">\n                            <var name="slidesToShow">2</var>\n                        </var>\n                        <var name="continuous">\n                            <var name="slidesToShow">1</var>\n                        </var>\n                    </var>\n                </var>\n            </var>\n        </var>\n    </vars>\n</view>\n')),(0,o.mdx)("p",null,"What's left at this point is the ",(0,o.mdx)("inlineCode",{parentName:"p"},"options")," element that provides breakpoint custom data to the Products content type."),(0,o.mdx)("p",null,"Products uses this data in its ",(0,o.mdx)("inlineCode",{parentName:"p"},"widget.js")," file to make the ",(0,o.mdx)("a",{parentName:"p",href:"https://kenwheeler.github.io/slick/"},"slick carousel")," responsive. You will use this data in the ",(0,o.mdx)("a",{parentName:"p",href:"./use-breakpoints.md"},"Use breakpoints")," topic. But not here. So delete the breakpoint data. When you finish, your ",(0,o.mdx)("inlineCode",{parentName:"p"},"view.xml")," file should look like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<view>\n    <vars module="Magento_PageBuilder">\n        <var name="breakpoints">\n            <var name="tablet">\n            </var>\n            <var name="mobile-small">\n            </var>\n        </var>\n    </vars>\n</view>\n')),(0,o.mdx)("p",null,"Now we can add our viewport configurations without distraction."),(0,o.mdx)("h3",{id:"step-3-add-viewport-configuration-data"},"Step 3: Add viewport configuration data"),(0,o.mdx)("p",null,"In our example, we added the following viewport data to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"table")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"mobile-small")," breakpoints:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<view>\n    <vars module="Magento_PageBuilder">\n        <var name="breakpoints">\n            <var name="tablet">\n                <var name="label">Tablet</var>\n                <var name="stage">true</var>\n                <var name="class">mobile-switcher</var>\n                <var name="icon">PageBuilder_Breakpoints::css/images/switcher/switcher-tablet.svg</var>\n                <var name="media">only screen and (max-width: 1024px)</var>\n            </var>\n            <var name="mobile-small">\n                <var name="label">Mobile Small</var>\n                <var name="stage">true</var>\n                <var name="class">mobile-small-switcher</var>\n                <var name="icon">PageBuilder_Breakpoints::css/images/switcher/switcher-mobile.svg</var>\n                <var name="media">only screen and (max-width: 640px)</var>\n            </var>\n        </var>\n    </vars>\n</view>\n')),(0,o.mdx)("p",null,"Details for these viewport elements are in the ",(0,o.mdx)("a",{parentName:"p",href:"index.md#viewport-configurations"},"Viewport configurations section"),", but let's quickly summarize them:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"label")," — for adding the viewport name to the tooltip.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"stage")," — for adding or removing the viewport from the stage.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"class")," — for adding an optional CSS class for the button (not the stage width).")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"icon")," — for adding an icon to the button.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"media")," — for adding a media query used to show viewport properties on the frontend."))),(0,o.mdx)("p",null,"At this point, if you save your ",(0,o.mdx)("inlineCode",{parentName:"p"},"view.xml")," file, clear your cache (",(0,o.mdx)("inlineCode",{parentName:"p"},"bin/magento cache:clean"),"), and do a hard reload of your browser, you should see two additional buttons (with broken images) in the Page Builder's stage header:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"348px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"13.750000000000002%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/67419f4cb6027295f1578420159800aa/5530d/viewport-skeletons-without-images.webp 320w","/commerce-frontend-core/static/67419f4cb6027295f1578420159800aa/b4669/viewport-skeletons-without-images.webp 348w"],sizes:"(max-width: 348px) 100vw, 348px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/67419f4cb6027295f1578420159800aa/dd4a7/viewport-skeletons-without-images.png 320w","/commerce-frontend-core/static/67419f4cb6027295f1578420159800aa/9c78a/viewport-skeletons-without-images.png 348w"],sizes:"(max-width: 348px) 100vw, 348px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/67419f4cb6027295f1578420159800aa/9c78a/viewport-skeletons-without-images.png",alt:"Viewport icons",title:"Viewport icons",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"The buttons don't have icons because we haven't added them yet. But they have tooltips that show the viewport names you added to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"label")," node. And you can even click them to trigger stage events. But there's nothing to process yet."),(0,o.mdx)("p",null,"So let's add a button icon and CSS for the stage width to make the button look good and actually do something."),(0,o.mdx)("h3",{id:"step-4-add-viewport-button-icons"},"Step 4: Add viewport button icons"),(0,o.mdx)("p",null,"Page Builder uses SVG images for its existing viewport button icons. And while you ",(0,o.mdx)("em",{parentName:"p"},"can")," use other image formats (like .png), we recommend using SVG icons that match Page Builder's existing icons."),(0,o.mdx)("p",null,"For this exercise, you can ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/commerce-docs/pagebuilder-examples/tree/master/Columns/Extension/view/adminhtml/web/css/images/switcher"},"download the ",(0,o.mdx)("inlineCode",{parentName:"a"},"switcher-tablet.svg")," and ",(0,o.mdx)("inlineCode",{parentName:"a"},"switcher-mobile-small.svg")," images")," from our example repo."),(0,o.mdx)("p",null,"After downloading, add the files to your theme or module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"web/css/images/switcher/")," directory to match the URLs we set for our viewport ",(0,o.mdx)("inlineCode",{parentName:"p"},"icon")," nodes in ",(0,o.mdx)("inlineCode",{parentName:"p"},"view.xml"),"."),(0,o.mdx)("p",null,"Now you can reload the CMS page, open Page Builder, and hopefully see your new viewport buttons with icons:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"326px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"14.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/780cb3ac234c3a10b65ac54482b3670a/5530d/viewport-skeletons-with-images.webp 320w","/commerce-frontend-core/static/780cb3ac234c3a10b65ac54482b3670a/10585/viewport-skeletons-with-images.webp 326w"],sizes:"(max-width: 326px) 100vw, 326px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/780cb3ac234c3a10b65ac54482b3670a/dd4a7/viewport-skeletons-with-images.png 320w","/commerce-frontend-core/static/780cb3ac234c3a10b65ac54482b3670a/15a61/viewport-skeletons-with-images.png 326w"],sizes:"(max-width: 326px) 100vw, 326px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/780cb3ac234c3a10b65ac54482b3670a/15a61/viewport-skeletons-with-images.png",alt:"Viewport icons",title:"Viewport icons",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h4",{id:"creating-your-own-icons"},"Creating your own icons"),(0,o.mdx)("p",null,"If you want to create your own icons, use the following guidelines to help you match Page Builder's icons as closely as possible:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Icon height: ",(0,o.mdx)("inlineCode",{parentName:"p"},"18px"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Icon width: ",(0,o.mdx)("inlineCode",{parentName:"p"},"20px"),", or narrower as needed.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Icon background: ",(0,o.mdx)("inlineCode",{parentName:"p"},"transparent"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Icon fill: ",(0,o.mdx)("inlineCode",{parentName:"p"},"#fff")))),(0,o.mdx)("p",null,"Shown below are the basic pixel dimensions and styles for our button icons."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/5530d/pagebuilder-viewport-icons.webp 320w","/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/0c8fb/pagebuilder-viewport-icons.webp 640w","/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/94b1e/pagebuilder-viewport-icons.webp 1280w","/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/0b34d/pagebuilder-viewport-icons.webp 1920w","/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/c4540/pagebuilder-viewport-icons.webp 2368w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/dd4a7/pagebuilder-viewport-icons.png 320w","/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/0f09e/pagebuilder-viewport-icons.png 640w","/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/bbbf7/pagebuilder-viewport-icons.png 1280w","/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/ac7a9/pagebuilder-viewport-icons.png 1920w","/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/8e903/pagebuilder-viewport-icons.png 2368w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/6d0083e9507b9b89cee017dbe686ca01/bbbf7/pagebuilder-viewport-icons.png",alt:"Viewport icons",title:"Viewport icons",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Pro Tip:")," Make sure you give all your custom icons a height of 18px, even when they are smaller like the ",(0,o.mdx)("inlineCode",{parentName:"p"},"switcher-mobile-small.svg"),". This common height ensures that your icons will align nicely in the stage header alongside Page Builder's existing icons."),(0,o.mdx)("h3",{id:"step-5-add-viewport-css-classes"},"Step 5: Add viewport CSS classes"),(0,o.mdx)("p",null,"Page Builder uses CSS classes to change the stage width for the selected viewport. So when you add a viewport configuration to a breakpoint, you need to add a ",(0,o.mdx)("inlineCode",{parentName:"p"},".less")," file to your module or theme, like the ",(0,o.mdx)("inlineCode",{parentName:"p"},"_viewport-stage-widths.less")," file from from our example."),(0,o.mdx)("p",null,"This is the part of our viewport framework where convention ",(0,o.mdx)("em",{parentName:"p"},"dominates")," configuration. You might remember a viewport node called ",(0,o.mdx)("inlineCode",{parentName:"p"},"class")," (from Step 3 above). And you might assume that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"class")," node is for the CSS class that sets the stage width for your viewport. But this is not the case."),(0,o.mdx)("p",null,"You must name your CSS classes according to the following convention:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},"<breakpoint-name>-viewport\n")),(0,o.mdx)("p",null,"Where ",(0,o.mdx)("inlineCode",{parentName:"p"},"<breakpoint-name>")," is the name of the breakpoint in ",(0,o.mdx)("inlineCode",{parentName:"p"},"view.xml"),", such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"mobile-tiny"),". So our new viewport class names must be:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},".tablet-viewport"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},".mobile-small-viewport")))),(0,o.mdx)("p",null,"Every time a user clicks a viewport button, Page Builder applies a ",(0,o.mdx)("inlineCode",{parentName:"p"},".<breakpoint>-viewport")," class to the stage. If this class exists (with the right nesting of selectors), the stage width changes to match. If not, nothing happens."),(0,o.mdx)("p",null,"In our theme example, we define our viewport CSS classes in our ",(0,o.mdx)("inlineCode",{parentName:"p"},"_viewport-stage-widths.less")," file as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},".tablet-viewport {\n    &.pagebuilder-stage-wrapper {\n        &.stage-content-snapshot,\n        &.stage-full-screen {\n            .pagebuilder-stage {\n                .pagebuilder-canvas {\n                    left: 50%;\n                    transform: translateX(-50%);\n                    width: 1024px;\n                }\n            }\n        }\n    }\n}\n\n.mobile-small-viewport {\n    &.pagebuilder-stage-wrapper {\n        &.stage-content-snapshot,\n        &.stage-full-screen {\n            .pagebuilder-stage {\n                .pagebuilder-canvas {\n                    left: 50%;\n                    transform: translateX(-50%);\n                    width: 640px;\n                }\n            }\n        }\n    }\n}\n")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"width")," values set here should match the ",(0,o.mdx)("inlineCode",{parentName:"p"},"max-width")," values configured for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"media")," nodes in ",(0,o.mdx)("inlineCode",{parentName:"p"},"view.xml"),". If they don't, the end user will see a stage preview that differs from what customers see on the storefront."),(0,o.mdx)("p",null,"Now if you save your ",(0,o.mdx)("inlineCode",{parentName:"p"},".less")," file, transpile it, and reload of your browser, you should see the stage canvas changes widths to match the widths set in your viewport classes."),(0,o.mdx)("h2",{id:"summary"},"Summary"),(0,o.mdx)("p",null,"In this topic you learned how to add more viewports to Page Builder's stage so that end users can preview how their content will look a different widths on the storefront. To learn more about how to use these viewports to customize your content types, see How to use viewports."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-viewports-add-viewports-md-a3712990ca94fa1d5d78.js.map