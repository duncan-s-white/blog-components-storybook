import{jsx as r}from"react/jsx-runtime";import t from"next/link";import{slug as e}from"github-slugger";var m=function(m){var a=m.text;return r(t,{href:"/tags/".concat(e(a)),className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:a.split(" ").join("-")})};export{m as default};
