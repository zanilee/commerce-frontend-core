"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[8357],{90443:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(87462),i=n(45987),r=(n(35776),n(3905)),m=n(91515);const s=["components"],l={},o={_frontmatter:l},d=m.Z;function p(e){let{components:t}=e,n=(0,i.Z)(e,s);return(0,r.mdx)(d,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"insertlisting-component"},"InsertListing component"),(0,r.mdx)("p",null,"The InsertListing component inserts ",(0,r.mdx)("a",{parentName:"p",href:"listing-grid.md"},"Listing")," into other components."),(0,r.mdx)("h2",{id:"options"},"Options"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Option"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"autoRender")),(0,r.mdx)("td",{parentName:"tr",align:null},"When set to true, the Listing component is automatically rendered during insertListing initialization. Otherwise, insertListing's ",(0,r.mdx)("inlineCode",{parentName:"td"},"render")," method should be called to render the Listing."),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"behaviourType")),(0,r.mdx)("td",{parentName:"tr",align:null},"Can be ",(0,r.mdx)("inlineCode",{parentName:"td"},"simple")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"edit"),". Where ",(0,r.mdx)("inlineCode",{parentName:"td"},"edit")," means that insertListing also includes changes from Listing's inlineEdit into value. In this case, Listing must be configured with enabled inline editing."),(0,r.mdx)("td",{parentName:"tr",align:null},"String (",(0,r.mdx)("inlineCode",{parentName:"td"},"simple")," ","|"," ",(0,r.mdx)("inlineCode",{parentName:"td"},"edit"),")"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"'simple'"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"class")),(0,r.mdx)("td",{parentName:"tr",align:null},"Path to the PHP class responsible for the backend implementation of the component."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Magento\\Ui\\Component\\Container"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"component")),(0,r.mdx)("td",{parentName:"tr",align:null},"The path to the component’s ",(0,r.mdx)("inlineCode",{parentName:"td"},".js")," file in terms of RequireJS."),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"'Magento_Ui/js/form/components/insert-listing'"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dataLinks"),".",(0,r.mdx)("inlineCode",{parentName:"td"},"exports")),(0,r.mdx)("td",{parentName:"tr",align:null},"Enable exporting from the insertListing's externalValue to the inserted Listing aggregated value."),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dataLinks"),".",(0,r.mdx)("inlineCode",{parentName:"td"},"imports")),(0,r.mdx)("td",{parentName:"tr",align:null},"Enable importing from the inserted Listing value to the insertListing's externalValue."),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"true"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"realTimeLink")),(0,r.mdx)("td",{parentName:"tr",align:null},"Enable the link between insertListing's externalValue and value. Here ",(0,r.mdx)("inlineCode",{parentName:"td"},"link")," means the two-way ",(0,r.mdx)("a",{parentName:"td",href:"../concepts/linking.md#links-property"},"links property")," of UI components, which allows immediate update."),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"true"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"render_url")),(0,r.mdx)("td",{parentName:"tr",align:null},"With default ",(0,r.mdx)("inlineCode",{parentName:"td"},"render_url(mui/index/render)")," listing will be without buttons. For get a list with buttons url must be changed to ",(0,r.mdx)("inlineCode",{parentName:"td"},"mui/index/render_handle")," and the following GET parameters:",(0,r.mdx)("br",null)," buttons=1 (flag to get buttons)",(0,r.mdx)("br",null)," handle= (buttons scope)"),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"'mui/index/render'"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"update_url")),(0,r.mdx)("td",{parentName:"tr",align:null},"Where the AJAX request will go to retrieve, foster component update data. It will be in json format by default and will be automatically set into ",(0,r.mdx)("inlineCode",{parentName:"td"},"externalProvider.data")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"'mui/index/render'"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"selectionsProvider")),(0,r.mdx)("td",{parentName:"tr",align:null},"The source selector for Ajax request of the main form through the identifier of the 'selectionColumns'"),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"null")))),(0,r.mdx)("h2",{id:"source-files"},"Source files"),(0,r.mdx)("p",null,"Extends ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/components/insert.js"},(0,r.mdx)("inlineCode",{parentName:"a"},"Insert")),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/form/components/insert-listing.js"},(0,r.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/view/base/web/js/form/components/insert-listing.js"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/Component/Container.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/Component/Container.php")))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("h3",{id:"integration-form"},"Integration (form)"),(0,r.mdx)("p",null,"The following example shows how the InsertListing component integrates with the ",(0,r.mdx)("a",{parentName:"p",href:"form.md"},"Form")," component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<form>\n    ...\n    <fieldset>\n        <settings>\n            <level>1</level>\n            <collapsible>true</collapsible>\n            <label translate="true">Fieldset with listing</label>\n        </settings>\n        ...\n        <insertListing name="insert_listing_example" >\n            <settings>\n                <dataLinks>\n                    <exports>false</exports>\n                    <imports>true</imports>\n                </dataLinks>\n                <autoRender>true</autoRender>\n                <selectionsProvider>insert_listing_example.insert_listing_example.columns.ids</selectionsProvider>\n                <dataScope>insert_listing_example</dataScope>\n                <ns>insert_listing_example</ns>\n            </settings>\n        </insertListing>\n    </fieldset>\n</form>\n')),(0,r.mdx)("p",null,"The listing example insert_listing_example.xml:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">\n    <argument name="data" xsi:type="array">\n        <item name="js_config" xsi:type="array">\n            <item name="provider" xsi:type="string">insert_listing_example.insert_listing_example_data_source</item>\n        </item>\n    </argument>\n    <settings>\n        <spinner>columns</spinner>\n        <deps>\n            <dep>insert_listing_example.insert_listing_example_data_source</dep>\n        </deps>\n    </settings>\n    <dataSource name="insert_listing_example_data_source" component="Magento_Ui/js/grid/provider">\n        <settings>\n            <updateUrl path="mui/index/render"/>\n        </settings>\n        <dataProvider class="Vendor\\Module\\Ui\\Component\\Listing\\CustomDataProvider" name="insert_listing_example_data_source">\n            <settings>\n                <requestFieldName>id</requestFieldName>\n                <primaryFieldName>entity_id</primaryFieldName>\n            </settings>\n        </dataProvider>\n    </dataSource>\n    <listingToolbar name="listing_top">\n        <columnsControls name="columns_controls"/>\n        <filterSearch name="fulltext"/>\n        <filters name="listing_filters"/>\n    </listingToolbar>\n    <columns name="columns">\n        <selectionsColumn name="ids" sortOrder="10">\n            <settings>\n                <indexField>entity_id</indexField>\n            </settings>\n        </selectionsColumn>\n        <column name="id" sortOrder="20">\n            <settings>\n                <filter>textRange</filter>\n                <label translate="true">ID</label>\n                <sorting>asc</sorting>\n            </settings>\n        </column>\n        <column name="name" sortOrder="30">\n            <settings>\n                <filter>text</filter>\n                <label translate="true">Name</label>\n            </settings>\n        </column>\n    </columns>\n</listing>\n')),(0,r.mdx)("p",null,"Data provider:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\ndeclare(strict_types=1);\n\nnamespace Vendor\\Module\\Ui\\Component\\Listing;\n\nuse Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\DataProvider;\n\n/**\n * Class CustomDataProvider\n */\nclass CustomDataProvider extends DataProvider\n{\n    /**\n     * Get data\n     *\n     * @return array\n     */\n    public function getData()\n    {\n        return [\n            'items' => [\n                [\n                    'id' => 1,\n                    'name' => 'First Item'\n                ],\n                [\n                    'id' => 2,\n                    'name' => 'Second Item'\n                ],\n                [\n                    'id' => 3,\n                    'name' => 'Third Item'\n                ]\n            ],\n            'totalRecords' => 3\n        ];\n    }\n}\n")),(0,r.mdx)("h4",{id:"result"},"Result"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/5530d/ui-insertlisting-result.webp 320w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/0c8fb/ui-insertlisting-result.webp 640w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/94b1e/ui-insertlisting-result.webp 1280w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/0b34d/ui-insertlisting-result.webp 1920w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/d5269/ui-insertlisting-result.webp 2560w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/a42a5/ui-insertlisting-result.webp 2620w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/dd4a7/ui-insertlisting-result.png 320w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/0f09e/ui-insertlisting-result.png 640w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/bbbf7/ui-insertlisting-result.png 1280w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/ac7a9/ui-insertlisting-result.png 1920w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/c7a69/ui-insertlisting-result.png 2560w","/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/ce8bf/ui-insertlisting-result.png 2620w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/aca5580747c8da9b99ce6ac34d2b3719/bbbf7/ui-insertlisting-result.png",alt:"InsertListing Component example",title:"InsertListing Component example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h3",{id:"integration-modal"},"Integration (modal)"),(0,r.mdx)("p",null,"Here is an example of how the InsertListing component integrates with the ",(0,r.mdx)("a",{parentName:"p",href:"modal.md"},"Modal")," component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<form>\n    <fieldset>\n        <button name="insert_listing_example_modal_button" component="Magento_Ui/js/form/components/button">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="buttonClasses" xsi:type="string">open-insert-listing-example-modal-button</item>\n                    <item name="actions" xsi:type="array">\n                        <item name="0" xsi:type="array">\n                            <item name="targetName" xsi:type="string">${ $.parentName}.insert_listing_example_modal.insert_listing_example_loader</item>\n                            <item name="actionName" xsi:type="string">destroyInserted</item>\n                        </item>\n                        <item name="1" xsi:type="array">\n                            <item name="targetName" xsi:type="string">${ $.parentName}.insert_listing_example_modal</item>\n                            <item name="actionName" xsi:type="string">openModal</item>\n                        </item>\n                        <item name="2" xsi:type="array">\n                            <item name="targetName" xsi:type="string">${ $.parentName}.insert_listing_example_modal.insert_listing_example_loader</item>\n                            <item name="actionName" xsi:type="string">render</item>\n                        </item>\n                    </item>\n                </item>\n            </argument>\n            <settings>\n                <title translate="true">Open Insert Listing Example</title>\n            </settings>\n        </button>\n        <modal name="insert_listing_example_modal">\n            <settings>\n                <options>\n                    <option name="title" xsi:type="string">Insert Listing Modal</option>\n                </options>\n            </settings>\n            <insertForm name="insert_listing_example_loader">\n                <settings>\n                    <formSubmitType>ajax</formSubmitType>\n                    <renderUrl path="mui/index/render">\n                        <param name="handle">insert_listing_example</param>\n                        <param name="buttons">1</param>\n                    </renderUrl>\n                    <loading>false</loading>\n                    <toolbarContainer>${ $.parentName }</toolbarContainer>\n                    <ns>insert_listing_example</ns>\n                </settings>\n            </insertForm>\n        </modal>\n    </fieldset>\n</form>\n')),(0,r.mdx)("h4",{id:"result-1"},"Result"),(0,r.mdx)("p",null,"As a result, we see the button which opens the modal pop-up with listing:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"470px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/e626bf1761aabdc76b579760db105666/5530d/ui-insertlisting-open-button-result.webp 320w","/commerce-frontend-core/static/e626bf1761aabdc76b579760db105666/c63eb/ui-insertlisting-open-button-result.webp 470w"],sizes:"(max-width: 470px) 100vw, 470px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/e626bf1761aabdc76b579760db105666/dd4a7/ui-insertlisting-open-button-result.png 320w","/commerce-frontend-core/static/e626bf1761aabdc76b579760db105666/c52b7/ui-insertlisting-open-button-result.png 470w"],sizes:"(max-width: 470px) 100vw, 470px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/e626bf1761aabdc76b579760db105666/c52b7/ui-insertlisting-open-button-result.png",alt:"Button that opens the modal pop-up with InsertListing Component",title:"Button that opens the modal pop-up with InsertListing Component",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/5530d/ui-insertlisting-modal-result.webp 320w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/0c8fb/ui-insertlisting-modal-result.webp 640w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/94b1e/ui-insertlisting-modal-result.webp 1280w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/0b34d/ui-insertlisting-modal-result.webp 1920w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/d5269/ui-insertlisting-modal-result.webp 2560w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/da28f/ui-insertlisting-modal-result.webp 2880w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/dd4a7/ui-insertlisting-modal-result.png 320w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/0f09e/ui-insertlisting-modal-result.png 640w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/bbbf7/ui-insertlisting-modal-result.png 1280w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/ac7a9/ui-insertlisting-modal-result.png 1920w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/c7a69/ui-insertlisting-modal-result.png 2560w","/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/f9c26/ui-insertlisting-modal-result.png 2880w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/80a749fa8435940cd598549786d154f1/bbbf7/ui-insertlisting-modal-result.png",alt:"InsertListing Component in the Modal Component example",title:"InsertListing Component in the Modal Component example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-insert-listing-md-3aa1ea43be1e22c1d185.js.map