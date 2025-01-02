"use strict";(self.webpackChunktailwind_blog_storybook=self.webpackChunktailwind_blog_storybook||[]).push([[187],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Configure.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const READMEraw_namespaceObject="# Storybook for Tailwind Blog\n\nThis is the component library for my Next.js Tailwind [blog & portfolio](https://duncanwhite.co.uk/) app.\n\nIt was set up as an example of using an [npm component library package](https://www.npmjs.com/package/tailwind-blog-storybook) with Storybook, which is installed into the main project.\n\nThe npm package can be installed into any next.js application.\n\n`npm i tailwind-blog-storybook`\n\nFor my projects I am using Yarn so will show the yarn commands:\n\n`yarn add tailwind-blog-storybook`\n\n## Developing Locally\n\nTo build the package using rollup use:\n\n`yarn run rollup`\n\nI am using [Yalc](https://www.npmjs.com/package/yalc) to publish and consume the package while in local development, use:\n\n`yalc push`\n\nto both publish to the local yalc repository and propagate all changes to existing yalc package installations.\n\nalternatively use `yalc publish` if you just wish to publish without updating.\n\nWhen local development work has been completed, build with rollup and deploy to the npm register with:\n\n`yarn npm publish`???\n\nYou will be prompted for login details.\n";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Storybook for Tailwind Blog"}),"\n",(0,jsx_runtime.jsx)("div",{className:"sb-container",children:(0,jsx_runtime.jsx)("div",{className:"sb-section-title",children:(0,jsx_runtime.jsx)(dist.oz,{children:READMEraw_namespaceObject})})}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n  .sb-container {\n    margin-bottom: 48px;\n  }\n\n  .sb-section-title {\n    margin-bottom: 32px;\n  }\n  "})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}}}]);