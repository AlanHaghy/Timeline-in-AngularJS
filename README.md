# Timeline-in-AngularJS

A simple timeline memo schedule in AngularJS

The UI is not identical to exact mock-up, I tried to make it close to the sketch file as much as possible and there is room to fine tune the styles and padding
However, just wanted to keep the style.css small/simple. shared properties in style.css is used as variables and used Bootstrap library CDN to address most of the stylings in HTML.

I liked to have both version in AngularJS 1.x and React-Redux but ended up using only one technology with 3 files. index.html, styles.css and app.js where we have all the logic of code.

All needed libraries are included as CDN no need to package dependency.

To manage Date Time format I used common Date object and $filter filter in AngularJS to get the same format in the mock-up, so no third party library used.

The App.js file has a main module with two controllers. No directives and services were used for this assignment as we only have one ng-repeat to show cards.

A simple form validation is there for checking whether form fields have content and not NULL in HTML. didn't go too deep for form validation.

