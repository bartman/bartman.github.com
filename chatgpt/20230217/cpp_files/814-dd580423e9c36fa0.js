"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{60814:function(e,t,n){n.d(t,{ZP:function(){return A}});var r=n(61706),o=n(35025),a=n(9135),i=n(31501),s=n(61079),c=n(42928),h=n(45813),u=n(48879),d=n(44928);n(138);var l=n(34388),p=n(22832),f=n(25829),g=n(19818),m=function(e){(0,p.Z)(n,e);var t=(0,g.Z)(n);function n(e,r,a,i){var s;return(0,o.Z)(this,n),(s=t.call(this,e)).name="UserError",s.userMessage=e,s.status=r||400,s.code=a||null,s.type=i||null,s}return n}((0,f.Z)(Error)),y=function(e){(0,p.Z)(n,e);var t=(0,g.Z)(n);function n(){var e,r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"An error occurred. If this issue persists please contact us through our help center at help.openai.com.",i=arguments.length>1?arguments[1]:void 0;return(0,o.Z)(this,n),(e=t.call(this,(r=a,r&&(r.startsWith("Rate limit reached for")||r.startsWith("End-user exceeded rate-limit"))?"We're sorry, but we limit the number of requests one user can make in a certain timeframe. Please hang tight and try again in a little while.":r))).name="FatalError",e.type=i||null,e}return n}((0,f.Z)(Error)),v=n(24638),_="https://chat.openai.com/backend-api",T=function(){function e(){(0,o.Z)(this,e)}return e.setAccessToken=function(e){this.accessToken=e},e.getAuthHeader=function(e){return{Authorization:"Bearer ".concat(e||this.accessToken)}},e.refreshApiKey=function(){var e=this;if(this.apiKeyRefreshing)return this.apiKeyRefreshing;var t=this;return this.apiKeyRefreshing=(0,r.Z)(function(){var e;return(0,h.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,d.getSession)()];case 1:return(e=n.sent())&&t.setAccessToken(e.accessToken),[2];case 2:throw Error("Cannot refresh access token outside of browser");case 3:return[2]}})})(),setTimeout(function(){e.apiKeyRefreshing=null},6e4),this.apiKeyRefreshing},e.fetch=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this;return(0,r.Z)(function(){var r,a,c,u,d,l;return(0,h.__generator)(this,function(h){switch(h.label){case 0:return[4,fetch(e,r=(0,i.Z)({credentials:"include"},t))];case 1:if((a=h.sent()).status>=500)throw new y;if(!(a.status>=400))return[3,12];h.label=2;case 2:return h.trys.push([2,4,,5]),[4,a.json()];case 3:return c=(null==(u=h.sent())?void 0:u.detail)||(null==u?void 0:u.error),[3,5];case 4:return d=h.sent(),console.error("Failed to parse error response",d),[3,5];case 5:if(console.error("API error",e,c),!((null==c?void 0:c.code)==="expired_session_key"||(null==c?void 0:c.code)==="token_expired"))return[3,11];h.label=6;case 6:if(h.trys.push([6,9,,10]),n.isRetry)return[3,8];return[4,o.refreshApiKey()];case 7:return h.sent(),[2,o.fetch(e,r,(0,s.Z)((0,i.Z)({},n),{isRetry:!0}))];case 8:return[3,10];case 9:return l=h.sent(),console.error("Failed to refresh expired access token: ".concat(l)),[3,10];case 10:console.error("Refresh access token failed when retrieving",e,c),window._oaiHandleSessionExpired("fetch",JSON.stringify(c)),h.label=11;case 11:if(null==c?void 0:c.type)throw new m((null==c?void 0:c.message)||c,a.status,null==c?void 0:c.code,null==c?void 0:c.type);throw new y;case 12:if(204===a.status)return[2,{}];return[2,a.json()]}})})()},e.getArtifacts=function(){return this.fetch("".concat(_,"/artifacts"),{method:"GET",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e.createArtifact=function(e){return this.fetch("".concat(_,"/artifacts"),{method:"POST",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({url:e,contents:"\n"})})},e.sendDocument=function(){return this.fetch("".concat(_,"/private"),{method:"GET",headers:{"Content-Type":"application/json"}})},e.getRetrievalResults=function(e){return this.fetch("".concat(_,"/retrieval/public_data"),{method:"POST",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({query:e})})},e.getModels=function(e){return this.fetch("".concat(_,"/models"),{method:"GET",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader(e))})},e.getConversations=function(e,t,n){var r=new URLSearchParams({offset:e.toString(),limit:t.toString()});return this.fetch("".concat(_,"/conversations?").concat(r),{method:"GET",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader(n))})},e.getConversation=function(e,t,n){var r=n?"".concat(v.env.INTERNAL_API_URL,"/api"):_;return this.fetch("".concat(r,"/conversation/").concat(e),{method:"GET",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader(t))})},e.generateTitle=function(e,t,n){return this.fetch("".concat(_,"/conversation/gen_title/").concat(e),{method:"POST",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({message_id:t,model:n})})},e.patchConversation=function(e,t){return this.fetch("".concat(_,"/conversation/").concat(e),{method:"PATCH",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify(t)})},e.deleteConversations=function(){return this.fetch("".concat(_,"/conversations"),{method:"PATCH",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({is_visible:!1})})},e.getLoginLink=function(e){return this.fetch("".concat(_,"/bypass/link"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})})},e.publicApiCompletionStream=function(e,t,n){var o=this;return(0,r.Z)(function(){var s,c,d;return(0,h.__generator)(this,function(d){return s=new AbortController,c={action:t.completionType,messages:t.messages.length>0?t.messages:void 0,conversation_id:t.threadId,parent_message_id:t.parentMessageId,model:e.model},(0,u.L)("".concat("https://chat.openai.com/backend-api","/conversation"),{method:"POST",credentials:"include",headers:(0,i.Z)({"Content-Type":"application/json"},o.getAuthHeader()),body:JSON.stringify(c),signal:s.signal,openWhenHidden:!0,onopen:function(e){return(0,r.Z)(function(){var t,n,r;return(0,h.__generator)(this,function(o){switch(o.label){case 0:if(t=e.headers.get("content-type")||"",e.ok&&t.includes("text/event-stream"))return[2];if(!t.includes("application/json"))return[3,2];return[4,e.json()];case 1:if(n=o.sent(),console.error(n),r=(null==n?void 0:n.error)||(null==n?void 0:n.detail)){if(e.status>=500)throw new y((null==r?void 0:r.message)||r);throw((null==r?void 0:r.code)==="expired_session_key"||(null==r?void 0:r.code)==="invalid_api_key"||(null==r?void 0:r.code)==="token_expired")&&window._oaiHandleSessionExpired("stream",JSON.stringify(r)),new m((null==r?void 0:r.message)||r,e.status,null==r?void 0:r.code,null==r?void 0:r.type)}o.label=2;case 2:throw new y}})})()},onmessage:function(e){if("[DONE]"===e.data)s.abort(),n({finish_reason:"stop"});else if("ping"===e.event);else try{var t=JSON.parse(e.data);if(t.error)throw new y(t.error.message);n({message:t.message,threadId:t.conversation_id})}catch(r){if((0,l.TV)(r))throw new y(r.message)}},onerror:function(e){throw"Failed to fetch"===e.message&&(e=new y("An error occurred. Either the engine you requested does not exist or there was another issue processing your request. If this issue persists please contact us through our help center at help.openai.com.")),n({err:e}),e}}).catch(function(e){(0,a.Z)(e,m)||(0,a.Z)(e,y)||console.error(e)}),[2,s]})})()},e.runModerationApi=function(e,t,n){return this.fetch("".concat("https://chat.openai.com/backend-api","/moderations"),{method:"POST",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify({input:e,model:"text-moderation-playground",conversation_id:t,message_id:n})})},e.submitMessageFeedback=function(e){return this.fetch("".concat(_,"/conversation/message_feedback"),{method:"POST",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader()),body:JSON.stringify(e)})},e.getRateLimitCaptchaId=function(e){var t=this;return(0,r.Z)(function(){return(0,h.__generator)(this,function(n){switch(n.label){case 0:return[4,t.fetch("".concat(_,"/check_data_captcha"),{method:"GET",headers:(0,i.Z)({"Content-Type":"application/json"},t.getAuthHeader(e))})];case 1:return[2,n.sent()]}})})()},e.getRateLimitCaptchaItem=function(e,t){return this.fetch("".concat(_,"/data_captcha/").concat(e),{method:"GET",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader(t))})},e.getCaptchaDisplayStatus=function(e){return this.fetch("".concat(_,"/crosswalk"),{method:"GET",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader(e))})},e.submitRateLimitCaptchaResponse=function(e,t){return this.fetch("".concat(_,"/data_captcha/").concat(e.captchaId),{method:"POST",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader(t)),body:JSON.stringify({payload:e.payload,metadata:e.metadata})})},e.submitCheckoutForm=function(){return this.fetch("".concat(_,"/payments/checkout"),{method:"POST",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader())})},e.fetchCustomerPortalUrl=function(e){return this.fetch("".concat(_,"/payments/customer_portal"),{method:"GET",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader(e))})},e.getAccountStatus=function(e,t,n){var r=n?"".concat(v.env.INTERNAL_API_URL,"/api"):_,o=(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader(e));if(t){var a={},s=!0,h=!1,u=void 0;try{for(var d,l=Object.entries(t)[Symbol.iterator]();!(s=(d=l.next()).done);s=!0){var p=(0,c.Z)(d.value,2),f=p[0],g=p[1];f.toLowerCase().startsWith("cf-")&&(a[f]=g)}}catch(m){h=!0,u=m}finally{try{s||null==l.return||l.return()}finally{if(h)throw u}}o=(0,i.Z)({},a,o)}return this.fetch("".concat(r,"/accounts/check"),{method:"GET",headers:o})},e.postAccountStatusWithCustomerSessionId=function(e,t){return this.fetch("".concat(v.env.INTERNAL_API_URL,"/api/payments/checkout_session"),{method:"POST",headers:(0,i.Z)({"Content-Type":"application/json"},this.getAuthHeader(t)),body:JSON.stringify({stripe_checkout_session_id:e})})},e.getOrCreatePlugin=function(e){var t={id:"id",manifest_uri:e,manifest:{name_for_human:"OpenAI",description_for_human:"Here is a description of OpenAI.",logo_uri:"https://openai.com/content/images/2022/05/openai-avatar.png",auth:{type:"oauth"}}};return new Promise(function(e){return e(t)})},e}();T.auth0Client=null;var A=T}}]);