// monkey patch less classes
function CartoCSS(e){e&&this.setStyle(e)}tree.Value.prototype.toJS=function(){var e=this.value[0].value[0];return val=e.toString(),e.is==="color"&&(val="'"+val+"'"),"_value = "+val+";"},Object.defineProperty(tree.Filterset.prototype,"toJS",{enumerable:!1,value:function(e){var t={"=":"==="};return _.map(this,function(e){var n=e.op;n in t&&(n=t[n]);var r=e.val;e._val!==undefined&&(r=e._val.toString(!0));var i="data";return i+"."+e.key+" "+n+" "+r}).join(" && ")}}),tree.Definition.prototype.toJS=function(){var e={},t="("+this.zoom+" & (1 << ctx.zoom))",n=this.filters.toJS();return n&&n.length>0?n+=" && "+t:n=t,_.each(this.rules,function(t){if(t instanceof tree.Rule)e[t.name]=e[t.name]||[],n?e[t.name].push("if("+n+"){"+t.value.toJS()+"}"):e[t.name].push(t.value.toJS());else if(t instanceof tree.Ruleset){var r=t.toJS();for(var i in r){e[i]=e[i]||[];for(var s in r[i])e[i].push(r[i][s])}}}),e},CartoCSS.Layer=function(e,t){this.options=t,this.shader=e},CartoCSS.renderers={},CartoCSS.renderers.svg={maps:{},transform:function(e){var t={};for(var n in e){var r=this.maps[n];r?t[r]=e[n]:console.log("unknow property: "+n)}return t}},function(){var e=CartoCSS.renderers.svg,t=window.carto["mapnik-reference"].version.latest,n="polygon";for(var r in t.symbolizers[n])e.maps[t.symbolizers[n][r].css]=r;console.log(e.maps)}(),CartoCSS.Layer.prototype={getStyle:function(e,t,n){var r={};for(var i in this.shader)r[i]=this.shader[i](t,n);return CartoCSS.renderers[e].transform(r)},filter:function(e,t,n){for(var r in this.shader){var i=this.shader[r](t,n);if(i)return!0}return!1},transformGeometries:function(e){return e}},CartoCSS.prototype={setStyle:function(e){var t=this.parse(e);this.layers=t.map(function(e){return new CartoCSS.Layer(e)})},getLayers:function(){return this.layers},_createFn:function(e){var t=e.join("\n");return Function("data","ctx","var _value = null; "+t+"; return _value; ")},_compile:function(shader){typeof shader=="string"&&(shader=eval("(function() { return "+shader+"; })()")),this.shader_src=shader;for(var attr in shader){var c=mapper[attr];c&&(this.compiled[c]=eval("(function() { return shader[attr]; })();"))}},parse:function(e){var t={frames:[],errors:[],error:function(e){this.errors.push(e)}},n=null;try{n=(new carto.Parser(t)).parse(e)}catch(r){t.errors.push(r.message);return}if(n){var i=n.toList(t);i.reverse();var s={};for(var o=0;o<i.length;++o){var u=i[o],a=u.elements[0]+"::"+u.attachment,f=s[a]=s[a]||{},l=u.toJS();for(var c in l)(f[c]=f[c]||[]).push(l[c].join("\n"))}var h=[],p={};for(var o=0;o<i.length;++o){var u=i[o],d=u.elements[0]+"::"+u.attachment;if(!p[d]){var f=s[d];for(var v in f)f[v]=this._createFn(f[v]);h.push(f),p[d]=!0}}return h}return null}};