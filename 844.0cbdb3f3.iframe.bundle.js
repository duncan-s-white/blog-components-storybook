"use strict";(self.webpackChunktailwind_blog_storybook=self.webpackChunktailwind_blog_storybook||[]).push([[844],{"./node_modules/@headlessui/react/dist/components/menu/menu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>qe});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),use_owner=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-owner.js");function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";return"string"==typeof e&&"button"===e.toLowerCase()?"button":void 0}function T(t,e){let[n,u]=(0,react.useState)((()=>i(t)));return(0,use_iso_morphic_effect.s)((()=>{u(i(t))}),[t.type,t.as]),(0,use_iso_morphic_effect.s)((()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")}),[n,e]),n}var use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var r,i;let n=null!=(r=e.innerText)?r:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return n;let u=!1;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=!0;let l=u?null!=(i=t.innerText)?i:"":n;return a.test(l)&&(l=l.replace(a,"")),l}function use_text_value_s(c){let t=(0,react.useRef)(""),r=(0,react.useRef)("");return(0,use_event._)((()=>{let e=c.current;if(!e)return"";let u=e.innerText;if(t.current===u)return r.current;let n=function g(e){let n=e.getAttribute("aria-label");if("string"==typeof n)return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map((l=>{let r=document.getElementById(l);if(r){let i=r.getAttribute("aria-label");return"string"==typeof i?i.trim():o(r).trim()}return null})).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}(e).trim().toLowerCase();return t.current=u,r.current=n,n}))}function t(e){return[e.screenX,e.screenY]}function use_tracked_pointer_u(){let e=(0,react.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(r){e.current=t(r)}}}var use_tree_walker=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js"),open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js");var c=(i=>(i[i.First=0]="First",i[i.Previous=1]="Previous",i[i.Next=2]="Next",i[i.Last=3]="Last",i[i.Specific=4]="Specific",i[i.Nothing=5]="Nothing",i))(c||{});function f(l,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),s=null!=r?r:-1;switch(l.focus){case 0:for(let e=0;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r;case 1:for(let e=s-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r;case 2:for(let e=s+1;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r;case 3:for(let e=t.length-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r;case 4:for(let e=0;e<t.length;++e)if(n.resolveId(t[e],e,t)===l.id)return e;return r;case 5:return null;default:!function u(l){throw new Error("Unexpected object: "+l)}(l)}}var r,disposables=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),me=((r=me||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),de=(r=>(r[r.Pointer=0]="Pointer",r[r.Other=1]="Other",r))(de||{}),fe=(a=>(a[a.OpenMenu=0]="OpenMenu",a[a.CloseMenu=1]="CloseMenu",a[a.GoToItem=2]="GoToItem",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterItem=5]="RegisterItem",a[a.UnregisterItem=6]="UnregisterItem",a))(fe||{});function w(e,u=r=>r){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,s=(0,focus_management.wl)(u(e.items.slice()),(t=>t.dataRef.current.domRef.current)),i=r?s.indexOf(r):null;return-1===i&&(i=null),{items:s,activeItemIndex:i}}let Te={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,u)=>{var i;let r=w(e),s=f(u,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:s,activationTrigger:null!=(i=u.trigger)?i:1}},3:(e,u)=>{let s=""!==e.searchQuery?0:1,i=e.searchQuery+u.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+s).concat(e.items.slice(0,e.activeItemIndex+s)):e.items).find((l=>{var m;return(null==(m=l.dataRef.current.textValue)?void 0:m.startsWith(i))&&!l.dataRef.current.disabled})),a=o?e.items.indexOf(o):-1;return-1===a||a===e.activeItemIndex?{...e,searchQuery:i}:{...e,searchQuery:i,activeItemIndex:a,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,u)=>{let r=w(e,(s=>[...s,{id:u.id,dataRef:u.dataRef}]));return{...e,...r}},6:(e,u)=>{let r=w(e,(s=>{let i=s.findIndex((t=>t.id===u.id));return-1!==i&&s.splice(i,1),s}));return{...e,...r,activationTrigger:1}}},U=(0,react.createContext)(null);function C(e){let u=(0,react.useContext)(U);if(null===u){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}return u}function ye(e,u){return(0,match.Y)(u.type,Te,e,u)}U.displayName="MenuContext";let Ie=react.Fragment;let be=render.O5.RenderStrategy|render.O5.Static;let Se=react.Fragment;let Pe=(0,render.FX)((function Me(e,u){let{__demoMode:r=!1,...s}=e,i=(0,react.useReducer)(ye,{__demoMode:r,menuState:r?0:1,buttonRef:(0,react.createRef)(),itemsRef:(0,react.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:t,itemsRef:o,buttonRef:a},l]=i,m=(0,use_sync_refs.P)(u);(0,use_outside_click.j)([a,o],((g,R)=>{var p;l({type:1}),(0,focus_management.Bm)(R,focus_management.MZ.Loose)||(g.preventDefault(),null==(p=a.current)||p.focus())}),0===t);let I=(0,use_event._)((()=>{l({type:1})})),A=(0,react.useMemo)((()=>({open:0===t,close:I})),[t,I]),f={ref:m};return react.createElement(U.Provider,{value:i},react.createElement(open_closed.El,{value:(0,match.Y)(t,{0:open_closed.Uw.Open,1:open_closed.Uw.Closed})},(0,render.XX)({ourProps:f,theirProps:s,slot:A,defaultTag:Ie,name:"Menu"})))})),ve=(0,render.FX)((function Re(e,u){var R;let r=(0,use_id.B)(),{id:s=`headlessui-menu-button-${r}`,...i}=e,[t,o]=C("Menu.Button"),a=(0,use_sync_refs.P)(t.buttonRef,u),l=(0,use_disposables.L)(),m=(0,use_event._)((p=>{switch(p.key){case keyboard.D.Space:case keyboard.D.Enter:case keyboard.D.ArrowDown:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame((()=>o({type:2,focus:c.First})));break;case keyboard.D.ArrowUp:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame((()=>o({type:2,focus:c.Last})))}})),I=(0,use_event._)((p=>{if(p.key===keyboard.D.Space)p.preventDefault()})),A=(0,use_event._)((p=>{if((0,bugs.l)(p.currentTarget))return p.preventDefault();e.disabled||(0===t.menuState?(o({type:1}),l.nextFrame((()=>{var M;return null==(M=t.buttonRef.current)?void 0:M.focus({preventScroll:!0})}))):(p.preventDefault(),o({type:0})))})),f=(0,react.useMemo)((()=>({open:0===t.menuState})),[t]),g={ref:a,id:s,type:T(e,t.buttonRef),"aria-haspopup":"menu","aria-controls":null==(R=t.itemsRef.current)?void 0:R.id,"aria-expanded":0===t.menuState,onKeyDown:m,onKeyUp:I,onClick:A};return(0,render.XX)({ourProps:g,theirProps:i,slot:f,defaultTag:"button",name:"Menu.Button"})})),he=(0,render.FX)((function Ee(e,u){var M,b;let r=(0,use_id.B)(),{id:s=`headlessui-menu-items-${r}`,...i}=e,[t,o]=C("Menu.Items"),a=(0,use_sync_refs.P)(t.itemsRef,u),l=(0,use_owner.g)(t.itemsRef),m=(0,use_disposables.L)(),I=(0,open_closed.O_)(),A=null!==I?(I&open_closed.Uw.Open)===open_closed.Uw.Open:0===t.menuState;(0,react.useEffect)((()=>{let n=t.itemsRef.current;n&&0===t.menuState&&n!==(null==l?void 0:l.activeElement)&&n.focus({preventScroll:!0})}),[t.menuState,t.itemsRef,l]),(0,use_tree_walker.i)({container:t.itemsRef.current,enabled:0===t.menuState,accept:n=>"menuitem"===n.getAttribute("role")?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(n){n.setAttribute("role","none")}});let f=(0,use_event._)((n=>{var E,x;switch(m.dispose(),n.key){case keyboard.D.Space:if(""!==t.searchQuery)return n.preventDefault(),n.stopPropagation(),o({type:3,value:n.key});case keyboard.D.Enter:if(n.preventDefault(),n.stopPropagation(),o({type:1}),null!==t.activeItemIndex){let{dataRef:S}=t.items[t.activeItemIndex];null==(x=null==(E=S.current)?void 0:E.domRef.current)||x.click()}(0,focus_management.Fh)(t.buttonRef.current);break;case keyboard.D.ArrowDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:c.Next});case keyboard.D.ArrowUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:c.Previous});case keyboard.D.Home:case keyboard.D.PageUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:c.First});case keyboard.D.End:case keyboard.D.PageDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:c.Last});case keyboard.D.Escape:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,disposables.e)().nextFrame((()=>{var S;return null==(S=t.buttonRef.current)?void 0:S.focus({preventScroll:!0})}));break;case keyboard.D.Tab:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,disposables.e)().nextFrame((()=>{(0,focus_management.p9)(t.buttonRef.current,n.shiftKey?focus_management.BD.Previous:focus_management.BD.Next)}));break;default:1===n.key.length&&(o({type:3,value:n.key}),m.setTimeout((()=>o({type:4})),350))}})),g=(0,use_event._)((n=>{if(n.key===keyboard.D.Space)n.preventDefault()})),R=(0,react.useMemo)((()=>({open:0===t.menuState})),[t]),p={"aria-activedescendant":null===t.activeItemIndex||null==(M=t.items[t.activeItemIndex])?void 0:M.id,"aria-labelledby":null==(b=t.buttonRef.current)?void 0:b.id,id:s,onKeyDown:f,onKeyUp:g,role:"menu",tabIndex:0,ref:a};return(0,render.XX)({ourProps:p,theirProps:i,slot:R,defaultTag:"div",features:be,visible:A,name:"Menu.Items"})})),De=(0,render.FX)((function xe(e,u){let r=(0,use_id.B)(),{id:s=`headlessui-menu-item-${r}`,disabled:i=!1,...t}=e,[o,a]=C("Menu.Item"),l=null!==o.activeItemIndex&&o.items[o.activeItemIndex].id===s,m=(0,react.useRef)(null),I=(0,use_sync_refs.P)(u,m);(0,use_iso_morphic_effect.s)((()=>{if(o.__demoMode||0!==o.menuState||!l||0===o.activationTrigger)return;let T=(0,disposables.e)();return T.requestAnimationFrame((()=>{var P,B;null==(B=null==(P=m.current)?void 0:P.scrollIntoView)||B.call(P,{block:"nearest"})})),T.dispose}),[o.__demoMode,m,l,o.menuState,o.activationTrigger,o.activeItemIndex]);let A=use_text_value_s(m),f=(0,react.useRef)({disabled:i,domRef:m,get textValue(){return A()}});(0,use_iso_morphic_effect.s)((()=>{f.current.disabled=i}),[f,i]),(0,use_iso_morphic_effect.s)((()=>(a({type:5,id:s,dataRef:f}),()=>a({type:6,id:s}))),[f,s]);let g=(0,use_event._)((()=>{a({type:1})})),R=(0,use_event._)((T=>{if(i)return T.preventDefault();a({type:1}),(0,focus_management.Fh)(o.buttonRef.current)})),p=(0,use_event._)((()=>{if(i)return a({type:2,focus:c.Nothing});a({type:2,focus:c.Specific,id:s})})),M=use_tracked_pointer_u(),b=(0,use_event._)((T=>M.update(T))),n=(0,use_event._)((T=>{M.wasMoved(T)&&(i||l||a({type:2,focus:c.Specific,id:s,trigger:0}))})),E=(0,use_event._)((T=>{M.wasMoved(T)&&(i||l&&a({type:2,focus:c.Nothing}))})),x=(0,react.useMemo)((()=>({active:l,disabled:i,close:g})),[l,i,g]);return(0,render.XX)({ourProps:{id:s,ref:I,role:"menuitem",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,disabled:void 0,onClick:R,onFocus:p,onPointerEnter:b,onMouseEnter:b,onPointerMove:n,onMouseMove:n,onPointerLeave:E,onMouseLeave:E},theirProps:t,slot:x,defaultTag:Se,name:"Menu.Item"})})),qe=Object.assign(Pe,{Button:ve,Items:he,Item:De})},"./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>it});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),description=__webpack_require__("./node_modules/@headlessui/react/dist/components/description/description.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");let d=(0,react.createContext)(null);function u(){let a=(0,react.useContext)(d);if(null===a){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return a}function label_F(){let[a,t]=(0,react.useState)([]);return[a.length>0?a.join(" "):void 0,(0,react.useMemo)((()=>function(e){let s=(0,use_event._)((r=>(t((l=>[...l,r])),()=>t((l=>{let n=l.slice(),p=n.indexOf(r);return-1!==p&&n.splice(p,1),n}))))),o=(0,react.useMemo)((()=>({register:s,slot:e.slot,name:e.name,props:e.props})),[s,e.slot,e.name,e.props]);return react.createElement(d.Provider,{value:o},e.children)}),[t])]}let v=(0,render.FX)((function h(a,t){let i=(0,use_id.B)(),{id:e=`headlessui-label-${i}`,passive:s=!1,...o}=a,r=u(),l=(0,use_sync_refs.P)(t);(0,use_iso_morphic_effect.s)((()=>r.register(e)),[e,r.register]);let n={ref:l,...r.props,id:e};return s&&("onClick"in n&&(delete n.htmlFor,delete n.onClick),"onClick"in o&&delete o.onClick),(0,render.XX)({ourProps:n,theirProps:o,slot:r.slot||{},defaultTag:"label",name:r.name||"Label"})})),B=Object.assign(v,{});var console=__webpack_require__("./node_modules/console-browserify/index.js");var use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_flags=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-flags.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js"),use_tree_walker=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js");function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):"boolean"==typeof t?i.push([s,t?"1":"0"]):"string"==typeof t?i.push([s,t]):"number"==typeof t?i.push([s,`${t}`]):null==t?i.push([s,""]):e(t,s,i)}var match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js"),Ge=(t=>(t[t.RegisterOption=0]="RegisterOption",t[t.UnregisterOption=1]="UnregisterOption",t))(Ge||{});let Ce={0(o,r){let t=[...o.options,{id:r.id,element:r.element,propsRef:r.propsRef}];return{...o,options:(0,focus_management.wl)(t,(p=>p.element.current))}},1(o,r){let t=o.options.slice(),p=o.options.findIndex((T=>T.id===r.id));return-1===p?o:(t.splice(p,1),{...o,options:t})}},radio_group_B=(0,react.createContext)(null);function oe(o){let r=(0,react.useContext)(radio_group_B);if(null===r){let t=new Error(`<${o} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,oe),t}return r}radio_group_B.displayName="RadioGroupDataContext";let $=(0,react.createContext)(null);function ne(o){let r=(0,react.useContext)($);if(null===r){let t=new Error(`<${o} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return r}function ke(o,r){return(0,match.Y)(r.type,Ce,o,r)}$.displayName="RadioGroupActionsContext";var xe=(t=>(t[t.Empty=1]="Empty",t[t.Active=2]="Active",t))(xe||{});let Ie=(0,render.FX)((function he(o,r){let t=(0,use_id.B)(),{id:p=`headlessui-radiogroup-${t}`,value:T,defaultValue:v,form:M,name:m,onChange:H,by:G=(e,i)=>e===i,disabled:P=!1,...N}=o,y=(0,use_event._)("string"==typeof G?(e,i)=>{let n=G;return(null==e?void 0:e[n])===(null==i?void 0:i[n])}:G),[A,L]=(0,react.useReducer)(ke,{options:[]}),a=A.options,[h,R]=label_F(),[C,U]=(0,description.r)(),k=(0,react.useRef)(null),W=(0,use_sync_refs.P)(k,r),[l,s]=function use_controllable_T(l,r,c){let[i,s]=(0,react.useState)(c),e=void 0!==l,t=(0,react.useRef)(e),u=(0,react.useRef)(!1),d=(0,react.useRef)(!1);return!e||t.current||u.current?!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,use_event._)((n=>(e||s(n),null==r?void 0:r(n))))]}(T,H,v),b=(0,react.useMemo)((()=>a.find((e=>!e.propsRef.current.disabled))),[a]),x=(0,react.useMemo)((()=>a.some((e=>y(e.propsRef.current.value,l)))),[a,l]),d=(0,use_event._)((e=>{var n;if(P||y(e,l))return!1;let i=null==(n=a.find((f=>y(f.propsRef.current.value,e))))?void 0:n.propsRef.current;return(null==i||!i.disabled)&&(null==s||s(e),!0)}));(0,use_tree_walker.i)({container:k.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let F=(0,use_event._)((e=>{let i=k.current;if(!i)return;let n=(0,owner.T)(i),f=a.filter((u=>!1===u.propsRef.current.disabled)).map((u=>u.element.current));switch(e.key){case keyboard.D.Enter:!function form_p(i){var t,r;let s=null!=(t=null==i?void 0:i.form)?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type))return void n.click();null==(r=s.requestSubmit)||r.call(s)}}(e.currentTarget);break;case keyboard.D.ArrowLeft:case keyboard.D.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,focus_management.CU)(f,focus_management.BD.Previous|focus_management.BD.WrapAround)===focus_management.Me.Success){let g=a.find((K=>K.element.current===(null==n?void 0:n.activeElement)));g&&d(g.propsRef.current.value)}break;case keyboard.D.ArrowRight:case keyboard.D.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,focus_management.CU)(f,focus_management.BD.Next|focus_management.BD.WrapAround)===focus_management.Me.Success){let g=a.find((K=>K.element.current===(null==n?void 0:n.activeElement)));g&&d(g.propsRef.current.value)}break;case keyboard.D.Space:{e.preventDefault(),e.stopPropagation();let u=a.find((g=>g.element.current===(null==n?void 0:n.activeElement)));u&&d(u.propsRef.current.value)}}})),c=(0,use_event._)((e=>(L({type:0,...e}),()=>L({type:1,id:e.id})))),w=(0,react.useMemo)((()=>({value:l,firstOption:b,containsCheckedOption:x,disabled:P,compare:y,...A})),[l,b,x,P,y,A]),ie=(0,react.useMemo)((()=>({registerOption:c,change:d})),[c,d]),ae={ref:W,id:p,role:"radiogroup","aria-labelledby":h,"aria-describedby":C,onKeyDown:F},pe=(0,react.useMemo)((()=>({value:l})),[l]),I=(0,react.useRef)(null),le=(0,use_disposables.L)();return(0,react.useEffect)((()=>{I.current&&void 0!==v&&le.addEventListener(I.current,"reset",(()=>{d(v)}))}),[I,d]),react.createElement(U,{name:"RadioGroup.Description"},react.createElement(R,{name:"RadioGroup.Label"},react.createElement($.Provider,{value:ie},react.createElement(radio_group_B.Provider,{value:w},null!=m&&null!=l&&e({[m]:l}).map((([e,i],n)=>react.createElement(internal_hidden.j,{features:internal_hidden.O.Hidden,ref:0===n?f=>{var u;I.current=null!=(u=null==f?void 0:f.closest("form"))?u:null}:void 0,...(0,render.oE)({key:e,as:"input",type:"radio",checked:null!=i,hidden:!0,readOnly:!0,form:M,disabled:P,name:e,value:i})}))),(0,render.XX)({ourProps:ae,theirProps:N,slot:pe,defaultTag:"div",name:"RadioGroup"})))))})),Se=(0,render.FX)((function we(o,r){var F;let t=(0,use_id.B)(),{id:p=`headlessui-radiogroup-option-${t}`,value:T,disabled:v=!1,...M}=o,m=(0,react.useRef)(null),H=(0,use_sync_refs.P)(m,r),[G,P]=label_F(),[N,y]=(0,description.r)(),{addFlag:A,removeFlag:L,hasFlag:a}=(0,use_flags.D)(1),h=(0,use_latest_value.Y)({value:T,disabled:v}),R=oe("RadioGroup.Option"),C=ne("RadioGroup.Option");(0,use_iso_morphic_effect.s)((()=>C.registerOption({id:p,element:m,propsRef:h})),[p,C,m,h]);let U=(0,use_event._)((c=>{var w;if((0,bugs.l)(c.currentTarget))return c.preventDefault();C.change(T)&&(A(2),null==(w=m.current)||w.focus())})),k=(0,use_event._)((c=>{if((0,bugs.l)(c.currentTarget))return c.preventDefault();A(2)})),W=(0,use_event._)((()=>L(2))),l=(null==(F=R.firstOption)?void 0:F.id)===p,s=R.disabled||v,b=R.compare(R.value,T),x={ref:H,id:p,role:"radio","aria-checked":b?"true":"false","aria-labelledby":G,"aria-describedby":N,"aria-disabled":!!s||void 0,tabIndex:s?-1:b||!R.containsCheckedOption&&l?0:-1,onClick:s?void 0:U,onFocus:s?void 0:k,onBlur:s?void 0:W},d=(0,react.useMemo)((()=>({checked:b,disabled:s,active:a(2)})),[b,s,a]);return react.createElement(y,{name:"RadioGroup.Description"},react.createElement(P,{name:"RadioGroup.Label"},(0,render.XX)({ourProps:x,theirProps:M,slot:d,defaultTag:"div",name:"RadioGroup.Option"})))})),it=Object.assign(Ie,{Option:Se,Label:B,Description:description.V})},"./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>F});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{o.current=t,l.current=r}),[t,r]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.s)((()=>{if(!e||!c)return;let n=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.T)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign((i=>f(i)),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)}),[e,c,o,l])}},"./node_modules/next-themes/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>j});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),P=["light","dark"],E="(prefers-color-scheme: dark)",L=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0),D={setTheme:e=>{},themes:[]},j=()=>{var e;return null!=(e=react__WEBPACK_IMPORTED_MODULE_0__.useContext(L))?e:D};react__WEBPACK_IMPORTED_MODULE_0__.memo((({forcedTheme:e,storageKey:a,attribute:n,enableSystem:g,enableColorScheme:m,defaultTheme:c,value:o,attrs:y,nonce:h})=>{let k="system"===c,w="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${y.map((u=>`'${u}'`)).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,i=m?P.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",d=(l,u=!1,R=!0)=>{let f=o?o[l]:l,p=u?l+"|| ''":`'${f}'`,$="";return m&&R&&!u&&P.includes(l)&&($+=`d.style.colorScheme = '${l}';`),"class"===n?$+=u||f?`c.add(${p})`:"null":f&&($+=`d[s](n,${p})`),$},S=e?`!function(){${w}${d(e)}}()`:g?`!function(){try{${w}var e=localStorage.getItem('${a}');if('system'===e||(!e&&${k})){var t='${E}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${d(o?"x[e]":"e",!0)}}${k?"":"else{"+d(c,!1,!1)+"}"}${i}}catch(e){}}()`:`!function(){try{${w}var e=localStorage.getItem('${a}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${d(o?"x[e]":"e",!0)}}else{${d(c,!1,!1)};}${i}}catch(t){}}();`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:S}})}))}}]);