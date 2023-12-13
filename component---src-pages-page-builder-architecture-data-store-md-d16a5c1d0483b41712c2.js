"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[2456],{80610:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return m}});var n=a(87462),o=a(45987),r=(a(35776),a(3905)),s=a(91515);const i=["components"],d={},p={_frontmatter:d},c=s.Z;function m(e){let{components:t}=e,a=(0,o.Z)(e,i);return(0,r.mdx)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"page-builder-data-store"},"Page Builder data store"),(0,r.mdx)("p",null,"The data store is a utility class that stores the user's input data for a content type. When Page Builder creates a content type, either from the master storage format or from a user dragging and dropping a content type, Page Builder also creates a data store instance for that content type. Whenever the user modifies a content type, either by editing it on the stage or from the UI component form, Page Builder updates the data store with the new data. The master format and preview both fetch the data required for their render from the data store."),(0,r.mdx)("h2",{id:"access"},"Access"),(0,r.mdx)("p",null,"The data store is available for access on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ContentType")," implementation, using the key ",(0,r.mdx)("inlineCode",{parentName:"p"},"dataStore"),". If you are within a preview or master component, you must first access the content type through the ",(0,r.mdx)("inlineCode",{parentName:"p"},"contentType")," property, as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"Preview.contentType.dataStore;\n")),(0,r.mdx)("h2",{id:"events"},"Events"),(0,r.mdx)("p",null,"The data store maintains its own event system. It does not use the global events system used by Page Builder. As a result, you need to create an instance of ",(0,r.mdx)("inlineCode",{parentName:"p"},"dataStore")," and subscribe to its data changes, as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"var dataStore = self.contentType.dataStore;\n\ndataStore.subscribe(() => {\n    // handler to update content type\n});\n")),(0,r.mdx)("h2",{id:"api"},"API"),(0,r.mdx)("h3",{id:"getkey-string-defaultvalue-any-any"},(0,r.mdx)("inlineCode",{parentName:"h3"},"get(key: string, defaultValue?: any): any")),(0,r.mdx)("p",null,"Retrieve a single value from the content type's data store based on its key. You can provide an optional default value if no data is present."),(0,r.mdx)("h3",{id:"getstate-object"},(0,r.mdx)("inlineCode",{parentName:"h3"},"getState(): object")),(0,r.mdx)("p",null,"Get the entire state object for the current content type instance."),(0,r.mdx)("h3",{id:"setkey-string-value-any-void"},(0,r.mdx)("inlineCode",{parentName:"h3"},"set(key: string, value: any): void")),(0,r.mdx)("p",null,"Set a single piece of data into the content type's data store."),(0,r.mdx)("h3",{id:"setstate-void"},(0,r.mdx)("inlineCode",{parentName:"h3"},"setState(): void")),(0,r.mdx)("p",null,"Set the entire state for the current content type."),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"You can use the data store to modify your content type when its data changes. For example, the Page Builder native Tabs content type (magento2-page-builder/app/code/Magento/PageBuilder/view/adminhtml/web/ts/js/content-type/tabs/preview.ts) subscribes to the data store and makes updates to it when a tab-item changes, as show here in TypeScript:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},'...\n    args.contentType.dataStore.subscribe(() => {\n        this.updateTabNamesInDataStore();\n    });\n...\n\n/**\n* Update data store with active options\n*/\nprivate updateTabNamesInDataStore() {\n    const activeOptions: ActiveOptionsInterface[] = [];\n    this.contentType.children().forEach((tab: ContentTypeInterface, index: number) => {\n        const tabData = tab.dataStore.getState();\n        activeOptions.push({\n            label: tabData.tab_name.toString(),\n            labeltitle: tabData.tab_name.toString(),\n            value: index,\n        });\n    });\n\n    this.contentType.dataStore.set(\n        "_default_active_options",\n        activeOptions,\n    );\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-architecture-data-store-md-d16a5c1d0483b41712c2.js.map