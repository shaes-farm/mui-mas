"use strict";(self.webpackChunk_shaes_farm_mui_mas=self.webpackChunk_shaes_farm_mui_mas||[]).push([[8669],{"./node_modules/@mui/icons-material/AddOutlined.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_default=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined");exports.Z=_default},"./src/stories/NewItemsMenuButton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_tbyrd_Projects_mui_mas_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_components_NewItemsMenuButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/NewItemsMenuButton.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_tbyrd_Projects_mui_mas_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Mui-Mas/NewItemsMenuButton",component:_components_NewItemsMenuButton__WEBPACK_IMPORTED_MODULE_1__.i,tags:["autodocs"]};var Default={args:{routes:[{slug:"item-1",icon:"icon-1",label:"Item 1",page:"/page-1"},{slug:"item-2",icon:"icon-2",label:"Item 2",page:"/page-2"},{slug:"item-3",icon:"icon-3",label:"Item 3",page:"/page-3"}],router:function router(route){return console.log({route})}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    routes,\n    router\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/NewItemsMenuButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>NewItemsMenuButton});var _home_tbyrd_Projects_mui_mas_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_tbyrd_Projects_mui_mas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_home_tbyrd_Projects_mui_mas_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/Menu/Menu.js"),_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/material/ListItemIcon/ListItemIcon.js"),_mui_icons_material_ArrowDropDownOutlined__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/ArrowDropDownOutlined.js"),_mui_icons_material_AddOutlined__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/icons-material/AddOutlined.js"),_excluded=["routes","router"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,NewItemsMenuButton=function NewItemsMenuButton(_ref){var routes=_ref.routes,router=_ref.router,menuProps=(0,_home_tbyrd_Projects_mui_mas_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),_React$useState2=(0,_home_tbyrd_Projects_mui_mas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_React$useState,2),anchorEl=_React$useState2[0],setAnchorEl=_React$useState2[1],closeNewMenu=function closeNewMenu(){setAnchorEl(null)};return __jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.Z,{sx:{flexGrow:0,ml:2}},__jsx(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{title:"New Items"},__jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__.Z,{"aria-label":"new items",color:"inherit",size:"large",onClick:function openNewMenu(event){setAnchorEl(event.currentTarget)},endIcon:__jsx(_mui_icons_material_ArrowDropDownOutlined__WEBPACK_IMPORTED_MODULE_6__.Z,null),sx:{p:0}},__jsx(_mui_icons_material_AddOutlined__WEBPACK_IMPORTED_MODULE_7__.Z,null))),__jsx(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__.Z,(0,_home_tbyrd_Projects_mui_mas_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_9__.Z)({sx:{mt:"45px"},id:"new-items-menu"},menuProps,{anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},anchorEl,open:Boolean(anchorEl),onClose:closeNewMenu}),routes&&routes.map((function(route){return"div"===route.slug?__jsx(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__.Z,{key:Symbol(route.slug).toString()}):__jsx(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__.Z,{key:route.slug,onClick:function onClick(){closeNewMenu(),router(route)}},__jsx(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__.Z,null,route.icon),__jsx(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__.Z,null,route.label),route.hotkey&&__jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__.Z,{variant:"body2",color:"text.secondary"},route.hotkey))}))))};NewItemsMenuButton.displayName="NewItemsMenuButton",NewItemsMenuButton.__docgenInfo={description:"Renders an Add icon button that displays a Menu of routes when clicked.",methods:[],displayName:"NewItemsMenuButton"};try{NewItemsMenuButton.displayName="NewItemsMenuButton",NewItemsMenuButton.__docgenInfo={description:"Renders an Add icon button that displays a Menu of routes when clicked.",displayName:"NewItemsMenuButton",props:{routes:{defaultValue:null,description:"An array of routes rendered as a Menu component.\n@see https://mui.com/material-ui/react-menu/",name:"routes",required:!0,type:{name:"NavRoute[]"}},router:{defaultValue:null,description:"The router used to perform the navigation.",name:"router",required:!0,type:{name:"NavRouter"}},anchorEl:{defaultValue:null,description:"An HTML element, or a function that returns one.\nIt's used to set the position of the menu.",name:"anchorEl",required:!1,type:{name:"Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement) | null"}},autoFocus:{defaultValue:{value:"true"},description:'If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled\nchildren are not focusable. If you set this prop to `false` focus will be placed\non the parent modal container. This has severe accessibility implications\nand should only be considered if you manage focus otherwise.',name:"autoFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Menu contents, normally `MenuItem`s.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<MenuClasses>"}},disableAutoFocusItem:{defaultValue:{value:"false"},description:'When opening the menu will not focus the active item but the `[role="menu"]`\nunless `autoFocus` is also set to `false`. Not using the default means not\nfollowing WAI-ARIA authoring practices. Please be considerate about possible\naccessibility implications.',name:"disableAutoFocusItem",required:!1,type:{name:"boolean"}},MenuListProps:{defaultValue:{value:"{}"},description:"Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.",name:"MenuListProps",required:!1,type:{name:'Partial<MenuListProps<"ul", {}>>'}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.',name:"onClose",required:!1,type:{name:'((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},PopoverClasses:{defaultValue:null,description:"`classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.",name:"PopoverClasses",required:!1,type:{name:"Partial<PopoverClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},transitionDuration:{defaultValue:{value:"'auto'"},description:"The length of the transition in `ms`, or 'auto'",name:"transitionDuration",required:!1,type:{name:'number | { appear?: number; enter?: number; exit?: number | undefined; } | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined; } | "auto" | undefined'}},TransitionProps:{defaultValue:{value:"{}"},description:"Props applied to the transition element.\nBy default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.",name:"TransitionProps",required:!1,type:{name:"TransitionProps"}},variant:{defaultValue:{value:"'selectedMenu'"},description:"The variant to use. Use `menu` to prevent selected items from impacting the initial focus.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"menu"'},{value:'"selectedMenu"'}]}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports updatePosition() action.",name:"action",required:!1,type:{name:"Ref<PopoverActions>"}},slotProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<OverridableComponent<ModalTypeMap<"div", {}>>, {}, ModalOwnerState>; paper?: SlotComponentProps<...>; } | undefined'}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"An HTML element, component instance, or function that returns either.\nThe `container` will passed to the Modal component.\n\nBy default, it uses the body of the anchorEl's top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element | null) | null"}},disableAutoFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not automatically shift focus to itself when it opens, and\nreplace it to the last focused element when it closes.\nThis also works correctly with any modal children that have the `disableAutoFocus` prop.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disableEnforceFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not prevent focus from leaving the modal while open.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableEnforceFocus",required:!1,type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"If `true`, hitting escape will not fire the `onClose` callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:"Always keep the children in the DOM.\nThis prop can be useful in SEO situation or\nwhen you want to maximize the responsiveness of the Modal.",name:"keepMounted",required:!1,type:{name:"boolean"}},onBackdropClick:{defaultValue:null,description:"Callback fired when the backdrop is clicked.\n@deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.",name:"onBackdropClick",required:!1,type:{name:"ReactEventHandler<{}>"}},onTransitionEnter:{defaultValue:null,description:"A function called when a transition enters.",name:"onTransitionEnter",required:!1,type:{name:"(() => void)"}},onTransitionExited:{defaultValue:null,description:"A function called when a transition has exited.",name:"onTransitionExited",required:!1,type:{name:"(() => void)"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"{ root?: ElementType<any>; paper?: ElementType<any>; } | undefined"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; Backdrop?: ElementType<any>; } | undefined"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<...>; } | undefined'}},TransitionComponent:{defaultValue:{value:"Grow"},description:"The component used for the transition.\n[Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.",name:"TransitionComponent",required:!1,type:{name:"JSXElementConstructor<TransitionProps & { children: ReactElement<any, any>; }>"}},BackdropComponent:{defaultValue:{value:"styled(Backdrop, {\nname: 'MuiModal',\nslot: 'Backdrop',\noverridesResolver: (props, styles) => {\nreturn styles.backdrop;\n},\n})({\nzIndex: -1,\n})"},description:"A backdrop component. This prop enables custom backdrop rendering.\n@deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.\nUse the `slots.backdrop` prop to make your application ready for the next version of Material UI.",name:"BackdropComponent",required:!1,type:{name:'ElementType<BackdropProps<"div", {}>>'}},BackdropProps:{defaultValue:null,description:"Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.\n@deprecated Use `slotProps.backdrop` instead.",name:"BackdropProps",required:!1,type:{name:'Partial<BackdropProps<"div", {}>>'}},anchorOrigin:{defaultValue:{value:"{\nvertical: 'top',\nhorizontal: 'left',\n}"},description:"This is the point on the anchor where the popover's\n`anchorEl` will attach to. This is not used when the\nanchorReference is 'anchorPosition'.\n\nOptions:\nvertical: [top, center, bottom];\nhorizontal: [left, center, right].",name:"anchorOrigin",required:!1,type:{name:"PopoverOrigin"}},anchorPosition:{defaultValue:null,description:"This is the position that may be used to set the position of the popover.\nThe coordinates are relative to the application's client area.",name:"anchorPosition",required:!1,type:{name:"PopoverPosition"}},anchorReference:{defaultValue:{value:"'anchorEl'"},description:"This determines which anchor prop to refer to when setting\nthe position of the popover.",name:"anchorReference",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"anchorEl"'},{value:'"anchorPosition"'}]}},elevation:{defaultValue:{value:"8"},description:"The elevation of the popover.",name:"elevation",required:!1,type:{name:"number"}},marginThreshold:{defaultValue:{value:"16"},description:"Specifies how close to the edge of the window the popover can appear.",name:"marginThreshold",required:!1,type:{name:"number"}},PaperProps:{defaultValue:{value:"{}"},description:"Props applied to the [`Paper`](/material-ui/api/paper/) element.\n\nThis prop is an alias for `slotProps.paper` and will be overriden by it if both are used.\n@deprecated Use `slotProps.paper` instead.",name:"PaperProps",required:!1,type:{name:"Partial<PaperProps<ElementType<any>, {}>>"}},transformOrigin:{defaultValue:{value:"{\nvertical: 'top',\nhorizontal: 'left',\n}"},description:"This is the point on the popover which\nwill attach to the anchor's origin.\n\nOptions:\nvertical: [top, center, bottom, x(px)];\nhorizontal: [left, center, right, x(px)].",name:"transformOrigin",required:!1,type:{name:"PopoverOrigin"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NewItemsMenuButton.tsx#NewItemsMenuButton"]={docgenInfo:NewItemsMenuButton.__docgenInfo,name:"NewItemsMenuButton",path:"src/components/NewItemsMenuButton.tsx#NewItemsMenuButton"})}catch(__react_docgen_typescript_loader_error){}}}]);