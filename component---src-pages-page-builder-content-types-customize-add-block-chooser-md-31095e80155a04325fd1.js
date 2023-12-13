"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[193],{57260:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(87462),i=n(45987),o=(n(35776),n(3905)),d=n(91515);const r=["components"],l={},m={_frontmatter:l},s=d.Z;function p(e){let{components:t}=e,n=(0,i.Z)(e,r);return(0,o.mdx)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"add-a-block-chooser"},"Add a block chooser"),(0,o.mdx)("p",null,"This topic describes how to use the block chooser UI component for a custom content type."),(0,o.mdx)("h2",{id:"configuration-options"},"Configuration options"),(0,o.mdx)("p",null,"Extends all ",(0,o.mdx)("inlineCode",{parentName:"p"},"abstract")," configuration."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_PageBuilder/js/form/element/block-chooser")," configuration options:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Option"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"dataUrlConfigPath")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The path inside the Page Builder configuration object that points to the controller URL used to request data for display in the grid. For example, if you use the ",(0,o.mdx)("inlineCode",{parentName:"td"},"additional_data")," configuration feature and add the URL, you could specify content_types.",(0,o.mdx)("inlineCode",{parentName:"td"},"mycontenttype.additional_data.my_cusom_property.my_data_url"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"requestParameter")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The parameter name under which the selected entity ID will be sent when the component retrieves the metadata from the controller (which is specified by ",(0,o.mdx)("inlineCode",{parentName:"td"},"dataUrlConfigPath"),"). The default template is expecting the associated controller to return (at minimum) ",(0,o.mdx)("inlineCode",{parentName:"td"},"title")," and ",(0,o.mdx)("inlineCode",{parentName:"td"},"is_active"),". You can override the component template with the ",(0,o.mdx)("inlineCode",{parentName:"td"},"template")," attribute for the ",(0,o.mdx)("inlineCode",{parentName:"td"},"component")," element, and display desired data using a custom controller.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"modalName")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The UI registry key to the UI component that is representing the modal containing the ",(0,o.mdx)("inlineCode",{parentName:"td"},"pagebuild_block_select_grid")," listing. For example, if you include the modal element with the name ",(0,o.mdx)("inlineCode",{parentName:"td"},"modal")," in the root of your content type form, you could set it to ",(0,o.mdx)("inlineCode",{parentName:"td"},"ns = ${ $.ns }, index = modal"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"buttonTitle")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The text displayed on the button used to open the block selection modal.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"displayMetadata")),(0,o.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,o.mdx)("td",{parentName:"tr",align:null},"Denotes whether to display the information grid describing the block in more detail; ",(0,o.mdx)("inlineCode",{parentName:"td"},"true")," by default.")))),(0,o.mdx)("h2",{id:"add-the-block-select-grid-listing-modal-to-content-type-xml"},"Add the block select grid listing modal to content type XML"),(0,o.mdx)("p",null,"To add the block select grid listing modal, ",(0,o.mdx)("inlineCode",{parentName:"p"},"pagebuilder_block_select_grid"),", to the XML file for a content type, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_PageBuilder/view/base/pagebuilder/content_type/<your-content-type>.xml"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<modal name="modal" sortOrder="30">\n    <settings>\n        <options>\n            <option name="title" xsi:type="string" translate="true">Select Block...</option>\n            <option name="buttons" xsi:type="array">\n                <item name="0" xsi:type="array">\n                    <item name="text" xsi:type="string" translate="true">Cancel</item>\n                    <item name="actions" xsi:type="array">\n                        <item name="0" xsi:type="string">closeModal</item>\n                    </item>\n                </item>\n                <item name="1" xsi:type="array">\n                    <item name="text" xsi:type="string">Add Selected</item>\n                    <item name="class" xsi:type="string">action-primary</item>\n                    <item name="actions" xsi:type="array">\n                        <item name="0" xsi:type="array">\n                            <item name="targetName" xsi:type="string">${ $.name }.pagebuilder_block_select_grid</item>\n                            <item name="actionName" xsi:type="string">save</item>\n                        </item>\n                        <item name="1" xsi:type="string">closeModal</item>\n                    </item>\n                </item>\n            </option>\n        </options>\n    </settings>\n    <insertListing name="pagebuilder_block_select_grid" sortOrder="10">\n        <settings>\n            <externalData>block_id</externalData>\n            <externalProvider>${ $.ns }.pagebuilder_block_select_grid_data_source</externalProvider>\n            <loading>false</loading>\n            <selectionsProvider>${ $.ns }.${ $.ns }.columns.ids</selectionsProvider>\n            <autoRender>true</autoRender>\n            <dataScope>select_id</dataScope>\n            <ns>pagebuilder_block_select_grid</ns>\n            <dataLinks>\n                <imports>false</imports>\n                <exports>true</exports>\n            </dataLinks>\n        </settings>\n    </insertListing>\n</modal>\n')),(0,o.mdx)("p",null,"If desired, modify the ",(0,o.mdx)("inlineCode",{parentName:"p"},"title")," option to fit your situation."),(0,o.mdx)("h2",{id:"add-component-to-content-type-xml"},"Add component to content type XML"),(0,o.mdx)("p",null,"To insert the block chooser UI component, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_PageBuilder/js/form/element/block-chooser"),", into the XML file for a content type, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_PageBuilder/view/base/pagebuilder/content_type/<your-content-type>.xml"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<component component="Magento_PageBuilder/js/form/element/block-chooser" name="block_chooser" sortOrder="10">\n    <argument name="data" xsi:type="array">\n        <item name="config" xsi:type="array">\n            <item name="requestParameter" xsi:type="string">block_id</item>\n            <item name="dataUrlConfigPath" xsi:type="string">content_types.block.additional_data.chooserConfig.dataUrl</item>\n            <item name="modalName" xsi:type="string">ns = ${ $.ns }, index = modal</item>\n            <item name="buttonTitle" xsi:type="string" translate="true">Select Block...</item>\n        </item>\n    </argument>\n    <settings>\n        <imports>\n            \x3c!-- This references the value of the block_id field below --\x3e\n            <link name="id">${ $.ns }.${ $.ns }.general.block_id:value</link>\n        </imports>\n    </settings>\n</component>\n<field name="block_id" formElement="hidden" sortOrder="20">\n    <settings>\n        <dataType>text</dataType>\n        <imports>\n            <link name="value">${ $.ns }.${ $.ns }.modal.pagebuilder_block_select_grid:externalValue</link>\n        </imports>\n    </settings>\n</field>\n')),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"block_id")," field pulls in the selected value from the modal."),(0,o.mdx)("p",null,"Then the ",(0,o.mdx)("inlineCode",{parentName:"p"},"block_chooser")," component pulls in the value from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"block_id")," field to ascertain when it should commence updating."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-content-types-customize-add-block-chooser-md-31095e80155a04325fd1.js.map