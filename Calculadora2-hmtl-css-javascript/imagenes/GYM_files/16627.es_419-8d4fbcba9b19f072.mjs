"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[16627],{32346:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){return("undefined"==typeof window||!Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame"))&&e&&e(),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{e&&e()})})}},119936:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(667294),a=n(883119),l=n(32346),r=n(844683),o=n(140017),s=n(30378),d=n(5859),p=n(55202),u=n(217058),_=n(554786),c=n(239821),m=n(785893);let w=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="hidden",e.touchAction="none"}},f=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="visible",e.touchAction="auto"}};function h({accessibilityModalLabel:e,align:t="center",allowClickAndDrag:n,allowScroll:h=!1,children:y,closeOnOutsideClick:b=!0,footer:v,heading:g,isOpen:x,mobileAccessibilityCloseIconLabel:k,mobileHeadingSize:A,mobileHideCloseIcon:P,mobileIsFooter:j,mobileIsFullscreen:S,mobileIsFullpage:Z,mobileIsSlideUp:I,onDismiss:z,subHeading:T,type:E,zIndex:L}){let C=(0,o.ZP)(),{isRTL:O}=(0,d.B)(),R=(0,i.useRef)(!1),[M,F]=(0,i.useState)(!1),{setAppFocusState:N}=(0,c.I)(),D=(0,_.ZP)();return((0,i.useEffect)(()=>(R.current=(0,l.Z)(()=>{R.current&&F(!0)}),()=>{"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"cancelAnimationFrame")&&R.current&&(window.cancelAnimationFrame(R.current),R.current=null)}),[]),(0,i.useEffect)(()=>(x?(s.Z.pause(),N(!1),(0,u.My)(`mweb_unauth.mobile_modal.${E||"unknown_type"}.did_mount.is_open.true`)):(s.Z.resume(),N(!0)),()=>{x&&(s.Z.resume(),N(!0),(0,u.My)(`mweb_unauth.mobile_modal.${E||"unknown_type"}.did_mount.is_open.false`))}),[N,x]),(0,i.useEffect)(()=>{let e=x&&!h;return e&&w(),()=>{e&&f()}},[x,h]),x)?(0,m.jsx)(p.Z,{allowClickAndDrag:n,children:(0,m.jsx)(a.mh,{children:(0,m.jsxs)(a.xu,{"aria-label":e,display:"inlineBlock",position:"relative",role:"dialog",zIndex:L||r.ZM,children:[(0,m.jsx)(a.iP,{accessibilityLabel:C.bt("Máscara del diálogo modal de registro móvil", "Mobile Signup Modal Mask", "mweb.signup_modal.mask", undefined, true),dataTestId:"mobile-modal-mask-overlay",onTap:({event:e})=>{e.clientX&&e.clientY&&(0,u.tj)(`mweb_unauth.mobile_modal.wash_tap.${E||"unknown_type"}.with_dismissal`,{x:e.clientX,y:e.clientY}),b&&z()},tapStyle:"none",children:(0,m.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, .5)",touchAction:"none",transitionProperty:"opacity",transitionTimingFunction:"ease-out"}},height:"100%",left:!0,position:"fixed",top:!0,width:"100%",zIndex:new a.Ry(1)})}),(0,m.jsxs)(a.xu,{color:"default",dangerouslySetInlineStyle:I?(0,r.Vf)({isFullscreen:S,isTablet:"tablet"===D,isShowing:M,isRelatedInterestsModal:"related_interests_modal"===E}):(0,r.JN)({variant:Z?"fullpage":S?"fullscreen":"tablet"===D?"tablet":j?"footer":"signup"===E?"signup":void 0}),"data-test-id":"mobile-signup-mask",position:"fixed",children:[(0,m.jsxs)(a.kC,{alignItems:"center",gap:{row:2,column:0},justifyContent:"start",width:"100%",children:[k&&!P?(0,m.jsx)(a.xu,{"data-test-id":"mobile-modal-cancel-button",padding:2,children:(0,m.jsx)(a.hU,{accessibilityLabel:k,icon:"cancel",iconColor:"darkGray",onClick:z,padding:4,size:"sm"})}):null,g?(0,m.jsx)(a.kC.Item,{flex:"grow",children:(0,m.jsx)(a.kC,{alignItems:"center",direction:"column",justifyContent:"center",children:(0,m.jsxs)(a.xu,{dangerouslySetInlineStyle:{__style:k&&!P?{marginRight:O?-10:50,marginLeft:O?50:-10}:{}},"data-test-id":"mobile-modal-heading",children:[S?g:(0,m.jsx)(a.xv,{align:t,size:A||"400",weight:"bold",children:g}),T?(0,m.jsx)(a.xv,{align:t,children:T}):null]})})}):null]}),(0,m.jsxs)(a.xu,{overflow:"auto",children:[y,v]})]})]})})}):null}},454514:(e,t,n)=>{n.d(t,{UZ:()=>d,Vg:()=>s,ZP:()=>p});var i=n(667294),a=n(883119),l=n(554786),r=n(494125),o=n(785893);let s=200,d=({deviceType:e,hiding:t,visible:n})=>{let i="desktop"===e,a=0,l=i?"translateY(200px)":"translateY(-200px)",r="opacity 0.1s ease-in-out",o="hidden";return n&&!t&&(a=1,l="translateY(0)",r="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",o="visible"),n&&t&&(l="scale(1.1)",r="opacity transform 0.2s"),{opacity:a,pointerEvents:"auto",position:"relative",marginTop:i?10:0,transform:l,transition:r,visibility:o}};function p({_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:t,text:n,primaryAction:p,dismissButton:u,helperLink:_,thumbnail:c,type:m,dataTestId:w,duration:f=2e3,onHide:h,href:y,onClick:b,openNewPage:v,imageUrl:g}){let x;let k=(0,l.ZP)(),[A,P]=(0,i.useState)(!1),[j,S]=(0,i.useState)(!1),Z=(0,i.useRef)(),I=()=>{P(!0),Z.current=setTimeout(h,s)},z=()=>{Z.current=setTimeout(I,f)},T=()=>{Z.current&&clearTimeout(Z.current)};(0,r.Z)(()=>(setTimeout(()=>S(!0),100),z(),T)),g&&(x={image:(0,o.jsx)(a.Ee,{alt:"string"==typeof n?n:`${n[0]} ${n[1]}`,fit:"cover",naturalHeight:1,naturalWidth:1,src:g})});let E=(0,o.jsx)(a.FN,{_dangerouslySetPrimaryAction:t,_dangerouslySetThumbnail:e,dismissButton:u,helperLink:_,primaryAction:p,text:n,thumbnail:x??c,type:m}),{marginTop:L,opacity:C,pointerEvents:O,position:R,transform:M,transition:F,visibility:N}=d({deviceType:k,hiding:A,visible:j});return(0,o.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{transform:M,transition:F,visibility:N,pointerEvents:O}},"data-test-id":w??"toast",display:"flex",marginTop:L,onMouseEnter:T,onMouseLeave:z,opacity:C,position:R,children:y?(0,o.jsx)(a.Tg,{href:y,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{y.startsWith("#")&&(e.preventDefault(),t()),b?.(e)},rounding:"pill",target:v?"blank":null,children:E}):E})}},205841:(e,t,n)=>{n.d(t,{qE:()=>o,u_:()=>s.ZP});var i=n(883119),a=n(785893);let l=(e,t)=>!!(e?.includes("images/user/default")&&t);function r({accessibilityLabel:e,name:t,outline:n,size:r,src:o,verified:s}){return(0,a.jsx)(i.qE,{accessibilityLabel:e,name:t,outline:n,size:r,src:l(o,t)?void 0:o,verified:s})}r.displayName="Avatar";let o=r;var s=n(930837);n(454514)},86264:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(214877),a=n(340523),l=n(5859),r=n(344064),o=n(669177),s=n(286988),d=n(624797),p=n(953565);let u="http://play.google.com/store/apps/details?id=com.pinterest",_=["access_token","new_password","new_password_confirm","password","next"],c=(e,t)=>t?(0,d.ru)(e,{invite_code:t}):e,m=(e,t,n)=>{if("ios"===t&&"string"==typeof e&&e.startsWith("discover/article/")){let t=e.split("/")[2];e=`discover_article/${t}/?is_deeplink=1`}return("string"==typeof e&&"shopping/"===e&&(e="?is_deeplink=1"),"string"==typeof e)?c(e,n):"ios"===t||"ipad"===t?c(e.iOS,n):"android"===t?c(e.android,n):null},w=({deeplinkUri:e,invite_code:t,platform:n,fallbackUrl:i,unauthId:a,app_upsell_type:l})=>({deeplink_path:m(e,n,t),current_page_url:(0,d.Gw)("undefined"!=typeof window?window.location.href:"",_),install_id:a,utm_source:140,utm_medium:2152,app_upsell_type:l,...i?{af_r:i}:null}),f=({deeplinkUri:e,invite_code:t,platform:n,unauthId:i,app_upsell_type:a})=>{let l=JSON.stringify({deeplink_path:m(e,n,t),current_page_url:(0,d.Gw)("undefined"!=typeof window?window.location.href:"",_),install_id:i});return{referrer:(0,d.XP)({utm_source:"mweb",utm_medium:"upsell",utm_content:l,app_upsell_type:a})}},h=({unauthId:e,app_upsell_type:t})=>({referrer:encodeURI((0,d.XP)({utm_source:"mweb",utm_medium:"upsell",utm_campaign:"twa",utm_content:e,app_upsell_type:t}))}),y=({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:i,logContextEvent:a,platform:l,redirectToLite:r,unauthId:o,userAgent:_,app_upsell_type:c})=>{if(a?.({component:14347,element:13582,event_type:701,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:c}}),t){let m=w({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:i,platform:l,unauthId:o,userAgent:_,app_upsell_type:c});if((0,p.nP)("mweb.deeplink",{sampleRate:1,tags:{platform:l}}),i&&(0,p.nP)("mweb.deeplink.invite_code",{sampleRate:1}),(0,p.nP)("mweb.deeplink.unauthId",{sampleRate:1,tags:{withUnauthId:!!o}}),r){(0,p.nP)("mweb.deeplink.lite_link",{sampleRate:1}),a?.({component:14347,element:13582,event_type:14540,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:c}});let e=h({unauthId:o,app_upsell_type:c});window.location.href=(0,d.ru)("http://play.google.com/store/apps/details?id=com.pinterest.twa",e)}else if("android"===l){let e=f({deeplinkUri:t,invite_code:i,platform:l,unauthId:o,app_upsell_type:c});(0,s.v)()?(0,s.Z)().then(t=>{if(t.length>0){let e=(0,d.ru)(window.location.href,m);a?.({component:14347,element:13582,event_type:703,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:c}}),window.open(e)||a?.({component:14347,element:13582,event_type:702,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:c}})}else a?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:c}}),window.location.href=(0,d.ru)(u,e)}).catch(()=>{(0,p.nP)("mweb_android.deeplink.playStore.error",{sampleRate:1})}):(a?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:c}}),window.location.href=(0,d.ru)(u,e))}else{if((0,p.nP)("mweb.deeplink.appsflyer_link",{sampleRate:1}),"ios"===l&&"undefined"!=typeof window&&window.location.href.includes("show_yip_modal")){window.location.href=(0,d.ru)("https://pinterest.com/pinterest-predicts",m);return}a?.({component:14347,element:13582,event_type:14539,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:c}}),window.location.href=(0,d.ru)("https://pinterest.onelink.me/TVSr/21e04bfd",m)}}};var b=n(785893);function v({children:e,invite_code:t}){let{isAuthenticated:n,isBot:r,unauthId:s,userAgent:{platform:d,raw:p}}=(0,l.B)(),{logContextEvent:u}=(0,i.v)(),{checkExperiment:_}=(0,a.F)();return e(async(e,i,a)=>{u({component:14347,element:13582,event_type:700,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:i}}),y({isAuthenticated:n,checkExperiment:_,deeplinkUri:e,fallbackUrl:a,invite_code:t,logContextEvent:u,platform:d,redirectToLite:(0,o.Rp)({isBot:r,platform:d,userAgent:p}),unauthId:s,userAgent:p,app_upsell_type:i})})}let g=e=>(0,b.jsx)(r.ty,{children:t=>(0,b.jsx)(v,{...e,invite_code:t})});g.displayName="DeepLinkNavigator";let x=g},490166:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(883119),a=n(785893);function l({children:e,onMouseEnter:t,onMouseLeave:n,onTouch:l,rounding:r,fullWidth:o=!1,pressState:s="none",accessibilityLabel:d,role:p}){let u=(Array.isArray(s)?s:[s]).includes("compress");return(0,a.jsx)(i.iP,{accessibilityLabel:d,fullWidth:o,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:n&&(({event:e})=>n(e)),onTap:l&&(({event:e})=>l(e)),role:p,rounding:r,tapStyle:u?"compress":"none",children:e})}},766311:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(667294),a=n(587703),l=n(217058);let r=e=>Object.keys(e).reduce((t,n)=>(void 0===e[n]&&delete t[n],t),{...e}),o=({viewType:e,viewParameter:t,viewData:n,auxData:i,objectIdStr:a,component:o,clientTrackingParams:s,element:d},p)=>{let u=r({event_type:13,view_type:e,view_parameter:t,view_data:n,aux_data:i,object_id_str:a,component:o,clientTrackingParams:s,element:d});-1===Object.keys(u).indexOf("view_type")&&(0,l.My)("mweb.logging.null_view_type"),p(u)};function s(e){let{auxData:t,clientTrackingParams:n,children:l,component:r,element:s,objectIdStr:d,viewData:p,viewParameter:u,viewType:_}=e,c=(0,a.Z)(),m=JSON.stringify(t),w=JSON.stringify(p);return(0,i.useEffect)(()=>{o(e,c)},[c,m,n,r,s,d,w,u,_]),i.Children.only(l)}},90647:(e,t,n)=>{n.d(t,{B:()=>w,Z:()=>f});var i=n(667294),a=n(616550),l=n(214877),r=n(525364),o=n(96157),s=n(5859),d=n(217058),p=n(623409),u=n(773616),_=n(86264),c=n(953565),m=n(785893);let w=(e,t)=>"/"===e.pathname?"/":(0,o.am)(e)&&t?`board/${e.pathname.substr(1)}`:e.pathname.substr(1);function f({children:e,componentType:t,app_upsell_type:n}){let o=(0,a.TH)(),{flushContextEvents:f,logContextEvent:h}=(0,l.v)(),{viewType:y,viewParameter:b}=(0,r.SU)(),v=(0,p.Z)(),{userAgent:{platform:g}}=(0,s.B)();(0,i.useEffect)(()=>{v({action:"view",item:"download-button",within:n})},[o,n,v]);let x=(0,i.useRef)(!1);(0,i.useEffect)(()=>{y&&202!==y?(h({component:t||13106,element:10308,event_type:9976,view_type:y,view_parameter:b,aux_data:{app_upsell_type:n,app_upsell_is_dupe:x.current}}),x.current=!0):(0,c.nP)("webapp.track_app_upsell_viewed_invalid_parameters",{sampleRate:1,tags:{component:t,view_type:y,view_parameter:b,app_upsell_type:n,app_upsell_is_dupe:x.current}})},[t,h,b,y,n]);let k=(0,u.Z)();return(0,i.useEffect)(()=>{k||(0,d.My)(`mweb.app_upsell.forbidden_upsell.${n}`)},[k,n]),(0,m.jsx)(_.Z,{children:i=>e({handleOpenApp:e=>{v({action:"click",item:"download-button",within:n}),(0,d.NC)("press_open_app",!0),h({component:t||13106,element:10308,event_type:102,view_type:y||202,view_parameter:b,aux_data:{app_upsell_type:n}}),h({component:t||13106,element:10308,event_type:9977,view_type:y||202,view_parameter:b,aux_data:{app_upsell_type:n}}),f(!0),i&&(h({component:t||13106,element:10308,event_type:1701,view_type:y||202,view_parameter:b,aux_data:{app_upsell_type:n}}),i(e?.deepLinkUri??w(o,"android"===g),n))}})})}},506449:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(339001);let a=({group:e,i18n:t,sender:n})=>{let a={description:"",heading:""};switch(e){case"enabled_1":a.heading=t.bt("Lleva un registro de lo que te inspira", "Keep track of what inspires you", "mweb.unauth.board_instagram_story_referred_upsell.heading1", undefined, true),a.description=t.bt("Regístrate para guardar estas ideas.", "Sign up to save these ideas", "mweb.unauth.board_instagram_story_referred_upsell.description1", undefined, true);break;case"enabled_2":a.heading=t.bt("¿Te inspiraste?", "Feeling inspired?", "mweb.unauth.board_instagram_story_referred_upsell.heading2", undefined, true),a.description=t.bt("Regístrate para crear tu propio tablero.", "Sign up to create your own board", "mweb.unauth.board_instagram_story_referred_upsell.description2", undefined, true);break;case"enabled_3":a.heading=t.bt("¿Te gustan estas ideas?", "Loving these ideas?", "mweb.unauth.board_instagram_story_referred_upsell.heading3", undefined, true),a.description=(0,i.nk)(t.bt("Regístrate para seguir a {{sender}} y obtener más inspiración.", "Sign up to follow {{sender}} for more inspiration", "mweb.unauth.board_instagram_story_referred_upsell.description3", undefined, true),{sender:n})}return a}},340249:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(667294),a=n(616550),l=n(96157),r=n(757640),o=n(344064);let s=e=>{let t=(0,o.vE)(),n=(0,a.TH)(),[s]=(0,i.useState)(n),d=n.pathname===s.pathname&&n.search===s.search&&(0,l.Fw)(n)||null,[p,u]=(0,i.useState)(null),{isLoaded:_,data:c}=(0,r.Z)(!e&&t&&d?{name:"InviteCodeMetadataResource",options:{invite_code:t}}:null);return(0,i.useEffect)(()=>{_&&c&&u(c??null)},[_,c]),t&&d?{invite:p,pageType:d}:null}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/16627.es_419-8d4fbcba9b19f072.mjs.map