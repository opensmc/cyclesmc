/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2013 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(a){var b=a("#page"),c=a(window),d=function(a,b){this.elem=a;this.data=b;this.data.enterSpeedX=Muse.Utils.firstDefined(this.data.enterSpeedX,this.data.speedX);this.data.exitSpeedX=Muse.Utils.firstDefined(this.data.exitSpeedX,this.data.speedX);this.data.enterSpeedY=Muse.Utils.firstDefined(this.data.enterSpeedY,this.data.speedY);this.data.exitSpeedY=Muse.Utils.firstDefined(this.data.exitSpeedY,this.data.speedY);this.enabled=Muse.Utils.isDefined(this.data.offset);this.initialized=!1};d.HIDDEN_CLASS=
"se_invi";d.prototype.clone=function(a){a.hasClass(d.HIDDEN_CLASS)||a.addClass(d.HIDDEN_CLASS);a.registerGenericScrollEffect(d,this.data)};d.prototype.initialize=function(){this.elemWidth=this.elem.width();this.elemHeight=this.elem.height();var b=Muse.Browser.Features.checkCSSFeature("backface-visibility");b&&this.elem.css((b===!0?"":"-"+b.toLowerCase()+"-")+"backface-visibility","hidden");c.data("scrollWrapper").provider.type=="WebkitScrollProvider"&&(a("input,textarea",this.elem).on("touchstart",
this,this.onElementTouchStart),a("input,textarea",this.elem).on("focus",this,this.onElementFocus),a("input,textarea",this.elem).on("blur",this,this.onElementBlur))};d.prototype.update=function(a,b,c){var f=a<0,g=f?this.data.enterSpeedX:this.data.exitSpeedX,f=f?this.data.enterSpeedY:this.data.exitSpeedY,i={display:this.initialized?"inline":"hidden"};if(Muse.Utils.isDefined(g)&&!isNaN(g))i.left=a*g+this.elementLeft-b;if(Muse.Utils.isDefined(f)&&!isNaN(f))i.top=a*-f+this.elementTop-this.data.offset;
this.getVisible(i.left,i.top,c)?this.elem.css(i):this.elem.css("display","none");if(!this.initialized&&this.elem.hasClass(d.HIDDEN_CLASS))this.elem.removeClass(d.HIDDEN_CLASS),this.initialized=!0};d.prototype.onElementTouchStart=function(){c.data("scrollWrapper").provider.inFormFieldEditMode=!0};d.prototype.onElementFocus=function(a){a=a.data;if(a.stopTimeout)clearTimeout(a.stopTimeout),a.stopTimeout=0};d.prototype.onElementBlur=function(a){var b=a.data,d=c.data("scrollWrapper");b.stopTimeout=setTimeout(function(){b.stopTimeout=
0;d.provider.inFormFieldEditMode=!1},200)};d.prototype.getVisible=function(a,b,c){var d=Math.max(this.elemWidth,this.elemHeight)+100;return(void 0===a||a+d>0&&a<c.windowWidth)&&(void 0===b||b+d>0&&b<c.windowHeight)};var f=function(a,b){this.elem=a;this.data=b;this.offset=this.getBackgroundOffset();this.vx=Muse.Utils.firstDefined(this.data.speedX,0);this.vy=Muse.Utils.firstDefined(this.data.speedY,1);0==this.vx&&0==this.vy?(this.elem.css("background-attachment","fixed"),this.enabled=!1):this.enabled=
0!=this.vx||1!=this.vy};f.prototype.update=function(a){this.elem.css({"background-attachment":"scroll","background-position":this.offset.x+a*this.vx+"px "+(this.offset.y+a*(1-this.vy))+"px"})};f.prototype.getBackgroundOffset=function(){var a=this.getBackgroundPosition(),b,c;b={x:Muse.Utils.tryParse(a.x,parseFloat,0),y:Muse.Utils.tryParse(a.y,parseFloat,0)};if(!Muse.Utils.endsWith(a.x,"%")&&!Muse.Utils.endsWith(a.y,"%"))return b;c=this.getBackgroundSize()||{};if(Muse.Utils.endsWith(a.x,"%"))b.x=b.x/
100*(this.elem.width()-Muse.Utils.firstDefined(c.width,this.elem.width()));if(Muse.Utils.endsWith(a.y,"%"))b.y=b.y/100*(this.elem.height()-Muse.Utils.firstDefined(c.height,this.elem.height()));return b};f.prototype.isValidBackgroundPosition=function(a){return Muse.Utils.endsWith(a,"%")||Muse.Utils.endsWith(a,"px")};f.prototype.getBackgroundPosition=function(){var a=this.elem.css("background-position");if(!a){var b=this.elem.css("background-position-x"),c=this.elem.css("background-position-y");b&&
(a=b+" "+(c||""))}if(!a||!a.split)return{x:"0%",y:"0%"};a=a.replace(/(?:left|top)/gi,"0%").replace(/center/gi,"50%").replace(/(?:right|bottom)/gi,"100%");a=a.replace(/^\s+|\s+$/gi,"");a=a.split(" ");1==a.length&&a.push("50%");if(!this.isValidBackgroundPosition(a[0])||!this.isValidBackgroundPosition(a[1]))Muse.Assert.fail("Invalid measurement unit for background position. Expecting px or %.");else return{x:a[0],y:a[1]}};f.prototype.getBackgroundSize=function(){var a=this.elem.css("background-size");
if(a&&a.split)return a=a.split(" "),{width:Muse.Utils.tryParse(a[0],parseFloat),height:Muse.Utils.tryParse(a[1],parseFloat)}};var g=function(a,b){this.elem=a;this.data=b};g.prototype.update=function(a){var a=(a<0?this.data.enterRotateSpeed:this.data.exitRotateSpeed)*a%360,b=Muse.Browser.Features.checkCSSFeature("transform");this.elem.css((b===!0?"":"-"+b.toLowerCase()+"-")+"transform","rotate("+a+"deg)")};var i=function(a,b,c){this.service=a;this.elem=b;this.data=c};i.prototype.update=function(a){a=
100+(a<0?this.data.enterOpacityChangeSpeed:this.data.exitOpacityChangeSpeed)*a;a=Math.max(a,0);a=Math.min(a,100);0==a?this.elem.css("visibility","hidden"):(this.elem.css("visibility","visible"),this.elem.fadeTo(0,a/100))};var h=function(){this.effects=[];this.initialCSSProperties={};this.pagePaddingTop=Muse.Utils.tryParse(a("body").css("padding-top"),parseInt,0)+Muse.Utils.tryParse(a("#page").css("border-top-width"),parseInt,0);this.scrollY=this.scrollX=0;c.on("scrolled",this,this.onUpdate)};h.prototype.getEffectProgress=
function(a){return this.scrollY-Muse.Utils.firstDefined(a.data.offset,0)};h.prototype.getHorizontalScroll=function(){return this.scrollX-b.offset().left};h.prototype.getEnvironmentSettings=function(){return{windowWidth:window.innerWidth||c.width(),windowHeight:window.innerHeight||c.height()}};h.prototype.onUpdate=function(a){var b=null,c=a.data,d=0,f=c.getEnvironmentSettings();c.scrollX=a.x;c.scrollY=a.y;for(d=0;d<c.effects.length;d++)b=c.effects[d],b.update(c.getEffectProgress(b),c.getHorizontalScroll(),
f)};h.prototype.registerEffect=function(a,c,d){var f=a.attr("id")||a.attr("data-muse-tempuid")||a.attr("data-muse-tempuid",this.getRandomUID()).attr("data-muse-tempuid"),g=this,i=new c(a,d);if(!1!==i.enabled)"undefined"==typeof this.initialCSSProperties[f]&&(this.initialCSSProperties[f]={left:Muse.Utils.tryParse(a.css("left"),parseInt,0)+Muse.Utils.tryParse(b.css("border-left-width"),parseInt,0),top:Muse.Utils.tryParse(a.css("top"),parseInt,0)+this.pagePaddingTop}),i.elementLeft=this.initialCSSProperties[f].left,
i.elementTop=this.initialCSSProperties[f].top,i.type=c,i.initialize&&i.initialize(),setTimeout(function(){i.update(g.getEffectProgress(i),g.getHorizontalScroll(),g.getEnvironmentSettings())},0),this.effects.push(i)};h.prototype.getRandomUID=function(){return Math.round(Math.random()*1E6)};var k=new h;a.fn.registerPositionScrollEffect=function(b){return a(this).registerGenericScrollEffect(d,b)};a.fn.registerBackgroundPositionScrollEffect=function(b){return a(this).registerGenericScrollEffect(f,b)};
a.fn.registerRotateScrollEffect=function(b){return a(this).registerGenericScrollEffect(g,b)};a.fn.registerOpacityScrollEffect=function(b){return a(this).registerGenericScrollEffect(i,b)};a.fn.registerGenericScrollEffect=function(b,c){k.registerEffect(a(this),b,c);a(this).data("hasScrollEffect",!0);return this};a.fn.clearScrollEffects=function(){a(this).data("hasScrollEffect",!1);for(var b=0;b<k.effects.length;)k.effects[b].elem.is(this)?k.effects.splice(b,1):b++};a.fn.cloneScrollEffectsFrom=function(a){for(var b=
k.effects.length,c=0;c<b;c++){var d=k.effects[c];d.elem.is(a)&&d.clone&&d.clone(this)}}})(jQuery);
(function(a){var b=a(window),c=a(document),d=a("html"),f=a("body"),g=a("#page"),i=function(a,b){this.wrapper=a;this.onScrollFn=b;this.type="StandardScrollProvider"};i.prototype.activate=function(){b.scroll(this,this.onUpdate);b.resize(this,this.onUpdate);this.onUpdate()};i.prototype.deactivate=function(){b.off("scroll",this.onUpdate);b.off("resize",this.onUpdate)};i.prototype.scrollTop=function(){return b.scrollTop()};i.prototype.scrollLeft=function(){return b.scrollLeft()};i.prototype.onUpdate=function(a){a=
a&&a.data||this;a.onScrollFn(a.scrollLeft(),a.scrollTop())};i.prototype.scrollTo=function(a,b){window.scrollTo(a,b);this.onScrollFn(a,b)};i.prototype.scrollHeight=function(){return(document.documentElement||document.body).scrollHeight};i.prototype.scrollWidth=function(){return(document.documentElement||document.body).scrollWidth};var h=function(b,c){this.wrapper=b;this.onScrollFn=c;this.moveStarted=!1;this.animation=null;this.scrollOffset={x:0,y:0};this.speed={x:0,y:0};this.lastTouch={x:0,y:0};this.metaViewPort=
a("meta[name=viewport]");this.scrollCounter=0;this.enabled=!0;this.type="WebkitScrollProvider"};h.DECELERATION_RATE=1.5;h.SCALE=1;h.LOCK_X=!1;h.LOCK_Y=!1;h.HTML_WRAPPER_ID="webit_scroll_provider_wrapper";h.prototype.available=function(){return this.enabled&&"ontouchstart"in window};h.prototype.activate=function(){g.wrap('<div id="'+h.HTML_WRAPPER_ID+'" />');this.htmlWrapper=a("#"+h.HTML_WRAPPER_ID+"");this.docProps={paddingTop:Muse.Utils.getCSSIntValue(f,"padding-top")+Muse.Utils.getCSSIntValue(f,
"margin-top"),paddingBottom:Muse.Utils.getCSSIntValue(f,"padding-bottom")+Muse.Utils.getCSSIntValue(f,"margin-bottom"),paddingLeft:Muse.Utils.getCSSIntValue(g,"margin-left"),paddingRight:Muse.Utils.getCSSIntValue(g,"margin-right")};this.htmlWrapper.css("padding-left",this.docProps.paddingLeft);this.htmlWrapper.css("padding-right",this.docProps.paddingRight);this.htmlWrapper.css("padding-top",this.docProps.paddingTop);this.htmlWrapper.css("padding-bottom",this.docProps.paddingBottom);this.htmlWrapper.css("width",
g.outerWidth());this.htmlWrapper.addClass("html");d.removeClass("html");f.addClass("scroll_wrapper");b.scroll(this,this.onWindowScroll);b.on("orientationchange",this,this.orientationChange);c.on("touchstart",this,this.touchStartHandler);c.on("touchmove",this,this.touchMoveHandler);c.on("touchend",this,this.touchEndHandler)};h.prototype.deactivate=function(){b.off("scroll",this.onWindowScroll);b.off("orientationchange",this.orientationChange);c.off("touchstart",this.touchStartHandler);c.off("touchmove",
this.touchMoveHandler);c.off("touchend",this.touchEndHandler);f.removeClass("scroll_wrapper");d.addClass("html");g.unwrap()};h.prototype.onWindowScroll=function(a){var a=a.data,c=b.scrollLeft(),d=b.scrollTop();if(!a.inFormFieldEditMode&&(a.scrollCounter++,0!=c||0!=d))window.scrollTo(0,0),a.scrollTo(c,d)};h.prototype.orientationChange=function(a){a=a.data;a.animation&&a.animation.stop(!1,!1);a.scrollTo(a.scrollOffset.x,a.scrollOffset.y)};h.prototype.canStartScroll=function(a){return!a.tagName.match(/input|textarea|select/i)};
h.prototype.touchStartHandler=function(a){var b=a.data,c=a.originalEvent;Muse.Assert.assert(!b.moveStarted,"Starting touch tracking while already tracking movement?");if(b.canStartScroll(a.target))b.animation&&b.animation.stop(!1,!1),b.scrollCounter=0,b.speed.y=b.speed.x=0,b.lastTouch.y=c.targetTouches[0].pageY,b.lastTouch.x=c.targetTouches[0].pageX,b.moveStarted=!0};h.prototype.touchMoveHandler=function(a){var b=a.data,c=a.originalEvent;if(3<b.scrollCounter)b.enabled=!1,b.wrapper.refreshProvider();
else if(a.preventDefault(),b.moveStarted)b.scrollByDelta(b.lastTouch.x-c.targetTouches[0].pageX,b.lastTouch.y-c.targetTouches[0].pageY),b.lastTouch.y=c.targetTouches[0].pageY,b.lastTouch.x=c.targetTouches[0].pageX};h.prototype.touchEndHandler=function(b){var c=b.data;if(c.moveStarted){c.moveStarted=!1;var d=20/h.DECELERATION_RATE,f=c.speed.x,g=c.speed.y,b=(1.71+0.0020*Math.sqrt(Math.pow(d*f,2)+Math.pow(d*g,2)))/h.DECELERATION_RATE*1E3/1.71,i=0,k=0;c.animation=a({progress:0}).animate({progress:1},
{duration:b,easing:"linear",step:function(a){i=c.decelerate(a);c.scrollByDelta(Math.round((i-k)*d*f),Math.round((i-k)*d*g));k=i}})}};h.prototype.decelerate=function(a){return(1-a)*(1-a)*(1-a)*0+3*(1-a)*(1-a)*a*1+3*(1-a)*a*a*1+a*a*a*1};h.prototype.scrollByDelta=function(a,b){this.scrollTo(h.SCALE*(this.scrollOffset.x+a),h.SCALE*(this.scrollOffset.y+b));h.LOCK_X||(this.speed.x=0.75*a*h.SCALE);h.LOCK_Y||(this.speed.y=0.75*b*h.SCALE)};h.prototype.scrollTop=function(){return this.scrollOffset.y};h.prototype.scrollLeft=
function(){return this.scrollOffset.x};h.prototype.scrollHeight=function(){return this.htmlWrapper.outerHeight()};h.prototype.scrollWidth=function(){return this.htmlWrapper.outerWidth()};h.prototype.scrollTo=function(a,b){h.LOCK_X||(this.scrollOffset.x=Math.min(Math.max(0,a),Math.max(0,this.scrollWidth()-window.innerWidth)));h.LOCK_Y||(this.scrollOffset.y=Math.min(Math.max(0,b),Math.max(0,this.scrollHeight()-window.innerHeight)));this.speed.x=this.speed.y=0;f.css({top:(h.LOCK_Y?0:-this.scrollOffset.y)+
"px",left:(h.LOCK_X?0:-this.scrollOffset.x)+"px"});this.onScrollFn(0,this.scrollOffset.y)};var k=function(){this.STANDARD_PROVIDER=new i(this,this.onScroll);this.WEBKIT_PROVIDER=new h(this,this.onScroll);this.provider=this.getProvider();this.provider.activate()};k.prototype.getProvider=function(){if(this.WEBKIT_PROVIDER.available())return this.WEBKIT_PROVIDER;return this.STANDARD_PROVIDER};k.prototype.isStandard=function(){return this.STANDARD_PROVIDER===this.getProvider()};k.prototype.refreshProvider=
function(){var a=this.provider.scrollLeft(),b=this.provider.scrollTop();this.provider.deactivate();this.provider=this.getProvider();this.provider.activate();this.scrollTo(a,b)};k.prototype.onScroll=function(a,c){var d=jQuery.Event("scrolled");d.x=a;d.y=c;b.trigger(d)};k.prototype.scrollTop=function(){return this.provider.scrollTop()};k.prototype.scrollLeft=function(){return this.provider.scrollLeft()};k.prototype.scrollTo=function(a,b){this.provider.scrollTo(a,b)};k.prototype.scrollHeight=function(){return this.provider.scrollHeight()};
k.prototype.scrollWidth=function(){return this.provider.scrollWidth()};c.ready(function(){b.data("scrollWrapper",new k)})})(jQuery);
