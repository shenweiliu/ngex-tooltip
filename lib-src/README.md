# ngex-tooltip

An automatically positioned tooltip directive for applications with Angular versions 8 - 13. 

The library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12. It still uses the ViewEngine, instead of Ivy Partial option, for the better backward compatibility.

With the `ngex-tooltip` directive, the tooltip on pages can normally be shown above the host element. When there is not enough space above the host element on the page loading or due to vertical scrolling operations, the tooltip can automaticaly be shown below the host element.

The tooltip can always be shown in its entirety on any page. For example, if any host element partially out of the right edge of the window due to page width settings and/or reducing window width operations, the tooltip can still be shown on the right side without cutting any area or text. 

Many setting options are available through either CSS or directive input attributes. One of the prominent features is that you can choose displaying the tooltip overlaid on a sticky page header or below the host element if there is not enough space between the bottom border of the header and top border of the host element.


## Installation

Run `npm install ngex-tooltip` to add the library into your project directory, or add `"ngex-tooltip": "~12.1.1"` to the package.json file and then run `npm install` to update the existing package.

## How to Use

1. Import `NgexTooltipModule` to your app.module.ts

    `import { NgexTooltipModule } from 'ngex-tooltip';`

2. Specify `NgexTooltip` directive for your host element in the HTML template. Below is an example. Where the `autoBottomOffset` is the attribute setting for avoiding the tooltip display overlaid on a sticky header. The `headerOffsetValue` is TypeScript class variable with the value in pixels set to the height of the header.   
 
    ```
    <div ngexTooltip="The position of this tootip can auto be adjusted." [autoBottomOffset]="headerOffsetValue" class="tooltip-host">
        Tootip Host Element
    </div>
    ```	
3. You can specify any styles for the tooltip. Please reference the included tooltip-sample.css file.

4. Other available directive attribute settings are:
 
   - `baseCssClass`: the base name of the CSS set for a particular tooltip. The default is `ngex-tooltip`. You can specify any base name for your cases in the template. But you need to create a set of CSS classes with that base name. See the tooltip-sample.css for details. You can also have multiple CSS class sets like the set A for the tooltip A, and set B for the tooltop B.

   - `animationDelay`: the value is in millisecond and string type. The default is '400'.

   - `offsetTop` and `offsetBottom`: used for adjusting the space in pixels bwtween the tooltip and its host element if needed. The default value is '10' and '9', respectively.

   -  `maxWidth`: maximum width in pixels allowed for the tooltip. The dimention of the tooltip is calculated based on the `maxWidth` value and the content text length and spaces. The default value is internally set to host element width minus 2 pixels.   


## Source Code and Demo Application

The source code and demo application can be downloaded from the [github repository](https://github.com/shenweiliu/ngex-tooltip). You can reference the HTML template in the app.component.html and CSS styles in the app.component.css for your application use.    
 
 