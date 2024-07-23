"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[26189,84631],{690674:(e,l,i)=>{var s,a,n,t,r,o,d;i.r(l),i.d(l,{default:()=>p});let c={fragment:{argumentDefinitions:s=[{defaultValue:null,kind:"LocalArgument",name:"inviteCode"}],kind:"Fragment",metadata:null,name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:a=[{kind:"Variable",name:"inviteCode",variableName:"inviteCode"}],concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[t={alias:null,args:null,kind:"ScalarField",name:"firstName",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null}],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:s,kind:"Operation",name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[t,r,o,d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},d],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}]},params:{id:"4610a8b7fe41310eb2db231b8c1171930d91f797fbc7fd321ec6682cb48a3711",metadata:{},name:"UnauthCloseupInviteUpsellQuery",operationKind:"query",text:null}};c.hash="6932152931fe069ad54b218e36e66908";let p=c;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let l=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[l]=e}}}(c.default||c)},48481:(e,l,i)=>{i.d(l,{Z:()=>n});var s=i(877457),a=i(241552);let n=()=>{let e=(0,s.g)(),l=(0,a.l)();return i=>{let{mobileOptions:s,desktopOptions:a,reason:n,attributionLabel:t,pinId:r}=i;e?e.showDesktopSignupModal({signupFlow:a?.modalType==="login"?{type:"login"}:{type:"signup"},reason:n,attributionLabel:t,...a?.modalOptions}):l&&l.showMobileSignupModal({reason:n,attributionLabel:t,headingType:s?.headingType??"none",pinId:r})}}},677233:(e,l,i)=>{i.d(l,{Z:()=>p,y:()=>c});var s=i(667294),a=i(805783),n=i(191313),t=i(573810),r=i(194602),o=i(766311),d=i(785893);let c=()=>{(0,n.Nh)("appUpsell",Date.now()),(0,n.qn)("firstUpsellTime")||(0,n.Nh)("firstUpsellTime",Date.now()),(0,t.Nh)("showedAppUpsellCurrentSession",!0)};function p({children:e,clientTrackingParams:l,viewParameter:i,viewType:n}){return(0,r.Z)()||(0,a.FP)(window)?null:(0,d.jsx)(o.Z,{clientTrackingParams:l,component:13106,viewParameter:i,viewType:n,children:(0,d.jsx)(s.Fragment,{children:e})})}},126189:(e,l,i)=>{i.d(l,{Z:()=>R});var s=i(667294),a=i(616550),n=i(883119),t=i(214877),r=i(119936),o=i(140017),d=i(339001),c=i(96157),p=i(340523),_=i(5859),u=i(757640),h=i(217058),m=i(623409),g=i(468653),x=i(624797),f=i(554786),y=i(90647),b=i(677233),j=i(506449),w=i(634467),v=i(686703),P=i(260488),z=i(669177),A=i(19447),C=i(340249),k=i(785893);let S=({description:e,handleDismiss:l,heading:i,i18n:s,appUpsellType:a,expCtaCallback:t,ctaText:r})=>(0,k.jsx)(y.Z,{app_upsell_type:a,componentType:14155,children:({handleOpenApp:a})=>(0,k.jsxs)(n.kC,{alignItems:"center",direction:"column",justifyContent:"center",children:[(0,k.jsx)(n.xu,{paddingY:2,children:(0,k.jsx)(n.X6,{align:"center",size:"400",children:i})}),(0,k.jsx)(n.xu,{width:246,children:(0,k.jsx)(n.xv,{align:"center",size:"300",children:e})}),(0,k.jsxs)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{display:"grid"}},justifyContent:"center",marginTop:5,children:[(0,k.jsx)(n.xu,{marginBottom:2,width:246,children:(0,k.jsx)(n.zx,{color:"red",fullWidth:!0,onClick:()=>{(0,b.y)(),t?t():a()},size:"lg",text:r||s.bt("Abrir la aplicación", "Open app", "mweb.auth.referred_app_upsell.open_app", undefined, true)})}),(0,k.jsx)(n.zx,{color:"gray",fullWidth:!0,onClick:()=>{l()},size:"lg",text:s.bt("Continuar en el navegador", "Continue in browser", "mweb.auth.referred_app_upsell.continue", undefined, true)})]})]})}),I=({handleDismiss:e,i18n:l,iconSize:i,appUpsellType:s})=>(0,k.jsxs)(n.xu,{alignItems:"center",bottom:!0,color:"light",direction:"column",display:"flex",left:!0,paddingX:5,position:"fixed",right:!0,top:!0,zIndex:new n.Ry(5),children:[(0,k.jsx)(n.xu,{"data-test-id":"referred-app-upsell-dismiss-button",left:!0,padding:4,position:"absolute",top:!0,children:(0,k.jsx)(n.hU,{accessibilityLabel:l.bt("Cancelar", "Cancel", "mweb.auth.referred_app_upsell.close_modal_label", undefined, true),icon:"cancel",onClick:e,size:"sm"})}),(0,k.jsxs)(n.xu,{direction:"column",display:"flex",height:"100%",justifyContent:"center",margin:"auto",maxWidth:440,children:[(0,k.jsx)(n.xu,{display:"flex",justifyContent:"center",paddingY:2,children:(0,k.jsx)(n.JO,{accessibilityLabel:l.bt("Logotipo", "Logo", "mweb.auth.referred_app_upsell.logo", undefined, true),color:"brandPrimary",icon:"pinterest",size:i})}),(0,k.jsx)(S,{appUpsellType:s,description:l.bt("Guarda ideas, interactúa con amigos e inspírate", "Save ideas, interact with friends, and get inspired", "mweb.auth.referred_app_upsell.description1", undefined, true),handleDismiss:e,heading:l.bt("Pinterest es mejor en la aplicación", "Pinterest is better in the app", "mweb.auth.referred_app_upsell.heading1", undefined, true),i18n:l})]})]}),T=({backgroundImageUrl:e,handleDismiss:l,heroImage:i,i18n:s,multipleImages:a,appUpsellType:t})=>(0,k.jsxs)(n.xu,{alignItems:"center",bottom:!0,color:"light",direction:"column",display:"flex",left:!0,paddingX:5,position:"fixed",right:!0,top:!0,zIndex:new n.Ry(5),children:[(0,k.jsx)(n.xu,{height:319,position:"absolute",top:!0,width:"100%",zIndex:new n.Ry(2),children:(0,k.jsx)(n.Ee,{alt:s.bt("Imagen de ofertas adicionales de la aplicación", "App upsell image", "mweb.auth.referred_app_upsell.image", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:e})}),(0,k.jsxs)(n.xu,{alignItems:"center",bottom:!0,color:"light",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(12px)"}},direction:"column",display:"flex",left:!0,paddingX:5,position:"absolute",right:!0,top:!0,zIndex:new n.Ry(3),children:[(0,k.jsx)(n.xu,{color:"default",dangerouslySetInlineStyle:{__style:{background:"transparent"}},"data-test-id":"referred-app-upsell-dismiss-button",left:!0,padding:4,position:"absolute",top:!0,children:(0,k.jsx)(n.hU,{accessibilityLabel:s.bt("Cancelar", "Cancel", "mweb.auth.referred_app_upsell.close_modal_label", undefined, true),icon:"cancel",onClick:l,size:"sm"})}),(0,k.jsxs)(n.xu,{direction:"column",display:"flex",height:"100%",justifyContent:"center",margin:"auto",maxWidth:440,children:[(0,k.jsx)(n.kC,{justifyContent:"center",children:i}),(0,k.jsx)(S,{appUpsellType:t,description:a?s.bt("Guarda estas ideas, obtén recomendaciones similares y más", "Save these ideas, get similar recs, and more", "mweb.auth.referred_app_upsell.description2", undefined, true):s.bt("Guarda esta idea, obtén recomendaciones similares y más", "Save this idea, get similar recs, and more", "mweb.auth.referred_app_upsell.description5", undefined, true),handleDismiss:l,heading:s.bt("Es mejor en la aplicación de Pinterest", "It's better in the Pinterest app", "mweb.auth.referred_app_upsell.heading1", undefined, true),i18n:s})]})]})]}),U=({pinUrl:e,i18n:l})=>(0,k.jsx)(n.xu,{height:235,marginBottom:6,overflow:"hidden",rounding:4,width:176,children:(0,k.jsx)(n.Ee,{alt:l.bt("Imagen de ofertas adicionales de la aplicación", "App upsell image", "mweb.auth.referred_app_upsell.image", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:e})});function R({onDismiss:e,viewParameter:l,viewType:i}){let R=(0,o.ZP)(),L=(0,f.Wb)(),{isBot:E,userAgent:{platform:Z,raw:O},isAuthenticated:F}=(0,_.B)(),N=(0,z.Rp)({isBot:E,platform:Z,userAgent:O}),{logContextEvent:B}=(0,t.v)(),D=L?60:32,W=(0,a.k6)(),K=(0,a.$B)(),Q=(0,a.TH)(),{invite_code:H}=(0,x.mB)(Q.search),{appUpsellType:q,uiType:G}=(0,v.n)(),M=()=>{B({component:14155,element:10308,event_type:10220,view_type:i||202,view_parameter:l,aux_data:{app_upsell_type:q}}),(0,b.y)(),e()},J=K.params.id??"",{data:X}=(0,u.Z)(J?{name:"PinResource",options:{field_set_key:"detailed",id:J}}:null),Y=(0,A.S6)()(J),{username:V,slug:$}=(0,a.UO)(),{data:ee}=(0,u.Z)(V&&$?{name:"BoardResource",options:{username:(0,x.Jx)(V),slug:(0,x.Jx)(unescape($||"")),field_set_key:"detailed"}}:null),el=(0,C.Z)(F||!(0,c.am)(Q)),{invite_channel:ei,sender:es}=el?.invite||{},{checkExperiment:ea}=(0,p.F)(),{isNativeAppInstalled:en}=(0,w.N)(),{anyEnabled:et,group:er}=!F&&!en&&32===ei&&es&&("unauth-social-iab"===q||"unauth-social-referred"===q)&&ea("unauth_insta_story_board_sharing_cta_social_land")||{},eo=(0,j.Z)({group:er||"",i18n:R,sender:es?.full_name||es?.username||""}),ed=(0,m.Z)(),{trackConversionUpsell:ec}=(0,g.Z)(),ep=(0,s.useCallback)(()=>{(0,h.NC)("press_email_signup"),(0,h.Rp)({event:"start",provider:"email"}),ed({action:"click",item:"email-signup-button"}),ec({viewType:i,viewParameter:l,eventType:14689,element:13506}),B({view_type:i,view_parameter:l,element:31,event_type:102,aux_data:{},component:14155}),ec({eventType:14688,component:14155,incrementUpsellReasonCounter:!1}),e(),W.push({pathname:"/signup/step1/",search:Q.search})},[W,Q.search,B,e,ec,ed,l,i]);if("full"===G){let e="",l=null,i=!1;if((0,c.L6)(W.location)&&(e=(X??Y)?.images?.orig?.url||"",l=(0,k.jsx)(U,{i18n:R,pinUrl:e})),(0,c.am)(W.location)&&ee&&ee.images&&ee.images["474x"]){if(ee.images["474x"].length>2){e=ee.images["474x"][0].url||"";let s=ee.images["474x"][1].url||"",a=ee.images["474x"][2].url||"";i=!0,l=(0,k.jsx)(n.xu,{marginBottom:7,children:(0,k.jsxs)(n.kC,{children:[(0,k.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{borderTopLeftRadius:"16px",borderBottomLeftRadius:"16px",marginRight:"1px"}},height:117,overflow:"hidden",width:117,children:(0,k.jsx)(n.Ee,{alt:R.bt("Imagen de ofertas adicionales de la aplicación", "App upsell image", "mweb.auth.referred_app_upsell.image", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:e})}),(0,k.jsxs)(n.kC,{direction:"column",children:[(0,k.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{borderTopRightRadius:"16px",marginBottom:"1px"}},height:59,overflow:"hidden",width:57,children:(0,k.jsx)(n.Ee,{alt:R.bt("Imagen de ofertas adicionales de la aplicación", "App upsell image", "mweb.auth.referred_app_upsell.image", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:s})}),(0,k.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{borderBottomRightRadius:"16px"}},height:57,overflow:"hidden",width:58,children:(0,k.jsx)(n.Ee,{alt:R.bt("Imagen de ofertas adicionales de la aplicación", "App upsell image", "mweb.auth.referred_app_upsell.image", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:a})})]})]})})}else ee.images["474x"].length>0&&(e=ee.images["474x"][0].url||"",l=(0,k.jsx)(U,{i18n:R,pinUrl:e}))}return e?(0,k.jsx)(T,{appUpsellType:q,backgroundImageUrl:e,handleDismiss:M,heroImage:l,i18n:R,multipleImages:i}):(0,k.jsx)(I,{appUpsellType:q,handleDismiss:M,i18n:R,iconSize:D,upsellAppIsAndroidLiteApp:N})}if("inline"===G){let e=(0,k.jsx)(n.xu,{color:"light",padding:1,rounding:1,children:(0,k.jsx)(n.JO,{accessibilityLabel:R.bt("Logotipo de Pinterest", "Pinterest logo", "AppUpsellFooter.icon", undefined, true),color:"brandPrimary",icon:"pinterest",inline:!0,size:28})}),l=R.bt("Es mejor en la aplicación", "It's better in the app", "mweb.auth.referred_app_upsell.heading3", undefined, true),i=R.bt("Obtén recomendaciones similares y más", "Get similar recs and more", "mweb.auth.referred_app_upsell.description4", undefined, true);return q.endsWith("social-referred")&&H&&(l=(0,k.jsx)(P.UseCloseupInviteQuery,{variables:{inviteCode:H},children:e=>(0,d.nk)(R.bt("{{ invitee }} compartió esta idea", "{{ invitee }} shared this idea", "mweb.auth.referred_app_upsell.heading5", undefined, true),{invitee:e.v3GetInviteCodeQuery?.data?.sender?.firstName||""})}),i=R.bt("Abre la aplicación para descubrir más", "Open app to discover more", "mweb.auth.referred_app_upsell.description6", undefined, true),H&&(e=(0,k.jsx)(P.UseCloseupInviteQuery,{variables:{inviteCode:H},children:e=>(0,k.jsx)(n.xu,{height:48,overflow:"hidden",rounding:6,width:48,children:(0,k.jsx)(n.Ee,{alt:R.bt("Imagen de perfil de ofertas adicionales de la aplicación", "App upsell profile image", "mweb.auth.referred_app_upsell.image1", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:e.v3GetInviteCodeQuery?.data?.sender?.imageMediumUrl||""})})}))),(0,k.jsx)(y.Z,{app_upsell_type:q,children:({handleOpenApp:s})=>(0,k.jsx)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"#F1F1F1"}},direction:"row",display:"flex",height:74,padding:4,width:"100%",zIndex:new n.Ry(99999),children:(0,k.jsx)(n.iP,{onTap:()=>{(0,b.y)(),s()},children:(0,k.jsxs)(n.kC,{alignItems:"center",direction:"row",justifyContent:"start",width:"100%",children:[e,(0,k.jsxs)(n.xu,{flex:"grow",marginStart:4,children:[(0,k.jsx)(n.xu,{marginBottom:1,children:(0,k.jsx)(n.xv,{children:l})}),(0,k.jsx)(n.xv,{weight:"bold",children:i})]}),(0,k.jsx)(n.xu,{"data-test-id":"referred-app-upsell-dismiss-button",children:(0,k.jsx)(n.hU,{accessibilityLabel:"cancel",icon:"cancel",onClick:({event:e})=>{M(),e.preventDefault(),e.stopPropagation()},size:"sm"})})]})})})})}{let e=R.bt("Pinterest es mejor en la aplicación", "Pinterest is better in the app", "mweb.auth.referred_app_upsell.heading3", undefined, true);return q.endsWith("social-referred")&&H&&(e=(0,k.jsx)(P.UseCloseupInviteQuery,{variables:{inviteCode:H},children:e=>(0,d.nk)(R.bt("Únete a {{ invitee }} en Pinterest", "Join {{ invitee }} on Pinterest", "mweb.auth.referred_app_upsell.heading4", undefined, true),{invitee:e.v3GetInviteCodeQuery?.data?.sender?.firstName||""})})),(0,k.jsx)(r.default,{accessibilityModalLabel:R.bt("ventana modal", "modal", "mweb.auth.referred_app_upsell.modal_label", undefined, true),closeOnOutsideClick:!1,isOpen:!0,mobileHideCloseIcon:!0,onDismiss:()=>{},type:"app_upsell_v1",zIndex:new n.Ry(101),children:(0,k.jsxs)(n.xu,{"data-test-id":"appUpsell-iframe",padding:2,children:[(0,k.jsx)(n.xu,{display:"inlineBlock",position:"absolute",children:(0,k.jsx)(n.xu,{"data-test-id":"referred-app-upsell-dismiss-button",marginStart:1,marginTop:1,children:(0,k.jsx)(n.hU,{accessibilityLabel:R.bt("cerrar", "close", "mweb.auth.referred_app_upsell.close", undefined, true),icon:"cancel",onClick:M,size:"sm"})})}),(0,k.jsxs)(n.xu,{marginBottom:5,marginTop:8,paddingX:2,children:[(0,k.jsx)(n.xu,{display:"flex",justifyContent:"center",paddingY:3,children:(0,k.jsx)(n.JO,{accessibilityLabel:R.bt("Logotipo", "Logo", "mweb.auth.referred_app_upsell.logo", undefined, true),color:"brandPrimary",icon:"pinterest",size:D})}),(0,k.jsx)(S,{appUpsellType:q,ctaText:et?R.bt("Registrarse", "Sign up", "mweb.unauth.board_instagram_story_referred_upsell.cta_text", undefined, true):void 0,description:et?eo.description:R.bt("Guarda ideas, interactúa con amigos e inspírate", "Save ideas, interact with friends, and get inspired", "mweb.auth.referred_app_upsell.description3", undefined, true),expCtaCallback:et?ep:void 0,handleDismiss:M,heading:et?eo.heading:e,i18n:R})]})]})})}}},260488:(e,l,i)=>{i.r(l),i.d(l,{UseCloseupInviteQuery:()=>j,default:()=>w});var s,a=i(167912),n=i(883119),t=i(608516),r=i(344064),o=i(205841),d=i(140017),c=i(48481),p=i(623409),_=i(490166),u=i(953565),h=i(785893);function m({isStoryPin:e,inviteText:l,inviterFirstName:i,isThinnerStyle:s,username:a}){let t=(0,p.Z)(),r=l.split(i);return(0,h.jsx)(n.xu,{children:(0,h.jsx)(_.Z,{onTouch:()=>{(0,u.nP)("mweb_social_unauth.closeup.social_text_click")},pressState:"none",children:(0,h.jsxs)(n.kC,{direction:"row",gap:{row:1,column:0},children:[(0,h.jsx)(n.xv,{inline:!0,size:"300",children:r[0]}),e?(0,h.jsx)(n.xv,{inline:!0,size:"300",weight:"bold",children:(0,h.jsx)(n.rU,{href:"/"+a,onClick:()=>{t({action:"click",item:"invite-profiler"})},target:"blank",children:i})}):(0,h.jsx)(n.xv,{inline:!0,size:s?"200":"300",weight:s?"normal":"bold",children:(0,h.jsx)(n.rU,{href:"/"+a,onClick:()=>{t({action:"click",item:"invite-profiler-not-story"})},target:"blank",children:i})}),(0,h.jsx)(n.xv,{inline:!0,size:s?"200":"300",children:r[1]})]})})})}function g({inviter:e,socialContextBannerStyle:l,setShouldShowSocialUpsellBanner:i}){let{shouldShowSignupUpsellText:s,isDismissible:a}=l,t=(0,d.ZP)(),{username:r}=e,u=e.imageMediumUrl,g=e.firstName,x=(0,c.Z)(),f=(0,p.Z)();return(0,h.jsx)(n.kC,{alignItems:"center",justifyContent:a?"center":"start",children:(0,h.jsx)(n.xu,{children:(0,h.jsx)(n.iP,{fullHeight:!0,onTap:()=>{f({action:"click",item:"close-button",within:"social-banner"}),x({reason:"UPSELL_LOGIN_OR_SIGNUP",attributionLabel:"tap_desktop_unauth_social_context_banner",desktopOptions:{modalType:"signup",modalOptions:{source:"defaultSource",container:"pinWash"}}})},children:(0,h.jsxs)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(233, 228, 255, 0.9)"}},direction:"row",display:"flex",height:44,marginBottom:6,marginStart:a?0:2,marginTop:2,paddingX:a?4:2,paddingY:4,position:a?"static":"absolute",rounding:"pill",top:!0,width:a?1012:void 0,zIndex:new n.Ry(1),children:[(0,h.jsx)(n.xu,{marginBottom:8,marginEnd:1,marginTop:8,width:32,children:(0,h.jsx)(_.Z,{onTouch:e=>{e.stopPropagation(),r&&window.open("/"+r),f({action:"click",item:"user-rep",within:"social-banner"})},pressState:"none",children:u?.includes("default")?(0,h.jsx)(n.JO,{accessibilityLabel:"pinterest logo",color:"default",icon:"pinterest",size:24}):(0,h.jsx)(o.qE,{name:g,size:"fit",src:u??void 0})})}),(0,h.jsxs)(n.kC,{direction:"row",flex:"grow",children:[(0,h.jsx)(m,{inviterFirstName:g,inviteText:s?(t.bt("{{ name }} compartió esta idea.", "{{ name }} shared this idea.", "pin.closeup.long_banner.desktop.shareNotification", undefined, true)).replace("{{ name }}",g):(t.bt("{{ name }} compartió esta idea ", "{{ name }} shared this idea ", "pin.closeup.banner.desktop.shareNotification", undefined, true)).replace("{{ name }}",g),isStoryPin:!1,isThinnerStyle:s,username:r}),s&&(0,h.jsx)(n.xu,{marginEnd:2,marginStart:1,children:(0,h.jsx)(n.xv,{inline:!0,size:"200",weight:"bold",children:t.bt("Regístrate para unirte", "Sign up to join them", "pin.header.social_context_dweb", undefined, true)})})]}),a&&(0,h.jsx)(n.hU,{accessibilityLabel:"cancel",icon:"cancel",onClick:({event:e})=>{e.stopPropagation(),f({action:"dismiss",item:"close-button",within:"social-banner"}),i?.(!1)},size:"sm"})]})})})})}var x=i(90647),f=i(773616);function y({inviter:{imageMediumUrl:e,username:l,firstName:i},isStoryPin:s}){let a=(0,d.ZP)(),t=()=>(0,u.nP)("mweb_social_unauth.closeup.avatar_click"),r=(0,f.Z)(),c=(0,p.Z)(),g=(a.bt("{{ name }} compartió esta idea", "{{ name }} shared this idea", "pin.closeup.header.shareNotification", undefined, true)).replace("{{ name }}",l),y="undefined"!=typeof window&&window.innerWidth<360,b=l.length>25;return r&&s?(0,h.jsxs)(n.kC,{alignItems:"center",gap:{row:2,column:0},justifyContent:"center",minHeight:b?100:80,children:[(0,h.jsx)(n.xu,{marginBottom:4,marginTop:4,width:40,children:(0,h.jsx)(_.Z,{onTouch:t,pressState:"none",children:(0,h.jsx)(o.qE,{name:i,size:"fit",src:e??void 0})})}),(0,h.jsx)(n.kC.Item,{flex:"grow",children:(0,h.jsxs)(n.xu,{alignItems:"center",direction:b?"column":"row",display:"flex",justifyContent:b?"start":"between",padding:b?3:0,children:[(0,h.jsxs)(n.kC,{alignItems:"start",direction:"column",gap:{row:0,column:1},wrap:!y,children:[(0,h.jsx)(n.kC,{children:(0,h.jsxs)(n.xv,{align:b?"center":"start",children:[(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:(0,h.jsx)(n.rU,{display:"inlineBlock",href:`/${l??""}/`,onClick:()=>{c({action:"click",item:"invite-profiler"})},target:"blank",underline:"hover",children:l})}),g.split(l)[1]]})}),!b&&(0,h.jsx)(n.xv,{size:"100",children:a.bt("Abre Pinterest para ver más", "Open Pinterest to see more", "unauth.mweb.shared.banner.edu", undefined, true)})]}),(0,h.jsx)(n.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:b?3:0,minWidth:b?0:100,children:(0,h.jsx)(x.Z,{app_upsell_type:"social-context-header",componentType:14161,children:({handleOpenApp:e})=>(0,h.jsx)(n.zx,{onClick:()=>e(),size:"md",text:a.bt("Abrir la aplicación", "Open app", "unauth.mweb.shared.banner.cta", undefined, true)})})})]})})]}):(0,h.jsx)(_.Z,{pressState:"none",children:(0,h.jsxs)(n.kC,{alignItems:"center",gap:4,justifyContent:"start",minHeight:80,children:[(0,h.jsx)(n.xu,{marginBottom:4,marginStart:0,marginTop:4,width:48,children:(0,h.jsx)(_.Z,{onTouch:t,pressState:"none",children:(0,h.jsx)(o.qE,{name:i,src:e??void 0})})}),(0,h.jsx)(n.kC,{alignItems:"center",direction:"column",justifyContent:"start",children:(0,h.jsx)(n.xu,{marginStart:0,children:(0,h.jsx)(m,{inviterFirstName:i,inviteText:(a.bt("{{ name }} compartió esta idea contigo", "{{ name }} shared this idea with you", "pin.closeup.header.shareNotification", undefined, true)).replace("{{ name }}",i),isStoryPin:s,isThinnerStyle:!1,username:l})})})]})})}let b=void 0!==s?s:s=i(690674),j=({children:e,variables:l})=>e((0,a.useLazyLoadQuery)(b,l));function w({inviterFirstNameRef:e,isDesktop:l,isStoryPin:i,setShouldShowSocialUpsellBanner:s,socialContextBannerStyle:a}){return(0,h.jsx)(t.Z,{children:(0,h.jsx)(r.ty,{children:t=>t?(0,h.jsx)(j,{variables:{inviteCode:t},children:t=>{let{firstName:r,imageMediumUrl:o,username:d}=t.v3GetInviteCodeQuery?.data?.sender??Object.freeze({});return r&&d?(e&&(e.current=r),l?(0,h.jsx)(g,{inviter:{firstName:r,imageMediumUrl:o,username:d},setShouldShowSocialUpsellBanner:s,socialContextBannerStyle:a??{isDismissible:!0,shouldShowSignupUpsellText:!0}}):(0,h.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{boxShadow:"0 1px 0 0 rgba(0, 0, 0, 0.08)"}},marginEnd:-2,marginStart:-2,paddingX:2,children:(0,h.jsx)(y,{inviter:{firstName:r,imageMediumUrl:o,username:d},isStoryPin:!!i})})):null}}):null})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/26189.es_419-3e88b1d6941e0fa4.mjs.map