"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[9450],{4269:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return g}});var i=t(87462),a=t(45987),o=(t(35776),t(3905)),r=t(91515);const l=["components"],d={},m={_frontmatter:d},s=r.Z;function g(e){let{components:n}=e,t=(0,a.Z)(e,l);return(0,o.mdx)(s,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"wysiwyg-extension-points"},"WYSIWYG extension points"),(0,o.mdx)("p",null,"This topic goes over the extension points for entities.\nYou can use these connection points to integrate entities into third-party WYSIWYG editors."),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"add-custom-editor.md"},"Add a third-party editor")," for instructions on how to add a third-party WYSIWYG editor to Magento."),(0,o.mdx)("h2",{id:"entity-integration"},"Entity integration"),(0,o.mdx)("p",null,"The specific steps needed to create an editor plugin vary between different editors, but\nfor most editors, it usually involves creating an icon or button for the plugin and executing JavaScript code when clicked."),(0,o.mdx)("p",null,"Use the following steps as a starting point for integrating entities into your custom WYSIWYG editor."),(0,o.mdx)("h3",{id:"step-1-create-plugin-directory-structure"},"Step 1. Create plugin directory structure"),(0,o.mdx)("p",null,"Create the appropriate plugin directory structure for the entity inside your editor's directory."),(0,o.mdx)("p",null,"For example, both TinyMCE and CKEditor editors both have a ",(0,o.mdx)("inlineCode",{parentName:"p"},"plugins")," directory that holds all available plugins."),(0,o.mdx)("p",null,"This folder should be inside your module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"/view/<area>")," directory so it will be published to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"pub/static")," directory."),(0,o.mdx)("h3",{id:"step-2-add-editor-icon"},"Step 2. Add editor icon"),(0,o.mdx)("p",null,"Add the appropriate icon file into your plugin's specific icon or image directory."),(0,o.mdx)("p",null,"For example, in a CKEditor4 plugin, these icons would be added to the following locations:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"app/code/CKEditor/CKEditor4/view/base/web/js/ckeditor4/plugins/variable/icons/variable.png")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"app/code/CKEditor/CKEditor4/view/base/web/js/ckeditor4/plugins/widget/icons/widget.png"))),(0,o.mdx)("h3",{id:"step-3-implement-plugin-functionality"},"Step 3. Implement plugin functionality"),(0,o.mdx)("h4",{id:"variable-entity"},"Variable entity"),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/web/mage/adminhtml/wysiwyg/tiny_mce/plugins/magentovariable/editor_plugin.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"MagentovariablePlugin"))," object to implement the plugin functionality for the variable entity."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example:")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib/web/mage/adminhtml/wysiwyg/tiny_mce/plugins/magentovariable/editor_plugin.js")," for ",(0,o.mdx)("inlineCode",{parentName:"p"},"magentovariable")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Initialize editor plugin.\n *\n * @param {tinymce.editor} editor - Editor instance that the plugin is initialized in.\n */\ninit: function (ed) {\n    var self = this;\n    /**\n    * Add new command to open variables selector slideout.\n    */\n    editor.addCommand('openVariablesSlideout', function (commandConfig) {\n        var selectedElement;\n\n        if (commandConfig) {\n            selectedElement = commandConfig.selectedElement;\n        } else {\n            selectedElement = tinymce.activeEditor.selection.getNode();\n        }\n        MagentovariablePlugin.setEditor(editor);\n        MagentovariablePlugin.loadChooser(\n            config.url,\n            wysiwyg.getId(),\n            selectedElement\n        );\n    });\n\n    editor.ui.registry.addToggleButton('magentovariable', {\n        icon: 'magentovariable',\n        tooltip: jQuery.mage.__('Insert Variable'),\n\n        /**\n         * execute openVariablesSlideout for onAction callback\n         */\n        onAction: function () {\n            editor.execCommand('openVariablesSlideout');\n        },\n\n        /**\n         * Highlight or dismiss Insert Variable button when variable is selected or deselected.\n         */\n        onSetup: function (api) {\n            /**\n             * Toggle active state of Insert Variable button.\n             *\n             * @param {Object} e\n             */\n            var toggleVariableButton = function (e) {\n                api.setActive(false);\n\n                if (jQuery(e.target).hasClass('magento-variable')) {\n                    api.setActive(true);\n                }\n            };\n\n            editor.on('click', toggleVariableButton);\n            editor.on('change', toggleVariableButton);\n        }\n    });\n    ......\n},\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example:")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"plugin.js")," for ",(0,o.mdx)("inlineCode",{parentName:"p"},"variable")," plugin for CKEditor4"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/* global CKEDITOR, MagentovariablePlugin, varienGlobalEvents, Base64 */\n/* eslint-disable strict */\nCKEDITOR.plugins.add('variable', {\n    icons: 'variable',\n\n    /**\n     * Initialize editor plugin.\n     */\n    init: function (editor) {\n\n        /**\n         * Add new command to open variables selector slideout.\n         */\n        editor.addCommand('openVariablesSlideout', {\n            exec: function (editor) {\n\n                require([\n                    'CKEditor_CKEditor4/js/ckeditor4/ckeditor'\n                ], function (ckeditor) {\n                    //we need this code to transfer config\n                    var pluginSettings = ckeditor.settings.magentoPluginsOptions.get('variable');\n\n                    MagentovariablePlugin.setEditor(editor);\n                    MagentovariablePlugin.loadChooser(pluginSettings.url, ckeditor.settings.elements);\n                });\n            }\n        });\n\n        /**\n         * Add button to the editor toolbar.\n         */\n        editor.ui.addButton('variable', {\n            label: jQuery.mage.__('Insert Variable'),\n            command: 'openVariablesSlideout',\n            toolbar: 'insert'\n\n        });\n    },\n});\n")),(0,o.mdx)("p",null,"To integrate the default application UI for variable, you must have access to the following data:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"backend URL to load the ",(0,o.mdx)("inlineCode",{parentName:"p"},"variable_modal")),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Example:")," method that returns this url"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"public function getVariablesWysiwygActionUrl()\n{\n    return $this->_url->getUrl('mui/index/render', ['namespace' => 'variables_modal']);\n}\n"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"htmlId of the WYSIWYG editor.\nFor CKEditor4, you can get this by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"editor.element.getId()"),"."))),(0,o.mdx)("h4",{id:"widget-entity"},"Widget entity"),(0,o.mdx)("p",null,"Use the global ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/web/mage/adminhtml/wysiwyg/tiny_mce/plugins/magentowidget/editor_plugin.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"widgetTools"))," object to implement the plugin functionality for the widget entity."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example:")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib/web/mage/adminhtml/wysiwyg/tiny_mce/plugins/magentowidget/editor_plugin.js")," for ",(0,o.mdx)("inlineCode",{parentName:"p"},"magentowidget")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {tinymceDeprecated.Editor} ed - Editor instance that the plugin is initialized in.\n * @param {String} url - Absolute URL to where the plugin is located.\n */\ninit: function (ed, url) {\n    ....\n    editor.addCommand('mceMagentowidget', function (img) {\n        if (self.activePlaceholder) {\n            img = self.activePlaceholder;\n        }\n\n        widgetTools.setActiveSelectedNode(img);\n        widgetTools.openDialog(\n            config['window_url'] + 'widget_target_id/' + editor.getElement().id + '/'\n        );\n    });\n\n    editor.ui.registry.addToggleButton('magentowidget', {\n        icon: 'magentowidget',\n        tooltip: jQuery.mage.__('Insert Widget'),\n\n        /**\n         * execute openVariablesSlideout for onAction callback\n         */\n        onAction: function () {\n            editor.execCommand('mceMagentowidget');\n        },\n\n        /**\n         * Add a node change handler, selects the button in the UI when a image is selected\n         * @param {ToolbarToggleButtonInstanceApi} api\n         */\n        onSetup: function (api) {\n            /**\n             * NodeChange handler\n             */\n            editor.on('NodeChange', function (e) {\n                var placeholder = e.element;\n\n                if (self.isWidgetPlaceholderSelected(placeholder)) {\n                    widgetTools.setEditMode(true);\n                    api.setActive(true);\n                } else {\n                    widgetTools.setEditMode(false);\n                    api.setActive(false);\n                }\n            });\n        }\n    });\n.......\n},\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example:")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"plugin.js")," for ",(0,o.mdx)("inlineCode",{parentName:"p"},"widget")," plugin for CKEditor4"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/* global CKEDITOR, MagentovariablePlugin, varienGlobalEvents, Base64 */\n/* eslint-disable strict */\nCKEDITOR.plugins.add('widget', {\n    icons: 'widget',\n\n    /**\n     * Initialize editor plugin.\n     *\n     * @param {tinymce.editor} editor - Editor instance that the plugin is initialized in.\n     * @param {String} url - Absolute URL to where the plugin is located.\n     */\n    init: function (editor) {\n        var self = this;\n\n        require([\n            'Magento_Variable/js/config-directive-generator',\n            'Magento_Variable/js/custom-directive-generator'\n        ], function (configDirectiveGenerator, customDirectiveGenerator) {\n            self.configDirectiveGenerator = configDirectiveGenerator;\n            self.customDirectiveGenerator = customDirectiveGenerator;\n        });\n\n        /**\n         * Add new command to open variables selector slideout.\n         */\n        editor.addCommand('mceMagentowidget', {\n            exec: function (editor) {\n\n                require([\n                    'CKEditor_CKEditor4/js/ckeditor4/ckeditor'\n                ], function (ckeditor) {\n                    widgetTools.openDialog(\n                        ckeditor.settings['widget_window_url'] + 'widget_target_id/' + editor.element.getId()+ '/'\n                    );\n                });\n            }\n        });\n\n        /**\n         * Add button to the editor toolbar.\n         */\n        editor.ui.addButton('widget', {\n            label: jQuery.mage.__('Insert Widget'),\n            command: 'mceMagentowidget',\n            toolbar: 'insert'\n\n        });\n    }\n});\n")),(0,o.mdx)("p",null,"To integrate the default application UI for widgets, you need access to the following data:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The backend ",(0,o.mdx)("inlineCode",{parentName:"li"},"widget_window_url")," (",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Widget\\Model\\Widget\\Config::getWidgetWindowUrl"),")"),(0,o.mdx)("li",{parentName:"ul"},"htmlId of the WYSIWYG editor. For CKEditor4, you can get this by calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"editor.element.getId()"),".")),(0,o.mdx)("h4",{id:"media-gallery-entity"},"Media Gallery entity"),(0,o.mdx)("p",null,"Use the global ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/web/mage/adminhtml/browser.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"MediabrowserUtility"))," object to implement or override image browsing functionality in the editor."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example:")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib/web/mage/adminhtml/wysiwyg/tiny_mce/tinymce5Adapter.js")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},".....\n/**\n * @param {Object} o\n */\nopenFileBrowser: function (o) {\n    var typeTitle = this.translate('Select Images'),\n        storeId = this.config['store_id'] ? this.config['store_id'] : 0,\n        frameDialog = jQuery('div.mce-container[role=\"dialog\"]'),\n        self = this,\n        wUrl = this.config['files_browser_window_url'] +\n            'target_element_id/' + this.getId() + '/' +\n            'store/' + storeId + '/';\n\n    this.mediaBrowserOpener = o.callback;\n\n    if (typeof o.meta.filetype !== 'undefined' && o.meta.filetype !== '') { //eslint-disable-line eqeqeq\n        wUrl = wUrl + 'type/' + o.meta.filetype + '/';\n    }\n\n    frameDialog.hide();\n    jQuery('.tox-tinymce-aux').hide();\n\n    require(['mage/adminhtml/browser'], function () {\n        MediabrowserUtility.openDialog(wUrl, false, false, typeTitle, {\n                /**\n                 * Closed.\n                 */\n                closed: function () {\n                    frameDialog.show();\n                    jQuery('.tox-tinymce-aux').show();\n                },\n\n                targetElementId: self.activeEditor() ? self.activeEditor().id : null\n            }\n        );\n    });\n},\n.....\n")),(0,o.mdx)("h4",{id:"step-4-register-plugin"},"Step 4. Register plugin"),(0,o.mdx)("p",null,"Use the editor specific command or steps needed to register your plugin with the editor."),(0,o.mdx)("p",null,"For example, TinyMCE3 has a ",(0,o.mdx)("inlineCode",{parentName:"p"},"PluginManager.add()")," method while CKEditor requires you to modify a configuration file."),(0,o.mdx)("h2",{id:"configuration"},"Configuration"),(0,o.mdx)("p",null,"Configuration for the WYSIWYG editor and available entities is implemented in the following class:"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Cms/Model/Wysiwyg/Config.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento\\Cms\\Model\\Wysiwyg\\Config"))),(0,o.mdx)("p",null,"This class has a ",(0,o.mdx)("inlineCode",{parentName:"p"},"getConfig()")," method that returns the all available configurations as an array."),(0,o.mdx)("p",null,"The class that aggregates the data in the array is the configuration provider class:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Cms\\Model\\Wysiwyg\\CompositeConfigProvider")),(0,o.mdx)("p",null,"In your module's ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/dependency-injection-file/"},(0,o.mdx)("inlineCode",{parentName:"a"},"di.xml"))," file, you can define a ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/dependency-injection-file/#virtual-types"},"virtual type")," of this class to substitute or modify the following configuration providers:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Argument name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"variablePluginConfigProvider")),(0,o.mdx)("td",{parentName:"tr",align:null},"Provider for variable plugin configuration")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"widgetPluginConfigProvider")),(0,o.mdx)("td",{parentName:"tr",align:null},"Provider for widget plugin configuration")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"galleryConfigProvider")),(0,o.mdx)("td",{parentName:"tr",align:null},"Provider for the media gallery configuration")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"wysiwygConfigPostProcessor")),(0,o.mdx)("td",{parentName:"tr",align:null},"Provider for WYSIWYG editor configuration")))),(0,o.mdx)("p",null,"If your implementation does not require any modifications to the configuration, you can use the default implementation:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Cms\\Model\\WysiwygDefaultConfig")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example di.xml file entry for TinyMCE editor:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Cms\\Model\\Wysiwyg\\CompositeConfigProvider">\n    <arguments>\n        <argument name="variablePluginConfigProvider" xsi:type="array">\n            <item name="default" xsi:type="string">Magento\\Variable\\Model\\Variable\\ConfigProvider</item>\n        </argument>\n        <argument name="widgetPluginConfigProvider" xsi:type="array">\n            <item name="default" xsi:type="string">Magento\\Widget\\Model\\Widget\\Config</item>\n        </argument>\n        <argument name="wysiwygConfigPostProcessor" xsi:type="array">\n            <item name="default" xsi:type="string">Magento\\Cms\\Model\\Wysiwyg\\DefaultConfigProvider</item>\n        </argument>\n        <argument name="galleryConfigProvider" xsi:type="array">\n            <item name="default" xsi:type="string">Magento\\Cms\\Model\\Wysiwyg\\Gallery\\DefaultConfigProvider</item>\n        </argument>\n    </arguments>\n</type>\n')),(0,o.mdx)("h3",{id:"configuration-providers"},"Configuration providers"),(0,o.mdx)("p",null,"Configuration providers are classes with a ",(0,o.mdx)("inlineCode",{parentName:"p"},"getConfig()")," method that returns the configuration for a specific entity.\nThese classes are implementations of the following interface:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\Data\\Wysiwyg\\ConfigProviderInterface")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"name")," attribute for the configuration provider in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"di.xml")," entry must match the editor's registered option value.\nIn the example provided, this value is ",(0,o.mdx)("inlineCode",{parentName:"p"},"default")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-wysiwyg-extension-points-md-4c7a15f4cddc82129483.js.map