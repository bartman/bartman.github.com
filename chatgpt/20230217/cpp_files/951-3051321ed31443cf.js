"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{68619:function(e,t,n){var r,i,o,a,s,u,c,l,d,f;n.d(t,{Jq:function(){return s},Os:function(){return o},uU:function(){return a}}),(u=r||(r={})).Default="default",u.Dark="dark",(c=i||(i={})).Retrieval="retrieval",(l=o||(o={})).Next="next",l.Variant="variant",l.Continue="continue",(d=a||(a={})).Unknown="unknown",d.User="user",d.Assistant="assistant",d.System="system",d.Critic="critic",d.Tool="tool",(f=s||(s={})).Root="root",f.System="system",f.Prompt="prompt",f.Completion="completion"},23119:function(e,t,n){n.d(t,{Y:function(){return b},k:function(){return v}});var r=n(14806),i=n(35250),o=n(19841),a=n(96424),s=n.n(a),u=n(48240),c=n(34303),l=n(79876);function d(){var e=(0,r.Z)(["relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"]);return d=function(){return e},e}function f(){var e=(0,r.Z)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ","\n  ","\n"]);return f=function(){return e},e}function h(){var e=(0,r.Z)(["bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest"]);return h=function(){return e},e}function m(){var e=(0,r.Z)(["relative flex"]);return m=function(){return e},e}var p=c.Z.div(d()),g=c.Z.span(f(),function(e){return"warning"===e.$type&&"bg-orange-500 text-white"},function(e){return"danger"===e.$type&&"bg-red-500 text-white"}),v=function(e){var t=e.iconName,n=e.background,r=e.notice,o=l.nI;switch(t){case"globe":o=u.RsK;break;case"terminal":o=u.cDN;break;case"t":o=u.RUS;break;case"s":o=u.jRj;break;case"c":o=u.CFv}return(0,i.jsxs)(p,{style:{backgroundColor:n},children:[(0,i.jsx)(l.ZP,{icon:o,size:"medium"}),r&&(0,i.jsx)(g,{$type:r,children:"!"})]})},x=c.Z.div(h()),y=c.Z.div(m()),b=function(e){var t=e.user,n=e.size,r=void 0===n?"small":n,a=e.notice,c=a&&(0,i.jsx)(g,{$type:a,children:"!"});if(null==t?void 0:t.picture)return(0,i.jsxs)(y,{children:[(0,i.jsx)(s(),{src:t.picture,alt:t.name,width:"small"===r?30:38,height:"small"===r?30:38,className:"rounded-sm"}),c]});var d=((null==t?void 0:t.name)||"").split(" ").map(function(e){return e[0]}).join("");return(0,i.jsxs)(x,{className:(0,o.Z)("small"===r?"h-8 w-8 text-xs":"h-10 w-10 text-lg"),children:[d||(0,i.jsx)(l.ZP,{icon:u.fzv,size:"medium"}),c]})}},35873:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(14806),i=n(35250),o=n(70079),a=n(48240),s=n(34303),u=n(60612),c=n(79876);function l(){var e=(0,r.Z)(["flex ml-auto gap-2"]);return l=function(){return e},e}function d(e){var t=e.text,n=e.onCopy,r=(0,o.useState)(!1),s=r[0],l=r[1],d=(0,u.Z)(),h=(0,o.useCallback)(function(){n(),l(!0),setTimeout(function(){d()&&l(!1)},2e3)},[d,n]);return(0,i.jsxs)(i.Fragment,{children:[!s&&(0,i.jsxs)(f,{onClick:h,children:[(0,i.jsx)(c.ZP,{icon:a.j4u}),t]}),s&&(0,i.jsxs)(f,{children:[(0,i.jsx)(c.ZP,{icon:a.UgA}),t&&"Copied!"]})]})}var f=s.Z.button(l())},77064:function(e,t,n){n.d(t,{$:function(){return m},u:function(){return h}});var r=n(31501),i=n(61079),o=n(14806),a=n(35250),s=n(19841),u=n(70079),c=n(65921),l=n(34303);function d(){var e=(0,o.Z)(['\nbefore:absolute before:w-2 before:h-2 before:visible before:content-[""] before:bg-gray-100 before:border-b before:border-r before:border-black/10\n',"\n","\n"]);return d=function(){return e},e}function f(){var e=(0,o.Z)(["absolute w-2 h-2 -z-10"]);return f=function(){return e},e}function h(e){var t=e.text,n=e.children;return(0,a.jsx)("div",{className:"tooltip-label flex items-center whitespace-pre-wrap py-1 px-2 text-center text-sm font-medium normal-case text-gray-700","data-content":t,children:n})}var m=function(e){var t=e.children,n=e.label,o=e.enterDelay,l=void 0===o?0:o,d=e.leaveDelay,f=void 0===d?50:d,h=e.placement,m=void 0===h?"bottom":h,p=e.offset,v=e.withArrow,x=e.interactive,y=void 0!==x&&x,b=e.wide,Z=(0,u.useState)(!1),w=Z[0],k=Z[1],q=(0,u.useState)(null),F=q[0],j=q[1],C=(0,u.useState)(null),S=C[0],T=C[1],N=(0,u.useState)(null),I=N[0],P=N[1],M=(0,c.D)(F,S,{placement:m,modifiers:[{name:"offset",options:{offset:void 0===p?[0,14]:p}},{name:"arrow",options:{element:I}},]}),E=M.styles,V=M.attributes,_=M.forceUpdate,U=(0,u.useRef)(),z=(0,u.useRef)(),R=(0,u.useCallback)(function(){null==_||_(),z.current&&clearTimeout(z.current),U.current=setTimeout(function(){return k(!0)},l)},[l,_]),J=(0,u.useCallback)(function(){U.current&&clearTimeout(U.current),z.current=setTimeout(function(){return k(!1)},f)},[f]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{ref:j,onMouseEnter:R,onMouseLeave:J,children:t}),(0,a.jsxs)("div",(0,i.Z)((0,r.Z)({ref:T,style:E.popper},V.popper),{className:(0,s.Z)("relative z-10 m-0 rounded p-1 transition-opacity",w?"opacity-100":"pointer-events-none opacity-0",void 0!==b&&b?"max-w-sm":"max-w-xs","border border-black/10 bg-gray-100"),onMouseEnter:y?R:void 0,onMouseLeave:y?J:void 0,children:[n,(void 0===v||v)&&(0,a.jsx)(g,{ref:P,style:E.arrow,$placement:m})]}))]})},p=l.Z.div(d(),function(e){return"bottom"===e.$placement&&"before:rotate-45 before:-top-7 before:-translate-y-1/2 before:-translate-x-1/2"},function(e){return"top"===e.$placement&&"before:top-0 before:rotate-45"}),g=(0,l.Z)(p)(f())},75310:function(e,t,n){n.d(t,{Z:function(){return K}});var r=n(35250),i=n(19841),o=n(15762),a=n(24804),s=n(61110),u=n(55975),c=n(46050),l=n(29874),d=n(8449),f=n(15472);function h(e,t,n){}function m(e,t){}let p={tokenize:function(e,t,n){let r=this,i=this.events[this.events.length-1],o=i&&i[1].type===f.V.linePrefix?i[2].sliceSerialize(i[1],!0).length:0,a=[];return function(t){return t!==u.q.backslash&&h("expected `\\`",t),e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(r){return(h("sequenceOpen",r),r===u.q.backslash||r===u.q.leftSquareBracket&&a[0]===u.q.backslash)?(e.consume(r),a.push(r),t):(e.exit("mathFlowFenceSequence"),a.length<2?n(r):(0,c.f)(e,s,f.V.whitespace)(r))}(t)};function s(t){return(h("metaOpen",t),t===u.q.eof||(0,l.Ch)(t))?m(t):(e.enter("mathFlowFenceMeta"),e.enter(f.V.chunkString,{contentType:d._.contentTypeString}),function t(r){return(h("meta",r),r===u.q.eof||(0,l.Ch)(r))?(e.exit(f.V.chunkString),e.exit("mathFlowFenceMeta"),m(r)):r===u.q.rightSquareBracket?n(r):(e.consume(r),t)}(t))}function m(n){return h("openAfter",n),e.exit("mathFlowFence"),r.interrupt?t(n):function t(n){return(h("contentStart",n),n===u.q.eof)?p(n):(0,l.Ch)(n)?e.attempt(g,e.attempt({tokenize:v,partial:!0},p,o?(0,c.f)(e,t,f.V.linePrefix,o+1):t),p)(n):(e.enter("mathFlowValue"),function n(r){return(h("contentContinue",r),r===u.q.eof||(0,l.Ch)(r))?(e.exit("mathFlowValue"),t(r)):(e.consume(r),n)}(n))}(n)}function p(n){return h("after",n),e.exit("mathFlow"),t(n)}function v(e,t,n){let r=[];return(0,c.f)(e,function(t){return h("closingPrefixAfter",t),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(o){return(h("closingSequence",o),o===u.q.backslash&&0===r.length||o===u.q.rightSquareBracket&&r[0]===u.q.backslash)?(e.consume(o),r.push(o),t):r<a?n(o):(e.exit("mathFlowFenceSequence"),(0,c.f)(e,i,f.V.whitespace)(o))}(t)},f.V.linePrefix,d._.tabSize);function i(r){return(h("closingSequenceEnd",r),r===u.q.eof||(0,l.Ch)(r))?(e.exit("mathFlowFence"),t(r)):n(r)}}},concrete:!0},g={tokenize:function(e,t,n){let r=this;return function(t){return e.enter(f.V.lineEnding),e.consume(t),e.exit(f.V.lineEnding),i};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},v={tokenize:function(e,t,n){let r=this,i=r.events[r.events.length-1],o=i&&i[1].type===f.V.linePrefix?i[2].sliceSerialize(i[1],!0).length:0,a=0;return function(t){return t!==u.q.dollarSign&&h("expected `$`",t),e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(r){return(h("sequenceOpen",r),r===u.q.dollarSign)?(e.consume(r),a++,t):(e.exit("mathFlowFenceSequence"),a<2?n(r):(0,c.f)(e,s,f.V.whitespace)(r))}(t)};function s(t){return(h("metaOpen",t),t===u.q.eof||(0,l.Ch)(t))?m(t):(e.enter("mathFlowFenceMeta"),e.enter(f.V.chunkString,{contentType:d._.contentTypeString}),function t(r){return(h("meta",r),r===u.q.eof||(0,l.Ch)(r))?(e.exit(f.V.chunkString),e.exit("mathFlowFenceMeta"),m(r)):r===u.q.dollarSign?n(r):(e.consume(r),t)}(t))}function m(n){return h("openAfter",n),e.exit("mathFlowFence"),r.interrupt?t(n):function t(n){return(h("contentStart",n),n===u.q.eof)?p(n):(0,l.Ch)(n)?e.attempt(x,e.attempt({tokenize:g,partial:!0},p,o?(0,c.f)(e,t,f.V.linePrefix,o+1):t),p)(n):(e.enter("mathFlowValue"),function n(r){return(h("contentContinue",r),r===u.q.eof||(0,l.Ch)(r))?(e.exit("mathFlowValue"),t(r)):(e.consume(r),n)}(n))}(n)}function p(n){return h("after",n),e.exit("mathFlow"),t(n)}function g(e,t,n){let r=0;return(0,c.f)(e,function(t){return h("closingPrefixAfter",t),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(o){return(h("closingSequence",o),o===u.q.dollarSign)?(e.consume(o),r++,t):r<a?n(o):(e.exit("mathFlowFenceSequence"),(0,c.f)(e,i,f.V.whitespace)(o))}(t)},f.V.linePrefix,d._.tabSize);function i(r){return(h("closingSequenceEnd",r),r===u.q.eof||(0,l.Ch)(r))?(e.exit("mathFlowFence"),t(r)):n(r)}}},concrete:!0},x={tokenize:function(e,t,n){let r=this;return function(t){return(0,l.Ch)(t)&&h("expected eol",t),e.enter(f.V.lineEnding),e.consume(t),e.exit(f.V.lineEnding),i};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0};function y(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===f.V.lineEnding||"space"===e[n][1].type)&&(e[t][1].type===f.V.lineEnding||"space"===e[t][1].type)){for(r=n;++r<t;)if("mathTextData"===e[r][1].type){e[t][1].type="mathTextPadding",e[n][1].type="mathTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)void 0===i?r!==t&&e[r][1].type!==f.V.lineEnding&&(i=r):(r===t||e[r][1].type===f.V.lineEnding)&&(e[i][1].type="mathTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function b(e){return e!==u.q.backslash||this.events[this.events.length-1][1].type===f.V.characterEscape}var Z=n(93362),w=n(45369),k=n(42426),q=n(65028),F=n(31501),j=n(61079),C=n(89874),S=n(88366),T=n(99847),N=n(14806),I=n(70079),P=n(34303),M=n(35873);function E(){var e=(0,N.Z)(["bg-black mb-4 rounded-md"]);return E=function(){return e},e}function V(){var e=(0,N.Z)(["flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"]);return V=function(){return e},e}function _(){var e=(0,N.Z)([""]);return _=function(){return e},e}function U(){var e=(0,N.Z)(["p-4 overflow-y-auto"]);return U=function(){return e},e}function z(){var e=(0,N.Z)(["!whitespace-pre"]);return z=function(){return e},e}var R=P.Z.div(E()),J=P.Z.div(V()),$=P.Z.span(_()),D=P.Z.div(U()),A=P.Z.code(z());function B(e){var t=e.children,n=e.className,i=e.language,o=e.content,a=(0,I.useCallback)(function(){navigator.clipboard.writeText(o)},[o]);return(0,r.jsxs)(R,{children:[(0,r.jsxs)(J,{children:[i&&(0,r.jsx)($,{children:i}),(0,r.jsx)(M.Z,{text:"Copy code",onCopy:a})]}),(0,r.jsx)(D,{children:(0,r.jsx)(A,{className:n,children:t})})]})}var O=[q.Z,[function(){let e=this.data();function t(t,n){let r=e[t]?e[t]:e[t]=[];r.push(n)}t("micromarkExtensions",{flow:{[u.q.dollarSign]:v,[u.q.backslash]:p},text:{[u.q.backslash]:{tokenize:function(e,t,n){let r=[],i=[],o,a=this;return function(t){return h("start",t),t!==u.q.backslash&&m("expected `\\`",t),b.call(a,a.previous)&&m("expected correct previous",a.previous),e.enter("mathText"),e.enter("mathTextSequence"),function t(i){return(h("openingSequence",i,r.join(",")),i===u.q.backslash&&0===r.length||i===u.q.leftParenthesis&&1===r.length)?(e.consume(i),r.push(i),t):r.length<2?n(i):(e.exit("mathTextSequence"),s(i))}(t)};function s(a){return(h("gap",a),a===u.q.eof)?n(a):a===u.q.backslash?(o=e.enter("mathTextSequence"),i=[],function n(a){return(h("closingSequence",a,r.join(",")),a===u.q.backslash&&0===i.length||a===u.q.rightParenthesis&&1===i.length)?(e.consume(a),i.push(a),n):i.length===r.length?(e.exit("mathTextSequence"),e.exit("mathText"),t(a)):(o.type="mathTextData",c(a))}(a)):a===u.q.space?(e.enter("space"),e.consume(a),e.exit("space"),s):(0,l.Ch)(a)?(e.enter(f.V.lineEnding),e.consume(a),e.exit(f.V.lineEnding),s):(e.enter("mathTextData"),c(a))}function c(t){return(h("data",t),t===u.q.eof||t===u.q.space||t===u.q.backslash||(0,l.Ch)(t))?(e.exit("mathTextData"),s(t)):(e.consume(t),c)}},resolve:y,previous:b}}}),t("fromMarkdownExtensions",(0,s.N)()),t("toMarkdownExtensions",(0,s.O)())},{singleDollarTextMath:!1}],],L=[[Z.Z,{detect:!0,subset:["python","javascript","java","go","bash","c","cpp","csharp","css","diff","graphql","json","kotlin","less","lua","makefile","markdown","objectivec","perl","php","php-template","plaintext","python-repl","r","ruby","rust","scss","shell","sql","swift","typescript","vbnet","wasm","xml","yaml",],ignoreMissing:!0},],w.Z,[k.Z,{newlines:!0}],],W={code:function(e){var t=e.inline,n=e.node,i=e.className,o=e.children,a=(0,C.Z)(e,["inline","node","className","children"]);if(t){var s=(0,S.B)(n),u=(0,T.T$)(s);return u?(0,r.jsx)(T.s8,{displayInfo:u}):(0,r.jsx)("code",(0,j.Z)((0,F.Z)({className:i},a),{children:o}))}var c,l=null===(c=null==i?void 0:i.split(" ").filter(function(e){return e.startsWith("language-")}))||void 0===c?void 0:c[0],d=l?l.split("-")[1]:"";return(0,r.jsx)(B,{language:d,className:i,content:(0,S.B)(n),children:o})}};function K(e){var t=e.size,n=e.children,s=e.className,u=(0,o.F)().theme;return(0,r.jsx)(a.D,{components:W,rehypePlugins:L,remarkPlugins:O,linkTarget:"_new",className:(0,i.Z)(s,"markdown prose w-full break-words dark:prose-invert","dark"===u?"dark":"light","small"===(void 0===t?"medium":t)&&"prose-xs"),children:n})}},38886:function(e,t,n){n.d(t,{C:function(){return q},Z:function(){return k}});var r=n(31501),i=n(89874),o=n(14806),a=n(35250),s=n(19841),u=n(70079),c=n(34303),l=n(36613),d=n(99847),f=n(80836),h=n(2827),m=n(12762),p=n(98943),g=n(68619),v=n(39690);function x(){var e=(0,o.Z)(["text-center mt-2 flex justify-center"]);return x=function(){return e},e}var y=c.Z.div(x());function b(e){var t=e.initialText,n=e.role,r=e.parentId,i=e.threadId,o=e.currentLeaf,s=e.onCreateNewNode,c=e.onUpdateNode,l=e.onChangeItemInView,d=e.onExitEdit,f=e.onDeleteNode,x=e.onRequestCompletion,b=e.disabled,Z=(0,m.WS)(),w=(0,u.useId)(),k="".concat(o,"-").concat(w),q=(0,u.useState)(t||""),F=q[0],j=q[1],C=(0,u.useRef)(null),S=n!==g.uU.User;(0,u.useEffect)(function(){s(k,r,S?g.Jq.Completion:g.Jq.Prompt,"")},[]);var T=(0,u.useCallback)(function(e){j(e.currentTarget.value)},[]),N=(0,u.useCallback)(function(){c(k,F),l(k),S||x(g.Os.Next,k,{eventSource:"mouse"},!0),d()},[k,S,l,d,x,c,F,]),I=(0,u.useCallback)(function(){f(k),l(o),d(),Z(n===g.uU.User?p.s6.cancelEditPrompt:p.s6.cancelEditCompletion,{threadId:i})},[k,o,Z,l,f,d,n,i,]);return(0,u.useEffect)(function(){var e=C.current,t=function(e){"Enter"===e.key&&e.metaKey?N():"Escape"===e.key&&I()};return e&&e.addEventListener("keydown",t),function(){e&&e.removeEventListener("keydown",t)}},[I,N]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.ZP,{ref:C,value:F,onChange:T,className:"m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"}),(0,a.jsxs)(y,{children:[(0,a.jsx)(v.z,{as:"button",onClick:N,className:"mr-2",disabled:b,children:S?"Save new edit":"Save & Submit"}),(0,a.jsx)(v.z,{as:"button",color:"neutral",onClick:I,children:"Cancel"})]})]})}var Z=n(75310);function w(){var e=(0,o.Z)(["\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n","\n","\n"]);return w=function(){return e},e}var k=u.memo(function(e){var t,n=e.message,o=e.isEditing,s=e.format,u=e.isCompletionInProgress,c=e.className,d=(0,i.Z)(e,["message","isEditing","format","isCompletionInProgress","className"]);return o?(0,a.jsx)(b,(0,r.Z)({currentLeaf:n.nodeId,initialText:f.Cv.getTextFromMessage(n.message),parentId:n.parentId,role:n.message.role},d)):(0,a.jsx)(q,{text:f.Cv.getTextFromMessage(n.message),errCode:n.errCode,err:n.err,flag:n.errType,isCompletionInProgress:u,format:s,className:c,showContentPolicyViolation:n.errCode===l.Dd,citations:null===(t=n.message.metadata)||void 0===t?void 0:t.citations})});function q(e){var t=e.citations,n=e.className,r=e.err,i=e.flag,o=e.format,u=e.isCompletionInProgress,c=e.showContentPolicyViolation,l=e.size,f=e.text;return(0,a.jsxs)("div",{className:(0,s.Z)(n,"flex flex-col items-start gap-4 whitespace-pre-wrap","danger"===i&&"flex flex-row gap-2 text-red-500","warning"===i&&"text-orange-500"),children:[r&&!f||c||!o?"danger"===i&&c?null:f:(0,a.jsx)(Z.Z,{size:void 0===l?"medium":l,className:(0,s.Z)("danger"!==i&&u&&"result-streaming","danger"===i&&"text-red-500","warning"===i&&"text-orange-500"),children:""===f?"&#8203;":(0,d.Qd)(f,t)}),i&&(0,a.jsx)(j,{$flag:i,children:c?(0,a.jsx)(F,{}):r})]})}function F(){return(0,a.jsxs)(a.Fragment,{children:["This content may violate our"," ",(0,a.jsx)("a",{target:"_blank",href:"https://platform.openai.com/docs/usage-policies/content-policy",rel:"noreferrer",className:"bold underline",children:"content policy"}),". If you believe this to be in error, please"," ",(0,a.jsx)("a",{target:"_blank",href:"https://forms.gle/3gyAMj5r5rTEcgbs5",rel:"noreferrer",className:"bold underline",children:"submit your feedback"})," ","— your input will aid our research in this area."]})}var j=c.Z.div(w(),function(e){return"warning"===e.$flag&&"border-orange-500 bg-orange-500/10"},function(e){return"danger"===e.$flag&&"border-red-500 bg-red-500/10"})},99847:function(e,t,n){n.d(t,{Op:function(){return p},s8:function(){return m},T$:function(){return h},Qd:function(){return f}});var r=n(35250),i=n(48240),o=n(96424),a=n.n(o);function s(e){var t,n=e.url;try{t=new URL(n)}catch(i){return console.error(i),null}return(0,r.jsx)(a(),{src:"https://icons.duckduckgo.com/ip3/".concat(t.hostname,".ico"),alt:"Favicon",width:16,height:16})}var u=n(79876),c=n(77064),l="&#8203;",d="oaicite:";function f(e,t){if(!t)return e;for(var n=t.length-1;n>=0;n--){var r=t[n],i=r.start_ix,o=r.end_ix,a=r.metadata,s=r.invalid_reason,u={index:n};a?u.metadata=a:s&&(u.invalid_reason=s),e=e.slice(0,i)+"".concat(l,"`").concat(d).concat(JSON.stringify(u),"`").concat(l)+e.slice(o)}return e}function h(e){if(!e.startsWith(d))return null;try{return JSON.parse(e.slice(d.length))}catch(t){return{index:-1}}}function m(e){var t,n=e.displayInfo;return(0,r.jsx)(c.$,{label:(0,r.jsx)(p,{pageInfo:n.metadata,invalidReason:n.invalid_reason}),placement:"top",offset:[0,3],leaveDelay:150,withArrow:!1,interactive:!0,wide:!0,children:(0,r.jsx)("a",{href:null===(t=n.metadata)||void 0===t?void 0:t.url,target:"_blank",rel:"noreferrer",className:"text-green-600 !no-underline",children:(0,r.jsx)("sup",{children:n.index+1})})})}function p(e){var t=e.pageInfo,n=e.invalidReason;return(0,r.jsx)("a",{href:null==t?void 0:t.url,target:"_blank",rel:"noreferrer",className:"!no-underline",children:(0,r.jsx)(c.u,{children:t?(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("div",{className:"flex shrink-0 items-center justify-center",children:(0,r.jsx)(s,{url:t.url})}),(0,r.jsx)("div",{className:"max-w-xs truncate text-xs",children:t.title}),(0,r.jsx)("div",{className:"shrink-0",children:(0,r.jsx)(u.ZP,{icon:i.AlO,size:"xsmall"})})]}):(0,r.jsx)("div",{className:"text-red-500",children:n||"Invalid citation"})})})}},57218:function(e,t,n){n.d(t,{G:function(){return r}});var r={id:"chat",name:"ChatGPT",href:"/chat",theme:{icon:"openai",color:"#10a37f",activeColor:"#1a7f64"}}},80836:function(e,t,n){n.d(t,{Cv:function(){return k},uV:function(){return Z}});var r,i,o=n(35025),a=n(33468),s=n(37495),u=n(75106),c=n(43905),l=n(33861),d=n(31501),f=n(89874),h=n(64705),m=n(25769),p=n(84251),g=n.n(p),v=n(8844),x=n(36613),y=n(68619),b=(r={},(0,l.Z)(r,y.Jq.Root,y.uU.Unknown),(0,l.Z)(r,y.Jq.Prompt,y.uU.User),(0,l.Z)(r,y.Jq.Completion,y.uU.Assistant),(0,l.Z)(r,y.Jq.System,y.uU.System),r),Z=(i={},(0,l.Z)(i,y.uU.Unknown,y.Jq.Root),(0,l.Z)(i,y.uU.System,y.Jq.System),(0,l.Z)(i,y.uU.User,y.Jq.Prompt),(0,l.Z)(i,y.uU.Assistant,y.Jq.Completion),(0,l.Z)(i,y.uU.Critic,y.Jq.Completion),(0,l.Z)(i,y.uU.Tool,y.Jq.Completion),i),w=new WeakMap,k=function(){function e(t){(0,o.Z)(this,e),(0,s.Z)(this,w,{writable:!0,value:void 0}),(0,u.Z)(this,w,t||e.createTree())}var t=e.prototype;return t.getNode=function(e){return(0,a.Z)(this,w)[e]},t.getMessage=function(e){return(0,a.Z)(this,w)[e].message},t.getMessageId=function(e){return(0,a.Z)(this,w)[e].message.id},t.getMetadata=function(e){return(0,a.Z)(this,w)[e].metadata},t.getLeafFromNode=function(e){for(var t=(0,a.Z)(this,w)[e];;){if(0===t.children.length)return t;t=(0,a.Z)(this,w)[t.children.values().next().value]}},t.getParent=function(e){var t=(0,a.Z)(this,w)[e].parentId;return(0,a.Z)(this,w)[t]},t.getParentId=function(e){var t;return(null===(t=this.getParent(e))||void 0===t?void 0:t.id)||"root"},t.getBranchFromLeaf=function(e){for(var t=[],n=(0,a.Z)(this,w)[e];t.push(n),"root"!==n.type;)n=(0,a.Z)(this,w)[n.parentId];return t.reverse()},t.getChildrenFromNode=function(e){var t=this,n=(0,a.Z)(this,w)[e];return n?Array.from(n.children).map(function(e){return(0,a.Z)(t,w)[e]}):[]},t.isMessageIncomplete=function(t){var n=this.getMessage(t);return e.getIsIncompleteFromMessage(n)},t.addNodeToEnd=function(e,t){if(!(0,a.Z)(this,w)[e])return(0,l.Z)({},t.id,t);(0,u.Z)(this,w,g()((0,a.Z)(this,w),(0,l.Z)({$merge:(0,l.Z)({},t.id,t)},e,{children:{$apply:function(e){return Array.from(new Set((0,h.Z)(e).concat([t.id])))}}})))},t.addNode=function(e,t,n,r,i){var o="string"==typeof t?{id:(0,v.Z)(),role:b[r],content:{content_type:"text",parts:[t]}}:t,a=(0,d.Z)({id:e,children:[],parentId:n,type:r,message:o},i?{metadata:i}:{});this.addNodeToEnd(n,a)},t.updateNode=function(e,t){(0,u.Z)(this,w,g()((0,a.Z)(this,w),(0,l.Z)({},e,t)))},t.updateNodeMessage=function(e,t){(0,u.Z)(this,w,g()((0,a.Z)(this,w),(0,l.Z)({},e,{message:{$set:t}})))},t.updateNodeText=function(e,t){(0,u.Z)(this,w,g()((0,a.Z)(this,w),(0,l.Z)({},e,{message:{content:{parts:{$set:[t]}}}})))},t.deleteNode=function(e){var t=(0,a.Z)(this,w),n=t[e],r=(0,f.Z)(t,[e].map(m.Z)),i=n.parentId;(0,u.Z)(this,w,g()(r,(0,l.Z)({},i,{children:{$apply:function(t){return t.filter(function(t){return t!==e})}}})))},t.getTextFromNode=function(t){return e.getTextFromMessage(this.getMessage(t))},t.getIsBlockedFromNode=function(e){var t,n,r=this.getNode(e);return r&&(null===(t=r.metadata)||void 0===t?void 0:t.errCode)===x.Dd&&(null===(n=r.metadata)||void 0===n?void 0:n.errType)==="danger"},t.getTextFromThread=function(t){return this.getBranchFromLeaf(t).filter(function(e){return e.type!==y.Jq.Root&&e.type!==y.Jq.System}).map(function(t){return e.getTextFromMessage(t.message)}).join("\n\n")},t.getTextFromLastNMessages=function(t,n){return this.getBranchFromLeaf(t).slice(-n).filter(function(e){return e.type!==y.Jq.Root&&e.type!==y.Jq.System}).map(function(t){return e.getTextFromMessage(t.message)}).join("\n\n")},t.getConversationTurns=function(e){var t=this,n=[];return this.getBranchFromLeaf(e).forEach(function(e){var r=e.id,i=e.parentId,o=e.message,s=e.metadata,u=n[n.length-1];(null==u?void 0:u.role)===o.role||o.role===y.uU.Tool?n[n.length-1].messages.push((0,d.Z)({nodeId:r,parentId:i,message:o},s)):n.push({role:o.role,messages:[(0,d.Z)({nodeId:r,parentId:i,message:o},s),],variantIds:i?Array.from((0,a.Z)(t,w)[i].children):[r]})}),n},t.getParentPromptNode=function(e){for(var t=(0,a.Z)(this,w)[e];t&&t.type!==y.Jq.Prompt;)t=(0,a.Z)(this,w)[t.parentId];return t},e.createTree=function(){return{root:{id:"root",children:[],parentId:"",type:y.Jq.Root,message:e.createRootMessage()}}},e.createRootMessage=function(){return{id:(0,v.Z)(),role:b[y.Jq.Root],content:{content_type:"text",parts:[]}}},e.getIsIncompleteFromMessage=function(e){var t,n;return(null===(t=e.metadata)||void 0===t?void 0:null===(n=t.finish_details)||void 0===n?void 0:n.type)==="max_tokens"},e.getWasInterruptedFromMessage=function(e){var t,n;return(null===(t=e.metadata)||void 0===t?void 0:null===(n=t.finish_details)||void 0===n?void 0:n.type)==="interrupted"},e.getIsContinuedFromMessage=function(e){var t;return(null===(t=e.metadata)||void 0===t?void 0:t.message_type)==="continue"},e.getTextFromMessage=function(t){var n;return e.getIsTextTypeFromMessage(t)?((null===(n=t.content)||void 0===n?void 0:n.parts)||[]).join(""):""},e.getIsTextTypeFromMessage=function(e){return"text"===e.content.content_type},e.getRequestIdFromConversationTurn=function(e){var t=e.messages[e.messages.length-1];return this.getIsContinuedFromMessage(t.message)?t.nodeId:e.messages[0].nodeId},(0,c.Z)(e,[{key:"isFirstCompletion",get:function(){return 3===Object.values((0,a.Z)(this,w)).length}}]),e}()},60612:function(e,t,n){var r=n(70079);t.Z=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,r.useCallback)(function(){return e.current},[])}},82018:function(e,t,n){n.d(t,{kP:function(){return f},w7:function(){return c}});var r=n(61706),i=n(31501),o=n(45813),a=n(87762),s=n(44928),u=n(61432);function c(e){(0,s.signOut)((0,i.Z)({callbackUrl:window.location.origin+"/api/auth/logout"},e))}function l(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(function(){var e,t;return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,fetch("/api/auth/session")];case 1:return[4,e.sent().json()];case 2:if(Object.keys(t=e.sent()).length)return[2,t];return[2,null]}})})).apply(this,arguments)}function f(e){var t=e||{},n=t.required,r=t.redirectTo,i=t.queryConfig,o=(0,u.useRouter)(),s=(0,a.a)(["session"],l,{onSettled:function(e,t){(null==i?void 0:i.onSettled)&&(null==i||i.onSettled(e,t)),!e&&n&&o.push(r)}});return{session:(null==s?void 0:s.data)||null,loading:(null==s?void 0:s.status)==="loading"}}},36613:function(e,t,n){n.d(t,{Dd:function(){return a},Mf:function(){return s},_I:function(){return c},sK:function(){return u}});var r=n(95182),i=n.n(r),o=n(60814),a="content_policy",s={errType:"warning",errCode:a},u={err:"Contents may violate our content policy",errType:"danger",errCode:a};function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a=i()(e.length,0,4e3),s=i()(e.length-a,0,e.length-1),u=t?e.substring(s,e.length):e;return u?o.ZP.runModerationApi(u,n,r).then(function(e){var t,n;return{isBlocked:Boolean(e.blocked),isFlagged:Boolean(e.flagged)}}).catch(function(e){return console.error(e),{isBlocked:!1,isFlagged:!1,error:e}}):Promise.resolve({isBlocked:!1,isFlagged:!1})}}}]);