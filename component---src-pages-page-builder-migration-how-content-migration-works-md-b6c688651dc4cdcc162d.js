"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[201],{37623:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var n=a(87462),r=a(45987),i=(a(35776),a(3905)),o=a(91515);const d=["components"],l={},m={_frontmatter:l},s=o.Z;function p(e){let{components:t}=e,a=(0,r.Z)(e,d);return(0,i.mdx)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"how-content-migration-works"},"How content migration works"),(0,i.mdx)("p",null,"Each content type has a corresponding renderer to convert the old BlueFoot JSON structure into the new PageBuilder format. The Page Builder format uses HTML to store all data associated with the content type within the DOM tree through attributes, styles, and child nodes. See ",(0,i.mdx)("a",{parentName:"p",href:"../architecture/index.md"},"Page Builder architecture")," and ",(0,i.mdx)("a",{parentName:"p",href:"../architecture/configurations.md"},"Configurations")," for more information."),(0,i.mdx)("p",null,"In contrast to BlueFoot, the HTML structure we generate contains all the information needed to render the content type, this HTML string is committed directly into the database in place of the BlueFoot string."),(0,i.mdx)("p",null,"Migrating will result in any field containing ",(0,i.mdx)("inlineCode",{parentName:"p"},'\x3c!--GENE_BLUEFOOT="…"--\x3e')," to now containing valid HTML with embedded metadata storing the configuration of the content type."),(0,i.mdx)("h2",{id:"data-converters"},"Data Converters"),(0,i.mdx)("p",null,"We have two data converters provided out of the box which enable migration of data from different sources."),(0,i.mdx)("p",null,"These data converters are located within ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/PageBuilderDataMigration/Setup/DataConverter"),"."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"BlueFootToPageBuilder")),(0,i.mdx)("td",{parentName:"tr",align:null},"Consumes BlueFoot generated content structures formed of JSON and uses renderer's to convert every content type to Page Builder HTML. In the instance the data converter encounters an error it will store the original JSON as un-migrated content.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"MixedToPageBuilder")),(0,i.mdx)("td",{parentName:"tr",align:null},"If the above data converter fails on a particular piece of content due to an error or missing renderer for the content type it will have it's data preserved as un-migrated content. In this instance you can use the mixed data converter to run the un-migrated content blocks through the renderer's again.")))),(0,i.mdx)("p",null,"You can find more information on how to use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MixedToPageBuilder")," converter within our ",(0,i.mdx)("a",{parentName:"p",href:"migrate-content-custom-blocks.md"},"Migrate content from custom blocks")," guide. We do not use this data converter out of the box so it will not be ran unless the steps in the attached guide are followed."),(0,i.mdx)("h3",{id:"un-migrated-content"},"Un-migrated content"),(0,i.mdx)("p",null,"We have a custom error handler along with logic to ensure that any issue content which fails during migration is preserved. If this logic of error handler are triggered you can expect to see errors within ",(0,i.mdx)("inlineCode",{parentName:"p"},"var/log/system.log")," along with the content being stored like the following in your migrated output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},'<div data-element="main" data-content-type="row" data-appearance="contained">\n    <div data-element="main" data-content-type="html" data-appearance="default">\n        &lt;!--UNMIGRATED_CONTENT="{"type":"custom","children":[]}"--&gt;\n    </div>\n</div>\n')),(0,i.mdx)("p",null,"The content is placed within an HTML content type. The original JSON is stored within a similar HTML comment as the BlueFoot data. This ensures preservation of the content to be migrated at a later point. HTML code has its contents encoded, those the greater than and less than symbols being encoded."),(0,i.mdx)("p",null,"The usage of the HTML Code content type allows for other aspects of the page to be edited within Page Builder, while allowing this special content to be stored until the migration tools are available."),(0,i.mdx)("h2",{id:"renderer"},"Renderer"),(0,i.mdx)("p",null,"Every content type which is supported by the migration suite will have a renderer defined to translate the BlueFoot JSON data into valid Page Builder HTML. These renderers do not share the code used by the Page Builder tool itself due to our master format rendering being implemented in JavaScript."),(0,i.mdx)("p",null,"Each renderer implements a straightforward interface (",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\PageBuilder\\Setup\\DataConverter\\RendererInterface"),") which defines a single ",(0,i.mdx)("inlineCode",{parentName:"p"},"render")," method which is responsible for consuming the form & EAV data and returning the valid Page Builder HTML."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"interface RendererInterface\n{\n    /**\n     * Render HTML for content type\n     *\n     * @param array $itemData\n     * @param array $additionalData\n     * @return string\n     * @throws \\InvalidArgumentException\n     * @throws NoSuchEntityException\n     */\n    public function render(array $itemData, array $additionalData = []) : string;\n}\n")),(0,i.mdx)("h3",{id:"parameters"},"Parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"$itemData")),(0,i.mdx)("td",{parentName:"tr",align:null},"All associated item data for the content type, this will contain the form data along with the associated BlueFoot entity ID.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"$additionalData")),(0,i.mdx)("td",{parentName:"tr",align:null},"In some instances, there will be additional information associated with the content type. Most commonly used when a content type has children.")))),(0,i.mdx)("h3",{id:"location"},"Location"),(0,i.mdx)("p",null,"All the core content type renders are located in ",(0,i.mdx)("inlineCode",{parentName:"p"},"Setup/DataConverter/Renderer"),":"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"452px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"103.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3aeaf1bf6c4346740103137ba9b762d8/5530d/migration-core-renderers.webp 320w","/commerce-frontend-core/static/3aeaf1bf6c4346740103137ba9b762d8/a0edd/migration-core-renderers.webp 452w"],sizes:"(max-width: 452px) 100vw, 452px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/3aeaf1bf6c4346740103137ba9b762d8/dd4a7/migration-core-renderers.png 320w","/commerce-frontend-core/static/3aeaf1bf6c4346740103137ba9b762d8/80d88/migration-core-renderers.png 452w"],sizes:"(max-width: 452px) 100vw, 452px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/3aeaf1bf6c4346740103137ba9b762d8/80d88/migration-core-renderers.png",alt:"Core renderer location",title:"Core renderer location",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h3",{id:"example-renderer"},"Example Renderer"),(0,i.mdx)("p",null,"To learn more about renderers, let's look at the Heading renderer code, then discuss the key parts."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * Copyright &copy; Adobe, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndeclare(strict_types=1);\n\nnamespace Magento\\PageBuilderDataMigration\\Setup\\DataConverter\\Renderer;\n\nuse Magento\\PageBuilderDataMigration\\Setup\\DataConverter\\RendererInterface;\nuse Magento\\PageBuilderDataMigration\\Setup\\DataConverter\\EavAttributeLoaderInterface;\nuse Magento\\PageBuilderDataMigration\\Setup\\DataConverter\\StyleExtractorInterface;\nuse Magento\\PageBuilderDataMigration\\Setup\\DataConverter\\ElementRendererInterface;\n\nclass Heading implements RendererInterface\n{\n    /**\n     * @var StyleExtractorInterface\n     */\n    private $styleExtractor;\n\n    /**\n     * @var EavAttributeLoaderInterface\n     */\n    private $eavAttributeLoader;\n\n    /**\n     * @var ElementRendererInterface\n     */\n    private $elementRenderer;\n\n    /**\n     * @param StyleExtractorInterface $styleExtractor\n     * @param EavAttributeLoaderInterface $eavAttributeLoader\n     * @param ElementRendererInterface $elementRenderer\n     */\n    public function __construct(\n        StyleExtractorInterface $styleExtractor,\n        EavAttributeLoaderInterface $eavAttributeLoader,\n        ElementRendererInterface $elementRenderer\n    ) {\n        $this->styleExtractor = $styleExtractor;\n        $this->eavAttributeLoader = $eavAttributeLoader;\n        $this->elementRenderer = $elementRenderer;\n    }\n\n    /**\n     * @inheritdoc\n     *\n     * @throws \\Magento\\Framework\\Exception\\NoSuchEntityException\n     */\n    public function render(array $itemData, array $additionalData = []) : string\n    {\n        $eavData = isset($itemData['entityId']) ? $this->eavAttributeLoader->load($itemData['entityId']) : [];\n\n        $rootElementAttributes = [\n            'data-element' => 'main',\n            'data-content-type' => 'heading',\n            'data-appearance' => 'default',\n            'class' => $eavData['css_classes'] ?? ''\n        ];\n\n        $formData = $itemData['formData'] ?? [];\n        $rootElementAttributes['style'] = $this->styleExtractor->extractStyle(\n            $formData,\n            $this->getAdvancedDefaults()\n        );\n\n        return $this->elementRenderer->render(\n            $eavData['heading_type'] ?? 'h2',\n            $rootElementAttributes,\n            $eavData['title'] ?? ''\n        );\n    }\n\n    /**\n     * Define the defaults for the advanced section\n     *\n     * @return array\n     */\n    private function getAdvancedDefaults()\n    {\n        return [\n            'border-style' => 'none',\n            'border-width' => '1px',\n            'border-radius' => '0px',\n        ];\n    }\n}\n")),(0,i.mdx)("h3",{id:"parts-of-a-renderer"},"Parts of a renderer"),(0,i.mdx)("p",null,"The significant parts of a content type renderer are as follows:"),(0,i.mdx)("h4",{id:"constructor-dependency-injection"},"Constructor dependency injection"),(0,i.mdx)("p",null,"First, we use ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.3/extension-dev-guide/depend-inj.html"},"dependency injection")," to include our dependencies. These are all aspects of Data Migration that aid in retrieving and formatting data along with rendering DOM elements. We go into these in more detail below."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"    public function __construct(\n        StyleExtractorInterface $styleExtractor,\n        EavAttributeLoaderInterface $eavAttributeLoader,\n        ElementRendererInterface $elementRenderer\n    ) {\n        $this->styleExtractor = $styleExtractor;\n        $this->eavAttributeLoader = $eavAttributeLoader;\n        $this->elementRenderer = $elementRenderer;\n    }\n")),(0,i.mdx)("h4",{id:"render-function"},"Render function"),(0,i.mdx)("p",null,"We then have the initial part of our render function, as the Heading content type in BlueFoot stored some data in its EAV tables we need to retrieve that data using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"EavAttributeLoaderInterface"),". A renderer has to support rendering an empty content type as supported by BlueFoot, due to this reason we set the ",(0,i.mdx)("inlineCode",{parentName:"p"},"$eavData")," to an empty array if the content type is lacking an entity ID."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"    public function render(array $itemData, array $additionalData = []) : string\n    {\n        $eavData = isset($itemData['entityId']) ? $this->eavAttributeLoader->load($itemData['entityId']) : [];\n")),(0,i.mdx)("h4",{id:"root-element-attributes"},"Root element attributes"),(0,i.mdx)("p",null,"Next, we declare the root element attributes which should be rendered on our root element; this allows us to make modifications based on conditions further down if required. Note how we're ensuring if there is no value set for things like ",(0,i.mdx)("inlineCode",{parentName:"p"},"css_classes")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"formData")," we default these to empty arrays to allow the renderer to produce an output regardless."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"        $rootElementAttributes = [\n            'data-element' => 'main',\n            'data-content-type' => 'heading',\n            'data-appearance' => 'default',\n            'class' => $eavData['css_classes'] ?? ''\n        ];\n")),(0,i.mdx)("h4",{id:"form-data"},"Form data"),(0,i.mdx)("p",null,'Within BlueFoot, block data is stored in two different places: database EAV tables and JSON. Most of the data is stored in the EAV tables. However, the "advanced" section within BlueFoot is not persisted to the database. It is held in the JSON format. We refer to this as ',(0,i.mdx)("inlineCode",{parentName:"p"},"formData")," and ensure this value is present as an empty array if no data is provided as part of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"$itemdata"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"        $formData = $itemData['formData'] ?? [];\n")),(0,i.mdx)("h4",{id:"style-extractor"},"Style extractor"),(0,i.mdx)("p",null,"We retrieved the form data above for usage in the style extractor (",(0,i.mdx)("inlineCode",{parentName:"p"},"StyleExtractorInterface"),"), this serves as a helper class to retrieve and build the style declaration for the current content type based on the form data and any defaults, notably throughout the default renderers we use the function name ",(0,i.mdx)("inlineCode",{parentName:"p"},"getAdvancedDefaults"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"        $rootElementAttributes['style'] = $this->styleExtractor->extractStyle(\n            $formData,\n            $this->getAdvancedDefaults()\n        );\n")),(0,i.mdx)("h4",{id:"element-renderer"},"Element renderer"),(0,i.mdx)("p",null,"Along with the EAV & style classes we provide an element renderer class (",(0,i.mdx)("inlineCode",{parentName:"p"},"ElementRendererInterface"),") to help when generating DOM elements from the BlueFoot JSON. In our instance, our element should have the tag name associated with the heading type, or by default h2, along with our previously defined root element attributes. Finally, we use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"title")," from the EAV data as the contents of the element."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"        return $this->elementRenderer->render(\n            $eavData['heading_type'] ?? 'h2',\n            $rootElementAttributes,\n            $eavData['title'] ?? ''\n        );\n")),(0,i.mdx)("h4",{id:"default-form-values"},"Default form values"),(0,i.mdx)("p",null,"We declare the advanced defaults for this content type. Each Page Builder content type can define default values within its form declaration. These values are automatically applied to the content types master format on creation. BlueFoot did not implement the same system, which means you must declare the defaults for inclusion here manually."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"    private function getAdvancedDefaults()\n    {\n        return [\n            'border-style' => 'none',\n            'border-width' => '1px',\n            'border-radius' => '0px',\n        ];\n    }\n")),(0,i.mdx)("p",null,"In this instance, the defaults are very simple because there's only a single DOM element for the entire content type. However, in more complex content types, we break out the default values into separate functions within the ",(0,i.mdx)("inlineCode",{parentName:"p"},"getAdvancedDefaults()")," function."),(0,i.mdx)("h3",{id:"eavattributeloaderinterface"},(0,i.mdx)("inlineCode",{parentName:"h3"},"EavAttributeLoaderInterface")),(0,i.mdx)("p",null,"In BlueFoot, the majority of the content is persisted into the database using the entity-attribute-value (EAV) format, which means the content is not available in the JSON from ",(0,i.mdx)("inlineCode",{parentName:"p"},"$itemData"),"."),(0,i.mdx)("p",null,"Some content types do not persist content to the database, such as the row and column. However, for all content types that require it, you must define a virtual type declaring which EAV attributes should be loaded for the content type:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\PageBuilder\\Setup\\DataConverter\\ConfigurableEavAttributeLoader")," which in turn implements our ",(0,i.mdx)("inlineCode",{parentName:"p"},"EavAttributeLoaderInterface"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example ",(0,i.mdx)("inlineCode",{parentName:"strong"},"di.xml")," entry for EAV hydrator for Heading:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="HeadingEavAttributeLoader" type="Magento\\PageBuilder\\Setup\\DataConverter\\ConfigurableEavAttributeLoader">\n    <arguments>\n        <argument name="additionalEavAttributes" xsi:type="array">\n            <item name="title" xsi:type="string">title</item>\n            <item name="heading_type" xsi:type="string">heading_type</item>\n        </argument>\n    </arguments>\n</virtualType>\n')),(0,i.mdx)("p",null,"In this example, the EAV loader for Heading is assigned the ",(0,i.mdx)("inlineCode",{parentName:"p"},"title")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"heading_type")," attributes, this ensures the EAV attribute loader will retrieve these values within your renderer. Failing to include an attribute here will result in that attribute not being loaded."),(0,i.mdx)("p",null,"We then use ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.3/extension-dev-guide/depend-inj.html"},"dependency injection")," to inject our virtual configurable EAV loader into the Heading renderer."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example ",(0,i.mdx)("inlineCode",{parentName:"strong"},"di.xml")," entry for Heading renderer:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\PageBuilder\\Setup\\DataConverter\\Renderer\\Heading">\n    <arguments>\n        <argument name="eavAttributeLoader" xsi:type="object">HeadingEavAttributeLoader</argument>\n    </arguments>\n</type>\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"EavAttributeLoaderInterface")," includes a single method (",(0,i.mdx)("inlineCode",{parentName:"p"},"load"),") to load the EAV data:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"public function load($entityId) : array;\n")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"$entityId")),(0,i.mdx)("td",{parentName:"tr",align:null},"String  ","|"," Number"),(0,i.mdx)("td",{parentName:"tr",align:null},"BlueFoot entity ID associated with the current content type.")))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"$eavData = isset($itemData['entityId']) ? $this->eavAttributeLoader->load($itemData['entityId']) : [];\n")),(0,i.mdx)("h4",{id:"attributes-with-sources"},"Attributes with sources"),(0,i.mdx)("p",null,"Some BlueFoot attributes have sources for their data providing their actual values based on an ID. For instance, this is commonly used with boolean (Yes / No) values."),(0,i.mdx)("p",null,'We automatically follow these references and update the values with their associated labels, meaning a boolean will return the value "Yes" or "No".'),(0,i.mdx)("h3",{id:"styleextractorinterface"},(0,i.mdx)("inlineCode",{parentName:"h3"},"StyleExtractorInterface")),(0,i.mdx)("p",null,"We utilise the style extractor to help with translating the simple EAV stored values of BlueFoot into our new actual inline CSS expressions. This extractor exists as aspects of this operation can be tedious and result in lots of duplicated code between content types."),(0,i.mdx)("p",null,"The migration tool has a preference within it's ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file that aligns our interface with the concrete implementation. We import this dependency through our constructor using ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\PageBuilder\\Setup\\DataConverter\\StyleExtractorInterface"),"."),(0,i.mdx)("h4",{id:"extracting-styles"},"Extracting Styles"),(0,i.mdx)("p",null,"The first method we provide helps extract styles and generates the associated CSS strings from BlueFoot EAV or form data."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"public function extractStyle(array $formData, array $defaults = [], array $pluck = []) : string;\n")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"$formData")),(0,i.mdx)("td",{parentName:"tr",align:null},"Array"),(0,i.mdx)("td",{parentName:"tr",align:null},"Associative array of data from a BlueFoot block. This could be either the EAV data, the form data, or a combination of both.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"$defaults")),(0,i.mdx)("td",{parentName:"tr",align:null},"Array"),(0,i.mdx)("td",{parentName:"tr",align:null},"Associative array of default values which should be generated alongside the ",(0,i.mdx)("inlineCode",{parentName:"td"},"$formData"),". Existing values in the form data override any default values provided in this argument.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"$pluck")),(0,i.mdx)("td",{parentName:"tr",align:null},"Array"),(0,i.mdx)("td",{parentName:"tr",align:null},"Array of style keys to pluck from the generated styles. For example, ",(0,i.mdx)("inlineCode",{parentName:"td"},"['text-align', 'border-color']")," would provide just those two styles even if other styles were generated.")))),(0,i.mdx)("p",null,"Even if you do not have any ",(0,i.mdx)("inlineCode",{parentName:"p"},"$formData"),", you must still run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"extractStyle")," method on an empty array to ensure we apply the correct default styles to the content type. Default styles are important because they can drastically change the final appearance of the content type on the storefront and result in missing data in the admin."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Usage:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"$this->styleExtractor->extractStyle($formData, ['margin' => '10px'], ['margin']);\n")),(0,i.mdx)("h4",{id:"creating-a-style-string-from-an-array"},"Creating a style string from an array"),(0,i.mdx)("p",null,"There may be cases where you need to apply new styles to an element manually, without first extracting styles that don't exist using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"extractStyle"),". In these cases, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"createStyleFromArray")," function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"public function createStyleFromArray(array $styles) : string;\n")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"$styles")),(0,i.mdx)("td",{parentName:"tr",align:null},"Array"),(0,i.mdx)("td",{parentName:"tr",align:null},"Associative array of styles to be converted into a string. For example, ",(0,i.mdx)("inlineCode",{parentName:"td"},"['border-style': 'none']")," results in ",(0,i.mdx)("inlineCode",{parentName:"td"},"border-style: none;"),".")))),(0,i.mdx)("p",null,"This method helps ensure continuity between content types and their styles."),(0,i.mdx)("h3",{id:"children-content-blocks"},"Children content blocks"),(0,i.mdx)("p",null,"Some BlueFoot content types, such as the slider, can contain special child content types. Page Builder handles this differently. In Page Builder, all children are dealt with the same. In BlueFoot, these special children are stored in specific parts of the JSON data. For these particular instances, you will need to define a custom extractor for children to ensure that the migration module traverses the tree as expected."),(0,i.mdx)("p",null,"For structural content types such as rows and columns a custom children extractor is not required as they will use the default."),(0,i.mdx)("p",null,"During rendering, content types are processed from the bottom of the tree to the top. In other words, the system renders all child blocks first and makes the results available to the immediate parent for placement."),(0,i.mdx)("p",null,"Using a virtual type of ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\PageBuilder\\Setup\\DataConverter\\ChildrenExtractor\\Configurable")," we can define the path to which the child items are located within the BlueFoot data."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example ",(0,i.mdx)("inlineCode",{parentName:"strong"},"di.xml")," entry:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="ButtonsChildrenExtractor" type="Magento\\PageBuilder\\Setup\\DataConverter\\ChildrenExtractor\\Configurable">\n    <arguments>\n        <argument name="path" xsi:type="string">children/button_items</argument>\n    </arguments>\n</virtualType>\n')),(0,i.mdx)("p",null,"After the system renders the child blocks, the content is available to the parent renderer through ",(0,i.mdx)("inlineCode",{parentName:"p"},"$additionalData['children']")," as a string. If the content type has no children this array item will not be set, so you should validate first before attempting to use it."),(0,i.mdx)("p",null,"All children extractors must implement ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\PageBuilder\\Setup\\DataConverter\\ChildrenExtractorInterface"),"; the path should be provided using ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," into the constructor, the extractor for children provides a single method (",(0,i.mdx)("inlineCode",{parentName:"p"},"extract"),") for retrieving the defined children:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"public function extract(array $data) : array;\n")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"$data")),(0,i.mdx)("td",{parentName:"tr",align:null},"Array"),(0,i.mdx)("td",{parentName:"tr",align:null},"The BlueFoot content types structured data.")))),(0,i.mdx)("p",null,"This function is called internally when traversing the BlueFoot structure and should not be called within individual renderers."),(0,i.mdx)("h3",{id:"renderer-pool"},"Renderer Pool"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file declares which content type renderers are available in the renderer pool. The core PageBuilder module implements content type renderers for all its core content types."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example di.xml file:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\PageBuilder\\Setup\\DataConverter\\RendererPool">\n    <arguments>\n        <argument name="renderers" xsi:type="array">\n            <item name="row" xsi:type="object">Magento\\PageBuilder\\Setup\\DataConverter\\Renderer\\Row</item>\n            <item name="column" xsi:type="object">Magento\\PageBuilder\\Setup\\DataConverter\\Renderer\\Column</item>\n            <item name="heading" xsi:type="object">Magento\\PageBuilder\\Setup\\DataConverter\\Renderer\\Heading</item>\n            ....\n        </argument>\n    </arguments>\n</type>\n')),(0,i.mdx)("p",null,"If you are creating a new renderer for migration outside the PageBuilder module, you only need to list your custom renderer in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"renderers")," array in your ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file."),(0,i.mdx)("h2",{id:"custom-content-types"},"Custom Content Types"),(0,i.mdx)("p",null,"You can create a custom content type renderer as we've displayed here by following our article: ",(0,i.mdx)("a",{parentName:"p",href:"migrate-content-custom-blocks.md"},"Migrate custom content types"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-page-builder-migration-how-content-migration-works-md-b6c688651dc4cdcc162d.js.map