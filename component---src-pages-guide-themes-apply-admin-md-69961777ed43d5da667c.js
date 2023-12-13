"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7629],{83541:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var m=t(87462),o=t(45987),a=(t(35776),t(3905)),i=t(91515);const d=["components"],l={},r=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var p;const s={_frontmatter:l},c=i.Z;function u(e){let{components:n}=e,t=(0,o.Z)(e,d);return(0,a.mdx)(c,(0,m.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"apply-an-admin-theme"},"Apply an Admin theme"),(0,a.mdx)("p",null,"This topic describes how to apply your custom theme for Admin."),(0,a.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/set-mode.html"},"Set")," your application to the developer ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/setup/application-modes.html"},"mode"),". The application mode influences the way static files are cached.")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"../themes/create-admin.md"},"Create a custom theme for the Admin panel"),".")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/"},"Add a new custom module")," or decide to use existing custom module. The module must load after the Magento_Theme module. To ensure this, add the following code in ",(0,a.mdx)("inlineCode",{parentName:"p"},"<your_custom_module_dir>/etc/module.xml")," (replace placeholders with your module information):"),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-xml"},'<module name="%YourVendor_YourModule%" setup_version="2.0.1"> \x3c!-- Example: "Magento_Backend" --\x3e\n   <sequence>\n      <module name="Magento_Theme"/>\n      <module name="Magento_Enterprise"/> \x3c!-- For Enterprise versions only --\x3e\n   </sequence>\n</module>\n')))),(0,a.mdx)(r,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"If you choose to create a separate dedicated module, you can use the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2-samples/tree/master/sample-module-minimal"},"Magento_SampleMinimal module from the sample modules repository")," as example of a minimal module you need. If you will copy and use Magento_SampleMinimal, do not forget to enter your vendor and module naming, instead the ones used in the sample, in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"<your_module_dir>/etc/module.xml"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"<your_module_dir>/registration.php"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"and <your_module_dir>/composer.json")," files."),(0,a.mdx)("p",null,"If you decide to use the existing module, keep in mind, that theme declaring might be affected when the module is changed."),(0,a.mdx)("h2",{id:"apply-a-custom-theme-in-admin-overview"},"Apply a custom theme in Admin: Overview"),(0,a.mdx)("p",null,"To apply the Admin theme, take the following steps:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("a",{parentName:"li",href:"#specify-the-custom-admin-theme-in-dixml"},"Specify the new Admin theme in your module's ",(0,a.mdx)("inlineCode",{parentName:"a"},"di.xml"))),(0,a.mdx)("li",{parentName:"ol"},"Update the components by running the ",(0,a.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-uninstall.html#instgde-install-keep"},(0,a.mdx)("inlineCode",{parentName:"a"},"bin/magento setup:upgrade"))," command."),(0,a.mdx)("li",{parentName:"ol"},"Open the Admin in browser and view the new theme applied.")),(0,a.mdx)("p",null,"Each step is described further with more details."),(0,a.mdx)("h2",{id:"specify-the-custom-admin-theme-in-dixml"},"Specify the custom Admin theme in ",(0,a.mdx)("inlineCode",{parentName:"h2"},"di.xml")),(0,a.mdx)("p",null,"You need to specify the admin theme to be used in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"<your_module_dir>/etc/di.xml")," file. Add it, if the file does not yet exist in your module."),(0,a.mdx)("p",null,"In ",(0,a.mdx)("inlineCode",{parentName:"p"},"<your_module_dir>/etc/di.xml")," add the following (replace the placeholders with the vendor name and theme code of your Admin theme):"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n\n    \x3c!-- Admin theme. Start --\x3e\n    <type name="Magento\\Theme\\Model\\View\\Design">\n        <arguments>\n             <argument name="themes" xsi:type="array">\n                 <item name="adminhtml" xsi:type="string">%Your_vendor_dir%/%your_theme_code%</item> \x3c!-- Example: "Magento/backend" --\x3e\n             </argument>\n         </arguments>\n    </type>\n    \x3c!-- Admin theme. End --\x3e\n</config>\n')),(0,a.mdx)("h2",{id:"update-components-to-apply-the-admin-theme"},"Update components to apply the Admin theme"),(0,a.mdx)("p",null,"For your changes to take effect, you need to update components. For this,\nrun the ",(0,a.mdx)("inlineCode",{parentName:"p"},"bin/magento setup:upgrade")," command in your command line. If prompted, also run ",(0,a.mdx)("inlineCode",{parentName:"p"},"bin/magento setup:di:compile"),". Then run ",(0,a.mdx)("inlineCode",{parentName:"p"},"bin/magento cache:clean")," to clear the cache."),(0,a.mdx)("p",null,"For details about performing command line tasks, view the following topics:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/config-cli.html"},"Command line configuration")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-db-upgr.html"},"Uninstall or reinstall the application: Optionally keeping generated files"))),(0,a.mdx)("h2",{id:"open-admin-in-browser"},"Open Admin in browser"),(0,a.mdx)("p",null,"The last step is to open the Admin in browser and view the new theme applied."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-themes-apply-admin-md-69961777ed43d5da667c.js.map