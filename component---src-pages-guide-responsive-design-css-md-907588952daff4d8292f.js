"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[5767],{4085:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return l},default:function(){return h}});var a=i(87462),t=i(45987),s=(i(35776),i(3905)),m=i(91515);const d=["components"],l={},r=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)});var o;const _={_frontmatter:l},p=m.Z;function h(e){let{components:n}=e,i=(0,t.Z)(e,d);return(0,s.mdx)(p,(0,a.Z)({},_,i,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"css-in-responsive-design"},"CSS in responsive design"),(0,s.mdx)("p",null,"Stylesheets are the main tool in responsive web design (RWD) implementation. This topic describes the mechanisms and approaches to building RWD used in the default themes. To re-use them in your custom theme, make your theme ",(0,s.mdx)("a",{parentName:"p",href:"../themes/inheritance.md"},"inherit")," from the Blank theme."),(0,s.mdx)("h2",{id:"mobile-first"},"Mobile first"),(0,s.mdx)("p",null,'In the Blank and Luma themes, a "mobile first" approach is used. The order is:'),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Mobile"),(0,s.mdx)("li",{parentName:"ul"},"Tablet"),(0,s.mdx)("li",{parentName:"ul"},"Desktop")),(0,s.mdx)("p",null,"This means that the styles for mobile devices (screen width is 768px and less) are extended by the styles for the higher breakpoints. As the result, the extra styles are never loaded when a store is viewed on a mobile device."),(0,s.mdx)("p",null,"The mobile and desktop styles are defined in separate files:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/design/frontend/Magento/blank/web/css/styles-l.less"},"styles-l.less")," is used to generate desktop-specific styles (width higher than 768px)."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/design/frontend/Magento/blank/web/css/styles-m.less"},"styles-m.less")," is used to generate basic and mobile-specific styles (width of 768px and less).")),(0,s.mdx)("h2",{id:"breakpoints"},"Breakpoints"),(0,s.mdx)("p",null,"Breakpoints are used in the CSS code to set up the screen width at which the design switches from the mobile to the desktop version."),(0,s.mdx)("p",null,"The Blank and Luma themes use Less variables to implement the following ",(0,s.mdx)("a",{parentName:"p",href:"index.md#terms-used"},"breakpoints"),":"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@screen__xxs"),": 320px"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@screen__xs"),": 480px"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@screen__s"),": 640px"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@screen__m"),": 768px (in the Blank and Luma themes, when the viewport width is more than 768px, this breakpoint switches to the desktop view)"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@screen__l"),": 1024px"),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"@screen__xl"),": 1440px")),(0,s.mdx)("p",null,"The default breakpoint variables are located in the UI library: ",(0,s.mdx)("inlineCode",{parentName:"p"},"lib/web/css/source/lib/variables/_responsive.less"),"."),(0,s.mdx)("p",null,"You can change these breakpoints or add new ones in your custom theme. For instructions see the ",(0,s.mdx)("a",{parentName:"p",href:"breakpoints.md"},"Add a new breakpoint")," topic."),(0,s.mdx)("h2",{id:"media-queries"},"Media queries"),(0,s.mdx)("p",null,"The Blank and Luma theme styles are based on the ","[UI library]",". The library uses ",(0,s.mdx)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Media_queries"},"CSS3 media queries"),", an extension of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"@media")," rule, to adapt the layout to the screen width."),(0,s.mdx)("p",null,"The approach implemented in the UI library, uses ",(0,s.mdx)("inlineCode",{parentName:"p"},"@media-common")," style group separation and ",(0,s.mdx)("inlineCode",{parentName:"p"},".media-width()")," mixins which can be used in any ",(0,s.mdx)("inlineCode",{parentName:"p"},".less")," file in a theme, as many times as needed, but it is invoked only once, in ",(0,s.mdx)("inlineCode",{parentName:"p"},"lib/web/css/source/lib/_responsive.less"),". The resulting ",(0,s.mdx)("inlineCode",{parentName:"p"},"styles-m.css")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"styles-l.css")," both have only one call of each media query with all the rules there, instead of multiple calls for the same query."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Media queries ",(0,s.mdx)("inlineCode",{parentName:"li"},"@media-common"),", ",(0,s.mdx)("inlineCode",{parentName:"li"},"max screen__s")," and ",(0,s.mdx)("inlineCode",{parentName:"li"},"max screen__m")," will be added to ",(0,s.mdx)("inlineCode",{parentName:"li"},"styles-m.css"),"."),(0,s.mdx)("li",{parentName:"ul"},"Media queries ",(0,s.mdx)("inlineCode",{parentName:"li"},"min screen__m")," and ",(0,s.mdx)("inlineCode",{parentName:"li"},"min screen__l")," will be added to ",(0,s.mdx)("inlineCode",{parentName:"li"},"styles-l.css"),".")),(0,s.mdx)(r,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"If working on a theme which inherits from either the Blank or Luma theme, it's recommended to use ",(0,s.mdx)("inlineCode",{parentName:"p"},".media-width()")," and style groups separation.  Otherwise the style rules will be added twice, once to ",(0,s.mdx)("inlineCode",{parentName:"p"},"styles-m.css")," and once more to ",(0,s.mdx)("inlineCode",{parentName:"p"},"styles-l.css"),"."),(0,s.mdx)("p",null,"For Less styles rules to be compiled to ",(0,s.mdx)("inlineCode",{parentName:"p"},"styles-m.css")," without a media query so that they apply to all screen widths use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"@media-common")," style group separation."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-less"},"//\n//  Common (styles-m.css)\n//  _____________________________________________\n& when (@media-common = true) {\n    // your code\n}\n")),(0,s.mdx)("p",null,"For grouping style rules in certain media queries the ",(0,s.mdx)("inlineCode",{parentName:"p"},".media-width()")," mixin used."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-less"},".media-width(<@extremum>, <@break>);\n")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"@extremum: max|min")," - sets whether to use min-width or max-width in media query condition. If ",(0,s.mdx)("inlineCode",{parentName:"p"},"max")," is used the compiled styles will be placed in ",(0,s.mdx)("inlineCode",{parentName:"p"},"styles-m.css")," with the appropriate media query. Whereas if ",(0,s.mdx)("inlineCode",{parentName:"p"},"min")," is used the compiled styles will be placed in ",(0,s.mdx)("inlineCode",{parentName:"p"},"styles-l.css")," with the appropriate media query."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"@break: value")," - sets the value of breakpoint to compare with in media query condition."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-less"},"//\n//  Mobile (styles-m.css)\n//  _____________________________________________\n\n.media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__s) {\n    // your code\n}\n\n.media-width(@extremum, @break) when (@extremum = 'max') and (@break = @screen__m) {\n    // your code\n}\n\n& when (@media-target = 'mobile'), (@media-target = 'all') {\n    @media only screen and (max-width: 375px) {\n        // styles for custom breakpoint below <= 375px mobile screen\n    }\n}\n\n//\n//  Tablet\n//  _____________________________________________\n\n// This will add styles for tablet devices. When using native media-queries, we recommend wrapping your media-queries with media-width mixins or media-target\n& when (@media-target = 'desktop'), (@media-target = 'all') {\n    @media only screen and (min-width: @screen__m + 1) and (max-width: (@screen__xl - 1)) {\n        // styles for breakpoint > 768px and < 1440px\n    }\n}\n\n//\n//  Desktop (style-l.css)\n//  _____________________________________________\n\n.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__m) {\n    // your code\n}\n\n.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__l) {\n    // your code\n}\n\n.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__xl) {\n    // your code\n}\n")),(0,s.mdx)("p",null,"You can find more information about the UI library responsive mixin usage in ",(0,s.mdx)("inlineCode",{parentName:"p"},"<your_Magento_instance>/pub/static/frontend/Magento/blank/en_US/css/docs/responsive.html"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-responsive-design-css-md-907588952daff4d8292f.js.map