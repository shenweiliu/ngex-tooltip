# ngex-tooltip

The repository contains the source code and demo application of the Angular `ngex-tooltip`. For downloading the `ngex-tooltip` npm package, please see the details on the [npm site](https://www.npmjs.com/package/ngex-tooltip). You can also copy the physical *ngex-tooltip* folder under the *dir-copy* section.


## Angular Version Compatibility

The applications are set with the Angular 13. It works well with the `ngex-tooltip` library tool built with tha Angular 12 ViewEngine (non-Ivy) compilation options. if compiled with the Ivy Partial (not provided here), it can only work on the applications with the Angular 13 and latest version of the Angular 12.

The base directive code files should work with the Angular versions 8 - 13. If you need to have the `ngex-tooltip` work with any previous version other than 13, you can update the package.json for the required versions and update the `node_modules` by running the `npm install` for the `ang-content` project. 

    
## sample-src/NgexTooltip_11_AspNet_DML 

This section contains source code files for an ASP.NET web application in the form of dual-module loader structure. The application directly calls the `ngex-tooltip.directive.ts`, not the npm package library file. To set up the project with the Visual studio, please see the [AngularDualModuleLoaders](https://github.com/shenweiliu/AngularDualModuleLoaders) for the details.

## sample-src/NgexTooltip_Any_Platform

The pure Angular source code files that can be copied to, and run in, any website project.

## How to Use

1. Import `NgexTooltipModule` to your app.module.ts

   For directly copying the physical *ngex-tooltip* folder:  

    `import { NgexTooltipModule } from 'ngex-tooltip';`

   For using the `ngex-tooltip` npm package library:  

    `import { NgexTooltipModule } from '[your-path-to-ngex-tooltip]/ngex-tooltip.module';`


2. Specify `NgexTooltip` directive for your host element in the HTML template. Below is an example. Where the `autoBottomOffset` is the attribute setting for avoiding the tooltip display overlaid on a sticky header. The `headerOffsetValue` is TypeScript class variable with the value in pixels set to the height of the header.   
 
    ```
    <div ngexTooltip="The position of this tooltip can auto be adjusted." [autoBottomOffset]="headerOffsetValue" class="tooltip-host">
        Tooltip Host Element
    </div>
    ```	
3. You can specify any styles for the tooltip. Please reference the included tooltip-sample.css file.

4. Other available directive attribute settings are:
 
   - `baseCssClass`: the base name of the CSS set for a particular tooltip. The default is `ngex-tooltip`. You can specify any base name for your cases in the template. But you need to create a set of CSS classes with that base name. See the tooltip-sample.css for details. You can also have multiple CSS class sets like the set A for the tooltip A, and set B for the tooltip B.

   - `animationDelay`: the value is in millisecond and string type. The default is '400'.

   - `offsetTop` and `offsetBottom`: used for adjusting the space in pixels between the tooltip and its host element if needed. The default value is '10' and '9', respectively.

   -  `maxWidth`: maximum width in pixels allowed for the tooltip. The dimension of the tooltip is calculated based on the `maxWidth` value and the content text length and spaces. The default value is internally set to host element width minus 2 pixels. You can specify any width value especially for a host element in small width or with just an icon.

   -  `arrowPosition`: the tooltip pointing arrow placement. The available values are 'center' and 'left'. The default value is 'center'.
   
 5. Styles: The style settings for the demo application are all in the tooltip-sample.css or in individual project's app.component.css. Feel free to modify styles for your use.
 
 
