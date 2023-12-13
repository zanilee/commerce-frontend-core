"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[8473],{3748:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return u}});var m=n(87462),d=n(45987),a=(n(35776),n(3905)),l=n(91515);const i=["components"],p={},o=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var r;const x={_frontmatter:p},s=l.Z;function u(e){let{components:t}=e,n=(0,d.Z)(e,i);return(0,a.mdx)(s,(0,m.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"list-widget"},"List widget"),(0,a.mdx)(o,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"The list widget is deprecated since version 2.2.0. As an alternative component for the admin area, use ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/components/dynamic-rows/"},"DynamicRows"),"."),(0,a.mdx)("p",null,"Provides a way to move items, typically a list, from one content section to another.\nThe content can be moved using buttons and links."),(0,a.mdx)("p",null,"The list widget source file is ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/web/mage/list.js"},"lib/web/mage/list.js"),"."),(0,a.mdx)("h2",{id:"initialize"},"Initialize"),(0,a.mdx)("p",null,"For information about how to initialize a widget in a JS component or ",(0,a.mdx)("inlineCode",{parentName:"p"},".phtml")," template, see the ",(0,a.mdx)("a",{parentName:"p",href:"../init.md"},"Initialize JavaScript")," topic."),(0,a.mdx)("h2",{id:"options"},"Options"),(0,a.mdx)("h3",{id:"addbutton"},(0,a.mdx)("inlineCode",{parentName:"h3"},"addButton")),(0,a.mdx)("p",null,"Selector for the element used for item adding."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"[data-button=add]")),(0,a.mdx)("h3",{id:"destinationselector"},(0,a.mdx)("inlineCode",{parentName:"h3"},"destinationSelector")),(0,a.mdx)("p",null,"Content destination selector."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"[data-role=container]")),(0,a.mdx)("h3",{id:"itemcount"},(0,a.mdx)("inlineCode",{parentName:"h3"},"itemCount")),(0,a.mdx)("p",null,"Number of total items."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"0")),(0,a.mdx)("h3",{id:"itemindex"},(0,a.mdx)("inlineCode",{parentName:"h3"},"itemIndex")),(0,a.mdx)("p",null,"Number of the current item."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"0")),(0,a.mdx)("h3",{id:"maxitems"},(0,a.mdx)("inlineCode",{parentName:"h3"},"maxItems")),(0,a.mdx)("p",null,"Number of list items that can be added to the destination."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": Integer"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"null")),(0,a.mdx)("h3",{id:"maxitemsalert"},(0,a.mdx)("inlineCode",{parentName:"h3"},"maxItemsAlert")),(0,a.mdx)("p",null,"Alert message displayed when maximum limit is reached."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"null")),(0,a.mdx)("h3",{id:"removebutton"},(0,a.mdx)("inlineCode",{parentName:"h3"},"removeButton")),(0,a.mdx)("p",null,"Selector for the element used for item removing."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"[data-button=remove]")),(0,a.mdx)("h3",{id:"template"},(0,a.mdx)("inlineCode",{parentName:"h3"},"template")),(0,a.mdx)("p",null,"Template for the added item."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"[data-role=item]")),(0,a.mdx)("h3",{id:"templateclass"},(0,a.mdx)("inlineCode",{parentName:"h3"},"templateClass")),(0,a.mdx)("p",null,"Class attached to the template wrapper."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"null")),(0,a.mdx)("h3",{id:"templatewrapper"},(0,a.mdx)("inlineCode",{parentName:"h3"},"templateWrapper")),(0,a.mdx)("p",null,"Element holding the template."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"null")),(0,a.mdx)("h2",{id:"methods"},"Methods"),(0,a.mdx)("h3",{id:"additem"},(0,a.mdx)("inlineCode",{parentName:"h3"},"addItem()")),(0,a.mdx)("p",null,"Adds item to the list in the specified order (defined by the index parameter)."),(0,a.mdx)("h3",{id:"handleadd"},(0,a.mdx)("inlineCode",{parentName:"h3"},"handleAdd()")),(0,a.mdx)("p",null,"Adds item to the list."),(0,a.mdx)("h3",{id:"checklimit"},(0,a.mdx)("inlineCode",{parentName:"h3"},"checkLimit()")),(0,a.mdx)("p",null,"If the ",(0,a.mdx)("inlineCode",{parentName:"p"},"maxItems")," option is set, hides or displays the ",(0,a.mdx)("strong",{parentName:"p"},"Add")," button."),(0,a.mdx)("h3",{id:"removeitem"},(0,a.mdx)("inlineCode",{parentName:"h3"},"removeItem()")),(0,a.mdx)("p",null,"Removes an item from the list."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-list-md-08f891b86e855ef07e68.js.map