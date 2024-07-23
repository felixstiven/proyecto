"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[92493],{420097:(e,t,i)=>{i.d(t,{Z:()=>I});var o=i(667294),n=i(545007),s=i(214877),r=i(658583),a=i(622541),l=i(353971),c=i(175324),u=i(239493),h=i(322079),d=i(614792),g=i(140017),p=i(96452),_=i(640258),m=i(897650),b=i(974371),f=i(602377),w=i(508218),x=i(516256),v=i(237856),y=i(340523),O=i(306775),S=i(5859),A=i(217058),T=i(623409),P=i(472980),E=i(149722),j=i(785893);function C(e,t,i){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class k extends o.Component{constructor(...e){super(...e),C(this,"state",{modal:null}),C(this,"annotateOneTapStopwatch",e=>(0,O.M3)("google_autologin",e)),C(this,"abortOneTapStopwatch",e=>(0,O.RP)("google_autologin",e)),C(this,"stopOneTapStopwatch",()=>(0,O.PA)("google_autologin")),C(this,"trackAutologin",e=>(0,A.dy)({event:e,provider:"google"})),C(this,"deferredHandleOneTapResponse",e=>{setTimeout(()=>{this.handleOneTapResponse(e)},5e3)}),C(this,"handleOneTapResponse",e=>{let{autologinDisabled:t,login:i,viewer:o}=this.props;if(!e)return;let{credential:n,select_by:s}=e,r=(0,m.PL)(s),a="AUTO_LOGIN"===r;if(this.annotateOneTapStopwatch("autoLoginGoogleEnd"),this.stopOneTapStopwatch(),a&&t)return;a&&this.trackAutologin("pinterest_login_start");let{pageContext:l}=this.props;i({creds:{google_open_id_token:n,autologin:a},loggingOptions:{loggingData:{container:"google_one_tap_modal",page:l?.pageType,trigger:(0,m.mK)(r)},loginAttemptContextEvent:{event_type:7534,element:"SIGN_IN_WITH_GOOGLE_BUTTON"===r?12981:"ONE_TAP_PROMPT"===r?12982:null,aux_data:{signup_login_method:x.Z.GOOGLE_ONE_TAP,upsell_reason:a?"autologin_google":"google_one_tap",...o.isAuth?{login_state:o.isLimitedLogin?f.Z.LIMITED:f.Z.DEFAULT}:{}}}}}).then(()=>{let{nextUrl:e}=this.props;a&&this.trackAutologin("pinterest_login_success"),e?w.ZP.handleRedirect(e):w.ZP.handleRedirectWithFallbackWindowLocation(),a&&this.trackAutologin("end")},e=>{let{hide:t,handleLoginWithMfa:i}=this.props;if(a&&this.trackAutologin("pinterest_login_failure"),e?.api_error_code===p.xN){if("SIGN_IN_WITH_GOOGLE_BUTTON"===r)this.attemptSignup({googleOpenId:n});else{let e="business_login_page"===this.props.container;this.setState({modal:{type:"confirmSignup",step:e?a&&"staticSignupLogin"||"delayedSignupLoadingSpinner":"staticSignupLoginWithTOS",handleConfirmSignup:()=>this.attemptSignup({googleOpenId:n})}})}}else if(e?.api_error_code===p.Zn)i(n);else if(e?.api_error_code===p.an)this.setState({modal:{type:"accountSuspended"}});else{let e=this.props.i18n.bt("No se pudo iniciar sesión con esa cuenta. Prueba con el botón de Google.", "We couldn’t log you in with that account. Try the Google button!", " - ", undefined, true);(0,u.x)(e),t()}a&&this.trackAutologin("end")})}),C(this,"attemptSignup",({googleOpenId:e})=>{let{handleGdprRequiresAge:t,pageContext:i}=this.props,o=(0,_.Z)(e);t({options:{type:"google",google_open_id_token:e,first_name:o.given_name,last_name:o.family_name,image_url:o.picture},context:{container:"google_one_tap_modal",page:i?.pageType}}),(0,A.NC)("check_age_with_one_tap_from_one_tap_dweb")})}componentDidMount(){let{requestContext:e,webGoogleDisabled:t}=this.props;r.U2(a.e7)&&(0,A.My)(`pcons.google_autologin_disabled_cookie.login_page.${(0,v.M)()}`),t||r.U2(a.e7)&&e.isBot?this.abortOneTapStopwatch("disabled"):(this.setupGoogleOneTap(),e.isBot||(0,A.My)("unauth_web_container.google_one_tap_modal.tier1.other.shown"))}async setupGoogleOneTap(){let{googleSignInApi:e}=this.props;await e?.ensureInit("oneTap",this.deferredHandleOneTapResponse),this.trackAutologin("show_ui"),m.Fm()?.prompt(()=>{})}render(){let{requestContext:e,webGoogleDisabled:t,hide:i}=this.props,{modal:o}=this.state;if(e.isBot||t||!o)return null;switch(o.type){case"accountSuspended":return(0,j.jsx)(l.Z,{onClose:()=>this.setState({modal:null})});case"confirmSignup":return(0,j.jsx)(c.Z,{handleCancelClick:()=>this.setState({modal:null}),handleConfirmSignup:o.handleConfirmSignup,handleShowLogin:i,step:o.step});default:return null}}}function I({container:e,handleGdprRequiresAge:t,handleLoginWithMfa:i,nextUrl:r}){let a=(0,h.Z)(),{logContextEvent:l}=(0,s.v)(),c=(0,g.ZP)(),u=(0,n.I0)(),p=(0,E.Z)(),[_,m]=(0,o.useState)(!0),{checkExperiment:f}=(0,y.F)(),{anyEnabled:w}=f("web_google_disabled"),x=(0,S.B)(),v=(0,d.lO)(),{country:O}=x,A=(0,b.M)(),C=(0,P.Z)(),I=(0,T.Z)();if(!_||C)return null;let L=()=>m(!1);return(0,j.jsx)(k,{autologinDisabled:"CH"===O,checkExperiment:f,container:e,dispatch:u,googleSignInApi:A,handleEmptyCredentials:L,handleGdprRequiresAge:e=>{L(),t(e)},handleLoginWithMfa:e=>{L(),i(e)},hide:L,i18n:c,logContextEvent:l,login:a,nextUrl:r,pageContext:v,requestContext:x,trackInteraction:I,viewer:p,webGoogleDisabled:w})}},473289:(e,t,i)=>{i.d(t,{Z:()=>E});var o=i(667294),n=i(616550),s=i(883119),r=i(612435),a=i(420097),l=i(29156),c=i(549629),u=i(106110),h=i(999586),d=i(876569),g=i(273523),p=i(454514),_=i(140017),m=i(406893),b=i(857916),f=i(5859),w=i(702497),x=i(13848),v=i(624797),y=i(598228),O=i(531486),S=i(678379),A=i(785893);let T=`${y.C0}${w.Hm8}`,P=()=>g.Z+h.Z;function E({redirectToBusinessForSignup:e,isForLimitedLogin:t,attributionLabel:i}){(0,c.Q)({view_type:9});let h=(0,_.ZP)(),g=(0,n.TH)(),w=(0,v.mB)(g.search),y=(0,x.F9)(),[E,j]=(0,o.useState)({type:"login"}),[C,k]=(0,o.useState)(!1),{isMobile:I}=(0,f.B)().userAgent,L=w.next&&(0,O.Z)(w.next)?w.next:"/",D=t||"true"!==w.board_invite?"login":"boardInvite",Z=e=>{e&&y.showOneToast(({hideToast:t})=>(0,A.jsx)(p.ZP,{duration:b.Jl,onHide:t,text:e}))};(0,o.useEffect)(()=>{Z((0,b.ZP)(h,g))},[]);let M="signup"===E.type;return(0,o.useEffect)(()=>{e&&M&&(0,l.Z)(T,!1)},[e,M]),(0,A.jsx)(r.Z,{page:"login",children:(0,A.jsxs)(s.xu,{height:"100%",position:"absolute",top:!0,width:"100%",children:[(0,A.jsx)(s.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{overflowY:"hidden"}},left:!0,position:"absolute",right:!0,top:!0,children:(0,A.jsx)(S.default,{})}),(0,A.jsx)(s.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{background:"rgba(0, 0, 0, .5)"}},left:!0,position:"fixed",right:!0,top:!0}),C?(0,A.jsx)(d.Z,{}):(0,A.jsxs)(o.Fragment,{children:[(0,A.jsxs)(s.xu,{dangerouslySetInlineStyle:{__style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},position:"absolute",children:[(0,A.jsx)(m.Z,{unsafeCSS:P()}),(0,A.jsx)(u.default,{attributionLabel:i,container:"login_page",handleShowingSignupWelcomeLoading:e=>{e!==C&&k(e)},nextUrlParam:L,signupFlow:E,signupRedirectUrl:e?T:"",signupSource:D,toggleType:"SMALL_TOGGLE"})]}),!I&&(0,A.jsx)(s.xu,{"data-test-id":"login"===E.type?"simple-signup-button":"simple-login-button",left:!0,marginStart:6,marginTop:12,position:"absolute",top:!0,children:(0,A.jsx)(s.zx,{color:"white",fullWidth:!0,onClick:()=>{j("login"===E.type?{type:"signup"}:{type:"login"})},text:"login"===E.type?h.bt("Regístrate", "Sign up", "sign up for account toggle on homepage", undefined, true):h.bt("Iniciar sesión", "Log in", "Label for log in button", undefined, true)})}),(0,A.jsx)(a.Z,{container:"login_page",handleGdprRequiresAge:({options:e,context:t})=>{j({type:"socialSignupWithAge",registrationCredentials:{type:"google_one_tap",context:t,signupOptions:e}})},handleLoginWithMfa:e=>{j({type:"loginMfa",creds:{google_open_id_token:e}})},nextUrl:L})]})]})})}},175324:(e,t,i)=>{i.d(t,{Z:()=>g});var o=i(667294),n=i(883119),s=i(587703),r=i(140017),a=i(494125),l=i(785893);function c({handleSignup:e,handleLogin:t}){let i=(0,r.ZP)(),[s,c]=(0,o.useState)(!1),u=(0,o.useRef)(null);return(0,a.Z)(()=>{let t;return u.current=window.setTimeout(()=>{t=window.requestAnimationFrame(()=>{c(!0)}),e()},2e3),()=>{u.current&&window.clearTimeout(u.current),t&&window.cancelAnimationFrame(t)}}),(0,l.jsxs)(n.kC,{alignItems:"center",direction:"column",flex:"grow",justifyContent:"center",children:[(0,l.jsx)(n.xu,{children:(0,l.jsx)(n.xv,{align:"center",size:"400",weight:"bold",children:s?i.bt("Terminando...", "Finishing up...", "Title of a dialog telling the user that an account is almost done being created.", undefined, true):i.bt("Creando tu cuenta...", "Creating your account...", "Title of a dialog telling the user that an account is being created.", undefined, true)})}),(0,l.jsx)(n.xu,{paddingY:4,children:(0,l.jsx)(n.$j,{accessibilityLabel:i.bt("Se está creando una cuenta", "Account is being created", "Accessibility label for account creation loading dialog", undefined, true),show:!0})}),s?null:(0,l.jsx)(n.xu,{marginTop:2,children:(0,l.jsx)(n.xv,{align:"center",inline:!0,children:i.bt("¿No deseabas crear una nueva cuenta?", "Didn’t mean to create a new account?", "Description text telling the user that they can log in if they did not intend to create a new account", undefined, true)})}),s?null:(0,l.jsx)(n.xu,{children:(0,l.jsx)(n.xv,{align:"center",inline:!0,children:(0,l.jsx)(n.rU,{display:"inlineBlock",href:"/login",onClick:({event:e,dangerouslyDisableOnNavigation:i})=>{i(),u.current&&window.clearTimeout(u.current),e&&(e.preventDefault(),e.stopPropagation()),t()},underline:"hover",children:i.bt("Haz clic aquí para iniciar sesión.", "Click here to log in.", "Login button which will show the login modal and enable the user to log in", undefined, true)})})})]})}var u=i(120726),h=i(610954);let d=({children:e})=>(0,l.jsx)(n.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, 0.6)"}},left:!0,opacity:1,position:"fixed",right:!0,top:!0,zIndex:new n.Ry(1e3),children:(0,l.jsx)(n.xu,{color:"default",direction:"column",display:"flex",margin:6,padding:7,position:"fixed",right:!0,rounding:2,top:!0,width:376,children:e})});function g({handleCancelClick:e,handleConfirmSignup:t,handleShowLogin:i,step:g}){let p=(0,r.ZP)(),[_,m]=(0,o.useState)(!1),b=(0,s.Z)(),f={view_type:10,view_parameter:3202};(0,a.Z)(()=>(b({event_type:120,view_parameter:f.view_parameter}),document.body&&(document.body.style.overflow="hidden"),()=>{document.body&&(document.body.style.overflow="")}));let w=()=>{b({...f,event_type:101,element:30}),i()};return(0,l.jsx)(d,{children:"delayedSignupLoadingSpinner"===g?(0,l.jsx)(c,{handleLogin:w,handleSignup:()=>{b({...f,event_type:101,element:31}),t()}}):(0,l.jsxs)(n.xu,{children:[_?(0,l.jsx)(h.Z,{}):null,(0,l.jsx)(n.xu,{display:"inlineBlock",marginEnd:2,marginTop:2,position:"absolute",right:!0,top:!0,children:(0,l.jsx)(n.hU,{accessibilityLabel:p.bt("Cancelar", "Cancel", "Button to close the signup/login modal", undefined, true),icon:"cancel",iconColor:"gray",onClick:()=>{b({...f,event_type:101,element:73}),e()},size:"sm"})}),(0,l.jsx)(n.xv,{align:"start",size:"400",weight:"bold",children:p.bt("Continuar en Pinterest", "Continue to Pinterest", "Title of a dialog telling enabling the user to continue with sign up or log in", undefined, true)}),(0,l.jsx)(n.xu,{marginTop:2,children:(0,l.jsx)(n.xv,{align:"start",children:p.bt("Mmm, parece que todavía no tienes una cuenta. ¡Comencemos!", "Hmm, it looks like you don't have an account yet. Let's get started!", "Description text of a dialog asking the user to sign up for a Pinterest account", undefined, true)})}),(0,l.jsx)(n.xu,{marginTop:5,children:(0,l.jsx)(n.zx,{color:"red",fullWidth:!0,onClick:()=>{b({...f,event_type:101,element:31}),m(!0),t()},text:p.bt("Regístrate", "Sign up", "Text on a button which will create an account when clicked", undefined, true)})}),(0,l.jsx)(n.xu,{marginTop:2,children:(0,l.jsx)(n.zx,{color:"gray",fullWidth:!0,onClick:w,text:p.bt("Iniciar sesión con otro método", "Log in using a different method", "Text on a button which will take the user to login when clicked.", undefined, true)})}),"staticSignupLoginWithTOS"===g?(0,l.jsx)(n.xu,{marginEnd:4,marginStart:4,marginTop:4,children:(0,l.jsx)(u.Z,{dark:!0})}):null]})})}},307772:(e,t,i)=>{function o(e,t,i){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Z3:()=>h,LU:()=>d,ZP:()=>g});let n=window.location.search.includes("debug_impressions=1")||document.cookie&&document.cookie.indexOf("debug_impressions=1")>-1,s={paused:"Pause",resumed:"Resume",stopped:"Flush",enter:"Enter viewport",exit:"Exit viewport"},r={},a={background:"#FF8A8A",transform:"scale(.98)"},l={init:e=>({transform:`scale(${r[e]?.8:.99})`,transition:"transform .2s ease-in-out",background:"#8E8E8E"}),[s.enter]:{background:"#A0DCC8",transform:"scale(.99)"},[s.exit]:a,[s.stopped]:a,[s.paused]:a,[s.resumed]:{background:"#0FA573",transform:"scale(.99)"}};class c{constructor(e){o(this,"setMutationObserver",e=>(this.mutationObserver=e,this)),o(this,"startMutationObserver",e=>{this.mutationObserver&&this.mutationObserver.observe(this.node,e)}),o(this,"stopMutationObserver",()=>{this.mutationObserver&&this.mutationObserver.disconnect()}),o(this,"handleIntersectionChange",e=>{let t=e.intersectionRatio>0||e.isIntersecting;if(t&&!this.inViewport){let e=Date.now();this.startTime=e,this._debug(s.enter,{startTime:e,node:this.node}),this.enterCallbacks.forEach(e=>e())}else!t&&this.inViewport&&(this._debug(s.exit,!0),this.exitCallbacks.forEach(e=>e(this.toJSON())));this.inViewport=t}),this.enterCallbacks=[],this.exitCallbacks=[],this.inViewport=!1,this.node=e,this.startTime=0,this.debugId=""}onEnterViewport(e){return this.enterCallbacks.push(e),this}onExitViewport(e){return this.exitCallbacks.push(e),this}setDebugId(e){return this.debugId=e,n&&Object.assign(this.node.style,l.init(e)),this}pause(){return this.inViewport&&(this._debug(s.paused,!0),this.exitCallbacks.forEach(e=>e(this.toJSON()))),this}resume(){if(this.inViewport){let e=Date.now();this._debug(s.resumed,{startTime:e}),this.startTime=e}return this}stop(e){return this.inViewport&&(this._debug(s.stopped,!0),this.exitCallbacks.forEach(t=>t(this.toJSON(e)))),this}toJSON(e=""){return{startTime:1e6*this.startTime,endTime:1e6*Date.now(),forcedExit:e}}toDebugJSON(){return{pinID:this.debugId,startTime:this.startTime,endTime:Date.now(),duration:`${(Date.now()-this.startTime)/1e3} seconds`}}_debug(e,t){if(n)switch(window.console.log(`📌 ${e} -- ${this.debugId}`),!0===t&&window.console.log(this.toDebugJSON()),"object"==typeof t&&window.console.log(t),l[e]&&Object.assign(this.node.style,l[e]),e){case s.flushed:case s.paused:case s.exit:r[this.debugId]=!0}}}function u(e,t,i){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let h=!0,d=!1;class g{constructor(){u(this,"_delegateChange",e=>{e.forEach(e=>{let t=this.activeImpressions.get(e.target);t&&t.handleIntersectionChange(e)})}),u(this,"_handleMutations",(e,t)=>{let i=this.mutationObservers.get(t);i&&i.offsetHeight<1&&i&&this.stop(i,"removed")}),this.activeImpressions=new Map,this.mutationObservers=new Map,this.bottomHeight=0,this.bottomObstructions=new Set,this.pausePriority=d,this.observer=new window.IntersectionObserver(this._delegateChange),window.Cypress&&!window.activeImpressions&&(window.activeImpressions=new Map),this.paused=!1,this.topHeight=0,this.topObstructions=new Set,this.inExperiment=!1}setExperimentStatus(e){this.inExperiment!==e&&(this.inExperiment=e)}stop(e,t=""){let i=this.activeImpressions.get(e);i&&(i.stop(t),this.mutationObservers.delete(i.mutationObserver),i.stopMutationObserver(),this.activeImpressions.delete(e),window.activeImpressions?.delete(e),this.observer.unobserve(e))}start(e){let t=this.activeImpressions.get(e);return t||(t=new c(e),this.activeImpressions.set(e,t),window.activeImpressions?.set(e,t),this.observer.observe(e),t.setMutationObserver(new window.MutationObserver((e,t)=>this._handleMutations(e,t))),this.mutationObservers.set(t.mutationObserver,e),t.startMutationObserver({subtree:!0,attributes:!0,attributeFilter:["style"]})),t}pause(e=h){this.paused||(Array.from(this.activeImpressions.values()).forEach(e=>e.pause()),this.paused=!0,this.pausePriority!==d||(this.pausePriority=e))}resume(e=h){(e!==d||this.pausePriority!==h)&&this.paused&&(Array.from(this.activeImpressions.values()).forEach(e=>e.resume()),this.paused=!1,this.pausePriority=d)}addObstruction(e,t){"top"===e?this.topObstructions.add(t):"bottom"===e&&this.bottomObstructions.add(t),this._calculateRootMargins()}removeObstruction(e,t){"top"===e?this.topObstructions.delete(t):"bottom"===e&&this.bottomObstructions.delete(t),this._calculateRootMargins()}updateObstructions(){this._calculateRootMargins()}_calculateRootMargins(){let e=Array.from(this.topObstructions).reduce((e,t)=>{let{bottom:i}=t.getBoundingClientRect();return i>e?i:e},0),t=window.innerHeight-Array.from(this.bottomObstructions).reduce((e,t)=>{let{top:i}=t.getBoundingClientRect();return i<e?i:e},window.innerHeight);if(e!==this.topHeight||t!==this.bottomHeight){let i={rootMargin:`${-e}px 0px ${-t}px`};this.observer.disconnect(),this.observer=new window.IntersectionObserver(this._delegateChange,i),Array.from(this.activeImpressions.values()).forEach(e=>this.observer.observe(e.node)),this.topHeight=e,this.bottomHeight=t}}}},30378:(e,t,i)=>{i.d(t,{Z:()=>o});let o=new(i(307772)).ZP},317540:(e,t,i)=>{i.d(t,{Z:()=>o});let o={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},237856:(e,t,i)=>{i.d(t,{H:()=>l,M:()=>a});var o=i(658583),n=i(622541),s=i(217058);let r=()=>!!o.U2(n.x3),a=()=>{let e=o.U2(n.yu);return e?Math.floor((new Date().getTime()-new Date(e).getTime())/864e5):-1},l=()=>(o.U2(n.e7)&&(0,s.My)(`pcons.non_google_autologin_disabled_cookie.${a()}`),r()||!!o.U2(n.e7))},14583:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(667294),n=i(785893);function s({children:e,fallback:t}){return(0,n.jsx)(o.Suspense,{fallback:t||null,children:e})}},608516:(e,t,i)=>{i.d(t,{Z:()=>o});let o=i(14583).Z},552228:(e,t,i)=>{i.d(t,{C:()=>s});let o=[".at",".com.au",".ca",".ch",".cl",".de",".dk",".es",".fr",".co.uk",".ie",".it",".jp",".co.kr",".com.mx",".nz",".ph",".pt",".ru",".se"],n=new RegExp(/^(.+\.)?(pinterest|pinterdev)\.com$/),s=e=>n.test(e)||o.some(t=>e===`pinterest${t}`||e.endsWith(`.pinterest${t}`))},531486:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(552228);let n=e=>{if(e.startsWith("//"))return!1;if(e.startsWith("/"))return!0;if(e.startsWith("http://")||e.startsWith("https://"))try{let t=new URL(e);if(t.username)return!1;return(0,o.C)(t.host)}catch(e){}return!1}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/92493.es_419-ebfce4d02cb02947.mjs.map