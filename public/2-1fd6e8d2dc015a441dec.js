(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,a){"use strict";t.a={theme:{main:"#F16664",secondary:"#FFF6E6",lightaccent:"#9CD6D2",accent:"#6BB7B9",darkaccent:"#007D8C",lightmain:"#F48583"},font:{dark:"#484848",light:"#767676"},border:{dark:"#484848",light:"#767676",lighter:"rgba(0,0,0,0.2)"}}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return f});var i=a(0),n=a.n(i),r=a(4),o=a.n(r),l=a(143),d=a.n(l);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(148),c=a.n(s);a.d(t,"PageRenderer",function(){return c.a});var p=a(32);a.d(t,"parsePath",function(){return p.a});var u=n.a.createContext({}),f=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return s});var i=a(0),n=a.n(i),r=a(142),o=(a(144),r.a.div.withConfig({displayName:"section__StyledSection",componentId:"sc-18ueukn-0"})(["margin:32px 0 0 0;border-radius:3px;overflow:hidden;"," @media (max-width:768px){margin-left:12px;margin-right:12px;}"],function(e){var t=e.color;return"#fff"!==t&&"\n    background-color: rgba(0,0,0,0.08);\n    // border-bottom: 2px solid "+t+";\n    // border-left: 2px solid "+t+";\n    // border-right: 2px solid "+t+";\n  "})),l=function(e){var t=e.children,a=e.color||"#fff";return n.a.createElement(o,{color:a},t)},d=r.a.div.withConfig({displayName:"section__StyledFullSection",componentId:"sc-18ueukn-1"})(["margin:32px -24px 0 -24px;padding:0 24px;border-radius:3px;overflow:hidden;"," @media (max-width:768px){margin-left:-12px;margin-right:-12px;}@media (min-width:1540px){margin-left:0px;margin-right:0px;}"],function(e){var t=e.color;return"#fff"!==t&&"\n    // background-color: rgba(0,0,0,0.08);\n    background-color: "+t+";\n    // color: white !important;\n    h2{color: white !important;}\n    span{color: white !important;}\n    p{color: white !important;}\n    *{color: white !important;}\n    // border-bottom: 2px solid "+t+";\n    // border-left: 2px solid "+t+";\n    // border-right: 2px solid "+t+";\n  "}),s=function(e){var t=e.children,a=e.color||"#fff";return n.a.createElement(d,{color:a},t)}},148:function(e,t,a){var i;e.exports=(i=a(153))&&i.default||i},150:function(e,t,a){"use strict";var i=a(159),n=a(0),r=a.n(n),o=a(4),l=a.n(o),d=a(164),s=a.n(d),c=a(145);function p(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,l=e.title;return r.a.createElement(c.StaticQuery,{query:u,render:function(e){var i=t||e.site.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:l},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:i})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p;var u="1025518380"},151:function(e,t,a){"use strict";var i=a(152),n=a(0),r=a.n(n),o=a(142),l=a(4),d=a.n(l),s=a(145),c=a(7),p=a.n(c),u=a(51),f=a.n(u),m=a(147),h=a(149),g=a(144),y=a(196),x=o.a.div.withConfig({displayName:"header__StyledNavbar",componentId:"zi46uq-0"})(["margin:0px auto;width:100%;padding:18px 24px 18px 24px;position:fixed;display:flex;top:0;background-color:white;align-items:center;z-index:2;a{color:"," !important;}.navbar-brand{font-size:18px !important;font-weight:700;}.navbar-toggler{border-color:white !important;path{fill:",";}}@media (max-width:885px){.navbar-collapse{display:none;}}"],g.a.font.dark,g.a.font.dark),w=o.a.div.withConfig({displayName:"header__FlexGrow",componentId:"zi46uq-1"})(["flex:1;"]),b=o.a.div.withConfig({displayName:"header__NavItem",componentId:"zi46uq-2"})(["margin:auto 10px;a{color:"," !important;font-size:14px !important;font-weight:500;}@media (max-width:885px){display:none;}"],g.a.font.dark),v=o.a.div.withConfig({displayName:"header__Dropdown",componentId:"zi46uq-3"})(["display:none;position:absolute;top:75px;left:0;width:100%;background-color:white;padding:0 20px 12px 20px;z-index:2;@media (max-width:885px){display:",";flex-direction:column;}"],function(e){return e.isOpen?"flex":"none"}),E=o.a.div.withConfig({displayName:"header__DDNavItem",componentId:"zi46uq-4"})(["margin:5px 30px;border-bottom:2px solid ",";"],g.a.border.lighter),S=o.a.div.withConfig({displayName:"header__StyledNavbarToggler",componentId:"zi46uq-5"})(["display:none;margin:0 30px;height:42px;@media (max-width:885px){display:flex !important;align-items:center;}"]),k=o.a.div.withConfig({displayName:"header__StyledNav",componentId:"zi46uq-6"})(["display:flex;"]),I=o.a.div.withConfig({displayName:"header__ActionButton",componentId:"zi46uq-7"})(["background-color:",";border-radius:3px;transition:all 0.2s;padding:8px 15px;margin:0 5px;border-radius:3px;display:flex;align-items:center;a{color:white !important;font-size:14px !important;font-weight:500;transition:color 0.2s;&:hover{text-decoration:none;}}&:hover{box-shadow:0 3px 10px rgba(0,0,0,0.1);}@media (max-width:885px){display:visible;}@media (max-width:630px){display:none;}"],g.a.theme.main),_=Object(o.a)(I).withConfig({displayName:"header__ActionButtonOutline",componentId:"zi46uq-8"})(["border:2px solid ",";background-color:white;a{color:"," !important;transition:color 0.2s;}"],g.a.theme.accent,g.a.font.dark),C=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(f()(f()(a))),a.state={isOpen:!1},a}p()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var e=this.props.siteTitle;return console.log(this.state.isOpen),r.a.createElement(n.Fragment,null,r.a.createElement(x,{color:"#fff",light:!0,expand:"md"},r.a.createElement(y.a,{href:"/"},e),r.a.createElement(w,null),r.a.createElement(S,{onClick:this.toggle},r.a.createElement(m.a,{icon:h.a})),r.a.createElement(v,{isOpen:this.state.isOpen},r.a.createElement(E,null,r.a.createElement(s.Link,{to:"/listings/"},"Our Listings")),r.a.createElement(E,null,r.a.createElement(s.Link,{to:"/contact/"},"Contact Us")),r.a.createElement(E,null,r.a.createElement(s.Link,{to:"/faq/"},"FAQ")),r.a.createElement(E,null,r.a.createElement(s.Link,{to:"/inquiry/"},"Work With Us")),r.a.createElement(E,null,r.a.createElement(s.Link,{to:"/inquiry/"},"Refer & Earn"))),r.a.createElement(k,{navbar:!0},r.a.createElement(b,null,r.a.createElement(s.Link,{to:"/listings/"},"Our Listings")),r.a.createElement(b,null,r.a.createElement(s.Link,{to:"/contact/"},"Contact Us")),r.a.createElement(b,null,r.a.createElement(s.Link,{to:"/faq"},"FAQ")),r.a.createElement(I,null,r.a.createElement(s.Link,{to:"/inquiry"},"Work With Us")),r.a.createElement(_,null,r.a.createElement(s.Link,{to:"/inquiry"},"Refer & Earn")))))},t}(n.Component);C.propTypes={siteTitle:d.a.string},C.defaultProps={siteTitle:""};var q=C,N=o.a.div.withConfig({displayName:"footer__StyledFooter",componentId:"sc-1o5r1n6-0"})(["margin:55px auto;padding:55px 24px !important;border-top:1px solid ",";max-width:1540px;"],g.a.border.light),L=function(e){var t=e.company;return r.a.createElement(N,null,"© ",t)};L.propTypes={company:d.a.string.isRequired};var R=L,T=(a(158),a(163),o.a.div.withConfig({displayName:"layout__Body",componentId:"sc-13x6kjw-0"})(["padding:0 24px;max-width:1540px;margin:auto;margin-top:100px;display:flex;flex-direction:column;@media (max-width:767px){padding:0 12px;}"])),z=function(e){var t=e.children;return r.a.createElement(s.StaticQuery,{query:"3926456875",render:function(e){var a=e.site;return r.a.createElement(n.Fragment,null,r.a.createElement(q,{siteTitle:a.siteMetadata.title}),r.a.createElement(T,null,t),r.a.createElement(R,{company:a.siteMetadata.officialTitle}))},data:i})};z.propTypes={children:d.a.node.isRequired};t.a=z},152:function(e){e.exports={data:{site:{siteMetadata:{title:"BV Real Estate Partners",officialTitle:"BV Real Estate Partners, Inc."}}}}},153:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),l=a(52),d=a(2),s=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){},159:function(e){e.exports={data:{site:{siteMetadata:{title:"BV Real Estate Partners",description:"A website to showcase BV Real Estate Partners",author:"Alex Kim <agk2144@columbia.edu>"}}}}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});a(0);var i=a(142),n=i.a.div.withConfig({displayName:"spaced-hr__SpacedHr",componentId:"sc-18jk6jo-0"})(["margin:1.5em 0;"]),r=i.a.div.withConfig({displayName:"spaced-hr__HalfSpacedHr",componentId:"sc-18jk6jo-1"})(["margin:1em 0;"])},161:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),o=i(a(51)),l=i(a(166)),d=i(a(167)),s=i(a(0)),c=i(a(4)),p=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=p(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},m=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+l+d+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=s.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,l.default)(e,["style","onLoad","onError"]);return s.default.createElement("img",(0,d.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:d,seenBefore:l},a.imageRef=s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=p(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=p(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,m=e.fluid,h=e.fixed,x=e.backgroundColor,w=e.Tag,b="boolean"==typeof x?"lightgray":x,v=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,u),E=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),S={title:t,alt:this.state.isVisible?"":a,style:v,className:f};if(m){var k=m;return s.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},s.default.createElement(w,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&s.default.createElement(y,(0,d.default)({src:k.base64},S)),k.tracedSVG&&s.default.createElement(y,(0,d.default)({src:k.tracedSVG},S)),b&&s.default.createElement(w,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&s.default.createElement("picture",null,k.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),s.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),s.default.createElement(y,{alt:a,title:t,src:k.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,d.default)({alt:a,title:t},k))}}))}if(h){var I=h,_=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},r);return"inherit"===r.display&&delete _.display,s.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&s.default.createElement(y,(0,d.default)({src:I.base64},S)),I.tracedSVG&&s.default.createElement(y,(0,d.default)({src:I.tracedSVG},S)),b&&s.default.createElement(w,{title:t,style:{backgroundColor:b,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&s.default.createElement("picture",null,I.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),s.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),s.default.createElement(y,{alt:a,title:t,width:I.width,height:I.height,src:I.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,d.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(s.default.Component);x.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),b=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});x.propTypes={resolutions:w,sizes:b,fixed:w,fluid:b,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var v=x;t.default=v},169:function(e,t,a){"use strict";var i=a(7),n=a.n(i),r=a(0),o=a.n(r),l=a(161),d=a.n(l),s=a(142),c=a(4),p=a.n(c),u=a(146),f=Object(s.a)(d.a).withConfig({displayName:"full-width-section__StyledImg",componentId:"u85y5u-0"})(["overflow:hidden;border-radius:3px;position:absolute;top:0;left:0;width:100%;z-index:-1;height:350px;& > img{object-fit:cover !important;object-position:0% 0% !important;font-family:'object-fit: cover !important; object-position: 0% 0% !important;'}"]),m=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.fluidImage;return o.a.createElement(u.b,null,o.a.createElement(f,{fluid:e}))},t}(r.Component);m.propTypes={fluidImage:p.a.object.isRequired,overlayText:p.a.string},m.defaultProps={overlayText:""},t.a=m},170:function(e,t,a){"use strict";var i=a(7),n=a.n(i),r=a(0),o=a.n(r),l=a(142),d=a(4),s=a.n(d),c=a(146),p=a(160),u=a(144),f=l.a.div.withConfig({displayName:"text-section__TextWrapper",componentId:"n8eq90-0"})(["padding:0 24px 22px 24px;p{color:",";}"],u.a.font.dark),m=l.a.div.withConfig({displayName:"text-section__Head",componentId:"n8eq90-1"})(["padding:24px 24px 0px 24px;h2{margin:0;color:",";}",""],function(e){return e.color},function(e){return"#fff"!==e.color&&"\n    * {color: #fff}\n  "}),h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.header,a=e.children,i=e.color;return o.a.createElement(c.a,{color:i},o.a.createElement(m,{color:i},o.a.createElement("h2",null,t)),o.a.createElement(f,null,o.a.createElement(p.a,null),a))},t}(r.Component);h.propTypes={header:s.a.string.isRequired,color:s.a.string},h.defaultProps={header:"",color:"#fff"},t.a=h},171:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(142).a.div.withConfig({displayName:"grid__StyledGrid",componentId:"sc-11sm5l4-0"})(["margin:18px 0;border-radius:3px;overflow:hidden;z-index:-1;display:flex;justify-content:space-around;flex-wrap:wrap;@media (max-width:768px){margin-left:12px;margin-right:12px;margin-top:12px;flex-wrap:wrap;}"]);t.a=function(e){var t=e.children.length;return n.a.createElement(r,{numChild:t},e.children)}},172:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(142).a.div.withConfig({displayName:"circle-grid__StyledGrid",componentId:"sc-1aq3fik-0"})(["margin:18px 0;border-radius:3px;overflow:hidden;z-index:-1;display:flex;justify-content:space-around;flex-wrap:wrap;@media (max-width:768px){margin-left:12px;margin-right:12px;margin-top:12px;flex-wrap:wrap;}"]);t.a=function(e){var t=e.children.length;return n.a.createElement(r,{numChild:t},e.children)}},173:function(e,t,a){"use strict";var i=a(7),n=a.n(i),r=a(0),o=a.n(r),l=a(142),d=a(4),s=a.n(d),c=(a(146),a(144),l.a.div.withConfig({displayName:"circle-grid-section__GridItem",componentId:"cpmk9-0"})(["text-align:center;padding:10px 0px;margin:18px auto;text-align:center;.grid-title{font-weight:700;}p{font-size:15px;text-align:center;margin:0 10px;}width:19.5%;@media (max-width:768px){width:32.5%;}@media (max-width:545px){width:49.5%;}"])),p=l.a.div.withConfig({displayName:"circle-grid-section__Body",componentId:"cpmk9-1"})(["margin:12px auto;max-width:230px;"]),u=l.a.div.withConfig({displayName:"circle-grid-section__StyledIcon",componentId:"cpmk9-2"})(["border-radius:100%;background-color:white;width:90px;height:90px;display:flex;justify-content:center;margin:0 auto;align-items:center;path{fill:",";}"],function(e){return e.color}),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.icon,a=e.underTitle,i=e.underText,n=e.color;return o.a.createElement(c,null,o.a.createElement(u,{color:n},t),o.a.createElement(p,null,o.a.createElement("span",{className:"grid-title"},a),o.a.createElement("p",null,i)))},t}(r.Component);f.propTypes={icon:s.a.node.isRequired,underTitle:s.a.string,underText:s.a.string,color:s.a.string},f.defaultProps={underTitle:"",underText:"",color:"#fff"},t.a=f},174:function(e,t,a){"use strict";a(0);var i=a(142);a(147),a(149),a(144),i.a.ul.withConfig({displayName:"list__StyledUList",componentId:"fptqn2-0"})(["margin-bottom:0;margin-left:-14px;list-style-type:none;li{font-size:16px;line-height:2em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}svg{margin-right:1em;path{fill:#3fc380;}}"])},175:function(e,t,a){"use strict";var i=a(7),n=a.n(i),r=a(0),o=a.n(r),l=a(161),d=a.n(l),s=a(142),c=a(4),p=a.n(c),u=a(144),f=a(147),m=a(165),h=s.a.div.withConfig({displayName:"bio__BiosWrapper",componentId:"t0dko6-0"})(["margin:18px 0;border-radius:3px;overflow:hidden;display:flex;justify-content:space-evenly;flex-wrap:wrap;@media (max-width:768px){margin-left:12px;margin-right:12px;margin-top:12px;flex-wrap:wrap;}"]),g=s.a.div.withConfig({displayName:"bio__BioWrapper",componentId:"t0dko6-1"})(["margin:24px 0 0 0;background-color:white;width:32.5%;max-width:260px;position:relative;.content{position:absolute;background-color:",";height:100%;padding:1.2em;overflow:hidden;border-radius:3px;top:0;left:0;opacity:0;transition:all 0.5s;display:flex;flex-direction:column;text-align:center;*{color:white;}h3{margin:40px 0 10px 0;}small{font-style:italic;margin-bottom:5px;}p{font-size:15px;line-height:1.55em;text-align:left;}}&:hover{.content{opacity:1;}}@media (max-width:768px){width:49%;}@media (max-width:545px){width:100%;}"],u.a.theme.main),y=Object(s.a)(d.a).withConfig({displayName:"bio__StyledImg",componentId:"t0dko6-2"})(["overflow:hidden;border-radius:3px;position:absolute;top:0;left:0;width:100%;height:350px;& > img{object-fit:cover !important;object-position:0% 0% !important;font-family:'object-fit: cover !important; object-position: 0% 0% !important;'}"]),x=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.fluidPortraits,a=e.teamInfo;return o.a.createElement(h,null,t&&a&&t.map(function(e,t){console.log(a[t]);var i=a[t],n=i.fname,r=(i.mname,i.lname,i.position),l=i.biography,d=i.linkedin;return o.a.createElement(g,{key:t},o.a.createElement(y,{fluid:e}),o.a.createElement("div",{className:"content"},o.a.createElement("h3",null,n),o.a.createElement("small",null,r,"   ",d&&o.a.createElement("a",{href:d,target:"_blank"},o.a.createElement(f.a,{icon:m.b,size:"lg"}))),o.a.createElement("p",null,l)))}))},t}(r.Component);x.propTypes={fluidPortraits:p.a.array.isRequired,teamInfo:p.a.array.isRequired},t.a=x}}]);
//# sourceMappingURL=2-1fd6e8d2dc015a441dec.js.map