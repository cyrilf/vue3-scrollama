(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ScroLlama = {}));
})(this, (function (exports) { 'use strict';

	function getAugmentedNamespace(n) {
	  if (n.__esModule) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				if (this instanceof a) {
	        return Reflect.construct(f, arguments, this.constructor);
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var vue = {exports: {}};

	var vue_cjs_prod = {};

	function makeMap(str, expectsLowerCase) {
	  var map = /* @__PURE__ */ Object.create(null);
	  var list = str.split(",");
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase ? function (val) { return !!map[val.toLowerCase()]; } : function (val) { return !!map[val]; };
	}

	var EMPTY_OBJ = !!(process.env.NODE_ENV !== "production") ? Object.freeze({}) : {};
	var EMPTY_ARR = !!(process.env.NODE_ENV !== "production") ? Object.freeze([]) : [];
	var NOOP = function () {
	};
	var NO = function () { return false; };
	var onRE = /^on[^a-z]/;
	var isOn = function (key) { return onRE.test(key); };
	var isModelListener = function (key) { return key.startsWith("onUpdate:"); };
	var extend = Object.assign;
	var remove = function (arr, el) {
	  var i = arr.indexOf(el);
	  if (i > -1) {
	    arr.splice(i, 1);
	  }
	};
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var hasOwn = function (val, key) { return hasOwnProperty$1.call(val, key); };
	var isArray = Array.isArray;
	var isMap = function (val) { return toTypeString(val) === "[object Map]"; };
	var isSet = function (val) { return toTypeString(val) === "[object Set]"; };
	var isDate = function (val) { return toTypeString(val) === "[object Date]"; };
	var isRegExp = function (val) { return toTypeString(val) === "[object RegExp]"; };
	var isFunction = function (val) { return typeof val === "function"; };
	var isString = function (val) { return typeof val === "string"; };
	var isSymbol = function (val) { return typeof val === "symbol"; };
	var isObject = function (val) { return val !== null && typeof val === "object"; };
	var isPromise = function (val) {
	  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
	};
	var objectToString = Object.prototype.toString;
	var toTypeString = function (value) { return objectToString.call(value); };
	var toRawType = function (value) {
	  return toTypeString(value).slice(8, -1);
	};
	var isPlainObject = function (val) { return toTypeString(val) === "[object Object]"; };
	var isIntegerKey = function (key) { return isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key; };
	var isReservedProp = /* @__PURE__ */ makeMap(
	  // the leading comma is intentional so empty string "" is also included
	  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
	);
	var isBuiltInDirective = /* @__PURE__ */ makeMap(
	  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
	);
	var cacheStringFunction = function (fn) {
	  var cache = /* @__PURE__ */ Object.create(null);
	  return function (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	};
	var camelizeRE = /-(\w)/g;
	var camelize = cacheStringFunction(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ""; });
	});
	var hyphenateRE = /\B([A-Z])/g;
	var hyphenate = cacheStringFunction(
	  function (str) { return str.replace(hyphenateRE, "-$1").toLowerCase(); }
	);
	var capitalize = cacheStringFunction(
	  function (str) { return str.charAt(0).toUpperCase() + str.slice(1); }
	);
	var toHandlerKey = cacheStringFunction(
	  function (str) { return str ? ("on" + (capitalize(str))) : ""; }
	);
	var hasChanged = function (value, oldValue) { return !Object.is(value, oldValue); };
	var invokeArrayFns = function (fns, arg) {
	  for (var i = 0; i < fns.length; i++) {
	    fns[i](arg);
	  }
	};
	var def = function (obj, key, value) {
	  Object.defineProperty(obj, key, {
	    configurable: true,
	    enumerable: false,
	    value: value
	  });
	};
	var looseToNumber = function (val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n;
	};
	var toNumber = function (val) {
	  var n = isString(val) ? Number(val) : NaN;
	  return isNaN(n) ? val : n;
	};
	var _globalThis;
	var getGlobalThis = function () {
	  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
	};
	var identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
	function genPropsAccessExp(name) {
	  return identRE.test(name) ? ("__props." + name) : ("__props[" + (JSON.stringify(name)) + "]");
	}

	var PatchFlagNames = {};
	PatchFlagNames[1] = "TEXT";
	PatchFlagNames[2] = "CLASS";
	PatchFlagNames[4] = "STYLE";
	PatchFlagNames[8] = "PROPS";
	PatchFlagNames[16] = "FULL_PROPS";
	PatchFlagNames[32] = "HYDRATE_EVENTS";
	PatchFlagNames[64] = "STABLE_FRAGMENT";
	PatchFlagNames[128] = "KEYED_FRAGMENT";
	PatchFlagNames[256] = "UNKEYED_FRAGMENT";
	PatchFlagNames[512] = "NEED_PATCH";
	PatchFlagNames[1024] = "DYNAMIC_SLOTS";
	PatchFlagNames[2048] = "DEV_ROOT_FRAGMENT";
	PatchFlagNames[-1] = "HOISTED";
	PatchFlagNames[-2] = "BAIL";

	var slotFlagsText = {};
	slotFlagsText[1] = "STABLE";
	slotFlagsText[2] = "DYNAMIC";
	slotFlagsText[3] = "FORWARDED";

	var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console";
	var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);

	var range = 2;
	function generateCodeFrame(source, start, end) {
	  if ( start === void 0 ) start = 0;
	  if ( end === void 0 ) end = source.length;

	  var lines = source.split(/(\r?\n)/);
	  var newlineSequences = lines.filter(function (_, idx) { return idx % 2 === 1; });
	  lines = lines.filter(function (_, idx) { return idx % 2 === 0; });
	  var count = 0;
	  var res = [];
	  for (var i = 0; i < lines.length; i++) {
	    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
	    if (count >= start) {
	      for (var j = i - range; j <= i + range || end > count; j++) {
	        if (j < 0 || j >= lines.length)
	          { continue; }
	        var line = j + 1;
	        res.push(
	          ("" + line + (" ".repeat(Math.max(3 - String(line).length, 0))) + "|  " + (lines[j]))
	        );
	        var lineLength = lines[j].length;
	        var newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
	        if (j === i) {
	          var pad = start - (count - (lineLength + newLineSeqLength));
	          var length = Math.max(
	            1,
	            end > count ? lineLength - pad : end - start
	          );
	          res.push("   |  " + " ".repeat(pad) + "^".repeat(length));
	        } else if (j > i) {
	          if (end > count) {
	            var length$1 = Math.max(Math.min(end - count, lineLength), 1);
	            res.push("   |  " + "^".repeat(length$1));
	          }
	          count += lineLength + newLineSeqLength;
	        }
	      }
	      break;
	    }
	  }
	  return res.join("\n");
	}

	function normalizeStyle(value) {
	  if (isArray(value)) {
	    var res = {};
	    for (var i = 0; i < value.length; i++) {
	      var item = value[i];
	      var normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
	      if (normalized) {
	        for (var key in normalized) {
	          res[key] = normalized[key];
	        }
	      }
	    }
	    return res;
	  } else if (isString(value)) {
	    return value;
	  } else if (isObject(value)) {
	    return value;
	  }
	}
	var listDelimiterRE = /;(?![^(]*\))/g;
	var propertyDelimiterRE = /:([^]+)/;
	var styleCommentRE = /\/\*[^]*?\*\//g;
	function parseStringStyle(cssText) {
	  var ret = {};
	  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiterRE);
	      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return ret;
	}
	function stringifyStyle(styles) {
	  var ret = "";
	  if (!styles || isString(styles)) {
	    return ret;
	  }
	  for (var key in styles) {
	    var value = styles[key];
	    var normalizedKey = key.startsWith("--") ? key : hyphenate(key);
	    if (isString(value) || typeof value === "number") {
	      ret += normalizedKey + ":" + value + ";";
	    }
	  }
	  return ret;
	}
	function normalizeClass(value) {
	  var res = "";
	  if (isString(value)) {
	    res = value;
	  } else if (isArray(value)) {
	    for (var i = 0; i < value.length; i++) {
	      var normalized = normalizeClass(value[i]);
	      if (normalized) {
	        res += normalized + " ";
	      }
	    }
	  } else if (isObject(value)) {
	    for (var name in value) {
	      if (value[name]) {
	        res += name + " ";
	      }
	    }
	  }
	  return res.trim();
	}
	function normalizeProps(props) {
	  if (!props)
	    { return null; }
	  var klass = props.class;
	  var style = props.style;
	  if (klass && !isString(klass)) {
	    props.class = normalizeClass(klass);
	  }
	  if (style) {
	    props.style = normalizeStyle(style);
	  }
	  return props;
	}

	var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
	var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
	var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
	var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
	var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
	var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);

	var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
	var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
	var isBooleanAttr = /* @__PURE__ */ makeMap(
	  specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
	);
	function includeBooleanAttr(value) {
	  return !!value || value === "";
	}
	var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
	var attrValidationCache = {};
	function isSSRSafeAttrName(name) {
	  if (attrValidationCache.hasOwnProperty(name)) {
	    return attrValidationCache[name];
	  }
	  var isUnsafe = unsafeAttrCharRE.test(name);
	  if (isUnsafe) {
	    console.error(("unsafe attribute name: " + name));
	  }
	  return attrValidationCache[name] = !isUnsafe;
	}
	var propsToAttrMap = {
	  acceptCharset: "accept-charset",
	  className: "class",
	  htmlFor: "for",
	  httpEquiv: "http-equiv"
	};
	var isKnownHtmlAttr = /* @__PURE__ */ makeMap(
	  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
	);
	var isKnownSvgAttr = /* @__PURE__ */ makeMap(
	  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
	);

	var escapeRE = /["'&<>]/;
	function escapeHtml(string) {
	  var str = "" + string;
	  var match = escapeRE.exec(str);
	  if (!match) {
	    return str;
	  }
	  var html = "";
	  var escaped;
	  var index;
	  var lastIndex = 0;
	  for (index = match.index; index < str.length; index++) {
	    switch (str.charCodeAt(index)) {
	      case 34:
	        escaped = "&quot;";
	        break;
	      case 38:
	        escaped = "&amp;";
	        break;
	      case 39:
	        escaped = "&#39;";
	        break;
	      case 60:
	        escaped = "&lt;";
	        break;
	      case 62:
	        escaped = "&gt;";
	        break;
	      default:
	        continue;
	    }
	    if (lastIndex !== index) {
	      html += str.slice(lastIndex, index);
	    }
	    lastIndex = index + 1;
	    html += escaped;
	  }
	  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
	}
	var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
	function escapeHtmlComment(src) {
	  return src.replace(commentStripRE, "");
	}

	function looseCompareArrays(a, b) {
	  if (a.length !== b.length)
	    { return false; }
	  var equal = true;
	  for (var i = 0; equal && i < a.length; i++) {
	    equal = looseEqual(a[i], b[i]);
	  }
	  return equal;
	}
	function looseEqual(a, b) {
	  if (a === b)
	    { return true; }
	  var aValidType = isDate(a);
	  var bValidType = isDate(b);
	  if (aValidType || bValidType) {
	    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
	  }
	  aValidType = isSymbol(a);
	  bValidType = isSymbol(b);
	  if (aValidType || bValidType) {
	    return a === b;
	  }
	  aValidType = isArray(a);
	  bValidType = isArray(b);
	  if (aValidType || bValidType) {
	    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
	  }
	  aValidType = isObject(a);
	  bValidType = isObject(b);
	  if (aValidType || bValidType) {
	    if (!aValidType || !bValidType) {
	      return false;
	    }
	    var aKeysCount = Object.keys(a).length;
	    var bKeysCount = Object.keys(b).length;
	    if (aKeysCount !== bKeysCount) {
	      return false;
	    }
	    for (var key in a) {
	      var aHasKey = a.hasOwnProperty(key);
	      var bHasKey = b.hasOwnProperty(key);
	      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
	        return false;
	      }
	    }
	  }
	  return String(a) === String(b);
	}
	function looseIndexOf(arr, val) {
	  return arr.findIndex(function (item) { return looseEqual(item, val); });
	}

	var toDisplayString = function (val) {
	  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
	};
	var replacer = function (_key, val) {
	  var obj, obj$1;

	  if (val && val.__v_isRef) {
	    return replacer(_key, val.value);
	  } else if (isMap(val)) {
	    return ( obj = {}, obj[("Map(" + (val.size) + ")")] = [].concat( val.entries() ).reduce(function (entries, ref) {
	        var key = ref[0];
	        var val2 = ref[1];

	        entries[(key + " =>")] = val2;
	        return entries;
	      }, {}), obj );
	  } else if (isSet(val)) {
	    return ( obj$1 = {}, obj$1[("Set(" + (val.size) + ")")] = [].concat( val.values() ), obj$1 );
	  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
	    return String(val);
	  }
	  return val;
	};

	var shared_esmBundler = /*#__PURE__*/Object.freeze({
		__proto__: null,
		EMPTY_ARR: EMPTY_ARR,
		EMPTY_OBJ: EMPTY_OBJ,
		NO: NO,
		NOOP: NOOP,
		PatchFlagNames: PatchFlagNames,
		camelize: camelize,
		capitalize: capitalize,
		def: def,
		escapeHtml: escapeHtml,
		escapeHtmlComment: escapeHtmlComment,
		extend: extend,
		genPropsAccessExp: genPropsAccessExp,
		generateCodeFrame: generateCodeFrame,
		getGlobalThis: getGlobalThis,
		hasChanged: hasChanged,
		hasOwn: hasOwn,
		hyphenate: hyphenate,
		includeBooleanAttr: includeBooleanAttr,
		invokeArrayFns: invokeArrayFns,
		isArray: isArray,
		isBooleanAttr: isBooleanAttr,
		isBuiltInDirective: isBuiltInDirective,
		isDate: isDate,
		isFunction: isFunction,
		isGloballyWhitelisted: isGloballyWhitelisted,
		isHTMLTag: isHTMLTag,
		isIntegerKey: isIntegerKey,
		isKnownHtmlAttr: isKnownHtmlAttr,
		isKnownSvgAttr: isKnownSvgAttr,
		isMap: isMap,
		isModelListener: isModelListener,
		isObject: isObject,
		isOn: isOn,
		isPlainObject: isPlainObject,
		isPromise: isPromise,
		isRegExp: isRegExp,
		isReservedProp: isReservedProp,
		isSSRSafeAttrName: isSSRSafeAttrName,
		isSVGTag: isSVGTag,
		isSet: isSet,
		isSpecialBooleanAttr: isSpecialBooleanAttr,
		isString: isString,
		isSymbol: isSymbol,
		isVoidTag: isVoidTag,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		looseToNumber: looseToNumber,
		makeMap: makeMap,
		normalizeClass: normalizeClass,
		normalizeProps: normalizeProps,
		normalizeStyle: normalizeStyle,
		objectToString: objectToString,
		parseStringStyle: parseStringStyle,
		propsToAttrMap: propsToAttrMap,
		remove: remove,
		slotFlagsText: slotFlagsText,
		stringifyStyle: stringifyStyle,
		toDisplayString: toDisplayString,
		toHandlerKey: toHandlerKey,
		toNumber: toNumber,
		toRawType: toRawType,
		toTypeString: toTypeString
	});

	function defaultOnError(error) {
	  throw error;
	}
	function defaultOnWarn(msg) {
	  !!(process.env.NODE_ENV !== "production") && console.warn(("[Vue warn] " + (msg.message)));
	}
	function createCompilerError(code, loc, messages, additionalMessage) {
	  var msg = !!(process.env.NODE_ENV !== "production") || false ? (messages || errorMessages)[code] + (additionalMessage || "") : code;
	  var error = new SyntaxError(String(msg));
	  error.code = code;
	  error.loc = loc;
	  return error;
	}
	var errorMessages = {};
	errorMessages[0] = "Illegal comment.";
	errorMessages[1] = "CDATA section is allowed only in XML context.";
	errorMessages[2] = "Duplicate attribute.";
	errorMessages[3] = "End tag cannot have attributes.";
	errorMessages[4] = "Illegal '/' in tags.";
	errorMessages[5] = "Unexpected EOF in tag.";
	errorMessages[6] = "Unexpected EOF in CDATA section.";
	errorMessages[7] = "Unexpected EOF in comment.";
	errorMessages[8] = "Unexpected EOF in script.";
	errorMessages[9] = "Unexpected EOF in tag.";
	errorMessages[10] = "Incorrectly closed comment.";
	errorMessages[11] = "Incorrectly opened comment.";
	errorMessages[12] = "Illegal tag name. Use '&lt;' to print '<'.";
	errorMessages[13] = "Attribute value was expected.";
	errorMessages[14] = "End tag name was expected.";
	errorMessages[15] = "Whitespace was expected.";
	errorMessages[16] = "Unexpected '<!--' in comment.";
	errorMessages[17] = "Attribute name cannot contain U+0022 (\"), U+0027 ('), and U+003C (<).";
	errorMessages[18] = "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).";
	errorMessages[19] = "Attribute name cannot start with '='.";
	errorMessages[21] = "'<?' is allowed only in XML context.";
	errorMessages[20] = "Unexpected null character.";
	errorMessages[22] = "Illegal '/' in tags.";
	errorMessages[23] = "Invalid end tag.";
	errorMessages[24] = "Element is missing end tag.";
	errorMessages[25] = "Interpolation end sign was not found.";
	errorMessages[27] = "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.";
	errorMessages[26] = "Legal directive name was expected.";
	errorMessages[28] = "v-if/v-else-if is missing expression.";
	errorMessages[29] = "v-if/else branches must use unique keys.";
	errorMessages[30] = "v-else/v-else-if has no adjacent v-if or v-else-if.";
	errorMessages[31] = "v-for is missing expression.";
	errorMessages[32] = "v-for has invalid expression.";
	errorMessages[33] = "<template v-for> key should be placed on the <template> tag.";
	errorMessages[34] = "v-bind is missing expression.";
	errorMessages[35] = "v-on is missing expression.";
	errorMessages[36] = "Unexpected custom directive on <slot> outlet.";
	errorMessages[37] = "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.";
	errorMessages[38] = "Duplicate slot names found. ";
	errorMessages[39] = "Extraneous children found when component already has explicitly named default slot. These children will be ignored.";
	errorMessages[40] = "v-slot can only be used on components or <template> tags.";
	errorMessages[41] = "v-model is missing expression.";
	errorMessages[42] = "v-model value must be a valid JavaScript member expression.";
	errorMessages[43] = "v-model cannot be used on v-for or v-slot scope variables because they are not writable.";
	errorMessages[44] = "v-model cannot be used on a prop, because local prop bindings are not writable.\nUse a v-bind binding combined with a v-on listener that emits update:x event instead.";
	errorMessages[45] = "Error parsing JavaScript expression: ";
	errorMessages[46] = "<KeepAlive> expects exactly one child component.";
	errorMessages[47] = "\"prefixIdentifiers\" option is not supported in this build of compiler.";
	errorMessages[48] = "ES module mode is not supported in this build of compiler.";
	errorMessages[49] = "\"cacheHandlers\" option is only supported when the \"prefixIdentifiers\" option is enabled.";
	errorMessages[50] = "\"scopeId\" option is only supported in module mode.";
	errorMessages[51] = "@vnode-* hooks in templates are deprecated. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support will be removed in 3.4.";
	errorMessages[52] = "v-is=\"component-name\" has been deprecated. Use is=\"vue:component-name\" instead. v-is support will be removed in 3.4.";
	errorMessages[53] = "";

	var FRAGMENT = Symbol(!!(process.env.NODE_ENV !== "production") ? "Fragment" : "");
	var TELEPORT = Symbol(!!(process.env.NODE_ENV !== "production") ? "Teleport" : "");
	var SUSPENSE = Symbol(!!(process.env.NODE_ENV !== "production") ? "Suspense" : "");
	var KEEP_ALIVE = Symbol(!!(process.env.NODE_ENV !== "production") ? "KeepAlive" : "");
	var BASE_TRANSITION = Symbol(!!(process.env.NODE_ENV !== "production") ? "BaseTransition" : "");
	var OPEN_BLOCK = Symbol(!!(process.env.NODE_ENV !== "production") ? "openBlock" : "");
	var CREATE_BLOCK = Symbol(!!(process.env.NODE_ENV !== "production") ? "createBlock" : "");
	var CREATE_ELEMENT_BLOCK = Symbol(!!(process.env.NODE_ENV !== "production") ? "createElementBlock" : "");
	var CREATE_VNODE = Symbol(!!(process.env.NODE_ENV !== "production") ? "createVNode" : "");
	var CREATE_ELEMENT_VNODE = Symbol(!!(process.env.NODE_ENV !== "production") ? "createElementVNode" : "");
	var CREATE_COMMENT = Symbol(!!(process.env.NODE_ENV !== "production") ? "createCommentVNode" : "");
	var CREATE_TEXT = Symbol(!!(process.env.NODE_ENV !== "production") ? "createTextVNode" : "");
	var CREATE_STATIC = Symbol(!!(process.env.NODE_ENV !== "production") ? "createStaticVNode" : "");
	var RESOLVE_COMPONENT = Symbol(!!(process.env.NODE_ENV !== "production") ? "resolveComponent" : "");
	var RESOLVE_DYNAMIC_COMPONENT = Symbol(
	  !!(process.env.NODE_ENV !== "production") ? "resolveDynamicComponent" : ""
	);
	var RESOLVE_DIRECTIVE = Symbol(!!(process.env.NODE_ENV !== "production") ? "resolveDirective" : "");
	var RESOLVE_FILTER = Symbol(!!(process.env.NODE_ENV !== "production") ? "resolveFilter" : "");
	var WITH_DIRECTIVES = Symbol(!!(process.env.NODE_ENV !== "production") ? "withDirectives" : "");
	var RENDER_LIST = Symbol(!!(process.env.NODE_ENV !== "production") ? "renderList" : "");
	var RENDER_SLOT = Symbol(!!(process.env.NODE_ENV !== "production") ? "renderSlot" : "");
	var CREATE_SLOTS = Symbol(!!(process.env.NODE_ENV !== "production") ? "createSlots" : "");
	var TO_DISPLAY_STRING = Symbol(!!(process.env.NODE_ENV !== "production") ? "toDisplayString" : "");
	var MERGE_PROPS = Symbol(!!(process.env.NODE_ENV !== "production") ? "mergeProps" : "");
	var NORMALIZE_CLASS = Symbol(!!(process.env.NODE_ENV !== "production") ? "normalizeClass" : "");
	var NORMALIZE_STYLE = Symbol(!!(process.env.NODE_ENV !== "production") ? "normalizeStyle" : "");
	var NORMALIZE_PROPS = Symbol(!!(process.env.NODE_ENV !== "production") ? "normalizeProps" : "");
	var GUARD_REACTIVE_PROPS = Symbol(!!(process.env.NODE_ENV !== "production") ? "guardReactiveProps" : "");
	var TO_HANDLERS = Symbol(!!(process.env.NODE_ENV !== "production") ? "toHandlers" : "");
	var CAMELIZE = Symbol(!!(process.env.NODE_ENV !== "production") ? "camelize" : "");
	var CAPITALIZE = Symbol(!!(process.env.NODE_ENV !== "production") ? "capitalize" : "");
	var TO_HANDLER_KEY = Symbol(!!(process.env.NODE_ENV !== "production") ? "toHandlerKey" : "");
	var SET_BLOCK_TRACKING = Symbol(!!(process.env.NODE_ENV !== "production") ? "setBlockTracking" : "");
	var PUSH_SCOPE_ID = Symbol(!!(process.env.NODE_ENV !== "production") ? "pushScopeId" : "");
	var POP_SCOPE_ID = Symbol(!!(process.env.NODE_ENV !== "production") ? "popScopeId" : "");
	var WITH_CTX = Symbol(!!(process.env.NODE_ENV !== "production") ? "withCtx" : "");
	var UNREF = Symbol(!!(process.env.NODE_ENV !== "production") ? "unref" : "");
	var IS_REF = Symbol(!!(process.env.NODE_ENV !== "production") ? "isRef" : "");
	var WITH_MEMO = Symbol(!!(process.env.NODE_ENV !== "production") ? "withMemo" : "");
	var IS_MEMO_SAME = Symbol(!!(process.env.NODE_ENV !== "production") ? "isMemoSame" : "");
	var helperNameMap = {};
	helperNameMap[FRAGMENT] = "Fragment";
	helperNameMap[TELEPORT] = "Teleport";
	helperNameMap[SUSPENSE] = "Suspense";
	helperNameMap[KEEP_ALIVE] = "KeepAlive";
	helperNameMap[BASE_TRANSITION] = "BaseTransition";
	helperNameMap[OPEN_BLOCK] = "openBlock";
	helperNameMap[CREATE_BLOCK] = "createBlock";
	helperNameMap[CREATE_ELEMENT_BLOCK] = "createElementBlock";
	helperNameMap[CREATE_VNODE] = "createVNode";
	helperNameMap[CREATE_ELEMENT_VNODE] = "createElementVNode";
	helperNameMap[CREATE_COMMENT] = "createCommentVNode";
	helperNameMap[CREATE_TEXT] = "createTextVNode";
	helperNameMap[CREATE_STATIC] = "createStaticVNode";
	helperNameMap[RESOLVE_COMPONENT] = "resolveComponent";
	helperNameMap[RESOLVE_DYNAMIC_COMPONENT] = "resolveDynamicComponent";
	helperNameMap[RESOLVE_DIRECTIVE] = "resolveDirective";
	helperNameMap[RESOLVE_FILTER] = "resolveFilter";
	helperNameMap[WITH_DIRECTIVES] = "withDirectives";
	helperNameMap[RENDER_LIST] = "renderList";
	helperNameMap[RENDER_SLOT] = "renderSlot";
	helperNameMap[CREATE_SLOTS] = "createSlots";
	helperNameMap[TO_DISPLAY_STRING] = "toDisplayString";
	helperNameMap[MERGE_PROPS] = "mergeProps";
	helperNameMap[NORMALIZE_CLASS] = "normalizeClass";
	helperNameMap[NORMALIZE_STYLE] = "normalizeStyle";
	helperNameMap[NORMALIZE_PROPS] = "normalizeProps";
	helperNameMap[GUARD_REACTIVE_PROPS] = "guardReactiveProps";
	helperNameMap[TO_HANDLERS] = "toHandlers";
	helperNameMap[CAMELIZE] = "camelize";
	helperNameMap[CAPITALIZE] = "capitalize";
	helperNameMap[TO_HANDLER_KEY] = "toHandlerKey";
	helperNameMap[SET_BLOCK_TRACKING] = "setBlockTracking";
	helperNameMap[PUSH_SCOPE_ID] = "pushScopeId";
	helperNameMap[POP_SCOPE_ID] = "popScopeId";
	helperNameMap[WITH_CTX] = "withCtx";
	helperNameMap[UNREF] = "unref";
	helperNameMap[IS_REF] = "isRef";
	helperNameMap[WITH_MEMO] = "withMemo";
	helperNameMap[IS_MEMO_SAME] = "isMemoSame";
	function registerRuntimeHelpers(helpers) {
	  Object.getOwnPropertySymbols(helpers).forEach(function (s) {
	    helperNameMap[s] = helpers[s];
	  });
	}

	var locStub = {
	  source: "",
	  start: { line: 1, column: 1, offset: 0 },
	  end: { line: 1, column: 1, offset: 0 }
	};
	function createRoot(children, loc) {
	  if ( loc === void 0 ) loc = locStub;

	  return {
	    type: 0,
	    children: children,
	    helpers: /* @__PURE__ */ new Set(),
	    components: [],
	    directives: [],
	    hoists: [],
	    imports: [],
	    cached: 0,
	    temps: 0,
	    codegenNode: void 0,
	    loc: loc
	  };
	}
	function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking, isComponent, loc) {
	  if ( isBlock === void 0 ) isBlock = false;
	  if ( disableTracking === void 0 ) disableTracking = false;
	  if ( isComponent === void 0 ) isComponent = false;
	  if ( loc === void 0 ) loc = locStub;

	  if (context) {
	    if (isBlock) {
	      context.helper(OPEN_BLOCK);
	      context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
	    } else {
	      context.helper(getVNodeHelper(context.inSSR, isComponent));
	    }
	    if (directives) {
	      context.helper(WITH_DIRECTIVES);
	    }
	  }
	  return {
	    type: 13,
	    tag: tag,
	    props: props,
	    children: children,
	    patchFlag: patchFlag,
	    dynamicProps: dynamicProps,
	    directives: directives,
	    isBlock: isBlock,
	    disableTracking: disableTracking,
	    isComponent: isComponent,
	    loc: loc
	  };
	}
	function createArrayExpression(elements, loc) {
	  if ( loc === void 0 ) loc = locStub;

	  return {
	    type: 17,
	    loc: loc,
	    elements: elements
	  };
	}
	function createObjectExpression(properties, loc) {
	  if ( loc === void 0 ) loc = locStub;

	  return {
	    type: 15,
	    loc: loc,
	    properties: properties
	  };
	}
	function createObjectProperty(key, value) {
	  return {
	    type: 16,
	    loc: locStub,
	    key: isString(key) ? createSimpleExpression(key, true) : key,
	    value: value
	  };
	}
	function createSimpleExpression(content, isStatic, loc, constType) {
	  if ( isStatic === void 0 ) isStatic = false;
	  if ( loc === void 0 ) loc = locStub;
	  if ( constType === void 0 ) constType = 0;

	  return {
	    type: 4,
	    loc: loc,
	    content: content,
	    isStatic: isStatic,
	    constType: isStatic ? 3 : constType
	  };
	}
	function createInterpolation(content, loc) {
	  return {
	    type: 5,
	    loc: loc,
	    content: isString(content) ? createSimpleExpression(content, false, loc) : content
	  };
	}
	function createCompoundExpression(children, loc) {
	  if ( loc === void 0 ) loc = locStub;

	  return {
	    type: 8,
	    loc: loc,
	    children: children
	  };
	}
	function createCallExpression(callee, args, loc) {
	  if ( args === void 0 ) args = [];
	  if ( loc === void 0 ) loc = locStub;

	  return {
	    type: 14,
	    loc: loc,
	    callee: callee,
	    arguments: args
	  };
	}
	function createFunctionExpression(params, returns, newline, isSlot, loc) {
	  if ( returns === void 0 ) returns = void 0;
	  if ( newline === void 0 ) newline = false;
	  if ( isSlot === void 0 ) isSlot = false;
	  if ( loc === void 0 ) loc = locStub;

	  return {
	    type: 18,
	    params: params,
	    returns: returns,
	    newline: newline,
	    isSlot: isSlot,
	    loc: loc
	  };
	}
	function createConditionalExpression(test, consequent, alternate, newline) {
	  if ( newline === void 0 ) newline = true;

	  return {
	    type: 19,
	    test: test,
	    consequent: consequent,
	    alternate: alternate,
	    newline: newline,
	    loc: locStub
	  };
	}
	function createCacheExpression(index, value, isVNode) {
	  if ( isVNode === void 0 ) isVNode = false;

	  return {
	    type: 20,
	    index: index,
	    value: value,
	    isVNode: isVNode,
	    loc: locStub
	  };
	}
	function createBlockStatement(body) {
	  return {
	    type: 21,
	    body: body,
	    loc: locStub
	  };
	}
	function createTemplateLiteral(elements) {
	  return {
	    type: 22,
	    elements: elements,
	    loc: locStub
	  };
	}
	function createIfStatement(test, consequent, alternate) {
	  return {
	    type: 23,
	    test: test,
	    consequent: consequent,
	    alternate: alternate,
	    loc: locStub
	  };
	}
	function createAssignmentExpression(left, right) {
	  return {
	    type: 24,
	    left: left,
	    right: right,
	    loc: locStub
	  };
	}
	function createSequenceExpression(expressions) {
	  return {
	    type: 25,
	    expressions: expressions,
	    loc: locStub
	  };
	}
	function createReturnStatement(returns) {
	  return {
	    type: 26,
	    returns: returns,
	    loc: locStub
	  };
	}
	function getVNodeHelper(ssr, isComponent) {
	  return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
	}
	function getVNodeBlockHelper(ssr, isComponent) {
	  return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
	}
	function convertToBlock(node, ref) {
	  var helper = ref.helper;
	  var removeHelper = ref.removeHelper;
	  var inSSR = ref.inSSR;

	  if (!node.isBlock) {
	    node.isBlock = true;
	    removeHelper(getVNodeHelper(inSSR, node.isComponent));
	    helper(OPEN_BLOCK);
	    helper(getVNodeBlockHelper(inSSR, node.isComponent));
	  }
	}

	var isStaticExp = function (p) { return p.type === 4 && p.isStatic; };
	var isBuiltInType = function (tag, expected) { return tag === expected || tag === hyphenate(expected); };
	function isCoreComponent(tag) {
	  if (isBuiltInType(tag, "Teleport")) {
	    return TELEPORT;
	  } else if (isBuiltInType(tag, "Suspense")) {
	    return SUSPENSE;
	  } else if (isBuiltInType(tag, "KeepAlive")) {
	    return KEEP_ALIVE;
	  } else if (isBuiltInType(tag, "BaseTransition")) {
	    return BASE_TRANSITION;
	  }
	}
	var nonIdentifierRE = /^\d|[^\$\w]/;
	var isSimpleIdentifier = function (name) { return !nonIdentifierRE.test(name); };
	var validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
	var validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
	var whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
	var isMemberExpressionBrowser = function (path) {
	  path = path.trim().replace(whitespaceRE, function (s) { return s.trim(); });
	  var state = 0 /* inMemberExp */;
	  var stateStack = [];
	  var currentOpenBracketCount = 0;
	  var currentOpenParensCount = 0;
	  var currentStringType = null;
	  for (var i = 0; i < path.length; i++) {
	    var char = path.charAt(i);
	    switch (state) {
	      case 0 /* inMemberExp */:
	        if (char === "[") {
	          stateStack.push(state);
	          state = 1 /* inBrackets */;
	          currentOpenBracketCount++;
	        } else if (char === "(") {
	          stateStack.push(state);
	          state = 2 /* inParens */;
	          currentOpenParensCount++;
	        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
	          return false;
	        }
	        break;
	      case 1 /* inBrackets */:
	        if (char === "'" || char === "\"" || char === "`") {
	          stateStack.push(state);
	          state = 3 /* inString */;
	          currentStringType = char;
	        } else if (char === "[") {
	          currentOpenBracketCount++;
	        } else if (char === "]") {
	          if (!--currentOpenBracketCount) {
	            state = stateStack.pop();
	          }
	        }
	        break;
	      case 2 /* inParens */:
	        if (char === "'" || char === "\"" || char === "`") {
	          stateStack.push(state);
	          state = 3 /* inString */;
	          currentStringType = char;
	        } else if (char === "(") {
	          currentOpenParensCount++;
	        } else if (char === ")") {
	          if (i === path.length - 1) {
	            return false;
	          }
	          if (!--currentOpenParensCount) {
	            state = stateStack.pop();
	          }
	        }
	        break;
	      case 3 /* inString */:
	        if (char === currentStringType) {
	          state = stateStack.pop();
	          currentStringType = null;
	        }
	        break;
	    }
	  }
	  return !currentOpenBracketCount && !currentOpenParensCount;
	};
	var isMemberExpressionNode = NOOP ;
	var isMemberExpression = isMemberExpressionBrowser ;
	function getInnerRange(loc, offset, length) {
	  var source = loc.source.slice(offset, offset + length);
	  var newLoc = {
	    source: source,
	    start: advancePositionWithClone(loc.start, loc.source, offset),
	    end: loc.end
	  };
	  if (length != null) {
	    newLoc.end = advancePositionWithClone(
	      loc.start,
	      loc.source,
	      offset + length
	    );
	  }
	  return newLoc;
	}
	function advancePositionWithClone(pos, source, numberOfCharacters) {
	  if ( numberOfCharacters === void 0 ) numberOfCharacters = source.length;

	  return advancePositionWithMutation(
	    extend({}, pos),
	    source,
	    numberOfCharacters
	  );
	}
	function advancePositionWithMutation(pos, source, numberOfCharacters) {
	  if ( numberOfCharacters === void 0 ) numberOfCharacters = source.length;

	  var linesCount = 0;
	  var lastNewLinePos = -1;
	  for (var i = 0; i < numberOfCharacters; i++) {
	    if (source.charCodeAt(i) === 10) {
	      linesCount++;
	      lastNewLinePos = i;
	    }
	  }
	  pos.offset += numberOfCharacters;
	  pos.line += linesCount;
	  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
	  return pos;
	}
	function assert(condition, msg) {
	  if (!condition) {
	    throw new Error(msg || "unexpected compiler condition");
	  }
	}
	function findDir(node, name, allowEmpty) {
	  if ( allowEmpty === void 0 ) allowEmpty = false;

	  for (var i = 0; i < node.props.length; i++) {
	    var p = node.props[i];
	    if (p.type === 7 && (allowEmpty || p.exp) && (isString(name) ? p.name === name : name.test(p.name))) {
	      return p;
	    }
	  }
	}
	function findProp(node, name, dynamicOnly, allowEmpty) {
	  if ( dynamicOnly === void 0 ) dynamicOnly = false;
	  if ( allowEmpty === void 0 ) allowEmpty = false;

	  for (var i = 0; i < node.props.length; i++) {
	    var p = node.props[i];
	    if (p.type === 6) {
	      if (dynamicOnly)
	        { continue; }
	      if (p.name === name && (p.value || allowEmpty)) {
	        return p;
	      }
	    } else if (p.name === "bind" && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) {
	      return p;
	    }
	  }
	}
	function isStaticArgOf(arg, name) {
	  return !!(arg && isStaticExp(arg) && arg.content === name);
	}
	function hasDynamicKeyVBind(node) {
	  return node.props.some(
	    function (p) { return p.type === 7 && p.name === "bind" && (!p.arg || // v-bind="obj"
	    p.arg.type !== 4 || // v-bind:[_ctx.foo]
	    !p.arg.isStatic); }
	    // v-bind:[foo]
	  );
	}
	function isText$1(node) {
	  return node.type === 5 || node.type === 2;
	}
	function isVSlot(p) {
	  return p.type === 7 && p.name === "slot";
	}
	function isTemplateNode(node) {
	  return node.type === 1 && node.tagType === 3;
	}
	function isSlotOutlet(node) {
	  return node.type === 1 && node.tagType === 2;
	}
	var propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
	function getUnnormalizedProps(props, callPath) {
	  if ( callPath === void 0 ) callPath = [];

	  if (props && !isString(props) && props.type === 14) {
	    var callee = props.callee;
	    if (!isString(callee) && propsHelperSet.has(callee)) {
	      return getUnnormalizedProps(
	        props.arguments[0],
	        callPath.concat(props)
	      );
	    }
	  }
	  return [props, callPath];
	}
	function injectProp(node, prop, context) {
	  var propsWithInjection;
	  var props = node.type === 13 ? node.props : node.arguments[2];
	  var callPath = [];
	  var parentCall;
	  if (props && !isString(props) && props.type === 14) {
	    var ret = getUnnormalizedProps(props);
	    props = ret[0];
	    callPath = ret[1];
	    parentCall = callPath[callPath.length - 1];
	  }
	  if (props == null || isString(props)) {
	    propsWithInjection = createObjectExpression([prop]);
	  } else if (props.type === 14) {
	    var first = props.arguments[0];
	    if (!isString(first) && first.type === 15) {
	      if (!hasProp(prop, first)) {
	        first.properties.unshift(prop);
	      }
	    } else {
	      if (props.callee === TO_HANDLERS) {
	        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
	          createObjectExpression([prop]),
	          props
	        ]);
	      } else {
	        props.arguments.unshift(createObjectExpression([prop]));
	      }
	    }
	    !propsWithInjection && (propsWithInjection = props);
	  } else if (props.type === 15) {
	    if (!hasProp(prop, props)) {
	      props.properties.unshift(prop);
	    }
	    propsWithInjection = props;
	  } else {
	    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
	      createObjectExpression([prop]),
	      props
	    ]);
	    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
	      parentCall = callPath[callPath.length - 2];
	    }
	  }
	  if (node.type === 13) {
	    if (parentCall) {
	      parentCall.arguments[0] = propsWithInjection;
	    } else {
	      node.props = propsWithInjection;
	    }
	  } else {
	    if (parentCall) {
	      parentCall.arguments[0] = propsWithInjection;
	    } else {
	      node.arguments[2] = propsWithInjection;
	    }
	  }
	}
	function hasProp(prop, props) {
	  var result = false;
	  if (prop.key.type === 4) {
	    var propKeyName = prop.key.content;
	    result = props.properties.some(
	      function (p) { return p.key.type === 4 && p.key.content === propKeyName; }
	    );
	  }
	  return result;
	}
	function toValidAssetId(name, type) {
	  return ("_" + type + "_" + (name.replace(/[^\w]/g, function (searchValue, replaceValue) {
	    return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
	  })));
	}
	function hasScopeRef(node, ids) {
	  if (!node || Object.keys(ids).length === 0) {
	    return false;
	  }
	  switch (node.type) {
	    case 1:
	      for (var i = 0; i < node.props.length; i++) {
	        var p = node.props[i];
	        if (p.type === 7 && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
	          return true;
	        }
	      }
	      return node.children.some(function (c) { return hasScopeRef(c, ids); });
	    case 11:
	      if (hasScopeRef(node.source, ids)) {
	        return true;
	      }
	      return node.children.some(function (c) { return hasScopeRef(c, ids); });
	    case 9:
	      return node.branches.some(function (b) { return hasScopeRef(b, ids); });
	    case 10:
	      if (hasScopeRef(node.condition, ids)) {
	        return true;
	      }
	      return node.children.some(function (c) { return hasScopeRef(c, ids); });
	    case 4:
	      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];
	    case 8:
	      return node.children.some(function (c) { return isObject(c) && hasScopeRef(c, ids); });
	    case 5:
	    case 12:
	      return hasScopeRef(node.content, ids);
	    case 2:
	    case 3:
	      return false;
	    default:
	      if (!!(process.env.NODE_ENV !== "production")) ;
	      return false;
	  }
	}
	function getMemoedVNodeCall(node) {
	  if (node.type === 14 && node.callee === WITH_MEMO) {
	    return node.arguments[1].returns;
	  } else {
	    return node;
	  }
	}

	var deprecationData = {};
	deprecationData["COMPILER_IS_ON_ELEMENT"] = {
	    message: "Platform-native elements with \"is\" prop will no longer be treated as components in Vue 3 unless the \"is\" value is explicitly prefixed with \"vue:\".",
	    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
	  };
	deprecationData["COMPILER_V_BIND_SYNC"] = {
	    message: function (key) { return (".sync modifier for v-bind has been removed. Use v-model with argument instead. `v-bind:" + key + ".sync` should be changed to `v-model:" + key + "`."); },
	    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
	  };
	deprecationData["COMPILER_V_BIND_PROP"] = {
	    message: ".prop modifier for v-bind has been removed and no longer necessary. Vue 3 will automatically set a binding as DOM property when appropriate."
	  };
	deprecationData["COMPILER_V_BIND_OBJECT_ORDER"] = {
	    message: "v-bind=\"obj\" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.",
	    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
	  };
	deprecationData["COMPILER_V_ON_NATIVE"] = {
	    message: ".native modifier for v-on has been removed as is no longer necessary.",
	    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
	  };
	deprecationData["COMPILER_V_IF_V_FOR_PRECEDENCE"] = {
	    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
	    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
	  };
	deprecationData["COMPILER_NATIVE_TEMPLATE"] = {
	    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
	  };
	deprecationData["COMPILER_INLINE_TEMPLATE"] = {
	    message: "\"inline-template\" has been removed in Vue 3.",
	    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
	  };
	deprecationData["COMPILER_FILTER"] = {
	    message: "filters have been removed in Vue 3. The \"|\" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.",
	    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
	  };
	function getCompatValue(key, context) {
	  var config = context.options ? context.options.compatConfig : context.compatConfig;
	  var value = config && config[key];
	  if (key === "MODE") {
	    return value || 3;
	  } else {
	    return value;
	  }
	}
	function isCompatEnabled(key, context) {
	  var mode = getCompatValue("MODE", context);
	  var value = getCompatValue(key, context);
	  return mode === 3 ? value === true : value !== false;
	}
	function checkCompatEnabled(key, context, loc) {
	  var args = [], len = arguments.length - 3;
	  while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

	  var enabled = isCompatEnabled(key, context);
	  if (!!(process.env.NODE_ENV !== "production") && enabled) {
	    warnDeprecation.apply(void 0, [ key, context, loc ].concat( args ));
	  }
	  return enabled;
	}
	function warnDeprecation(key, context, loc) {
	  var args = [], len = arguments.length - 3;
	  while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

	  var val = getCompatValue(key, context);
	  if (val === "suppress-warning") {
	    return;
	  }
	  var ref = deprecationData[key];
	  var message = ref.message;
	  var link = ref.link;
	  var msg = "(deprecation " + key + ") " + (typeof message === "function" ? message.apply(void 0, args) : message) + (link ? ("\n  Details: " + link) : "");
	  var err = new SyntaxError(msg);
	  err.code = key;
	  if (loc)
	    { err.loc = loc; }
	  context.onWarn(err);
	}

	var decodeRE = /&(gt|lt|amp|apos|quot);/g;
	var decodeMap = {
	  gt: ">",
	  lt: "<",
	  amp: "&",
	  apos: "'",
	  quot: '"'
	};
	var defaultParserOptions = {
	  delimiters: ["{{", "}}"],
	  getNamespace: function () { return 0; },
	  getTextMode: function () { return 0; },
	  isVoidTag: NO,
	  isPreTag: NO,
	  isCustomElement: NO,
	  decodeEntities: function (rawText) { return rawText.replace(decodeRE, function (_, p1) { return decodeMap[p1]; }); },
	  onError: defaultOnError,
	  onWarn: defaultOnWarn,
	  comments: !!(process.env.NODE_ENV !== "production")
	};
	function baseParse(content, options) {
	  if ( options === void 0 ) options = {};

	  var context = createParserContext(content, options);
	  var start = getCursor(context);
	  return createRoot(
	    parseChildren(context, 0, []),
	    getSelection(context, start)
	  );
	}
	function createParserContext(content, rawOptions) {
	  var options = extend({}, defaultParserOptions);
	  var key;
	  for (key in rawOptions) {
	    options[key] = rawOptions[key] === void 0 ? defaultParserOptions[key] : rawOptions[key];
	  }
	  return {
	    options: options,
	    column: 1,
	    line: 1,
	    offset: 0,
	    originalSource: content,
	    source: content,
	    inPre: false,
	    inVPre: false,
	    onWarn: options.onWarn
	  };
	}
	function parseChildren(context, mode, ancestors) {
	  var parent = last(ancestors);
	  var ns = parent ? parent.ns : 0;
	  var nodes = [];
	  while (!isEnd(context, mode, ancestors)) {
	    var s = context.source;
	    var node = void 0;
	    if (mode === 0 || mode === 1) {
	      if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
	        node = parseInterpolation(context, mode);
	      } else if (mode === 0 && s[0] === "<") {
	        if (s.length === 1) {
	          emitError(context, 5, 1);
	        } else if (s[1] === "!") {
	          if (startsWith(s, "<!--")) {
	            node = parseComment(context);
	          } else if (startsWith(s, "<!DOCTYPE")) {
	            node = parseBogusComment(context);
	          } else if (startsWith(s, "<![CDATA[")) {
	            if (ns !== 0) {
	              node = parseCDATA(context, ancestors);
	            } else {
	              emitError(context, 1);
	              node = parseBogusComment(context);
	            }
	          } else {
	            emitError(context, 11);
	            node = parseBogusComment(context);
	          }
	        } else if (s[1] === "/") {
	          if (s.length === 2) {
	            emitError(context, 5, 2);
	          } else if (s[2] === ">") {
	            emitError(context, 14, 2);
	            advanceBy(context, 3);
	            continue;
	          } else if (/[a-z]/i.test(s[2])) {
	            emitError(context, 23);
	            parseTag(context, TagType.End, parent);
	            continue;
	          } else {
	            emitError(
	              context,
	              12,
	              2
	            );
	            node = parseBogusComment(context);
	          }
	        } else if (/[a-z]/i.test(s[1])) {
	          node = parseElement(context, ancestors);
	          if (isCompatEnabled(
	            "COMPILER_NATIVE_TEMPLATE",
	            context
	          ) && node && node.tag === "template" && !node.props.some(
	            function (p) { return p.type === 7 && isSpecialTemplateDirective(p.name); }
	          )) {
	            !!(process.env.NODE_ENV !== "production") && warnDeprecation(
	              "COMPILER_NATIVE_TEMPLATE",
	              context,
	              node.loc
	            );
	            node = node.children;
	          }
	        } else if (s[1] === "?") {
	          emitError(
	            context,
	            21,
	            1
	          );
	          node = parseBogusComment(context);
	        } else {
	          emitError(context, 12, 1);
	        }
	      }
	    }
	    if (!node) {
	      node = parseText(context, mode);
	    }
	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        pushNode(nodes, node[i]);
	      }
	    } else {
	      pushNode(nodes, node);
	    }
	  }
	  var removedWhitespace = false;
	  if (mode !== 2 && mode !== 1) {
	    var shouldCondense = context.options.whitespace !== "preserve";
	    for (var i$1 = 0; i$1 < nodes.length; i$1++) {
	      var node$1 = nodes[i$1];
	      if (node$1.type === 2) {
	        if (!context.inPre) {
	          if (!/[^\t\r\n\f ]/.test(node$1.content)) {
	            var prev = nodes[i$1 - 1];
	            var next = nodes[i$1 + 1];
	            if (!prev || !next || shouldCondense && (prev.type === 3 && next.type === 3 || prev.type === 3 && next.type === 1 || prev.type === 1 && next.type === 3 || prev.type === 1 && next.type === 1 && /[\r\n]/.test(node$1.content))) {
	              removedWhitespace = true;
	              nodes[i$1] = null;
	            } else {
	              node$1.content = " ";
	            }
	          } else if (shouldCondense) {
	            node$1.content = node$1.content.replace(/[\t\r\n\f ]+/g, " ");
	          }
	        } else {
	          node$1.content = node$1.content.replace(/\r\n/g, "\n");
	        }
	      } else if (node$1.type === 3 && !context.options.comments) {
	        removedWhitespace = true;
	        nodes[i$1] = null;
	      }
	    }
	    if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
	      var first = nodes[0];
	      if (first && first.type === 2) {
	        first.content = first.content.replace(/^\r?\n/, "");
	      }
	    }
	  }
	  return removedWhitespace ? nodes.filter(Boolean) : nodes;
	}
	function pushNode(nodes, node) {
	  if (node.type === 2) {
	    var prev = last(nodes);
	    if (prev && prev.type === 2 && prev.loc.end.offset === node.loc.start.offset) {
	      prev.content += node.content;
	      prev.loc.end = node.loc.end;
	      prev.loc.source += node.loc.source;
	      return;
	    }
	  }
	  nodes.push(node);
	}
	function parseCDATA(context, ancestors) {
	  advanceBy(context, 9);
	  var nodes = parseChildren(context, 3, ancestors);
	  if (context.source.length === 0) {
	    emitError(context, 6);
	  } else {
	    advanceBy(context, 3);
	  }
	  return nodes;
	}
	function parseComment(context) {
	  var start = getCursor(context);
	  var content;
	  var match = /--(\!)?>/.exec(context.source);
	  if (!match) {
	    content = context.source.slice(4);
	    advanceBy(context, context.source.length);
	    emitError(context, 7);
	  } else {
	    if (match.index <= 3) {
	      emitError(context, 0);
	    }
	    if (match[1]) {
	      emitError(context, 10);
	    }
	    content = context.source.slice(4, match.index);
	    var s = context.source.slice(0, match.index);
	    var prevIndex = 1, nestedIndex = 0;
	    while ((nestedIndex = s.indexOf("<!--", prevIndex)) !== -1) {
	      advanceBy(context, nestedIndex - prevIndex + 1);
	      if (nestedIndex + 4 < s.length) {
	        emitError(context, 16);
	      }
	      prevIndex = nestedIndex + 1;
	    }
	    advanceBy(context, match.index + match[0].length - prevIndex + 1);
	  }
	  return {
	    type: 3,
	    content: content,
	    loc: getSelection(context, start)
	  };
	}
	function parseBogusComment(context) {
	  var start = getCursor(context);
	  var contentStart = context.source[1] === "?" ? 1 : 2;
	  var content;
	  var closeIndex = context.source.indexOf(">");
	  if (closeIndex === -1) {
	    content = context.source.slice(contentStart);
	    advanceBy(context, context.source.length);
	  } else {
	    content = context.source.slice(contentStart, closeIndex);
	    advanceBy(context, closeIndex + 1);
	  }
	  return {
	    type: 3,
	    content: content,
	    loc: getSelection(context, start)
	  };
	}
	function parseElement(context, ancestors) {
	  var wasInPre = context.inPre;
	  var wasInVPre = context.inVPre;
	  var parent = last(ancestors);
	  var element = parseTag(context, TagType.Start, parent);
	  var isPreBoundary = context.inPre && !wasInPre;
	  var isVPreBoundary = context.inVPre && !wasInVPre;
	  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
	    if (isPreBoundary) {
	      context.inPre = false;
	    }
	    if (isVPreBoundary) {
	      context.inVPre = false;
	    }
	    return element;
	  }
	  ancestors.push(element);
	  var mode = context.options.getTextMode(element, parent);
	  var children = parseChildren(context, mode, ancestors);
	  ancestors.pop();
	  {
	    var inlineTemplateProp = element.props.find(
	      function (p) { return p.type === 6 && p.name === "inline-template"; }
	    );
	    if (inlineTemplateProp && checkCompatEnabled(
	      "COMPILER_INLINE_TEMPLATE",
	      context,
	      inlineTemplateProp.loc
	    )) {
	      var loc = getSelection(context, element.loc.end);
	      inlineTemplateProp.value = {
	        type: 2,
	        content: loc.source,
	        loc: loc
	      };
	    }
	  }
	  element.children = children;
	  if (startsWithEndTagOpen(context.source, element.tag)) {
	    parseTag(context, TagType.End, parent);
	  } else {
	    emitError(context, 24, 0, element.loc.start);
	    if (context.source.length === 0 && element.tag.toLowerCase() === "script") {
	      var first = children[0];
	      if (first && startsWith(first.loc.source, "<!--")) {
	        emitError(context, 8);
	      }
	    }
	  }
	  element.loc = getSelection(context, element.loc.start);
	  if (isPreBoundary) {
	    context.inPre = false;
	  }
	  if (isVPreBoundary) {
	    context.inVPre = false;
	  }
	  return element;
	}
	var TagType = /* @__PURE__ */ (function (TagType2) {
	  TagType2[TagType2["Start"] = 0] = "Start";
	  TagType2[TagType2["End"] = 1] = "End";
	  return TagType2;
	})(TagType || {});
	var isSpecialTemplateDirective = /* @__PURE__ */ makeMap(
	  "if,else,else-if,for,slot"
	);
	function parseTag(context, type, parent) {
	  var start = getCursor(context);
	  var match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
	  var tag = match[1];
	  var ns = context.options.getNamespace(tag, parent);
	  advanceBy(context, match[0].length);
	  advanceSpaces(context);
	  var cursor = getCursor(context);
	  var currentSource = context.source;
	  if (context.options.isPreTag(tag)) {
	    context.inPre = true;
	  }
	  var props = parseAttributes(context, type);
	  if (type === 0 /* Start */ && !context.inVPre && props.some(function (p) { return p.type === 7 && p.name === "pre"; })) {
	    context.inVPre = true;
	    extend(context, cursor);
	    context.source = currentSource;
	    props = parseAttributes(context, type).filter(function (p) { return p.name !== "v-pre"; });
	  }
	  var isSelfClosing = false;
	  if (context.source.length === 0) {
	    emitError(context, 9);
	  } else {
	    isSelfClosing = startsWith(context.source, "/>");
	    if (type === 1 /* End */ && isSelfClosing) {
	      emitError(context, 4);
	    }
	    advanceBy(context, isSelfClosing ? 2 : 1);
	  }
	  if (type === 1 /* End */) {
	    return;
	  }
	  if (!!(process.env.NODE_ENV !== "production") && isCompatEnabled(
	    "COMPILER_V_IF_V_FOR_PRECEDENCE",
	    context
	  )) {
	    var hasIf = false;
	    var hasFor = false;
	    for (var i = 0; i < props.length; i++) {
	      var p = props[i];
	      if (p.type === 7) {
	        if (p.name === "if") {
	          hasIf = true;
	        } else if (p.name === "for") {
	          hasFor = true;
	        }
	      }
	      if (hasIf && hasFor) {
	        warnDeprecation(
	          "COMPILER_V_IF_V_FOR_PRECEDENCE",
	          context,
	          getSelection(context, start)
	        );
	        break;
	      }
	    }
	  }
	  var tagType = 0;
	  if (!context.inVPre) {
	    if (tag === "slot") {
	      tagType = 2;
	    } else if (tag === "template") {
	      if (props.some(
	        function (p) { return p.type === 7 && isSpecialTemplateDirective(p.name); }
	      )) {
	        tagType = 3;
	      }
	    } else if (isComponent(tag, props, context)) {
	      tagType = 1;
	    }
	  }
	  return {
	    type: 1,
	    ns: ns,
	    tag: tag,
	    tagType: tagType,
	    props: props,
	    isSelfClosing: isSelfClosing,
	    children: [],
	    loc: getSelection(context, start),
	    codegenNode: void 0
	    // to be created during transform phase
	  };
	}
	function isComponent(tag, props, context) {
	  var options = context.options;
	  if (options.isCustomElement(tag)) {
	    return false;
	  }
	  if (tag === "component" || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
	    return true;
	  }
	  for (var i = 0; i < props.length; i++) {
	    var p = props[i];
	    if (p.type === 6) {
	      if (p.name === "is" && p.value) {
	        if (p.value.content.startsWith("vue:")) {
	          return true;
	        } else if (checkCompatEnabled(
	          "COMPILER_IS_ON_ELEMENT",
	          context,
	          p.loc
	        )) {
	          return true;
	        }
	      }
	    } else {
	      if (p.name === "is") {
	        return true;
	      } else if (
	        // :is on plain element - only treat as component in compat mode
	        p.name === "bind" && isStaticArgOf(p.arg, "is") && true && checkCompatEnabled(
	          "COMPILER_IS_ON_ELEMENT",
	          context,
	          p.loc
	        )
	      ) {
	        return true;
	      }
	    }
	  }
	}
	function parseAttributes(context, type) {
	  var props = [];
	  var attributeNames = /* @__PURE__ */ new Set();
	  while (context.source.length > 0 && !startsWith(context.source, ">") && !startsWith(context.source, "/>")) {
	    if (startsWith(context.source, "/")) {
	      emitError(context, 22);
	      advanceBy(context, 1);
	      advanceSpaces(context);
	      continue;
	    }
	    if (type === 1 /* End */) {
	      emitError(context, 3);
	    }
	    var attr = parseAttribute(context, attributeNames);
	    if (attr.type === 6 && attr.value && attr.name === "class") {
	      attr.value.content = attr.value.content.replace(/\s+/g, " ").trim();
	    }
	    if (type === 0 /* Start */) {
	      props.push(attr);
	    }
	    if (/^[^\t\r\n\f />]/.test(context.source)) {
	      emitError(context, 15);
	    }
	    advanceSpaces(context);
	  }
	  return props;
	}
	function parseAttribute(context, nameSet) {
	  var _a;
	  var start = getCursor(context);
	  var match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
	  var name = match[0];
	  if (nameSet.has(name)) {
	    emitError(context, 2);
	  }
	  nameSet.add(name);
	  if (name[0] === "=") {
	    emitError(context, 19);
	  }
	  {
	    var pattern = /["'<]/g;
	    var m;
	    while (m = pattern.exec(name)) {
	      emitError(
	        context,
	        17,
	        m.index
	      );
	    }
	  }
	  advanceBy(context, name.length);
	  var value = void 0;
	  if (/^[\t\r\n\f ]*=/.test(context.source)) {
	    advanceSpaces(context);
	    advanceBy(context, 1);
	    advanceSpaces(context);
	    value = parseAttributeValue(context);
	    if (!value) {
	      emitError(context, 13);
	    }
	  }
	  var loc = getSelection(context, start);
	  if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
	    var match2 = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(
	      name
	    );
	    var isPropShorthand = startsWith(name, ".");
	    var dirName = match2[1] || (isPropShorthand || startsWith(name, ":") ? "bind" : startsWith(name, "@") ? "on" : "slot");
	    var arg;
	    if (match2[2]) {
	      var isSlot = dirName === "slot";
	      var startOffset = name.lastIndexOf(
	        match2[2],
	        name.length - (((_a = match2[3]) == null ? void 0 : _a.length) || 0)
	      );
	      var loc2 = getSelection(
	        context,
	        getNewPosition(context, start, startOffset),
	        getNewPosition(
	          context,
	          start,
	          startOffset + match2[2].length + (isSlot && match2[3] || "").length
	        )
	      );
	      var content = match2[2];
	      var isStatic = true;
	      if (content.startsWith("[")) {
	        isStatic = false;
	        if (!content.endsWith("]")) {
	          emitError(
	            context,
	            27
	          );
	          content = content.slice(1);
	        } else {
	          content = content.slice(1, content.length - 1);
	        }
	      } else if (isSlot) {
	        content += match2[3] || "";
	      }
	      arg = {
	        type: 4,
	        content: content,
	        isStatic: isStatic,
	        constType: isStatic ? 3 : 0,
	        loc: loc2
	      };
	    }
	    if (value && value.isQuoted) {
	      var valueLoc = value.loc;
	      valueLoc.start.offset++;
	      valueLoc.start.column++;
	      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
	      valueLoc.source = valueLoc.source.slice(1, -1);
	    }
	    var modifiers = match2[3] ? match2[3].slice(1).split(".") : [];
	    if (isPropShorthand)
	      { modifiers.push("prop"); }
	    if (dirName === "bind" && arg) {
	      if (modifiers.includes("sync") && checkCompatEnabled(
	        "COMPILER_V_BIND_SYNC",
	        context,
	        loc,
	        arg.loc.source
	      )) {
	        dirName = "model";
	        modifiers.splice(modifiers.indexOf("sync"), 1);
	      }
	      if (!!(process.env.NODE_ENV !== "production") && modifiers.includes("prop")) {
	        checkCompatEnabled(
	          "COMPILER_V_BIND_PROP",
	          context,
	          loc
	        );
	      }
	    }
	    return {
	      type: 7,
	      name: dirName,
	      exp: value && {
	        type: 4,
	        content: value.content,
	        isStatic: false,
	        // Treat as non-constant by default. This can be potentially set to
	        // other values by `transformExpression` to make it eligible for hoisting.
	        constType: 0,
	        loc: value.loc
	      },
	      arg: arg,
	      modifiers: modifiers,
	      loc: loc
	    };
	  }
	  if (!context.inVPre && startsWith(name, "v-")) {
	    emitError(context, 26);
	  }
	  return {
	    type: 6,
	    name: name,
	    value: value && {
	      type: 2,
	      content: value.content,
	      loc: value.loc
	    },
	    loc: loc
	  };
	}
	function parseAttributeValue(context) {
	  var start = getCursor(context);
	  var content;
	  var quote = context.source[0];
	  var isQuoted = quote === "\"" || quote === "'";
	  if (isQuoted) {
	    advanceBy(context, 1);
	    var endIndex = context.source.indexOf(quote);
	    if (endIndex === -1) {
	      content = parseTextData(
	        context,
	        context.source.length,
	        4
	      );
	    } else {
	      content = parseTextData(context, endIndex, 4);
	      advanceBy(context, 1);
	    }
	  } else {
	    var match = /^[^\t\r\n\f >]+/.exec(context.source);
	    if (!match) {
	      return void 0;
	    }
	    var unexpectedChars = /["'<=`]/g;
	    var m;
	    while (m = unexpectedChars.exec(match[0])) {
	      emitError(
	        context,
	        18,
	        m.index
	      );
	    }
	    content = parseTextData(context, match[0].length, 4);
	  }
	  return { content: content, isQuoted: isQuoted, loc: getSelection(context, start) };
	}
	function parseInterpolation(context, mode) {
	  var ref = context.options.delimiters;
	  var open = ref[0];
	  var close = ref[1];
	  var closeIndex = context.source.indexOf(close, open.length);
	  if (closeIndex === -1) {
	    emitError(context, 25);
	    return void 0;
	  }
	  var start = getCursor(context);
	  advanceBy(context, open.length);
	  var innerStart = getCursor(context);
	  var innerEnd = getCursor(context);
	  var rawContentLength = closeIndex - open.length;
	  var rawContent = context.source.slice(0, rawContentLength);
	  var preTrimContent = parseTextData(context, rawContentLength, mode);
	  var content = preTrimContent.trim();
	  var startOffset = preTrimContent.indexOf(content);
	  if (startOffset > 0) {
	    advancePositionWithMutation(innerStart, rawContent, startOffset);
	  }
	  var endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
	  advancePositionWithMutation(innerEnd, rawContent, endOffset);
	  advanceBy(context, close.length);
	  return {
	    type: 5,
	    content: {
	      type: 4,
	      isStatic: false,
	      // Set `isConstant` to false by default and will decide in transformExpression
	      constType: 0,
	      content: content,
	      loc: getSelection(context, innerStart, innerEnd)
	    },
	    loc: getSelection(context, start)
	  };
	}
	function parseText(context, mode) {
	  var endTokens = mode === 3 ? ["]]>"] : ["<", context.options.delimiters[0]];
	  var endIndex = context.source.length;
	  for (var i = 0; i < endTokens.length; i++) {
	    var index = context.source.indexOf(endTokens[i], 1);
	    if (index !== -1 && endIndex > index) {
	      endIndex = index;
	    }
	  }
	  var start = getCursor(context);
	  var content = parseTextData(context, endIndex, mode);
	  return {
	    type: 2,
	    content: content,
	    loc: getSelection(context, start)
	  };
	}
	function parseTextData(context, length, mode) {
	  var rawText = context.source.slice(0, length);
	  advanceBy(context, length);
	  if (mode === 2 || mode === 3 || !rawText.includes("&")) {
	    return rawText;
	  } else {
	    return context.options.decodeEntities(
	      rawText,
	      mode === 4
	    );
	  }
	}
	function getCursor(context) {
	  var column = context.column;
	  var line = context.line;
	  var offset = context.offset;
	  return { column: column, line: line, offset: offset };
	}
	function getSelection(context, start, end) {
	  end = end || getCursor(context);
	  return {
	    start: start,
	    end: end,
	    source: context.originalSource.slice(start.offset, end.offset)
	  };
	}
	function last(xs) {
	  return xs[xs.length - 1];
	}
	function startsWith(source, searchString) {
	  return source.startsWith(searchString);
	}
	function advanceBy(context, numberOfCharacters) {
	  var source = context.source;
	  advancePositionWithMutation(context, source, numberOfCharacters);
	  context.source = source.slice(numberOfCharacters);
	}
	function advanceSpaces(context) {
	  var match = /^[\t\r\n\f ]+/.exec(context.source);
	  if (match) {
	    advanceBy(context, match[0].length);
	  }
	}
	function getNewPosition(context, start, numberOfCharacters) {
	  return advancePositionWithClone(
	    start,
	    context.originalSource.slice(start.offset, numberOfCharacters),
	    numberOfCharacters
	  );
	}
	function emitError(context, code, offset, loc) {
	  if ( loc === void 0 ) loc = getCursor(context);

	  if (offset) {
	    loc.offset += offset;
	    loc.column += offset;
	  }
	  context.options.onError(
	    createCompilerError(code, {
	      start: loc,
	      end: loc,
	      source: ""
	    })
	  );
	}
	function isEnd(context, mode, ancestors) {
	  var s = context.source;
	  switch (mode) {
	    case 0:
	      if (startsWith(s, "</")) {
	        for (var i = ancestors.length - 1; i >= 0; --i) {
	          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
	            return true;
	          }
	        }
	      }
	      break;
	    case 1:
	    case 2: {
	      var parent = last(ancestors);
	      if (parent && startsWithEndTagOpen(s, parent.tag)) {
	        return true;
	      }
	      break;
	    }
	    case 3:
	      if (startsWith(s, "]]>")) {
	        return true;
	      }
	      break;
	  }
	  return !s;
	}
	function startsWithEndTagOpen(source, tag) {
	  return startsWith(source, "</") && source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || ">");
	}

	function hoistStatic(root, context) {
	  walk(
	    root,
	    context,
	    // Root node is unfortunately non-hoistable due to potential parent
	    // fallthrough attributes.
	    isSingleElementRoot(root, root.children[0])
	  );
	}
	function isSingleElementRoot(root, child) {
	  var children = root.children;
	  return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
	}
	function walk(node, context, doNotHoistNode) {
	  if ( doNotHoistNode === void 0 ) doNotHoistNode = false;

	  var children = node.children;
	  var originalCount = children.length;
	  var hoistedCount = 0;
	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    if (child.type === 1 && child.tagType === 0) {
	      var constantType = doNotHoistNode ? 0 : getConstantType(child, context);
	      if (constantType > 0) {
	        if (constantType >= 2) {
	          child.codegenNode.patchFlag = -1 + (!!(process.env.NODE_ENV !== "production") ? " /* HOISTED */" : "");
	          child.codegenNode = context.hoist(child.codegenNode);
	          hoistedCount++;
	          continue;
	        }
	      } else {
	        var codegenNode = child.codegenNode;
	        if (codegenNode.type === 13) {
	          var flag = getPatchFlag(codegenNode);
	          if ((!flag || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
	            var props = getNodeProps(child);
	            if (props) {
	              codegenNode.props = context.hoist(props);
	            }
	          }
	          if (codegenNode.dynamicProps) {
	            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
	          }
	        }
	      }
	    }
	    if (child.type === 1) {
	      var isComponent = child.tagType === 1;
	      if (isComponent) {
	        context.scopes.vSlot++;
	      }
	      walk(child, context);
	      if (isComponent) {
	        context.scopes.vSlot--;
	      }
	    } else if (child.type === 11) {
	      walk(child, context, child.children.length === 1);
	    } else if (child.type === 9) {
	      for (var i2 = 0; i2 < child.branches.length; i2++) {
	        walk(
	          child.branches[i2],
	          context,
	          child.branches[i2].children.length === 1
	        );
	      }
	    }
	  }
	  if (hoistedCount && context.transformHoist) {
	    context.transformHoist(children, context, node);
	  }
	  if (hoistedCount && hoistedCount === originalCount && node.type === 1 && node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
	    node.codegenNode.children = context.hoist(
	      createArrayExpression(node.codegenNode.children)
	    );
	  }
	}
	function getConstantType(node, context) {
	  var constantCache = context.constantCache;
	  switch (node.type) {
	    case 1:
	      if (node.tagType !== 0) {
	        return 0;
	      }
	      var cached = constantCache.get(node);
	      if (cached !== void 0) {
	        return cached;
	      }
	      var codegenNode = node.codegenNode;
	      if (codegenNode.type !== 13) {
	        return 0;
	      }
	      if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject") {
	        return 0;
	      }
	      var flag = getPatchFlag(codegenNode);
	      if (!flag) {
	        var returnType2 = 3;
	        var generatedPropsType = getGeneratedPropsConstantType(node, context);
	        if (generatedPropsType === 0) {
	          constantCache.set(node, 0);
	          return 0;
	        }
	        if (generatedPropsType < returnType2) {
	          returnType2 = generatedPropsType;
	        }
	        for (var i = 0; i < node.children.length; i++) {
	          var childType = getConstantType(node.children[i], context);
	          if (childType === 0) {
	            constantCache.set(node, 0);
	            return 0;
	          }
	          if (childType < returnType2) {
	            returnType2 = childType;
	          }
	        }
	        if (returnType2 > 1) {
	          for (var i$1 = 0; i$1 < node.props.length; i$1++) {
	            var p = node.props[i$1];
	            if (p.type === 7 && p.name === "bind" && p.exp) {
	              var expType = getConstantType(p.exp, context);
	              if (expType === 0) {
	                constantCache.set(node, 0);
	                return 0;
	              }
	              if (expType < returnType2) {
	                returnType2 = expType;
	              }
	            }
	          }
	        }
	        if (codegenNode.isBlock) {
	          for (var i$2 = 0; i$2 < node.props.length; i$2++) {
	            var p$1 = node.props[i$2];
	            if (p$1.type === 7) {
	              constantCache.set(node, 0);
	              return 0;
	            }
	          }
	          context.removeHelper(OPEN_BLOCK);
	          context.removeHelper(
	            getVNodeBlockHelper(context.inSSR, codegenNode.isComponent)
	          );
	          codegenNode.isBlock = false;
	          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
	        }
	        constantCache.set(node, returnType2);
	        return returnType2;
	      } else {
	        constantCache.set(node, 0);
	        return 0;
	      }
	    case 2:
	    case 3:
	      return 3;
	    case 9:
	    case 11:
	    case 10:
	      return 0;
	    case 5:
	    case 12:
	      return getConstantType(node.content, context);
	    case 4:
	      return node.constType;
	    case 8:
	      var returnType = 3;
	      for (var i$3 = 0; i$3 < node.children.length; i$3++) {
	        var child = node.children[i$3];
	        if (isString(child) || isSymbol(child)) {
	          continue;
	        }
	        var childType$1 = getConstantType(child, context);
	        if (childType$1 === 0) {
	          return 0;
	        } else if (childType$1 < returnType) {
	          returnType = childType$1;
	        }
	      }
	      return returnType;
	    default:
	      if (!!(process.env.NODE_ENV !== "production")) ;
	      return 0;
	  }
	}
	var allowHoistedHelperSet = /* @__PURE__ */ new Set([
	  NORMALIZE_CLASS,
	  NORMALIZE_STYLE,
	  NORMALIZE_PROPS,
	  GUARD_REACTIVE_PROPS
	]);
	function getConstantTypeOfHelperCall(value, context) {
	  if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
	    var arg = value.arguments[0];
	    if (arg.type === 4) {
	      return getConstantType(arg, context);
	    } else if (arg.type === 14) {
	      return getConstantTypeOfHelperCall(arg, context);
	    }
	  }
	  return 0;
	}
	function getGeneratedPropsConstantType(node, context) {
	  var returnType = 3;
	  var props = getNodeProps(node);
	  if (props && props.type === 15) {
	    var properties = props.properties;
	    for (var i = 0; i < properties.length; i++) {
	      var ref = properties[i];
	      var key = ref.key;
	      var value = ref.value;
	      var keyType = getConstantType(key, context);
	      if (keyType === 0) {
	        return keyType;
	      }
	      if (keyType < returnType) {
	        returnType = keyType;
	      }
	      var valueType = (void 0);
	      if (value.type === 4) {
	        valueType = getConstantType(value, context);
	      } else if (value.type === 14) {
	        valueType = getConstantTypeOfHelperCall(value, context);
	      } else {
	        valueType = 0;
	      }
	      if (valueType === 0) {
	        return valueType;
	      }
	      if (valueType < returnType) {
	        returnType = valueType;
	      }
	    }
	  }
	  return returnType;
	}
	function getNodeProps(node) {
	  var codegenNode = node.codegenNode;
	  if (codegenNode.type === 13) {
	    return codegenNode.props;
	  }
	}
	function getPatchFlag(node) {
	  var flag = node.patchFlag;
	  return flag ? parseInt(flag, 10) : void 0;
	}

	function createTransformContext(root, ref) {
	  var filename = ref.filename; if ( filename === void 0 ) filename = "";
	  var prefixIdentifiers = ref.prefixIdentifiers; if ( prefixIdentifiers === void 0 ) prefixIdentifiers = false;
	  var hoistStatic2 = ref.hoistStatic; if ( hoistStatic2 === void 0 ) hoistStatic2 = false;
	  var cacheHandlers = ref.cacheHandlers; if ( cacheHandlers === void 0 ) cacheHandlers = false;
	  var nodeTransforms = ref.nodeTransforms; if ( nodeTransforms === void 0 ) nodeTransforms = [];
	  var directiveTransforms = ref.directiveTransforms; if ( directiveTransforms === void 0 ) directiveTransforms = {};
	  var transformHoist = ref.transformHoist; if ( transformHoist === void 0 ) transformHoist = null;
	  var isBuiltInComponent = ref.isBuiltInComponent; if ( isBuiltInComponent === void 0 ) isBuiltInComponent = NOOP;
	  var isCustomElement = ref.isCustomElement; if ( isCustomElement === void 0 ) isCustomElement = NOOP;
	  var expressionPlugins = ref.expressionPlugins; if ( expressionPlugins === void 0 ) expressionPlugins = [];
	  var scopeId = ref.scopeId; if ( scopeId === void 0 ) scopeId = null;
	  var slotted = ref.slotted; if ( slotted === void 0 ) slotted = true;
	  var ssr = ref.ssr; if ( ssr === void 0 ) ssr = false;
	  var inSSR = ref.inSSR; if ( inSSR === void 0 ) inSSR = false;
	  var ssrCssVars = ref.ssrCssVars; if ( ssrCssVars === void 0 ) ssrCssVars = "";
	  var bindingMetadata = ref.bindingMetadata; if ( bindingMetadata === void 0 ) bindingMetadata = EMPTY_OBJ;
	  var inline = ref.inline; if ( inline === void 0 ) inline = false;
	  var isTS = ref.isTS; if ( isTS === void 0 ) isTS = false;
	  var onError = ref.onError; if ( onError === void 0 ) onError = defaultOnError;
	  var onWarn = ref.onWarn; if ( onWarn === void 0 ) onWarn = defaultOnWarn;
	  var compatConfig = ref.compatConfig;

	  var nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
	  var context = {
	    // options
	    selfName: nameMatch && capitalize(camelize(nameMatch[1])),
	    prefixIdentifiers: prefixIdentifiers,
	    hoistStatic: hoistStatic2,
	    cacheHandlers: cacheHandlers,
	    nodeTransforms: nodeTransforms,
	    directiveTransforms: directiveTransforms,
	    transformHoist: transformHoist,
	    isBuiltInComponent: isBuiltInComponent,
	    isCustomElement: isCustomElement,
	    expressionPlugins: expressionPlugins,
	    scopeId: scopeId,
	    slotted: slotted,
	    ssr: ssr,
	    inSSR: inSSR,
	    ssrCssVars: ssrCssVars,
	    bindingMetadata: bindingMetadata,
	    inline: inline,
	    isTS: isTS,
	    onError: onError,
	    onWarn: onWarn,
	    compatConfig: compatConfig,
	    // state
	    root: root,
	    helpers: /* @__PURE__ */ new Map(),
	    components: /* @__PURE__ */ new Set(),
	    directives: /* @__PURE__ */ new Set(),
	    hoists: [],
	    imports: [],
	    constantCache: /* @__PURE__ */ new Map(),
	    temps: 0,
	    cached: 0,
	    identifiers: /* @__PURE__ */ Object.create(null),
	    scopes: {
	      vFor: 0,
	      vSlot: 0,
	      vPre: 0,
	      vOnce: 0
	    },
	    parent: null,
	    currentNode: root,
	    childIndex: 0,
	    inVOnce: false,
	    // methods
	    helper: function helper(name) {
	      var count = context.helpers.get(name) || 0;
	      context.helpers.set(name, count + 1);
	      return name;
	    },
	    removeHelper: function removeHelper(name) {
	      var count = context.helpers.get(name);
	      if (count) {
	        var currentCount = count - 1;
	        if (!currentCount) {
	          context.helpers.delete(name);
	        } else {
	          context.helpers.set(name, currentCount);
	        }
	      }
	    },
	    helperString: function helperString(name) {
	      return ("_" + (helperNameMap[context.helper(name)]));
	    },
	    replaceNode: function replaceNode(node) {
	      if (!!(process.env.NODE_ENV !== "production")) {
	        if (!context.currentNode) {
	          throw new Error("Node being replaced is already removed.");
	        }
	        if (!context.parent) {
	          throw new Error("Cannot replace root node.");
	        }
	      }
	      context.parent.children[context.childIndex] = context.currentNode = node;
	    },
	    removeNode: function removeNode(node) {
	      if (!!(process.env.NODE_ENV !== "production") && !context.parent) {
	        throw new Error("Cannot remove root node.");
	      }
	      var list = context.parent.children;
	      var removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
	      if (!!(process.env.NODE_ENV !== "production") && removalIndex < 0) {
	        throw new Error("node being removed is not a child of current parent");
	      }
	      if (!node || node === context.currentNode) {
	        context.currentNode = null;
	        context.onNodeRemoved();
	      } else {
	        if (context.childIndex > removalIndex) {
	          context.childIndex--;
	          context.onNodeRemoved();
	        }
	      }
	      context.parent.children.splice(removalIndex, 1);
	    },
	    onNodeRemoved: function () {
	    },
	    addIdentifiers: function addIdentifiers(exp) {
	    },
	    removeIdentifiers: function removeIdentifiers(exp) {
	    },
	    hoist: function hoist(exp) {
	      if (isString(exp))
	        { exp = createSimpleExpression(exp); }
	      context.hoists.push(exp);
	      var identifier = createSimpleExpression(
	        ("_hoisted_" + (context.hoists.length)),
	        false,
	        exp.loc,
	        2
	      );
	      identifier.hoisted = exp;
	      return identifier;
	    },
	    cache: function cache(exp, isVNode) {
	      if ( isVNode === void 0 ) isVNode = false;

	      return createCacheExpression(context.cached++, exp, isVNode);
	    }
	  };
	  {
	    context.filters = /* @__PURE__ */ new Set();
	  }
	  return context;
	}
	function transform(root, options) {
	  var context = createTransformContext(root, options);
	  traverseNode(root, context);
	  if (options.hoistStatic) {
	    hoistStatic(root, context);
	  }
	  if (!options.ssr) {
	    createRootCodegen(root, context);
	  }
	  root.helpers = /* @__PURE__ */ new Set([].concat( context.helpers.keys() ));
	  root.components = [].concat( context.components );
	  root.directives = [].concat( context.directives );
	  root.imports = context.imports;
	  root.hoists = context.hoists;
	  root.temps = context.temps;
	  root.cached = context.cached;
	  {
	    root.filters = [].concat( context.filters );
	  }
	}
	function createRootCodegen(root, context) {
	  var helper = context.helper;
	  var children = root.children;
	  if (children.length === 1) {
	    var child = children[0];
	    if (isSingleElementRoot(root, child) && child.codegenNode) {
	      var codegenNode = child.codegenNode;
	      if (codegenNode.type === 13) {
	        convertToBlock(codegenNode, context);
	      }
	      root.codegenNode = codegenNode;
	    } else {
	      root.codegenNode = child;
	    }
	  } else if (children.length > 1) {
	    var patchFlag = 64;
	    var patchFlagText = PatchFlagNames[64];
	    if (!!(process.env.NODE_ENV !== "production") && children.filter(function (c) { return c.type !== 3; }).length === 1) {
	      patchFlag |= 2048;
	      patchFlagText += ", " + (PatchFlagNames[2048]);
	    }
	    root.codegenNode = createVNodeCall(
	      context,
	      helper(FRAGMENT),
	      void 0,
	      root.children,
	      patchFlag + (!!(process.env.NODE_ENV !== "production") ? (" /* " + patchFlagText + " */") : ""),
	      void 0,
	      void 0,
	      true,
	      void 0,
	      false
	      /* isComponent */
	    );
	  } else ;
	}
	function traverseChildren(parent, context) {
	  var i = 0;
	  var nodeRemoved = function () {
	    i--;
	  };
	  for (; i < parent.children.length; i++) {
	    var child = parent.children[i];
	    if (isString(child))
	      { continue; }
	    context.parent = parent;
	    context.childIndex = i;
	    context.onNodeRemoved = nodeRemoved;
	    traverseNode(child, context);
	  }
	}
	function traverseNode(node, context) {
	  context.currentNode = node;
	  var nodeTransforms = context.nodeTransforms;
	  var exitFns = [];
	  for (var i2 = 0; i2 < nodeTransforms.length; i2++) {
	    var onExit = nodeTransforms[i2](node, context);
	    if (onExit) {
	      if (isArray(onExit)) {
	        exitFns.push.apply(exitFns, onExit);
	      } else {
	        exitFns.push(onExit);
	      }
	    }
	    if (!context.currentNode) {
	      return;
	    } else {
	      node = context.currentNode;
	    }
	  }
	  switch (node.type) {
	    case 3:
	      if (!context.ssr) {
	        context.helper(CREATE_COMMENT);
	      }
	      break;
	    case 5:
	      if (!context.ssr) {
	        context.helper(TO_DISPLAY_STRING);
	      }
	      break;
	    case 9:
	      for (var i2$1 = 0; i2$1 < node.branches.length; i2$1++) {
	        traverseNode(node.branches[i2$1], context);
	      }
	      break;
	    case 10:
	    case 11:
	    case 1:
	    case 0:
	      traverseChildren(node, context);
	      break;
	  }
	  context.currentNode = node;
	  var i = exitFns.length;
	  while (i--) {
	    exitFns[i]();
	  }
	}
	function createStructuralDirectiveTransform(name, fn) {
	  var matches = isString(name) ? function (n) { return n === name; } : function (n) { return name.test(n); };
	  return function (node, context) {
	    if (node.type === 1) {
	      var props = node.props;
	      if (node.tagType === 3 && props.some(isVSlot)) {
	        return;
	      }
	      var exitFns = [];
	      for (var i = 0; i < props.length; i++) {
	        var prop = props[i];
	        if (prop.type === 7 && matches(prop.name)) {
	          props.splice(i, 1);
	          i--;
	          var onExit = fn(node, prop, context);
	          if (onExit)
	            { exitFns.push(onExit); }
	        }
	      }
	      return exitFns;
	    }
	  };
	}

	var PURE_ANNOTATION = "/*#__PURE__*/";
	var aliasHelper = function (s) { return ((helperNameMap[s]) + ": _" + (helperNameMap[s])); };
	function createCodegenContext(ast, ref) {
	  var mode = ref.mode; if ( mode === void 0 ) mode = "function";
	  var prefixIdentifiers = ref.prefixIdentifiers; if ( prefixIdentifiers === void 0 ) prefixIdentifiers = mode === "module";
	  var sourceMap = ref.sourceMap; if ( sourceMap === void 0 ) sourceMap = false;
	  var filename = ref.filename; if ( filename === void 0 ) filename = "template.vue.html";
	  var scopeId = ref.scopeId; if ( scopeId === void 0 ) scopeId = null;
	  var optimizeImports = ref.optimizeImports; if ( optimizeImports === void 0 ) optimizeImports = false;
	  var runtimeGlobalName = ref.runtimeGlobalName; if ( runtimeGlobalName === void 0 ) runtimeGlobalName = "Vue";
	  var runtimeModuleName = ref.runtimeModuleName; if ( runtimeModuleName === void 0 ) runtimeModuleName = "vue";
	  var ssrRuntimeModuleName = ref.ssrRuntimeModuleName; if ( ssrRuntimeModuleName === void 0 ) ssrRuntimeModuleName = "vue/server-renderer";
	  var ssr = ref.ssr; if ( ssr === void 0 ) ssr = false;
	  var isTS = ref.isTS; if ( isTS === void 0 ) isTS = false;
	  var inSSR = ref.inSSR; if ( inSSR === void 0 ) inSSR = false;

	  var context = {
	    mode: mode,
	    prefixIdentifiers: prefixIdentifiers,
	    sourceMap: sourceMap,
	    filename: filename,
	    scopeId: scopeId,
	    optimizeImports: optimizeImports,
	    runtimeGlobalName: runtimeGlobalName,
	    runtimeModuleName: runtimeModuleName,
	    ssrRuntimeModuleName: ssrRuntimeModuleName,
	    ssr: ssr,
	    isTS: isTS,
	    inSSR: inSSR,
	    source: ast.loc.source,
	    code: "",
	    column: 1,
	    line: 1,
	    offset: 0,
	    indentLevel: 0,
	    pure: false,
	    map: void 0,
	    helper: function helper(key) {
	      return ("_" + (helperNameMap[key]));
	    },
	    push: function push(code, node) {
	      context.code += code;
	    },
	    indent: function indent() {
	      newline(++context.indentLevel);
	    },
	    deindent: function deindent(withoutNewLine) {
	      if ( withoutNewLine === void 0 ) withoutNewLine = false;

	      if (withoutNewLine) {
	        --context.indentLevel;
	      } else {
	        newline(--context.indentLevel);
	      }
	    },
	    newline: function newline$1() {
	      newline(context.indentLevel);
	    }
	  };
	  function newline(n) {
	    context.push("\n" + "  ".repeat(n));
	  }
	  return context;
	}
	function generate(ast, options) {
	  if ( options === void 0 ) options = {};

	  var context = createCodegenContext(ast, options);
	  if (options.onContextCreated)
	    { options.onContextCreated(context); }
	  var mode = context.mode;
	  var push = context.push;
	  var prefixIdentifiers = context.prefixIdentifiers;
	  var indent = context.indent;
	  var deindent = context.deindent;
	  var newline = context.newline;
	  context.scopeId;
	  var ssr = context.ssr;
	  var helpers = Array.from(ast.helpers);
	  var hasHelpers = helpers.length > 0;
	  var useWithBlock = !prefixIdentifiers && mode !== "module";
	  var isSetupInlined = false;
	  var preambleContext = isSetupInlined ? createCodegenContext(ast, options) : context;
	  {
	    genFunctionPreamble(ast, preambleContext);
	  }
	  var functionName = ssr ? "ssrRender" : "render";
	  var args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
	  var signature = args.join(", ");
	  {
	    push(("function " + functionName + "(" + signature + ") {"));
	  }
	  indent();
	  if (useWithBlock) {
	    push("with (_ctx) {");
	    indent();
	    if (hasHelpers) {
	      push(("const { " + (helpers.map(aliasHelper).join(", ")) + " } = _Vue"));
	      push("\n");
	      newline();
	    }
	  }
	  if (ast.components.length) {
	    genAssets(ast.components, "component", context);
	    if (ast.directives.length || ast.temps > 0) {
	      newline();
	    }
	  }
	  if (ast.directives.length) {
	    genAssets(ast.directives, "directive", context);
	    if (ast.temps > 0) {
	      newline();
	    }
	  }
	  if (ast.filters && ast.filters.length) {
	    newline();
	    genAssets(ast.filters, "filter", context);
	    newline();
	  }
	  if (ast.temps > 0) {
	    push("let ");
	    for (var i = 0; i < ast.temps; i++) {
	      push(((i > 0 ? ", " : "") + "_temp" + i));
	    }
	  }
	  if (ast.components.length || ast.directives.length || ast.temps) {
	    push("\n");
	    newline();
	  }
	  if (!ssr) {
	    push("return ");
	  }
	  if (ast.codegenNode) {
	    genNode(ast.codegenNode, context);
	  } else {
	    push("null");
	  }
	  if (useWithBlock) {
	    deindent();
	    push("}");
	  }
	  deindent();
	  push("}");
	  return {
	    ast: ast,
	    code: context.code,
	    preamble: isSetupInlined ? preambleContext.code : "",
	    // SourceMapGenerator does have toJSON() method but it's not in the types
	    map: context.map ? context.map.toJSON() : void 0
	  };
	}
	function genFunctionPreamble(ast, context) {
	  context.ssr;
	  context.prefixIdentifiers;
	  var push = context.push;
	  var newline = context.newline;
	  context.runtimeModuleName;
	  var runtimeGlobalName = context.runtimeGlobalName;
	  context.ssrRuntimeModuleName;
	  var VueBinding = runtimeGlobalName;
	  var helpers = Array.from(ast.helpers);
	  if (helpers.length > 0) {
	    {
	      push(("const _Vue = " + VueBinding + "\n"));
	      if (ast.hoists.length) {
	        var staticHelpers = [
	          CREATE_VNODE,
	          CREATE_ELEMENT_VNODE,
	          CREATE_COMMENT,
	          CREATE_TEXT,
	          CREATE_STATIC
	        ].filter(function (helper) { return helpers.includes(helper); }).map(aliasHelper).join(", ");
	        push(("const { " + staticHelpers + " } = _Vue\n"));
	      }
	    }
	  }
	  genHoists(ast.hoists, context);
	  newline();
	  push("return ");
	}
	function genAssets(assets, type, ref) {
	  var helper = ref.helper;
	  var push = ref.push;
	  var newline = ref.newline;
	  var isTS = ref.isTS;

	  var resolver = helper(
	    type === "filter" ? RESOLVE_FILTER : type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE
	  );
	  for (var i = 0; i < assets.length; i++) {
	    var id = assets[i];
	    var maybeSelfReference = id.endsWith("__self");
	    if (maybeSelfReference) {
	      id = id.slice(0, -6);
	    }
	    push(
	      ("const " + (toValidAssetId(id, type)) + " = " + resolver + "(" + (JSON.stringify(id)) + (maybeSelfReference ? ", true" : "") + ")" + (isTS ? "!" : ""))
	    );
	    if (i < assets.length - 1) {
	      newline();
	    }
	  }
	}
	function genHoists(hoists, context) {
	  if (!hoists.length) {
	    return;
	  }
	  context.pure = true;
	  var push = context.push;
	  var newline = context.newline;
	  context.helper;
	  context.scopeId;
	  context.mode;
	  newline();
	  for (var i = 0; i < hoists.length; i++) {
	    var exp = hoists[i];
	    if (exp) {
	      push(
	        ("const _hoisted_" + (i + 1) + " = " + (""))
	      );
	      genNode(exp, context);
	      newline();
	    }
	  }
	  context.pure = false;
	}
	function isText(n) {
	  return isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
	}
	function genNodeListAsArray(nodes, context) {
	  var multilines = nodes.length > 3 || !!(process.env.NODE_ENV !== "production") && nodes.some(function (n) { return isArray(n) || !isText(n); });
	  context.push("[");
	  multilines && context.indent();
	  genNodeList(nodes, context, multilines);
	  multilines && context.deindent();
	  context.push("]");
	}
	function genNodeList(nodes, context, multilines, comma) {
	  if ( multilines === void 0 ) multilines = false;
	  if ( comma === void 0 ) comma = true;

	  var push = context.push;
	  var newline = context.newline;
	  for (var i = 0; i < nodes.length; i++) {
	    var node = nodes[i];
	    if (isString(node)) {
	      push(node);
	    } else if (isArray(node)) {
	      genNodeListAsArray(node, context);
	    } else {
	      genNode(node, context);
	    }
	    if (i < nodes.length - 1) {
	      if (multilines) {
	        comma && push(",");
	        newline();
	      } else {
	        comma && push(", ");
	      }
	    }
	  }
	}
	function genNode(node, context) {
	  if (isString(node)) {
	    context.push(node);
	    return;
	  }
	  if (isSymbol(node)) {
	    context.push(context.helper(node));
	    return;
	  }
	  switch (node.type) {
	    case 1:
	    case 9:
	    case 11:
	      !!(process.env.NODE_ENV !== "production") && assert(
	        node.codegenNode != null,
	        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
	      );
	      genNode(node.codegenNode, context);
	      break;
	    case 2:
	      genText(node, context);
	      break;
	    case 4:
	      genExpression(node, context);
	      break;
	    case 5:
	      genInterpolation(node, context);
	      break;
	    case 12:
	      genNode(node.codegenNode, context);
	      break;
	    case 8:
	      genCompoundExpression(node, context);
	      break;
	    case 3:
	      genComment(node, context);
	      break;
	    case 13:
	      genVNodeCall(node, context);
	      break;
	    case 14:
	      genCallExpression(node, context);
	      break;
	    case 15:
	      genObjectExpression(node, context);
	      break;
	    case 17:
	      genArrayExpression(node, context);
	      break;
	    case 18:
	      genFunctionExpression(node, context);
	      break;
	    case 19:
	      genConditionalExpression(node, context);
	      break;
	    case 20:
	      genCacheExpression(node, context);
	      break;
	    case 21:
	      genNodeList(node.body, context, true, false);
	      break;
	    case 22:
	      break;
	    case 23:
	      break;
	    case 24:
	      break;
	    case 25:
	      break;
	    case 26:
	      break;
	    case 10:
	      break;
	    default:
	      if (!!(process.env.NODE_ENV !== "production")) {
	        assert(false, ("unhandled codegen node type: " + (node.type)));
	        var exhaustiveCheck = node;
	        return exhaustiveCheck;
	      }
	  }
	}
	function genText(node, context) {
	  context.push(JSON.stringify(node.content), node);
	}
	function genExpression(node, context) {
	  var content = node.content;
	  var isStatic = node.isStatic;
	  context.push(isStatic ? JSON.stringify(content) : content, node);
	}
	function genInterpolation(node, context) {
	  var push = context.push;
	  var helper = context.helper;
	  var pure = context.pure;
	  if (pure)
	    { push(PURE_ANNOTATION); }
	  push(((helper(TO_DISPLAY_STRING)) + "("));
	  genNode(node.content, context);
	  push(")");
	}
	function genCompoundExpression(node, context) {
	  for (var i = 0; i < node.children.length; i++) {
	    var child = node.children[i];
	    if (isString(child)) {
	      context.push(child);
	    } else {
	      genNode(child, context);
	    }
	  }
	}
	function genExpressionAsPropertyKey(node, context) {
	  var push = context.push;
	  if (node.type === 8) {
	    push("[");
	    genCompoundExpression(node, context);
	    push("]");
	  } else if (node.isStatic) {
	    var text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
	    push(text, node);
	  } else {
	    push(("[" + (node.content) + "]"), node);
	  }
	}
	function genComment(node, context) {
	  var push = context.push;
	  var helper = context.helper;
	  var pure = context.pure;
	  if (pure) {
	    push(PURE_ANNOTATION);
	  }
	  push(((helper(CREATE_COMMENT)) + "(" + (JSON.stringify(node.content)) + ")"), node);
	}
	function genVNodeCall(node, context) {
	  var push = context.push;
	  var helper = context.helper;
	  var pure = context.pure;
	  var tag = node.tag;
	  var props = node.props;
	  var children = node.children;
	  var patchFlag = node.patchFlag;
	  var dynamicProps = node.dynamicProps;
	  var directives = node.directives;
	  var isBlock = node.isBlock;
	  var disableTracking = node.disableTracking;
	  var isComponent = node.isComponent;
	  if (directives) {
	    push(helper(WITH_DIRECTIVES) + "(");
	  }
	  if (isBlock) {
	    push(("(" + (helper(OPEN_BLOCK)) + "(" + (disableTracking ? "true" : "") + "), "));
	  }
	  if (pure) {
	    push(PURE_ANNOTATION);
	  }
	  var callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent) : getVNodeHelper(context.inSSR, isComponent);
	  push(helper(callHelper) + "(", node);
	  genNodeList(
	    genNullableArgs([tag, props, children, patchFlag, dynamicProps]),
	    context
	  );
	  push(")");
	  if (isBlock) {
	    push(")");
	  }
	  if (directives) {
	    push(", ");
	    genNode(directives, context);
	    push(")");
	  }
	}
	function genNullableArgs(args) {
	  var i = args.length;
	  while (i--) {
	    if (args[i] != null)
	      { break; }
	  }
	  return args.slice(0, i + 1).map(function (arg) { return arg || "null"; });
	}
	function genCallExpression(node, context) {
	  var push = context.push;
	  var helper = context.helper;
	  var pure = context.pure;
	  var callee = isString(node.callee) ? node.callee : helper(node.callee);
	  if (pure) {
	    push(PURE_ANNOTATION);
	  }
	  push(callee + "(", node);
	  genNodeList(node.arguments, context);
	  push(")");
	}
	function genObjectExpression(node, context) {
	  var push = context.push;
	  var indent = context.indent;
	  var deindent = context.deindent;
	  var newline = context.newline;
	  var properties = node.properties;
	  if (!properties.length) {
	    push("{}", node);
	    return;
	  }
	  var multilines = properties.length > 1 || !!(process.env.NODE_ENV !== "production") && properties.some(function (p) { return p.value.type !== 4; });
	  push(multilines ? "{" : "{ ");
	  multilines && indent();
	  for (var i = 0; i < properties.length; i++) {
	    var ref = properties[i];
	    var key = ref.key;
	    var value = ref.value;
	    genExpressionAsPropertyKey(key, context);
	    push(": ");
	    genNode(value, context);
	    if (i < properties.length - 1) {
	      push(",");
	      newline();
	    }
	  }
	  multilines && deindent();
	  push(multilines ? "}" : " }");
	}
	function genArrayExpression(node, context) {
	  genNodeListAsArray(node.elements, context);
	}
	function genFunctionExpression(node, context) {
	  var push = context.push;
	  var indent = context.indent;
	  var deindent = context.deindent;
	  var params = node.params;
	  var returns = node.returns;
	  var body = node.body;
	  var newline = node.newline;
	  var isSlot = node.isSlot;
	  if (isSlot) {
	    push(("_" + (helperNameMap[WITH_CTX]) + "("));
	  }
	  push("(", node);
	  if (isArray(params)) {
	    genNodeList(params, context);
	  } else if (params) {
	    genNode(params, context);
	  }
	  push(") => ");
	  if (newline || body) {
	    push("{");
	    indent();
	  }
	  if (returns) {
	    if (newline) {
	      push("return ");
	    }
	    if (isArray(returns)) {
	      genNodeListAsArray(returns, context);
	    } else {
	      genNode(returns, context);
	    }
	  } else if (body) {
	    genNode(body, context);
	  }
	  if (newline || body) {
	    deindent();
	    push("}");
	  }
	  if (isSlot) {
	    if (node.isNonScopedSlot) {
	      push(", undefined, true");
	    }
	    push(")");
	  }
	}
	function genConditionalExpression(node, context) {
	  var test = node.test;
	  var consequent = node.consequent;
	  var alternate = node.alternate;
	  var needNewline = node.newline;
	  var push = context.push;
	  var indent = context.indent;
	  var deindent = context.deindent;
	  var newline = context.newline;
	  if (test.type === 4) {
	    var needsParens = !isSimpleIdentifier(test.content);
	    needsParens && push("(");
	    genExpression(test, context);
	    needsParens && push(")");
	  } else {
	    push("(");
	    genNode(test, context);
	    push(")");
	  }
	  needNewline && indent();
	  context.indentLevel++;
	  needNewline || push(" ");
	  push("? ");
	  genNode(consequent, context);
	  context.indentLevel--;
	  needNewline && newline();
	  needNewline || push(" ");
	  push(": ");
	  var isNested = alternate.type === 19;
	  if (!isNested) {
	    context.indentLevel++;
	  }
	  genNode(alternate, context);
	  if (!isNested) {
	    context.indentLevel--;
	  }
	  needNewline && deindent(
	    true
	    /* without newline */
	  );
	}
	function genCacheExpression(node, context) {
	  var push = context.push;
	  var helper = context.helper;
	  var indent = context.indent;
	  var deindent = context.deindent;
	  var newline = context.newline;
	  push(("_cache[" + (node.index) + "] || ("));
	  if (node.isVNode) {
	    indent();
	    push(((helper(SET_BLOCK_TRACKING)) + "(-1),"));
	    newline();
	  }
	  push(("_cache[" + (node.index) + "] = "));
	  genNode(node.value, context);
	  if (node.isVNode) {
	    push(",");
	    newline();
	    push(((helper(SET_BLOCK_TRACKING)) + "(1),"));
	    newline();
	    push(("_cache[" + (node.index) + "]"));
	    deindent();
	  }
	  push(")");
	}

	function walkIdentifiers(root, onIdentifier, includeAll, parentStack, knownIds) {

	  {
	    return;
	  }
	}
	function isReferencedIdentifier(id, parent, parentStack) {
	  {
	    return false;
	  }
	}
	function isInDestructureAssignment(parent, parentStack) {
	  if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
	    var i = parentStack.length;
	    while (i--) {
	      var p = parentStack[i];
	      if (p.type === "AssignmentExpression") {
	        return true;
	      } else if (p.type !== "ObjectProperty" && !p.type.endsWith("Pattern")) {
	        break;
	      }
	    }
	  }
	  return false;
	}
	function walkFunctionParams(node, onIdent) {
	  for (var p of node.params) {
	    for (var id of extractIdentifiers(p)) {
	      onIdent(id);
	    }
	  }
	}
	function walkBlockDeclarations(block, onIdent) {
	  for (var stmt of block.body) {
	    if (stmt.type === "VariableDeclaration") {
	      if (stmt.declare)
	        { continue; }
	      for (var decl of stmt.declarations) {
	        for (var id of extractIdentifiers(decl.id)) {
	          onIdent(id);
	        }
	      }
	    } else if (stmt.type === "FunctionDeclaration" || stmt.type === "ClassDeclaration") {
	      if (stmt.declare || !stmt.id)
	        { continue; }
	      onIdent(stmt.id);
	    }
	  }
	}
	function extractIdentifiers(param, nodes) {
	  if ( nodes === void 0 ) nodes = [];

	  switch (param.type) {
	    case "Identifier":
	      nodes.push(param);
	      break;
	    case "MemberExpression":
	      var object = param;
	      while (object.type === "MemberExpression") {
	        object = object.object;
	      }
	      nodes.push(object);
	      break;
	    case "ObjectPattern":
	      for (var prop of param.properties) {
	        if (prop.type === "RestElement") {
	          extractIdentifiers(prop.argument, nodes);
	        } else {
	          extractIdentifiers(prop.value, nodes);
	        }
	      }
	      break;
	    case "ArrayPattern":
	      param.elements.forEach(function (element) {
	        if (element)
	          { extractIdentifiers(element, nodes); }
	      });
	      break;
	    case "RestElement":
	      extractIdentifiers(param.argument, nodes);
	      break;
	    case "AssignmentPattern":
	      extractIdentifiers(param.left, nodes);
	      break;
	  }
	  return nodes;
	}
	var isFunctionType = function (node) {
	  return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
	};
	var isStaticProperty = function (node) { return node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed; };
	var isStaticPropertyKey = function (node, parent) { return isStaticProperty(parent) && parent.key === node; };
	var TS_NODE_TYPES = [
	  "TSAsExpression",
	  // foo as number
	  "TSTypeAssertion",
	  // (<number>foo)
	  "TSNonNullExpression",
	  // foo!
	  "TSInstantiationExpression",
	  // foo<string>
	  "TSSatisfiesExpression"
	  // foo satisfies T
	];

	var prohibitedKeywordRE = new RegExp(
	  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
	);
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
	function validateBrowserExpression(node, context, asParams, asRawStatements) {
	  if ( asParams === void 0 ) asParams = false;
	  if ( asRawStatements === void 0 ) asRawStatements = false;

	  var exp = node.content;
	  if (!exp.trim()) {
	    return;
	  }
	  try {
	    new Function(
	      asRawStatements ? (" " + exp + " ") : ("return " + (asParams ? ("(" + exp + ") => {}") : ("(" + exp + ")")))
	    );
	  } catch (e) {
	    var message = e.message;
	    var keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      message = "avoid using JavaScript keyword as property name: \"" + (keywordMatch[0]) + "\"";
	    }
	    context.onError(
	      createCompilerError(
	        45,
	        node.loc,
	        void 0,
	        message
	      )
	    );
	  }
	}

	var transformExpression = function (node, context) {
	  if (node.type === 5) {
	    node.content = processExpression(
	      node.content,
	      context
	    );
	  } else if (node.type === 1) {
	    for (var i = 0; i < node.props.length; i++) {
	      var dir = node.props[i];
	      if (dir.type === 7 && dir.name !== "for") {
	        var exp = dir.exp;
	        var arg = dir.arg;
	        if (exp && exp.type === 4 && !(dir.name === "on" && arg)) {
	          dir.exp = processExpression(
	            exp,
	            context,
	            // slot args must be processed as function params
	            dir.name === "slot"
	          );
	        }
	        if (arg && arg.type === 4 && !arg.isStatic) {
	          dir.arg = processExpression(arg, context);
	        }
	      }
	    }
	  }
	};
	function processExpression(node, context, asParams, asRawStatements, localVars) {
	  if ( asParams === void 0 ) asParams = false;
	  if ( asRawStatements === void 0 ) asRawStatements = false;
	  if ( localVars === void 0 ) localVars = Object.create(context.identifiers);

	  {
	    if (!!(process.env.NODE_ENV !== "production")) {
	      validateBrowserExpression(node, context, asParams, asRawStatements);
	    }
	    return node;
	  }
	}
	function stringifyExpression(exp) {
	  if (isString(exp)) {
	    return exp;
	  } else if (exp.type === 4) {
	    return exp.content;
	  } else {
	    return exp.children.map(stringifyExpression).join("");
	  }
	}

	var transformIf = createStructuralDirectiveTransform(
	  /^(if|else|else-if)$/,
	  function (node, dir, context) {
	    return processIf(node, dir, context, function (ifNode, branch, isRoot) {
	      var siblings = context.parent.children;
	      var i = siblings.indexOf(ifNode);
	      var key = 0;
	      while (i-- >= 0) {
	        var sibling = siblings[i];
	        if (sibling && sibling.type === 9) {
	          key += sibling.branches.length;
	        }
	      }
	      return function () {
	        if (isRoot) {
	          ifNode.codegenNode = createCodegenNodeForBranch(
	            branch,
	            key,
	            context
	          );
	        } else {
	          var parentCondition = getParentCondition(ifNode.codegenNode);
	          parentCondition.alternate = createCodegenNodeForBranch(
	            branch,
	            key + ifNode.branches.length - 1,
	            context
	          );
	        }
	      };
	    });
	  }
	);
	function processIf(node, dir, context, processCodegen) {
	  if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
	    var loc = dir.exp ? dir.exp.loc : node.loc;
	    context.onError(
	      createCompilerError(28, dir.loc)
	    );
	    dir.exp = createSimpleExpression("true", false, loc);
	  }
	  if (!!(process.env.NODE_ENV !== "production") && true && dir.exp) {
	    validateBrowserExpression(dir.exp, context);
	  }
	  if (dir.name === "if") {
	    var branch = createIfBranch(node, dir);
	    var ifNode = {
	      type: 9,
	      loc: node.loc,
	      branches: [branch]
	    };
	    context.replaceNode(ifNode);
	    if (processCodegen) {
	      return processCodegen(ifNode, branch, true);
	    }
	  } else {
	    var siblings = context.parent.children;
	    var comments = [];
	    var i = siblings.indexOf(node);
	    while (i-- >= -1) {
	      var sibling = siblings[i];
	      if (sibling && sibling.type === 3) {
	        context.removeNode(sibling);
	        !!(process.env.NODE_ENV !== "production") && comments.unshift(sibling);
	        continue;
	      }
	      if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
	        context.removeNode(sibling);
	        continue;
	      }
	      if (sibling && sibling.type === 9) {
	        if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
	          context.onError(
	            createCompilerError(30, node.loc)
	          );
	        }
	        context.removeNode();
	        var branch$1 = createIfBranch(node, dir);
	        if (!!(process.env.NODE_ENV !== "production") && comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
	        !(context.parent && context.parent.type === 1 && isBuiltInType(context.parent.tag, "transition"))) {
	          branch$1.children = comments.concat( branch$1.children);
	        }
	        if (!!(process.env.NODE_ENV !== "production") || false) {
	          var key = branch$1.userKey;
	          if (key) {
	            sibling.branches.forEach(function (ref) {
	              var userKey = ref.userKey;

	              if (isSameKey(userKey, key)) {
	                context.onError(
	                  createCompilerError(
	                    29,
	                    branch$1.userKey.loc
	                  )
	                );
	              }
	            });
	          }
	        }
	        sibling.branches.push(branch$1);
	        var onExit = processCodegen && processCodegen(sibling, branch$1, false);
	        traverseNode(branch$1, context);
	        if (onExit)
	          { onExit(); }
	        context.currentNode = null;
	      } else {
	        context.onError(
	          createCompilerError(30, node.loc)
	        );
	      }
	      break;
	    }
	  }
	}
	function createIfBranch(node, dir) {
	  var isTemplateIf = node.tagType === 3;
	  return {
	    type: 10,
	    loc: node.loc,
	    condition: dir.name === "else" ? void 0 : dir.exp,
	    children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
	    userKey: findProp(node, "key"),
	    isTemplateIf: isTemplateIf
	  };
	}
	function createCodegenNodeForBranch(branch, keyIndex, context) {
	  if (branch.condition) {
	    return createConditionalExpression(
	      branch.condition,
	      createChildrenCodegenNode(branch, keyIndex, context),
	      // make sure to pass in asBlock: true so that the comment node call
	      // closes the current block.
	      createCallExpression(context.helper(CREATE_COMMENT), [
	        !!(process.env.NODE_ENV !== "production") ? '"v-if"' : '""',
	        "true"
	      ])
	    );
	  } else {
	    return createChildrenCodegenNode(branch, keyIndex, context);
	  }
	}
	function createChildrenCodegenNode(branch, keyIndex, context) {
	  var helper = context.helper;
	  var keyProperty = createObjectProperty(
	    "key",
	    createSimpleExpression(
	      ("" + keyIndex),
	      false,
	      locStub,
	      2
	    )
	  );
	  var children = branch.children;
	  var firstChild = children[0];
	  var needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
	  if (needFragmentWrapper) {
	    if (children.length === 1 && firstChild.type === 11) {
	      var vnodeCall = firstChild.codegenNode;
	      injectProp(vnodeCall, keyProperty, context);
	      return vnodeCall;
	    } else {
	      var patchFlag = 64;
	      var patchFlagText = PatchFlagNames[64];
	      if (!!(process.env.NODE_ENV !== "production") && !branch.isTemplateIf && children.filter(function (c) { return c.type !== 3; }).length === 1) {
	        patchFlag |= 2048;
	        patchFlagText += ", " + (PatchFlagNames[2048]);
	      }
	      return createVNodeCall(
	        context,
	        helper(FRAGMENT),
	        createObjectExpression([keyProperty]),
	        children,
	        patchFlag + (!!(process.env.NODE_ENV !== "production") ? (" /* " + patchFlagText + " */") : ""),
	        void 0,
	        void 0,
	        true,
	        false,
	        false,
	        branch.loc
	      );
	    }
	  } else {
	    var ret = firstChild.codegenNode;
	    var vnodeCall$1 = getMemoedVNodeCall(ret);
	    if (vnodeCall$1.type === 13) {
	      convertToBlock(vnodeCall$1, context);
	    }
	    injectProp(vnodeCall$1, keyProperty, context);
	    return ret;
	  }
	}
	function isSameKey(a, b) {
	  if (!a || a.type !== b.type) {
	    return false;
	  }
	  if (a.type === 6) {
	    if (a.value.content !== b.value.content) {
	      return false;
	    }
	  } else {
	    var exp = a.exp;
	    var branchExp = b.exp;
	    if (exp.type !== branchExp.type) {
	      return false;
	    }
	    if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
	      return false;
	    }
	  }
	  return true;
	}
	function getParentCondition(node) {
	  while (true) {
	    if (node.type === 19) {
	      if (node.alternate.type === 19) {
	        node = node.alternate;
	      } else {
	        return node;
	      }
	    } else if (node.type === 20) {
	      node = node.value;
	    }
	  }
	}

	var transformFor = createStructuralDirectiveTransform(
	  "for",
	  function (node, dir, context) {
	    var helper = context.helper;
	    var removeHelper = context.removeHelper;
	    return processFor(node, dir, context, function (forNode) {
	      var renderExp = createCallExpression(helper(RENDER_LIST), [
	        forNode.source
	      ]);
	      var isTemplate = isTemplateNode(node);
	      var memo = findDir(node, "memo");
	      var keyProp = findProp(node, "key");
	      var keyExp = keyProp && (keyProp.type === 6 ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
	      var keyProperty = keyProp ? createObjectProperty("key", keyExp) : null;
	      var isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
	      var fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
	      forNode.codegenNode = createVNodeCall(
	        context,
	        helper(FRAGMENT),
	        void 0,
	        renderExp,
	        fragmentFlag + (!!(process.env.NODE_ENV !== "production") ? (" /* " + (PatchFlagNames[fragmentFlag]) + " */") : ""),
	        void 0,
	        void 0,
	        true,
	        !isStableFragment,
	        false,
	        node.loc
	      );
	      return function () {
	        var childBlock;
	        var children = forNode.children;
	        if ((!!(process.env.NODE_ENV !== "production") || false) && isTemplate) {
	          node.children.some(function (c) {
	            if (c.type === 1) {
	              var key = findProp(c, "key");
	              if (key) {
	                context.onError(
	                  createCompilerError(
	                    33,
	                    key.loc
	                  )
	                );
	                return true;
	              }
	            }
	          });
	        }
	        var needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
	        var slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
	        if (slotOutlet) {
	          childBlock = slotOutlet.codegenNode;
	          if (isTemplate && keyProperty) {
	            injectProp(childBlock, keyProperty, context);
	          }
	        } else if (needFragmentWrapper) {
	          childBlock = createVNodeCall(
	            context,
	            helper(FRAGMENT),
	            keyProperty ? createObjectExpression([keyProperty]) : void 0,
	            node.children,
	            64 + (!!(process.env.NODE_ENV !== "production") ? (" /* " + (PatchFlagNames[64]) + " */") : ""),
	            void 0,
	            void 0,
	            true,
	            void 0,
	            false
	            /* isComponent */
	          );
	        } else {
	          childBlock = children[0].codegenNode;
	          if (isTemplate && keyProperty) {
	            injectProp(childBlock, keyProperty, context);
	          }
	          if (childBlock.isBlock !== !isStableFragment) {
	            if (childBlock.isBlock) {
	              removeHelper(OPEN_BLOCK);
	              removeHelper(
	                getVNodeBlockHelper(context.inSSR, childBlock.isComponent)
	              );
	            } else {
	              removeHelper(
	                getVNodeHelper(context.inSSR, childBlock.isComponent)
	              );
	            }
	          }
	          childBlock.isBlock = !isStableFragment;
	          if (childBlock.isBlock) {
	            helper(OPEN_BLOCK);
	            helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
	          } else {
	            helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
	          }
	        }
	        if (memo) {
	          var loop = createFunctionExpression(
	            createForLoopParams(forNode.parseResult, [
	              createSimpleExpression("_cached")
	            ])
	          );
	          loop.body = createBlockStatement([
	            createCompoundExpression(["const _memo = (", memo.exp, ")"]),
	            createCompoundExpression([
	              "if (_cached" ].concat( keyExp ? [" && _cached.key === ", keyExp] : [],
	              [(" && " + (context.helperString(
	                IS_MEMO_SAME
	              )) + "(_cached, _memo)) return _cached")]
	            )),
	            createCompoundExpression(["const _item = ", childBlock]),
	            createSimpleExpression("_item.memo = _memo"),
	            createSimpleExpression("return _item")
	          ]);
	          renderExp.arguments.push(
	            loop,
	            createSimpleExpression("_cache"),
	            createSimpleExpression(String(context.cached++))
	          );
	        } else {
	          renderExp.arguments.push(
	            createFunctionExpression(
	              createForLoopParams(forNode.parseResult),
	              childBlock,
	              true
	              /* force newline */
	            )
	          );
	        }
	      };
	    });
	  }
	);
	function processFor(node, dir, context, processCodegen) {
	  if (!dir.exp) {
	    context.onError(
	      createCompilerError(31, dir.loc)
	    );
	    return;
	  }
	  var parseResult = parseForExpression(
	    // can only be simple expression because vFor transform is applied
	    // before expression transform.
	    dir.exp,
	    context
	  );
	  if (!parseResult) {
	    context.onError(
	      createCompilerError(32, dir.loc)
	    );
	    return;
	  }
	  context.addIdentifiers;
	  context.removeIdentifiers;
	  var scopes = context.scopes;
	  var source = parseResult.source;
	  var value = parseResult.value;
	  var key = parseResult.key;
	  var index = parseResult.index;
	  var forNode = {
	    type: 11,
	    loc: dir.loc,
	    source: source,
	    valueAlias: value,
	    keyAlias: key,
	    objectIndexAlias: index,
	    parseResult: parseResult,
	    children: isTemplateNode(node) ? node.children : [node]
	  };
	  context.replaceNode(forNode);
	  scopes.vFor++;
	  var onExit = processCodegen && processCodegen(forNode);
	  return function () {
	    scopes.vFor--;
	    if (onExit)
	      { onExit(); }
	  };
	}
	var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
	var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
	var stripParensRE = /^\(|\)$/g;
	function parseForExpression(input, context) {
	  var loc = input.loc;
	  var exp = input.content;
	  var inMatch = exp.match(forAliasRE);
	  if (!inMatch)
	    { return; }
	  var LHS = inMatch[1];
	  var RHS = inMatch[2];
	  var result = {
	    source: createAliasExpression(
	      loc,
	      RHS.trim(),
	      exp.indexOf(RHS, LHS.length)
	    ),
	    value: void 0,
	    key: void 0,
	    index: void 0
	  };
	  if (!!(process.env.NODE_ENV !== "production") && true) {
	    validateBrowserExpression(result.source, context);
	  }
	  var valueContent = LHS.trim().replace(stripParensRE, "").trim();
	  var trimmedOffset = LHS.indexOf(valueContent);
	  var iteratorMatch = valueContent.match(forIteratorRE);
	  if (iteratorMatch) {
	    valueContent = valueContent.replace(forIteratorRE, "").trim();
	    var keyContent = iteratorMatch[1].trim();
	    var keyOffset;
	    if (keyContent) {
	      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
	      result.key = createAliasExpression(loc, keyContent, keyOffset);
	      if (!!(process.env.NODE_ENV !== "production") && true) {
	        validateBrowserExpression(
	          result.key,
	          context,
	          true
	        );
	      }
	    }
	    if (iteratorMatch[2]) {
	      var indexContent = iteratorMatch[2].trim();
	      if (indexContent) {
	        result.index = createAliasExpression(
	          loc,
	          indexContent,
	          exp.indexOf(
	            indexContent,
	            result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length
	          )
	        );
	        if (!!(process.env.NODE_ENV !== "production") && true) {
	          validateBrowserExpression(
	            result.index,
	            context,
	            true
	          );
	        }
	      }
	    }
	  }
	  if (valueContent) {
	    result.value = createAliasExpression(loc, valueContent, trimmedOffset);
	    if (!!(process.env.NODE_ENV !== "production") && true) {
	      validateBrowserExpression(
	        result.value,
	        context,
	        true
	      );
	    }
	  }
	  return result;
	}
	function createAliasExpression(range, content, offset) {
	  return createSimpleExpression(
	    content,
	    false,
	    getInnerRange(range, offset, content.length)
	  );
	}
	function createForLoopParams(ref, memoArgs) {
	  var value = ref.value;
	  var key = ref.key;
	  var index = ref.index;
	  if ( memoArgs === void 0 ) memoArgs = [];

	  return createParamsList([value, key, index ].concat( memoArgs));
	}
	function createParamsList(args) {
	  var i = args.length;
	  while (i--) {
	    if (args[i])
	      { break; }
	  }
	  return args.slice(0, i + 1).map(function (arg, i2) { return arg || createSimpleExpression("_".repeat(i2 + 1), false); });
	}

	var defaultFallback = createSimpleExpression("undefined", false);
	var trackSlotScopes = function (node, context) {
	  if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
	    var vSlot = findDir(node, "slot");
	    if (vSlot) {
	      vSlot.exp;
	      context.scopes.vSlot++;
	      return function () {
	        context.scopes.vSlot--;
	      };
	    }
	  }
	};
	var trackVForSlotScopes = function (node, context) {
	  var vFor;
	  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, "for"))) {
	    var result = vFor.parseResult = parseForExpression(
	      vFor.exp,
	      context
	    );
	    if (result) {
	      var value = result.value;
	      var key = result.key;
	      var index = result.index;
	      var addIdentifiers = context.addIdentifiers;
	      var removeIdentifiers = context.removeIdentifiers;
	      value && addIdentifiers(value);
	      key && addIdentifiers(key);
	      index && addIdentifiers(index);
	      return function () {
	        value && removeIdentifiers(value);
	        key && removeIdentifiers(key);
	        index && removeIdentifiers(index);
	      };
	    }
	  }
	};
	var buildClientSlotFn = function (props, children, loc) { return createFunctionExpression(
	  props,
	  children,
	  false,
	  true,
	  children.length ? children[0].loc : loc
	); };
	function buildSlots(node, context, buildSlotFn) {
	  if ( buildSlotFn === void 0 ) buildSlotFn = buildClientSlotFn;

	  context.helper(WITH_CTX);
	  var children = node.children;
	  var loc = node.loc;
	  var slotsProperties = [];
	  var dynamicSlots = [];
	  var hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
	  var onComponentSlot = findDir(node, "slot", true);
	  if (onComponentSlot) {
	    var arg = onComponentSlot.arg;
	    var exp = onComponentSlot.exp;
	    if (arg && !isStaticExp(arg)) {
	      hasDynamicSlots = true;
	    }
	    slotsProperties.push(
	      createObjectProperty(
	        arg || createSimpleExpression("default", true),
	        buildSlotFn(exp, children, loc)
	      )
	    );
	  }
	  var hasTemplateSlots = false;
	  var hasNamedDefaultSlot = false;
	  var implicitDefaultChildren = [];
	  var seenSlotNames = /* @__PURE__ */ new Set();
	  var conditionalBranchIndex = 0;
	  for (var i = 0; i < children.length; i++) {
	    var slotElement = children[i];
	    var slotDir = (void 0);
	    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
	      if (slotElement.type !== 3) {
	        implicitDefaultChildren.push(slotElement);
	      }
	      continue;
	    }
	    if (onComponentSlot) {
	      context.onError(
	        createCompilerError(37, slotDir.loc)
	      );
	      break;
	    }
	    hasTemplateSlots = true;
	    var slotChildren = slotElement.children;
	    var slotLoc = slotElement.loc;
	    var slotName = slotDir.arg; if ( slotName === void 0 ) slotName = createSimpleExpression("default", true);
	    var slotProps = slotDir.exp;
	    var dirLoc = slotDir.loc;
	    var staticSlotName = (void 0);
	    if (isStaticExp(slotName)) {
	      staticSlotName = slotName ? slotName.content : "default";
	    } else {
	      hasDynamicSlots = true;
	    }
	    var slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
	    var vIf = (void 0);
	    var vElse = (void 0);
	    var vFor = (void 0);
	    if (vIf = findDir(slotElement, "if")) {
	      hasDynamicSlots = true;
	      dynamicSlots.push(
	        createConditionalExpression(
	          vIf.exp,
	          buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++),
	          defaultFallback
	        )
	      );
	    } else if (vElse = findDir(
	      slotElement,
	      /^else(-if)?$/,
	      true
	      /* allowEmpty */
	    )) {
	      var j = i;
	      var prev = (void 0);
	      while (j--) {
	        prev = children[j];
	        if (prev.type !== 3) {
	          break;
	        }
	      }
	      if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
	        children.splice(i, 1);
	        i--;
	        var conditional = dynamicSlots[dynamicSlots.length - 1];
	        while (conditional.alternate.type === 19) {
	          conditional = conditional.alternate;
	        }
	        conditional.alternate = vElse.exp ? createConditionalExpression(
	          vElse.exp,
	          buildDynamicSlot(
	            slotName,
	            slotFunction,
	            conditionalBranchIndex++
	          ),
	          defaultFallback
	        ) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
	      } else {
	        context.onError(
	          createCompilerError(30, vElse.loc)
	        );
	      }
	    } else if (vFor = findDir(slotElement, "for")) {
	      hasDynamicSlots = true;
	      var parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);
	      if (parseResult) {
	        dynamicSlots.push(
	          createCallExpression(context.helper(RENDER_LIST), [
	            parseResult.source,
	            createFunctionExpression(
	              createForLoopParams(parseResult),
	              buildDynamicSlot(slotName, slotFunction),
	              true
	              /* force newline */
	            )
	          ])
	        );
	      } else {
	        context.onError(
	          createCompilerError(32, vFor.loc)
	        );
	      }
	    } else {
	      if (staticSlotName) {
	        if (seenSlotNames.has(staticSlotName)) {
	          context.onError(
	            createCompilerError(
	              38,
	              dirLoc
	            )
	          );
	          continue;
	        }
	        seenSlotNames.add(staticSlotName);
	        if (staticSlotName === "default") {
	          hasNamedDefaultSlot = true;
	        }
	      }
	      slotsProperties.push(createObjectProperty(slotName, slotFunction));
	    }
	  }
	  if (!onComponentSlot) {
	    var buildDefaultSlotProperty = function (props, children2) {
	      var fn = buildSlotFn(props, children2, loc);
	      if (context.compatConfig) {
	        fn.isNonScopedSlot = true;
	      }
	      return createObjectProperty("default", fn);
	    };
	    if (!hasTemplateSlots) {
	      slotsProperties.push(buildDefaultSlotProperty(void 0, children));
	    } else if (implicitDefaultChildren.length && // #3766
	    // with whitespace: 'preserve', whitespaces between slots will end up in
	    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
	    implicitDefaultChildren.some(function (node2) { return isNonWhitespaceContent(node2); })) {
	      if (hasNamedDefaultSlot) {
	        context.onError(
	          createCompilerError(
	            39,
	            implicitDefaultChildren[0].loc
	          )
	        );
	      } else {
	        slotsProperties.push(
	          buildDefaultSlotProperty(void 0, implicitDefaultChildren)
	        );
	      }
	    }
	  }
	  var slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
	  var slots = createObjectExpression(
	    slotsProperties.concat(
	      createObjectProperty(
	        "_",
	        // 2 = compiled but dynamic = can skip normalization, but must run diff
	        // 1 = compiled and static = can skip normalization AND diff as optimized
	        createSimpleExpression(
	          slotFlag + (!!(process.env.NODE_ENV !== "production") ? (" /* " + (slotFlagsText[slotFlag]) + " */") : ""),
	          false
	        )
	      )
	    ),
	    loc
	  );
	  if (dynamicSlots.length) {
	    slots = createCallExpression(context.helper(CREATE_SLOTS), [
	      slots,
	      createArrayExpression(dynamicSlots)
	    ]);
	  }
	  return {
	    slots: slots,
	    hasDynamicSlots: hasDynamicSlots
	  };
	}
	function buildDynamicSlot(name, fn, index) {
	  var props = [
	    createObjectProperty("name", name),
	    createObjectProperty("fn", fn)
	  ];
	  if (index != null) {
	    props.push(
	      createObjectProperty("key", createSimpleExpression(String(index), true))
	    );
	  }
	  return createObjectExpression(props);
	}
	function hasForwardedSlots(children) {
	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    switch (child.type) {
	      case 1:
	        if (child.tagType === 2 || hasForwardedSlots(child.children)) {
	          return true;
	        }
	        break;
	      case 9:
	        if (hasForwardedSlots(child.branches))
	          { return true; }
	        break;
	      case 10:
	      case 11:
	        if (hasForwardedSlots(child.children))
	          { return true; }
	        break;
	    }
	  }
	  return false;
	}
	function isNonWhitespaceContent(node) {
	  if (node.type !== 2 && node.type !== 12)
	    { return true; }
	  return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
	}

	var directiveImportMap = /* @__PURE__ */ new WeakMap();
	var transformElement = function (node, context) {
	  return function postTransformElement() {
	    node = context.currentNode;
	    if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
	      return;
	    }
	    var tag = node.tag;
	    var props = node.props;
	    var isComponent = node.tagType === 1;
	    var vnodeTag = isComponent ? resolveComponentType(node, context) : ("\"" + tag + "\"");
	    var isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
	    var vnodeProps;
	    var vnodeChildren;
	    var vnodePatchFlag;
	    var patchFlag = 0;
	    var vnodeDynamicProps;
	    var dynamicPropNames;
	    var vnodeDirectives;
	    var shouldUseBlock = (
	      // dynamic component may resolve to plain elements
	      isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && // <svg> and <foreignObject> must be forced into blocks so that block
	      // updates inside get proper isSVG flag at runtime. (#639, #643)
	      // This is technically web-specific, but splitting the logic out of core
	      // leads to too much unnecessary complexity.
	      (tag === "svg" || tag === "foreignObject")
	    );
	    if (props.length > 0) {
	      var propsBuildResult = buildProps(
	        node,
	        context,
	        void 0,
	        isComponent,
	        isDynamicComponent
	      );
	      vnodeProps = propsBuildResult.props;
	      patchFlag = propsBuildResult.patchFlag;
	      dynamicPropNames = propsBuildResult.dynamicPropNames;
	      var directives = propsBuildResult.directives;
	      vnodeDirectives = directives && directives.length ? createArrayExpression(
	        directives.map(function (dir) { return buildDirectiveArgs(dir, context); })
	      ) : void 0;
	      if (propsBuildResult.shouldUseBlock) {
	        shouldUseBlock = true;
	      }
	    }
	    if (node.children.length > 0) {
	      if (vnodeTag === KEEP_ALIVE) {
	        shouldUseBlock = true;
	        patchFlag |= 1024;
	        if (!!(process.env.NODE_ENV !== "production") && node.children.length > 1) {
	          context.onError(
	            createCompilerError(46, {
	              start: node.children[0].loc.start,
	              end: node.children[node.children.length - 1].loc.end,
	              source: ""
	            })
	          );
	        }
	      }
	      var shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
	      vnodeTag !== TELEPORT && // explained above.
	      vnodeTag !== KEEP_ALIVE;
	      if (shouldBuildAsSlots) {
	        var ref = buildSlots(node, context);
	        var slots = ref.slots;
	        var hasDynamicSlots = ref.hasDynamicSlots;
	        vnodeChildren = slots;
	        if (hasDynamicSlots) {
	          patchFlag |= 1024;
	        }
	      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
	        var child = node.children[0];
	        var type = child.type;
	        var hasDynamicTextChild = type === 5 || type === 8;
	        if (hasDynamicTextChild && getConstantType(child, context) === 0) {
	          patchFlag |= 1;
	        }
	        if (hasDynamicTextChild || type === 2) {
	          vnodeChildren = child;
	        } else {
	          vnodeChildren = node.children;
	        }
	      } else {
	        vnodeChildren = node.children;
	      }
	    }
	    if (patchFlag !== 0) {
	      if (!!(process.env.NODE_ENV !== "production")) {
	        if (patchFlag < 0) {
	          vnodePatchFlag = patchFlag + " /* " + (PatchFlagNames[patchFlag]) + " */";
	        } else {
	          var flagNames = Object.keys(PatchFlagNames).map(Number).filter(function (n) { return n > 0 && patchFlag & n; }).map(function (n) { return PatchFlagNames[n]; }).join(", ");
	          vnodePatchFlag = patchFlag + " /* " + flagNames + " */";
	        }
	      } else {
	        vnodePatchFlag = String(patchFlag);
	      }
	      if (dynamicPropNames && dynamicPropNames.length) {
	        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
	      }
	    }
	    node.codegenNode = createVNodeCall(
	      context,
	      vnodeTag,
	      vnodeProps,
	      vnodeChildren,
	      vnodePatchFlag,
	      vnodeDynamicProps,
	      vnodeDirectives,
	      !!shouldUseBlock,
	      false,
	      isComponent,
	      node.loc
	    );
	  };
	};
	function resolveComponentType(node, context, ssr) {
	  if ( ssr === void 0 ) ssr = false;

	  var tag = node.tag;
	  var isExplicitDynamic = isComponentTag(tag);
	  var isProp = findProp(node, "is");
	  if (isProp) {
	    if (isExplicitDynamic || isCompatEnabled(
	      "COMPILER_IS_ON_ELEMENT",
	      context
	    )) {
	      var exp = isProp.type === 6 ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
	      if (exp) {
	        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
	          exp
	        ]);
	      }
	    } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
	      tag = isProp.value.content.slice(4);
	    }
	  }
	  var isDir = !isExplicitDynamic && findDir(node, "is");
	  if (isDir && isDir.exp) {
	    if (!!(process.env.NODE_ENV !== "production")) {
	      context.onWarn(
	        createCompilerError(52, isDir.loc)
	      );
	    }
	    return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
	      isDir.exp
	    ]);
	  }
	  var builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
	  if (builtIn) {
	    if (!ssr)
	      { context.helper(builtIn); }
	    return builtIn;
	  }
	  context.helper(RESOLVE_COMPONENT);
	  context.components.add(tag);
	  return toValidAssetId(tag, "component");
	}
	function buildProps(node, context, props, isComponent, isDynamicComponent, ssr) {
	  if ( props === void 0 ) props = node.props;
	  if ( ssr === void 0 ) ssr = false;

	  var tag = node.tag;
	  var elementLoc = node.loc;
	  var children = node.children;
	  var properties = [];
	  var mergeArgs = [];
	  var runtimeDirectives = [];
	  var hasChildren = children.length > 0;
	  var shouldUseBlock = false;
	  var patchFlag = 0;
	  var hasRef = false;
	  var hasClassBinding = false;
	  var hasStyleBinding = false;
	  var hasHydrationEventBinding = false;
	  var hasDynamicKeys = false;
	  var hasVnodeHook = false;
	  var dynamicPropNames = [];
	  var pushMergeArg = function (arg) {
	    if (properties.length) {
	      mergeArgs.push(
	        createObjectExpression(dedupeProperties(properties), elementLoc)
	      );
	      properties = [];
	    }
	    if (arg)
	      { mergeArgs.push(arg); }
	  };
	  var analyzePatchFlag = function (ref) {
	    var key = ref.key;
	    var value = ref.value;

	    if (isStaticExp(key)) {
	      var name = key.content;
	      var isEventHandler = isOn(name);
	      if (isEventHandler && (!isComponent || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
	      // dedicated fast path.
	      name.toLowerCase() !== "onclick" && // omit v-model handlers
	      name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
	      !isReservedProp(name)) {
	        hasHydrationEventBinding = true;
	      }
	      if (isEventHandler && isReservedProp(name)) {
	        hasVnodeHook = true;
	      }
	      if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
	        return;
	      }
	      if (name === "ref") {
	        hasRef = true;
	      } else if (name === "class") {
	        hasClassBinding = true;
	      } else if (name === "style") {
	        hasStyleBinding = true;
	      } else if (name !== "key" && !dynamicPropNames.includes(name)) {
	        dynamicPropNames.push(name);
	      }
	      if (isComponent && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
	        dynamicPropNames.push(name);
	      }
	    } else {
	      hasDynamicKeys = true;
	    }
	  };
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    if (prop.type === 6) {
	      var loc = prop.loc;
	      var name = prop.name;
	      var value = prop.value;
	      var isStatic = true;
	      if (name === "ref") {
	        hasRef = true;
	        if (context.scopes.vFor > 0) {
	          properties.push(
	            createObjectProperty(
	              createSimpleExpression("ref_for", true),
	              createSimpleExpression("true")
	            )
	          );
	        }
	      }
	      if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled(
	        "COMPILER_IS_ON_ELEMENT",
	        context
	      ))) {
	        continue;
	      }
	      properties.push(
	        createObjectProperty(
	          createSimpleExpression(
	            name,
	            true,
	            getInnerRange(loc, 0, name.length)
	          ),
	          createSimpleExpression(
	            value ? value.content : "",
	            isStatic,
	            value ? value.loc : loc
	          )
	        )
	      );
	    } else {
	      var name$1 = prop.name;
	      var arg = prop.arg;
	      var exp = prop.exp;
	      var loc$1 = prop.loc;
	      var isVBind = name$1 === "bind";
	      var isVOn = name$1 === "on";
	      if (name$1 === "slot") {
	        if (!isComponent) {
	          context.onError(
	            createCompilerError(40, loc$1)
	          );
	        }
	        continue;
	      }
	      if (name$1 === "once" || name$1 === "memo") {
	        continue;
	      }
	      if (name$1 === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled(
	        "COMPILER_IS_ON_ELEMENT",
	        context
	      ))) {
	        continue;
	      }
	      if (isVOn && ssr) {
	        continue;
	      }
	      if (
	        // #938: elements with dynamic keys should be forced into blocks
	        isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
	        // before children
	        isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")
	      ) {
	        shouldUseBlock = true;
	      }
	      if (isVBind && isStaticArgOf(arg, "ref") && context.scopes.vFor > 0) {
	        properties.push(
	          createObjectProperty(
	            createSimpleExpression("ref_for", true),
	            createSimpleExpression("true")
	          )
	        );
	      }
	      if (!arg && (isVBind || isVOn)) {
	        hasDynamicKeys = true;
	        if (exp) {
	          if (isVBind) {
	            pushMergeArg();
	            {
	              if (!!(process.env.NODE_ENV !== "production")) {
	                var hasOverridableKeys = mergeArgs.some(function (arg2) {
	                  if (arg2.type === 15) {
	                    return arg2.properties.some(function (ref) {
	                      var key = ref.key;

	                      if (key.type !== 4 || !key.isStatic) {
	                        return true;
	                      }
	                      return key.content !== "class" && key.content !== "style" && !isOn(key.content);
	                    });
	                  } else {
	                    return true;
	                  }
	                });
	                if (hasOverridableKeys) {
	                  checkCompatEnabled(
	                    "COMPILER_V_BIND_OBJECT_ORDER",
	                    context,
	                    loc$1
	                  );
	                }
	              }
	              if (isCompatEnabled(
	                "COMPILER_V_BIND_OBJECT_ORDER",
	                context
	              )) {
	                mergeArgs.unshift(exp);
	                continue;
	              }
	            }
	            mergeArgs.push(exp);
	          } else {
	            pushMergeArg({
	              type: 14,
	              loc: loc$1,
	              callee: context.helper(TO_HANDLERS),
	              arguments: isComponent ? [exp] : [exp, "true"]
	            });
	          }
	        } else {
	          context.onError(
	            createCompilerError(
	              isVBind ? 34 : 35,
	              loc$1
	            )
	          );
	        }
	        continue;
	      }
	      var directiveTransform = context.directiveTransforms[name$1];
	      if (directiveTransform) {
	        var ref = directiveTransform(prop, node, context);
	        var props2 = ref.props;
	        var needRuntime = ref.needRuntime;
	        !ssr && props2.forEach(analyzePatchFlag);
	        if (isVOn && arg && !isStaticExp(arg)) {
	          pushMergeArg(createObjectExpression(props2, elementLoc));
	        } else {
	          properties.push.apply(properties, props2);
	        }
	        if (needRuntime) {
	          runtimeDirectives.push(prop);
	          if (isSymbol(needRuntime)) {
	            directiveImportMap.set(prop, needRuntime);
	          }
	        }
	      } else if (!isBuiltInDirective(name$1)) {
	        runtimeDirectives.push(prop);
	        if (hasChildren) {
	          shouldUseBlock = true;
	        }
	      }
	    }
	  }
	  var propsExpression = void 0;
	  if (mergeArgs.length) {
	    pushMergeArg();
	    if (mergeArgs.length > 1) {
	      propsExpression = createCallExpression(
	        context.helper(MERGE_PROPS),
	        mergeArgs,
	        elementLoc
	      );
	    } else {
	      propsExpression = mergeArgs[0];
	    }
	  } else if (properties.length) {
	    propsExpression = createObjectExpression(
	      dedupeProperties(properties),
	      elementLoc
	    );
	  }
	  if (hasDynamicKeys) {
	    patchFlag |= 16;
	  } else {
	    if (hasClassBinding && !isComponent) {
	      patchFlag |= 2;
	    }
	    if (hasStyleBinding && !isComponent) {
	      patchFlag |= 4;
	    }
	    if (dynamicPropNames.length) {
	      patchFlag |= 8;
	    }
	    if (hasHydrationEventBinding) {
	      patchFlag |= 32;
	    }
	  }
	  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
	    patchFlag |= 512;
	  }
	  if (!context.inSSR && propsExpression) {
	    switch (propsExpression.type) {
	      case 15:
	        var classKeyIndex = -1;
	        var styleKeyIndex = -1;
	        var hasDynamicKey = false;
	        for (var i$1 = 0; i$1 < propsExpression.properties.length; i$1++) {
	          var key = propsExpression.properties[i$1].key;
	          if (isStaticExp(key)) {
	            if (key.content === "class") {
	              classKeyIndex = i$1;
	            } else if (key.content === "style") {
	              styleKeyIndex = i$1;
	            }
	          } else if (!key.isHandlerKey) {
	            hasDynamicKey = true;
	          }
	        }
	        var classProp = propsExpression.properties[classKeyIndex];
	        var styleProp = propsExpression.properties[styleKeyIndex];
	        if (!hasDynamicKey) {
	          if (classProp && !isStaticExp(classProp.value)) {
	            classProp.value = createCallExpression(
	              context.helper(NORMALIZE_CLASS),
	              [classProp.value]
	            );
	          }
	          if (styleProp && // the static style is compiled into an object,
	          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
	          (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
	          // v-bind:style with static literal object
	          styleProp.value.type === 17)) {
	            styleProp.value = createCallExpression(
	              context.helper(NORMALIZE_STYLE),
	              [styleProp.value]
	            );
	          }
	        } else {
	          propsExpression = createCallExpression(
	            context.helper(NORMALIZE_PROPS),
	            [propsExpression]
	          );
	        }
	        break;
	      case 14:
	        break;
	      default:
	        propsExpression = createCallExpression(
	          context.helper(NORMALIZE_PROPS),
	          [
	            createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
	              propsExpression
	            ])
	          ]
	        );
	        break;
	    }
	  }
	  return {
	    props: propsExpression,
	    directives: runtimeDirectives,
	    patchFlag: patchFlag,
	    dynamicPropNames: dynamicPropNames,
	    shouldUseBlock: shouldUseBlock
	  };
	}
	function dedupeProperties(properties) {
	  var knownProps = /* @__PURE__ */ new Map();
	  var deduped = [];
	  for (var i = 0; i < properties.length; i++) {
	    var prop = properties[i];
	    if (prop.key.type === 8 || !prop.key.isStatic) {
	      deduped.push(prop);
	      continue;
	    }
	    var name = prop.key.content;
	    var existing = knownProps.get(name);
	    if (existing) {
	      if (name === "style" || name === "class" || isOn(name)) {
	        mergeAsArray$1(existing, prop);
	      }
	    } else {
	      knownProps.set(name, prop);
	      deduped.push(prop);
	    }
	  }
	  return deduped;
	}
	function mergeAsArray$1(existing, incoming) {
	  if (existing.value.type === 17) {
	    existing.value.elements.push(incoming.value);
	  } else {
	    existing.value = createArrayExpression(
	      [existing.value, incoming.value],
	      existing.loc
	    );
	  }
	}
	function buildDirectiveArgs(dir, context) {
	  var dirArgs = [];
	  var runtime = directiveImportMap.get(dir);
	  if (runtime) {
	    dirArgs.push(context.helperString(runtime));
	  } else {
	    {
	      context.helper(RESOLVE_DIRECTIVE);
	      context.directives.add(dir.name);
	      dirArgs.push(toValidAssetId(dir.name, "directive"));
	    }
	  }
	  var loc = dir.loc;
	  if (dir.exp)
	    { dirArgs.push(dir.exp); }
	  if (dir.arg) {
	    if (!dir.exp) {
	      dirArgs.push("void 0");
	    }
	    dirArgs.push(dir.arg);
	  }
	  if (Object.keys(dir.modifiers).length) {
	    if (!dir.arg) {
	      if (!dir.exp) {
	        dirArgs.push("void 0");
	      }
	      dirArgs.push("void 0");
	    }
	    var trueExpression = createSimpleExpression("true", false, loc);
	    dirArgs.push(
	      createObjectExpression(
	        dir.modifiers.map(
	          function (modifier) { return createObjectProperty(modifier, trueExpression); }
	        ),
	        loc
	      )
	    );
	  }
	  return createArrayExpression(dirArgs, dir.loc);
	}
	function stringifyDynamicPropNames(props) {
	  var propsNamesString = "[";
	  for (var i = 0, l = props.length; i < l; i++) {
	    propsNamesString += JSON.stringify(props[i]);
	    if (i < l - 1)
	      { propsNamesString += ", "; }
	  }
	  return propsNamesString + "]";
	}
	function isComponentTag(tag) {
	  return tag === "component" || tag === "Component";
	}

	var transformSlotOutlet = function (node, context) {
	  if (isSlotOutlet(node)) {
	    var children = node.children;
	    var loc = node.loc;
	    var ref = processSlotOutlet(node, context);
	    var slotName = ref.slotName;
	    var slotProps = ref.slotProps;
	    var slotArgs = [
	      context.prefixIdentifiers ? "_ctx.$slots" : "$slots",
	      slotName,
	      "{}",
	      "undefined",
	      "true"
	    ];
	    var expectedLen = 2;
	    if (slotProps) {
	      slotArgs[2] = slotProps;
	      expectedLen = 3;
	    }
	    if (children.length) {
	      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
	      expectedLen = 4;
	    }
	    if (context.scopeId && !context.slotted) {
	      expectedLen = 5;
	    }
	    slotArgs.splice(expectedLen);
	    node.codegenNode = createCallExpression(
	      context.helper(RENDER_SLOT),
	      slotArgs,
	      loc
	    );
	  }
	};
	function processSlotOutlet(node, context) {
	  var slotName = "\"default\"";
	  var slotProps = void 0;
	  var nonNameProps = [];
	  for (var i = 0; i < node.props.length; i++) {
	    var p = node.props[i];
	    if (p.type === 6) {
	      if (p.value) {
	        if (p.name === "name") {
	          slotName = JSON.stringify(p.value.content);
	        } else {
	          p.name = camelize(p.name);
	          nonNameProps.push(p);
	        }
	      }
	    } else {
	      if (p.name === "bind" && isStaticArgOf(p.arg, "name")) {
	        if (p.exp)
	          { slotName = p.exp; }
	      } else {
	        if (p.name === "bind" && p.arg && isStaticExp(p.arg)) {
	          p.arg.content = camelize(p.arg.content);
	        }
	        nonNameProps.push(p);
	      }
	    }
	  }
	  if (nonNameProps.length > 0) {
	    var ref = buildProps(
	      node,
	      context,
	      nonNameProps,
	      false,
	      false
	    );
	    var props = ref.props;
	    var directives = ref.directives;
	    slotProps = props;
	    if (directives.length) {
	      context.onError(
	        createCompilerError(
	          36,
	          directives[0].loc
	        )
	      );
	    }
	  }
	  return {
	    slotName: slotName,
	    slotProps: slotProps
	  };
	}

	var fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
	var transformOn$1 = function (dir, node, context, augmentor) {
	  var loc = dir.loc;
	  var modifiers = dir.modifiers;
	  var arg = dir.arg;
	  if (!dir.exp && !modifiers.length) {
	    context.onError(createCompilerError(35, loc));
	  }
	  var eventName;
	  if (arg.type === 4) {
	    if (arg.isStatic) {
	      var rawName = arg.content;
	      if (!!(process.env.NODE_ENV !== "production") && rawName.startsWith("vnode")) {
	        context.onWarn(
	          createCompilerError(51, arg.loc)
	        );
	      }
	      if (rawName.startsWith("vue:")) {
	        rawName = "vnode-" + (rawName.slice(4));
	      }
	      var eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? (
	        // for non-element and vnode lifecycle event listeners, auto convert
	        // it to camelCase. See issue #2249
	        toHandlerKey(camelize(rawName))
	      ) : (
	        // preserve case for plain element listeners that have uppercase
	        // letters, as these may be custom elements' custom events
	        ("on:" + rawName)
	      );
	      eventName = createSimpleExpression(eventString, true, arg.loc);
	    } else {
	      eventName = createCompoundExpression([
	        ((context.helperString(TO_HANDLER_KEY)) + "("),
	        arg,
	        ")"
	      ]);
	    }
	  } else {
	    eventName = arg;
	    eventName.children.unshift(((context.helperString(TO_HANDLER_KEY)) + "("));
	    eventName.children.push(")");
	  }
	  var exp = dir.exp;
	  if (exp && !exp.content.trim()) {
	    exp = void 0;
	  }
	  var shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
	  if (exp) {
	    var isMemberExp = isMemberExpression(exp.content);
	    var isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
	    var hasMultipleStatements = exp.content.includes(";");
	    if (!!(process.env.NODE_ENV !== "production") && true) {
	      validateBrowserExpression(
	        exp,
	        context,
	        false,
	        hasMultipleStatements
	      );
	    }
	    if (isInlineStatement || shouldCache && isMemberExp) {
	      exp = createCompoundExpression([
	        ((isInlineStatement ? "$event" : (("") + "(...args)")) + " => " + (hasMultipleStatements ? "{" : "(")),
	        exp,
	        hasMultipleStatements ? "}" : ")"
	      ]);
	    }
	  }
	  var ret = {
	    props: [
	      createObjectProperty(
	        eventName,
	        exp || createSimpleExpression("() => {}", false, loc)
	      )
	    ]
	  };
	  if (augmentor) {
	    ret = augmentor(ret);
	  }
	  if (shouldCache) {
	    ret.props[0].value = context.cache(ret.props[0].value);
	  }
	  ret.props.forEach(function (p) { return p.key.isHandlerKey = true; });
	  return ret;
	};

	var transformBind = function (dir, _node, context) {
	  var exp = dir.exp;
	  var modifiers = dir.modifiers;
	  var loc = dir.loc;
	  var arg = dir.arg;
	  if (arg.type !== 4) {
	    arg.children.unshift("(");
	    arg.children.push(") || \"\"");
	  } else if (!arg.isStatic) {
	    arg.content = (arg.content) + " || \"\"";
	  }
	  if (modifiers.includes("camel")) {
	    if (arg.type === 4) {
	      if (arg.isStatic) {
	        arg.content = camelize(arg.content);
	      } else {
	        arg.content = (context.helperString(CAMELIZE)) + "(" + (arg.content) + ")";
	      }
	    } else {
	      arg.children.unshift(((context.helperString(CAMELIZE)) + "("));
	      arg.children.push(")");
	    }
	  }
	  if (!context.inSSR) {
	    if (modifiers.includes("prop")) {
	      injectPrefix(arg, ".");
	    }
	    if (modifiers.includes("attr")) {
	      injectPrefix(arg, "^");
	    }
	  }
	  if (!exp || exp.type === 4 && !exp.content.trim()) {
	    context.onError(createCompilerError(34, loc));
	    return {
	      props: [createObjectProperty(arg, createSimpleExpression("", true, loc))]
	    };
	  }
	  return {
	    props: [createObjectProperty(arg, exp)]
	  };
	};
	var injectPrefix = function (arg, prefix) {
	  if (arg.type === 4) {
	    if (arg.isStatic) {
	      arg.content = prefix + arg.content;
	    } else {
	      arg.content = "`" + prefix + "${" + (arg.content) + "}`";
	    }
	  } else {
	    arg.children.unshift(("'" + prefix + "' + ("));
	    arg.children.push(")");
	  }
	};

	var transformText = function (node, context) {
	  if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
	    return function () {
	      var children = node.children;
	      var currentContainer = void 0;
	      var hasText = false;
	      for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        if (isText$1(child)) {
	          hasText = true;
	          for (var j = i + 1; j < children.length; j++) {
	            var next = children[j];
	            if (isText$1(next)) {
	              if (!currentContainer) {
	                currentContainer = children[i] = createCompoundExpression(
	                  [child],
	                  child.loc
	                );
	              }
	              currentContainer.children.push(" + ", next);
	              children.splice(j, 1);
	              j--;
	            } else {
	              currentContainer = void 0;
	              break;
	            }
	          }
	        }
	      }
	      if (!hasText || // if this is a plain element with a single text child, leave it
	      // as-is since the runtime has dedicated fast path for this by directly
	      // setting textContent of the element.
	      // for component root it's always normalized anyway.
	      children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
	      // custom directives can potentially add DOM elements arbitrarily,
	      // we need to avoid setting textContent of the element at runtime
	      // to avoid accidentally overwriting the DOM elements added
	      // by the user through custom directives.
	      !node.props.find(
	        function (p) { return p.type === 7 && !context.directiveTransforms[p.name]; }
	      ) && // in compat mode, <template> tags with no special directives
	      // will be rendered as a fragment so its children must be
	      // converted into vnodes.
	      !(node.tag === "template"))) {
	        return;
	      }
	      for (var i$1 = 0; i$1 < children.length; i$1++) {
	        var child$1 = children[i$1];
	        if (isText$1(child$1) || child$1.type === 8) {
	          var callArgs = [];
	          if (child$1.type !== 2 || child$1.content !== " ") {
	            callArgs.push(child$1);
	          }
	          if (!context.ssr && getConstantType(child$1, context) === 0) {
	            callArgs.push(
	              1 + (!!(process.env.NODE_ENV !== "production") ? (" /* " + (PatchFlagNames[1]) + " */") : "")
	            );
	          }
	          children[i$1] = {
	            type: 12,
	            content: child$1,
	            loc: child$1.loc,
	            codegenNode: createCallExpression(
	              context.helper(CREATE_TEXT),
	              callArgs
	            )
	          };
	        }
	      }
	    };
	  }
	};

	var seen$1 = /* @__PURE__ */ new WeakSet();
	var transformOnce = function (node, context) {
	  if (node.type === 1 && findDir(node, "once", true)) {
	    if (seen$1.has(node) || context.inVOnce || context.inSSR) {
	      return;
	    }
	    seen$1.add(node);
	    context.inVOnce = true;
	    context.helper(SET_BLOCK_TRACKING);
	    return function () {
	      context.inVOnce = false;
	      var cur = context.currentNode;
	      if (cur.codegenNode) {
	        cur.codegenNode = context.cache(
	          cur.codegenNode,
	          true
	          /* isVNode */
	        );
	      }
	    };
	  }
	};

	var transformModel$1 = function (dir, node, context) {
	  var exp = dir.exp;
	  var arg = dir.arg;
	  if (!exp) {
	    context.onError(
	      createCompilerError(41, dir.loc)
	    );
	    return createTransformProps();
	  }
	  var rawExp = exp.loc.source;
	  var expString = exp.type === 4 ? exp.content : rawExp;
	  var bindingType = context.bindingMetadata[rawExp];
	  if (bindingType === "props" || bindingType === "props-aliased") {
	    context.onError(createCompilerError(44, exp.loc));
	    return createTransformProps();
	  }
	  var maybeRef = false;
	  if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
	    context.onError(
	      createCompilerError(42, exp.loc)
	    );
	    return createTransformProps();
	  }
	  var propName = arg ? arg : createSimpleExpression("modelValue", true);
	  var eventName = arg ? isStaticExp(arg) ? ("onUpdate:" + (camelize(arg.content))) : createCompoundExpression(['"onUpdate:" + ', arg]) : "onUpdate:modelValue";
	  var assignmentExp;
	  var eventArg = context.isTS ? "($event: any)" : "$event";
	  {
	    assignmentExp = createCompoundExpression([
	      (eventArg + " => (("),
	      exp,
	      ") = $event)"
	    ]);
	  }
	  var props = [
	    // modelValue: foo
	    createObjectProperty(propName, dir.exp),
	    // "onUpdate:modelValue": $event => (foo = $event)
	    createObjectProperty(eventName, assignmentExp)
	  ];
	  if (dir.modifiers.length && node.tagType === 1) {
	    var modifiers = dir.modifiers.map(function (m) { return (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + ": true"; }).join(", ");
	    var modifiersKey = arg ? isStaticExp(arg) ? ((arg.content) + "Modifiers") : createCompoundExpression([arg, ' + "Modifiers"']) : "modelModifiers";
	    props.push(
	      createObjectProperty(
	        modifiersKey,
	        createSimpleExpression(
	          ("{ " + modifiers + " }"),
	          false,
	          dir.loc,
	          2
	        )
	      )
	    );
	  }
	  return createTransformProps(props);
	};
	function createTransformProps(props) {
	  if ( props === void 0 ) props = [];

	  return { props: props };
	}

	var validDivisionCharRE = /[\w).+\-_$\]]/;
	var transformFilter = function (node, context) {
	  if (!isCompatEnabled("COMPILER_FILTER", context)) {
	    return;
	  }
	  if (node.type === 5) {
	    rewriteFilter(node.content, context);
	  }
	  if (node.type === 1) {
	    node.props.forEach(function (prop) {
	      if (prop.type === 7 && prop.name !== "for" && prop.exp) {
	        rewriteFilter(prop.exp, context);
	      }
	    });
	  }
	};
	function rewriteFilter(node, context) {
	  if (node.type === 4) {
	    parseFilter(node, context);
	  } else {
	    for (var i = 0; i < node.children.length; i++) {
	      var child = node.children[i];
	      if (typeof child !== "object")
	        { continue; }
	      if (child.type === 4) {
	        parseFilter(child, context);
	      } else if (child.type === 8) {
	        rewriteFilter(node, context);
	      } else if (child.type === 5) {
	        rewriteFilter(child.content, context);
	      }
	    }
	  }
	}
	function parseFilter(node, context) {
	  var exp = node.content;
	  var inSingle = false;
	  var inDouble = false;
	  var inTemplateString = false;
	  var inRegex = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters = [];
	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      if (c === 39 && prev !== 92)
	        { inSingle = false; }
	    } else if (inDouble) {
	      if (c === 34 && prev !== 92)
	        { inDouble = false; }
	    } else if (inTemplateString) {
	      if (c === 96 && prev !== 92)
	        { inTemplateString = false; }
	    } else if (inRegex) {
	      if (c === 47 && prev !== 92)
	        { inRegex = false; }
	    } else if (c === 124 && // pipe
	    exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
	      if (expression === void 0) {
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 34:
	          inDouble = true;
	          break;
	        case 39:
	          inSingle = true;
	          break;
	        case 96:
	          inTemplateString = true;
	          break;
	        case 40:
	          paren++;
	          break;
	        case 41:
	          paren--;
	          break;
	        case 91:
	          square++;
	          break;
	        case 93:
	          square--;
	          break;
	        case 123:
	          curly++;
	          break;
	        case 125:
	          curly--;
	          break;
	      }
	      if (c === 47) {
	        var j = i - 1;
	        var p = (void 0);
	        for (; j >= 0; j--) {
	          p = exp.charAt(j);
	          if (p !== " ")
	            { break; }
	        }
	        if (!p || !validDivisionCharRE.test(p)) {
	          inRegex = true;
	        }
	      }
	    }
	  }
	  if (expression === void 0) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	  function pushFilter() {
	    filters.push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }
	  if (filters.length) {
	    !!(process.env.NODE_ENV !== "production") && warnDeprecation(
	      "COMPILER_FILTER",
	      context,
	      node.loc
	    );
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i], context);
	    }
	    node.content = expression;
	  }
	}
	function wrapFilter(exp, filter, context) {
	  context.helper(RESOLVE_FILTER);
	  var i = filter.indexOf("(");
	  if (i < 0) {
	    context.filters.add(filter);
	    return ((toValidAssetId(filter, "filter")) + "(" + exp + ")");
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    context.filters.add(name);
	    return ((toValidAssetId(name, "filter")) + "(" + exp + (args !== ")" ? "," + args : args));
	  }
	}

	var seen = /* @__PURE__ */ new WeakSet();
	var transformMemo = function (node, context) {
	  if (node.type === 1) {
	    var dir = findDir(node, "memo");
	    if (!dir || seen.has(node)) {
	      return;
	    }
	    seen.add(node);
	    return function () {
	      var codegenNode = node.codegenNode || context.currentNode.codegenNode;
	      if (codegenNode && codegenNode.type === 13) {
	        if (node.tagType !== 1) {
	          convertToBlock(codegenNode, context);
	        }
	        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
	          dir.exp,
	          createFunctionExpression(void 0, codegenNode),
	          "_cache",
	          String(context.cached++)
	        ]);
	      }
	    };
	  }
	};

	function getBaseTransformPreset(prefixIdentifiers) {
	  return [
	    [
	      transformOnce,
	      transformIf,
	      transformMemo,
	      transformFor,
	      transformFilter ].concat( !!(process.env.NODE_ENV !== "production") ? [transformExpression] : [],
	      [transformSlotOutlet],
	      [transformElement],
	      [trackSlotScopes],
	      [transformText]
	    ),
	    {
	      on: transformOn$1,
	      bind: transformBind,
	      model: transformModel$1
	    }
	  ];
	}
	function baseCompile(template, options) {
	  if ( options === void 0 ) options = {};

	  var onError = options.onError || defaultOnError;
	  var isModuleMode = options.mode === "module";
	  {
	    if (options.prefixIdentifiers === true) {
	      onError(createCompilerError(47));
	    } else if (isModuleMode) {
	      onError(createCompilerError(48));
	    }
	  }
	  var prefixIdentifiers = false;
	  if (options.cacheHandlers) {
	    onError(createCompilerError(49));
	  }
	  if (options.scopeId && !isModuleMode) {
	    onError(createCompilerError(50));
	  }
	  var ast = isString(template) ? baseParse(template, options) : template;
	  var ref = getBaseTransformPreset();
	  var nodeTransforms = ref[0];
	  var directiveTransforms = ref[1];
	  transform(
	    ast,
	    extend({}, options, {
	      prefixIdentifiers: prefixIdentifiers,
	      nodeTransforms: nodeTransforms.concat( options.nodeTransforms || []
	        // user transforms
	      ),
	      directiveTransforms: extend(
	        {},
	        directiveTransforms,
	        options.directiveTransforms || {}
	        // user transforms
	      )
	    })
	  );
	  return generate(
	    ast,
	    extend({}, options, {
	      prefixIdentifiers: prefixIdentifiers
	    })
	  );
	}

	var noopDirectiveTransform = function () { return ({ props: [] }); };

	var obj;

	var V_MODEL_RADIO = Symbol(!!(process.env.NODE_ENV !== "production") ? "vModelRadio" : "");
	var V_MODEL_CHECKBOX = Symbol(!!(process.env.NODE_ENV !== "production") ? "vModelCheckbox" : "");
	var V_MODEL_TEXT = Symbol(!!(process.env.NODE_ENV !== "production") ? "vModelText" : "");
	var V_MODEL_SELECT = Symbol(!!(process.env.NODE_ENV !== "production") ? "vModelSelect" : "");
	var V_MODEL_DYNAMIC = Symbol(!!(process.env.NODE_ENV !== "production") ? "vModelDynamic" : "");
	var V_ON_WITH_MODIFIERS = Symbol(!!(process.env.NODE_ENV !== "production") ? "vOnModifiersGuard" : "");
	var V_ON_WITH_KEYS = Symbol(!!(process.env.NODE_ENV !== "production") ? "vOnKeysGuard" : "");
	var V_SHOW = Symbol(!!(process.env.NODE_ENV !== "production") ? "vShow" : "");
	var TRANSITION$1 = Symbol(!!(process.env.NODE_ENV !== "production") ? "Transition" : "");
	var TRANSITION_GROUP = Symbol(!!(process.env.NODE_ENV !== "production") ? "TransitionGroup" : "");
	registerRuntimeHelpers(( obj = {}, obj[V_MODEL_RADIO] = "vModelRadio", obj[V_MODEL_CHECKBOX] = "vModelCheckbox", obj[V_MODEL_TEXT] = "vModelText", obj[V_MODEL_SELECT] = "vModelSelect", obj[V_MODEL_DYNAMIC] = "vModelDynamic", obj[V_ON_WITH_MODIFIERS] = "withModifiers", obj[V_ON_WITH_KEYS] = "withKeys", obj[V_SHOW] = "vShow", obj[TRANSITION$1] = "Transition", obj[TRANSITION_GROUP] = "TransitionGroup", obj ));

	var decoder;
	function decodeHtmlBrowser(raw, asAttr) {
	  if ( asAttr === void 0 ) asAttr = false;

	  if (!decoder) {
	    decoder = document.createElement("div");
	  }
	  if (asAttr) {
	    decoder.innerHTML = "<div foo=\"" + (raw.replace(/"/g, "&quot;")) + "\">";
	    return decoder.children[0].getAttribute("foo");
	  } else {
	    decoder.innerHTML = raw;
	    return decoder.textContent;
	  }
	}

	var isRawTextContainer = /* @__PURE__ */ makeMap(
	  "style,iframe,script,noscript",
	  true
	);
	var parserOptions = {
	  isVoidTag: isVoidTag,
	  isNativeTag: function (tag) { return isHTMLTag(tag) || isSVGTag(tag); },
	  isPreTag: function (tag) { return tag === "pre"; },
	  decodeEntities: decodeHtmlBrowser ,
	  isBuiltInComponent: function (tag) {
	    if (isBuiltInType(tag, "Transition")) {
	      return TRANSITION$1;
	    } else if (isBuiltInType(tag, "TransitionGroup")) {
	      return TRANSITION_GROUP;
	    }
	  },
	  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
	  getNamespace: function getNamespace(tag, parent) {
	    var ns = parent ? parent.ns : 0;
	    if (parent && ns === 2) {
	      if (parent.tag === "annotation-xml") {
	        if (tag === "svg") {
	          return 1;
	        }
	        if (parent.props.some(
	          function (a) { return a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml"); }
	        )) {
	          ns = 0;
	        }
	      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
	        ns = 0;
	      }
	    } else if (parent && ns === 1) {
	      if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
	        ns = 0;
	      }
	    }
	    if (ns === 0) {
	      if (tag === "svg") {
	        return 1;
	      }
	      if (tag === "math") {
	        return 2;
	      }
	    }
	    return ns;
	  },
	  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
	  getTextMode: function getTextMode(ref) {
	    var tag = ref.tag;
	    var ns = ref.ns;

	    if (ns === 0) {
	      if (tag === "textarea" || tag === "title") {
	        return 1;
	      }
	      if (isRawTextContainer(tag)) {
	        return 2;
	      }
	    }
	    return 0;
	  }
	};

	var transformStyle = function (node) {
	  if (node.type === 1) {
	    node.props.forEach(function (p, i) {
	      if (p.type === 6 && p.name === "style" && p.value) {
	        node.props[i] = {
	          type: 7,
	          name: "bind",
	          arg: createSimpleExpression("style", true, p.loc),
	          exp: parseInlineCSS(p.value.content, p.loc),
	          modifiers: [],
	          loc: p.loc
	        };
	      }
	    });
	  }
	};
	var parseInlineCSS = function (cssText, loc) {
	  var normalized = parseStringStyle(cssText);
	  return createSimpleExpression(
	    JSON.stringify(normalized),
	    false,
	    loc,
	    3
	  );
	};

	function createDOMCompilerError(code, loc) {
	  return createCompilerError(
	    code,
	    loc,
	    !!(process.env.NODE_ENV !== "production") || false ? DOMErrorMessages : void 0
	  );
	}
	var DOMErrorMessages = {};
	DOMErrorMessages[53] = "v-html is missing expression.";
	DOMErrorMessages[54] = "v-html will override element children.";
	DOMErrorMessages[55] = "v-text is missing expression.";
	DOMErrorMessages[56] = "v-text will override element children.";
	DOMErrorMessages[57] = "v-model can only be used on <input>, <textarea> and <select> elements.";
	DOMErrorMessages[58] = "v-model argument is not supported on plain elements.";
	DOMErrorMessages[59] = "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.";
	DOMErrorMessages[60] = "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.";
	DOMErrorMessages[61] = "v-show is missing expression.";
	DOMErrorMessages[62] = "<Transition> expects exactly one child element or component.";
	DOMErrorMessages[63] = "Tags with side effect (<script> and <style>) are ignored in client component templates.";

	var transformVHtml = function (dir, node, context) {
	  var exp = dir.exp;
	  var loc = dir.loc;
	  if (!exp) {
	    context.onError(
	      createDOMCompilerError(53, loc)
	    );
	  }
	  if (node.children.length) {
	    context.onError(
	      createDOMCompilerError(54, loc)
	    );
	    node.children.length = 0;
	  }
	  return {
	    props: [
	      createObjectProperty(
	        createSimpleExpression("innerHTML", true, loc),
	        exp || createSimpleExpression("", true)
	      )
	    ]
	  };
	};

	var transformVText = function (dir, node, context) {
	  var exp = dir.exp;
	  var loc = dir.loc;
	  if (!exp) {
	    context.onError(
	      createDOMCompilerError(55, loc)
	    );
	  }
	  if (node.children.length) {
	    context.onError(
	      createDOMCompilerError(56, loc)
	    );
	    node.children.length = 0;
	  }
	  return {
	    props: [
	      createObjectProperty(
	        createSimpleExpression("textContent", true),
	        exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(
	          context.helperString(TO_DISPLAY_STRING),
	          [exp],
	          loc
	        ) : createSimpleExpression("", true)
	      )
	    ]
	  };
	};

	var transformModel = function (dir, node, context) {
	  var baseResult = transformModel$1(dir, node, context);
	  if (!baseResult.props.length || node.tagType === 1) {
	    return baseResult;
	  }
	  if (dir.arg) {
	    context.onError(
	      createDOMCompilerError(
	        58,
	        dir.arg.loc
	      )
	    );
	  }
	  function checkDuplicatedValue() {
	    var value = findProp(node, "value");
	    if (value) {
	      context.onError(
	        createDOMCompilerError(
	          60,
	          value.loc
	        )
	      );
	    }
	  }
	  var tag = node.tag;
	  var isCustomElement = context.isCustomElement(tag);
	  if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
	    var directiveToUse = V_MODEL_TEXT;
	    var isInvalidType = false;
	    if (tag === "input" || isCustomElement) {
	      var type = findProp(node, "type");
	      if (type) {
	        if (type.type === 7) {
	          directiveToUse = V_MODEL_DYNAMIC;
	        } else if (type.value) {
	          switch (type.value.content) {
	            case "radio":
	              directiveToUse = V_MODEL_RADIO;
	              break;
	            case "checkbox":
	              directiveToUse = V_MODEL_CHECKBOX;
	              break;
	            case "file":
	              isInvalidType = true;
	              context.onError(
	                createDOMCompilerError(
	                  59,
	                  dir.loc
	                )
	              );
	              break;
	            default:
	              !!(process.env.NODE_ENV !== "production") && checkDuplicatedValue();
	              break;
	          }
	        }
	      } else if (hasDynamicKeyVBind(node)) {
	        directiveToUse = V_MODEL_DYNAMIC;
	      } else {
	        !!(process.env.NODE_ENV !== "production") && checkDuplicatedValue();
	      }
	    } else if (tag === "select") {
	      directiveToUse = V_MODEL_SELECT;
	    } else {
	      !!(process.env.NODE_ENV !== "production") && checkDuplicatedValue();
	    }
	    if (!isInvalidType) {
	      baseResult.needRuntime = context.helper(directiveToUse);
	    }
	  } else {
	    context.onError(
	      createDOMCompilerError(
	        57,
	        dir.loc
	      )
	    );
	  }
	  baseResult.props = baseResult.props.filter(
	    function (p) { return !(p.key.type === 4 && p.key.content === "modelValue"); }
	  );
	  return baseResult;
	};

	var isEventOptionModifier = /* @__PURE__ */ makeMap("passive,once,capture");
	var isNonKeyModifier = /* @__PURE__ */ makeMap(
	  // event propagation management
	  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
	);
	var maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
	var isKeyboardEvent = /* @__PURE__ */ makeMap(
	  "onkeyup,onkeydown,onkeypress",
	  true
	);
	var resolveModifiers = function (key, modifiers, context, loc) {
	  var keyModifiers = [];
	  var nonKeyModifiers = [];
	  var eventOptionModifiers = [];
	  for (var i = 0; i < modifiers.length; i++) {
	    var modifier = modifiers[i];
	    if (modifier === "native" && checkCompatEnabled(
	      "COMPILER_V_ON_NATIVE",
	      context,
	      loc
	    )) {
	      eventOptionModifiers.push(modifier);
	    } else if (isEventOptionModifier(modifier)) {
	      eventOptionModifiers.push(modifier);
	    } else {
	      if (maybeKeyModifier(modifier)) {
	        if (isStaticExp(key)) {
	          if (isKeyboardEvent(key.content)) {
	            keyModifiers.push(modifier);
	          } else {
	            nonKeyModifiers.push(modifier);
	          }
	        } else {
	          keyModifiers.push(modifier);
	          nonKeyModifiers.push(modifier);
	        }
	      } else {
	        if (isNonKeyModifier(modifier)) {
	          nonKeyModifiers.push(modifier);
	        } else {
	          keyModifiers.push(modifier);
	        }
	      }
	    }
	  }
	  return {
	    keyModifiers: keyModifiers,
	    nonKeyModifiers: nonKeyModifiers,
	    eventOptionModifiers: eventOptionModifiers
	  };
	};
	var transformClick = function (key, event) {
	  var isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
	  return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
	    "(",
	    key,
	    (") === \"onClick\" ? \"" + event + "\" : ("),
	    key,
	    ")"
	  ]) : key;
	};
	var transformOn = function (dir, node, context) {
	  return transformOn$1(dir, node, context, function (baseResult) {
	    var modifiers = dir.modifiers;
	    if (!modifiers.length)
	      { return baseResult; }
	    var ref = baseResult.props[0];
	    var key = ref.key;
	    var handlerExp = ref.value;
	    var ref$1 = resolveModifiers(key, modifiers, context, dir.loc);
	    var keyModifiers = ref$1.keyModifiers;
	    var nonKeyModifiers = ref$1.nonKeyModifiers;
	    var eventOptionModifiers = ref$1.eventOptionModifiers;
	    if (nonKeyModifiers.includes("right")) {
	      key = transformClick(key, "onContextmenu");
	    }
	    if (nonKeyModifiers.includes("middle")) {
	      key = transformClick(key, "onMouseup");
	    }
	    if (nonKeyModifiers.length) {
	      handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
	        handlerExp,
	        JSON.stringify(nonKeyModifiers)
	      ]);
	    }
	    if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
	    (!isStaticExp(key) || isKeyboardEvent(key.content))) {
	      handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
	        handlerExp,
	        JSON.stringify(keyModifiers)
	      ]);
	    }
	    if (eventOptionModifiers.length) {
	      var modifierPostfix = eventOptionModifiers.map(capitalize).join("");
	      key = isStaticExp(key) ? createSimpleExpression(("" + (key.content) + modifierPostfix), true) : createCompoundExpression(["(", key, (") + \"" + modifierPostfix + "\"")]);
	    }
	    return {
	      props: [createObjectProperty(key, handlerExp)]
	    };
	  });
	};

	var transformShow = function (dir, node, context) {
	  var exp = dir.exp;
	  var loc = dir.loc;
	  if (!exp) {
	    context.onError(
	      createDOMCompilerError(61, loc)
	    );
	  }
	  return {
	    props: [],
	    needRuntime: context.helper(V_SHOW)
	  };
	};

	var transformTransition = function (node, context) {
	  if (node.type === 1 && node.tagType === 1) {
	    var component = context.isBuiltInComponent(node.tag);
	    if (component === TRANSITION$1) {
	      return function () {
	        if (!node.children.length) {
	          return;
	        }
	        if (hasMultipleChildren(node)) {
	          context.onError(
	            createDOMCompilerError(
	              62,
	              {
	                start: node.children[0].loc.start,
	                end: node.children[node.children.length - 1].loc.end,
	                source: ""
	              }
	            )
	          );
	        }
	        var child = node.children[0];
	        if (child.type === 1) {
	          for (var p of child.props) {
	            if (p.type === 7 && p.name === "show") {
	              node.props.push({
	                type: 6,
	                name: "persisted",
	                value: void 0,
	                loc: node.loc
	              });
	            }
	          }
	        }
	      };
	    }
	  }
	};
	function hasMultipleChildren(node) {
	  var children = node.children = node.children.filter(
	    function (c) { return c.type !== 3 && !(c.type === 2 && !c.content.trim()); }
	  );
	  var child = children[0];
	  return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some(hasMultipleChildren);
	}

	var ignoreSideEffectTags = function (node, context) {
	  if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
	    !!(process.env.NODE_ENV !== "production") && context.onError(
	      createDOMCompilerError(
	        63,
	        node.loc
	      )
	    );
	    context.removeNode();
	  }
	};

	var DOMNodeTransforms = [
	  transformStyle ].concat( !!(process.env.NODE_ENV !== "production") ? [transformTransition] : []
	);
	var DOMDirectiveTransforms = {
	  cloak: noopDirectiveTransform,
	  html: transformVHtml,
	  text: transformVText,
	  model: transformModel,
	  // override compiler-core
	  on: transformOn,
	  // override compiler-core
	  show: transformShow
	};
	function compile$1(template, options) {
	  if ( options === void 0 ) options = {};

	  return baseCompile(
	    template,
	    extend({}, parserOptions, options, {
	      nodeTransforms: [
	        // ignore <script> and <tag>
	        // this is not put inside DOMNodeTransforms because that list is used
	        // by compiler-ssr to generate vnode fallback branches
	        ignoreSideEffectTags ].concat( DOMNodeTransforms,
	        options.nodeTransforms || []
	      ),
	      directiveTransforms: extend(
	        {},
	        DOMDirectiveTransforms,
	        options.directiveTransforms || {}
	      ),
	      transformHoist: null 
	    })
	  );
	}
	function parse(template, options) {
	  if ( options === void 0 ) options = {};

	  return baseParse(template, extend({}, parserOptions, options));
	}

	var compilerDom_esmBundler = /*#__PURE__*/Object.freeze({
		__proto__: null,
		BASE_TRANSITION: BASE_TRANSITION,
		CAMELIZE: CAMELIZE,
		CAPITALIZE: CAPITALIZE,
		CREATE_BLOCK: CREATE_BLOCK,
		CREATE_COMMENT: CREATE_COMMENT,
		CREATE_ELEMENT_BLOCK: CREATE_ELEMENT_BLOCK,
		CREATE_ELEMENT_VNODE: CREATE_ELEMENT_VNODE,
		CREATE_SLOTS: CREATE_SLOTS,
		CREATE_STATIC: CREATE_STATIC,
		CREATE_TEXT: CREATE_TEXT,
		CREATE_VNODE: CREATE_VNODE,
		DOMDirectiveTransforms: DOMDirectiveTransforms,
		DOMNodeTransforms: DOMNodeTransforms,
		FRAGMENT: FRAGMENT,
		GUARD_REACTIVE_PROPS: GUARD_REACTIVE_PROPS,
		IS_MEMO_SAME: IS_MEMO_SAME,
		IS_REF: IS_REF,
		KEEP_ALIVE: KEEP_ALIVE,
		MERGE_PROPS: MERGE_PROPS,
		NORMALIZE_CLASS: NORMALIZE_CLASS,
		NORMALIZE_PROPS: NORMALIZE_PROPS,
		NORMALIZE_STYLE: NORMALIZE_STYLE,
		OPEN_BLOCK: OPEN_BLOCK,
		POP_SCOPE_ID: POP_SCOPE_ID,
		PUSH_SCOPE_ID: PUSH_SCOPE_ID,
		RENDER_LIST: RENDER_LIST,
		RENDER_SLOT: RENDER_SLOT,
		RESOLVE_COMPONENT: RESOLVE_COMPONENT,
		RESOLVE_DIRECTIVE: RESOLVE_DIRECTIVE,
		RESOLVE_DYNAMIC_COMPONENT: RESOLVE_DYNAMIC_COMPONENT,
		RESOLVE_FILTER: RESOLVE_FILTER,
		SET_BLOCK_TRACKING: SET_BLOCK_TRACKING,
		SUSPENSE: SUSPENSE,
		TELEPORT: TELEPORT,
		TO_DISPLAY_STRING: TO_DISPLAY_STRING,
		TO_HANDLERS: TO_HANDLERS,
		TO_HANDLER_KEY: TO_HANDLER_KEY,
		TRANSITION: TRANSITION$1,
		TRANSITION_GROUP: TRANSITION_GROUP,
		TS_NODE_TYPES: TS_NODE_TYPES,
		UNREF: UNREF,
		V_MODEL_CHECKBOX: V_MODEL_CHECKBOX,
		V_MODEL_DYNAMIC: V_MODEL_DYNAMIC,
		V_MODEL_RADIO: V_MODEL_RADIO,
		V_MODEL_SELECT: V_MODEL_SELECT,
		V_MODEL_TEXT: V_MODEL_TEXT,
		V_ON_WITH_KEYS: V_ON_WITH_KEYS,
		V_ON_WITH_MODIFIERS: V_ON_WITH_MODIFIERS,
		V_SHOW: V_SHOW,
		WITH_CTX: WITH_CTX,
		WITH_DIRECTIVES: WITH_DIRECTIVES,
		WITH_MEMO: WITH_MEMO,
		advancePositionWithClone: advancePositionWithClone,
		advancePositionWithMutation: advancePositionWithMutation,
		assert: assert,
		baseCompile: baseCompile,
		baseParse: baseParse,
		buildDirectiveArgs: buildDirectiveArgs,
		buildProps: buildProps,
		buildSlots: buildSlots,
		checkCompatEnabled: checkCompatEnabled,
		compile: compile$1,
		convertToBlock: convertToBlock,
		createArrayExpression: createArrayExpression,
		createAssignmentExpression: createAssignmentExpression,
		createBlockStatement: createBlockStatement,
		createCacheExpression: createCacheExpression,
		createCallExpression: createCallExpression,
		createCompilerError: createCompilerError,
		createCompoundExpression: createCompoundExpression,
		createConditionalExpression: createConditionalExpression,
		createDOMCompilerError: createDOMCompilerError,
		createForLoopParams: createForLoopParams,
		createFunctionExpression: createFunctionExpression,
		createIfStatement: createIfStatement,
		createInterpolation: createInterpolation,
		createObjectExpression: createObjectExpression,
		createObjectProperty: createObjectProperty,
		createReturnStatement: createReturnStatement,
		createRoot: createRoot,
		createSequenceExpression: createSequenceExpression,
		createSimpleExpression: createSimpleExpression,
		createStructuralDirectiveTransform: createStructuralDirectiveTransform,
		createTemplateLiteral: createTemplateLiteral,
		createTransformContext: createTransformContext,
		createVNodeCall: createVNodeCall,
		extractIdentifiers: extractIdentifiers,
		findDir: findDir,
		findProp: findProp,
		generate: generate,
		generateCodeFrame: generateCodeFrame,
		getBaseTransformPreset: getBaseTransformPreset,
		getConstantType: getConstantType,
		getInnerRange: getInnerRange,
		getMemoedVNodeCall: getMemoedVNodeCall,
		getVNodeBlockHelper: getVNodeBlockHelper,
		getVNodeHelper: getVNodeHelper,
		hasDynamicKeyVBind: hasDynamicKeyVBind,
		hasScopeRef: hasScopeRef,
		helperNameMap: helperNameMap,
		injectProp: injectProp,
		isBuiltInType: isBuiltInType,
		isCoreComponent: isCoreComponent,
		isFunctionType: isFunctionType,
		isInDestructureAssignment: isInDestructureAssignment,
		isMemberExpression: isMemberExpression,
		isMemberExpressionBrowser: isMemberExpressionBrowser,
		isMemberExpressionNode: isMemberExpressionNode,
		isReferencedIdentifier: isReferencedIdentifier,
		isSimpleIdentifier: isSimpleIdentifier,
		isSlotOutlet: isSlotOutlet,
		isStaticArgOf: isStaticArgOf,
		isStaticExp: isStaticExp,
		isStaticProperty: isStaticProperty,
		isStaticPropertyKey: isStaticPropertyKey,
		isTemplateNode: isTemplateNode,
		isText: isText$1,
		isVSlot: isVSlot,
		locStub: locStub,
		noopDirectiveTransform: noopDirectiveTransform,
		parse: parse,
		parserOptions: parserOptions,
		processExpression: processExpression,
		processFor: processFor,
		processIf: processIf,
		processSlotOutlet: processSlotOutlet,
		registerRuntimeHelpers: registerRuntimeHelpers,
		resolveComponentType: resolveComponentType,
		stringifyExpression: stringifyExpression,
		toValidAssetId: toValidAssetId,
		trackSlotScopes: trackSlotScopes,
		trackVForSlotScopes: trackVForSlotScopes,
		transform: transform,
		transformBind: transformBind,
		transformElement: transformElement,
		transformExpression: transformExpression,
		transformModel: transformModel$1,
		transformOn: transformOn$1,
		transformStyle: transformStyle,
		traverseNode: traverseNode,
		walkBlockDeclarations: walkBlockDeclarations,
		walkFunctionParams: walkFunctionParams,
		walkIdentifiers: walkIdentifiers,
		warnDeprecation: warnDeprecation
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(compilerDom_esmBundler);

	function warn$1(msg) {
	  var args = [], len = arguments.length - 1;
	  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  console.warn.apply(console, [ ("[Vue warn] " + msg) ].concat( args ));
	}

	var activeEffectScope;
	var EffectScope = function EffectScope(detached) {
	  if ( detached === void 0 ) detached = false;

	  this.detached = detached;
	  /**
	   * @internal
	   */
	  this._active = true;
	  /**
	   * @internal
	   */
	  this.effects = [];
	  /**
	   * @internal
	   */
	  this.cleanups = [];
	  this.parent = activeEffectScope;
	  if (!detached && activeEffectScope) {
	    this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
	      this
	    ) - 1;
	  }
	};

	var prototypeAccessors = { active: { configurable: true } };
	prototypeAccessors.active.get = function () {
	  return this._active;
	};
	EffectScope.prototype.run = function run (fn) {
	  if (this._active) {
	    var currentEffectScope = activeEffectScope;
	    try {
	      activeEffectScope = this;
	      return fn();
	    } finally {
	      activeEffectScope = currentEffectScope;
	    }
	  } else if (!!(process.env.NODE_ENV !== "production")) {
	    warn$1("cannot run an inactive effect scope.");
	  }
	};
	/**
	 * This should only be called on non-detached scopes
	 * @internal
	 */
	EffectScope.prototype.on = function on () {
	  activeEffectScope = this;
	};
	/**
	 * This should only be called on non-detached scopes
	 * @internal
	 */
	EffectScope.prototype.off = function off () {
	  activeEffectScope = this.parent;
	};
	EffectScope.prototype.stop = function stop (fromParent) {
	  if (this._active) {
	    var i, l;
	    for (i = 0, l = this.effects.length; i < l; i++) {
	      this.effects[i].stop();
	    }
	    for (i = 0, l = this.cleanups.length; i < l; i++) {
	      this.cleanups[i]();
	    }
	    if (this.scopes) {
	      for (i = 0, l = this.scopes.length; i < l; i++) {
	        this.scopes[i].stop(true);
	      }
	    }
	    if (!this.detached && this.parent && !fromParent) {
	      var last = this.parent.scopes.pop();
	      if (last && last !== this) {
	        this.parent.scopes[this.index] = last;
	        last.index = this.index;
	      }
	    }
	    this.parent = void 0;
	    this._active = false;
	  }
	};

	Object.defineProperties( EffectScope.prototype, prototypeAccessors );
	function effectScope(detached) {
	  return new EffectScope(detached);
	}
	function recordEffectScope(effect, scope) {
	  if ( scope === void 0 ) scope = activeEffectScope;

	  if (scope && scope.active) {
	    scope.effects.push(effect);
	  }
	}
	function getCurrentScope() {
	  return activeEffectScope;
	}
	function onScopeDispose(fn) {
	  if (activeEffectScope) {
	    activeEffectScope.cleanups.push(fn);
	  } else if (!!(process.env.NODE_ENV !== "production")) {
	    warn$1(
	      "onScopeDispose() is called when there is no active effect scope to be associated with."
	    );
	  }
	}

	var createDep = function (effects) {
	  var dep = new Set(effects);
	  dep.w = 0;
	  dep.n = 0;
	  return dep;
	};
	var wasTracked = function (dep) { return (dep.w & trackOpBit) > 0; };
	var newTracked = function (dep) { return (dep.n & trackOpBit) > 0; };
	var initDepMarkers = function (ref) {
	  var deps = ref.deps;

	  if (deps.length) {
	    for (var i = 0; i < deps.length; i++) {
	      deps[i].w |= trackOpBit;
	    }
	  }
	};
	var finalizeDepMarkers = function (effect) {
	  var deps = effect.deps;
	  if (deps.length) {
	    var ptr = 0;
	    for (var i = 0; i < deps.length; i++) {
	      var dep = deps[i];
	      if (wasTracked(dep) && !newTracked(dep)) {
	        dep.delete(effect);
	      } else {
	        deps[ptr++] = dep;
	      }
	      dep.w &= ~trackOpBit;
	      dep.n &= ~trackOpBit;
	    }
	    deps.length = ptr;
	  }
	};

	var targetMap = /* @__PURE__ */ new WeakMap();
	var effectTrackDepth = 0;
	var trackOpBit = 1;
	var maxMarkerBits = 30;
	var activeEffect;
	var ITERATE_KEY = Symbol(!!(process.env.NODE_ENV !== "production") ? "iterate" : "");
	var MAP_KEY_ITERATE_KEY = Symbol(!!(process.env.NODE_ENV !== "production") ? "Map key iterate" : "");
	var ReactiveEffect = function ReactiveEffect(fn, scheduler, scope) {
	  if ( scheduler === void 0 ) scheduler = null;

	  this.fn = fn;
	  this.scheduler = scheduler;
	  this.active = true;
	  this.deps = [];
	  this.parent = void 0;
	  recordEffectScope(this, scope);
	};
	ReactiveEffect.prototype.run = function run () {
	  if (!this.active) {
	    return this.fn();
	  }
	  var parent = activeEffect;
	  var lastShouldTrack = shouldTrack;
	  while (parent) {
	    if (parent === this) {
	      return;
	    }
	    parent = parent.parent;
	  }
	  try {
	    this.parent = activeEffect;
	    activeEffect = this;
	    shouldTrack = true;
	    trackOpBit = 1 << ++effectTrackDepth;
	    if (effectTrackDepth <= maxMarkerBits) {
	      initDepMarkers(this);
	    } else {
	      cleanupEffect(this);
	    }
	    return this.fn();
	  } finally {
	    if (effectTrackDepth <= maxMarkerBits) {
	      finalizeDepMarkers(this);
	    }
	    trackOpBit = 1 << --effectTrackDepth;
	    activeEffect = this.parent;
	    shouldTrack = lastShouldTrack;
	    this.parent = void 0;
	    if (this.deferStop) {
	      this.stop();
	    }
	  }
	};
	ReactiveEffect.prototype.stop = function stop () {
	  if (activeEffect === this) {
	    this.deferStop = true;
	  } else if (this.active) {
	    cleanupEffect(this);
	    if (this.onStop) {
	      this.onStop();
	    }
	    this.active = false;
	  }
	};
	function cleanupEffect(effect2) {
	  var deps = effect2.deps;
	  if (deps.length) {
	    for (var i = 0; i < deps.length; i++) {
	      deps[i].delete(effect2);
	    }
	    deps.length = 0;
	  }
	}
	function effect(fn, options) {
	  if (fn.effect) {
	    fn = fn.effect.fn;
	  }
	  var _effect = new ReactiveEffect(fn);
	  if (options) {
	    extend(_effect, options);
	    if (options.scope)
	      { recordEffectScope(_effect, options.scope); }
	  }
	  if (!options || !options.lazy) {
	    _effect.run();
	  }
	  var runner = _effect.run.bind(_effect);
	  runner.effect = _effect;
	  return runner;
	}
	function stop(runner) {
	  runner.effect.stop();
	}
	var shouldTrack = true;
	var trackStack = [];
	function pauseTracking() {
	  trackStack.push(shouldTrack);
	  shouldTrack = false;
	}
	function resetTracking() {
	  var last = trackStack.pop();
	  shouldTrack = last === void 0 ? true : last;
	}
	function track(target, type, key) {
	  if (shouldTrack && activeEffect) {
	    var depsMap = targetMap.get(target);
	    if (!depsMap) {
	      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
	    }
	    var dep = depsMap.get(key);
	    if (!dep) {
	      depsMap.set(key, dep = createDep());
	    }
	    var eventInfo = !!(process.env.NODE_ENV !== "production") ? { effect: activeEffect, target: target, type: type, key: key } : void 0;
	    trackEffects(dep, eventInfo);
	  }
	}
	function trackEffects(dep, debuggerEventExtraInfo) {
	  var shouldTrack2 = false;
	  if (effectTrackDepth <= maxMarkerBits) {
	    if (!newTracked(dep)) {
	      dep.n |= trackOpBit;
	      shouldTrack2 = !wasTracked(dep);
	    }
	  } else {
	    shouldTrack2 = !dep.has(activeEffect);
	  }
	  if (shouldTrack2) {
	    dep.add(activeEffect);
	    activeEffect.deps.push(dep);
	    if (!!(process.env.NODE_ENV !== "production") && activeEffect.onTrack) {
	      activeEffect.onTrack(
	        extend(
	          {
	            effect: activeEffect
	          },
	          debuggerEventExtraInfo
	        )
	      );
	    }
	  }
	}
	function trigger(target, type, key, newValue, oldValue, oldTarget) {
	  var depsMap = targetMap.get(target);
	  if (!depsMap) {
	    return;
	  }
	  var deps = [];
	  if (type === "clear") {
	    deps = [].concat( depsMap.values() );
	  } else if (key === "length" && isArray(target)) {
	    var newLength = Number(newValue);
	    depsMap.forEach(function (dep, key2) {
	      if (key2 === "length" || key2 >= newLength) {
	        deps.push(dep);
	      }
	    });
	  } else {
	    if (key !== void 0) {
	      deps.push(depsMap.get(key));
	    }
	    switch (type) {
	      case "add":
	        if (!isArray(target)) {
	          deps.push(depsMap.get(ITERATE_KEY));
	          if (isMap(target)) {
	            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
	          }
	        } else if (isIntegerKey(key)) {
	          deps.push(depsMap.get("length"));
	        }
	        break;
	      case "delete":
	        if (!isArray(target)) {
	          deps.push(depsMap.get(ITERATE_KEY));
	          if (isMap(target)) {
	            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
	          }
	        }
	        break;
	      case "set":
	        if (isMap(target)) {
	          deps.push(depsMap.get(ITERATE_KEY));
	        }
	        break;
	    }
	  }
	  var eventInfo = !!(process.env.NODE_ENV !== "production") ? { target: target, type: type, key: key, newValue: newValue, oldValue: oldValue, oldTarget: oldTarget } : void 0;
	  if (deps.length === 1) {
	    if (deps[0]) {
	      if (!!(process.env.NODE_ENV !== "production")) {
	        triggerEffects(deps[0], eventInfo);
	      } else {
	        triggerEffects(deps[0]);
	      }
	    }
	  } else {
	    var effects = [];
	    for (var dep of deps) {
	      if (dep) {
	        effects.push.apply(effects, dep);
	      }
	    }
	    if (!!(process.env.NODE_ENV !== "production")) {
	      triggerEffects(createDep(effects), eventInfo);
	    } else {
	      triggerEffects(createDep(effects));
	    }
	  }
	}
	function triggerEffects(dep, debuggerEventExtraInfo) {
	  var effects = isArray(dep) ? dep : [].concat( dep );
	  for (var effect2 of effects) {
	    if (effect2.computed) {
	      triggerEffect(effect2, debuggerEventExtraInfo);
	    }
	  }
	  for (var effect2$1 of effects) {
	    if (!effect2$1.computed) {
	      triggerEffect(effect2$1, debuggerEventExtraInfo);
	    }
	  }
	}
	function triggerEffect(effect2, debuggerEventExtraInfo) {
	  if (effect2 !== activeEffect || effect2.allowRecurse) {
	    if (!!(process.env.NODE_ENV !== "production") && effect2.onTrigger) {
	      effect2.onTrigger(extend({ effect: effect2 }, debuggerEventExtraInfo));
	    }
	    if (effect2.scheduler) {
	      effect2.scheduler();
	    } else {
	      effect2.run();
	    }
	  }
	}
	function getDepFromReactive(object, key) {
	  var _a;
	  return (_a = targetMap.get(object)) == null ? void 0 : _a.get(key);
	}

	var isNonTrackableKeys = /* @__PURE__ */ makeMap("__proto__,__v_isRef,__isVue");
	var builtInSymbols = new Set(
	  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter(function (key) { return key !== "arguments" && key !== "caller"; }).map(function (key) { return Symbol[key]; }).filter(isSymbol)
	);
	var get$1 = /* @__PURE__ */ createGetter();
	var shallowGet = /* @__PURE__ */ createGetter(false, true);
	var readonlyGet = /* @__PURE__ */ createGetter(true);
	var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
	var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
	function createArrayInstrumentations() {
	  var instrumentations = {};
	  ["includes", "indexOf", "lastIndexOf"].forEach(function (key) {
	    instrumentations[key] = function() {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      var arr = toRaw(this);
	      for (var i = 0, l = this.length; i < l; i++) {
	        track(arr, "get", i + "");
	      }
	      var res = arr[key].apply(arr, args);
	      if (res === -1 || res === false) {
	        return arr[key].apply(arr, args.map(toRaw));
	      } else {
	        return res;
	      }
	    };
	  });
	  ["push", "pop", "shift", "unshift", "splice"].forEach(function (key) {
	    instrumentations[key] = function() {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      pauseTracking();
	      var res = toRaw(this)[key].apply(this, args);
	      resetTracking();
	      return res;
	    };
	  });
	  return instrumentations;
	}
	function hasOwnProperty(key) {
	  var obj = toRaw(this);
	  track(obj, "has", key);
	  return obj.hasOwnProperty(key);
	}
	function createGetter(isReadonly2, shallow) {
	  if ( isReadonly2 === void 0 ) isReadonly2 = false;
	  if ( shallow === void 0 ) shallow = false;

	  return function get2(target, key, receiver) {
	    if (key === "__v_isReactive") {
	      return !isReadonly2;
	    } else if (key === "__v_isReadonly") {
	      return isReadonly2;
	    } else if (key === "__v_isShallow") {
	      return shallow;
	    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
	      return target;
	    }
	    var targetIsArray = isArray(target);
	    if (!isReadonly2) {
	      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
	        return Reflect.get(arrayInstrumentations, key, receiver);
	      }
	      if (key === "hasOwnProperty") {
	        return hasOwnProperty;
	      }
	    }
	    var res = Reflect.get(target, key, receiver);
	    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
	      return res;
	    }
	    if (!isReadonly2) {
	      track(target, "get", key);
	    }
	    if (shallow) {
	      return res;
	    }
	    if (isRef(res)) {
	      return targetIsArray && isIntegerKey(key) ? res : res.value;
	    }
	    if (isObject(res)) {
	      return isReadonly2 ? readonly(res) : reactive(res);
	    }
	    return res;
	  };
	}
	var set$1 = /* @__PURE__ */ createSetter();
	var shallowSet = /* @__PURE__ */ createSetter(true);
	function createSetter(shallow) {
	  if ( shallow === void 0 ) shallow = false;

	  return function set2(target, key, value, receiver) {
	    var oldValue = target[key];
	    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
	      return false;
	    }
	    if (!shallow) {
	      if (!isShallow$1(value) && !isReadonly(value)) {
	        oldValue = toRaw(oldValue);
	        value = toRaw(value);
	      }
	      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
	        oldValue.value = value;
	        return true;
	      }
	    }
	    var hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
	    var result = Reflect.set(target, key, value, receiver);
	    if (target === toRaw(receiver)) {
	      if (!hadKey) {
	        trigger(target, "add", key, value);
	      } else if (hasChanged(value, oldValue)) {
	        trigger(target, "set", key, value, oldValue);
	      }
	    }
	    return result;
	  };
	}
	function deleteProperty(target, key) {
	  var hadKey = hasOwn(target, key);
	  var oldValue = target[key];
	  var result = Reflect.deleteProperty(target, key);
	  if (result && hadKey) {
	    trigger(target, "delete", key, void 0, oldValue);
	  }
	  return result;
	}
	function has$1(target, key) {
	  var result = Reflect.has(target, key);
	  if (!isSymbol(key) || !builtInSymbols.has(key)) {
	    track(target, "has", key);
	  }
	  return result;
	}
	function ownKeys(target) {
	  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
	  return Reflect.ownKeys(target);
	}
	var mutableHandlers = {
	  get: get$1,
	  set: set$1,
	  deleteProperty: deleteProperty,
	  has: has$1,
	  ownKeys: ownKeys
	};
	var readonlyHandlers = {
	  get: readonlyGet,
	  set: function set(target, key) {
	    if (!!(process.env.NODE_ENV !== "production")) {
	      warn$1(
	        ("Set operation on key \"" + (String(key)) + "\" failed: target is readonly."),
	        target
	      );
	    }
	    return true;
	  },
	  deleteProperty: function deleteProperty(target, key) {
	    if (!!(process.env.NODE_ENV !== "production")) {
	      warn$1(
	        ("Delete operation on key \"" + (String(key)) + "\" failed: target is readonly."),
	        target
	      );
	    }
	    return true;
	  }
	};
	var shallowReactiveHandlers = /* @__PURE__ */ extend(
	  {},
	  mutableHandlers,
	  {
	    get: shallowGet,
	    set: shallowSet
	  }
	);
	var shallowReadonlyHandlers = /* @__PURE__ */ extend(
	  {},
	  readonlyHandlers,
	  {
	    get: shallowReadonlyGet
	  }
	);

	var toShallow = function (value) { return value; };
	var getProto = function (v) { return Reflect.getPrototypeOf(v); };
	function get(target, key, isReadonly, isShallow) {
	  if ( isReadonly === void 0 ) isReadonly = false;
	  if ( isShallow === void 0 ) isShallow = false;

	  target = target["__v_raw"];
	  var rawTarget = toRaw(target);
	  var rawKey = toRaw(key);
	  if (!isReadonly) {
	    if (key !== rawKey) {
	      track(rawTarget, "get", key);
	    }
	    track(rawTarget, "get", rawKey);
	  }
	  var ref = getProto(rawTarget);
	  var has2 = ref.has;
	  var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
	  if (has2.call(rawTarget, key)) {
	    return wrap(target.get(key));
	  } else if (has2.call(rawTarget, rawKey)) {
	    return wrap(target.get(rawKey));
	  } else if (target !== rawTarget) {
	    target.get(key);
	  }
	}
	function has(key, isReadonly) {
	  if ( isReadonly === void 0 ) isReadonly = false;

	  var target = this["__v_raw"];
	  var rawTarget = toRaw(target);
	  var rawKey = toRaw(key);
	  if (!isReadonly) {
	    if (key !== rawKey) {
	      track(rawTarget, "has", key);
	    }
	    track(rawTarget, "has", rawKey);
	  }
	  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
	}
	function size(target, isReadonly) {
	  if ( isReadonly === void 0 ) isReadonly = false;

	  target = target["__v_raw"];
	  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
	  return Reflect.get(target, "size", target);
	}
	function add(value) {
	  value = toRaw(value);
	  var target = toRaw(this);
	  var proto = getProto(target);
	  var hadKey = proto.has.call(target, value);
	  if (!hadKey) {
	    target.add(value);
	    trigger(target, "add", value, value);
	  }
	  return this;
	}
	function set(key, value) {
	  value = toRaw(value);
	  var target = toRaw(this);
	  var ref = getProto(target);
	  var has2 = ref.has;
	  var get2 = ref.get;
	  var hadKey = has2.call(target, key);
	  if (!hadKey) {
	    key = toRaw(key);
	    hadKey = has2.call(target, key);
	  } else if (!!(process.env.NODE_ENV !== "production")) {
	    checkIdentityKeys(target, has2, key);
	  }
	  var oldValue = get2.call(target, key);
	  target.set(key, value);
	  if (!hadKey) {
	    trigger(target, "add", key, value);
	  } else if (hasChanged(value, oldValue)) {
	    trigger(target, "set", key, value, oldValue);
	  }
	  return this;
	}
	function deleteEntry(key) {
	  var target = toRaw(this);
	  var ref = getProto(target);
	  var has2 = ref.has;
	  var get2 = ref.get;
	  var hadKey = has2.call(target, key);
	  if (!hadKey) {
	    key = toRaw(key);
	    hadKey = has2.call(target, key);
	  } else if (!!(process.env.NODE_ENV !== "production")) {
	    checkIdentityKeys(target, has2, key);
	  }
	  var oldValue = get2 ? get2.call(target, key) : void 0;
	  var result = target.delete(key);
	  if (hadKey) {
	    trigger(target, "delete", key, void 0, oldValue);
	  }
	  return result;
	}
	function clear() {
	  var target = toRaw(this);
	  var hadItems = target.size !== 0;
	  var oldTarget = !!(process.env.NODE_ENV !== "production") ? isMap(target) ? new Map(target) : new Set(target) : void 0;
	  var result = target.clear();
	  if (hadItems) {
	    trigger(target, "clear", void 0, void 0, oldTarget);
	  }
	  return result;
	}
	function createForEach(isReadonly, isShallow) {
	  return function forEach(callback, thisArg) {
	    var observed = this;
	    var target = observed["__v_raw"];
	    var rawTarget = toRaw(target);
	    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
	    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
	    return target.forEach(function (value, key) {
	      return callback.call(thisArg, wrap(value), wrap(key), observed);
	    });
	  };
	}
	function createIterableMethod(method, isReadonly, isShallow) {
	  return function() {
	    var obj;

	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];
	    var target = this["__v_raw"];
	    var rawTarget = toRaw(target);
	    var targetIsMap = isMap(rawTarget);
	    var isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
	    var isKeyOnly = method === "keys" && targetIsMap;
	    var innerIterator = target[method].apply(target, args);
	    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
	    !isReadonly && track(
	      rawTarget,
	      "iterate",
	      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
	    );
	    return ( obj = {
	      // iterator protocol
	      next: function next() {
	        var ref = innerIterator.next();
	        var value = ref.value;
	        var done = ref.done;
	        return done ? { value: value, done: done } : {
	          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
	          done: done
	        };
	      }
	    }, obj[Symbol.iterator] = function () {
	        return this;
	      }, obj );
	  };
	}
	function createReadonlyMethod(type) {
	  return function() {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    if (!!(process.env.NODE_ENV !== "production")) {
	      var key = args[0] ? ("on key \"" + (args[0]) + "\" ") : "";
	      console.warn(
	        ((capitalize(type)) + " operation " + key + "failed: target is readonly."),
	        toRaw(this)
	      );
	    }
	    return type === "delete" ? false : this;
	  };
	}
	function createInstrumentations() {
	  var mutableInstrumentations2 = {
	    get: function get$1(key) {
	      return get(this, key);
	    },
	    get size() {
	      return size(this);
	    },
	    has: has,
	    add: add,
	    set: set,
	    delete: deleteEntry,
	    clear: clear,
	    forEach: createForEach(false, false)
	  };
	  var shallowInstrumentations2 = {
	    get: function get$2(key) {
	      return get(this, key, false, true);
	    },
	    get size() {
	      return size(this);
	    },
	    has: has,
	    add: add,
	    set: set,
	    delete: deleteEntry,
	    clear: clear,
	    forEach: createForEach(false, true)
	  };
	  var readonlyInstrumentations2 = {
	    get: function get$3(key) {
	      return get(this, key, true);
	    },
	    get size() {
	      return size(this, true);
	    },
	    has: function has$1(key) {
	      return has.call(this, key, true);
	    },
	    add: createReadonlyMethod("add"),
	    set: createReadonlyMethod("set"),
	    delete: createReadonlyMethod("delete"),
	    clear: createReadonlyMethod("clear"),
	    forEach: createForEach(true, false)
	  };
	  var shallowReadonlyInstrumentations2 = {
	    get: function get$4(key) {
	      return get(this, key, true, true);
	    },
	    get size() {
	      return size(this, true);
	    },
	    has: function has$2(key) {
	      return has.call(this, key, true);
	    },
	    add: createReadonlyMethod("add"),
	    set: createReadonlyMethod("set"),
	    delete: createReadonlyMethod("delete"),
	    clear: createReadonlyMethod("clear"),
	    forEach: createForEach(true, true)
	  };
	  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
	  iteratorMethods.forEach(function (method) {
	    mutableInstrumentations2[method] = createIterableMethod(
	      method,
	      false,
	      false
	    );
	    readonlyInstrumentations2[method] = createIterableMethod(
	      method,
	      true,
	      false
	    );
	    shallowInstrumentations2[method] = createIterableMethod(
	      method,
	      false,
	      true
	    );
	    shallowReadonlyInstrumentations2[method] = createIterableMethod(
	      method,
	      true,
	      true
	    );
	  });
	  return [
	    mutableInstrumentations2,
	    readonlyInstrumentations2,
	    shallowInstrumentations2,
	    shallowReadonlyInstrumentations2
	  ];
	}
	var ref$1 = /* @__PURE__ */ createInstrumentations();
	var mutableInstrumentations = ref$1[0];
	var readonlyInstrumentations = ref$1[1];
	var shallowInstrumentations = ref$1[2];
	var shallowReadonlyInstrumentations = ref$1[3];
	function createInstrumentationGetter(isReadonly, shallow) {
	  var instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
	  return function (target, key, receiver) {
	    if (key === "__v_isReactive") {
	      return !isReadonly;
	    } else if (key === "__v_isReadonly") {
	      return isReadonly;
	    } else if (key === "__v_raw") {
	      return target;
	    }
	    return Reflect.get(
	      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
	      key,
	      receiver
	    );
	  };
	}
	var mutableCollectionHandlers = {
	  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
	};
	var shallowCollectionHandlers = {
	  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
	};
	var readonlyCollectionHandlers = {
	  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
	};
	var shallowReadonlyCollectionHandlers = {
	  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
	};
	function checkIdentityKeys(target, has2, key) {
	  var rawKey = toRaw(key);
	  if (rawKey !== key && has2.call(target, rawKey)) {
	    var type = toRawType(target);
	    console.warn(
	      ("Reactive " + type + " contains both the raw and reactive versions of the same object" + (type === "Map" ? " as keys" : "") + ", which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.")
	    );
	  }
	}

	var reactiveMap = /* @__PURE__ */ new WeakMap();
	var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
	var readonlyMap = /* @__PURE__ */ new WeakMap();
	var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
	function targetTypeMap(rawType) {
	  switch (rawType) {
	    case "Object":
	    case "Array":
	      return 1 /* COMMON */;
	    case "Map":
	    case "Set":
	    case "WeakMap":
	    case "WeakSet":
	      return 2 /* COLLECTION */;
	    default:
	      return 0 /* INVALID */;
	  }
	}
	function getTargetType(value) {
	  return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */ : targetTypeMap(toRawType(value));
	}
	function reactive(target) {
	  if (isReadonly(target)) {
	    return target;
	  }
	  return createReactiveObject(
	    target,
	    false,
	    mutableHandlers,
	    mutableCollectionHandlers,
	    reactiveMap
	  );
	}
	function shallowReactive(target) {
	  return createReactiveObject(
	    target,
	    false,
	    shallowReactiveHandlers,
	    shallowCollectionHandlers,
	    shallowReactiveMap
	  );
	}
	function readonly(target) {
	  return createReactiveObject(
	    target,
	    true,
	    readonlyHandlers,
	    readonlyCollectionHandlers,
	    readonlyMap
	  );
	}
	function shallowReadonly(target) {
	  return createReactiveObject(
	    target,
	    true,
	    shallowReadonlyHandlers,
	    shallowReadonlyCollectionHandlers,
	    shallowReadonlyMap
	  );
	}
	function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
	  if (!isObject(target)) {
	    if (!!(process.env.NODE_ENV !== "production")) {
	      console.warn(("value cannot be made reactive: " + (String(target))));
	    }
	    return target;
	  }
	  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
	    return target;
	  }
	  var existingProxy = proxyMap.get(target);
	  if (existingProxy) {
	    return existingProxy;
	  }
	  var targetType = getTargetType(target);
	  if (targetType === 0 /* INVALID */) {
	    return target;
	  }
	  var proxy = new Proxy(
	    target,
	    targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers
	  );
	  proxyMap.set(target, proxy);
	  return proxy;
	}
	function isReactive(value) {
	  if (isReadonly(value)) {
	    return isReactive(value["__v_raw"]);
	  }
	  return !!(value && value["__v_isReactive"]);
	}
	function isReadonly(value) {
	  return !!(value && value["__v_isReadonly"]);
	}
	function isShallow$1(value) {
	  return !!(value && value["__v_isShallow"]);
	}
	function isProxy(value) {
	  return isReactive(value) || isReadonly(value);
	}
	function toRaw(observed) {
	  var raw = observed && observed["__v_raw"];
	  return raw ? toRaw(raw) : observed;
	}
	function markRaw(value) {
	  def(value, "__v_skip", true);
	  return value;
	}
	var toReactive = function (value) { return isObject(value) ? reactive(value) : value; };
	var toReadonly = function (value) { return isObject(value) ? readonly(value) : value; };

	function trackRefValue(ref2) {
	  if (shouldTrack && activeEffect) {
	    ref2 = toRaw(ref2);
	    if (!!(process.env.NODE_ENV !== "production")) {
	      trackEffects(ref2.dep || (ref2.dep = createDep()), {
	        target: ref2,
	        type: "get",
	        key: "value"
	      });
	    } else {
	      trackEffects(ref2.dep || (ref2.dep = createDep()));
	    }
	  }
	}
	function triggerRefValue(ref2, newVal) {
	  ref2 = toRaw(ref2);
	  var dep = ref2.dep;
	  if (dep) {
	    if (!!(process.env.NODE_ENV !== "production")) {
	      triggerEffects(dep, {
	        target: ref2,
	        type: "set",
	        key: "value",
	        newValue: newVal
	      });
	    } else {
	      triggerEffects(dep);
	    }
	  }
	}
	function isRef(r) {
	  return !!(r && r.__v_isRef === true);
	}
	function ref(value) {
	  return createRef(value, false);
	}
	function shallowRef(value) {
	  return createRef(value, true);
	}
	function createRef(rawValue, shallow) {
	  if (isRef(rawValue)) {
	    return rawValue;
	  }
	  return new RefImpl(rawValue, shallow);
	}
	var RefImpl = function RefImpl(value, __v_isShallow) {
	  this.__v_isShallow = __v_isShallow;
	  this.dep = void 0;
	  this.__v_isRef = true;
	  this._rawValue = __v_isShallow ? value : toRaw(value);
	  this._value = __v_isShallow ? value : toReactive(value);
	};

	var prototypeAccessors$1 = { value: { configurable: true } };
	prototypeAccessors$1.value.get = function () {
	  trackRefValue(this);
	  return this._value;
	};
	prototypeAccessors$1.value.set = function (newVal) {
	  var useDirectValue = this.__v_isShallow || isShallow$1(newVal) || isReadonly(newVal);
	  newVal = useDirectValue ? newVal : toRaw(newVal);
	  if (hasChanged(newVal, this._rawValue)) {
	    this._rawValue = newVal;
	    this._value = useDirectValue ? newVal : toReactive(newVal);
	    triggerRefValue(this, newVal);
	  }
	};

	Object.defineProperties( RefImpl.prototype, prototypeAccessors$1 );
	function triggerRef(ref2) {
	  triggerRefValue(ref2, !!(process.env.NODE_ENV !== "production") ? ref2.value : void 0);
	}
	function unref(ref2) {
	  return isRef(ref2) ? ref2.value : ref2;
	}
	function toValue(source) {
	  return isFunction(source) ? source() : unref(source);
	}
	var shallowUnwrapHandlers = {
	  get: function (target, key, receiver) { return unref(Reflect.get(target, key, receiver)); },
	  set: function (target, key, value, receiver) {
	    var oldValue = target[key];
	    if (isRef(oldValue) && !isRef(value)) {
	      oldValue.value = value;
	      return true;
	    } else {
	      return Reflect.set(target, key, value, receiver);
	    }
	  }
	};
	function proxyRefs(objectWithRefs) {
	  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
	}
	var CustomRefImpl = function CustomRefImpl(factory) {
	  var this$1$1 = this;

	  this.dep = void 0;
	  this.__v_isRef = true;
	  var ref = factory(
	    function () { return trackRefValue(this$1$1); },
	    function () { return triggerRefValue(this$1$1); }
	  );
	  var get = ref.get;
	  var set = ref.set;
	  this._get = get;
	  this._set = set;
	};

	var prototypeAccessors$2 = { value: { configurable: true } };
	prototypeAccessors$2.value.get = function () {
	  return this._get();
	};
	prototypeAccessors$2.value.set = function (newVal) {
	  this._set(newVal);
	};

	Object.defineProperties( CustomRefImpl.prototype, prototypeAccessors$2 );
	function customRef(factory) {
	  return new CustomRefImpl(factory);
	}
	function toRefs(object) {
	  if (!!(process.env.NODE_ENV !== "production") && !isProxy(object)) {
	    console.warn("toRefs() expects a reactive object but received a plain one.");
	  }
	  var ret = isArray(object) ? new Array(object.length) : {};
	  for (var key in object) {
	    ret[key] = propertyToRef(object, key);
	  }
	  return ret;
	}
	var ObjectRefImpl = function ObjectRefImpl(_object, _key, _defaultValue) {
	  this._object = _object;
	  this._key = _key;
	  this._defaultValue = _defaultValue;
	  this.__v_isRef = true;
	};

	var prototypeAccessors$3 = { value: { configurable: true },dep: { configurable: true } };
	prototypeAccessors$3.value.get = function () {
	  var val = this._object[this._key];
	  return val === void 0 ? this._defaultValue : val;
	};
	prototypeAccessors$3.value.set = function (newVal) {
	  this._object[this._key] = newVal;
	};
	prototypeAccessors$3.dep.get = function () {
	  return getDepFromReactive(toRaw(this._object), this._key);
	};

	Object.defineProperties( ObjectRefImpl.prototype, prototypeAccessors$3 );
	var GetterRefImpl = function GetterRefImpl(_getter) {
	  this._getter = _getter;
	  this.__v_isRef = true;
	  this.__v_isReadonly = true;
	};

	var prototypeAccessors$4 = { value: { configurable: true } };
	prototypeAccessors$4.value.get = function () {
	  return this._getter();
	};

	Object.defineProperties( GetterRefImpl.prototype, prototypeAccessors$4 );
	function toRef(source, key, defaultValue) {
	  if (isRef(source)) {
	    return source;
	  } else if (isFunction(source)) {
	    return new GetterRefImpl(source);
	  } else if (isObject(source) && arguments.length > 1) {
	    return propertyToRef(source, key, defaultValue);
	  } else {
	    return ref(source);
	  }
	}
	function propertyToRef(source, key, defaultValue) {
	  var val = source[key];
	  return isRef(val) ? val : new ObjectRefImpl(
	    source,
	    key,
	    defaultValue
	  );
	}

	var ComputedRefImpl = function ComputedRefImpl(getter, _setter, isReadonly, isSSR) {
	  var this$1$1 = this;

	  this._setter = _setter;
	  this.dep = void 0;
	  this.__v_isRef = true;
	  this["__v_isReadonly"] = false;
	  this._dirty = true;
	  this.effect = new ReactiveEffect(getter, function () {
	    if (!this$1$1._dirty) {
	      this$1$1._dirty = true;
	      triggerRefValue(this$1$1);
	    }
	  });
	  this.effect.computed = this;
	  this.effect.active = this._cacheable = !isSSR;
	  this["__v_isReadonly"] = isReadonly;
	};

	var prototypeAccessors$5 = { value: { configurable: true } };
	prototypeAccessors$5.value.get = function () {
	  var self = toRaw(this);
	  trackRefValue(self);
	  if (self._dirty || !self._cacheable) {
	    self._dirty = false;
	    self._value = self.effect.run();
	  }
	  return self._value;
	};
	prototypeAccessors$5.value.set = function (newValue) {
	  this._setter(newValue);
	};

	Object.defineProperties( ComputedRefImpl.prototype, prototypeAccessors$5 );
	function computed$1(getterOrOptions, debugOptions, isSSR) {
	  if ( isSSR === void 0 ) isSSR = false;

	  var getter;
	  var setter;
	  var onlyGetter = isFunction(getterOrOptions);
	  if (onlyGetter) {
	    getter = getterOrOptions;
	    setter = !!(process.env.NODE_ENV !== "production") ? function () {
	      console.warn("Write operation failed: computed value is readonly");
	    } : NOOP;
	  } else {
	    getter = getterOrOptions.get;
	    setter = getterOrOptions.set;
	  }
	  var cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
	  if (!!(process.env.NODE_ENV !== "production") && debugOptions && !isSSR) {
	    cRef.effect.onTrack = debugOptions.onTrack;
	    cRef.effect.onTrigger = debugOptions.onTrigger;
	  }
	  return cRef;
	}

	var tick = /* @__PURE__ */ Promise.resolve();
	var queue$1 = [];
	var queued = false;
	var scheduler = function (fn) {
	  queue$1.push(fn);
	  if (!queued) {
	    queued = true;
	    tick.then(flush);
	  }
	};
	var flush = function () {
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1.length = 0;
	  queued = false;
	};
	var DeferredComputedRefImpl = function DeferredComputedRefImpl(getter) {
	  var this$1$1 = this;

	  this.dep = void 0;
	  this._dirty = true;
	  this.__v_isRef = true;
	  this["__v_isReadonly"] = true;
	  var compareTarget;
	  var hasCompareTarget = false;
	  var scheduled = false;
	  this.effect = new ReactiveEffect(getter, function (computedTrigger) {
	    if (this$1$1.dep) {
	      if (computedTrigger) {
	        compareTarget = this$1$1._value;
	        hasCompareTarget = true;
	      } else if (!scheduled) {
	        var valueToCompare = hasCompareTarget ? compareTarget : this$1$1._value;
	        scheduled = true;
	        hasCompareTarget = false;
	        scheduler(function () {
	          if (this$1$1.effect.active && this$1$1._get() !== valueToCompare) {
	            triggerRefValue(this$1$1);
	          }
	          scheduled = false;
	        });
	      }
	      for (var e of this$1$1.dep) {
	        if (e.computed instanceof DeferredComputedRefImpl) {
	          e.scheduler(
	            true
	            /* computedTrigger */
	          );
	        }
	      }
	    }
	    this$1$1._dirty = true;
	  });
	  this.effect.computed = this;
	};

	var prototypeAccessors$6 = { value: { configurable: true } };
	DeferredComputedRefImpl.prototype._get = function _get () {
	  if (this._dirty) {
	    this._dirty = false;
	    return this._value = this.effect.run();
	  }
	  return this._value;
	};
	prototypeAccessors$6.value.get = function () {
	  trackRefValue(this);
	  return toRaw(this)._get();
	};

	Object.defineProperties( DeferredComputedRefImpl.prototype, prototypeAccessors$6 );

	var stack = [];
	function pushWarningContext(vnode) {
	  stack.push(vnode);
	}
	function popWarningContext() {
	  stack.pop();
	}
	function warn(msg) {
	  var args = [], len = arguments.length - 1;
	  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  if (!!!(process.env.NODE_ENV !== "production"))
	    { return; }
	  pauseTracking();
	  var instance = stack.length ? stack[stack.length - 1].component : null;
	  var appWarnHandler = instance && instance.appContext.config.warnHandler;
	  var trace = getComponentTrace();
	  if (appWarnHandler) {
	    callWithErrorHandling(
	      appWarnHandler,
	      instance,
	      11,
	      [
	        msg + args.join(""),
	        instance && instance.proxy,
	        trace.map(
	          function (ref) {
	            var vnode = ref.vnode;

	            return ("at <" + (formatComponentName(instance, vnode.type)) + ">");
	    }
	        ).join("\n"),
	        trace
	      ]
	    );
	  } else {
	    var warnArgs = [("[Vue warn]: " + msg) ].concat( args);
	    if (trace.length && // avoid spamming console during tests
	    true) {
	      warnArgs.push.apply(warnArgs, [ "\n" ].concat( formatTrace(trace) ));
	    }
	    console.warn.apply(console, warnArgs);
	  }
	  resetTracking();
	}
	function getComponentTrace() {
	  var currentVNode = stack[stack.length - 1];
	  if (!currentVNode) {
	    return [];
	  }
	  var normalizedStack = [];
	  while (currentVNode) {
	    var last = normalizedStack[0];
	    if (last && last.vnode === currentVNode) {
	      last.recurseCount++;
	    } else {
	      normalizedStack.push({
	        vnode: currentVNode,
	        recurseCount: 0
	      });
	    }
	    var parentInstance = currentVNode.component && currentVNode.component.parent;
	    currentVNode = parentInstance && parentInstance.vnode;
	  }
	  return normalizedStack;
	}
	function formatTrace(trace) {
	  var logs = [];
	  trace.forEach(function (entry, i) {
	    logs.push.apply(logs, ( i === 0 ? [] : ["\n"] ).concat( formatTraceEntry(entry) ));
	  });
	  return logs;
	}
	function formatTraceEntry(ref) {
	  var vnode = ref.vnode;
	  var recurseCount = ref.recurseCount;

	  var postfix = recurseCount > 0 ? ("... (" + recurseCount + " recursive calls)") : "";
	  var isRoot = vnode.component ? vnode.component.parent == null : false;
	  var open = " at <" + (formatComponentName(
	    vnode.component,
	    vnode.type,
	    isRoot
	  ));
	  var close = ">" + postfix;
	  return vnode.props ? [open ].concat( formatProps(vnode.props), [close]) : [open + close];
	}
	function formatProps(props) {
	  var res = [];
	  var keys = Object.keys(props);
	  keys.slice(0, 3).forEach(function (key) {
	    res.push.apply(res, formatProp(key, props[key]));
	  });
	  if (keys.length > 3) {
	    res.push(" ...");
	  }
	  return res;
	}
	function formatProp(key, value, raw) {
	  if (isString(value)) {
	    value = JSON.stringify(value);
	    return raw ? value : [(key + "=" + value)];
	  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
	    return raw ? value : [(key + "=" + value)];
	  } else if (isRef(value)) {
	    value = formatProp(key, toRaw(value.value), true);
	    return raw ? value : [(key + "=Ref<"), value, ">"];
	  } else if (isFunction(value)) {
	    return [(key + "=fn" + (value.name ? ("<" + (value.name) + ">") : ""))];
	  } else {
	    value = toRaw(value);
	    return raw ? value : [(key + "="), value];
	  }
	}
	function assertNumber(val, type) {
	  if (!!!(process.env.NODE_ENV !== "production"))
	    { return; }
	  if (val === void 0) {
	    return;
	  } else if (typeof val !== "number") {
	    warn((type + " is not a valid number - got " + (JSON.stringify(val)) + "."));
	  } else if (isNaN(val)) {
	    warn((type + " is NaN - the duration expression might be incorrect."));
	  }
	}

	var ErrorTypeStrings = {};
	ErrorTypeStrings["sp"] = "serverPrefetch hook";
	ErrorTypeStrings["bc"] = "beforeCreate hook";
	ErrorTypeStrings["c"] = "created hook";
	ErrorTypeStrings["bm"] = "beforeMount hook";
	ErrorTypeStrings["m"] = "mounted hook";
	ErrorTypeStrings["bu"] = "beforeUpdate hook";
	ErrorTypeStrings["u"] = "updated";
	ErrorTypeStrings["bum"] = "beforeUnmount hook";
	ErrorTypeStrings["um"] = "unmounted hook";
	ErrorTypeStrings["a"] = "activated hook";
	ErrorTypeStrings["da"] = "deactivated hook";
	ErrorTypeStrings["ec"] = "errorCaptured hook";
	ErrorTypeStrings["rtc"] = "renderTracked hook";
	ErrorTypeStrings["rtg"] = "renderTriggered hook";
	ErrorTypeStrings[0] = "setup function";
	ErrorTypeStrings[1] = "render function";
	ErrorTypeStrings[2] = "watcher getter";
	ErrorTypeStrings[3] = "watcher callback";
	ErrorTypeStrings[4] = "watcher cleanup function";
	ErrorTypeStrings[5] = "native event handler";
	ErrorTypeStrings[6] = "component event handler";
	ErrorTypeStrings[7] = "vnode hook";
	ErrorTypeStrings[8] = "directive hook";
	ErrorTypeStrings[9] = "transition hook";
	ErrorTypeStrings[10] = "app errorHandler";
	ErrorTypeStrings[11] = "app warnHandler";
	ErrorTypeStrings[12] = "ref function";
	ErrorTypeStrings[13] = "async component loader";
	ErrorTypeStrings[14] = "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core";
	function callWithErrorHandling(fn, instance, type, args) {
	  var res;
	  try {
	    res = args ? fn.apply(void 0, args) : fn();
	  } catch (err) {
	    handleError(err, instance, type);
	  }
	  return res;
	}
	function callWithAsyncErrorHandling(fn, instance, type, args) {
	  if (isFunction(fn)) {
	    var res = callWithErrorHandling(fn, instance, type, args);
	    if (res && isPromise(res)) {
	      res.catch(function (err) {
	        handleError(err, instance, type);
	      });
	    }
	    return res;
	  }
	  var values = [];
	  for (var i = 0; i < fn.length; i++) {
	    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
	  }
	  return values;
	}
	function handleError(err, instance, type, throwInDev) {
	  if ( throwInDev === void 0 ) throwInDev = true;

	  var contextVNode = instance ? instance.vnode : null;
	  if (instance) {
	    var cur = instance.parent;
	    var exposedInstance = instance.proxy;
	    var errorInfo = !!(process.env.NODE_ENV !== "production") ? ErrorTypeStrings[type] : type;
	    while (cur) {
	      var errorCapturedHooks = cur.ec;
	      if (errorCapturedHooks) {
	        for (var i = 0; i < errorCapturedHooks.length; i++) {
	          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
	            return;
	          }
	        }
	      }
	      cur = cur.parent;
	    }
	    var appErrorHandler = instance.appContext.config.errorHandler;
	    if (appErrorHandler) {
	      callWithErrorHandling(
	        appErrorHandler,
	        null,
	        10,
	        [err, exposedInstance, errorInfo]
	      );
	      return;
	    }
	  }
	  logError(err, type, contextVNode, throwInDev);
	}
	function logError(err, type, contextVNode, throwInDev) {
	  if ( throwInDev === void 0 ) throwInDev = true;

	  if (!!(process.env.NODE_ENV !== "production")) {
	    var info = ErrorTypeStrings[type];
	    if (contextVNode) {
	      pushWarningContext(contextVNode);
	    }
	    warn(("Unhandled error" + (info ? (" during execution of " + info) : "")));
	    if (contextVNode) {
	      popWarningContext();
	    }
	    if (throwInDev) {
	      throw err;
	    } else {
	      console.error(err);
	    }
	  } else {
	    console.error(err);
	  }
	}

	var isFlushing = false;
	var isFlushPending = false;
	var queue = [];
	var flushIndex = 0;
	var pendingPostFlushCbs = [];
	var activePostFlushCbs = null;
	var postFlushIndex = 0;
	var resolvedPromise = /* @__PURE__ */ Promise.resolve();
	var currentFlushPromise = null;
	var RECURSION_LIMIT = 100;
	function nextTick(fn) {
	  var p = currentFlushPromise || resolvedPromise;
	  return fn ? p.then(this ? fn.bind(this) : fn) : p;
	}
	function findInsertionIndex(id) {
	  var start = flushIndex + 1;
	  var end = queue.length;
	  while (start < end) {
	    var middle = start + end >>> 1;
	    var middleJobId = getId(queue[middle]);
	    middleJobId < id ? start = middle + 1 : end = middle;
	  }
	  return start;
	}
	function queueJob(job) {
	  if (!queue.length || !queue.includes(
	    job,
	    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
	  )) {
	    if (job.id == null) {
	      queue.push(job);
	    } else {
	      queue.splice(findInsertionIndex(job.id), 0, job);
	    }
	    queueFlush();
	  }
	}
	function queueFlush() {
	  if (!isFlushing && !isFlushPending) {
	    isFlushPending = true;
	    currentFlushPromise = resolvedPromise.then(flushJobs);
	  }
	}
	function invalidateJob(job) {
	  var i = queue.indexOf(job);
	  if (i > flushIndex) {
	    queue.splice(i, 1);
	  }
	}
	function queuePostFlushCb(cb) {
	  if (!isArray(cb)) {
	    if (!activePostFlushCbs || !activePostFlushCbs.includes(
	      cb,
	      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
	    )) {
	      pendingPostFlushCbs.push(cb);
	    }
	  } else {
	    pendingPostFlushCbs.push.apply(pendingPostFlushCbs, cb);
	  }
	  queueFlush();
	}
	function flushPreFlushCbs(seen, i) {
	  if ( i === void 0 ) i = isFlushing ? flushIndex + 1 : 0;

	  if (!!(process.env.NODE_ENV !== "production")) {
	    seen = seen || /* @__PURE__ */ new Map();
	  }
	  for (; i < queue.length; i++) {
	    var cb = queue[i];
	    if (cb && cb.pre) {
	      if (!!(process.env.NODE_ENV !== "production") && checkRecursiveUpdates(seen, cb)) {
	        continue;
	      }
	      queue.splice(i, 1);
	      i--;
	      cb();
	    }
	  }
	}
	function flushPostFlushCbs(seen) {
	  if (pendingPostFlushCbs.length) {
	    var deduped = [].concat( new Set(pendingPostFlushCbs) );
	    pendingPostFlushCbs.length = 0;
	    if (activePostFlushCbs) {
	      activePostFlushCbs.push.apply(activePostFlushCbs, deduped);
	      return;
	    }
	    activePostFlushCbs = deduped;
	    if (!!(process.env.NODE_ENV !== "production")) {
	      seen = seen || /* @__PURE__ */ new Map();
	    }
	    activePostFlushCbs.sort(function (a, b) { return getId(a) - getId(b); });
	    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
	      if (!!(process.env.NODE_ENV !== "production") && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
	        continue;
	      }
	      activePostFlushCbs[postFlushIndex]();
	    }
	    activePostFlushCbs = null;
	    postFlushIndex = 0;
	  }
	}
	var getId = function (job) { return job.id == null ? Infinity : job.id; };
	var comparator = function (a, b) {
	  var diff = getId(a) - getId(b);
	  if (diff === 0) {
	    if (a.pre && !b.pre)
	      { return -1; }
	    if (b.pre && !a.pre)
	      { return 1; }
	  }
	  return diff;
	};
	function flushJobs(seen) {
	  isFlushPending = false;
	  isFlushing = true;
	  if (!!(process.env.NODE_ENV !== "production")) {
	    seen = seen || /* @__PURE__ */ new Map();
	  }
	  queue.sort(comparator);
	  var check = !!(process.env.NODE_ENV !== "production") ? function (job) { return checkRecursiveUpdates(seen, job); } : NOOP;
	  try {
	    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
	      var job = queue[flushIndex];
	      if (job && job.active !== false) {
	        if (!!(process.env.NODE_ENV !== "production") && check(job)) {
	          continue;
	        }
	        callWithErrorHandling(job, null, 14);
	      }
	    }
	  } finally {
	    flushIndex = 0;
	    queue.length = 0;
	    flushPostFlushCbs(seen);
	    isFlushing = false;
	    currentFlushPromise = null;
	    if (queue.length || pendingPostFlushCbs.length) {
	      flushJobs(seen);
	    }
	  }
	}
	function checkRecursiveUpdates(seen, fn) {
	  if (!seen.has(fn)) {
	    seen.set(fn, 1);
	  } else {
	    var count = seen.get(fn);
	    if (count > RECURSION_LIMIT) {
	      var instance = fn.ownerInstance;
	      var componentName = instance && getComponentName(instance.type);
	      warn(
	        ("Maximum recursive updates exceeded" + (componentName ? (" in component <" + componentName + ">") : "") + ". This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.")
	      );
	      return true;
	    } else {
	      seen.set(fn, count + 1);
	    }
	  }
	}

	var isHmrUpdating = false;
	var hmrDirtyComponents = /* @__PURE__ */ new Set();
	if (!!(process.env.NODE_ENV !== "production")) {
	  getGlobalThis().__VUE_HMR_RUNTIME__ = {
	    createRecord: tryWrap(createRecord),
	    rerender: tryWrap(rerender),
	    reload: tryWrap(reload)
	  };
	}
	var map = /* @__PURE__ */ new Map();
	function registerHMR(instance) {
	  var id = instance.type.__hmrId;
	  var record = map.get(id);
	  if (!record) {
	    createRecord(id, instance.type);
	    record = map.get(id);
	  }
	  record.instances.add(instance);
	}
	function unregisterHMR(instance) {
	  map.get(instance.type.__hmrId).instances.delete(instance);
	}
	function createRecord(id, initialDef) {
	  if (map.has(id)) {
	    return false;
	  }
	  map.set(id, {
	    initialDef: normalizeClassComponent(initialDef),
	    instances: /* @__PURE__ */ new Set()
	  });
	  return true;
	}
	function normalizeClassComponent(component) {
	  return isClassComponent(component) ? component.__vccOpts : component;
	}
	function rerender(id, newRender) {
	  var record = map.get(id);
	  if (!record) {
	    return;
	  }
	  record.initialDef.render = newRender;
	  [].concat( record.instances ).forEach(function (instance) {
	    if (newRender) {
	      instance.render = newRender;
	      normalizeClassComponent(instance.type).render = newRender;
	    }
	    instance.renderCache = [];
	    isHmrUpdating = true;
	    instance.update();
	    isHmrUpdating = false;
	  });
	}
	function reload(id, newComp) {
	  var record = map.get(id);
	  if (!record)
	    { return; }
	  newComp = normalizeClassComponent(newComp);
	  updateComponentDef(record.initialDef, newComp);
	  var instances = [].concat( record.instances );
	  for (var instance of instances) {
	    var oldComp = normalizeClassComponent(instance.type);
	    if (!hmrDirtyComponents.has(oldComp)) {
	      if (oldComp !== record.initialDef) {
	        updateComponentDef(oldComp, newComp);
	      }
	      hmrDirtyComponents.add(oldComp);
	    }
	    instance.appContext.propsCache.delete(instance.type);
	    instance.appContext.emitsCache.delete(instance.type);
	    instance.appContext.optionsCache.delete(instance.type);
	    if (instance.ceReload) {
	      hmrDirtyComponents.add(oldComp);
	      instance.ceReload(newComp.styles);
	      hmrDirtyComponents.delete(oldComp);
	    } else if (instance.parent) {
	      queueJob(instance.parent.update);
	    } else if (instance.appContext.reload) {
	      instance.appContext.reload();
	    } else if (typeof window !== "undefined") {
	      window.location.reload();
	    } else {
	      console.warn(
	        "[HMR] Root or manually mounted instance modified. Full reload required."
	      );
	    }
	  }
	  queuePostFlushCb(function () {
	    for (var instance of instances) {
	      hmrDirtyComponents.delete(
	        normalizeClassComponent(instance.type)
	      );
	    }
	  });
	}
	function updateComponentDef(oldComp, newComp) {
	  extend(oldComp, newComp);
	  for (var key in oldComp) {
	    if (key !== "__file" && !(key in newComp)) {
	      delete oldComp[key];
	    }
	  }
	}
	function tryWrap(fn) {
	  return function (id, arg) {
	    try {
	      return fn(id, arg);
	    } catch (e) {
	      console.error(e);
	      console.warn(
	        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
	      );
	    }
	  };
	}

	var devtools;
	var buffer = [];
	var devtoolsNotInstalled = false;
	function emit$1(event) {
	  var args = [], len = arguments.length - 1;
	  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  if (devtools) {
	    devtools.emit.apply(devtools, [ event ].concat( args ));
	  } else if (!devtoolsNotInstalled) {
	    buffer.push({ event: event, args: args });
	  }
	}
	function setDevtoolsHook(hook, target) {
	  var _a, _b;
	  devtools = hook;
	  if (devtools) {
	    devtools.enabled = true;
	    buffer.forEach(function (ref) {
	      var event = ref.event;
	      var args = ref.args;

	      return devtools.emit.apply(devtools, [ event ].concat( args ));
	    });
	    buffer = [];
	  } else if (
	    // handle late devtools injection - only do this if we are in an actual
	    // browser environment to avoid the timer handle stalling test runner exit
	    // (#4815)
	    typeof window !== "undefined" && // some envs mock window but not fully
	    window.HTMLElement && // also exclude jsdom
	    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
	  ) {
	    var replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
	    replay.push(function (newHook) {
	      setDevtoolsHook(newHook, target);
	    });
	    setTimeout(function () {
	      if (!devtools) {
	        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
	        devtoolsNotInstalled = true;
	        buffer = [];
	      }
	    }, 3e3);
	  } else {
	    devtoolsNotInstalled = true;
	    buffer = [];
	  }
	}
	function devtoolsInitApp(app, version) {
	  emit$1("app:init" /* APP_INIT */, app, version, {
	    Fragment: Fragment,
	    Text: Text,
	    Comment: Comment,
	    Static: Static
	  });
	}
	function devtoolsUnmountApp(app) {
	  emit$1("app:unmount" /* APP_UNMOUNT */, app);
	}
	var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
	  "component:added" /* COMPONENT_ADDED */
	);
	var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
	var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
	  "component:removed" /* COMPONENT_REMOVED */
	);
	var devtoolsComponentRemoved = function (component) {
	  if (devtools && typeof devtools.cleanupBuffer === "function" && // remove the component if it wasn't buffered
	  !devtools.cleanupBuffer(component)) {
	    _devtoolsComponentRemoved(component);
	  }
	};
	function createDevtoolsComponentHook(hook) {
	  return function (component) {
	    emit$1(
	      hook,
	      component.appContext.app,
	      component.uid,
	      component.parent ? component.parent.uid : void 0,
	      component
	    );
	  };
	}
	var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
	  "perf:start" /* PERFORMANCE_START */
	);
	var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
	  "perf:end" /* PERFORMANCE_END */
	);
	function createDevtoolsPerformanceHook(hook) {
	  return function (component, type, time) {
	    emit$1(hook, component.appContext.app, component.uid, component, type, time);
	  };
	}
	function devtoolsComponentEmit(component, event, params) {
	  emit$1(
	    "component:emit" /* COMPONENT_EMIT */,
	    component.appContext.app,
	    component,
	    event,
	    params
	  );
	}

	function emit(instance, event) {
	  var rawArgs = [], len = arguments.length - 2;
	  while ( len-- > 0 ) rawArgs[ len ] = arguments[ len + 2 ];

	  if (instance.isUnmounted)
	    { return; }
	  var props = instance.vnode.props || EMPTY_OBJ;
	  if (!!(process.env.NODE_ENV !== "production")) {
	    var emitsOptions = instance.emitsOptions;
	    var propsOptions = instance.propsOptions[0];
	    if (emitsOptions) {
	      if (!(event in emitsOptions) && true) {
	        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
	          warn(
	            ("Component emitted event \"" + event + "\" but it is neither declared in the emits option nor as an \"" + (toHandlerKey(event)) + "\" prop.")
	          );
	        }
	      } else {
	        var validator = emitsOptions[event];
	        if (isFunction(validator)) {
	          var isValid = validator.apply(void 0, rawArgs);
	          if (!isValid) {
	            warn(
	              ("Invalid event arguments: event validation failed for event \"" + event + "\".")
	            );
	          }
	        }
	      }
	    }
	  }
	  var args = rawArgs;
	  var isModelListener = event.startsWith("update:");
	  var modelArg = isModelListener && event.slice(7);
	  if (modelArg && modelArg in props) {
	    var modifiersKey = (modelArg === "modelValue" ? "model" : modelArg) + "Modifiers";
	    var ref = props[modifiersKey] || EMPTY_OBJ;
	    var number = ref.number;
	    var trim = ref.trim;
	    if (trim) {
	      args = rawArgs.map(function (a) { return isString(a) ? a.trim() : a; });
	    }
	    if (number) {
	      args = rawArgs.map(looseToNumber);
	    }
	  }
	  if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	    devtoolsComponentEmit(instance, event, args);
	  }
	  if (!!(process.env.NODE_ENV !== "production")) {
	    var lowerCaseEvent = event.toLowerCase();
	    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
	      warn(
	        ("Event \"" + lowerCaseEvent + "\" is emitted in component " + (formatComponentName(
	          instance,
	          instance.type
	        )) + " but the handler is registered for \"" + event + "\". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\".")
	      );
	    }
	  }
	  var handlerName;
	  var handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
	  props[handlerName = toHandlerKey(camelize(event))];
	  if (!handler && isModelListener) {
	    handler = props[handlerName = toHandlerKey(hyphenate(event))];
	  }
	  if (handler) {
	    callWithAsyncErrorHandling(
	      handler,
	      instance,
	      6,
	      args
	    );
	  }
	  var onceHandler = props[handlerName + "Once"];
	  if (onceHandler) {
	    if (!instance.emitted) {
	      instance.emitted = {};
	    } else if (instance.emitted[handlerName]) {
	      return;
	    }
	    instance.emitted[handlerName] = true;
	    callWithAsyncErrorHandling(
	      onceHandler,
	      instance,
	      6,
	      args
	    );
	  }
	}
	function normalizeEmitsOptions(comp, appContext, asMixin) {
	  if ( asMixin === void 0 ) asMixin = false;

	  var cache = appContext.emitsCache;
	  var cached = cache.get(comp);
	  if (cached !== void 0) {
	    return cached;
	  }
	  var raw = comp.emits;
	  var normalized = {};
	  var hasExtends = false;
	  if (__VUE_OPTIONS_API__ && !isFunction(comp)) {
	    var extendEmits = function (raw2) {
	      var normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
	      if (normalizedFromExtend) {
	        hasExtends = true;
	        extend(normalized, normalizedFromExtend);
	      }
	    };
	    if (!asMixin && appContext.mixins.length) {
	      appContext.mixins.forEach(extendEmits);
	    }
	    if (comp.extends) {
	      extendEmits(comp.extends);
	    }
	    if (comp.mixins) {
	      comp.mixins.forEach(extendEmits);
	    }
	  }
	  if (!raw && !hasExtends) {
	    if (isObject(comp)) {
	      cache.set(comp, null);
	    }
	    return null;
	  }
	  if (isArray(raw)) {
	    raw.forEach(function (key) { return normalized[key] = null; });
	  } else {
	    extend(normalized, raw);
	  }
	  if (isObject(comp)) {
	    cache.set(comp, normalized);
	  }
	  return normalized;
	}
	function isEmitListener(options, key) {
	  if (!options || !isOn(key)) {
	    return false;
	  }
	  key = key.slice(2).replace(/Once$/, "");
	  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
	}

	var currentRenderingInstance = null;
	var currentScopeId = null;
	function setCurrentRenderingInstance(instance) {
	  var prev = currentRenderingInstance;
	  currentRenderingInstance = instance;
	  currentScopeId = instance && instance.type.__scopeId || null;
	  return prev;
	}
	function pushScopeId(id) {
	  currentScopeId = id;
	}
	function popScopeId() {
	  currentScopeId = null;
	}
	var withScopeId = function (_id) { return withCtx; };
	function withCtx(fn, ctx, isNonScopedSlot) {
	  if ( ctx === void 0 ) ctx = currentRenderingInstance;

	  if (!ctx)
	    { return fn; }
	  if (fn._n) {
	    return fn;
	  }
	  var renderFnWithContext = function () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    if (renderFnWithContext._d) {
	      setBlockTracking(-1);
	    }
	    var prevInstance = setCurrentRenderingInstance(ctx);
	    var res;
	    try {
	      res = fn.apply(void 0, args);
	    } finally {
	      setCurrentRenderingInstance(prevInstance);
	      if (renderFnWithContext._d) {
	        setBlockTracking(1);
	      }
	    }
	    if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	      devtoolsComponentUpdated(ctx);
	    }
	    return res;
	  };
	  renderFnWithContext._n = true;
	  renderFnWithContext._c = true;
	  renderFnWithContext._d = true;
	  return renderFnWithContext;
	}

	var accessedAttrs = false;
	function markAttrsAccessed() {
	  accessedAttrs = true;
	}
	function renderComponentRoot(instance) {
	  var assign;

	  var Component = instance.type;
	  var vnode = instance.vnode;
	  var proxy = instance.proxy;
	  var withProxy = instance.withProxy;
	  var props = instance.props;
	  var propsOptions = instance.propsOptions[0];
	  var slots = instance.slots;
	  var attrs = instance.attrs;
	  var emit = instance.emit;
	  var render = instance.render;
	  var renderCache = instance.renderCache;
	  var data = instance.data;
	  var setupState = instance.setupState;
	  var ctx = instance.ctx;
	  var inheritAttrs = instance.inheritAttrs;
	  var result;
	  var fallthroughAttrs;
	  var prev = setCurrentRenderingInstance(instance);
	  if (!!(process.env.NODE_ENV !== "production")) {
	    accessedAttrs = false;
	  }
	  try {
	    if (vnode.shapeFlag & 4) {
	      var proxyToUse = withProxy || proxy;
	      result = normalizeVNode(
	        render.call(
	          proxyToUse,
	          proxyToUse,
	          renderCache,
	          props,
	          setupState,
	          data,
	          ctx
	        )
	      );
	      fallthroughAttrs = attrs;
	    } else {
	      var render2 = Component;
	      if (!!(process.env.NODE_ENV !== "production") && attrs === props) {
	        markAttrsAccessed();
	      }
	      result = normalizeVNode(
	        render2.length > 1 ? render2(
	          props,
	          !!(process.env.NODE_ENV !== "production") ? {
	            get attrs() {
	              markAttrsAccessed();
	              return attrs;
	            },
	            slots: slots,
	            emit: emit
	          } : { attrs: attrs, slots: slots, emit: emit }
	        ) : render2(
	          props,
	          null
	          /* we know it doesn't need it */
	        )
	      );
	      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
	    }
	  } catch (err) {
	    blockStack.length = 0;
	    handleError(err, instance, 1);
	    result = createVNode(Comment);
	  }
	  var root = result;
	  var setRoot = void 0;
	  if (!!(process.env.NODE_ENV !== "production") && result.patchFlag > 0 && result.patchFlag & 2048) {
	    (assign = getChildRoot(result), root = assign[0], setRoot = assign[1]);
	  }
	  if (fallthroughAttrs && inheritAttrs !== false) {
	    var keys = Object.keys(fallthroughAttrs);
	    var shapeFlag = root.shapeFlag;
	    if (keys.length) {
	      if (shapeFlag & (1 | 6)) {
	        if (propsOptions && keys.some(isModelListener)) {
	          fallthroughAttrs = filterModelListeners(
	            fallthroughAttrs,
	            propsOptions
	          );
	        }
	        root = cloneVNode(root, fallthroughAttrs);
	      } else if (!!(process.env.NODE_ENV !== "production") && !accessedAttrs && root.type !== Comment) {
	        var allAttrs = Object.keys(attrs);
	        var eventAttrs = [];
	        var extraAttrs = [];
	        for (var i = 0, l = allAttrs.length; i < l; i++) {
	          var key = allAttrs[i];
	          if (isOn(key)) {
	            if (!isModelListener(key)) {
	              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
	            }
	          } else {
	            extraAttrs.push(key);
	          }
	        }
	        if (extraAttrs.length) {
	          warn(
	            ("Extraneous non-props attributes (" + (extraAttrs.join(", ")) + ") were passed to component but could not be automatically inherited because component renders fragment or text root nodes.")
	          );
	        }
	        if (eventAttrs.length) {
	          warn(
	            ("Extraneous non-emits event listeners (" + (eventAttrs.join(", ")) + ") were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the \"emits\" option.")
	          );
	        }
	      }
	    }
	  }
	  if (vnode.dirs) {
	    if (!!(process.env.NODE_ENV !== "production") && !isElementRoot(root)) {
	      warn(
	        "Runtime directive used on component with non-element root node. The directives will not function as intended."
	      );
	    }
	    root = cloneVNode(root);
	    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
	  }
	  if (vnode.transition) {
	    if (!!(process.env.NODE_ENV !== "production") && !isElementRoot(root)) {
	      warn(
	        "Component inside <Transition> renders non-element root node that cannot be animated."
	      );
	    }
	    root.transition = vnode.transition;
	  }
	  if (!!(process.env.NODE_ENV !== "production") && setRoot) {
	    setRoot(root);
	  } else {
	    result = root;
	  }
	  setCurrentRenderingInstance(prev);
	  return result;
	}
	var getChildRoot = function (vnode) {
	  var rawChildren = vnode.children;
	  var dynamicChildren = vnode.dynamicChildren;
	  var childRoot = filterSingleRoot(rawChildren);
	  if (!childRoot) {
	    return [vnode, void 0];
	  }
	  var index = rawChildren.indexOf(childRoot);
	  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
	  var setRoot = function (updatedRoot) {
	    rawChildren[index] = updatedRoot;
	    if (dynamicChildren) {
	      if (dynamicIndex > -1) {
	        dynamicChildren[dynamicIndex] = updatedRoot;
	      } else if (updatedRoot.patchFlag > 0) {
	        vnode.dynamicChildren = dynamicChildren.concat( [updatedRoot]);
	      }
	    }
	  };
	  return [normalizeVNode(childRoot), setRoot];
	};
	function filterSingleRoot(children) {
	  var singleRoot;
	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    if (isVNode(child)) {
	      if (child.type !== Comment || child.children === "v-if") {
	        if (singleRoot) {
	          return;
	        } else {
	          singleRoot = child;
	        }
	      }
	    } else {
	      return;
	    }
	  }
	  return singleRoot;
	}
	var getFunctionalFallthrough = function (attrs) {
	  var res;
	  for (var key in attrs) {
	    if (key === "class" || key === "style" || isOn(key)) {
	      (res || (res = {}))[key] = attrs[key];
	    }
	  }
	  return res;
	};
	var filterModelListeners = function (attrs, props) {
	  var res = {};
	  for (var key in attrs) {
	    if (!isModelListener(key) || !(key.slice(9) in props)) {
	      res[key] = attrs[key];
	    }
	  }
	  return res;
	};
	var isElementRoot = function (vnode) {
	  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
	};
	function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
	  var prevProps = prevVNode.props;
	  var prevChildren = prevVNode.children;
	  var component = prevVNode.component;
	  var nextProps = nextVNode.props;
	  var nextChildren = nextVNode.children;
	  var patchFlag = nextVNode.patchFlag;
	  var emits = component.emitsOptions;
	  if (!!(process.env.NODE_ENV !== "production") && (prevChildren || nextChildren) && isHmrUpdating) {
	    return true;
	  }
	  if (nextVNode.dirs || nextVNode.transition) {
	    return true;
	  }
	  if (optimized && patchFlag >= 0) {
	    if (patchFlag & 1024) {
	      return true;
	    }
	    if (patchFlag & 16) {
	      if (!prevProps) {
	        return !!nextProps;
	      }
	      return hasPropsChanged(prevProps, nextProps, emits);
	    } else if (patchFlag & 8) {
	      var dynamicProps = nextVNode.dynamicProps;
	      for (var i = 0; i < dynamicProps.length; i++) {
	        var key = dynamicProps[i];
	        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
	          return true;
	        }
	      }
	    }
	  } else {
	    if (prevChildren || nextChildren) {
	      if (!nextChildren || !nextChildren.$stable) {
	        return true;
	      }
	    }
	    if (prevProps === nextProps) {
	      return false;
	    }
	    if (!prevProps) {
	      return !!nextProps;
	    }
	    if (!nextProps) {
	      return true;
	    }
	    return hasPropsChanged(prevProps, nextProps, emits);
	  }
	  return false;
	}
	function hasPropsChanged(prevProps, nextProps, emitsOptions) {
	  var nextKeys = Object.keys(nextProps);
	  if (nextKeys.length !== Object.keys(prevProps).length) {
	    return true;
	  }
	  for (var i = 0; i < nextKeys.length; i++) {
	    var key = nextKeys[i];
	    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
	      return true;
	    }
	  }
	  return false;
	}
	function updateHOCHostEl(ref, el) {
	  var vnode = ref.vnode;
	  var parent = ref.parent;

	  while (parent && parent.subTree === vnode) {
	    (vnode = parent.vnode).el = el;
	    parent = parent.parent;
	  }
	}

	var isSuspense = function (type) { return type.__isSuspense; };
	var SuspenseImpl = {
	  name: "Suspense",
	  // In order to make Suspense tree-shakable, we need to avoid importing it
	  // directly in the renderer. The renderer checks for the __isSuspense flag
	  // on a vnode's type and calls the `process` method, passing in renderer
	  // internals.
	  __isSuspense: true,
	  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
	    if (n1 == null) {
	      mountSuspense(
	        n2,
	        container,
	        anchor,
	        parentComponent,
	        parentSuspense,
	        isSVG,
	        slotScopeIds,
	        optimized,
	        rendererInternals
	      );
	    } else {
	      patchSuspense(
	        n1,
	        n2,
	        container,
	        anchor,
	        parentComponent,
	        isSVG,
	        slotScopeIds,
	        optimized,
	        rendererInternals
	      );
	    }
	  },
	  hydrate: hydrateSuspense,
	  create: createSuspenseBoundary,
	  normalize: normalizeSuspenseChildren
	};
	var Suspense = SuspenseImpl ;
	function triggerEvent(vnode, name) {
	  var eventListener = vnode.props && vnode.props[name];
	  if (isFunction(eventListener)) {
	    eventListener();
	  }
	}
	function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
	  var patch = rendererInternals.p;
	  var createElement = rendererInternals.o.createElement;
	  var hiddenContainer = createElement("div");
	  var suspense = vnode.suspense = createSuspenseBoundary(
	    vnode,
	    parentSuspense,
	    parentComponent,
	    container,
	    hiddenContainer,
	    anchor,
	    isSVG,
	    slotScopeIds,
	    optimized,
	    rendererInternals
	  );
	  patch(
	    null,
	    suspense.pendingBranch = vnode.ssContent,
	    hiddenContainer,
	    null,
	    parentComponent,
	    suspense,
	    isSVG,
	    slotScopeIds
	  );
	  if (suspense.deps > 0) {
	    triggerEvent(vnode, "onPending");
	    triggerEvent(vnode, "onFallback");
	    patch(
	      null,
	      vnode.ssFallback,
	      container,
	      anchor,
	      parentComponent,
	      null,
	      // fallback tree will not have suspense context
	      isSVG,
	      slotScopeIds
	    );
	    setActiveBranch(suspense, vnode.ssFallback);
	  } else {
	    suspense.resolve(false, true);
	  }
	}
	function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, ref) {
	  var patch = ref.p;
	  var unmount = ref.um;
	  var createElement = ref.o.createElement;

	  var suspense = n2.suspense = n1.suspense;
	  suspense.vnode = n2;
	  n2.el = n1.el;
	  var newBranch = n2.ssContent;
	  var newFallback = n2.ssFallback;
	  var activeBranch = suspense.activeBranch;
	  var pendingBranch = suspense.pendingBranch;
	  var isInFallback = suspense.isInFallback;
	  var isHydrating = suspense.isHydrating;
	  if (pendingBranch) {
	    suspense.pendingBranch = newBranch;
	    if (isSameVNodeType(newBranch, pendingBranch)) {
	      patch(
	        pendingBranch,
	        newBranch,
	        suspense.hiddenContainer,
	        null,
	        parentComponent,
	        suspense,
	        isSVG,
	        slotScopeIds,
	        optimized
	      );
	      if (suspense.deps <= 0) {
	        suspense.resolve();
	      } else if (isInFallback) {
	        patch(
	          activeBranch,
	          newFallback,
	          container,
	          anchor,
	          parentComponent,
	          null,
	          // fallback tree will not have suspense context
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	        setActiveBranch(suspense, newFallback);
	      }
	    } else {
	      suspense.pendingId++;
	      if (isHydrating) {
	        suspense.isHydrating = false;
	        suspense.activeBranch = pendingBranch;
	      } else {
	        unmount(pendingBranch, parentComponent, suspense);
	      }
	      suspense.deps = 0;
	      suspense.effects.length = 0;
	      suspense.hiddenContainer = createElement("div");
	      if (isInFallback) {
	        patch(
	          null,
	          newBranch,
	          suspense.hiddenContainer,
	          null,
	          parentComponent,
	          suspense,
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	        if (suspense.deps <= 0) {
	          suspense.resolve();
	        } else {
	          patch(
	            activeBranch,
	            newFallback,
	            container,
	            anchor,
	            parentComponent,
	            null,
	            // fallback tree will not have suspense context
	            isSVG,
	            slotScopeIds,
	            optimized
	          );
	          setActiveBranch(suspense, newFallback);
	        }
	      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
	        patch(
	          activeBranch,
	          newBranch,
	          container,
	          anchor,
	          parentComponent,
	          suspense,
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	        suspense.resolve(true);
	      } else {
	        patch(
	          null,
	          newBranch,
	          suspense.hiddenContainer,
	          null,
	          parentComponent,
	          suspense,
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	        if (suspense.deps <= 0) {
	          suspense.resolve();
	        }
	      }
	    }
	  } else {
	    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
	      patch(
	        activeBranch,
	        newBranch,
	        container,
	        anchor,
	        parentComponent,
	        suspense,
	        isSVG,
	        slotScopeIds,
	        optimized
	      );
	      setActiveBranch(suspense, newBranch);
	    } else {
	      triggerEvent(n2, "onPending");
	      suspense.pendingBranch = newBranch;
	      suspense.pendingId++;
	      patch(
	        null,
	        newBranch,
	        suspense.hiddenContainer,
	        null,
	        parentComponent,
	        suspense,
	        isSVG,
	        slotScopeIds,
	        optimized
	      );
	      if (suspense.deps <= 0) {
	        suspense.resolve();
	      } else {
	        var timeout = suspense.timeout;
	        var pendingId = suspense.pendingId;
	        if (timeout > 0) {
	          setTimeout(function () {
	            if (suspense.pendingId === pendingId) {
	              suspense.fallback(newFallback);
	            }
	          }, timeout);
	        } else if (timeout === 0) {
	          suspense.fallback(newFallback);
	        }
	      }
	    }
	  }
	}
	var hasWarned = false;
	function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating) {
	  if ( isHydrating === void 0 ) isHydrating = false;

	  if (!!(process.env.NODE_ENV !== "production") && true && !hasWarned) {
	    hasWarned = true;
	    console[console.info ? "info" : "log"](
	      "<Suspense> is an experimental feature and its API will likely change."
	    );
	  }
	  var patch = rendererInternals.p;
	  var move = rendererInternals.m;
	  var unmount = rendererInternals.um;
	  var next = rendererInternals.n;
	  var rendererInternals_o = rendererInternals.o;
	  var parentNode = rendererInternals_o.parentNode;
	  var remove = rendererInternals_o.remove;
	  var parentSuspenseId;
	  var isSuspensible = isVNodeSuspensible(vnode);
	  if (isSuspensible) {
	    if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
	      parentSuspenseId = parentSuspense.pendingId;
	      parentSuspense.deps++;
	    }
	  }
	  var timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
	  if (!!(process.env.NODE_ENV !== "production")) {
	    assertNumber(timeout, "Suspense timeout");
	  }
	  var suspense = {
	    vnode: vnode,
	    parent: parentSuspense,
	    parentComponent: parentComponent,
	    isSVG: isSVG,
	    container: container,
	    hiddenContainer: hiddenContainer,
	    anchor: anchor,
	    deps: 0,
	    pendingId: 0,
	    timeout: typeof timeout === "number" ? timeout : -1,
	    activeBranch: null,
	    pendingBranch: null,
	    isInFallback: true,
	    isHydrating: isHydrating,
	    isUnmounted: false,
	    effects: [],
	    resolve: function resolve(resume, sync) {
	      var ref;

	      if ( resume === void 0 ) resume = false;
	      if ( sync === void 0 ) sync = false;
	      if (!!(process.env.NODE_ENV !== "production")) {
	        if (!resume && !suspense.pendingBranch) {
	          throw new Error(
	            "suspense.resolve() is called without a pending branch."
	          );
	        }
	        if (suspense.isUnmounted) {
	          throw new Error(
	            "suspense.resolve() is called on an already unmounted suspense boundary."
	          );
	        }
	      }
	      var vnode2 = suspense.vnode;
	      var activeBranch = suspense.activeBranch;
	      var pendingBranch = suspense.pendingBranch;
	      var pendingId = suspense.pendingId;
	      var effects = suspense.effects;
	      var parentComponent2 = suspense.parentComponent;
	      var container2 = suspense.container;
	      if (suspense.isHydrating) {
	        suspense.isHydrating = false;
	      } else if (!resume) {
	        var delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
	        if (delayEnter) {
	          activeBranch.transition.afterLeave = function () {
	            if (pendingId === suspense.pendingId) {
	              move(pendingBranch, container2, anchor2, 0);
	            }
	          };
	        }
	        var anchor2 = suspense.anchor;
	        if (activeBranch) {
	          anchor2 = next(activeBranch);
	          unmount(activeBranch, parentComponent2, suspense, true);
	        }
	        if (!delayEnter) {
	          move(pendingBranch, container2, anchor2, 0);
	        }
	      }
	      setActiveBranch(suspense, pendingBranch);
	      suspense.pendingBranch = null;
	      suspense.isInFallback = false;
	      var parent = suspense.parent;
	      var hasUnresolvedAncestor = false;
	      while (parent) {
	        if (parent.pendingBranch) {
	          (ref = parent.effects).push.apply(ref, effects);
	          hasUnresolvedAncestor = true;
	          break;
	        }
	        parent = parent.parent;
	      }
	      if (!hasUnresolvedAncestor) {
	        queuePostFlushCb(effects);
	      }
	      suspense.effects = [];
	      if (isSuspensible) {
	        if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
	          parentSuspense.deps--;
	          if (parentSuspense.deps === 0 && !sync) {
	            parentSuspense.resolve();
	          }
	        }
	      }
	      triggerEvent(vnode2, "onResolve");
	    },
	    fallback: function fallback(fallbackVNode) {
	      if (!suspense.pendingBranch) {
	        return;
	      }
	      var vnode2 = suspense.vnode;
	      var activeBranch = suspense.activeBranch;
	      var parentComponent2 = suspense.parentComponent;
	      var container2 = suspense.container;
	      var isSVG2 = suspense.isSVG;
	      triggerEvent(vnode2, "onFallback");
	      var anchor2 = next(activeBranch);
	      var mountFallback = function () {
	        if (!suspense.isInFallback) {
	          return;
	        }
	        patch(
	          null,
	          fallbackVNode,
	          container2,
	          anchor2,
	          parentComponent2,
	          null,
	          // fallback tree will not have suspense context
	          isSVG2,
	          slotScopeIds,
	          optimized
	        );
	        setActiveBranch(suspense, fallbackVNode);
	      };
	      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
	      if (delayEnter) {
	        activeBranch.transition.afterLeave = mountFallback;
	      }
	      suspense.isInFallback = true;
	      unmount(
	        activeBranch,
	        parentComponent2,
	        null,
	        // no suspense so unmount hooks fire now
	        true
	        // shouldRemove
	      );
	      if (!delayEnter) {
	        mountFallback();
	      }
	    },
	    move: function move$1(container2, anchor2, type) {
	      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
	      suspense.container = container2;
	    },
	    next: function next$1() {
	      return suspense.activeBranch && next(suspense.activeBranch);
	    },
	    registerDep: function registerDep(instance, setupRenderEffect) {
	      var isInPendingSuspense = !!suspense.pendingBranch;
	      if (isInPendingSuspense) {
	        suspense.deps++;
	      }
	      var hydratedEl = instance.vnode.el;
	      instance.asyncDep.catch(function (err) {
	        handleError(err, instance, 0);
	      }).then(function (asyncSetupResult) {
	        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
	          return;
	        }
	        instance.asyncResolved = true;
	        var vnode2 = instance.vnode;
	        if (!!(process.env.NODE_ENV !== "production")) {
	          pushWarningContext(vnode2);
	        }
	        handleSetupResult(instance, asyncSetupResult, false);
	        if (hydratedEl) {
	          vnode2.el = hydratedEl;
	        }
	        var placeholder = !hydratedEl && instance.subTree.el;
	        setupRenderEffect(
	          instance,
	          vnode2,
	          // component may have been moved before resolve.
	          // if this is not a hydration, instance.subTree will be the comment
	          // placeholder.
	          parentNode(hydratedEl || instance.subTree.el),
	          // anchor will not be used if this is hydration, so only need to
	          // consider the comment placeholder case.
	          hydratedEl ? null : next(instance.subTree),
	          suspense,
	          isSVG,
	          optimized
	        );
	        if (placeholder) {
	          remove(placeholder);
	        }
	        updateHOCHostEl(instance, vnode2.el);
	        if (!!(process.env.NODE_ENV !== "production")) {
	          popWarningContext();
	        }
	        if (isInPendingSuspense && --suspense.deps === 0) {
	          suspense.resolve();
	        }
	      });
	    },
	    unmount: function unmount$1(parentSuspense2, doRemove) {
	      suspense.isUnmounted = true;
	      if (suspense.activeBranch) {
	        unmount(
	          suspense.activeBranch,
	          parentComponent,
	          parentSuspense2,
	          doRemove
	        );
	      }
	      if (suspense.pendingBranch) {
	        unmount(
	          suspense.pendingBranch,
	          parentComponent,
	          parentSuspense2,
	          doRemove
	        );
	      }
	    }
	  };
	  return suspense;
	}
	function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
	  var suspense = vnode.suspense = createSuspenseBoundary(
	    vnode,
	    parentSuspense,
	    parentComponent,
	    node.parentNode,
	    document.createElement("div"),
	    null,
	    isSVG,
	    slotScopeIds,
	    optimized,
	    rendererInternals,
	    true
	    /* hydrating */
	  );
	  var result = hydrateNode(
	    node,
	    suspense.pendingBranch = vnode.ssContent,
	    parentComponent,
	    suspense,
	    slotScopeIds,
	    optimized
	  );
	  if (suspense.deps === 0) {
	    suspense.resolve(false, true);
	  }
	  return result;
	}
	function normalizeSuspenseChildren(vnode) {
	  var shapeFlag = vnode.shapeFlag;
	  var children = vnode.children;
	  var isSlotChildren = shapeFlag & 32;
	  vnode.ssContent = normalizeSuspenseSlot(
	    isSlotChildren ? children.default : children
	  );
	  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
	}
	function normalizeSuspenseSlot(s) {
	  var block;
	  if (isFunction(s)) {
	    var trackBlock = isBlockTreeEnabled && s._c;
	    if (trackBlock) {
	      s._d = false;
	      openBlock();
	    }
	    s = s();
	    if (trackBlock) {
	      s._d = true;
	      block = currentBlock;
	      closeBlock();
	    }
	  }
	  if (isArray(s)) {
	    var singleChild = filterSingleRoot(s);
	    if (!!(process.env.NODE_ENV !== "production") && !singleChild) {
	      warn("<Suspense> slots expect a single root node.");
	    }
	    s = singleChild;
	  }
	  s = normalizeVNode(s);
	  if (block && !s.dynamicChildren) {
	    s.dynamicChildren = block.filter(function (c) { return c !== s; });
	  }
	  return s;
	}
	function queueEffectWithSuspense(fn, suspense) {
	  var ref;

	  if (suspense && suspense.pendingBranch) {
	    if (isArray(fn)) {
	      (ref = suspense.effects).push.apply(ref, fn);
	    } else {
	      suspense.effects.push(fn);
	    }
	  } else {
	    queuePostFlushCb(fn);
	  }
	}
	function setActiveBranch(suspense, branch) {
	  suspense.activeBranch = branch;
	  var vnode = suspense.vnode;
	  var parentComponent = suspense.parentComponent;
	  var el = vnode.el = branch.el;
	  if (parentComponent && parentComponent.subTree === vnode) {
	    parentComponent.vnode.el = el;
	    updateHOCHostEl(parentComponent, el);
	  }
	}
	function isVNodeSuspensible(vnode) {
	  var _a;
	  return ((_a = vnode.props) == null ? void 0 : _a.suspensible) != null && vnode.props.suspensible !== false;
	}

	function watchEffect(effect, options) {
	  return doWatch(effect, null, options);
	}
	function watchPostEffect(effect, options) {
	  return doWatch(
	    effect,
	    null,
	    !!(process.env.NODE_ENV !== "production") ? extend({}, options, { flush: "post" }) : { flush: "post" }
	  );
	}
	function watchSyncEffect(effect, options) {
	  return doWatch(
	    effect,
	    null,
	    !!(process.env.NODE_ENV !== "production") ? extend({}, options, { flush: "sync" }) : { flush: "sync" }
	  );
	}
	var INITIAL_WATCHER_VALUE = {};
	function watch(source, cb, options) {
	  if (!!(process.env.NODE_ENV !== "production") && !isFunction(cb)) {
	    warn(
	      "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
	    );
	  }
	  return doWatch(source, cb, options);
	}
	function doWatch(source, cb, ref) {
	  if ( ref === void 0 ) ref = EMPTY_OBJ;
	  var immediate = ref.immediate;
	  var deep = ref.deep;
	  var flush = ref.flush;
	  var onTrack = ref.onTrack;
	  var onTrigger = ref.onTrigger;

	  var _a;
	  if (!!(process.env.NODE_ENV !== "production") && !cb) {
	    if (immediate !== void 0) {
	      warn(
	        "watch() \"immediate\" option is only respected when using the watch(source, callback, options?) signature."
	      );
	    }
	    if (deep !== void 0) {
	      warn(
	        "watch() \"deep\" option is only respected when using the watch(source, callback, options?) signature."
	      );
	    }
	  }
	  var warnInvalidSource = function (s) {
	    warn(
	      "Invalid watch source: ",
	      s,
	      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
	    );
	  };
	  var instance = getCurrentScope() === ((_a = currentInstance) == null ? void 0 : _a.scope) ? currentInstance : null;
	  var getter;
	  var forceTrigger = false;
	  var isMultiSource = false;
	  if (isRef(source)) {
	    getter = function () { return source.value; };
	    forceTrigger = isShallow$1(source);
	  } else if (isReactive(source)) {
	    getter = function () { return source; };
	    deep = true;
	  } else if (isArray(source)) {
	    isMultiSource = true;
	    forceTrigger = source.some(function (s) { return isReactive(s) || isShallow$1(s); });
	    getter = function () { return source.map(function (s) {
	      if (isRef(s)) {
	        return s.value;
	      } else if (isReactive(s)) {
	        return traverse(s);
	      } else if (isFunction(s)) {
	        return callWithErrorHandling(s, instance, 2);
	      } else {
	        !!(process.env.NODE_ENV !== "production") && warnInvalidSource(s);
	      }
	    }); };
	  } else if (isFunction(source)) {
	    if (cb) {
	      getter = function () { return callWithErrorHandling(source, instance, 2); };
	    } else {
	      getter = function () {
	        if (instance && instance.isUnmounted) {
	          return;
	        }
	        if (cleanup) {
	          cleanup();
	        }
	        return callWithAsyncErrorHandling(
	          source,
	          instance,
	          3,
	          [onCleanup]
	        );
	      };
	    }
	  } else {
	    getter = NOOP;
	    !!(process.env.NODE_ENV !== "production") && warnInvalidSource(source);
	  }
	  if (cb && deep) {
	    var baseGetter = getter;
	    getter = function () { return traverse(baseGetter()); };
	  }
	  var cleanup;
	  var onCleanup = function (fn) {
	    cleanup = effect.onStop = function () {
	      callWithErrorHandling(fn, instance, 4);
	    };
	  };
	  var ssrCleanup;
	  if (isInSSRComponentSetup) {
	    onCleanup = NOOP;
	    if (!cb) {
	      getter();
	    } else if (immediate) {
	      callWithAsyncErrorHandling(cb, instance, 3, [
	        getter(),
	        isMultiSource ? [] : void 0,
	        onCleanup
	      ]);
	    }
	    if (flush === "sync") {
	      var ctx = useSSRContext();
	      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
	    } else {
	      return NOOP;
	    }
	  }
	  var oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
	  var job = function () {
	    if (!effect.active) {
	      return;
	    }
	    if (cb) {
	      var newValue = effect.run();
	      if (deep || forceTrigger || (isMultiSource ? newValue.some(
	        function (v, i) { return hasChanged(v, oldValue[i]); }
	      ) : hasChanged(newValue, oldValue)) || false) {
	        if (cleanup) {
	          cleanup();
	        }
	        callWithAsyncErrorHandling(cb, instance, 3, [
	          newValue,
	          // pass undefined as the old value when it's changed for the first time
	          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
	          onCleanup
	        ]);
	        oldValue = newValue;
	      }
	    } else {
	      effect.run();
	    }
	  };
	  job.allowRecurse = !!cb;
	  var scheduler;
	  if (flush === "sync") {
	    scheduler = job;
	  } else if (flush === "post") {
	    scheduler = function () { return queuePostRenderEffect(job, instance && instance.suspense); };
	  } else {
	    job.pre = true;
	    if (instance)
	      { job.id = instance.uid; }
	    scheduler = function () { return queueJob(job); };
	  }
	  var effect = new ReactiveEffect(getter, scheduler);
	  if (!!(process.env.NODE_ENV !== "production")) {
	    effect.onTrack = onTrack;
	    effect.onTrigger = onTrigger;
	  }
	  if (cb) {
	    if (immediate) {
	      job();
	    } else {
	      oldValue = effect.run();
	    }
	  } else if (flush === "post") {
	    queuePostRenderEffect(
	      effect.run.bind(effect),
	      instance && instance.suspense
	    );
	  } else {
	    effect.run();
	  }
	  var unwatch = function () {
	    effect.stop();
	    if (instance && instance.scope) {
	      remove(instance.scope.effects, effect);
	    }
	  };
	  if (ssrCleanup)
	    { ssrCleanup.push(unwatch); }
	  return unwatch;
	}
	function instanceWatch(source, value, options) {
	  var publicThis = this.proxy;
	  var getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : function () { return publicThis[source]; } : source.bind(publicThis, publicThis);
	  var cb;
	  if (isFunction(value)) {
	    cb = value;
	  } else {
	    cb = value.handler;
	    options = value;
	  }
	  var cur = currentInstance;
	  setCurrentInstance(this);
	  var res = doWatch(getter, cb.bind(publicThis), options);
	  if (cur) {
	    setCurrentInstance(cur);
	  } else {
	    unsetCurrentInstance();
	  }
	  return res;
	}
	function createPathGetter(ctx, path) {
	  var segments = path.split(".");
	  return function () {
	    var cur = ctx;
	    for (var i = 0; i < segments.length && cur; i++) {
	      cur = cur[segments[i]];
	    }
	    return cur;
	  };
	}
	function traverse(value, seen) {
	  if (!isObject(value) || value["__v_skip"]) {
	    return value;
	  }
	  seen = seen || /* @__PURE__ */ new Set();
	  if (seen.has(value)) {
	    return value;
	  }
	  seen.add(value);
	  if (isRef(value)) {
	    traverse(value.value, seen);
	  } else if (isArray(value)) {
	    for (var i = 0; i < value.length; i++) {
	      traverse(value[i], seen);
	    }
	  } else if (isSet(value) || isMap(value)) {
	    value.forEach(function (v) {
	      traverse(v, seen);
	    });
	  } else if (isPlainObject(value)) {
	    for (var key in value) {
	      traverse(value[key], seen);
	    }
	  }
	  return value;
	}

	function validateDirectiveName(name) {
	  if (isBuiltInDirective(name)) {
	    warn("Do not use built-in directive ids as custom directive id: " + name);
	  }
	}
	function withDirectives(vnode, directives) {
	  var internalInstance = currentRenderingInstance;
	  if (internalInstance === null) {
	    !!(process.env.NODE_ENV !== "production") && warn("withDirectives can only be used inside render functions.");
	    return vnode;
	  }
	  var instance = getExposeProxy(internalInstance) || internalInstance.proxy;
	  var bindings = vnode.dirs || (vnode.dirs = []);
	  for (var i = 0; i < directives.length; i++) {
	    var ref = directives[i];
	    var dir = ref[0];
	    var value = ref[1];
	    var arg = ref[2];
	    var modifiers = ref[3]; if ( modifiers === void 0 ) modifiers = EMPTY_OBJ;
	    if (dir) {
	      if (isFunction(dir)) {
	        dir = {
	          mounted: dir,
	          updated: dir
	        };
	      }
	      if (dir.deep) {
	        traverse(value);
	      }
	      bindings.push({
	        dir: dir,
	        instance: instance,
	        value: value,
	        oldValue: void 0,
	        arg: arg,
	        modifiers: modifiers
	      });
	    }
	  }
	  return vnode;
	}
	function invokeDirectiveHook(vnode, prevVNode, instance, name) {
	  var bindings = vnode.dirs;
	  var oldBindings = prevVNode && prevVNode.dirs;
	  for (var i = 0; i < bindings.length; i++) {
	    var binding = bindings[i];
	    if (oldBindings) {
	      binding.oldValue = oldBindings[i].value;
	    }
	    var hook = binding.dir[name];
	    if (hook) {
	      pauseTracking();
	      callWithAsyncErrorHandling(hook, instance, 8, [
	        vnode.el,
	        binding,
	        vnode,
	        prevVNode
	      ]);
	      resetTracking();
	    }
	  }
	}

	function useTransitionState() {
	  var state = {
	    isMounted: false,
	    isLeaving: false,
	    isUnmounting: false,
	    leavingVNodes: /* @__PURE__ */ new Map()
	  };
	  onMounted(function () {
	    state.isMounted = true;
	  });
	  onBeforeUnmount(function () {
	    state.isUnmounting = true;
	  });
	  return state;
	}
	var TransitionHookValidator = [Function, Array];
	var BaseTransitionPropsValidators = {
	  mode: String,
	  appear: Boolean,
	  persisted: Boolean,
	  // enter
	  onBeforeEnter: TransitionHookValidator,
	  onEnter: TransitionHookValidator,
	  onAfterEnter: TransitionHookValidator,
	  onEnterCancelled: TransitionHookValidator,
	  // leave
	  onBeforeLeave: TransitionHookValidator,
	  onLeave: TransitionHookValidator,
	  onAfterLeave: TransitionHookValidator,
	  onLeaveCancelled: TransitionHookValidator,
	  // appear
	  onBeforeAppear: TransitionHookValidator,
	  onAppear: TransitionHookValidator,
	  onAfterAppear: TransitionHookValidator,
	  onAppearCancelled: TransitionHookValidator
	};
	var BaseTransitionImpl = {
	  name: "BaseTransition",
	  props: BaseTransitionPropsValidators,
	  setup: function setup(props, ref) {
	    var slots = ref.slots;

	    var instance = getCurrentInstance();
	    var state = useTransitionState();
	    var prevTransitionKey;
	    return function () {
	      var children = slots.default && getTransitionRawChildren(slots.default(), true);
	      if (!children || !children.length) {
	        return;
	      }
	      var child = children[0];
	      if (children.length > 1) {
	        var hasFound = false;
	        for (var c of children) {
	          if (c.type !== Comment) {
	            if (!!(process.env.NODE_ENV !== "production") && hasFound) {
	              warn(
	                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
	              );
	              break;
	            }
	            child = c;
	            hasFound = true;
	            if (!!!(process.env.NODE_ENV !== "production"))
	              { break; }
	          }
	        }
	      }
	      var rawProps = toRaw(props);
	      var mode = rawProps.mode;
	      if (!!(process.env.NODE_ENV !== "production") && mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
	        warn(("invalid <transition> mode: " + mode));
	      }
	      if (state.isLeaving) {
	        return emptyPlaceholder(child);
	      }
	      var innerChild = getKeepAliveChild(child);
	      if (!innerChild) {
	        return emptyPlaceholder(child);
	      }
	      var enterHooks = resolveTransitionHooks(
	        innerChild,
	        rawProps,
	        state,
	        instance
	      );
	      setTransitionHooks(innerChild, enterHooks);
	      var oldChild = instance.subTree;
	      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
	      var transitionKeyChanged = false;
	      var ref = innerChild.type;
	      var getTransitionKey = ref.getTransitionKey;
	      if (getTransitionKey) {
	        var key = getTransitionKey();
	        if (prevTransitionKey === void 0) {
	          prevTransitionKey = key;
	        } else if (key !== prevTransitionKey) {
	          prevTransitionKey = key;
	          transitionKeyChanged = true;
	        }
	      }
	      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
	        var leavingHooks = resolveTransitionHooks(
	          oldInnerChild,
	          rawProps,
	          state,
	          instance
	        );
	        setTransitionHooks(oldInnerChild, leavingHooks);
	        if (mode === "out-in") {
	          state.isLeaving = true;
	          leavingHooks.afterLeave = function () {
	            state.isLeaving = false;
	            if (instance.update.active !== false) {
	              instance.update();
	            }
	          };
	          return emptyPlaceholder(child);
	        } else if (mode === "in-out" && innerChild.type !== Comment) {
	          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
	            var leavingVNodesCache = getLeavingNodesForType(
	              state,
	              oldInnerChild
	            );
	            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
	            el._leaveCb = function () {
	              earlyRemove();
	              el._leaveCb = void 0;
	              delete enterHooks.delayedLeave;
	            };
	            enterHooks.delayedLeave = delayedLeave;
	          };
	        }
	      }
	      return child;
	    };
	  }
	};
	var BaseTransition = BaseTransitionImpl;
	function getLeavingNodesForType(state, vnode) {
	  var leavingVNodes = state.leavingVNodes;
	  var leavingVNodesCache = leavingVNodes.get(vnode.type);
	  if (!leavingVNodesCache) {
	    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
	    leavingVNodes.set(vnode.type, leavingVNodesCache);
	  }
	  return leavingVNodesCache;
	}
	function resolveTransitionHooks(vnode, props, state, instance) {
	  var appear = props.appear;
	  var mode = props.mode;
	  var persisted = props.persisted; if ( persisted === void 0 ) persisted = false;
	  var onBeforeEnter = props.onBeforeEnter;
	  var onEnter = props.onEnter;
	  var onAfterEnter = props.onAfterEnter;
	  var onEnterCancelled = props.onEnterCancelled;
	  var onBeforeLeave = props.onBeforeLeave;
	  var onLeave = props.onLeave;
	  var onAfterLeave = props.onAfterLeave;
	  var onLeaveCancelled = props.onLeaveCancelled;
	  var onBeforeAppear = props.onBeforeAppear;
	  var onAppear = props.onAppear;
	  var onAfterAppear = props.onAfterAppear;
	  var onAppearCancelled = props.onAppearCancelled;
	  var key = String(vnode.key);
	  var leavingVNodesCache = getLeavingNodesForType(state, vnode);
	  var callHook = function (hook, args) {
	    hook && callWithAsyncErrorHandling(
	      hook,
	      instance,
	      9,
	      args
	    );
	  };
	  var callAsyncHook = function (hook, args) {
	    var done = args[1];
	    callHook(hook, args);
	    if (isArray(hook)) {
	      if (hook.every(function (hook2) { return hook2.length <= 1; }))
	        { done(); }
	    } else if (hook.length <= 1) {
	      done();
	    }
	  };
	  var hooks = {
	    mode: mode,
	    persisted: persisted,
	    beforeEnter: function beforeEnter(el) {
	      var hook = onBeforeEnter;
	      if (!state.isMounted) {
	        if (appear) {
	          hook = onBeforeAppear || onBeforeEnter;
	        } else {
	          return;
	        }
	      }
	      if (el._leaveCb) {
	        el._leaveCb(
	          true
	          /* cancelled */
	        );
	      }
	      var leavingVNode = leavingVNodesCache[key];
	      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
	        leavingVNode.el._leaveCb();
	      }
	      callHook(hook, [el]);
	    },
	    enter: function enter(el) {
	      var hook = onEnter;
	      var afterHook = onAfterEnter;
	      var cancelHook = onEnterCancelled;
	      if (!state.isMounted) {
	        if (appear) {
	          hook = onAppear || onEnter;
	          afterHook = onAfterAppear || onAfterEnter;
	          cancelHook = onAppearCancelled || onEnterCancelled;
	        } else {
	          return;
	        }
	      }
	      var called = false;
	      var done = el._enterCb = function (cancelled) {
	        if (called)
	          { return; }
	        called = true;
	        if (cancelled) {
	          callHook(cancelHook, [el]);
	        } else {
	          callHook(afterHook, [el]);
	        }
	        if (hooks.delayedLeave) {
	          hooks.delayedLeave();
	        }
	        el._enterCb = void 0;
	      };
	      if (hook) {
	        callAsyncHook(hook, [el, done]);
	      } else {
	        done();
	      }
	    },
	    leave: function leave(el, remove) {
	      var key2 = String(vnode.key);
	      if (el._enterCb) {
	        el._enterCb(
	          true
	          /* cancelled */
	        );
	      }
	      if (state.isUnmounting) {
	        return remove();
	      }
	      callHook(onBeforeLeave, [el]);
	      var called = false;
	      var done = el._leaveCb = function (cancelled) {
	        if (called)
	          { return; }
	        called = true;
	        remove();
	        if (cancelled) {
	          callHook(onLeaveCancelled, [el]);
	        } else {
	          callHook(onAfterLeave, [el]);
	        }
	        el._leaveCb = void 0;
	        if (leavingVNodesCache[key2] === vnode) {
	          delete leavingVNodesCache[key2];
	        }
	      };
	      leavingVNodesCache[key2] = vnode;
	      if (onLeave) {
	        callAsyncHook(onLeave, [el, done]);
	      } else {
	        done();
	      }
	    },
	    clone: function clone(vnode2) {
	      return resolveTransitionHooks(vnode2, props, state, instance);
	    }
	  };
	  return hooks;
	}
	function emptyPlaceholder(vnode) {
	  if (isKeepAlive(vnode)) {
	    vnode = cloneVNode(vnode);
	    vnode.children = null;
	    return vnode;
	  }
	}
	function getKeepAliveChild(vnode) {
	  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
	}
	function setTransitionHooks(vnode, hooks) {
	  if (vnode.shapeFlag & 6 && vnode.component) {
	    setTransitionHooks(vnode.component.subTree, hooks);
	  } else if (vnode.shapeFlag & 128) {
	    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
	    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
	  } else {
	    vnode.transition = hooks;
	  }
	}
	function getTransitionRawChildren(children, keepComment, parentKey) {
	  if ( keepComment === void 0 ) keepComment = false;

	  var ret = [];
	  var keyedFragmentCount = 0;
	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    var key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
	    if (child.type === Fragment) {
	      if (child.patchFlag & 128)
	        { keyedFragmentCount++; }
	      ret = ret.concat(
	        getTransitionRawChildren(child.children, keepComment, key)
	      );
	    } else if (keepComment || child.type !== Comment) {
	      ret.push(key != null ? cloneVNode(child, { key: key }) : child);
	    }
	  }
	  if (keyedFragmentCount > 1) {
	    for (var i$1 = 0; i$1 < ret.length; i$1++) {
	      ret[i$1].patchFlag = -2;
	    }
	  }
	  return ret;
	}

	function defineComponent(options, extraOptions) {
	  return isFunction(options) ? (
	    // #8326: extend call and options.name access are considered side-effects
	    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
	    /* @__PURE__ */ (function () { return extend({ name: options.name }, extraOptions, { setup: options }); })()
	  ) : options;
	}

	var isAsyncWrapper = function (i) { return !!i.type.__asyncLoader; };
	function defineAsyncComponent(source) {
	  if (isFunction(source)) {
	    source = { loader: source };
	  }
	  var loader = source.loader;
	  var loadingComponent = source.loadingComponent;
	  var errorComponent = source.errorComponent;
	  var delay = source.delay; if ( delay === void 0 ) delay = 200;
	  var timeout = source.timeout;
	  var suspensible = source.suspensible; if ( suspensible === void 0 ) suspensible = true;
	  var userOnError = source.onError;
	  var pendingRequest = null;
	  var resolvedComp;
	  var retries = 0;
	  var retry = function () {
	    retries++;
	    pendingRequest = null;
	    return load();
	  };
	  var load = function () {
	    var thisRequest;
	    return pendingRequest || (thisRequest = pendingRequest = loader().catch(function (err) {
	      err = err instanceof Error ? err : new Error(String(err));
	      if (userOnError) {
	        return new Promise(function (resolve, reject) {
	          var userRetry = function () { return resolve(retry()); };
	          var userFail = function () { return reject(err); };
	          userOnError(err, userRetry, userFail, retries + 1);
	        });
	      } else {
	        throw err;
	      }
	    }).then(function (comp) {
	      if (thisRequest !== pendingRequest && pendingRequest) {
	        return pendingRequest;
	      }
	      if (!!(process.env.NODE_ENV !== "production") && !comp) {
	        warn(
	          "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
	        );
	      }
	      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
	        comp = comp.default;
	      }
	      if (!!(process.env.NODE_ENV !== "production") && comp && !isObject(comp) && !isFunction(comp)) {
	        throw new Error(("Invalid async component load result: " + comp));
	      }
	      resolvedComp = comp;
	      return comp;
	    }));
	  };
	  return defineComponent({
	    name: "AsyncComponentWrapper",
	    __asyncLoader: load,
	    get __asyncResolved() {
	      return resolvedComp;
	    },
	    setup: function setup() {
	      var instance = currentInstance;
	      if (resolvedComp) {
	        return function () { return createInnerComp(resolvedComp, instance); };
	      }
	      var onError = function (err) {
	        pendingRequest = null;
	        handleError(
	          err,
	          instance,
	          13,
	          !errorComponent
	          /* do not throw in dev if user provided error component */
	        );
	      };
	      if (suspensible && instance.suspense || isInSSRComponentSetup) {
	        return load().then(function (comp) {
	          return function () { return createInnerComp(comp, instance); };
	        }).catch(function (err) {
	          onError(err);
	          return function () { return errorComponent ? createVNode(errorComponent, {
	            error: err
	          }) : null; };
	        });
	      }
	      var loaded = ref(false);
	      var error = ref();
	      var delayed = ref(!!delay);
	      if (delay) {
	        setTimeout(function () {
	          delayed.value = false;
	        }, delay);
	      }
	      if (timeout != null) {
	        setTimeout(function () {
	          if (!loaded.value && !error.value) {
	            var err = new Error(
	              ("Async component timed out after " + timeout + "ms.")
	            );
	            onError(err);
	            error.value = err;
	          }
	        }, timeout);
	      }
	      load().then(function () {
	        loaded.value = true;
	        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
	          queueJob(instance.parent.update);
	        }
	      }).catch(function (err) {
	        onError(err);
	        error.value = err;
	      });
	      return function () {
	        if (loaded.value && resolvedComp) {
	          return createInnerComp(resolvedComp, instance);
	        } else if (error.value && errorComponent) {
	          return createVNode(errorComponent, {
	            error: error.value
	          });
	        } else if (loadingComponent && !delayed.value) {
	          return createVNode(loadingComponent);
	        }
	      };
	    }
	  });
	}
	function createInnerComp(comp, parent) {
	  var ref = parent.vnode;
	  var ref2 = ref.ref;
	  var props = ref.props;
	  var children = ref.children;
	  var ce = ref.ce;
	  var vnode = createVNode(comp, props, children);
	  vnode.ref = ref2;
	  vnode.ce = ce;
	  delete parent.vnode.ce;
	  return vnode;
	}

	var isKeepAlive = function (vnode) { return vnode.type.__isKeepAlive; };
	var KeepAliveImpl = {
	  name: "KeepAlive",
	  // Marker for special handling inside the renderer. We are not using a ===
	  // check directly on KeepAlive in the renderer, because importing it directly
	  // would prevent it from being tree-shaken.
	  __isKeepAlive: true,
	  props: {
	    include: [String, RegExp, Array],
	    exclude: [String, RegExp, Array],
	    max: [String, Number]
	  },
	  setup: function setup(props, ref) {
	    var slots = ref.slots;

	    var instance = getCurrentInstance();
	    var sharedContext = instance.ctx;
	    if (!sharedContext.renderer) {
	      return function () {
	        var children = slots.default && slots.default();
	        return children && children.length === 1 ? children[0] : children;
	      };
	    }
	    var cache = /* @__PURE__ */ new Map();
	    var keys = /* @__PURE__ */ new Set();
	    var current = null;
	    if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	      instance.__v_cache = cache;
	    }
	    var parentSuspense = instance.suspense;
	    var sharedContext_renderer = sharedContext.renderer;
	    var patch = sharedContext_renderer.p;
	    var move = sharedContext_renderer.m;
	    var _unmount = sharedContext_renderer.um;
	    var createElement = sharedContext_renderer.o.createElement;
	    var storageContainer = createElement("div");
	    sharedContext.activate = function (vnode, container, anchor, isSVG, optimized) {
	      var instance2 = vnode.component;
	      move(vnode, container, anchor, 0, parentSuspense);
	      patch(
	        instance2.vnode,
	        vnode,
	        container,
	        anchor,
	        instance2,
	        parentSuspense,
	        isSVG,
	        vnode.slotScopeIds,
	        optimized
	      );
	      queuePostRenderEffect(function () {
	        instance2.isDeactivated = false;
	        if (instance2.a) {
	          invokeArrayFns(instance2.a);
	        }
	        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;
	        if (vnodeHook) {
	          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
	        }
	      }, parentSuspense);
	      if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	        devtoolsComponentAdded(instance2);
	      }
	    };
	    sharedContext.deactivate = function (vnode) {
	      var instance2 = vnode.component;
	      move(vnode, storageContainer, null, 1, parentSuspense);
	      queuePostRenderEffect(function () {
	        if (instance2.da) {
	          invokeArrayFns(instance2.da);
	        }
	        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
	        if (vnodeHook) {
	          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
	        }
	        instance2.isDeactivated = true;
	      }, parentSuspense);
	      if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	        devtoolsComponentAdded(instance2);
	      }
	    };
	    function unmount(vnode) {
	      resetShapeFlag(vnode);
	      _unmount(vnode, instance, parentSuspense, true);
	    }
	    function pruneCache(filter) {
	      cache.forEach(function (vnode, key) {
	        var name = getComponentName(vnode.type);
	        if (name && (!filter || !filter(name))) {
	          pruneCacheEntry(key);
	        }
	      });
	    }
	    function pruneCacheEntry(key) {
	      var cached = cache.get(key);
	      if (!current || !isSameVNodeType(cached, current)) {
	        unmount(cached);
	      } else if (current) {
	        resetShapeFlag(current);
	      }
	      cache.delete(key);
	      keys.delete(key);
	    }
	    watch(
	      function () { return [props.include, props.exclude]; },
	      function (ref) {
	        var include = ref[0];
	        var exclude = ref[1];

	        include && pruneCache(function (name) { return matches(include, name); });
	        exclude && pruneCache(function (name) { return !matches(exclude, name); });
	      },
	      // prune post-render after `current` has been updated
	      { flush: "post", deep: true }
	    );
	    var pendingCacheKey = null;
	    var cacheSubtree = function () {
	      if (pendingCacheKey != null) {
	        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
	      }
	    };
	    onMounted(cacheSubtree);
	    onUpdated(cacheSubtree);
	    onBeforeUnmount(function () {
	      cache.forEach(function (cached) {
	        var subTree = instance.subTree;
	        var suspense = instance.suspense;
	        var vnode = getInnerChild(subTree);
	        if (cached.type === vnode.type && cached.key === vnode.key) {
	          resetShapeFlag(vnode);
	          var da = vnode.component.da;
	          da && queuePostRenderEffect(da, suspense);
	          return;
	        }
	        unmount(cached);
	      });
	    });
	    return function () {
	      pendingCacheKey = null;
	      if (!slots.default) {
	        return null;
	      }
	      var children = slots.default();
	      var rawVNode = children[0];
	      if (children.length > 1) {
	        if (!!(process.env.NODE_ENV !== "production")) {
	          warn("KeepAlive should contain exactly one component child.");
	        }
	        current = null;
	        return children;
	      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
	        current = null;
	        return rawVNode;
	      }
	      var vnode = getInnerChild(rawVNode);
	      var comp = vnode.type;
	      var name = getComponentName(
	        isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
	      );
	      var include = props.include;
	      var exclude = props.exclude;
	      var max = props.max;
	      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
	        current = vnode;
	        return rawVNode;
	      }
	      var key = vnode.key == null ? comp : vnode.key;
	      var cachedVNode = cache.get(key);
	      if (vnode.el) {
	        vnode = cloneVNode(vnode);
	        if (rawVNode.shapeFlag & 128) {
	          rawVNode.ssContent = vnode;
	        }
	      }
	      pendingCacheKey = key;
	      if (cachedVNode) {
	        vnode.el = cachedVNode.el;
	        vnode.component = cachedVNode.component;
	        if (vnode.transition) {
	          setTransitionHooks(vnode, vnode.transition);
	        }
	        vnode.shapeFlag |= 512;
	        keys.delete(key);
	        keys.add(key);
	      } else {
	        keys.add(key);
	        if (max && keys.size > parseInt(max, 10)) {
	          pruneCacheEntry(keys.values().next().value);
	        }
	      }
	      vnode.shapeFlag |= 256;
	      current = vnode;
	      return isSuspense(rawVNode.type) ? rawVNode : vnode;
	    };
	  }
	};
	var KeepAlive = KeepAliveImpl;
	function matches(pattern, name) {
	  if (isArray(pattern)) {
	    return pattern.some(function (p) { return matches(p, name); });
	  } else if (isString(pattern)) {
	    return pattern.split(",").includes(name);
	  } else if (isRegExp(pattern)) {
	    return pattern.test(name);
	  }
	  return false;
	}
	function onActivated(hook, target) {
	  registerKeepAliveHook(hook, "a", target);
	}
	function onDeactivated(hook, target) {
	  registerKeepAliveHook(hook, "da", target);
	}
	function registerKeepAliveHook(hook, type, target) {
	  if ( target === void 0 ) target = currentInstance;

	  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
	    var current = target;
	    while (current) {
	      if (current.isDeactivated) {
	        return;
	      }
	      current = current.parent;
	    }
	    return hook();
	  });
	  injectHook(type, wrappedHook, target);
	  if (target) {
	    var current = target.parent;
	    while (current && current.parent) {
	      if (isKeepAlive(current.parent.vnode)) {
	        injectToKeepAliveRoot(wrappedHook, type, target, current);
	      }
	      current = current.parent;
	    }
	  }
	}
	function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
	  var injected = injectHook(
	    type,
	    hook,
	    keepAliveRoot,
	    true
	    /* prepend */
	  );
	  onUnmounted(function () {
	    remove(keepAliveRoot[type], injected);
	  }, target);
	}
	function resetShapeFlag(vnode) {
	  vnode.shapeFlag &= ~256;
	  vnode.shapeFlag &= ~512;
	}
	function getInnerChild(vnode) {
	  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
	}

	function injectHook(type, hook, target, prepend) {
	  if ( target === void 0 ) target = currentInstance;
	  if ( prepend === void 0 ) prepend = false;

	  if (target) {
	    var hooks = target[type] || (target[type] = []);
	    var wrappedHook = hook.__weh || (hook.__weh = function () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      if (target.isUnmounted) {
	        return;
	      }
	      pauseTracking();
	      setCurrentInstance(target);
	      var res = callWithAsyncErrorHandling(hook, target, type, args);
	      unsetCurrentInstance();
	      resetTracking();
	      return res;
	    });
	    if (prepend) {
	      hooks.unshift(wrappedHook);
	    } else {
	      hooks.push(wrappedHook);
	    }
	    return wrappedHook;
	  } else if (!!(process.env.NODE_ENV !== "production")) {
	    var apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
	    warn(
	      apiName + " is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle hooks before the first await statement." )
	    );
	  }
	}
	var createHook = function (lifecycle) { return function (hook, target) {
	  if ( target === void 0 ) target = currentInstance;

	  return (
	  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
	  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, function () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    return hook.apply(void 0, args);
	  }, target)
	);
	 }  };
	var onBeforeMount = createHook("bm");
	var onMounted = createHook("m");
	var onBeforeUpdate = createHook("bu");
	var onUpdated = createHook("u");
	var onBeforeUnmount = createHook("bum");
	var onUnmounted = createHook("um");
	var onServerPrefetch = createHook("sp");
	var onRenderTriggered = createHook(
	  "rtg"
	);
	var onRenderTracked = createHook(
	  "rtc"
	);
	function onErrorCaptured(hook, target) {
	  if ( target === void 0 ) target = currentInstance;

	  injectHook("ec", hook, target);
	}

	var COMPONENTS = "components";
	var DIRECTIVES = "directives";
	function resolveComponent(name, maybeSelfReference) {
	  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
	}
	var NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
	function resolveDynamicComponent(component) {
	  if (isString(component)) {
	    return resolveAsset(COMPONENTS, component, false) || component;
	  } else {
	    return component || NULL_DYNAMIC_COMPONENT;
	  }
	}
	function resolveDirective(name) {
	  return resolveAsset(DIRECTIVES, name);
	}
	function resolveAsset(type, name, warnMissing, maybeSelfReference) {
	  if ( warnMissing === void 0 ) warnMissing = true;
	  if ( maybeSelfReference === void 0 ) maybeSelfReference = false;

	  var instance = currentRenderingInstance || currentInstance;
	  if (instance) {
	    var Component = instance.type;
	    if (type === COMPONENTS) {
	      var selfName = getComponentName(
	        Component,
	        false
	        /* do not include inferred name to avoid breaking existing code */
	      );
	      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
	        return Component;
	      }
	    }
	    var res = (
	      // local registration
	      // check instance[type] first which is resolved for options API
	      resolve(instance[type] || Component[type], name) || // global registration
	      resolve(instance.appContext[type], name)
	    );
	    if (!res && maybeSelfReference) {
	      return Component;
	    }
	    if (!!(process.env.NODE_ENV !== "production") && warnMissing && !res) {
	      var extra = type === COMPONENTS ? "\nIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement." : "";
	      warn(("Failed to resolve " + (type.slice(0, -1)) + ": " + name + extra));
	    }
	    return res;
	  } else if (!!(process.env.NODE_ENV !== "production")) {
	    warn(
	      ("resolve" + (capitalize(type.slice(0, -1))) + " can only be used in render() or setup().")
	    );
	  }
	}
	function resolve(registry, name) {
	  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
	}

	function renderList(source, renderItem, cache, index) {
	  var ret;
	  var cached = cache && cache[index];
	  if (isArray(source) || isString(source)) {
	    ret = new Array(source.length);
	    for (var i = 0, l = source.length; i < l; i++) {
	      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
	    }
	  } else if (typeof source === "number") {
	    if (!!(process.env.NODE_ENV !== "production") && !Number.isInteger(source)) {
	      warn(("The v-for range expect an integer value but got " + source + "."));
	    }
	    ret = new Array(source);
	    for (var i$1 = 0; i$1 < source; i$1++) {
	      ret[i$1] = renderItem(i$1 + 1, i$1, void 0, cached && cached[i$1]);
	    }
	  } else if (isObject(source)) {
	    if (source[Symbol.iterator]) {
	      ret = Array.from(
	        source,
	        function (item, i) { return renderItem(item, i, void 0, cached && cached[i]); }
	      );
	    } else {
	      var keys = Object.keys(source);
	      ret = new Array(keys.length);
	      for (var i$2 = 0, l$1 = keys.length; i$2 < l$1; i$2++) {
	        var key = keys[i$2];
	        ret[i$2] = renderItem(source[key], key, i$2, cached && cached[i$2]);
	      }
	    }
	  } else {
	    ret = [];
	  }
	  if (cache) {
	    cache[index] = ret;
	  }
	  return ret;
	}

	function createSlots(slots, dynamicSlots) {
	  var loop = function ( i ) {
	    var slot = dynamicSlots[i];
	    if (isArray(slot)) {
	      for (var j = 0; j < slot.length; j++) {
	        slots[slot[j].name] = slot[j].fn;
	      }
	    } else if (slot) {
	      slots[slot.name] = slot.key ? function () {
	        var args = [], len = arguments.length;
	        while ( len-- ) args[ len ] = arguments[ len ];

	        var res = slot.fn.apply(slot, args);
	        if (res)
	          { res.key = slot.key; }
	        return res;
	      } : slot.fn;
	    }
	  };

	  for (var i = 0; i < dynamicSlots.length; i++) loop( i );
	  return slots;
	}

	function renderSlot(slots, name, props, fallback, noSlotted) {
	  if ( props === void 0 ) props = {};

	  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
	    if (name !== "default")
	      { props.name = name; }
	    return createVNode("slot", props, fallback && fallback());
	  }
	  var slot = slots[name];
	  if (!!(process.env.NODE_ENV !== "production") && slot && slot.length > 1) {
	    warn(
	      "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
	    );
	    slot = function () { return []; };
	  }
	  if (slot && slot._c) {
	    slot._d = false;
	  }
	  openBlock();
	  var validSlotContent = slot && ensureValidVNode(slot(props));
	  var rendered = createBlock(
	    Fragment,
	    {
	      key: props.key || // slot content array of a dynamic conditional slot may have a branch
	      // key attached in the `createSlots` helper, respect that
	      validSlotContent && validSlotContent.key || ("_" + name)
	    },
	    validSlotContent || (fallback ? fallback() : []),
	    validSlotContent && slots._ === 1 ? 64 : -2
	  );
	  if (!noSlotted && rendered.scopeId) {
	    rendered.slotScopeIds = [rendered.scopeId + "-s"];
	  }
	  if (slot && slot._c) {
	    slot._d = true;
	  }
	  return rendered;
	}
	function ensureValidVNode(vnodes) {
	  return vnodes.some(function (child) {
	    if (!isVNode(child))
	      { return true; }
	    if (child.type === Comment)
	      { return false; }
	    if (child.type === Fragment && !ensureValidVNode(child.children))
	      { return false; }
	    return true;
	  }) ? vnodes : null;
	}

	function toHandlers(obj, preserveCaseIfNecessary) {
	  var ret = {};
	  if (!!(process.env.NODE_ENV !== "production") && !isObject(obj)) {
	    warn("v-on with no argument expects an object value.");
	    return ret;
	  }
	  for (var key in obj) {
	    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? ("on:" + key) : toHandlerKey(key)] = obj[key];
	  }
	  return ret;
	}

	var getPublicInstance = function (i) {
	  if (!i)
	    { return null; }
	  if (isStatefulComponent(i))
	    { return getExposeProxy(i) || i.proxy; }
	  return getPublicInstance(i.parent);
	};
	var publicPropertiesMap = (
	  // Move PURE marker to new line to workaround compiler discarding it
	  // due to type annotation
	  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
	    $: function (i) { return i; },
	    $el: function (i) { return i.vnode.el; },
	    $data: function (i) { return i.data; },
	    $props: function (i) { return !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.props) : i.props; },
	    $attrs: function (i) { return !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.attrs) : i.attrs; },
	    $slots: function (i) { return !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.slots) : i.slots; },
	    $refs: function (i) { return !!(process.env.NODE_ENV !== "production") ? shallowReadonly(i.refs) : i.refs; },
	    $parent: function (i) { return getPublicInstance(i.parent); },
	    $root: function (i) { return getPublicInstance(i.root); },
	    $emit: function (i) { return i.emit; },
	    $options: function (i) { return __VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type; },
	    $forceUpdate: function (i) { return i.f || (i.f = function () { return queueJob(i.update); }); },
	    $nextTick: function (i) { return i.n || (i.n = nextTick.bind(i.proxy)); },
	    $watch: function (i) { return __VUE_OPTIONS_API__ ? instanceWatch.bind(i) : NOOP; }
	  })
	);
	var isReservedPrefix = function (key) { return key === "_" || key === "$"; };
	var hasSetupBinding = function (state, key) { return state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key); };
	var PublicInstanceProxyHandlers = {
	  get: function get(ref, key) {
	    var instance = ref._;

	    var ctx = instance.ctx;
	    var setupState = instance.setupState;
	    var data = instance.data;
	    var props = instance.props;
	    var accessCache = instance.accessCache;
	    var type = instance.type;
	    var appContext = instance.appContext;
	    if (!!(process.env.NODE_ENV !== "production") && key === "__isVue") {
	      return true;
	    }
	    var normalizedProps;
	    if (key[0] !== "$") {
	      var n = accessCache[key];
	      if (n !== void 0) {
	        switch (n) {
	          case 1 /* SETUP */:
	            return setupState[key];
	          case 2 /* DATA */:
	            return data[key];
	          case 4 /* CONTEXT */:
	            return ctx[key];
	          case 3 /* PROPS */:
	            return props[key];
	        }
	      } else if (hasSetupBinding(setupState, key)) {
	        accessCache[key] = 1 /* SETUP */;
	        return setupState[key];
	      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
	        accessCache[key] = 2 /* DATA */;
	        return data[key];
	      } else if (
	        // only cache other properties when instance has declared (thus stable)
	        // props
	        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
	      ) {
	        accessCache[key] = 3 /* PROPS */;
	        return props[key];
	      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
	        accessCache[key] = 4 /* CONTEXT */;
	        return ctx[key];
	      } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
	        accessCache[key] = 0 /* OTHER */;
	      }
	    }
	    var publicGetter = publicPropertiesMap[key];
	    var cssModule, globalProperties;
	    if (publicGetter) {
	      if (key === "$attrs") {
	        track(instance, "get", key);
	        !!(process.env.NODE_ENV !== "production") && markAttrsAccessed();
	      } else if (!!(process.env.NODE_ENV !== "production") && key === "$slots") {
	        track(instance, "get", key);
	      }
	      return publicGetter(instance);
	    } else if (
	      // css module (injected by vue-loader)
	      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
	    ) {
	      return cssModule;
	    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
	      accessCache[key] = 4 /* CONTEXT */;
	      return ctx[key];
	    } else if (
	      // global properties
	      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
	    ) {
	      {
	        return globalProperties[key];
	      }
	    } else if (!!(process.env.NODE_ENV !== "production") && currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
	    // to infinite warning loop
	    key.indexOf("__v") !== 0)) {
	      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
	        warn(
	          ("Property " + (JSON.stringify(
	            key
	          )) + " must be accessed via $data because it starts with a reserved character (\"$\" or \"_\") and is not proxied on the render context.")
	        );
	      } else if (instance === currentRenderingInstance) {
	        warn(
	          ("Property " + (JSON.stringify(key)) + " was accessed during render but is not defined on instance.")
	        );
	      }
	    }
	  },
	  set: function set(ref, key, value) {
	    var instance = ref._;

	    var data = instance.data;
	    var setupState = instance.setupState;
	    var ctx = instance.ctx;
	    if (hasSetupBinding(setupState, key)) {
	      setupState[key] = value;
	      return true;
	    } else if (!!(process.env.NODE_ENV !== "production") && setupState.__isScriptSetup && hasOwn(setupState, key)) {
	      warn(("Cannot mutate <script setup> binding \"" + key + "\" from Options API."));
	      return false;
	    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
	      data[key] = value;
	      return true;
	    } else if (hasOwn(instance.props, key)) {
	      !!(process.env.NODE_ENV !== "production") && warn(("Attempting to mutate prop \"" + key + "\". Props are readonly."));
	      return false;
	    }
	    if (key[0] === "$" && key.slice(1) in instance) {
	      !!(process.env.NODE_ENV !== "production") && warn(
	        ("Attempting to mutate public property \"" + key + "\". Properties starting with $ are reserved and readonly.")
	      );
	      return false;
	    } else {
	      if (!!(process.env.NODE_ENV !== "production") && key in instance.appContext.config.globalProperties) {
	        Object.defineProperty(ctx, key, {
	          enumerable: true,
	          configurable: true,
	          value: value
	        });
	      } else {
	        ctx[key] = value;
	      }
	    }
	    return true;
	  },
	  has: function has(ref, key) {
	    var ref_ = ref._;
	    var data = ref_.data;
	    var setupState = ref_.setupState;
	    var accessCache = ref_.accessCache;
	    var ctx = ref_.ctx;
	    var appContext = ref_.appContext;
	    var propsOptions = ref_.propsOptions;

	    var normalizedProps;
	    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
	  },
	  defineProperty: function defineProperty(target, key, descriptor) {
	    if (descriptor.get != null) {
	      target._.accessCache[key] = 0;
	    } else if (hasOwn(descriptor, "value")) {
	      this.set(target, key, descriptor.value, null);
	    }
	    return Reflect.defineProperty(target, key, descriptor);
	  }
	};
	if (!!(process.env.NODE_ENV !== "production") && true) {
	  PublicInstanceProxyHandlers.ownKeys = function (target) {
	    warn(
	      "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
	    );
	    return Reflect.ownKeys(target);
	  };
	}
	var RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend(
	  {},
	  PublicInstanceProxyHandlers,
	  {
	    get: function get(target, key) {
	      if (key === Symbol.unscopables) {
	        return;
	      }
	      return PublicInstanceProxyHandlers.get(target, key, target);
	    },
	    has: function has(_, key) {
	      var has = key[0] !== "_" && !isGloballyWhitelisted(key);
	      if (!!(process.env.NODE_ENV !== "production") && !has && PublicInstanceProxyHandlers.has(_, key)) {
	        warn(
	          ("Property " + (JSON.stringify(
	            key
	          )) + " should not start with _ which is a reserved prefix for Vue internals.")
	        );
	      }
	      return has;
	    }
	  }
	);
	function createDevRenderContext(instance) {
	  var target = {};
	  Object.defineProperty(target, "_", {
	    configurable: true,
	    enumerable: false,
	    get: function () { return instance; }
	  });
	  Object.keys(publicPropertiesMap).forEach(function (key) {
	    Object.defineProperty(target, key, {
	      configurable: true,
	      enumerable: false,
	      get: function () { return publicPropertiesMap[key](instance); },
	      // intercepted by the proxy so no need for implementation,
	      // but needed to prevent set errors
	      set: NOOP
	    });
	  });
	  return target;
	}
	function exposePropsOnRenderContext(instance) {
	  var ctx = instance.ctx;
	  var propsOptions = instance.propsOptions[0];
	  if (propsOptions) {
	    Object.keys(propsOptions).forEach(function (key) {
	      Object.defineProperty(ctx, key, {
	        enumerable: true,
	        configurable: true,
	        get: function () { return instance.props[key]; },
	        set: NOOP
	      });
	    });
	  }
	}
	function exposeSetupStateOnRenderContext(instance) {
	  var ctx = instance.ctx;
	  var setupState = instance.setupState;
	  Object.keys(toRaw(setupState)).forEach(function (key) {
	    if (!setupState.__isScriptSetup) {
	      if (isReservedPrefix(key[0])) {
	        warn(
	          ("setup() return property " + (JSON.stringify(
	            key
	          )) + " should not start with \"$\" or \"_\" which are reserved prefixes for Vue internals.")
	        );
	        return;
	      }
	      Object.defineProperty(ctx, key, {
	        enumerable: true,
	        configurable: true,
	        get: function () { return setupState[key]; },
	        set: NOOP
	      });
	    }
	  });
	}

	var warnRuntimeUsage = function (method) { return warn(
	  (method + "() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.")
	); };
	function defineProps() {
	  if (!!(process.env.NODE_ENV !== "production")) {
	    warnRuntimeUsage("defineProps");
	  }
	  return null;
	}
	function defineEmits() {
	  if (!!(process.env.NODE_ENV !== "production")) {
	    warnRuntimeUsage("defineEmits");
	  }
	  return null;
	}
	function defineExpose(exposed) {
	  if (!!(process.env.NODE_ENV !== "production")) {
	    warnRuntimeUsage("defineExpose");
	  }
	}
	function defineOptions(options) {
	  if (!!(process.env.NODE_ENV !== "production")) {
	    warnRuntimeUsage("defineOptions");
	  }
	}
	function defineSlots() {
	  if (!!(process.env.NODE_ENV !== "production")) {
	    warnRuntimeUsage("defineSlots");
	  }
	  return null;
	}
	function defineModel() {
	  if (!!(process.env.NODE_ENV !== "production")) {
	    warnRuntimeUsage("defineModel");
	  }
	}
	function withDefaults(props, defaults) {
	  if (!!(process.env.NODE_ENV !== "production")) {
	    warnRuntimeUsage("withDefaults");
	  }
	  return null;
	}
	function useSlots() {
	  return getContext().slots;
	}
	function useAttrs() {
	  return getContext().attrs;
	}
	function useModel(props, name, options) {
	  var i = getCurrentInstance();
	  if (!!(process.env.NODE_ENV !== "production") && !i) {
	    warn("useModel() called without active instance.");
	    return ref();
	  }
	  if (!!(process.env.NODE_ENV !== "production") && !i.propsOptions[0][name]) {
	    warn(("useModel() called with prop \"" + name + "\" which is not declared."));
	    return ref();
	  }
	  if (options && options.local) {
	    var proxy = ref(props[name]);
	    watch(
	      function () { return props[name]; },
	      function (v) { return proxy.value = v; }
	    );
	    watch(proxy, function (value) {
	      if (value !== props[name]) {
	        i.emit(("update:" + name), value);
	      }
	    });
	    return proxy;
	  } else {
	    return {
	      __v_isRef: true,
	      get value() {
	        return props[name];
	      },
	      set value(value) {
	        i.emit(("update:" + name), value);
	      }
	    };
	  }
	}
	function getContext() {
	  var i = getCurrentInstance();
	  if (!!(process.env.NODE_ENV !== "production") && !i) {
	    warn("useContext() called without active instance.");
	  }
	  return i.setupContext || (i.setupContext = createSetupContext(i));
	}
	function normalizePropsOrEmits(props) {
	  return isArray(props) ? props.reduce(
	    function (normalized, p) { return (normalized[p] = null, normalized); },
	    {}
	  ) : props;
	}
	function mergeDefaults(raw, defaults) {
	  var props = normalizePropsOrEmits(raw);
	  for (var key in defaults) {
	    if (key.startsWith("__skip"))
	      { continue; }
	    var opt = props[key];
	    if (opt) {
	      if (isArray(opt) || isFunction(opt)) {
	        opt = props[key] = { type: opt, default: defaults[key] };
	      } else {
	        opt.default = defaults[key];
	      }
	    } else if (opt === null) {
	      opt = props[key] = { default: defaults[key] };
	    } else if (!!(process.env.NODE_ENV !== "production")) {
	      warn(("props default key \"" + key + "\" has no corresponding declaration."));
	    }
	    if (opt && defaults[("__skip_" + key)]) {
	      opt.skipFactory = true;
	    }
	  }
	  return props;
	}
	function mergeModels(a, b) {
	  if (!a || !b)
	    { return a || b; }
	  if (isArray(a) && isArray(b))
	    { return a.concat(b); }
	  return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
	}
	function createPropsRestProxy(props, excludedKeys) {
	  var ret = {};
	  var loop = function ( key ) {
	    if (!excludedKeys.includes(key)) {
	      Object.defineProperty(ret, key, {
	        enumerable: true,
	        get: function () { return props[key]; }
	      });
	    }
	  };

	  for (var key in props) loop( key );
	  return ret;
	}
	function withAsyncContext(getAwaitable) {
	  var ctx = getCurrentInstance();
	  if (!!(process.env.NODE_ENV !== "production") && !ctx) {
	    warn(
	      "withAsyncContext called without active current instance. This is likely a bug."
	    );
	  }
	  var awaitable = getAwaitable();
	  unsetCurrentInstance();
	  if (isPromise(awaitable)) {
	    awaitable = awaitable.catch(function (e) {
	      setCurrentInstance(ctx);
	      throw e;
	    });
	  }
	  return [awaitable, function () { return setCurrentInstance(ctx); }];
	}

	function createDuplicateChecker() {
	  var cache = /* @__PURE__ */ Object.create(null);
	  return function (type, key) {
	    if (cache[key]) {
	      warn((type + " property \"" + key + "\" is already defined in " + (cache[key]) + "."));
	    } else {
	      cache[key] = type;
	    }
	  };
	}
	var shouldCacheAccess = true;
	function applyOptions(instance) {
	  var options = resolveMergedOptions(instance);
	  var publicThis = instance.proxy;
	  var ctx = instance.ctx;
	  shouldCacheAccess = false;
	  if (options.beforeCreate) {
	    callHook$1(options.beforeCreate, instance, "bc");
	  }
	  var dataOptions = options.data;
	  var computedOptions = options.computed;
	  var methods = options.methods;
	  var watchOptions = options.watch;
	  var provideOptions = options.provide;
	  var injectOptions = options.inject;
	  var created = options.created;
	  var beforeMount = options.beforeMount;
	  var mounted = options.mounted;
	  var beforeUpdate = options.beforeUpdate;
	  var updated = options.updated;
	  var activated = options.activated;
	  var deactivated = options.deactivated;
	  options.beforeDestroy;
	  var beforeUnmount = options.beforeUnmount;
	  options.destroyed;
	  var unmounted = options.unmounted;
	  var render = options.render;
	  var renderTracked = options.renderTracked;
	  var renderTriggered = options.renderTriggered;
	  var errorCaptured = options.errorCaptured;
	  var serverPrefetch = options.serverPrefetch;
	  var expose = options.expose;
	  var inheritAttrs = options.inheritAttrs;
	  var components = options.components;
	  var directives = options.directives;
	  options.filters;
	  var checkDuplicateProperties = !!(process.env.NODE_ENV !== "production") ? createDuplicateChecker() : null;
	  if (!!(process.env.NODE_ENV !== "production")) {
	    var ref = instance.propsOptions;
	    var propsOptions = ref[0];
	    if (propsOptions) {
	      for (var key in propsOptions) {
	        checkDuplicateProperties("Props" /* PROPS */, key);
	      }
	    }
	  }
	  if (injectOptions) {
	    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
	  }
	  if (methods) {
	    for (var key$1 in methods) {
	      var methodHandler = methods[key$1];
	      if (isFunction(methodHandler)) {
	        if (!!(process.env.NODE_ENV !== "production")) {
	          Object.defineProperty(ctx, key$1, {
	            value: methodHandler.bind(publicThis),
	            configurable: true,
	            enumerable: true,
	            writable: true
	          });
	        } else {
	          ctx[key$1] = methodHandler.bind(publicThis);
	        }
	        if (!!(process.env.NODE_ENV !== "production")) {
	          checkDuplicateProperties("Methods" /* METHODS */, key$1);
	        }
	      } else if (!!(process.env.NODE_ENV !== "production")) {
	        warn(
	          ("Method \"" + key$1 + "\" has type \"" + (typeof methodHandler) + "\" in the component definition. Did you reference the function correctly?")
	        );
	      }
	    }
	  }
	  if (dataOptions) {
	    if (!!(process.env.NODE_ENV !== "production") && !isFunction(dataOptions)) {
	      warn(
	        "The data option must be a function. Plain object usage is no longer supported."
	      );
	    }
	    var data = dataOptions.call(publicThis, publicThis);
	    if (!!(process.env.NODE_ENV !== "production") && isPromise(data)) {
	      warn(
	        "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
	      );
	    }
	    if (!isObject(data)) {
	      !!(process.env.NODE_ENV !== "production") && warn("data() should return an object.");
	    } else {
	      instance.data = reactive(data);
	      if (!!(process.env.NODE_ENV !== "production")) {
	        var loop = function ( key ) {
	          checkDuplicateProperties("Data" /* DATA */, key$2);
	          if (!isReservedPrefix(key$2[0])) {
	            Object.defineProperty(ctx, key$2, {
	              configurable: true,
	              enumerable: true,
	              get: function () { return data[key$2]; },
	              set: NOOP
	            });
	          }
	        };

	        for (var key$2 in data) loop( key );
	      }
	    }
	  }
	  shouldCacheAccess = true;
	  if (computedOptions) {
	    var loop$1 = function ( key ) {
	      var opt = computedOptions[key$3];
	      var get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
	      if (!!(process.env.NODE_ENV !== "production") && get === NOOP) {
	        warn(("Computed property \"" + key$3 + "\" has no getter."));
	      }
	      var set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : !!(process.env.NODE_ENV !== "production") ? function () {
	        warn(
	          ("Write operation failed: computed property \"" + key$3 + "\" is readonly.")
	        );
	      } : NOOP;
	      var c = computed({
	        get: get,
	        set: set
	      });
	      Object.defineProperty(ctx, key$3, {
	        enumerable: true,
	        configurable: true,
	        get: function () { return c.value; },
	        set: function (v) { return c.value = v; }
	      });
	      if (!!(process.env.NODE_ENV !== "production")) {
	        checkDuplicateProperties("Computed" /* COMPUTED */, key$3);
	      }
	    };

	    for (var key$3 in computedOptions) loop$1( key );
	  }
	  if (watchOptions) {
	    for (var key$4 in watchOptions) {
	      createWatcher(watchOptions[key$4], ctx, publicThis, key$4);
	    }
	  }
	  if (provideOptions) {
	    var provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
	    Reflect.ownKeys(provides).forEach(function (key) {
	      provide(key, provides[key]);
	    });
	  }
	  if (created) {
	    callHook$1(created, instance, "c");
	  }
	  function registerLifecycleHook(register, hook) {
	    if (isArray(hook)) {
	      hook.forEach(function (_hook) { return register(_hook.bind(publicThis)); });
	    } else if (hook) {
	      register(hook.bind(publicThis));
	    }
	  }
	  registerLifecycleHook(onBeforeMount, beforeMount);
	  registerLifecycleHook(onMounted, mounted);
	  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
	  registerLifecycleHook(onUpdated, updated);
	  registerLifecycleHook(onActivated, activated);
	  registerLifecycleHook(onDeactivated, deactivated);
	  registerLifecycleHook(onErrorCaptured, errorCaptured);
	  registerLifecycleHook(onRenderTracked, renderTracked);
	  registerLifecycleHook(onRenderTriggered, renderTriggered);
	  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
	  registerLifecycleHook(onUnmounted, unmounted);
	  registerLifecycleHook(onServerPrefetch, serverPrefetch);
	  if (isArray(expose)) {
	    if (expose.length) {
	      var exposed = instance.exposed || (instance.exposed = {});
	      expose.forEach(function (key) {
	        Object.defineProperty(exposed, key, {
	          get: function () { return publicThis[key]; },
	          set: function (val) { return publicThis[key] = val; }
	        });
	      });
	    } else if (!instance.exposed) {
	      instance.exposed = {};
	    }
	  }
	  if (render && instance.render === NOOP) {
	    instance.render = render;
	  }
	  if (inheritAttrs != null) {
	    instance.inheritAttrs = inheritAttrs;
	  }
	  if (components)
	    { instance.components = components; }
	  if (directives)
	    { instance.directives = directives; }
	}
	function resolveInjections(injectOptions, ctx, checkDuplicateProperties) {
	  if ( checkDuplicateProperties === void 0 ) checkDuplicateProperties = NOOP;

	  if (isArray(injectOptions)) {
	    injectOptions = normalizeInject(injectOptions);
	  }
	  var loop = function ( key ) {
	    var opt = injectOptions[key];
	    var injected = (void 0);
	    if (isObject(opt)) {
	      if ("default" in opt) {
	        injected = inject(
	          opt.from || key,
	          opt.default,
	          true
	          /* treat default function as factory */
	        );
	      } else {
	        injected = inject(opt.from || key);
	      }
	    } else {
	      injected = inject(opt);
	    }
	    if (isRef(injected)) {
	      Object.defineProperty(ctx, key, {
	        enumerable: true,
	        configurable: true,
	        get: function () { return injected.value; },
	        set: function (v) { return injected.value = v; }
	      });
	    } else {
	      ctx[key] = injected;
	    }
	    if (!!(process.env.NODE_ENV !== "production")) {
	      checkDuplicateProperties("Inject" /* INJECT */, key);
	    }
	  };

	  for (var key in injectOptions) loop( key );
	}
	function callHook$1(hook, instance, type) {
	  callWithAsyncErrorHandling(
	    isArray(hook) ? hook.map(function (h) { return h.bind(instance.proxy); }) : hook.bind(instance.proxy),
	    instance,
	    type
	  );
	}
	function createWatcher(raw, ctx, publicThis, key) {
	  var getter = key.includes(".") ? createPathGetter(publicThis, key) : function () { return publicThis[key]; };
	  if (isString(raw)) {
	    var handler = ctx[raw];
	    if (isFunction(handler)) {
	      watch(getter, handler);
	    } else if (!!(process.env.NODE_ENV !== "production")) {
	      warn(("Invalid watch handler specified by key \"" + raw + "\""), handler);
	    }
	  } else if (isFunction(raw)) {
	    watch(getter, raw.bind(publicThis));
	  } else if (isObject(raw)) {
	    if (isArray(raw)) {
	      raw.forEach(function (r) { return createWatcher(r, ctx, publicThis, key); });
	    } else {
	      var handler$1 = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
	      if (isFunction(handler$1)) {
	        watch(getter, handler$1, raw);
	      } else if (!!(process.env.NODE_ENV !== "production")) {
	        warn(("Invalid watch handler specified by key \"" + (raw.handler) + "\""), handler$1);
	      }
	    }
	  } else if (!!(process.env.NODE_ENV !== "production")) {
	    warn(("Invalid watch option: \"" + key + "\""), raw);
	  }
	}
	function resolveMergedOptions(instance) {
	  var base = instance.type;
	  var mixins = base.mixins;
	  var extendsOptions = base.extends;
	  var ref = instance.appContext;
	  var globalMixins = ref.mixins;
	  var cache = ref.optionsCache;
	  var optionMergeStrategies = ref.config.optionMergeStrategies;
	  var cached = cache.get(base);
	  var resolved;
	  if (cached) {
	    resolved = cached;
	  } else if (!globalMixins.length && !mixins && !extendsOptions) {
	    {
	      resolved = base;
	    }
	  } else {
	    resolved = {};
	    if (globalMixins.length) {
	      globalMixins.forEach(
	        function (m) { return mergeOptions(resolved, m, optionMergeStrategies, true); }
	      );
	    }
	    mergeOptions(resolved, base, optionMergeStrategies);
	  }
	  if (isObject(base)) {
	    cache.set(base, resolved);
	  }
	  return resolved;
	}
	function mergeOptions(to, from, strats, asMixin) {
	  if ( asMixin === void 0 ) asMixin = false;

	  var mixins = from.mixins;
	  var extendsOptions = from.extends;
	  if (extendsOptions) {
	    mergeOptions(to, extendsOptions, strats, true);
	  }
	  if (mixins) {
	    mixins.forEach(
	      function (m) { return mergeOptions(to, m, strats, true); }
	    );
	  }
	  for (var key in from) {
	    if (asMixin && key === "expose") {
	      !!(process.env.NODE_ENV !== "production") && warn(
	        "\"expose\" option is ignored when declared in mixins or extends. It should only be declared in the base component itself."
	      );
	    } else {
	      var strat = internalOptionMergeStrats[key] || strats && strats[key];
	      to[key] = strat ? strat(to[key], from[key]) : from[key];
	    }
	  }
	  return to;
	}
	var internalOptionMergeStrats = {
	  data: mergeDataFn,
	  props: mergeEmitsOrPropsOptions,
	  emits: mergeEmitsOrPropsOptions,
	  // objects
	  methods: mergeObjectOptions,
	  computed: mergeObjectOptions,
	  // lifecycle
	  beforeCreate: mergeAsArray,
	  created: mergeAsArray,
	  beforeMount: mergeAsArray,
	  mounted: mergeAsArray,
	  beforeUpdate: mergeAsArray,
	  updated: mergeAsArray,
	  beforeDestroy: mergeAsArray,
	  beforeUnmount: mergeAsArray,
	  destroyed: mergeAsArray,
	  unmounted: mergeAsArray,
	  activated: mergeAsArray,
	  deactivated: mergeAsArray,
	  errorCaptured: mergeAsArray,
	  serverPrefetch: mergeAsArray,
	  // assets
	  components: mergeObjectOptions,
	  directives: mergeObjectOptions,
	  // watch
	  watch: mergeWatchOptions,
	  // provide / inject
	  provide: mergeDataFn,
	  inject: mergeInject
	};
	function mergeDataFn(to, from) {
	  if (!from) {
	    return to;
	  }
	  if (!to) {
	    return from;
	  }
	  return function mergedDataFn() {
	    return (extend)(
	      isFunction(to) ? to.call(this, this) : to,
	      isFunction(from) ? from.call(this, this) : from
	    );
	  };
	}
	function mergeInject(to, from) {
	  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
	}
	function normalizeInject(raw) {
	  if (isArray(raw)) {
	    var res = {};
	    for (var i = 0; i < raw.length; i++) {
	      res[raw[i]] = raw[i];
	    }
	    return res;
	  }
	  return raw;
	}
	function mergeAsArray(to, from) {
	  return to ? [].concat( new Set([].concat(to, from)) ) : from;
	}
	function mergeObjectOptions(to, from) {
	  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
	}
	function mergeEmitsOrPropsOptions(to, from) {
	  if (to) {
	    if (isArray(to) && isArray(from)) {
	      return [].concat( new Set(to.concat( from)) );
	    }
	    return extend(
	      /* @__PURE__ */ Object.create(null),
	      normalizePropsOrEmits(to),
	      normalizePropsOrEmits(from != null ? from : {})
	    );
	  } else {
	    return from;
	  }
	}
	function mergeWatchOptions(to, from) {
	  if (!to)
	    { return from; }
	  if (!from)
	    { return to; }
	  var merged = extend(/* @__PURE__ */ Object.create(null), to);
	  for (var key in from) {
	    merged[key] = mergeAsArray(to[key], from[key]);
	  }
	  return merged;
	}

	function createAppContext() {
	  return {
	    app: null,
	    config: {
	      isNativeTag: NO,
	      performance: false,
	      globalProperties: {},
	      optionMergeStrategies: {},
	      errorHandler: void 0,
	      warnHandler: void 0,
	      compilerOptions: {}
	    },
	    mixins: [],
	    components: {},
	    directives: {},
	    provides: /* @__PURE__ */ Object.create(null),
	    optionsCache: /* @__PURE__ */ new WeakMap(),
	    propsCache: /* @__PURE__ */ new WeakMap(),
	    emitsCache: /* @__PURE__ */ new WeakMap()
	  };
	}
	var uid$1 = 0;
	function createAppAPI(render, hydrate) {
	  return function createApp(rootComponent, rootProps) {
	    if ( rootProps === void 0 ) rootProps = null;

	    if (!isFunction(rootComponent)) {
	      rootComponent = extend({}, rootComponent);
	    }
	    if (rootProps != null && !isObject(rootProps)) {
	      !!(process.env.NODE_ENV !== "production") && warn("root props passed to app.mount() must be an object.");
	      rootProps = null;
	    }
	    var context = createAppContext();
	    if (!!(process.env.NODE_ENV !== "production")) {
	      Object.defineProperty(context.config, "unwrapInjectedRef", {
	        get: function get() {
	          return true;
	        },
	        set: function set() {
	          warn(
	            "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
	          );
	        }
	      });
	    }
	    var installedPlugins = /* @__PURE__ */ new Set();
	    var isMounted = false;
	    var app = context.app = {
	      _uid: uid$1++,
	      _component: rootComponent,
	      _props: rootProps,
	      _container: null,
	      _context: context,
	      _instance: null,
	      version: version,
	      get config() {
	        return context.config;
	      },
	      set config(v) {
	        if (!!(process.env.NODE_ENV !== "production")) {
	          warn(
	            "app.config cannot be replaced. Modify individual options instead."
	          );
	        }
	      },
	      use: function use(plugin) {
	        var options = [], len = arguments.length - 1;
	        while ( len-- > 0 ) options[ len ] = arguments[ len + 1 ];

	        if (installedPlugins.has(plugin)) {
	          !!(process.env.NODE_ENV !== "production") && warn("Plugin has already been applied to target app.");
	        } else if (plugin && isFunction(plugin.install)) {
	          installedPlugins.add(plugin);
	          plugin.install.apply(plugin, [ app ].concat( options ));
	        } else if (isFunction(plugin)) {
	          installedPlugins.add(plugin);
	          plugin.apply(void 0, [ app ].concat( options ));
	        } else if (!!(process.env.NODE_ENV !== "production")) {
	          warn(
	            "A plugin must either be a function or an object with an \"install\" function."
	          );
	        }
	        return app;
	      },
	      mixin: function mixin(mixin$1) {
	        if (__VUE_OPTIONS_API__) {
	          if (!context.mixins.includes(mixin$1)) {
	            context.mixins.push(mixin$1);
	          } else if (!!(process.env.NODE_ENV !== "production")) {
	            warn(
	              "Mixin has already been applied to target app" + (mixin$1.name ? (": " + (mixin$1.name)) : "")
	            );
	          }
	        } else if (!!(process.env.NODE_ENV !== "production")) {
	          warn("Mixins are only available in builds supporting Options API");
	        }
	        return app;
	      },
	      component: function component(name, component$1) {
	        if (!!(process.env.NODE_ENV !== "production")) {
	          validateComponentName(name, context.config);
	        }
	        if (!component$1) {
	          return context.components[name];
	        }
	        if (!!(process.env.NODE_ENV !== "production") && context.components[name]) {
	          warn(("Component \"" + name + "\" has already been registered in target app."));
	        }
	        context.components[name] = component$1;
	        return app;
	      },
	      directive: function directive(name, directive$1) {
	        if (!!(process.env.NODE_ENV !== "production")) {
	          validateDirectiveName(name);
	        }
	        if (!directive$1) {
	          return context.directives[name];
	        }
	        if (!!(process.env.NODE_ENV !== "production") && context.directives[name]) {
	          warn(("Directive \"" + name + "\" has already been registered in target app."));
	        }
	        context.directives[name] = directive$1;
	        return app;
	      },
	      mount: function mount(rootContainer, isHydrate, isSVG) {
	        if (!isMounted) {
	          if (!!(process.env.NODE_ENV !== "production") && rootContainer.__vue_app__) {
	            warn(
	              "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
	            );
	          }
	          var vnode = createVNode(
	            rootComponent,
	            rootProps
	          );
	          vnode.appContext = context;
	          if (!!(process.env.NODE_ENV !== "production")) {
	            context.reload = function () {
	              render(cloneVNode(vnode), rootContainer, isSVG);
	            };
	          }
	          if (isHydrate && hydrate) {
	            hydrate(vnode, rootContainer);
	          } else {
	            render(vnode, rootContainer, isSVG);
	          }
	          isMounted = true;
	          app._container = rootContainer;
	          rootContainer.__vue_app__ = app;
	          if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	            app._instance = vnode.component;
	            devtoolsInitApp(app, version);
	          }
	          return getExposeProxy(vnode.component) || vnode.component.proxy;
	        } else if (!!(process.env.NODE_ENV !== "production")) {
	          warn(
	            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
	          );
	        }
	      },
	      unmount: function unmount() {
	        if (isMounted) {
	          render(null, app._container);
	          if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	            app._instance = null;
	            devtoolsUnmountApp(app);
	          }
	          delete app._container.__vue_app__;
	        } else if (!!(process.env.NODE_ENV !== "production")) {
	          warn("Cannot unmount an app that is not mounted.");
	        }
	      },
	      provide: function provide(key, value) {
	        if (!!(process.env.NODE_ENV !== "production") && key in context.provides) {
	          warn(
	            ("App already provides property with key \"" + (String(key)) + "\". It will be overwritten with the new value.")
	          );
	        }
	        context.provides[key] = value;
	        return app;
	      },
	      runWithContext: function runWithContext(fn) {
	        currentApp = app;
	        try {
	          return fn();
	        } finally {
	          currentApp = null;
	        }
	      }
	    };
	    return app;
	  };
	}
	var currentApp = null;

	function provide(key, value) {
	  if (!currentInstance) {
	    if (!!(process.env.NODE_ENV !== "production")) {
	      warn("provide() can only be used inside setup().");
	    }
	  } else {
	    var provides = currentInstance.provides;
	    var parentProvides = currentInstance.parent && currentInstance.parent.provides;
	    if (parentProvides === provides) {
	      provides = currentInstance.provides = Object.create(parentProvides);
	    }
	    provides[key] = value;
	  }
	}
	function inject(key, defaultValue, treatDefaultAsFactory) {
	  if ( treatDefaultAsFactory === void 0 ) treatDefaultAsFactory = false;

	  var instance = currentInstance || currentRenderingInstance;
	  if (instance || currentApp) {
	    var provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
	    if (provides && key in provides) {
	      return provides[key];
	    } else if (arguments.length > 1) {
	      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
	    } else if (!!(process.env.NODE_ENV !== "production")) {
	      warn(("injection \"" + (String(key)) + "\" not found."));
	    }
	  } else if (!!(process.env.NODE_ENV !== "production")) {
	    warn("inject() can only be used inside setup() or functional components.");
	  }
	}
	function hasInjectionContext() {
	  return !!(currentInstance || currentRenderingInstance || currentApp);
	}

	function initProps(instance, rawProps, isStateful, isSSR) {
	  if ( isSSR === void 0 ) isSSR = false;

	  var props = {};
	  var attrs = {};
	  def(attrs, InternalObjectKey, 1);
	  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
	  setFullProps(instance, rawProps, props, attrs);
	  for (var key in instance.propsOptions[0]) {
	    if (!(key in props)) {
	      props[key] = void 0;
	    }
	  }
	  if (!!(process.env.NODE_ENV !== "production")) {
	    validateProps(rawProps || {}, props, instance);
	  }
	  if (isStateful) {
	    instance.props = isSSR ? props : shallowReactive(props);
	  } else {
	    if (!instance.type.props) {
	      instance.props = attrs;
	    } else {
	      instance.props = props;
	    }
	  }
	  instance.attrs = attrs;
	}
	function isInHmrContext(instance) {
	  while (instance) {
	    if (instance.type.__hmrId)
	      { return true; }
	    instance = instance.parent;
	  }
	}
	function updateProps(instance, rawProps, rawPrevProps, optimized) {
	  var props = instance.props;
	  var attrs = instance.attrs;
	  var patchFlag = instance.vnode.patchFlag;
	  var rawCurrentProps = toRaw(props);
	  var ref = instance.propsOptions;
	  var options = ref[0];
	  var hasAttrsChanged = false;
	  if (
	    // always force full diff in dev
	    // - #1942 if hmr is enabled with sfc component
	    // - vite#872 non-sfc component used by sfc component
	    !(!!(process.env.NODE_ENV !== "production") && isInHmrContext(instance)) && (optimized || patchFlag > 0) && !(patchFlag & 16)
	  ) {
	    if (patchFlag & 8) {
	      var propsToUpdate = instance.vnode.dynamicProps;
	      for (var i = 0; i < propsToUpdate.length; i++) {
	        var key = propsToUpdate[i];
	        if (isEmitListener(instance.emitsOptions, key)) {
	          continue;
	        }
	        var value = rawProps[key];
	        if (options) {
	          if (hasOwn(attrs, key)) {
	            if (value !== attrs[key]) {
	              attrs[key] = value;
	              hasAttrsChanged = true;
	            }
	          } else {
	            var camelizedKey = camelize(key);
	            props[camelizedKey] = resolvePropValue(
	              options,
	              rawCurrentProps,
	              camelizedKey,
	              value,
	              instance,
	              false
	              /* isAbsent */
	            );
	          }
	        } else {
	          if (value !== attrs[key]) {
	            attrs[key] = value;
	            hasAttrsChanged = true;
	          }
	        }
	      }
	    }
	  } else {
	    if (setFullProps(instance, rawProps, props, attrs)) {
	      hasAttrsChanged = true;
	    }
	    var kebabKey;
	    for (var key$1 in rawCurrentProps) {
	      if (!rawProps || // for camelCase
	      !hasOwn(rawProps, key$1) && // it's possible the original props was passed in as kebab-case
	      // and converted to camelCase (#955)
	      ((kebabKey = hyphenate(key$1)) === key$1 || !hasOwn(rawProps, kebabKey))) {
	        if (options) {
	          if (rawPrevProps && // for camelCase
	          (rawPrevProps[key$1] !== void 0 || // for kebab-case
	          rawPrevProps[kebabKey] !== void 0)) {
	            props[key$1] = resolvePropValue(
	              options,
	              rawCurrentProps,
	              key$1,
	              void 0,
	              instance,
	              true
	              /* isAbsent */
	            );
	          }
	        } else {
	          delete props[key$1];
	        }
	      }
	    }
	    if (attrs !== rawCurrentProps) {
	      for (var key$2 in attrs) {
	        if (!rawProps || !hasOwn(rawProps, key$2) && true) {
	          delete attrs[key$2];
	          hasAttrsChanged = true;
	        }
	      }
	    }
	  }
	  if (hasAttrsChanged) {
	    trigger(instance, "set", "$attrs");
	  }
	  if (!!(process.env.NODE_ENV !== "production")) {
	    validateProps(rawProps || {}, props, instance);
	  }
	}
	function setFullProps(instance, rawProps, props, attrs) {
	  var ref = instance.propsOptions;
	  var options = ref[0];
	  var needCastKeys = ref[1];
	  var hasAttrsChanged = false;
	  var rawCastValues;
	  if (rawProps) {
	    for (var key in rawProps) {
	      if (isReservedProp(key)) {
	        continue;
	      }
	      var value = rawProps[key];
	      var camelKey = (void 0);
	      if (options && hasOwn(options, camelKey = camelize(key))) {
	        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
	          props[camelKey] = value;
	        } else {
	          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
	        }
	      } else if (!isEmitListener(instance.emitsOptions, key)) {
	        if (!(key in attrs) || value !== attrs[key]) {
	          attrs[key] = value;
	          hasAttrsChanged = true;
	        }
	      }
	    }
	  }
	  if (needCastKeys) {
	    var rawCurrentProps = toRaw(props);
	    var castValues = rawCastValues || EMPTY_OBJ;
	    for (var i = 0; i < needCastKeys.length; i++) {
	      var key$1 = needCastKeys[i];
	      props[key$1] = resolvePropValue(
	        options,
	        rawCurrentProps,
	        key$1,
	        castValues[key$1],
	        instance,
	        !hasOwn(castValues, key$1)
	      );
	    }
	  }
	  return hasAttrsChanged;
	}
	function resolvePropValue(options, props, key, value, instance, isAbsent) {
	  var opt = options[key];
	  if (opt != null) {
	    var hasDefault = hasOwn(opt, "default");
	    if (hasDefault && value === void 0) {
	      var defaultValue = opt.default;
	      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
	        var propsDefaults = instance.propsDefaults;
	        if (key in propsDefaults) {
	          value = propsDefaults[key];
	        } else {
	          setCurrentInstance(instance);
	          value = propsDefaults[key] = defaultValue.call(
	            null,
	            props
	          );
	          unsetCurrentInstance();
	        }
	      } else {
	        value = defaultValue;
	      }
	    }
	    if (opt[0 /* shouldCast */]) {
	      if (isAbsent && !hasDefault) {
	        value = false;
	      } else if (opt[1 /* shouldCastTrue */] && (value === "" || value === hyphenate(key))) {
	        value = true;
	      }
	    }
	  }
	  return value;
	}
	function normalizePropsOptions(comp, appContext, asMixin) {
	  if ( asMixin === void 0 ) asMixin = false;

	  var cache = appContext.propsCache;
	  var cached = cache.get(comp);
	  if (cached) {
	    return cached;
	  }
	  var raw = comp.props;
	  var normalized = {};
	  var needCastKeys = [];
	  var hasExtends = false;
	  if (__VUE_OPTIONS_API__ && !isFunction(comp)) {
	    var extendProps = function (raw2) {
	      hasExtends = true;
	      var ref = normalizePropsOptions(raw2, appContext, true);
	      var props = ref[0];
	      var keys = ref[1];
	      extend(normalized, props);
	      if (keys)
	        { needCastKeys.push.apply(needCastKeys, keys); }
	    };
	    if (!asMixin && appContext.mixins.length) {
	      appContext.mixins.forEach(extendProps);
	    }
	    if (comp.extends) {
	      extendProps(comp.extends);
	    }
	    if (comp.mixins) {
	      comp.mixins.forEach(extendProps);
	    }
	  }
	  if (!raw && !hasExtends) {
	    if (isObject(comp)) {
	      cache.set(comp, EMPTY_ARR);
	    }
	    return EMPTY_ARR;
	  }
	  if (isArray(raw)) {
	    for (var i = 0; i < raw.length; i++) {
	      if (!!(process.env.NODE_ENV !== "production") && !isString(raw[i])) {
	        warn("props must be strings when using array syntax.", raw[i]);
	      }
	      var normalizedKey = camelize(raw[i]);
	      if (validatePropName(normalizedKey)) {
	        normalized[normalizedKey] = EMPTY_OBJ;
	      }
	    }
	  } else if (raw) {
	    if (!!(process.env.NODE_ENV !== "production") && !isObject(raw)) {
	      warn("invalid props options", raw);
	    }
	    for (var key in raw) {
	      var normalizedKey$1 = camelize(key);
	      if (validatePropName(normalizedKey$1)) {
	        var opt = raw[key];
	        var prop = normalized[normalizedKey$1] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
	        if (prop) {
	          var booleanIndex = getTypeIndex(Boolean, prop.type);
	          var stringIndex = getTypeIndex(String, prop.type);
	          prop[0 /* shouldCast */] = booleanIndex > -1;
	          prop[1 /* shouldCastTrue */] = stringIndex < 0 || booleanIndex < stringIndex;
	          if (booleanIndex > -1 || hasOwn(prop, "default")) {
	            needCastKeys.push(normalizedKey$1);
	          }
	        }
	      }
	    }
	  }
	  var res = [normalized, needCastKeys];
	  if (isObject(comp)) {
	    cache.set(comp, res);
	  }
	  return res;
	}
	function validatePropName(key) {
	  if (key[0] !== "$") {
	    return true;
	  } else if (!!(process.env.NODE_ENV !== "production")) {
	    warn(("Invalid prop name: \"" + key + "\" is a reserved property."));
	  }
	  return false;
	}
	function getType(ctor) {
	  var match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
	  return match ? match[2] : ctor === null ? "null" : "";
	}
	function isSameType(a, b) {
	  return getType(a) === getType(b);
	}
	function getTypeIndex(type, expectedTypes) {
	  if (isArray(expectedTypes)) {
	    return expectedTypes.findIndex(function (t) { return isSameType(t, type); });
	  } else if (isFunction(expectedTypes)) {
	    return isSameType(expectedTypes, type) ? 0 : -1;
	  }
	  return -1;
	}
	function validateProps(rawProps, props, instance) {
	  var resolvedValues = toRaw(props);
	  var options = instance.propsOptions[0];
	  for (var key in options) {
	    var opt = options[key];
	    if (opt == null)
	      { continue; }
	    validateProp(
	      key,
	      resolvedValues[key],
	      opt,
	      !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key))
	    );
	  }
	}
	function validateProp(name, value, prop, isAbsent) {
	  var type = prop.type;
	  var required = prop.required;
	  var validator = prop.validator;
	  var skipCheck = prop.skipCheck;
	  if (required && isAbsent) {
	    warn('Missing required prop: "' + name + '"');
	    return;
	  }
	  if (value == null && !required) {
	    return;
	  }
	  if (type != null && type !== true && !skipCheck) {
	    var isValid = false;
	    var types = isArray(type) ? type : [type];
	    var expectedTypes = [];
	    for (var i = 0; i < types.length && !isValid; i++) {
	      var ref = assertType(value, types[i]);
	      var valid = ref.valid;
	      var expectedType = ref.expectedType;
	      expectedTypes.push(expectedType || "");
	      isValid = valid;
	    }
	    if (!isValid) {
	      warn(getInvalidTypeMessage(name, value, expectedTypes));
	      return;
	    }
	  }
	  if (validator && !validator(value)) {
	    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
	  }
	}
	var isSimpleType = /* @__PURE__ */ makeMap(
	  "String,Number,Boolean,Function,Symbol,BigInt"
	);
	function assertType(value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (isSimpleType(expectedType)) {
	    var t = typeof value;
	    valid = t === expectedType.toLowerCase();
	    if (!valid && t === "object") {
	      valid = value instanceof type;
	    }
	  } else if (expectedType === "Object") {
	    valid = isObject(value);
	  } else if (expectedType === "Array") {
	    valid = isArray(value);
	  } else if (expectedType === "null") {
	    valid = value === null;
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	function getInvalidTypeMessage(name, value, expectedTypes) {
	  var message = "Invalid prop: type check failed for prop \"" + name + "\". Expected " + (expectedTypes.map(capitalize).join(" | "));
	  var expectedType = expectedTypes[0];
	  var receivedType = toRawType(value);
	  var expectedValue = styleValue(value, expectedType);
	  var receivedValue = styleValue(value, receivedType);
	  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
	    message += " with value " + expectedValue;
	  }
	  message += ", got " + receivedType + " ";
	  if (isExplicable(receivedType)) {
	    message += "with value " + receivedValue + ".";
	  }
	  return message;
	}
	function styleValue(value, type) {
	  if (type === "String") {
	    return ("\"" + value + "\"");
	  } else if (type === "Number") {
	    return ("" + (Number(value)));
	  } else {
	    return ("" + value);
	  }
	}
	function isExplicable(type) {
	  var explicitTypes = ["string", "number", "boolean"];
	  return explicitTypes.some(function (elem) { return type.toLowerCase() === elem; });
	}
	function isBoolean() {
	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];

	  return args.some(function (elem) { return elem.toLowerCase() === "boolean"; });
	}

	var isInternalKey = function (key) { return key[0] === "_" || key === "$stable"; };
	var normalizeSlotValue = function (value) { return isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)]; };
	var normalizeSlot = function (key, rawSlot, ctx) {
	  if (rawSlot._n) {
	    return rawSlot;
	  }
	  var normalized = withCtx(function () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    if (!!(process.env.NODE_ENV !== "production") && currentInstance) {
	      warn(
	        ("Slot \"" + key + "\" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.")
	      );
	    }
	    return normalizeSlotValue(rawSlot.apply(void 0, args));
	  }, ctx);
	  normalized._c = false;
	  return normalized;
	};
	var normalizeObjectSlots = function (rawSlots, slots, instance) {
	  var ctx = rawSlots._ctx;
	  for (var key in rawSlots) {
	    if (isInternalKey(key))
	      { continue; }
	    var value = rawSlots[key];
	    if (isFunction(value)) {
	      slots[key] = normalizeSlot(key, value, ctx);
	    } else if (value != null) {
	      if (!!(process.env.NODE_ENV !== "production") && true) {
	        warn(
	          ("Non-function value encountered for slot \"" + key + "\". Prefer function slots for better performance.")
	        );
	      }
	      var normalized = normalizeSlotValue(value);
	      slots[key] = function () { return normalized; };
	    }
	  }
	};
	var normalizeVNodeSlots = function (instance, children) {
	  if (!!(process.env.NODE_ENV !== "production") && !isKeepAlive(instance.vnode) && true) {
	    warn(
	      "Non-function value encountered for default slot. Prefer function slots for better performance."
	    );
	  }
	  var normalized = normalizeSlotValue(children);
	  instance.slots.default = function () { return normalized; };
	};
	var initSlots = function (instance, children) {
	  if (instance.vnode.shapeFlag & 32) {
	    var type = children._;
	    if (type) {
	      instance.slots = toRaw(children);
	      def(children, "_", type);
	    } else {
	      normalizeObjectSlots(
	        children,
	        instance.slots = {});
	    }
	  } else {
	    instance.slots = {};
	    if (children) {
	      normalizeVNodeSlots(instance, children);
	    }
	  }
	  def(instance.slots, InternalObjectKey, 1);
	};
	var updateSlots = function (instance, children, optimized) {
	  var vnode = instance.vnode;
	  var slots = instance.slots;
	  var needDeletionCheck = true;
	  var deletionComparisonTarget = EMPTY_OBJ;
	  if (vnode.shapeFlag & 32) {
	    var type = children._;
	    if (type) {
	      if (!!(process.env.NODE_ENV !== "production") && isHmrUpdating) {
	        extend(slots, children);
	        trigger(instance, "set", "$slots");
	      } else if (optimized && type === 1) {
	        needDeletionCheck = false;
	      } else {
	        extend(slots, children);
	        if (!optimized && type === 1) {
	          delete slots._;
	        }
	      }
	    } else {
	      needDeletionCheck = !children.$stable;
	      normalizeObjectSlots(children, slots);
	    }
	    deletionComparisonTarget = children;
	  } else if (children) {
	    normalizeVNodeSlots(instance, children);
	    deletionComparisonTarget = { default: 1 };
	  }
	  if (needDeletionCheck) {
	    for (var key in slots) {
	      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
	        delete slots[key];
	      }
	    }
	  }
	};

	function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount) {
	  if ( isUnmount === void 0 ) isUnmount = false;

	  if (isArray(rawRef)) {
	    rawRef.forEach(
	      function (r, i) { return setRef(
	        r,
	        oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
	        parentSuspense,
	        vnode,
	        isUnmount
	      ); }
	    );
	    return;
	  }
	  if (isAsyncWrapper(vnode) && !isUnmount) {
	    return;
	  }
	  var refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
	  var value = isUnmount ? null : refValue;
	  var owner = rawRef.i;
	  var ref = rawRef.r;
	  if (!!(process.env.NODE_ENV !== "production") && !owner) {
	    warn(
	      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
	    );
	    return;
	  }
	  var oldRef = oldRawRef && oldRawRef.r;
	  var refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
	  var setupState = owner.setupState;
	  if (oldRef != null && oldRef !== ref) {
	    if (isString(oldRef)) {
	      refs[oldRef] = null;
	      if (hasOwn(setupState, oldRef)) {
	        setupState[oldRef] = null;
	      }
	    } else if (isRef(oldRef)) {
	      oldRef.value = null;
	    }
	  }
	  if (isFunction(ref)) {
	    callWithErrorHandling(ref, owner, 12, [value, refs]);
	  } else {
	    var _isString = isString(ref);
	    var _isRef = isRef(ref);
	    if (_isString || _isRef) {
	      var doSet = function () {
	        if (rawRef.f) {
	          var existing = _isString ? hasOwn(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
	          if (isUnmount) {
	            isArray(existing) && remove(existing, refValue);
	          } else {
	            if (!isArray(existing)) {
	              if (_isString) {
	                refs[ref] = [refValue];
	                if (hasOwn(setupState, ref)) {
	                  setupState[ref] = refs[ref];
	                }
	              } else {
	                ref.value = [refValue];
	                if (rawRef.k)
	                  { refs[rawRef.k] = ref.value; }
	              }
	            } else if (!existing.includes(refValue)) {
	              existing.push(refValue);
	            }
	          }
	        } else if (_isString) {
	          refs[ref] = value;
	          if (hasOwn(setupState, ref)) {
	            setupState[ref] = value;
	          }
	        } else if (_isRef) {
	          ref.value = value;
	          if (rawRef.k)
	            { refs[rawRef.k] = value; }
	        } else if (!!(process.env.NODE_ENV !== "production")) {
	          warn("Invalid template ref type:", ref, ("(" + (typeof ref) + ")"));
	        }
	      };
	      if (value) {
	        doSet.id = -1;
	        queuePostRenderEffect(doSet, parentSuspense);
	      } else {
	        doSet();
	      }
	    } else if (!!(process.env.NODE_ENV !== "production")) {
	      warn("Invalid template ref type:", ref, ("(" + (typeof ref) + ")"));
	    }
	  }
	}

	var hasMismatch = false;
	var isSVGContainer = function (container) { return /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject"; };
	var isComment = function (node) { return node.nodeType === 8; } /* COMMENT */;
	function createHydrationFunctions(rendererInternals) {
	  var mountComponent = rendererInternals.mt;
	  var patch = rendererInternals.p;
	  var rendererInternals_o = rendererInternals.o;
	  var patchProp = rendererInternals_o.patchProp;
	  var createText = rendererInternals_o.createText;
	  var nextSibling = rendererInternals_o.nextSibling;
	  var parentNode = rendererInternals_o.parentNode;
	  var remove = rendererInternals_o.remove;
	  var insert = rendererInternals_o.insert;
	  var createComment = rendererInternals_o.createComment;
	  var hydrate = function (vnode, container) {
	    if (!container.hasChildNodes()) {
	      !!(process.env.NODE_ENV !== "production") && warn(
	        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
	      );
	      patch(null, vnode, container);
	      flushPostFlushCbs();
	      container._vnode = vnode;
	      return;
	    }
	    hasMismatch = false;
	    hydrateNode(container.firstChild, vnode, null, null, null);
	    flushPostFlushCbs();
	    container._vnode = vnode;
	    if (hasMismatch && true) {
	      console.error("Hydration completed but contains mismatches.");
	    }
	  };
	  var hydrateNode = function (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
	    if ( optimized === void 0 ) optimized = false;

	    var isFragmentStart = isComment(node) && node.data === "[";
	    var onMismatch = function () { return handleMismatch(
	      node,
	      vnode,
	      parentComponent,
	      parentSuspense,
	      slotScopeIds,
	      isFragmentStart
	    ); };
	    var type = vnode.type;
	    var ref = vnode.ref;
	    var shapeFlag = vnode.shapeFlag;
	    var patchFlag = vnode.patchFlag;
	    var domType = node.nodeType;
	    vnode.el = node;
	    if (patchFlag === -2) {
	      optimized = false;
	      vnode.dynamicChildren = null;
	    }
	    var nextNode = null;
	    switch (type) {
	      case Text:
	        if (domType !== 3 /* TEXT */) {
	          if (vnode.children === "") {
	            insert(vnode.el = createText(""), parentNode(node), node);
	            nextNode = node;
	          } else {
	            nextNode = onMismatch();
	          }
	        } else {
	          if (node.data !== vnode.children) {
	            hasMismatch = true;
	            !!(process.env.NODE_ENV !== "production") && warn(
	              ("Hydration text mismatch:\n- Client: " + (JSON.stringify(node.data)) + "\n- Server: " + (JSON.stringify(vnode.children)))
	            );
	            node.data = vnode.children;
	          }
	          nextNode = nextSibling(node);
	        }
	        break;
	      case Comment:
	        if (domType !== 8 /* COMMENT */ || isFragmentStart) {
	          nextNode = onMismatch();
	        } else {
	          nextNode = nextSibling(node);
	        }
	        break;
	      case Static:
	        if (isFragmentStart) {
	          node = nextSibling(node);
	          domType = node.nodeType;
	        }
	        if (domType === 1 /* ELEMENT */ || domType === 3 /* TEXT */) {
	          nextNode = node;
	          var needToAdoptContent = !vnode.children.length;
	          for (var i = 0; i < vnode.staticCount; i++) {
	            if (needToAdoptContent)
	              { vnode.children += nextNode.nodeType === 1 /* ELEMENT */ ? nextNode.outerHTML : nextNode.data; }
	            if (i === vnode.staticCount - 1) {
	              vnode.anchor = nextNode;
	            }
	            nextNode = nextSibling(nextNode);
	          }
	          return isFragmentStart ? nextSibling(nextNode) : nextNode;
	        } else {
	          onMismatch();
	        }
	        break;
	      case Fragment:
	        if (!isFragmentStart) {
	          nextNode = onMismatch();
	        } else {
	          nextNode = hydrateFragment(
	            node,
	            vnode,
	            parentComponent,
	            parentSuspense,
	            slotScopeIds,
	            optimized
	          );
	        }
	        break;
	      default:
	        if (shapeFlag & 1) {
	          if (domType !== 1 /* ELEMENT */ || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
	            nextNode = onMismatch();
	          } else {
	            nextNode = hydrateElement(
	              node,
	              vnode,
	              parentComponent,
	              parentSuspense,
	              slotScopeIds,
	              optimized
	            );
	          }
	        } else if (shapeFlag & 6) {
	          vnode.slotScopeIds = slotScopeIds;
	          var container = parentNode(node);
	          mountComponent(
	            vnode,
	            container,
	            null,
	            parentComponent,
	            parentSuspense,
	            isSVGContainer(container),
	            optimized
	          );
	          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
	          if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") {
	            nextNode = nextSibling(nextNode);
	          }
	          if (isAsyncWrapper(vnode)) {
	            var subTree;
	            if (isFragmentStart) {
	              subTree = createVNode(Fragment);
	              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
	            } else {
	              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
	            }
	            subTree.el = node;
	            vnode.component.subTree = subTree;
	          }
	        } else if (shapeFlag & 64) {
	          if (domType !== 8 /* COMMENT */) {
	            nextNode = onMismatch();
	          } else {
	            nextNode = vnode.type.hydrate(
	              node,
	              vnode,
	              parentComponent,
	              parentSuspense,
	              slotScopeIds,
	              optimized,
	              rendererInternals,
	              hydrateChildren
	            );
	          }
	        } else if (shapeFlag & 128) {
	          nextNode = vnode.type.hydrate(
	            node,
	            vnode,
	            parentComponent,
	            parentSuspense,
	            isSVGContainer(parentNode(node)),
	            slotScopeIds,
	            optimized,
	            rendererInternals,
	            hydrateNode
	          );
	        } else if (!!(process.env.NODE_ENV !== "production")) {
	          warn("Invalid HostVNode type:", type, ("(" + (typeof type) + ")"));
	        }
	    }
	    if (ref != null) {
	      setRef(ref, null, parentSuspense, vnode);
	    }
	    return nextNode;
	  };
	  var hydrateElement = function (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
	    optimized = optimized || !!vnode.dynamicChildren;
	    var type = vnode.type;
	    var props = vnode.props;
	    var patchFlag = vnode.patchFlag;
	    var shapeFlag = vnode.shapeFlag;
	    var dirs = vnode.dirs;
	    var forcePatchValue = type === "input" && dirs || type === "option";
	    if (!!(process.env.NODE_ENV !== "production") || forcePatchValue || patchFlag !== -1) {
	      if (dirs) {
	        invokeDirectiveHook(vnode, null, parentComponent, "created");
	      }
	      if (props) {
	        if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
	          for (var key in props) {
	            if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) {
	              patchProp(
	                el,
	                key,
	                null,
	                props[key],
	                false,
	                void 0,
	                parentComponent
	              );
	            }
	          }
	        } else if (props.onClick) {
	          patchProp(
	            el,
	            "onClick",
	            null,
	            props.onClick,
	            false,
	            void 0,
	            parentComponent
	          );
	        }
	      }
	      var vnodeHooks;
	      if (vnodeHooks = props && props.onVnodeBeforeMount) {
	        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
	      }
	      if (dirs) {
	        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
	      }
	      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
	        queueEffectWithSuspense(function () {
	          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
	          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
	        }, parentSuspense);
	      }
	      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
	      !(props && (props.innerHTML || props.textContent))) {
	        var next = hydrateChildren(
	          el.firstChild,
	          vnode,
	          el,
	          parentComponent,
	          parentSuspense,
	          slotScopeIds,
	          optimized
	        );
	        var hasWarned = false;
	        while (next) {
	          hasMismatch = true;
	          if (!!(process.env.NODE_ENV !== "production") && !hasWarned) {
	            warn(
	              ("Hydration children mismatch in <" + (vnode.type) + ">: server rendered element contains more child nodes than client vdom.")
	            );
	            hasWarned = true;
	          }
	          var cur = next;
	          next = next.nextSibling;
	          remove(cur);
	        }
	      } else if (shapeFlag & 8) {
	        if (el.textContent !== vnode.children) {
	          hasMismatch = true;
	          !!(process.env.NODE_ENV !== "production") && warn(
	            ("Hydration text content mismatch in <" + (vnode.type) + ">:\n- Client: " + (el.textContent) + "\n- Server: " + (vnode.children))
	          );
	          el.textContent = vnode.children;
	        }
	      }
	    }
	    return el.nextSibling;
	  };
	  var hydrateChildren = function (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) {
	    optimized = optimized || !!parentVNode.dynamicChildren;
	    var children = parentVNode.children;
	    var l = children.length;
	    var hasWarned = false;
	    for (var i = 0; i < l; i++) {
	      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
	      if (node) {
	        node = hydrateNode(
	          node,
	          vnode,
	          parentComponent,
	          parentSuspense,
	          slotScopeIds,
	          optimized
	        );
	      } else if (vnode.type === Text && !vnode.children) {
	        continue;
	      } else {
	        hasMismatch = true;
	        if (!!(process.env.NODE_ENV !== "production") && !hasWarned) {
	          warn(
	            ("Hydration children mismatch in <" + (container.tagName.toLowerCase()) + ">: server rendered element contains fewer child nodes than client vdom.")
	          );
	          hasWarned = true;
	        }
	        patch(
	          null,
	          vnode,
	          container,
	          null,
	          parentComponent,
	          parentSuspense,
	          isSVGContainer(container),
	          slotScopeIds
	        );
	      }
	    }
	    return node;
	  };
	  var hydrateFragment = function (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
	    var fragmentSlotScopeIds = vnode.slotScopeIds;
	    if (fragmentSlotScopeIds) {
	      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
	    }
	    var container = parentNode(node);
	    var next = hydrateChildren(
	      nextSibling(node),
	      vnode,
	      container,
	      parentComponent,
	      parentSuspense,
	      slotScopeIds,
	      optimized
	    );
	    if (next && isComment(next) && next.data === "]") {
	      return nextSibling(vnode.anchor = next);
	    } else {
	      hasMismatch = true;
	      insert(vnode.anchor = createComment("]"), container, next);
	      return next;
	    }
	  };
	  var handleMismatch = function (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) {
	    hasMismatch = true;
	    !!(process.env.NODE_ENV !== "production") && warn(
	      "Hydration node mismatch:\n- Client vnode:",
	      vnode.type,
	      "\n- Server rendered DOM:",
	      node,
	      node.nodeType === 3 /* TEXT */ ? "(text)" : isComment(node) && node.data === "[" ? "(start of fragment)" : ""
	    );
	    vnode.el = null;
	    if (isFragment) {
	      var end = locateClosingAsyncAnchor(node);
	      while (true) {
	        var next2 = nextSibling(node);
	        if (next2 && next2 !== end) {
	          remove(next2);
	        } else {
	          break;
	        }
	      }
	    }
	    var next = nextSibling(node);
	    var container = parentNode(node);
	    remove(node);
	    patch(
	      null,
	      vnode,
	      container,
	      next,
	      parentComponent,
	      parentSuspense,
	      isSVGContainer(container),
	      slotScopeIds
	    );
	    return next;
	  };
	  var locateClosingAsyncAnchor = function (node) {
	    var match = 0;
	    while (node) {
	      node = nextSibling(node);
	      if (node && isComment(node)) {
	        if (node.data === "[")
	          { match++; }
	        if (node.data === "]") {
	          if (match === 0) {
	            return nextSibling(node);
	          } else {
	            match--;
	          }
	        }
	      }
	    }
	    return node;
	  };
	  return [hydrate, hydrateNode];
	}

	var supported;
	var perf;
	function startMeasure(instance, type) {
	  if (instance.appContext.config.performance && isSupported()) {
	    perf.mark(("vue-" + type + "-" + (instance.uid)));
	  }
	  if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
	  }
	}
	function endMeasure(instance, type) {
	  if (instance.appContext.config.performance && isSupported()) {
	    var startTag = "vue-" + type + "-" + (instance.uid);
	    var endTag = startTag + ":end";
	    perf.mark(endTag);
	    perf.measure(
	      ("<" + (formatComponentName(instance, instance.type)) + "> " + type),
	      startTag,
	      endTag
	    );
	    perf.clearMarks(startTag);
	    perf.clearMarks(endTag);
	  }
	  if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
	  }
	}
	function isSupported() {
	  if (supported !== void 0) {
	    return supported;
	  }
	  if (typeof window !== "undefined" && window.performance) {
	    supported = true;
	    perf = window.performance;
	  } else {
	    supported = false;
	  }
	  return supported;
	}

	function initFeatureFlags() {
	  var needWarn = [];
	  if (typeof __VUE_OPTIONS_API__ !== "boolean") {
	    !!(process.env.NODE_ENV !== "production") && needWarn.push("__VUE_OPTIONS_API__");
	    getGlobalThis().__VUE_OPTIONS_API__ = true;
	  }
	  if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") {
	    !!(process.env.NODE_ENV !== "production") && needWarn.push("__VUE_PROD_DEVTOOLS__");
	    getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
	  }
	  if (!!(process.env.NODE_ENV !== "production") && needWarn.length) {
	    var multi = needWarn.length > 1;
	    console.warn(
	      ("Feature flag" + (multi ? "s" : "") + " " + (needWarn.join(", ")) + " " + (multi ? "are" : "is") + " not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.\n\nFor more details, see https://link.vuejs.org/feature-flags.")
	    );
	  }
	}

	var queuePostRenderEffect = queueEffectWithSuspense ;
	function createRenderer(options) {
	  return baseCreateRenderer(options);
	}
	function createHydrationRenderer(options) {
	  return baseCreateRenderer(options, createHydrationFunctions);
	}
	function baseCreateRenderer(options, createHydrationFns) {
	  var assign;

	  {
	    initFeatureFlags();
	  }
	  var target = getGlobalThis();
	  target.__VUE__ = true;
	  if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
	  }
	  var hostInsert = options.insert;
	  var hostRemove = options.remove;
	  var hostPatchProp = options.patchProp;
	  var hostCreateElement = options.createElement;
	  var hostCreateText = options.createText;
	  var hostCreateComment = options.createComment;
	  var hostSetText = options.setText;
	  var hostSetElementText = options.setElementText;
	  var hostParentNode = options.parentNode;
	  var hostNextSibling = options.nextSibling;
	  var hostSetScopeId = options.setScopeId; if ( hostSetScopeId === void 0 ) hostSetScopeId = NOOP;
	  var hostInsertStaticContent = options.insertStaticContent;
	  var patch = function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
	    if ( anchor === void 0 ) anchor = null;
	    if ( parentComponent === void 0 ) parentComponent = null;
	    if ( parentSuspense === void 0 ) parentSuspense = null;
	    if ( isSVG === void 0 ) isSVG = false;
	    if ( slotScopeIds === void 0 ) slotScopeIds = null;
	    if ( optimized === void 0 ) optimized = !!(process.env.NODE_ENV !== "production") && isHmrUpdating ? false : !!n2.dynamicChildren;

	    if (n1 === n2) {
	      return;
	    }
	    if (n1 && !isSameVNodeType(n1, n2)) {
	      anchor = getNextHostNode(n1);
	      unmount(n1, parentComponent, parentSuspense, true);
	      n1 = null;
	    }
	    if (n2.patchFlag === -2) {
	      optimized = false;
	      n2.dynamicChildren = null;
	    }
	    var type = n2.type;
	    var ref = n2.ref;
	    var shapeFlag = n2.shapeFlag;
	    switch (type) {
	      case Text:
	        processText(n1, n2, container, anchor);
	        break;
	      case Comment:
	        processCommentNode(n1, n2, container, anchor);
	        break;
	      case Static:
	        if (n1 == null) {
	          mountStaticNode(n2, container, anchor, isSVG);
	        } else if (!!(process.env.NODE_ENV !== "production")) {
	          patchStaticNode(n1, n2, container, isSVG);
	        }
	        break;
	      case Fragment:
	        processFragment(
	          n1,
	          n2,
	          container,
	          anchor,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	        break;
	      default:
	        if (shapeFlag & 1) {
	          processElement(
	            n1,
	            n2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized
	          );
	        } else if (shapeFlag & 6) {
	          processComponent(
	            n1,
	            n2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized
	          );
	        } else if (shapeFlag & 64) {
	          type.process(
	            n1,
	            n2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized,
	            internals
	          );
	        } else if (shapeFlag & 128) {
	          type.process(
	            n1,
	            n2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized,
	            internals
	          );
	        } else if (!!(process.env.NODE_ENV !== "production")) {
	          warn("Invalid VNode type:", type, ("(" + (typeof type) + ")"));
	        }
	    }
	    if (ref != null && parentComponent) {
	      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
	    }
	  };
	  var processText = function (n1, n2, container, anchor) {
	    if (n1 == null) {
	      hostInsert(
	        n2.el = hostCreateText(n2.children),
	        container,
	        anchor
	      );
	    } else {
	      var el = n2.el = n1.el;
	      if (n2.children !== n1.children) {
	        hostSetText(el, n2.children);
	      }
	    }
	  };
	  var processCommentNode = function (n1, n2, container, anchor) {
	    if (n1 == null) {
	      hostInsert(
	        n2.el = hostCreateComment(n2.children || ""),
	        container,
	        anchor
	      );
	    } else {
	      n2.el = n1.el;
	    }
	  };
	  var mountStaticNode = function (n2, container, anchor, isSVG) {
	    var assign;

	    (assign = hostInsertStaticContent(
	      n2.children,
	      container,
	      anchor,
	      isSVG,
	      n2.el,
	      n2.anchor
	    ), n2.el = assign[0], n2.anchor = assign[1]);
	  };
	  var patchStaticNode = function (n1, n2, container, isSVG) {
	    var assign;

	    if (n2.children !== n1.children) {
	      var anchor = hostNextSibling(n1.anchor);
	      removeStaticNode(n1);
	      (assign = hostInsertStaticContent(
	        n2.children,
	        container,
	        anchor,
	        isSVG
	      ), n2.el = assign[0], n2.anchor = assign[1]);
	    } else {
	      n2.el = n1.el;
	      n2.anchor = n1.anchor;
	    }
	  };
	  var moveStaticNode = function (ref, container, nextSibling) {
	    var el = ref.el;
	    var anchor = ref.anchor;

	    var next;
	    while (el && el !== anchor) {
	      next = hostNextSibling(el);
	      hostInsert(el, container, nextSibling);
	      el = next;
	    }
	    hostInsert(anchor, container, nextSibling);
	  };
	  var removeStaticNode = function (ref) {
	    var el = ref.el;
	    var anchor = ref.anchor;

	    var next;
	    while (el && el !== anchor) {
	      next = hostNextSibling(el);
	      hostRemove(el);
	      el = next;
	    }
	    hostRemove(anchor);
	  };
	  var processElement = function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
	    isSVG = isSVG || n2.type === "svg";
	    if (n1 == null) {
	      mountElement(
	        n2,
	        container,
	        anchor,
	        parentComponent,
	        parentSuspense,
	        isSVG,
	        slotScopeIds,
	        optimized
	      );
	    } else {
	      patchElement(
	        n1,
	        n2,
	        parentComponent,
	        parentSuspense,
	        isSVG,
	        slotScopeIds,
	        optimized
	      );
	    }
	  };
	  var mountElement = function (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
	    var el;
	    var vnodeHook;
	    var type = vnode.type;
	    var props = vnode.props;
	    var shapeFlag = vnode.shapeFlag;
	    var transition = vnode.transition;
	    var dirs = vnode.dirs;
	    el = vnode.el = hostCreateElement(
	      vnode.type,
	      isSVG,
	      props && props.is,
	      props
	    );
	    if (shapeFlag & 8) {
	      hostSetElementText(el, vnode.children);
	    } else if (shapeFlag & 16) {
	      mountChildren(
	        vnode.children,
	        el,
	        null,
	        parentComponent,
	        parentSuspense,
	        isSVG && type !== "foreignObject",
	        slotScopeIds,
	        optimized
	      );
	    }
	    if (dirs) {
	      invokeDirectiveHook(vnode, null, parentComponent, "created");
	    }
	    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
	    if (props) {
	      for (var key in props) {
	        if (key !== "value" && !isReservedProp(key)) {
	          hostPatchProp(
	            el,
	            key,
	            null,
	            props[key],
	            isSVG,
	            vnode.children,
	            parentComponent,
	            parentSuspense,
	            unmountChildren
	          );
	        }
	      }
	      if ("value" in props) {
	        hostPatchProp(el, "value", null, props.value);
	      }
	      if (vnodeHook = props.onVnodeBeforeMount) {
	        invokeVNodeHook(vnodeHook, parentComponent, vnode);
	      }
	    }
	    if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	      Object.defineProperty(el, "__vnode", {
	        value: vnode,
	        enumerable: false
	      });
	      Object.defineProperty(el, "__vueParentComponent", {
	        value: parentComponent,
	        enumerable: false
	      });
	    }
	    if (dirs) {
	      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
	    }
	    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
	    if (needCallTransitionHooks) {
	      transition.beforeEnter(el);
	    }
	    hostInsert(el, container, anchor);
	    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
	      queuePostRenderEffect(function () {
	        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
	        needCallTransitionHooks && transition.enter(el);
	        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
	      }, parentSuspense);
	    }
	  };
	  var setScopeId = function (el, vnode, scopeId, slotScopeIds, parentComponent) {
	    if (scopeId) {
	      hostSetScopeId(el, scopeId);
	    }
	    if (slotScopeIds) {
	      for (var i = 0; i < slotScopeIds.length; i++) {
	        hostSetScopeId(el, slotScopeIds[i]);
	      }
	    }
	    if (parentComponent) {
	      var subTree = parentComponent.subTree;
	      if (!!(process.env.NODE_ENV !== "production") && subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
	        subTree = filterSingleRoot(subTree.children) || subTree;
	      }
	      if (vnode === subTree) {
	        var parentVNode = parentComponent.vnode;
	        setScopeId(
	          el,
	          parentVNode,
	          parentVNode.scopeId,
	          parentVNode.slotScopeIds,
	          parentComponent.parent
	        );
	      }
	    }
	  };
	  var mountChildren = function (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start) {
	    if ( start === void 0 ) start = 0;

	    for (var i = start; i < children.length; i++) {
	      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
	      patch(
	        null,
	        child,
	        container,
	        anchor,
	        parentComponent,
	        parentSuspense,
	        isSVG,
	        slotScopeIds,
	        optimized
	      );
	    }
	  };
	  var patchElement = function (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
	    var el = n2.el = n1.el;
	    var patchFlag = n2.patchFlag;
	    var dynamicChildren = n2.dynamicChildren;
	    var dirs = n2.dirs;
	    patchFlag |= n1.patchFlag & 16;
	    var oldProps = n1.props || EMPTY_OBJ;
	    var newProps = n2.props || EMPTY_OBJ;
	    var vnodeHook;
	    parentComponent && toggleRecurse(parentComponent, false);
	    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
	      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
	    }
	    if (dirs) {
	      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
	    }
	    parentComponent && toggleRecurse(parentComponent, true);
	    if (!!(process.env.NODE_ENV !== "production") && isHmrUpdating) {
	      patchFlag = 0;
	      optimized = false;
	      dynamicChildren = null;
	    }
	    var areChildrenSVG = isSVG && n2.type !== "foreignObject";
	    if (dynamicChildren) {
	      patchBlockChildren(
	        n1.dynamicChildren,
	        dynamicChildren,
	        el,
	        parentComponent,
	        parentSuspense,
	        areChildrenSVG,
	        slotScopeIds
	      );
	      if (!!(process.env.NODE_ENV !== "production")) {
	        traverseStaticChildren(n1, n2);
	      }
	    } else if (!optimized) {
	      patchChildren(
	        n1,
	        n2,
	        el,
	        null,
	        parentComponent,
	        parentSuspense,
	        areChildrenSVG,
	        slotScopeIds,
	        false
	      );
	    }
	    if (patchFlag > 0) {
	      if (patchFlag & 16) {
	        patchProps(
	          el,
	          n2,
	          oldProps,
	          newProps,
	          parentComponent,
	          parentSuspense,
	          isSVG
	        );
	      } else {
	        if (patchFlag & 2) {
	          if (oldProps.class !== newProps.class) {
	            hostPatchProp(el, "class", null, newProps.class, isSVG);
	          }
	        }
	        if (patchFlag & 4) {
	          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
	        }
	        if (patchFlag & 8) {
	          var propsToUpdate = n2.dynamicProps;
	          for (var i = 0; i < propsToUpdate.length; i++) {
	            var key = propsToUpdate[i];
	            var prev = oldProps[key];
	            var next = newProps[key];
	            if (next !== prev || key === "value") {
	              hostPatchProp(
	                el,
	                key,
	                prev,
	                next,
	                isSVG,
	                n1.children,
	                parentComponent,
	                parentSuspense,
	                unmountChildren
	              );
	            }
	          }
	        }
	      }
	      if (patchFlag & 1) {
	        if (n1.children !== n2.children) {
	          hostSetElementText(el, n2.children);
	        }
	      }
	    } else if (!optimized && dynamicChildren == null) {
	      patchProps(
	        el,
	        n2,
	        oldProps,
	        newProps,
	        parentComponent,
	        parentSuspense,
	        isSVG
	      );
	    }
	    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
	      queuePostRenderEffect(function () {
	        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
	        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
	      }, parentSuspense);
	    }
	  };
	  var patchBlockChildren = function (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) {
	    for (var i = 0; i < newChildren.length; i++) {
	      var oldVNode = oldChildren[i];
	      var newVNode = newChildren[i];
	      var container = (
	        // oldVNode may be an errored async setup() component inside Suspense
	        // which will not have a mounted element
	        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
	        // of the Fragment itself so it can move its children.
	        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
	        // which also requires the correct parent container
	        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
	        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
	          // In other cases, the parent container is not actually used so we
	          // just pass the block element here to avoid a DOM parentNode call.
	          fallbackContainer
	        )
	      );
	      patch(
	        oldVNode,
	        newVNode,
	        container,
	        null,
	        parentComponent,
	        parentSuspense,
	        isSVG,
	        slotScopeIds,
	        true
	      );
	    }
	  };
	  var patchProps = function (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
	    if (oldProps !== newProps) {
	      if (oldProps !== EMPTY_OBJ) {
	        for (var key in oldProps) {
	          if (!isReservedProp(key) && !(key in newProps)) {
	            hostPatchProp(
	              el,
	              key,
	              oldProps[key],
	              null,
	              isSVG,
	              vnode.children,
	              parentComponent,
	              parentSuspense,
	              unmountChildren
	            );
	          }
	        }
	      }
	      for (var key$1 in newProps) {
	        if (isReservedProp(key$1))
	          { continue; }
	        var next = newProps[key$1];
	        var prev = oldProps[key$1];
	        if (next !== prev && key$1 !== "value") {
	          hostPatchProp(
	            el,
	            key$1,
	            prev,
	            next,
	            isSVG,
	            vnode.children,
	            parentComponent,
	            parentSuspense,
	            unmountChildren
	          );
	        }
	      }
	      if ("value" in newProps) {
	        hostPatchProp(el, "value", oldProps.value, newProps.value);
	      }
	    }
	  };
	  var processFragment = function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
	    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
	    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
	    var patchFlag = n2.patchFlag;
	    var dynamicChildren = n2.dynamicChildren;
	    var fragmentSlotScopeIds = n2.slotScopeIds;
	    if (!!(process.env.NODE_ENV !== "production") && // #5523 dev root fragment may inherit directives
	    (isHmrUpdating || patchFlag & 2048)) {
	      patchFlag = 0;
	      optimized = false;
	      dynamicChildren = null;
	    }
	    if (fragmentSlotScopeIds) {
	      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
	    }
	    if (n1 == null) {
	      hostInsert(fragmentStartAnchor, container, anchor);
	      hostInsert(fragmentEndAnchor, container, anchor);
	      mountChildren(
	        n2.children,
	        container,
	        fragmentEndAnchor,
	        parentComponent,
	        parentSuspense,
	        isSVG,
	        slotScopeIds,
	        optimized
	      );
	    } else {
	      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
	      // of renderSlot() with no valid children
	      n1.dynamicChildren) {
	        patchBlockChildren(
	          n1.dynamicChildren,
	          dynamicChildren,
	          container,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          slotScopeIds
	        );
	        if (!!(process.env.NODE_ENV !== "production")) {
	          traverseStaticChildren(n1, n2);
	        } else if (
	          // #2080 if the stable fragment has a key, it's a <template v-for> that may
	          //  get moved around. Make sure all root level vnodes inherit el.
	          // #2134 or if it's a component root, it may also get moved around
	          // as the component is being moved.
	          n2.key != null || parentComponent && n2 === parentComponent.subTree
	        ) {
	          traverseStaticChildren(
	            n1,
	            n2,
	            true
	            /* shallow */
	          );
	        }
	      } else {
	        patchChildren(
	          n1,
	          n2,
	          container,
	          fragmentEndAnchor,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	      }
	    }
	  };
	  var processComponent = function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
	    n2.slotScopeIds = slotScopeIds;
	    if (n1 == null) {
	      if (n2.shapeFlag & 512) {
	        parentComponent.ctx.activate(
	          n2,
	          container,
	          anchor,
	          isSVG,
	          optimized
	        );
	      } else {
	        mountComponent(
	          n2,
	          container,
	          anchor,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          optimized
	        );
	      }
	    } else {
	      updateComponent(n1, n2, optimized);
	    }
	  };
	  var mountComponent = function (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
	    var instance = (initialVNode.component = createComponentInstance(
	      initialVNode,
	      parentComponent,
	      parentSuspense
	    ));
	    if (!!(process.env.NODE_ENV !== "production") && instance.type.__hmrId) {
	      registerHMR(instance);
	    }
	    if (!!(process.env.NODE_ENV !== "production")) {
	      pushWarningContext(initialVNode);
	      startMeasure(instance, "mount");
	    }
	    if (isKeepAlive(initialVNode)) {
	      instance.ctx.renderer = internals;
	    }
	    {
	      if (!!(process.env.NODE_ENV !== "production")) {
	        startMeasure(instance, "init");
	      }
	      setupComponent(instance);
	      if (!!(process.env.NODE_ENV !== "production")) {
	        endMeasure(instance, "init");
	      }
	    }
	    if (instance.asyncDep) {
	      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
	      if (!initialVNode.el) {
	        var placeholder = instance.subTree = createVNode(Comment);
	        processCommentNode(null, placeholder, container, anchor);
	      }
	      return;
	    }
	    setupRenderEffect(
	      instance,
	      initialVNode,
	      container,
	      anchor,
	      parentSuspense,
	      isSVG,
	      optimized
	    );
	    if (!!(process.env.NODE_ENV !== "production")) {
	      popWarningContext();
	      endMeasure(instance, "mount");
	    }
	  };
	  var updateComponent = function (n1, n2, optimized) {
	    var instance = n2.component = n1.component;
	    if (shouldUpdateComponent(n1, n2, optimized)) {
	      if (instance.asyncDep && !instance.asyncResolved) {
	        if (!!(process.env.NODE_ENV !== "production")) {
	          pushWarningContext(n2);
	        }
	        updateComponentPreRender(instance, n2, optimized);
	        if (!!(process.env.NODE_ENV !== "production")) {
	          popWarningContext();
	        }
	        return;
	      } else {
	        instance.next = n2;
	        invalidateJob(instance.update);
	        instance.update();
	      }
	    } else {
	      n2.el = n1.el;
	      instance.vnode = n2;
	    }
	  };
	  var setupRenderEffect = function (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
	    var componentUpdateFn = function () {
	      if (!instance.isMounted) {
	        var vnodeHook;
	        var el = initialVNode.el;
	        var props = initialVNode.props;
	        var bm = instance.bm;
	        var m = instance.m;
	        var parent = instance.parent;
	        var isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
	        toggleRecurse(instance, false);
	        if (bm) {
	          invokeArrayFns(bm);
	        }
	        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
	          invokeVNodeHook(vnodeHook, parent, initialVNode);
	        }
	        toggleRecurse(instance, true);
	        if (el && hydrateNode) {
	          var hydrateSubTree = function () {
	            if (!!(process.env.NODE_ENV !== "production")) {
	              startMeasure(instance, "render");
	            }
	            instance.subTree = renderComponentRoot(instance);
	            if (!!(process.env.NODE_ENV !== "production")) {
	              endMeasure(instance, "render");
	            }
	            if (!!(process.env.NODE_ENV !== "production")) {
	              startMeasure(instance, "hydrate");
	            }
	            hydrateNode(
	              el,
	              instance.subTree,
	              instance,
	              parentSuspense,
	              null
	            );
	            if (!!(process.env.NODE_ENV !== "production")) {
	              endMeasure(instance, "hydrate");
	            }
	          };
	          if (isAsyncWrapperVNode) {
	            initialVNode.type.__asyncLoader().then(
	              // note: we are moving the render call into an async callback,
	              // which means it won't track dependencies - but it's ok because
	              // a server-rendered async wrapper is already in resolved state
	              // and it will never need to change.
	              function () { return !instance.isUnmounted && hydrateSubTree(); }
	            );
	          } else {
	            hydrateSubTree();
	          }
	        } else {
	          if (!!(process.env.NODE_ENV !== "production")) {
	            startMeasure(instance, "render");
	          }
	          var subTree = instance.subTree = renderComponentRoot(instance);
	          if (!!(process.env.NODE_ENV !== "production")) {
	            endMeasure(instance, "render");
	          }
	          if (!!(process.env.NODE_ENV !== "production")) {
	            startMeasure(instance, "patch");
	          }
	          patch(
	            null,
	            subTree,
	            container,
	            anchor,
	            instance,
	            parentSuspense,
	            isSVG
	          );
	          if (!!(process.env.NODE_ENV !== "production")) {
	            endMeasure(instance, "patch");
	          }
	          initialVNode.el = subTree.el;
	        }
	        if (m) {
	          queuePostRenderEffect(m, parentSuspense);
	        }
	        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
	          var scopedInitialVNode = initialVNode;
	          queuePostRenderEffect(
	            function () { return invokeVNodeHook(vnodeHook, parent, scopedInitialVNode); },
	            parentSuspense
	          );
	        }
	        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
	          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
	        }
	        instance.isMounted = true;
	        if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	          devtoolsComponentAdded(instance);
	        }
	        initialVNode = container = anchor = null;
	      } else {
	        var next = instance.next;
	        var bu = instance.bu;
	        var u = instance.u;
	        var parent$1 = instance.parent;
	        var vnode = instance.vnode;
	        var originNext = next;
	        var vnodeHook$1;
	        if (!!(process.env.NODE_ENV !== "production")) {
	          pushWarningContext(next || instance.vnode);
	        }
	        toggleRecurse(instance, false);
	        if (next) {
	          next.el = vnode.el;
	          updateComponentPreRender(instance, next, optimized);
	        } else {
	          next = vnode;
	        }
	        if (bu) {
	          invokeArrayFns(bu);
	        }
	        if (vnodeHook$1 = next.props && next.props.onVnodeBeforeUpdate) {
	          invokeVNodeHook(vnodeHook$1, parent$1, next, vnode);
	        }
	        toggleRecurse(instance, true);
	        if (!!(process.env.NODE_ENV !== "production")) {
	          startMeasure(instance, "render");
	        }
	        var nextTree = renderComponentRoot(instance);
	        if (!!(process.env.NODE_ENV !== "production")) {
	          endMeasure(instance, "render");
	        }
	        var prevTree = instance.subTree;
	        instance.subTree = nextTree;
	        if (!!(process.env.NODE_ENV !== "production")) {
	          startMeasure(instance, "patch");
	        }
	        patch(
	          prevTree,
	          nextTree,
	          // parent may have changed if it's in a teleport
	          hostParentNode(prevTree.el),
	          // anchor may have changed if it's in a fragment
	          getNextHostNode(prevTree),
	          instance,
	          parentSuspense,
	          isSVG
	        );
	        if (!!(process.env.NODE_ENV !== "production")) {
	          endMeasure(instance, "patch");
	        }
	        next.el = nextTree.el;
	        if (originNext === null) {
	          updateHOCHostEl(instance, nextTree.el);
	        }
	        if (u) {
	          queuePostRenderEffect(u, parentSuspense);
	        }
	        if (vnodeHook$1 = next.props && next.props.onVnodeUpdated) {
	          queuePostRenderEffect(
	            function () { return invokeVNodeHook(vnodeHook$1, parent$1, next, vnode); },
	            parentSuspense
	          );
	        }
	        if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	          devtoolsComponentUpdated(instance);
	        }
	        if (!!(process.env.NODE_ENV !== "production")) {
	          popWarningContext();
	        }
	      }
	    };
	    var effect = instance.effect = new ReactiveEffect(
	      componentUpdateFn,
	      function () { return queueJob(update); },
	      instance.scope
	      // track it in component's effect scope
	    );
	    var update = instance.update = function () { return effect.run(); };
	    update.id = instance.uid;
	    toggleRecurse(instance, true);
	    if (!!(process.env.NODE_ENV !== "production")) {
	      effect.onTrack = instance.rtc ? function (e) { return invokeArrayFns(instance.rtc, e); } : void 0;
	      effect.onTrigger = instance.rtg ? function (e) { return invokeArrayFns(instance.rtg, e); } : void 0;
	      update.ownerInstance = instance;
	    }
	    update();
	  };
	  var updateComponentPreRender = function (instance, nextVNode, optimized) {
	    nextVNode.component = instance;
	    var prevProps = instance.vnode.props;
	    instance.vnode = nextVNode;
	    instance.next = null;
	    updateProps(instance, nextVNode.props, prevProps, optimized);
	    updateSlots(instance, nextVNode.children, optimized);
	    pauseTracking();
	    flushPreFlushCbs();
	    resetTracking();
	  };
	  var patchChildren = function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
	    if ( optimized === void 0 ) optimized = false;

	    var c1 = n1 && n1.children;
	    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
	    var c2 = n2.children;
	    var patchFlag = n2.patchFlag;
	    var shapeFlag = n2.shapeFlag;
	    if (patchFlag > 0) {
	      if (patchFlag & 128) {
	        patchKeyedChildren(
	          c1,
	          c2,
	          container,
	          anchor,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	        return;
	      } else if (patchFlag & 256) {
	        patchUnkeyedChildren(
	          c1,
	          c2,
	          container,
	          anchor,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	        return;
	      }
	    }
	    if (shapeFlag & 8) {
	      if (prevShapeFlag & 16) {
	        unmountChildren(c1, parentComponent, parentSuspense);
	      }
	      if (c2 !== c1) {
	        hostSetElementText(container, c2);
	      }
	    } else {
	      if (prevShapeFlag & 16) {
	        if (shapeFlag & 16) {
	          patchKeyedChildren(
	            c1,
	            c2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized
	          );
	        } else {
	          unmountChildren(c1, parentComponent, parentSuspense, true);
	        }
	      } else {
	        if (prevShapeFlag & 8) {
	          hostSetElementText(container, "");
	        }
	        if (shapeFlag & 16) {
	          mountChildren(
	            c2,
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized
	          );
	        }
	      }
	    }
	  };
	  var patchUnkeyedChildren = function (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
	    c1 = c1 || EMPTY_ARR;
	    c2 = c2 || EMPTY_ARR;
	    var oldLength = c1.length;
	    var newLength = c2.length;
	    var commonLength = Math.min(oldLength, newLength);
	    var i;
	    for (i = 0; i < commonLength; i++) {
	      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
	      patch(
	        c1[i],
	        nextChild,
	        container,
	        null,
	        parentComponent,
	        parentSuspense,
	        isSVG,
	        slotScopeIds,
	        optimized
	      );
	    }
	    if (oldLength > newLength) {
	      unmountChildren(
	        c1,
	        parentComponent,
	        parentSuspense,
	        true,
	        false,
	        commonLength
	      );
	    } else {
	      mountChildren(
	        c2,
	        container,
	        anchor,
	        parentComponent,
	        parentSuspense,
	        isSVG,
	        slotScopeIds,
	        optimized,
	        commonLength
	      );
	    }
	  };
	  var patchKeyedChildren = function (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
	    var i = 0;
	    var l2 = c2.length;
	    var e1 = c1.length - 1;
	    var e2 = l2 - 1;
	    while (i <= e1 && i <= e2) {
	      var n1 = c1[i];
	      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
	      if (isSameVNodeType(n1, n2)) {
	        patch(
	          n1,
	          n2,
	          container,
	          null,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	      } else {
	        break;
	      }
	      i++;
	    }
	    while (i <= e1 && i <= e2) {
	      var n1$1 = c1[e1];
	      var n2$1 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
	      if (isSameVNodeType(n1$1, n2$1)) {
	        patch(
	          n1$1,
	          n2$1,
	          container,
	          null,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          slotScopeIds,
	          optimized
	        );
	      } else {
	        break;
	      }
	      e1--;
	      e2--;
	    }
	    if (i > e1) {
	      if (i <= e2) {
	        var nextPos = e2 + 1;
	        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
	        while (i <= e2) {
	          patch(
	            null,
	            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
	            container,
	            anchor,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized
	          );
	          i++;
	        }
	      }
	    } else if (i > e2) {
	      while (i <= e1) {
	        unmount(c1[i], parentComponent, parentSuspense, true);
	        i++;
	      }
	    } else {
	      var s1 = i;
	      var s2 = i;
	      var keyToNewIndexMap = /* @__PURE__ */ new Map();
	      for (i = s2; i <= e2; i++) {
	        var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
	        if (nextChild.key != null) {
	          if (!!(process.env.NODE_ENV !== "production") && keyToNewIndexMap.has(nextChild.key)) {
	            warn(
	              "Duplicate keys found during update:",
	              JSON.stringify(nextChild.key),
	              "Make sure keys are unique."
	            );
	          }
	          keyToNewIndexMap.set(nextChild.key, i);
	        }
	      }
	      var j;
	      var patched = 0;
	      var toBePatched = e2 - s2 + 1;
	      var moved = false;
	      var maxNewIndexSoFar = 0;
	      var newIndexToOldIndexMap = new Array(toBePatched);
	      for (i = 0; i < toBePatched; i++)
	        { newIndexToOldIndexMap[i] = 0; }
	      for (i = s1; i <= e1; i++) {
	        var prevChild = c1[i];
	        if (patched >= toBePatched) {
	          unmount(prevChild, parentComponent, parentSuspense, true);
	          continue;
	        }
	        var newIndex = (void 0);
	        if (prevChild.key != null) {
	          newIndex = keyToNewIndexMap.get(prevChild.key);
	        } else {
	          for (j = s2; j <= e2; j++) {
	            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
	              newIndex = j;
	              break;
	            }
	          }
	        }
	        if (newIndex === void 0) {
	          unmount(prevChild, parentComponent, parentSuspense, true);
	        } else {
	          newIndexToOldIndexMap[newIndex - s2] = i + 1;
	          if (newIndex >= maxNewIndexSoFar) {
	            maxNewIndexSoFar = newIndex;
	          } else {
	            moved = true;
	          }
	          patch(
	            prevChild,
	            c2[newIndex],
	            container,
	            null,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized
	          );
	          patched++;
	        }
	      }
	      var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
	      j = increasingNewIndexSequence.length - 1;
	      for (i = toBePatched - 1; i >= 0; i--) {
	        var nextIndex = s2 + i;
	        var nextChild$1 = c2[nextIndex];
	        var anchor$1 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
	        if (newIndexToOldIndexMap[i] === 0) {
	          patch(
	            null,
	            nextChild$1,
	            container,
	            anchor$1,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized
	          );
	        } else if (moved) {
	          if (j < 0 || i !== increasingNewIndexSequence[j]) {
	            move(nextChild$1, container, anchor$1, 2);
	          } else {
	            j--;
	          }
	        }
	      }
	    }
	  };
	  var move = function (vnode, container, anchor, moveType, parentSuspense) {
	    if ( parentSuspense === void 0 ) parentSuspense = null;

	    var el = vnode.el;
	    var type = vnode.type;
	    var transition = vnode.transition;
	    var children = vnode.children;
	    var shapeFlag = vnode.shapeFlag;
	    if (shapeFlag & 6) {
	      move(vnode.component.subTree, container, anchor, moveType);
	      return;
	    }
	    if (shapeFlag & 128) {
	      vnode.suspense.move(container, anchor, moveType);
	      return;
	    }
	    if (shapeFlag & 64) {
	      type.move(vnode, container, anchor, internals);
	      return;
	    }
	    if (type === Fragment) {
	      hostInsert(el, container, anchor);
	      for (var i = 0; i < children.length; i++) {
	        move(children[i], container, anchor, moveType);
	      }
	      hostInsert(vnode.anchor, container, anchor);
	      return;
	    }
	    if (type === Static) {
	      moveStaticNode(vnode, container, anchor);
	      return;
	    }
	    var needTransition = moveType !== 2 && shapeFlag & 1 && transition;
	    if (needTransition) {
	      if (moveType === 0) {
	        transition.beforeEnter(el);
	        hostInsert(el, container, anchor);
	        queuePostRenderEffect(function () { return transition.enter(el); }, parentSuspense);
	      } else {
	        var leave = transition.leave;
	        var delayLeave = transition.delayLeave;
	        var afterLeave = transition.afterLeave;
	        var remove2 = function () { return hostInsert(el, container, anchor); };
	        var performLeave = function () {
	          leave(el, function () {
	            remove2();
	            afterLeave && afterLeave();
	          });
	        };
	        if (delayLeave) {
	          delayLeave(el, remove2, performLeave);
	        } else {
	          performLeave();
	        }
	      }
	    } else {
	      hostInsert(el, container, anchor);
	    }
	  };
	  var unmount = function (vnode, parentComponent, parentSuspense, doRemove, optimized) {
	    if ( doRemove === void 0 ) doRemove = false;
	    if ( optimized === void 0 ) optimized = false;

	    var type = vnode.type;
	    var props = vnode.props;
	    var ref = vnode.ref;
	    var children = vnode.children;
	    var dynamicChildren = vnode.dynamicChildren;
	    var shapeFlag = vnode.shapeFlag;
	    var patchFlag = vnode.patchFlag;
	    var dirs = vnode.dirs;
	    if (ref != null) {
	      setRef(ref, null, parentSuspense, vnode, true);
	    }
	    if (shapeFlag & 256) {
	      parentComponent.ctx.deactivate(vnode);
	      return;
	    }
	    var shouldInvokeDirs = shapeFlag & 1 && dirs;
	    var shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
	    var vnodeHook;
	    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
	      invokeVNodeHook(vnodeHook, parentComponent, vnode);
	    }
	    if (shapeFlag & 6) {
	      unmountComponent(vnode.component, parentSuspense, doRemove);
	    } else {
	      if (shapeFlag & 128) {
	        vnode.suspense.unmount(parentSuspense, doRemove);
	        return;
	      }
	      if (shouldInvokeDirs) {
	        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
	      }
	      if (shapeFlag & 64) {
	        vnode.type.remove(
	          vnode,
	          parentComponent,
	          parentSuspense,
	          optimized,
	          internals,
	          doRemove
	        );
	      } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
	      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
	        unmountChildren(
	          dynamicChildren,
	          parentComponent,
	          parentSuspense,
	          false,
	          true
	        );
	      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
	        unmountChildren(children, parentComponent, parentSuspense);
	      }
	      if (doRemove) {
	        remove(vnode);
	      }
	    }
	    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
	      queuePostRenderEffect(function () {
	        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
	        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
	      }, parentSuspense);
	    }
	  };
	  var remove = function (vnode) {
	    var type = vnode.type;
	    var el = vnode.el;
	    var anchor = vnode.anchor;
	    var transition = vnode.transition;
	    if (type === Fragment) {
	      if (!!(process.env.NODE_ENV !== "production") && vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
	        vnode.children.forEach(function (child) {
	          if (child.type === Comment) {
	            hostRemove(child.el);
	          } else {
	            remove(child);
	          }
	        });
	      } else {
	        removeFragment(el, anchor);
	      }
	      return;
	    }
	    if (type === Static) {
	      removeStaticNode(vnode);
	      return;
	    }
	    var performRemove = function () {
	      hostRemove(el);
	      if (transition && !transition.persisted && transition.afterLeave) {
	        transition.afterLeave();
	      }
	    };
	    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
	      var leave = transition.leave;
	      var delayLeave = transition.delayLeave;
	      var performLeave = function () { return leave(el, performRemove); };
	      if (delayLeave) {
	        delayLeave(vnode.el, performRemove, performLeave);
	      } else {
	        performLeave();
	      }
	    } else {
	      performRemove();
	    }
	  };
	  var removeFragment = function (cur, end) {
	    var next;
	    while (cur !== end) {
	      next = hostNextSibling(cur);
	      hostRemove(cur);
	      cur = next;
	    }
	    hostRemove(end);
	  };
	  var unmountComponent = function (instance, parentSuspense, doRemove) {
	    if (!!(process.env.NODE_ENV !== "production") && instance.type.__hmrId) {
	      unregisterHMR(instance);
	    }
	    var bum = instance.bum;
	    var scope = instance.scope;
	    var update = instance.update;
	    var subTree = instance.subTree;
	    var um = instance.um;
	    if (bum) {
	      invokeArrayFns(bum);
	    }
	    scope.stop();
	    if (update) {
	      update.active = false;
	      unmount(subTree, instance, parentSuspense, doRemove);
	    }
	    if (um) {
	      queuePostRenderEffect(um, parentSuspense);
	    }
	    queuePostRenderEffect(function () {
	      instance.isUnmounted = true;
	    }, parentSuspense);
	    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
	      parentSuspense.deps--;
	      if (parentSuspense.deps === 0) {
	        parentSuspense.resolve();
	      }
	    }
	    if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	      devtoolsComponentRemoved(instance);
	    }
	  };
	  var unmountChildren = function (children, parentComponent, parentSuspense, doRemove, optimized, start) {
	    if ( doRemove === void 0 ) doRemove = false;
	    if ( optimized === void 0 ) optimized = false;
	    if ( start === void 0 ) start = 0;

	    for (var i = start; i < children.length; i++) {
	      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
	    }
	  };
	  var getNextHostNode = function (vnode) {
	    if (vnode.shapeFlag & 6) {
	      return getNextHostNode(vnode.component.subTree);
	    }
	    if (vnode.shapeFlag & 128) {
	      return vnode.suspense.next();
	    }
	    return hostNextSibling(vnode.anchor || vnode.el);
	  };
	  var render = function (vnode, container, isSVG) {
	    if (vnode == null) {
	      if (container._vnode) {
	        unmount(container._vnode, null, null, true);
	      }
	    } else {
	      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
	    }
	    flushPreFlushCbs();
	    flushPostFlushCbs();
	    container._vnode = vnode;
	  };
	  var internals = {
	    p: patch,
	    um: unmount,
	    m: move,
	    r: remove,
	    mt: mountComponent,
	    mc: mountChildren,
	    pc: patchChildren,
	    pbc: patchBlockChildren,
	    n: getNextHostNode,
	    o: options
	  };
	  var hydrate;
	  var hydrateNode;
	  if (createHydrationFns) {
	    (assign = createHydrationFns(
	      internals
	    ), hydrate = assign[0], hydrateNode = assign[1]);
	  }
	  return {
	    render: render,
	    hydrate: hydrate,
	    createApp: createAppAPI(render, hydrate)
	  };
	}
	function toggleRecurse(ref, allowed) {
	  var effect = ref.effect;
	  var update = ref.update;

	  effect.allowRecurse = update.allowRecurse = allowed;
	}
	function traverseStaticChildren(n1, n2, shallow) {
	  if ( shallow === void 0 ) shallow = false;

	  var ch1 = n1.children;
	  var ch2 = n2.children;
	  if (isArray(ch1) && isArray(ch2)) {
	    for (var i = 0; i < ch1.length; i++) {
	      var c1 = ch1[i];
	      var c2 = ch2[i];
	      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
	        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
	          c2 = ch2[i] = cloneIfMounted(ch2[i]);
	          c2.el = c1.el;
	        }
	        if (!shallow)
	          { traverseStaticChildren(c1, c2); }
	      }
	      if (c2.type === Text) {
	        c2.el = c1.el;
	      }
	      if (!!(process.env.NODE_ENV !== "production") && c2.type === Comment && !c2.el) {
	        c2.el = c1.el;
	      }
	    }
	  }
	}
	function getSequence(arr) {
	  var p = arr.slice();
	  var result = [0];
	  var i, j, u, v, c;
	  var len = arr.length;
	  for (i = 0; i < len; i++) {
	    var arrI = arr[i];
	    if (arrI !== 0) {
	      j = result[result.length - 1];
	      if (arr[j] < arrI) {
	        p[i] = j;
	        result.push(i);
	        continue;
	      }
	      u = 0;
	      v = result.length - 1;
	      while (u < v) {
	        c = u + v >> 1;
	        if (arr[result[c]] < arrI) {
	          u = c + 1;
	        } else {
	          v = c;
	        }
	      }
	      if (arrI < arr[result[u]]) {
	        if (u > 0) {
	          p[i] = result[u - 1];
	        }
	        result[u] = i;
	      }
	    }
	  }
	  u = result.length;
	  v = result[u - 1];
	  while (u-- > 0) {
	    result[u] = v;
	    v = p[v];
	  }
	  return result;
	}

	var isTeleport = function (type) { return type.__isTeleport; };
	var isTeleportDisabled = function (props) { return props && (props.disabled || props.disabled === ""); };
	var isTargetSVG = function (target) { return typeof SVGElement !== "undefined" && target instanceof SVGElement; };
	var resolveTarget = function (props, select) {
	  var targetSelector = props && props.to;
	  if (isString(targetSelector)) {
	    if (!select) {
	      !!(process.env.NODE_ENV !== "production") && warn(
	        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
	      );
	      return null;
	    } else {
	      var target = select(targetSelector);
	      if (!target) {
	        !!(process.env.NODE_ENV !== "production") && warn(
	          ("Failed to locate Teleport target with selector \"" + targetSelector + "\". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.")
	        );
	      }
	      return target;
	    }
	  } else {
	    if (!!(process.env.NODE_ENV !== "production") && !targetSelector && !isTeleportDisabled(props)) {
	      warn(("Invalid Teleport target: " + targetSelector));
	    }
	    return targetSelector;
	  }
	};
	var TeleportImpl = {
	  __isTeleport: true,
	  process: function process$1(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
	    var mountChildren = internals.mc;
	    var patchChildren = internals.pc;
	    var patchBlockChildren = internals.pbc;
	    var internals_o = internals.o;
	    var insert = internals_o.insert;
	    var querySelector = internals_o.querySelector;
	    var createText = internals_o.createText;
	    var createComment = internals_o.createComment;
	    var disabled = isTeleportDisabled(n2.props);
	    var shapeFlag = n2.shapeFlag;
	    var children = n2.children;
	    var dynamicChildren = n2.dynamicChildren;
	    if (!!(process.env.NODE_ENV !== "production") && isHmrUpdating) {
	      optimized = false;
	      dynamicChildren = null;
	    }
	    if (n1 == null) {
	      var placeholder = n2.el = !!(process.env.NODE_ENV !== "production") ? createComment("teleport start") : createText("");
	      var mainAnchor = n2.anchor = !!(process.env.NODE_ENV !== "production") ? createComment("teleport end") : createText("");
	      insert(placeholder, container, anchor);
	      insert(mainAnchor, container, anchor);
	      var target = n2.target = resolveTarget(n2.props, querySelector);
	      var targetAnchor = n2.targetAnchor = createText("");
	      if (target) {
	        insert(targetAnchor, target);
	        isSVG = isSVG || isTargetSVG(target);
	      } else if (!!(process.env.NODE_ENV !== "production") && !disabled) {
	        warn("Invalid Teleport target on mount:", target, ("(" + (typeof target) + ")"));
	      }
	      var mount = function (container2, anchor2) {
	        if (shapeFlag & 16) {
	          mountChildren(
	            children,
	            container2,
	            anchor2,
	            parentComponent,
	            parentSuspense,
	            isSVG,
	            slotScopeIds,
	            optimized
	          );
	        }
	      };
	      if (disabled) {
	        mount(container, mainAnchor);
	      } else if (target) {
	        mount(target, targetAnchor);
	      }
	    } else {
	      n2.el = n1.el;
	      var mainAnchor$1 = n2.anchor = n1.anchor;
	      var target$1 = n2.target = n1.target;
	      var targetAnchor$1 = n2.targetAnchor = n1.targetAnchor;
	      var wasDisabled = isTeleportDisabled(n1.props);
	      var currentContainer = wasDisabled ? container : target$1;
	      var currentAnchor = wasDisabled ? mainAnchor$1 : targetAnchor$1;
	      isSVG = isSVG || isTargetSVG(target$1);
	      if (dynamicChildren) {
	        patchBlockChildren(
	          n1.dynamicChildren,
	          dynamicChildren,
	          currentContainer,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          slotScopeIds
	        );
	        traverseStaticChildren(n1, n2, true);
	      } else if (!optimized) {
	        patchChildren(
	          n1,
	          n2,
	          currentContainer,
	          currentAnchor,
	          parentComponent,
	          parentSuspense,
	          isSVG,
	          slotScopeIds,
	          false
	        );
	      }
	      if (disabled) {
	        if (!wasDisabled) {
	          moveTeleport(
	            n2,
	            container,
	            mainAnchor$1,
	            internals,
	            1
	          );
	        }
	      } else {
	        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
	          var nextTarget = n2.target = resolveTarget(
	            n2.props,
	            querySelector
	          );
	          if (nextTarget) {
	            moveTeleport(
	              n2,
	              nextTarget,
	              null,
	              internals,
	              0
	            );
	          } else if (!!(process.env.NODE_ENV !== "production")) {
	            warn(
	              "Invalid Teleport target on update:",
	              target$1,
	              ("(" + (typeof target$1) + ")")
	            );
	          }
	        } else if (wasDisabled) {
	          moveTeleport(
	            n2,
	            target$1,
	            targetAnchor$1,
	            internals,
	            1
	          );
	        }
	      }
	    }
	    updateCssVars(n2);
	  },
	  remove: function remove(vnode, parentComponent, parentSuspense, optimized, ref, doRemove) {
	    var unmount = ref.um;
	    var hostRemove = ref.o.remove;

	    var shapeFlag = vnode.shapeFlag;
	    var children = vnode.children;
	    var anchor = vnode.anchor;
	    var targetAnchor = vnode.targetAnchor;
	    var target = vnode.target;
	    var props = vnode.props;
	    if (target) {
	      hostRemove(targetAnchor);
	    }
	    if (doRemove || !isTeleportDisabled(props)) {
	      hostRemove(anchor);
	      if (shapeFlag & 16) {
	        for (var i = 0; i < children.length; i++) {
	          var child = children[i];
	          unmount(
	            child,
	            parentComponent,
	            parentSuspense,
	            true,
	            !!child.dynamicChildren
	          );
	        }
	      }
	    }
	  },
	  move: moveTeleport,
	  hydrate: hydrateTeleport
	};
	function moveTeleport(vnode, container, parentAnchor, ref, moveType) {
	  var insert = ref.o.insert;
	  var move = ref.m;
	  if ( moveType === void 0 ) moveType = 2;

	  if (moveType === 0) {
	    insert(vnode.targetAnchor, container, parentAnchor);
	  }
	  var el = vnode.el;
	  var anchor = vnode.anchor;
	  var shapeFlag = vnode.shapeFlag;
	  var children = vnode.children;
	  var props = vnode.props;
	  var isReorder = moveType === 2;
	  if (isReorder) {
	    insert(el, container, parentAnchor);
	  }
	  if (!isReorder || isTeleportDisabled(props)) {
	    if (shapeFlag & 16) {
	      for (var i = 0; i < children.length; i++) {
	        move(
	          children[i],
	          container,
	          parentAnchor,
	          2
	        );
	      }
	    }
	  }
	  if (isReorder) {
	    insert(anchor, container, parentAnchor);
	  }
	}
	function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, ref, hydrateChildren) {
	  var ref_o = ref.o;
	  var nextSibling = ref_o.nextSibling;
	  var parentNode = ref_o.parentNode;
	  var querySelector = ref_o.querySelector;

	  var target = vnode.target = resolveTarget(
	    vnode.props,
	    querySelector
	  );
	  if (target) {
	    var targetNode = target._lpa || target.firstChild;
	    if (vnode.shapeFlag & 16) {
	      if (isTeleportDisabled(vnode.props)) {
	        vnode.anchor = hydrateChildren(
	          nextSibling(node),
	          vnode,
	          parentNode(node),
	          parentComponent,
	          parentSuspense,
	          slotScopeIds,
	          optimized
	        );
	        vnode.targetAnchor = targetNode;
	      } else {
	        vnode.anchor = nextSibling(node);
	        var targetAnchor = targetNode;
	        while (targetAnchor) {
	          targetAnchor = nextSibling(targetAnchor);
	          if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
	            vnode.targetAnchor = targetAnchor;
	            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
	            break;
	          }
	        }
	        hydrateChildren(
	          targetNode,
	          vnode,
	          target,
	          parentComponent,
	          parentSuspense,
	          slotScopeIds,
	          optimized
	        );
	      }
	    }
	    updateCssVars(vnode);
	  }
	  return vnode.anchor && nextSibling(vnode.anchor);
	}
	var Teleport = TeleportImpl;
	function updateCssVars(vnode) {
	  var ctx = vnode.ctx;
	  if (ctx && ctx.ut) {
	    var node = vnode.children[0].el;
	    while (node !== vnode.targetAnchor) {
	      if (node.nodeType === 1)
	        { node.setAttribute("data-v-owner", ctx.uid); }
	      node = node.nextSibling;
	    }
	    ctx.ut();
	  }
	}

	var Fragment = Symbol.for("v-fgt");
	var Text = Symbol.for("v-txt");
	var Comment = Symbol.for("v-cmt");
	var Static = Symbol.for("v-stc");
	var blockStack = [];
	var currentBlock = null;
	function openBlock(disableTracking) {
	  if ( disableTracking === void 0 ) disableTracking = false;

	  blockStack.push(currentBlock = disableTracking ? null : []);
	}
	function closeBlock() {
	  blockStack.pop();
	  currentBlock = blockStack[blockStack.length - 1] || null;
	}
	var isBlockTreeEnabled = 1;
	function setBlockTracking(value) {
	  isBlockTreeEnabled += value;
	}
	function setupBlock(vnode) {
	  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
	  closeBlock();
	  if (isBlockTreeEnabled > 0 && currentBlock) {
	    currentBlock.push(vnode);
	  }
	  return vnode;
	}
	function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
	  return setupBlock(
	    createBaseVNode(
	      type,
	      props,
	      children,
	      patchFlag,
	      dynamicProps,
	      shapeFlag,
	      true
	      /* isBlock */
	    )
	  );
	}
	function createBlock(type, props, children, patchFlag, dynamicProps) {
	  return setupBlock(
	    createVNode(
	      type,
	      props,
	      children,
	      patchFlag,
	      dynamicProps,
	      true
	      /* isBlock: prevent a block from tracking itself */
	    )
	  );
	}
	function isVNode(value) {
	  return value ? value.__v_isVNode === true : false;
	}
	function isSameVNodeType(n1, n2) {
	  if (!!(process.env.NODE_ENV !== "production") && n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
	    n1.shapeFlag &= ~256;
	    n2.shapeFlag &= ~512;
	    return false;
	  }
	  return n1.type === n2.type && n1.key === n2.key;
	}
	var vnodeArgsTransformer;
	function transformVNodeArgs(transformer) {
	  vnodeArgsTransformer = transformer;
	}
	var createVNodeWithArgsTransform = function () {
	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];

	  return _createVNode.apply(
	    void 0, vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
	  );
	};
	var InternalObjectKey = "__vInternal";
	var normalizeKey = function (ref) {
	  var key = ref.key;

	  return key != null ? key : null;
	};
	var normalizeRef = function (ref$1) {
	  var ref = ref$1.ref;
	  var ref_key = ref$1.ref_key;
	  var ref_for = ref$1.ref_for;

	  if (typeof ref === "number") {
	    ref = "" + ref;
	  }
	  return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for } : ref : null;
	};
	function createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, needFullChildrenNormalization) {
	  if ( props === void 0 ) props = null;
	  if ( children === void 0 ) children = null;
	  if ( patchFlag === void 0 ) patchFlag = 0;
	  if ( dynamicProps === void 0 ) dynamicProps = null;
	  if ( shapeFlag === void 0 ) shapeFlag = type === Fragment ? 0 : 1;
	  if ( isBlockNode === void 0 ) isBlockNode = false;
	  if ( needFullChildrenNormalization === void 0 ) needFullChildrenNormalization = false;

	  var vnode = {
	    __v_isVNode: true,
	    __v_skip: true,
	    type: type,
	    props: props,
	    key: props && normalizeKey(props),
	    ref: props && normalizeRef(props),
	    scopeId: currentScopeId,
	    slotScopeIds: null,
	    children: children,
	    component: null,
	    suspense: null,
	    ssContent: null,
	    ssFallback: null,
	    dirs: null,
	    transition: null,
	    el: null,
	    anchor: null,
	    target: null,
	    targetAnchor: null,
	    staticCount: 0,
	    shapeFlag: shapeFlag,
	    patchFlag: patchFlag,
	    dynamicProps: dynamicProps,
	    dynamicChildren: null,
	    appContext: null,
	    ctx: currentRenderingInstance
	  };
	  if (needFullChildrenNormalization) {
	    normalizeChildren(vnode, children);
	    if (shapeFlag & 128) {
	      type.normalize(vnode);
	    }
	  } else if (children) {
	    vnode.shapeFlag |= isString(children) ? 8 : 16;
	  }
	  if (!!(process.env.NODE_ENV !== "production") && vnode.key !== vnode.key) {
	    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
	  }
	  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
	  !isBlockNode && // has current parent block
	  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
	  // component nodes also should always be patched, because even if the
	  // component doesn't need to update, it needs to persist the instance on to
	  // the next vnode so that it can be properly unmounted later.
	  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
	  // vnode should not be considered dynamic due to handler caching.
	  vnode.patchFlag !== 32) {
	    currentBlock.push(vnode);
	  }
	  return vnode;
	}
	var createVNode = !!(process.env.NODE_ENV !== "production") ? createVNodeWithArgsTransform : _createVNode;
	function _createVNode(type, props, children, patchFlag, dynamicProps, isBlockNode) {
	  if ( props === void 0 ) props = null;
	  if ( children === void 0 ) children = null;
	  if ( patchFlag === void 0 ) patchFlag = 0;
	  if ( dynamicProps === void 0 ) dynamicProps = null;
	  if ( isBlockNode === void 0 ) isBlockNode = false;

	  if (!type || type === NULL_DYNAMIC_COMPONENT) {
	    if (!!(process.env.NODE_ENV !== "production") && !type) {
	      warn(("Invalid vnode type when creating vnode: " + type + "."));
	    }
	    type = Comment;
	  }
	  if (isVNode(type)) {
	    var cloned = cloneVNode(
	      type,
	      props,
	      true
	      /* mergeRef: true */
	    );
	    if (children) {
	      normalizeChildren(cloned, children);
	    }
	    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
	      if (cloned.shapeFlag & 6) {
	        currentBlock[currentBlock.indexOf(type)] = cloned;
	      } else {
	        currentBlock.push(cloned);
	      }
	    }
	    cloned.patchFlag |= -2;
	    return cloned;
	  }
	  if (isClassComponent(type)) {
	    type = type.__vccOpts;
	  }
	  if (props) {
	    props = guardReactiveProps(props);
	    var klass = props.class;
	    var style = props.style;
	    if (klass && !isString(klass)) {
	      props.class = normalizeClass(klass);
	    }
	    if (isObject(style)) {
	      if (isProxy(style) && !isArray(style)) {
	        style = extend({}, style);
	      }
	      props.style = normalizeStyle(style);
	    }
	  }
	  var shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
	  if (!!(process.env.NODE_ENV !== "production") && shapeFlag & 4 && isProxy(type)) {
	    type = toRaw(type);
	    warn(
	      "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
	      "\nComponent that was made reactive: ",
	      type
	    );
	  }
	  return createBaseVNode(
	    type,
	    props,
	    children,
	    patchFlag,
	    dynamicProps,
	    shapeFlag,
	    isBlockNode,
	    true
	  );
	}
	function guardReactiveProps(props) {
	  if (!props)
	    { return null; }
	  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
	}
	function cloneVNode(vnode, extraProps, mergeRef) {
	  if ( mergeRef === void 0 ) mergeRef = false;

	  var props = vnode.props;
	  var ref = vnode.ref;
	  var patchFlag = vnode.patchFlag;
	  var children = vnode.children;
	  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
	  var cloned = {
	    __v_isVNode: true,
	    __v_skip: true,
	    type: vnode.type,
	    props: mergedProps,
	    key: mergedProps && normalizeKey(mergedProps),
	    ref: extraProps && extraProps.ref ? (
	      // #2078 in the case of <component :is="vnode" ref="extra"/>
	      // if the vnode itself already has a ref, cloneVNode will need to merge
	      // the refs so the single vnode can be set on multiple refs
	      mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps)
	    ) : ref,
	    scopeId: vnode.scopeId,
	    slotScopeIds: vnode.slotScopeIds,
	    children: !!(process.env.NODE_ENV !== "production") && patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
	    target: vnode.target,
	    targetAnchor: vnode.targetAnchor,
	    staticCount: vnode.staticCount,
	    shapeFlag: vnode.shapeFlag,
	    // if the vnode is cloned with extra props, we can no longer assume its
	    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
	    // note: preserve flag for fragments since they use the flag for children
	    // fast paths only.
	    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
	    dynamicProps: vnode.dynamicProps,
	    dynamicChildren: vnode.dynamicChildren,
	    appContext: vnode.appContext,
	    dirs: vnode.dirs,
	    transition: vnode.transition,
	    // These should technically only be non-null on mounted VNodes. However,
	    // they *should* be copied for kept-alive vnodes. So we just always copy
	    // them since them being non-null during a mount doesn't affect the logic as
	    // they will simply be overwritten.
	    component: vnode.component,
	    suspense: vnode.suspense,
	    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
	    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
	    el: vnode.el,
	    anchor: vnode.anchor,
	    ctx: vnode.ctx,
	    ce: vnode.ce
	  };
	  return cloned;
	}
	function deepCloneVNode(vnode) {
	  var cloned = cloneVNode(vnode);
	  if (isArray(vnode.children)) {
	    cloned.children = vnode.children.map(deepCloneVNode);
	  }
	  return cloned;
	}
	function createTextVNode(text, flag) {
	  if ( text === void 0 ) text = " ";
	  if ( flag === void 0 ) flag = 0;

	  return createVNode(Text, null, text, flag);
	}
	function createStaticVNode(content, numberOfNodes) {
	  var vnode = createVNode(Static, null, content);
	  vnode.staticCount = numberOfNodes;
	  return vnode;
	}
	function createCommentVNode(text, asBlock) {
	  if ( text === void 0 ) text = "";
	  if ( asBlock === void 0 ) asBlock = false;

	  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
	}
	function normalizeVNode(child) {
	  if (child == null || typeof child === "boolean") {
	    return createVNode(Comment);
	  } else if (isArray(child)) {
	    return createVNode(
	      Fragment,
	      null,
	      // #3666, avoid reference pollution when reusing vnode
	      child.slice()
	    );
	  } else if (typeof child === "object") {
	    return cloneIfMounted(child);
	  } else {
	    return createVNode(Text, null, String(child));
	  }
	}
	function cloneIfMounted(child) {
	  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
	}
	function normalizeChildren(vnode, children) {
	  var type = 0;
	  var shapeFlag = vnode.shapeFlag;
	  if (children == null) {
	    children = null;
	  } else if (isArray(children)) {
	    type = 16;
	  } else if (typeof children === "object") {
	    if (shapeFlag & (1 | 64)) {
	      var slot = children.default;
	      if (slot) {
	        slot._c && (slot._d = false);
	        normalizeChildren(vnode, slot());
	        slot._c && (slot._d = true);
	      }
	      return;
	    } else {
	      type = 32;
	      var slotFlag = children._;
	      if (!slotFlag && !(InternalObjectKey in children)) {
	        children._ctx = currentRenderingInstance;
	      } else if (slotFlag === 3 && currentRenderingInstance) {
	        if (currentRenderingInstance.slots._ === 1) {
	          children._ = 1;
	        } else {
	          children._ = 2;
	          vnode.patchFlag |= 1024;
	        }
	      }
	    }
	  } else if (isFunction(children)) {
	    children = { default: children, _ctx: currentRenderingInstance };
	    type = 32;
	  } else {
	    children = String(children);
	    if (shapeFlag & 64) {
	      type = 16;
	      children = [createTextVNode(children)];
	    } else {
	      type = 8;
	    }
	  }
	  vnode.children = children;
	  vnode.shapeFlag |= type;
	}
	function mergeProps() {
	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];

	  var ret = {};
	  for (var i = 0; i < args.length; i++) {
	    var toMerge = args[i];
	    for (var key in toMerge) {
	      if (key === "class") {
	        if (ret.class !== toMerge.class) {
	          ret.class = normalizeClass([ret.class, toMerge.class]);
	        }
	      } else if (key === "style") {
	        ret.style = normalizeStyle([ret.style, toMerge.style]);
	      } else if (isOn(key)) {
	        var existing = ret[key];
	        var incoming = toMerge[key];
	        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
	          ret[key] = existing ? [].concat(existing, incoming) : incoming;
	        }
	      } else if (key !== "") {
	        ret[key] = toMerge[key];
	      }
	    }
	  }
	  return ret;
	}
	function invokeVNodeHook(hook, instance, vnode, prevVNode) {
	  if ( prevVNode === void 0 ) prevVNode = null;

	  callWithAsyncErrorHandling(hook, instance, 7, [
	    vnode,
	    prevVNode
	  ]);
	}

	var emptyAppContext = createAppContext();
	var uid = 0;
	function createComponentInstance(vnode, parent, suspense) {
	  var type = vnode.type;
	  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
	  var instance = {
	    uid: uid++,
	    vnode: vnode,
	    type: type,
	    parent: parent,
	    appContext: appContext,
	    root: null,
	    // to be immediately set
	    next: null,
	    subTree: null,
	    // will be set synchronously right after creation
	    effect: null,
	    update: null,
	    // will be set synchronously right after creation
	    scope: new EffectScope(
	      true
	      /* detached */
	    ),
	    render: null,
	    proxy: null,
	    exposed: null,
	    exposeProxy: null,
	    withProxy: null,
	    provides: parent ? parent.provides : Object.create(appContext.provides),
	    accessCache: null,
	    renderCache: [],
	    // local resolved assets
	    components: null,
	    directives: null,
	    // resolved props and emits options
	    propsOptions: normalizePropsOptions(type, appContext),
	    emitsOptions: normalizeEmitsOptions(type, appContext),
	    // emit
	    emit: null,
	    // to be set immediately
	    emitted: null,
	    // props default value
	    propsDefaults: EMPTY_OBJ,
	    // inheritAttrs
	    inheritAttrs: type.inheritAttrs,
	    // state
	    ctx: EMPTY_OBJ,
	    data: EMPTY_OBJ,
	    props: EMPTY_OBJ,
	    attrs: EMPTY_OBJ,
	    slots: EMPTY_OBJ,
	    refs: EMPTY_OBJ,
	    setupState: EMPTY_OBJ,
	    setupContext: null,
	    attrsProxy: null,
	    slotsProxy: null,
	    // suspense related
	    suspense: suspense,
	    suspenseId: suspense ? suspense.pendingId : 0,
	    asyncDep: null,
	    asyncResolved: false,
	    // lifecycle hooks
	    // not using enums here because it results in computed properties
	    isMounted: false,
	    isUnmounted: false,
	    isDeactivated: false,
	    bc: null,
	    c: null,
	    bm: null,
	    m: null,
	    bu: null,
	    u: null,
	    um: null,
	    bum: null,
	    da: null,
	    a: null,
	    rtg: null,
	    rtc: null,
	    ec: null,
	    sp: null
	  };
	  if (!!(process.env.NODE_ENV !== "production")) {
	    instance.ctx = createDevRenderContext(instance);
	  } else {
	    instance.ctx = { _: instance };
	  }
	  instance.root = parent ? parent.root : instance;
	  instance.emit = emit.bind(null, instance);
	  if (vnode.ce) {
	    vnode.ce(instance);
	  }
	  return instance;
	}
	var currentInstance = null;
	var getCurrentInstance = function () { return currentInstance || currentRenderingInstance; };
	var internalSetCurrentInstance;
	var globalCurrentInstanceSetters;
	var settersKey = "__VUE_INSTANCE_SETTERS__";
	{
	  if (!(globalCurrentInstanceSetters = getGlobalThis()[settersKey])) {
	    globalCurrentInstanceSetters = getGlobalThis()[settersKey] = [];
	  }
	  globalCurrentInstanceSetters.push(function (i) { return currentInstance = i; });
	  internalSetCurrentInstance = function (instance) {
	    if (globalCurrentInstanceSetters.length > 1) {
	      globalCurrentInstanceSetters.forEach(function (s) { return s(instance); });
	    } else {
	      globalCurrentInstanceSetters[0](instance);
	    }
	  };
	}
	var setCurrentInstance = function (instance) {
	  internalSetCurrentInstance(instance);
	  instance.scope.on();
	};
	var unsetCurrentInstance = function () {
	  currentInstance && currentInstance.scope.off();
	  internalSetCurrentInstance(null);
	};
	var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
	function validateComponentName(name, config) {
	  var appIsNativeTag = config.isNativeTag || NO;
	  if (isBuiltInTag(name) || appIsNativeTag(name)) {
	    warn(
	      "Do not use built-in or reserved HTML elements as component id: " + name
	    );
	  }
	}
	function isStatefulComponent(instance) {
	  return instance.vnode.shapeFlag & 4;
	}
	var isInSSRComponentSetup = false;
	function setupComponent(instance, isSSR) {
	  if ( isSSR === void 0 ) isSSR = false;

	  isInSSRComponentSetup = isSSR;
	  var ref = instance.vnode;
	  var props = ref.props;
	  var children = ref.children;
	  var isStateful = isStatefulComponent(instance);
	  initProps(instance, props, isStateful, isSSR);
	  initSlots(instance, children);
	  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
	  isInSSRComponentSetup = false;
	  return setupResult;
	}
	function setupStatefulComponent(instance, isSSR) {
	  var _a;
	  var Component = instance.type;
	  if (!!(process.env.NODE_ENV !== "production")) {
	    if (Component.name) {
	      validateComponentName(Component.name, instance.appContext.config);
	    }
	    if (Component.components) {
	      var names = Object.keys(Component.components);
	      for (var i = 0; i < names.length; i++) {
	        validateComponentName(names[i], instance.appContext.config);
	      }
	    }
	    if (Component.directives) {
	      var names$1 = Object.keys(Component.directives);
	      for (var i$1 = 0; i$1 < names$1.length; i$1++) {
	        validateDirectiveName(names$1[i$1]);
	      }
	    }
	    if (Component.compilerOptions && isRuntimeOnly()) {
	      warn(
	        "\"compilerOptions\" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead."
	      );
	    }
	  }
	  instance.accessCache = /* @__PURE__ */ Object.create(null);
	  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
	  if (!!(process.env.NODE_ENV !== "production")) {
	    exposePropsOnRenderContext(instance);
	  }
	  var setup = Component.setup;
	  if (setup) {
	    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
	    setCurrentInstance(instance);
	    pauseTracking();
	    var setupResult = callWithErrorHandling(
	      setup,
	      instance,
	      0,
	      [!!(process.env.NODE_ENV !== "production") ? shallowReadonly(instance.props) : instance.props, setupContext]
	    );
	    resetTracking();
	    unsetCurrentInstance();
	    if (isPromise(setupResult)) {
	      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
	      if (isSSR) {
	        return setupResult.then(function (resolvedResult) {
	          handleSetupResult(instance, resolvedResult, isSSR);
	        }).catch(function (e) {
	          handleError(e, instance, 0);
	        });
	      } else {
	        instance.asyncDep = setupResult;
	        if (!!(process.env.NODE_ENV !== "production") && !instance.suspense) {
	          var name = (_a = Component.name) != null ? _a : "Anonymous";
	          warn(
	            ("Component <" + name + ">: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.")
	          );
	        }
	      }
	    } else {
	      handleSetupResult(instance, setupResult, isSSR);
	    }
	  } else {
	    finishComponentSetup(instance, isSSR);
	  }
	}
	function handleSetupResult(instance, setupResult, isSSR) {
	  if (isFunction(setupResult)) {
	    if (instance.type.__ssrInlineRender) {
	      instance.ssrRender = setupResult;
	    } else {
	      instance.render = setupResult;
	    }
	  } else if (isObject(setupResult)) {
	    if (!!(process.env.NODE_ENV !== "production") && isVNode(setupResult)) {
	      warn(
	        "setup() should not return VNodes directly - return a render function instead."
	      );
	    }
	    if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
	      instance.devtoolsRawSetupState = setupResult;
	    }
	    instance.setupState = proxyRefs(setupResult);
	    if (!!(process.env.NODE_ENV !== "production")) {
	      exposeSetupStateOnRenderContext(instance);
	    }
	  } else if (!!(process.env.NODE_ENV !== "production") && setupResult !== void 0) {
	    warn(
	      ("setup() should return an object. Received: " + (setupResult === null ? "null" : typeof setupResult))
	    );
	  }
	  finishComponentSetup(instance, isSSR);
	}
	var compile;
	var installWithProxy;
	function registerRuntimeCompiler(_compile) {
	  compile = _compile;
	  installWithProxy = function (i) {
	    if (i.render._rc) {
	      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
	    }
	  };
	}
	var isRuntimeOnly = function () { return !compile; };
	function finishComponentSetup(instance, isSSR, skipOptions) {
	  var Component = instance.type;
	  if (!instance.render) {
	    if (!isSSR && compile && !Component.render) {
	      var template = Component.template || resolveMergedOptions(instance).template;
	      if (template) {
	        if (!!(process.env.NODE_ENV !== "production")) {
	          startMeasure(instance, "compile");
	        }
	        var ref = instance.appContext.config;
	        var isCustomElement = ref.isCustomElement;
	        var compilerOptions = ref.compilerOptions;
	        var delimiters = Component.delimiters;
	        var componentCompilerOptions = Component.compilerOptions;
	        var finalCompilerOptions = extend(
	          extend(
	            {
	              isCustomElement: isCustomElement,
	              delimiters: delimiters
	            },
	            compilerOptions
	          ),
	          componentCompilerOptions
	        );
	        Component.render = compile(template, finalCompilerOptions);
	        if (!!(process.env.NODE_ENV !== "production")) {
	          endMeasure(instance, "compile");
	        }
	      }
	    }
	    instance.render = Component.render || NOOP;
	    if (installWithProxy) {
	      installWithProxy(instance);
	    }
	  }
	  if (__VUE_OPTIONS_API__ && true) {
	    setCurrentInstance(instance);
	    pauseTracking();
	    applyOptions(instance);
	    resetTracking();
	    unsetCurrentInstance();
	  }
	  if (!!(process.env.NODE_ENV !== "production") && !Component.render && instance.render === NOOP && !isSSR) {
	    if (!compile && Component.template) {
	      warn(
	        "Component provided template option but runtime compilation is not supported in this build of Vue." + (" Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"." )
	        /* should not happen */
	      );
	    } else {
	      warn("Component is missing template or render function.");
	    }
	  }
	}
	function getAttrsProxy(instance) {
	  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
	    instance.attrs,
	    !!(process.env.NODE_ENV !== "production") ? {
	      get: function get(target, key) {
	        markAttrsAccessed();
	        track(instance, "get", "$attrs");
	        return target[key];
	      },
	      set: function set() {
	        warn("setupContext.attrs is readonly.");
	        return false;
	      },
	      deleteProperty: function deleteProperty() {
	        warn("setupContext.attrs is readonly.");
	        return false;
	      }
	    } : {
	      get: function get(target, key) {
	        track(instance, "get", "$attrs");
	        return target[key];
	      }
	    }
	  ));
	}
	function getSlotsProxy(instance) {
	  return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
	    get: function get(target, key) {
	      track(instance, "get", "$slots");
	      return target[key];
	    }
	  }));
	}
	function createSetupContext(instance) {
	  var expose = function (exposed) {
	    if (!!(process.env.NODE_ENV !== "production")) {
	      if (instance.exposed) {
	        warn("expose() should be called only once per setup().");
	      }
	      if (exposed != null) {
	        var exposedType = typeof exposed;
	        if (exposedType === "object") {
	          if (isArray(exposed)) {
	            exposedType = "array";
	          } else if (isRef(exposed)) {
	            exposedType = "ref";
	          }
	        }
	        if (exposedType !== "object") {
	          warn(
	            ("expose() should be passed a plain object, received " + exposedType + ".")
	          );
	        }
	      }
	    }
	    instance.exposed = exposed || {};
	  };
	  if (!!(process.env.NODE_ENV !== "production")) {
	    return Object.freeze({
	      get attrs() {
	        return getAttrsProxy(instance);
	      },
	      get slots() {
	        return getSlotsProxy(instance);
	      },
	      get emit() {
	        return function (event) {
	          var args = [], len = arguments.length - 1;
	          while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	          return instance.emit.apply(instance, [ event ].concat( args ));
	        };
	      },
	      expose: expose
	    });
	  } else {
	    return {
	      get attrs() {
	        return getAttrsProxy(instance);
	      },
	      slots: instance.slots,
	      emit: instance.emit,
	      expose: expose
	    };
	  }
	}
	function getExposeProxy(instance) {
	  if (instance.exposed) {
	    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
	      get: function get(target, key) {
	        if (key in target) {
	          return target[key];
	        } else if (key in publicPropertiesMap) {
	          return publicPropertiesMap[key](instance);
	        }
	      },
	      has: function has(target, key) {
	        return key in target || key in publicPropertiesMap;
	      }
	    }));
	  }
	}
	var classifyRE = /(?:^|[-_])(\w)/g;
	var classify = function (str) { return str.replace(classifyRE, function (c) { return c.toUpperCase(); }).replace(/[-_]/g, ""); };
	function getComponentName(Component, includeInferred) {
	  if ( includeInferred === void 0 ) includeInferred = true;

	  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
	}
	function formatComponentName(instance, Component, isRoot) {
	  if ( isRoot === void 0 ) isRoot = false;

	  var name = getComponentName(Component);
	  if (!name && Component.__file) {
	    var match = Component.__file.match(/([^/\\]+)\.\w+$/);
	    if (match) {
	      name = match[1];
	    }
	  }
	  if (!name && instance && instance.parent) {
	    var inferFromRegistry = function (registry) {
	      for (var key in registry) {
	        if (registry[key] === Component) {
	          return key;
	        }
	      }
	    };
	    name = inferFromRegistry(
	      instance.components || instance.parent.type.components
	    ) || inferFromRegistry(instance.appContext.components);
	  }
	  return name ? classify(name) : isRoot ? "App" : "Anonymous";
	}
	function isClassComponent(value) {
	  return isFunction(value) && "__vccOpts" in value;
	}

	var computed = function (getterOrOptions, debugOptions) {
	  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
	};

	function h(type, propsOrChildren, children) {
	  var l = arguments.length;
	  if (l === 2) {
	    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
	      if (isVNode(propsOrChildren)) {
	        return createVNode(type, null, [propsOrChildren]);
	      }
	      return createVNode(type, propsOrChildren);
	    } else {
	      return createVNode(type, null, propsOrChildren);
	    }
	  } else {
	    if (l > 3) {
	      children = Array.prototype.slice.call(arguments, 2);
	    } else if (l === 3 && isVNode(children)) {
	      children = [children];
	    }
	    return createVNode(type, propsOrChildren, children);
	  }
	}

	var ssrContextKey = Symbol.for("v-scx");
	var useSSRContext = function () {
	  {
	    var ctx = inject(ssrContextKey);
	    if (!ctx) {
	      !!(process.env.NODE_ENV !== "production") && warn(
	        "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
	      );
	    }
	    return ctx;
	  }
	};

	function isShallow(value) {
	  return !!(value && value["__v_isShallow"]);
	}

	function initCustomFormatter() {
	  if (!!!(process.env.NODE_ENV !== "production") || typeof window === "undefined") {
	    return;
	  }
	  var vueStyle = { style: "color:#3ba776" };
	  var numberStyle = { style: "color:#0b1bc9" };
	  var stringStyle = { style: "color:#b62e24" };
	  var keywordStyle = { style: "color:#9d288c" };
	  var formatter = {
	    header: function header(obj) {
	      if (!isObject(obj)) {
	        return null;
	      }
	      if (obj.__isVue) {
	        return ["div", vueStyle, "VueInstance"];
	      } else if (isRef(obj)) {
	        return [
	          "div",
	          {},
	          ["span", vueStyle, genRefFlag(obj)],
	          "<",
	          formatValue(obj.value),
	          ">"
	        ];
	      } else if (isReactive(obj)) {
	        return [
	          "div",
	          {},
	          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
	          "<",
	          formatValue(obj),
	          (">" + (isReadonly(obj) ? " (readonly)" : ""))
	        ];
	      } else if (isReadonly(obj)) {
	        return [
	          "div",
	          {},
	          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
	          "<",
	          formatValue(obj),
	          ">"
	        ];
	      }
	      return null;
	    },
	    hasBody: function hasBody(obj) {
	      return obj && obj.__isVue;
	    },
	    body: function body(obj) {
	      if (obj && obj.__isVue) {
	        return [
	          "div",
	          {} ].concat( formatInstance(obj.$)
	        );
	      }
	    }
	  };
	  function formatInstance(instance) {
	    var blocks = [];
	    if (instance.type.props && instance.props) {
	      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
	    }
	    if (instance.setupState !== EMPTY_OBJ) {
	      blocks.push(createInstanceBlock("setup", instance.setupState));
	    }
	    if (instance.data !== EMPTY_OBJ) {
	      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
	    }
	    var computed = extractKeys(instance, "computed");
	    if (computed) {
	      blocks.push(createInstanceBlock("computed", computed));
	    }
	    var injected = extractKeys(instance, "inject");
	    if (injected) {
	      blocks.push(createInstanceBlock("injected", injected));
	    }
	    blocks.push([
	      "div",
	      {},
	      [
	        "span",
	        {
	          style: keywordStyle.style + ";opacity:0.66"
	        },
	        "$ (internal): "
	      ],
	      ["object", { object: instance }]
	    ]);
	    return blocks;
	  }
	  function createInstanceBlock(type, target) {
	    target = extend({}, target);
	    if (!Object.keys(target).length) {
	      return ["span", {}];
	    }
	    return [
	      "div",
	      { style: "line-height:1.25em;margin-bottom:0.6em" },
	      [
	        "div",
	        {
	          style: "color:#476582"
	        },
	        type
	      ],
	      [
	        "div",
	        {
	          style: "padding-left:1.25em"
	        } ].concat( Object.keys(target).map(function (key) {
	          return [
	            "div",
	            {},
	            ["span", keywordStyle, key + ": "],
	            formatValue(target[key], false)
	          ];
	        })
	      )
	    ];
	  }
	  function formatValue(v, asRaw) {
	    if ( asRaw === void 0 ) asRaw = true;

	    if (typeof v === "number") {
	      return ["span", numberStyle, v];
	    } else if (typeof v === "string") {
	      return ["span", stringStyle, JSON.stringify(v)];
	    } else if (typeof v === "boolean") {
	      return ["span", keywordStyle, v];
	    } else if (isObject(v)) {
	      return ["object", { object: asRaw ? toRaw(v) : v }];
	    } else {
	      return ["span", stringStyle, String(v)];
	    }
	  }
	  function extractKeys(instance, type) {
	    var Comp = instance.type;
	    if (isFunction(Comp)) {
	      return;
	    }
	    var extracted = {};
	    for (var key in instance.ctx) {
	      if (isKeyOfType(Comp, key, type)) {
	        extracted[key] = instance.ctx[key];
	      }
	    }
	    return extracted;
	  }
	  function isKeyOfType(Comp, key, type) {
	    var opts = Comp[type];
	    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
	      return true;
	    }
	    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
	      return true;
	    }
	    if (Comp.mixins && Comp.mixins.some(function (m) { return isKeyOfType(m, key, type); })) {
	      return true;
	    }
	  }
	  function genRefFlag(v) {
	    if (isShallow(v)) {
	      return "ShallowRef";
	    }
	    if (v.effect) {
	      return "ComputedRef";
	    }
	    return "Ref";
	  }
	  if (window.devtoolsFormatters) {
	    window.devtoolsFormatters.push(formatter);
	  } else {
	    window.devtoolsFormatters = [formatter];
	  }
	}

	function withMemo(memo, render, cache, index) {
	  var cached = cache[index];
	  if (cached && isMemoSame(cached, memo)) {
	    return cached;
	  }
	  var ret = render();
	  ret.memo = memo.slice();
	  return cache[index] = ret;
	}
	function isMemoSame(cached, memo) {
	  var prev = cached.memo;
	  if (prev.length != memo.length) {
	    return false;
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (hasChanged(prev[i], memo[i])) {
	      return false;
	    }
	  }
	  if (isBlockTreeEnabled > 0 && currentBlock) {
	    currentBlock.push(cached);
	  }
	  return true;
	}

	var version = "3.3.4";
	var _ssrUtils = {
	  createComponentInstance: createComponentInstance,
	  setupComponent: setupComponent,
	  renderComponentRoot: renderComponentRoot,
	  setCurrentRenderingInstance: setCurrentRenderingInstance,
	  isVNode: isVNode,
	  normalizeVNode: normalizeVNode
	};
	var ssrUtils = _ssrUtils ;
	var resolveFilter = null;
	var compatUtils = null;

	var svgNS = "http://www.w3.org/2000/svg";
	var doc = typeof document !== "undefined" ? document : null;
	var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
	var nodeOps = {
	  insert: function (child, parent, anchor) {
	    parent.insertBefore(child, anchor || null);
	  },
	  remove: function (child) {
	    var parent = child.parentNode;
	    if (parent) {
	      parent.removeChild(child);
	    }
	  },
	  createElement: function (tag, isSVG, is, props) {
	    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is: is } : void 0);
	    if (tag === "select" && props && props.multiple != null) {
	      el.setAttribute("multiple", props.multiple);
	    }
	    return el;
	  },
	  createText: function (text) { return doc.createTextNode(text); },
	  createComment: function (text) { return doc.createComment(text); },
	  setText: function (node, text) {
	    node.nodeValue = text;
	  },
	  setElementText: function (el, text) {
	    el.textContent = text;
	  },
	  parentNode: function (node) { return node.parentNode; },
	  nextSibling: function (node) { return node.nextSibling; },
	  querySelector: function (selector) { return doc.querySelector(selector); },
	  setScopeId: function setScopeId(el, id) {
	    el.setAttribute(id, "");
	  },
	  // __UNSAFE__
	  // Reason: innerHTML.
	  // Static content here can only come from compiled templates.
	  // As long as the user only uses trusted templates, this is safe.
	  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG, start, end) {
	    var before = anchor ? anchor.previousSibling : parent.lastChild;
	    if (start && (start === end || start.nextSibling)) {
	      while (true) {
	        parent.insertBefore(start.cloneNode(true), anchor);
	        if (start === end || !(start = start.nextSibling))
	          { break; }
	      }
	    } else {
	      templateContainer.innerHTML = isSVG ? ("<svg>" + content + "</svg>") : content;
	      var template = templateContainer.content;
	      if (isSVG) {
	        var wrapper = template.firstChild;
	        while (wrapper.firstChild) {
	          template.appendChild(wrapper.firstChild);
	        }
	        template.removeChild(wrapper);
	      }
	      parent.insertBefore(template, anchor);
	    }
	    return [
	      // first
	      before ? before.nextSibling : parent.firstChild,
	      // last
	      anchor ? anchor.previousSibling : parent.lastChild
	    ];
	  }
	};

	function patchClass(el, value, isSVG) {
	  var transitionClasses = el._vtc;
	  if (transitionClasses) {
	    value = (value ? [value ].concat( transitionClasses) : [].concat( transitionClasses )).join(" ");
	  }
	  if (value == null) {
	    el.removeAttribute("class");
	  } else if (isSVG) {
	    el.setAttribute("class", value);
	  } else {
	    el.className = value;
	  }
	}

	function patchStyle(el, prev, next) {
	  var style = el.style;
	  var isCssString = isString(next);
	  if (next && !isCssString) {
	    if (prev && !isString(prev)) {
	      for (var key in prev) {
	        if (next[key] == null) {
	          setStyle(style, key, "");
	        }
	      }
	    }
	    for (var key$1 in next) {
	      setStyle(style, key$1, next[key$1]);
	    }
	  } else {
	    var currentDisplay = style.display;
	    if (isCssString) {
	      if (prev !== next) {
	        style.cssText = next;
	      }
	    } else if (prev) {
	      el.removeAttribute("style");
	    }
	    if ("_vod" in el) {
	      style.display = currentDisplay;
	    }
	  }
	}
	var semicolonRE = /[^\\];\s*$/;
	var importantRE = /\s*!important$/;
	function setStyle(style, name, val) {
	  if (isArray(val)) {
	    val.forEach(function (v) { return setStyle(style, name, v); });
	  } else {
	    if (val == null)
	      { val = ""; }
	    if (!!(process.env.NODE_ENV !== "production")) {
	      if (semicolonRE.test(val)) {
	        warn(
	          ("Unexpected semicolon at the end of '" + name + "' style value: '" + val + "'")
	        );
	      }
	    }
	    if (name.startsWith("--")) {
	      style.setProperty(name, val);
	    } else {
	      var prefixed = autoPrefix(style, name);
	      if (importantRE.test(val)) {
	        style.setProperty(
	          hyphenate(prefixed),
	          val.replace(importantRE, ""),
	          "important"
	        );
	      } else {
	        style[prefixed] = val;
	      }
	    }
	  }
	}
	var prefixes = ["Webkit", "Moz", "ms"];
	var prefixCache = {};
	function autoPrefix(style, rawName) {
	  var cached = prefixCache[rawName];
	  if (cached) {
	    return cached;
	  }
	  var name = camelize(rawName);
	  if (name !== "filter" && name in style) {
	    return prefixCache[rawName] = name;
	  }
	  name = capitalize(name);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + name;
	    if (prefixed in style) {
	      return prefixCache[rawName] = prefixed;
	    }
	  }
	  return rawName;
	}

	var xlinkNS = "http://www.w3.org/1999/xlink";
	function patchAttr(el, key, value, isSVG, instance) {
	  if (isSVG && key.startsWith("xlink:")) {
	    if (value == null) {
	      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    var isBoolean = isSpecialBooleanAttr(key);
	    if (value == null || isBoolean && !includeBooleanAttr(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, isBoolean ? "" : value);
	    }
	  }
	}

	function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
	  if (key === "innerHTML" || key === "textContent") {
	    if (prevChildren) {
	      unmountChildren(prevChildren, parentComponent, parentSuspense);
	    }
	    el[key] = value == null ? "" : value;
	    return;
	  }
	  var tag = el.tagName;
	  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
	  !tag.includes("-")) {
	    el._value = value;
	    var oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
	    var newValue = value == null ? "" : value;
	    if (oldValue !== newValue) {
	      el.value = newValue;
	    }
	    if (value == null) {
	      el.removeAttribute(key);
	    }
	    return;
	  }
	  var needRemove = false;
	  if (value === "" || value == null) {
	    var type = typeof el[key];
	    if (type === "boolean") {
	      value = includeBooleanAttr(value);
	    } else if (value == null && type === "string") {
	      value = "";
	      needRemove = true;
	    } else if (type === "number") {
	      value = 0;
	      needRemove = true;
	    }
	  }
	  try {
	    el[key] = value;
	  } catch (e) {
	    if (!!(process.env.NODE_ENV !== "production") && !needRemove) {
	      warn(
	        ("Failed setting prop \"" + key + "\" on <" + (tag.toLowerCase()) + ">: value " + value + " is invalid."),
	        e
	      );
	    }
	  }
	  needRemove && el.removeAttribute(key);
	}

	function addEventListener(el, event, handler, options) {
	  el.addEventListener(event, handler, options);
	}
	function removeEventListener(el, event, handler, options) {
	  el.removeEventListener(event, handler, options);
	}
	function patchEvent(el, rawName, prevValue, nextValue, instance) {
	  if ( instance === void 0 ) instance = null;

	  var invokers = el._vei || (el._vei = {});
	  var existingInvoker = invokers[rawName];
	  if (nextValue && existingInvoker) {
	    existingInvoker.value = nextValue;
	  } else {
	    var ref = parseName(rawName);
	    var name = ref[0];
	    var options = ref[1];
	    if (nextValue) {
	      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
	      addEventListener(el, name, invoker, options);
	    } else if (existingInvoker) {
	      removeEventListener(el, name, existingInvoker, options);
	      invokers[rawName] = void 0;
	    }
	  }
	}
	var optionsModifierRE = /(?:Once|Passive|Capture)$/;
	function parseName(name) {
	  var options;
	  if (optionsModifierRE.test(name)) {
	    options = {};
	    var m;
	    while (m = name.match(optionsModifierRE)) {
	      name = name.slice(0, name.length - m[0].length);
	      options[m[0].toLowerCase()] = true;
	    }
	  }
	  var event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
	  return [event, options];
	}
	var cachedNow = 0;
	var p = /* @__PURE__ */ Promise.resolve();
	var getNow = function () { return cachedNow || (p.then(function () { return cachedNow = 0; }), cachedNow = Date.now()); };
	function createInvoker(initialValue, instance) {
	  var invoker = function (e) {
	    if (!e._vts) {
	      e._vts = Date.now();
	    } else if (e._vts <= invoker.attached) {
	      return;
	    }
	    callWithAsyncErrorHandling(
	      patchStopImmediatePropagation(e, invoker.value),
	      instance,
	      5,
	      [e]
	    );
	  };
	  invoker.value = initialValue;
	  invoker.attached = getNow();
	  return invoker;
	}
	function patchStopImmediatePropagation(e, value) {
	  if (isArray(value)) {
	    var originalStop = e.stopImmediatePropagation;
	    e.stopImmediatePropagation = function () {
	      originalStop.call(e);
	      e._stopped = true;
	    };
	    return value.map(function (fn) { return function (e2) { return !e2._stopped && fn && fn(e2); }; });
	  } else {
	    return value;
	  }
	}

	var nativeOnRE = /^on[a-z]/;
	var patchProp = function (el, key, prevValue, nextValue, isSVG, prevChildren, parentComponent, parentSuspense, unmountChildren) {
	  if ( isSVG === void 0 ) isSVG = false;

	  if (key === "class") {
	    patchClass(el, nextValue, isSVG);
	  } else if (key === "style") {
	    patchStyle(el, prevValue, nextValue);
	  } else if (isOn(key)) {
	    if (!isModelListener(key)) {
	      patchEvent(el, key, prevValue, nextValue, parentComponent);
	    }
	  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
	    patchDOMProp(
	      el,
	      key,
	      nextValue,
	      prevChildren,
	      parentComponent,
	      parentSuspense,
	      unmountChildren
	    );
	  } else {
	    if (key === "true-value") {
	      el._trueValue = nextValue;
	    } else if (key === "false-value") {
	      el._falseValue = nextValue;
	    }
	    patchAttr(el, key, nextValue, isSVG);
	  }
	};
	function shouldSetAsProp(el, key, value, isSVG) {
	  if (isSVG) {
	    if (key === "innerHTML" || key === "textContent") {
	      return true;
	    }
	    if (key in el && nativeOnRE.test(key) && isFunction(value)) {
	      return true;
	    }
	    return false;
	  }
	  if (key === "spellcheck" || key === "draggable" || key === "translate") {
	    return false;
	  }
	  if (key === "form") {
	    return false;
	  }
	  if (key === "list" && el.tagName === "INPUT") {
	    return false;
	  }
	  if (key === "type" && el.tagName === "TEXTAREA") {
	    return false;
	  }
	  if (nativeOnRE.test(key) && isString(value)) {
	    return false;
	  }
	  return key in el;
	}

	function defineCustomElement(options, hydrate2) {
	  var Comp = defineComponent(options);
	  var VueCustomElement = /*@__PURE__*/(function (VueElement) {
	    function VueCustomElement(initialProps) {
	      VueElement.call(this, Comp, initialProps, hydrate2);
	    }

	    if ( VueElement ) VueCustomElement.__proto__ = VueElement;
	    VueCustomElement.prototype = Object.create( VueElement && VueElement.prototype );
	    VueCustomElement.prototype.constructor = VueCustomElement;

	    return VueCustomElement;
	  }(VueElement));
	  VueCustomElement.def = Comp;
	  return VueCustomElement;
	}
	var defineSSRCustomElement = function (options) {
	  return defineCustomElement(options, hydrate);
	};
	var BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : /*@__PURE__*/(function () {
	  function anonymous () {}

	  return anonymous;
	}());
	var VueElement = /*@__PURE__*/(function (BaseClass) {
	  function VueElement(_def, _props, hydrate2) {
	    if ( _props === void 0 ) _props = {};

	    BaseClass.call(this);
	    this._def = _def;
	    this._props = _props;
	    /**
	     * @internal
	     */
	    this._instance = null;
	    this._connected = false;
	    this._resolved = false;
	    this._numberProps = null;
	    if (this.shadowRoot && hydrate2) {
	      hydrate2(this._createVNode(), this.shadowRoot);
	    } else {
	      if (!!(process.env.NODE_ENV !== "production") && this.shadowRoot) {
	        warn(
	          "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
	        );
	      }
	      this.attachShadow({ mode: "open" });
	      if (!this._def.__asyncLoader) {
	        this._resolveProps(this._def);
	      }
	    }
	  }

	  if ( BaseClass ) VueElement.__proto__ = BaseClass;
	  VueElement.prototype = Object.create( BaseClass && BaseClass.prototype );
	  VueElement.prototype.constructor = VueElement;
	  VueElement.prototype.connectedCallback = function connectedCallback () {
	    this._connected = true;
	    if (!this._instance) {
	      if (this._resolved) {
	        this._update();
	      } else {
	        this._resolveDef();
	      }
	    }
	  };
	  VueElement.prototype.disconnectedCallback = function disconnectedCallback () {
	    var this$1$1 = this;

	    this._connected = false;
	    nextTick(function () {
	      if (!this$1$1._connected) {
	        render(null, this$1$1.shadowRoot);
	        this$1$1._instance = null;
	      }
	    });
	  };
	  /**
	   * resolve inner component definition (handle possible async component)
	   */
	  VueElement.prototype._resolveDef = function _resolveDef () {
	    var this$1$1 = this;

	    this._resolved = true;
	    for (var i = 0; i < this.attributes.length; i++) {
	      this._setAttr(this.attributes[i].name);
	    }
	    new MutationObserver(function (mutations) {
	      for (var m of mutations) {
	        this$1$1._setAttr(m.attributeName);
	      }
	    }).observe(this, { attributes: true });
	    var resolve = function (def, isAsync) {
	      if ( isAsync === void 0 ) isAsync = false;

	      var props = def.props;
	      var styles = def.styles;
	      var numberProps;
	      if (props && !isArray(props)) {
	        for (var key in props) {
	          var opt = props[key];
	          if (opt === Number || opt && opt.type === Number) {
	            if (key in this$1$1._props) {
	              this$1$1._props[key] = toNumber(this$1$1._props[key]);
	            }
	            (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[camelize(key)] = true;
	          }
	        }
	      }
	      this$1$1._numberProps = numberProps;
	      if (isAsync) {
	        this$1$1._resolveProps(def);
	      }
	      this$1$1._applyStyles(styles);
	      this$1$1._update();
	    };
	    var asyncDef = this._def.__asyncLoader;
	    if (asyncDef) {
	      asyncDef().then(function (def) { return resolve(def, true); });
	    } else {
	      resolve(this._def);
	    }
	  };
	  VueElement.prototype._resolveProps = function _resolveProps (def) {
	    var this$1$1 = this;

	    var props = def.props;
	    var declaredPropKeys = isArray(props) ? props : Object.keys(props || {});
	    for (var key of Object.keys(this)) {
	      if (key[0] !== "_" && declaredPropKeys.includes(key)) {
	        this._setProp(key, this[key], true, false);
	      }
	    }
	    var loop = function () {
	      Object.defineProperty(this$1$1, key$1, {
	        get: function get() {
	          return this._getProp(key$1);
	        },
	        set: function set(val) {
	          this._setProp(key$1, val);
	        }
	      });
	    };

	    for (var key$1 of declaredPropKeys.map(camelize)) loop();
	  };
	  VueElement.prototype._setAttr = function _setAttr (key) {
	    var value = this.getAttribute(key);
	    var camelKey = camelize(key);
	    if (this._numberProps && this._numberProps[camelKey]) {
	      value = toNumber(value);
	    }
	    this._setProp(camelKey, value, false);
	  };
	  /**
	   * @internal
	   */
	  VueElement.prototype._getProp = function _getProp (key) {
	    return this._props[key];
	  };
	  /**
	   * @internal
	   */
	  VueElement.prototype._setProp = function _setProp (key, val, shouldReflect, shouldUpdate) {
	    if ( shouldReflect === void 0 ) shouldReflect = true;
	    if ( shouldUpdate === void 0 ) shouldUpdate = true;

	    if (val !== this._props[key]) {
	      this._props[key] = val;
	      if (shouldUpdate && this._instance) {
	        this._update();
	      }
	      if (shouldReflect) {
	        if (val === true) {
	          this.setAttribute(hyphenate(key), "");
	        } else if (typeof val === "string" || typeof val === "number") {
	          this.setAttribute(hyphenate(key), val + "");
	        } else if (!val) {
	          this.removeAttribute(hyphenate(key));
	        }
	      }
	    }
	  };
	  VueElement.prototype._update = function _update () {
	    render(this._createVNode(), this.shadowRoot);
	  };
	  VueElement.prototype._createVNode = function _createVNode () {
	    var this$1$1 = this;

	    var vnode = createVNode(this._def, extend({}, this._props));
	    if (!this._instance) {
	      vnode.ce = function (instance) {
	        this$1$1._instance = instance;
	        instance.isCE = true;
	        if (!!(process.env.NODE_ENV !== "production")) {
	          instance.ceReload = function (newStyles) {
	            if (this$1$1._styles) {
	              this$1$1._styles.forEach(function (s) { return this$1$1.shadowRoot.removeChild(s); });
	              this$1$1._styles.length = 0;
	            }
	            this$1$1._applyStyles(newStyles);
	            this$1$1._instance = null;
	            this$1$1._update();
	          };
	        }
	        var dispatch = function (event, args) {
	          this$1$1.dispatchEvent(
	            new CustomEvent(event, {
	              detail: args
	            })
	          );
	        };
	        instance.emit = function (event) {
	          var args = [], len = arguments.length - 1;
	          while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	          dispatch(event, args);
	          if (hyphenate(event) !== event) {
	            dispatch(hyphenate(event), args);
	          }
	        };
	        var parent = this$1$1;
	        while (parent = parent && (parent.parentNode || parent.host)) {
	          if (parent instanceof VueElement) {
	            instance.parent = parent._instance;
	            instance.provides = parent._instance.provides;
	            break;
	          }
	        }
	      };
	    }
	    return vnode;
	  };
	  VueElement.prototype._applyStyles = function _applyStyles (styles) {
	    var this$1$1 = this;

	    if (styles) {
	      styles.forEach(function (css) {
	        var s = document.createElement("style");
	        s.textContent = css;
	        this$1$1.shadowRoot.appendChild(s);
	        if (!!(process.env.NODE_ENV !== "production")) {
	          (this$1$1._styles || (this$1$1._styles = [])).push(s);
	        }
	      });
	    }
	  };

	  return VueElement;
	}(BaseClass));

	function useCssModule(name) {
	  if ( name === void 0 ) name = "$style";

	  {
	    var instance = getCurrentInstance();
	    if (!instance) {
	      !!(process.env.NODE_ENV !== "production") && warn("useCssModule must be called inside setup()");
	      return EMPTY_OBJ;
	    }
	    var modules = instance.type.__cssModules;
	    if (!modules) {
	      !!(process.env.NODE_ENV !== "production") && warn("Current instance does not have CSS modules injected.");
	      return EMPTY_OBJ;
	    }
	    var mod = modules[name];
	    if (!mod) {
	      !!(process.env.NODE_ENV !== "production") && warn(("Current instance does not have CSS module named \"" + name + "\"."));
	      return EMPTY_OBJ;
	    }
	    return mod;
	  }
	}

	function useCssVars(getter) {
	  var instance = getCurrentInstance();
	  if (!instance) {
	    !!(process.env.NODE_ENV !== "production") && warn("useCssVars is called without current active component instance.");
	    return;
	  }
	  var updateTeleports = instance.ut = function (vars) {
	    if ( vars === void 0 ) vars = getter(instance.proxy);

	    Array.from(
	      document.querySelectorAll(("[data-v-owner=\"" + (instance.uid) + "\"]"))
	    ).forEach(function (node) { return setVarsOnNode(node, vars); });
	  };
	  var setVars = function () {
	    var vars = getter(instance.proxy);
	    setVarsOnVNode(instance.subTree, vars);
	    updateTeleports(vars);
	  };
	  watchPostEffect(setVars);
	  onMounted(function () {
	    var ob = new MutationObserver(setVars);
	    ob.observe(instance.subTree.el.parentNode, { childList: true });
	    onUnmounted(function () { return ob.disconnect(); });
	  });
	}
	function setVarsOnVNode(vnode, vars) {
	  if (vnode.shapeFlag & 128) {
	    var suspense = vnode.suspense;
	    vnode = suspense.activeBranch;
	    if (suspense.pendingBranch && !suspense.isHydrating) {
	      suspense.effects.push(function () {
	        setVarsOnVNode(suspense.activeBranch, vars);
	      });
	    }
	  }
	  while (vnode.component) {
	    vnode = vnode.component.subTree;
	  }
	  if (vnode.shapeFlag & 1 && vnode.el) {
	    setVarsOnNode(vnode.el, vars);
	  } else if (vnode.type === Fragment) {
	    vnode.children.forEach(function (c) { return setVarsOnVNode(c, vars); });
	  } else if (vnode.type === Static) {
	    var el = vnode.el;
	    var anchor = vnode.anchor;
	    while (el) {
	      setVarsOnNode(el, vars);
	      if (el === anchor)
	        { break; }
	      el = el.nextSibling;
	    }
	  }
	}
	function setVarsOnNode(el, vars) {
	  if (el.nodeType === 1) {
	    var style = el.style;
	    for (var key in vars) {
	      style.setProperty(("--" + key), vars[key]);
	    }
	  }
	}

	var TRANSITION = "transition";
	var ANIMATION = "animation";
	var Transition = function (props, ref) {
	  var slots = ref.slots;

	  return h(BaseTransition, resolveTransitionProps(props), slots);
	};
	Transition.displayName = "Transition";
	var DOMTransitionPropsValidators = {
	  name: String,
	  type: String,
	  css: {
	    type: Boolean,
	    default: true
	  },
	  duration: [String, Number, Object],
	  enterFromClass: String,
	  enterActiveClass: String,
	  enterToClass: String,
	  appearFromClass: String,
	  appearActiveClass: String,
	  appearToClass: String,
	  leaveFromClass: String,
	  leaveActiveClass: String,
	  leaveToClass: String
	};
	var TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend(
	  {},
	  BaseTransitionPropsValidators,
	  DOMTransitionPropsValidators
	);
	var callHook = function (hook, args) {
	  if ( args === void 0 ) args = [];

	  if (isArray(hook)) {
	    hook.forEach(function (h2) { return h2.apply(void 0, args); });
	  } else if (hook) {
	    hook.apply(void 0, args);
	  }
	};
	var hasExplicitCallback = function (hook) {
	  return hook ? isArray(hook) ? hook.some(function (h2) { return h2.length > 1; }) : hook.length > 1 : false;
	};
	function resolveTransitionProps(rawProps) {
	  var baseProps = {};
	  for (var key in rawProps) {
	    if (!(key in DOMTransitionPropsValidators)) {
	      baseProps[key] = rawProps[key];
	    }
	  }
	  if (rawProps.css === false) {
	    return baseProps;
	  }
	  var name = rawProps.name; if ( name === void 0 ) name = "v";
	  var type = rawProps.type;
	  var duration = rawProps.duration;
	  var enterFromClass = rawProps.enterFromClass; if ( enterFromClass === void 0 ) enterFromClass = name + "-enter-from";
	  var enterActiveClass = rawProps.enterActiveClass; if ( enterActiveClass === void 0 ) enterActiveClass = name + "-enter-active";
	  var enterToClass = rawProps.enterToClass; if ( enterToClass === void 0 ) enterToClass = name + "-enter-to";
	  var appearFromClass = rawProps.appearFromClass; if ( appearFromClass === void 0 ) appearFromClass = enterFromClass;
	  var appearActiveClass = rawProps.appearActiveClass; if ( appearActiveClass === void 0 ) appearActiveClass = enterActiveClass;
	  var appearToClass = rawProps.appearToClass; if ( appearToClass === void 0 ) appearToClass = enterToClass;
	  var leaveFromClass = rawProps.leaveFromClass; if ( leaveFromClass === void 0 ) leaveFromClass = name + "-leave-from";
	  var leaveActiveClass = rawProps.leaveActiveClass; if ( leaveActiveClass === void 0 ) leaveActiveClass = name + "-leave-active";
	  var leaveToClass = rawProps.leaveToClass; if ( leaveToClass === void 0 ) leaveToClass = name + "-leave-to";
	  var durations = normalizeDuration(duration);
	  var enterDuration = durations && durations[0];
	  var leaveDuration = durations && durations[1];
	  var onBeforeEnter = baseProps.onBeforeEnter;
	  var onEnter = baseProps.onEnter;
	  var onEnterCancelled = baseProps.onEnterCancelled;
	  var onLeave = baseProps.onLeave;
	  var onLeaveCancelled = baseProps.onLeaveCancelled;
	  var onBeforeAppear = baseProps.onBeforeAppear; if ( onBeforeAppear === void 0 ) onBeforeAppear = onBeforeEnter;
	  var onAppear = baseProps.onAppear; if ( onAppear === void 0 ) onAppear = onEnter;
	  var onAppearCancelled = baseProps.onAppearCancelled; if ( onAppearCancelled === void 0 ) onAppearCancelled = onEnterCancelled;
	  var finishEnter = function (el, isAppear, done) {
	    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
	    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
	    done && done();
	  };
	  var finishLeave = function (el, done) {
	    el._isLeaving = false;
	    removeTransitionClass(el, leaveFromClass);
	    removeTransitionClass(el, leaveToClass);
	    removeTransitionClass(el, leaveActiveClass);
	    done && done();
	  };
	  var makeEnterHook = function (isAppear) {
	    return function (el, done) {
	      var hook = isAppear ? onAppear : onEnter;
	      var resolve = function () { return finishEnter(el, isAppear, done); };
	      callHook(hook, [el, resolve]);
	      nextFrame(function () {
	        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
	        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
	        if (!hasExplicitCallback(hook)) {
	          whenTransitionEnds(el, type, enterDuration, resolve);
	        }
	      });
	    };
	  };
	  return extend(baseProps, {
	    onBeforeEnter: function onBeforeEnter$1(el) {
	      callHook(onBeforeEnter, [el]);
	      addTransitionClass(el, enterFromClass);
	      addTransitionClass(el, enterActiveClass);
	    },
	    onBeforeAppear: function onBeforeAppear$1(el) {
	      callHook(onBeforeAppear, [el]);
	      addTransitionClass(el, appearFromClass);
	      addTransitionClass(el, appearActiveClass);
	    },
	    onEnter: makeEnterHook(false),
	    onAppear: makeEnterHook(true),
	    onLeave: function onLeave$1(el, done) {
	      el._isLeaving = true;
	      var resolve = function () { return finishLeave(el, done); };
	      addTransitionClass(el, leaveFromClass);
	      forceReflow();
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        if (!el._isLeaving) {
	          return;
	        }
	        removeTransitionClass(el, leaveFromClass);
	        addTransitionClass(el, leaveToClass);
	        if (!hasExplicitCallback(onLeave)) {
	          whenTransitionEnds(el, type, leaveDuration, resolve);
	        }
	      });
	      callHook(onLeave, [el, resolve]);
	    },
	    onEnterCancelled: function onEnterCancelled$1(el) {
	      finishEnter(el, false);
	      callHook(onEnterCancelled, [el]);
	    },
	    onAppearCancelled: function onAppearCancelled$1(el) {
	      finishEnter(el, true);
	      callHook(onAppearCancelled, [el]);
	    },
	    onLeaveCancelled: function onLeaveCancelled$1(el) {
	      finishLeave(el);
	      callHook(onLeaveCancelled, [el]);
	    }
	  });
	}
	function normalizeDuration(duration) {
	  if (duration == null) {
	    return null;
	  } else if (isObject(duration)) {
	    return [NumberOf(duration.enter), NumberOf(duration.leave)];
	  } else {
	    var n = NumberOf(duration);
	    return [n, n];
	  }
	}
	function NumberOf(val) {
	  var res = toNumber(val);
	  if (!!(process.env.NODE_ENV !== "production")) {
	    assertNumber(res, "<transition> explicit duration");
	  }
	  return res;
	}
	function addTransitionClass(el, cls) {
	  cls.split(/\s+/).forEach(function (c) { return c && el.classList.add(c); });
	  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
	}
	function removeTransitionClass(el, cls) {
	  cls.split(/\s+/).forEach(function (c) { return c && el.classList.remove(c); });
	  var _vtc = el._vtc;
	  if (_vtc) {
	    _vtc.delete(cls);
	    if (!_vtc.size) {
	      el._vtc = void 0;
	    }
	  }
	}
	function nextFrame(cb) {
	  requestAnimationFrame(function () {
	    requestAnimationFrame(cb);
	  });
	}
	var endId = 0;
	function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
	  var id = el._endId = ++endId;
	  var resolveIfNotStale = function () {
	    if (id === el._endId) {
	      resolve();
	    }
	  };
	  if (explicitTimeout) {
	    return setTimeout(resolveIfNotStale, explicitTimeout);
	  }
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) {
	    return resolve();
	  }
	  var endEvent = type + "end";
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(endEvent, onEnd);
	    resolveIfNotStale();
	  };
	  var onEnd = function (e) {
	    if (e.target === el && ++ended >= propCount) {
	      end();
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(endEvent, onEnd);
	}
	function getTransitionInfo(el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var getStyleProperties = function (key) { return (styles[key] || "").split(", "); };
	  var transitionDelays = getStyleProperties((TRANSITION + "Delay"));
	  var transitionDurations = getStyleProperties((TRANSITION + "Duration"));
	  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
	  var animationDelays = getStyleProperties((ANIMATION + "Delay"));
	  var animationDurations = getStyleProperties((ANIMATION + "Duration"));
	  var animationTimeout = getTimeout(animationDelays, animationDurations);
	  var type = null;
	  var timeout = 0;
	  var propCount = 0;
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
	    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
	  }
	  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
	    getStyleProperties((TRANSITION + "Property")).toString()
	  );
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  };
	}
	function getTimeout(delays, durations) {
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }
	  return Math.max.apply(Math, durations.map(function (d, i) { return toMs(d) + toMs(delays[i]); }));
	}
	function toMs(s) {
	  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
	}
	function forceReflow() {
	  return document.body.offsetHeight;
	}

	var positionMap = /* @__PURE__ */ new WeakMap();
	var newPositionMap = /* @__PURE__ */ new WeakMap();
	var TransitionGroupImpl = {
	  name: "TransitionGroup",
	  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
	    tag: String,
	    moveClass: String
	  }),
	  setup: function setup(props, ref) {
	    var slots = ref.slots;

	    var instance = getCurrentInstance();
	    var state = useTransitionState();
	    var prevChildren;
	    var children;
	    onUpdated(function () {
	      if (!prevChildren.length) {
	        return;
	      }
	      var moveClass = props.moveClass || ((props.name || "v") + "-move");
	      if (!hasCSSTransform(
	        prevChildren[0].el,
	        instance.vnode.el,
	        moveClass
	      )) {
	        return;
	      }
	      prevChildren.forEach(callPendingCbs);
	      prevChildren.forEach(recordPosition);
	      var movedChildren = prevChildren.filter(applyTranslation);
	      forceReflow();
	      movedChildren.forEach(function (c) {
	        var el = c.el;
	        var style = el.style;
	        addTransitionClass(el, moveClass);
	        style.transform = style.webkitTransform = style.transitionDuration = "";
	        var cb = el._moveCb = function (e) {
	          if (e && e.target !== el) {
	            return;
	          }
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener("transitionend", cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        };
	        el.addEventListener("transitionend", cb);
	      });
	    });
	    return function () {
	      var rawProps = toRaw(props);
	      var cssTransitionProps = resolveTransitionProps(rawProps);
	      var tag = rawProps.tag || Fragment;
	      prevChildren = children;
	      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
	      for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        if (child.key != null) {
	          setTransitionHooks(
	            child,
	            resolveTransitionHooks(child, cssTransitionProps, state, instance)
	          );
	        } else if (!!(process.env.NODE_ENV !== "production")) {
	          warn("<TransitionGroup> children must be keyed.");
	        }
	      }
	      if (prevChildren) {
	        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	          var child$1 = prevChildren[i$1];
	          setTransitionHooks(
	            child$1,
	            resolveTransitionHooks(child$1, cssTransitionProps, state, instance)
	          );
	          positionMap.set(child$1, child$1.el.getBoundingClientRect());
	        }
	      }
	      return createVNode(tag, null, children);
	    };
	  }
	};
	var removeMode = function (props) { return delete props.mode; };
	/* @__PURE__ */ removeMode(TransitionGroupImpl.props);
	var TransitionGroup = TransitionGroupImpl;
	function callPendingCbs(c) {
	  var el = c.el;
	  if (el._moveCb) {
	    el._moveCb();
	  }
	  if (el._enterCb) {
	    el._enterCb();
	  }
	}
	function recordPosition(c) {
	  newPositionMap.set(c, c.el.getBoundingClientRect());
	}
	function applyTranslation(c) {
	  var oldPos = positionMap.get(c);
	  var newPos = newPositionMap.get(c);
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    var s = c.el.style;
	    s.transform = s.webkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = "0s";
	    return c;
	  }
	}
	function hasCSSTransform(el, root, moveClass) {
	  var clone = el.cloneNode();
	  if (el._vtc) {
	    el._vtc.forEach(function (cls) {
	      cls.split(/\s+/).forEach(function (c) { return c && clone.classList.remove(c); });
	    });
	  }
	  moveClass.split(/\s+/).forEach(function (c) { return c && clone.classList.add(c); });
	  clone.style.display = "none";
	  var container = root.nodeType === 1 ? root : root.parentNode;
	  container.appendChild(clone);
	  var ref = getTransitionInfo(clone);
	  var hasTransform = ref.hasTransform;
	  container.removeChild(clone);
	  return hasTransform;
	}

	var getModelAssigner = function (vnode) {
	  var fn = vnode.props["onUpdate:modelValue"] || false;
	  return isArray(fn) ? function (value) { return invokeArrayFns(fn, value); } : fn;
	};
	function onCompositionStart(e) {
	  e.target.composing = true;
	}
	function onCompositionEnd(e) {
	  var target = e.target;
	  if (target.composing) {
	    target.composing = false;
	    target.dispatchEvent(new Event("input"));
	  }
	}
	var vModelText = {
	  created: function created(el, ref, vnode) {
	    var ref_modifiers = ref.modifiers;
	    var lazy = ref_modifiers.lazy;
	    var trim = ref_modifiers.trim;
	    var number = ref_modifiers.number;

	    el._assign = getModelAssigner(vnode);
	    var castToNumber = number || vnode.props && vnode.props.type === "number";
	    addEventListener(el, lazy ? "change" : "input", function (e) {
	      if (e.target.composing)
	        { return; }
	      var domValue = el.value;
	      if (trim) {
	        domValue = domValue.trim();
	      }
	      if (castToNumber) {
	        domValue = looseToNumber(domValue);
	      }
	      el._assign(domValue);
	    });
	    if (trim) {
	      addEventListener(el, "change", function () {
	        el.value = el.value.trim();
	      });
	    }
	    if (!lazy) {
	      addEventListener(el, "compositionstart", onCompositionStart);
	      addEventListener(el, "compositionend", onCompositionEnd);
	      addEventListener(el, "change", onCompositionEnd);
	    }
	  },
	  // set value on mounted so it's after min/max for type="range"
	  mounted: function mounted(el, ref) {
	    var value = ref.value;

	    el.value = value == null ? "" : value;
	  },
	  beforeUpdate: function beforeUpdate(el, ref, vnode) {
	    var value = ref.value;
	    var ref_modifiers = ref.modifiers;
	    var lazy = ref_modifiers.lazy;
	    var trim = ref_modifiers.trim;
	    var number = ref_modifiers.number;

	    el._assign = getModelAssigner(vnode);
	    if (el.composing)
	      { return; }
	    if (document.activeElement === el && el.type !== "range") {
	      if (lazy) {
	        return;
	      }
	      if (trim && el.value.trim() === value) {
	        return;
	      }
	      if ((number || el.type === "number") && looseToNumber(el.value) === value) {
	        return;
	      }
	    }
	    var newValue = value == null ? "" : value;
	    if (el.value !== newValue) {
	      el.value = newValue;
	    }
	  }
	};
	var vModelCheckbox = {
	  // #4096 array checkboxes need to be deep traversed
	  deep: true,
	  created: function created(el, _, vnode) {
	    el._assign = getModelAssigner(vnode);
	    addEventListener(el, "change", function () {
	      var modelValue = el._modelValue;
	      var elementValue = getValue(el);
	      var checked = el.checked;
	      var assign = el._assign;
	      if (isArray(modelValue)) {
	        var index = looseIndexOf(modelValue, elementValue);
	        var found = index !== -1;
	        if (checked && !found) {
	          assign(modelValue.concat(elementValue));
	        } else if (!checked && found) {
	          var filtered = [].concat( modelValue );
	          filtered.splice(index, 1);
	          assign(filtered);
	        }
	      } else if (isSet(modelValue)) {
	        var cloned = new Set(modelValue);
	        if (checked) {
	          cloned.add(elementValue);
	        } else {
	          cloned.delete(elementValue);
	        }
	        assign(cloned);
	      } else {
	        assign(getCheckboxValue(el, checked));
	      }
	    });
	  },
	  // set initial checked on mount to wait for true-value/false-value
	  mounted: setChecked,
	  beforeUpdate: function beforeUpdate(el, binding, vnode) {
	    el._assign = getModelAssigner(vnode);
	    setChecked(el, binding, vnode);
	  }
	};
	function setChecked(el, ref, vnode) {
	  var value = ref.value;
	  var oldValue = ref.oldValue;

	  el._modelValue = value;
	  if (isArray(value)) {
	    el.checked = looseIndexOf(value, vnode.props.value) > -1;
	  } else if (isSet(value)) {
	    el.checked = value.has(vnode.props.value);
	  } else if (value !== oldValue) {
	    el.checked = looseEqual(value, getCheckboxValue(el, true));
	  }
	}
	var vModelRadio = {
	  created: function created(el, ref, vnode) {
	    var value = ref.value;

	    el.checked = looseEqual(value, vnode.props.value);
	    el._assign = getModelAssigner(vnode);
	    addEventListener(el, "change", function () {
	      el._assign(getValue(el));
	    });
	  },
	  beforeUpdate: function beforeUpdate(el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    el._assign = getModelAssigner(vnode);
	    if (value !== oldValue) {
	      el.checked = looseEqual(value, vnode.props.value);
	    }
	  }
	};
	var vModelSelect = {
	  // <select multiple> value need to be deep traversed
	  deep: true,
	  created: function created(el, ref, vnode) {
	    var value = ref.value;
	    var number = ref.modifiers.number;

	    var isSetModel = isSet(value);
	    addEventListener(el, "change", function () {
	      var selectedVal = Array.prototype.filter.call(el.options, function (o) { return o.selected; }).map(
	        function (o) { return number ? looseToNumber(getValue(o)) : getValue(o); }
	      );
	      el._assign(
	        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
	      );
	    });
	    el._assign = getModelAssigner(vnode);
	  },
	  // set value in mounted & updated because <select> relies on its children
	  // <option>s.
	  mounted: function mounted(el, ref) {
	    var value = ref.value;

	    setSelected(el, value);
	  },
	  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
	    el._assign = getModelAssigner(vnode);
	  },
	  updated: function updated(el, ref) {
	    var value = ref.value;

	    setSelected(el, value);
	  }
	};
	function setSelected(el, value) {
	  var isMultiple = el.multiple;
	  if (isMultiple && !isArray(value) && !isSet(value)) {
	    !!(process.env.NODE_ENV !== "production") && warn(
	      ("<select multiple v-model> expects an Array or Set value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)) + ".")
	    );
	    return;
	  }
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    var option = el.options[i];
	    var optionValue = getValue(option);
	    if (isMultiple) {
	      if (isArray(value)) {
	        option.selected = looseIndexOf(value, optionValue) > -1;
	      } else {
	        option.selected = value.has(optionValue);
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i)
	          { el.selectedIndex = i; }
	        return;
	      }
	    }
	  }
	  if (!isMultiple && el.selectedIndex !== -1) {
	    el.selectedIndex = -1;
	  }
	}
	function getValue(el) {
	  return "_value" in el ? el._value : el.value;
	}
	function getCheckboxValue(el, checked) {
	  var key = checked ? "_trueValue" : "_falseValue";
	  return key in el ? el[key] : checked;
	}
	var vModelDynamic = {
	  created: function created(el, binding, vnode) {
	    callModelHook(el, binding, vnode, null, "created");
	  },
	  mounted: function mounted(el, binding, vnode) {
	    callModelHook(el, binding, vnode, null, "mounted");
	  },
	  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
	    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
	  },
	  updated: function updated(el, binding, vnode, prevVNode) {
	    callModelHook(el, binding, vnode, prevVNode, "updated");
	  }
	};
	function resolveDynamicModel(tagName, type) {
	  switch (tagName) {
	    case "SELECT":
	      return vModelSelect;
	    case "TEXTAREA":
	      return vModelText;
	    default:
	      switch (type) {
	        case "checkbox":
	          return vModelCheckbox;
	        case "radio":
	          return vModelRadio;
	        default:
	          return vModelText;
	      }
	  }
	}
	function callModelHook(el, binding, vnode, prevVNode, hook) {
	  var modelToUse = resolveDynamicModel(
	    el.tagName,
	    vnode.props && vnode.props.type
	  );
	  var fn = modelToUse[hook];
	  fn && fn(el, binding, vnode, prevVNode);
	}
	function initVModelForSSR() {
	  vModelText.getSSRProps = function (ref) {
	    var value = ref.value;

	    return ({ value: value });
	  };
	  vModelRadio.getSSRProps = function (ref, vnode) {
	    var value = ref.value;

	    if (vnode.props && looseEqual(vnode.props.value, value)) {
	      return { checked: true };
	    }
	  };
	  vModelCheckbox.getSSRProps = function (ref, vnode) {
	    var value = ref.value;

	    if (isArray(value)) {
	      if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
	        return { checked: true };
	      }
	    } else if (isSet(value)) {
	      if (vnode.props && value.has(vnode.props.value)) {
	        return { checked: true };
	      }
	    } else if (value) {
	      return { checked: true };
	    }
	  };
	  vModelDynamic.getSSRProps = function (binding, vnode) {
	    if (typeof vnode.type !== "string") {
	      return;
	    }
	    var modelToUse = resolveDynamicModel(
	      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
	      vnode.type.toUpperCase(),
	      vnode.props && vnode.props.type
	    );
	    if (modelToUse.getSSRProps) {
	      return modelToUse.getSSRProps(binding, vnode);
	    }
	  };
	}

	var systemModifiers = ["ctrl", "shift", "alt", "meta"];
	var modifierGuards = {
	  stop: function (e) { return e.stopPropagation(); },
	  prevent: function (e) { return e.preventDefault(); },
	  self: function (e) { return e.target !== e.currentTarget; },
	  ctrl: function (e) { return !e.ctrlKey; },
	  shift: function (e) { return !e.shiftKey; },
	  alt: function (e) { return !e.altKey; },
	  meta: function (e) { return !e.metaKey; },
	  left: function (e) { return "button" in e && e.button !== 0; },
	  middle: function (e) { return "button" in e && e.button !== 1; },
	  right: function (e) { return "button" in e && e.button !== 2; },
	  exact: function (e, modifiers) { return systemModifiers.some(function (m) { return e[(m + "Key")] && !modifiers.includes(m); }); }
	};
	var withModifiers = function (fn, modifiers) {
	  return function (event) {
	    var args = [], len = arguments.length - 1;
	    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	    for (var i = 0; i < modifiers.length; i++) {
	      var guard = modifierGuards[modifiers[i]];
	      if (guard && guard(event, modifiers))
	        { return; }
	    }
	    return fn.apply(void 0, [ event ].concat( args ));
	  };
	};
	var keyNames = {
	  esc: "escape",
	  space: " ",
	  up: "arrow-up",
	  left: "arrow-left",
	  right: "arrow-right",
	  down: "arrow-down",
	  delete: "backspace"
	};
	var withKeys = function (fn, modifiers) {
	  return function (event) {
	    if (!("key" in event)) {
	      return;
	    }
	    var eventKey = hyphenate(event.key);
	    if (modifiers.some(function (k) { return k === eventKey || keyNames[k] === eventKey; })) {
	      return fn(event);
	    }
	  };
	};

	var vShow = {
	  beforeMount: function beforeMount(el, ref, ref$1) {
	    var value = ref.value;
	    var transition = ref$1.transition;

	    el._vod = el.style.display === "none" ? "" : el.style.display;
	    if (transition && value) {
	      transition.beforeEnter(el);
	    } else {
	      setDisplay(el, value);
	    }
	  },
	  mounted: function mounted(el, ref, ref$1) {
	    var value = ref.value;
	    var transition = ref$1.transition;

	    if (transition && value) {
	      transition.enter(el);
	    }
	  },
	  updated: function updated(el, ref, ref$1) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	    var transition = ref$1.transition;

	    if (!value === !oldValue)
	      { return; }
	    if (transition) {
	      if (value) {
	        transition.beforeEnter(el);
	        setDisplay(el, true);
	        transition.enter(el);
	      } else {
	        transition.leave(el, function () {
	          setDisplay(el, false);
	        });
	      }
	    } else {
	      setDisplay(el, value);
	    }
	  },
	  beforeUnmount: function beforeUnmount(el, ref) {
	    var value = ref.value;

	    setDisplay(el, value);
	  }
	};
	function setDisplay(el, value) {
	  el.style.display = value ? el._vod : "none";
	}
	function initVShowForSSR() {
	  vShow.getSSRProps = function (ref) {
	    var value = ref.value;

	    if (!value) {
	      return { style: { display: "none" } };
	    }
	  };
	}

	var rendererOptions = /* @__PURE__ */ extend({ patchProp: patchProp }, nodeOps);
	var renderer;
	var enabledHydration = false;
	function ensureRenderer() {
	  return renderer || (renderer = createRenderer(rendererOptions));
	}
	function ensureHydrationRenderer() {
	  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
	  enabledHydration = true;
	  return renderer;
	}
	var render = function () {
	  var ref;

	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];
	  (ref = ensureRenderer()).render.apply(ref, args);
	};
	var hydrate = function () {
	  var ref;

	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];
	  (ref = ensureHydrationRenderer()).hydrate.apply(ref, args);
	};
	var createApp = function () {
	  var ref;

	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];
	  var app = (ref = ensureRenderer()).createApp.apply(ref, args);
	  if (!!(process.env.NODE_ENV !== "production")) {
	    injectNativeTagCheck(app);
	    injectCompilerOptionsCheck(app);
	  }
	  var mount = app.mount;
	  app.mount = function (containerOrSelector) {
	    var container = normalizeContainer(containerOrSelector);
	    if (!container)
	      { return; }
	    var component = app._component;
	    if (!isFunction(component) && !component.render && !component.template) {
	      component.template = container.innerHTML;
	    }
	    container.innerHTML = "";
	    var proxy = mount(container, false, container instanceof SVGElement);
	    if (container instanceof Element) {
	      container.removeAttribute("v-cloak");
	      container.setAttribute("data-v-app", "");
	    }
	    return proxy;
	  };
	  return app;
	};
	var createSSRApp = function () {
	  var ref;

	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];
	  var app = (ref = ensureHydrationRenderer()).createApp.apply(ref, args);
	  if (!!(process.env.NODE_ENV !== "production")) {
	    injectNativeTagCheck(app);
	    injectCompilerOptionsCheck(app);
	  }
	  var mount = app.mount;
	  app.mount = function (containerOrSelector) {
	    var container = normalizeContainer(containerOrSelector);
	    if (container) {
	      return mount(container, true, container instanceof SVGElement);
	    }
	  };
	  return app;
	};
	function injectNativeTagCheck(app) {
	  Object.defineProperty(app.config, "isNativeTag", {
	    value: function (tag) { return isHTMLTag(tag) || isSVGTag(tag); },
	    writable: false
	  });
	}
	function injectCompilerOptionsCheck(app) {
	  if (isRuntimeOnly()) {
	    var isCustomElement = app.config.isCustomElement;
	    Object.defineProperty(app.config, "isCustomElement", {
	      get: function get() {
	        return isCustomElement;
	      },
	      set: function set() {
	        warn(
	          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
	        );
	      }
	    });
	    var compilerOptions = app.config.compilerOptions;
	    var msg = "The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka \"full build\"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc";
	    Object.defineProperty(app.config, "compilerOptions", {
	      get: function get() {
	        warn(msg);
	        return compilerOptions;
	      },
	      set: function set() {
	        warn(msg);
	      }
	    });
	  }
	}
	function normalizeContainer(container) {
	  if (isString(container)) {
	    var res = document.querySelector(container);
	    if (!!(process.env.NODE_ENV !== "production") && !res) {
	      warn(
	        ("Failed to mount app: mount target selector \"" + container + "\" returned null.")
	      );
	    }
	    return res;
	  }
	  if (!!(process.env.NODE_ENV !== "production") && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
	    warn(
	      "mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs"
	    );
	  }
	  return container;
	}
	var ssrDirectiveInitialized = false;
	var initDirectivesForSSR = function () {
	  if (!ssrDirectiveInitialized) {
	    ssrDirectiveInitialized = true;
	    initVModelForSSR();
	    initVShowForSSR();
	  }
	} ;

	var runtimeDom_esmBundler = /*#__PURE__*/Object.freeze({
		__proto__: null,
		BaseTransition: BaseTransition,
		BaseTransitionPropsValidators: BaseTransitionPropsValidators,
		Comment: Comment,
		EffectScope: EffectScope,
		Fragment: Fragment,
		KeepAlive: KeepAlive,
		ReactiveEffect: ReactiveEffect,
		Static: Static,
		Suspense: Suspense,
		Teleport: Teleport,
		Text: Text,
		Transition: Transition,
		TransitionGroup: TransitionGroup,
		VueElement: VueElement,
		assertNumber: assertNumber,
		callWithAsyncErrorHandling: callWithAsyncErrorHandling,
		callWithErrorHandling: callWithErrorHandling,
		camelize: camelize,
		capitalize: capitalize,
		cloneVNode: cloneVNode,
		compatUtils: compatUtils,
		computed: computed,
		createApp: createApp,
		createBlock: createBlock,
		createCommentVNode: createCommentVNode,
		createElementBlock: createElementBlock,
		createElementVNode: createBaseVNode,
		createHydrationRenderer: createHydrationRenderer,
		createPropsRestProxy: createPropsRestProxy,
		createRenderer: createRenderer,
		createSSRApp: createSSRApp,
		createSlots: createSlots,
		createStaticVNode: createStaticVNode,
		createTextVNode: createTextVNode,
		createVNode: createVNode,
		customRef: customRef,
		defineAsyncComponent: defineAsyncComponent,
		defineComponent: defineComponent,
		defineCustomElement: defineCustomElement,
		defineEmits: defineEmits,
		defineExpose: defineExpose,
		defineModel: defineModel,
		defineOptions: defineOptions,
		defineProps: defineProps,
		defineSSRCustomElement: defineSSRCustomElement,
		defineSlots: defineSlots,
		get devtools () { return devtools; },
		effect: effect,
		effectScope: effectScope,
		getCurrentInstance: getCurrentInstance,
		getCurrentScope: getCurrentScope,
		getTransitionRawChildren: getTransitionRawChildren,
		guardReactiveProps: guardReactiveProps,
		h: h,
		handleError: handleError,
		hasInjectionContext: hasInjectionContext,
		hydrate: hydrate,
		initCustomFormatter: initCustomFormatter,
		initDirectivesForSSR: initDirectivesForSSR,
		inject: inject,
		isMemoSame: isMemoSame,
		isProxy: isProxy,
		isReactive: isReactive,
		isReadonly: isReadonly,
		isRef: isRef,
		isRuntimeOnly: isRuntimeOnly,
		isShallow: isShallow$1,
		isVNode: isVNode,
		markRaw: markRaw,
		mergeDefaults: mergeDefaults,
		mergeModels: mergeModels,
		mergeProps: mergeProps,
		nextTick: nextTick,
		normalizeClass: normalizeClass,
		normalizeProps: normalizeProps,
		normalizeStyle: normalizeStyle,
		onActivated: onActivated,
		onBeforeMount: onBeforeMount,
		onBeforeUnmount: onBeforeUnmount,
		onBeforeUpdate: onBeforeUpdate,
		onDeactivated: onDeactivated,
		onErrorCaptured: onErrorCaptured,
		onMounted: onMounted,
		onRenderTracked: onRenderTracked,
		onRenderTriggered: onRenderTriggered,
		onScopeDispose: onScopeDispose,
		onServerPrefetch: onServerPrefetch,
		onUnmounted: onUnmounted,
		onUpdated: onUpdated,
		openBlock: openBlock,
		popScopeId: popScopeId,
		provide: provide,
		proxyRefs: proxyRefs,
		pushScopeId: pushScopeId,
		queuePostFlushCb: queuePostFlushCb,
		reactive: reactive,
		readonly: readonly,
		ref: ref,
		registerRuntimeCompiler: registerRuntimeCompiler,
		render: render,
		renderList: renderList,
		renderSlot: renderSlot,
		resolveComponent: resolveComponent,
		resolveDirective: resolveDirective,
		resolveDynamicComponent: resolveDynamicComponent,
		resolveFilter: resolveFilter,
		resolveTransitionHooks: resolveTransitionHooks,
		setBlockTracking: setBlockTracking,
		setDevtoolsHook: setDevtoolsHook,
		setTransitionHooks: setTransitionHooks,
		shallowReactive: shallowReactive,
		shallowReadonly: shallowReadonly,
		shallowRef: shallowRef,
		ssrContextKey: ssrContextKey,
		ssrUtils: ssrUtils,
		stop: stop,
		toDisplayString: toDisplayString,
		toHandlerKey: toHandlerKey,
		toHandlers: toHandlers,
		toRaw: toRaw,
		toRef: toRef,
		toRefs: toRefs,
		toValue: toValue,
		transformVNodeArgs: transformVNodeArgs,
		triggerRef: triggerRef,
		unref: unref,
		useAttrs: useAttrs,
		useCssModule: useCssModule,
		useCssVars: useCssVars,
		useModel: useModel,
		useSSRContext: useSSRContext,
		useSlots: useSlots,
		useTransitionState: useTransitionState,
		vModelCheckbox: vModelCheckbox,
		vModelDynamic: vModelDynamic,
		vModelRadio: vModelRadio,
		vModelSelect: vModelSelect,
		vModelText: vModelText,
		vShow: vShow,
		version: version,
		warn: warn,
		watch: watch,
		watchEffect: watchEffect,
		watchPostEffect: watchPostEffect,
		watchSyncEffect: watchSyncEffect,
		withAsyncContext: withAsyncContext,
		withCtx: withCtx,
		withDefaults: withDefaults,
		withDirectives: withDirectives,
		withKeys: withKeys,
		withMemo: withMemo,
		withModifiers: withModifiers,
		withScopeId: withScopeId
	});

	var require$$1 = /*@__PURE__*/getAugmentedNamespace(runtimeDom_esmBundler);

	var require$$2 = /*@__PURE__*/getAugmentedNamespace(shared_esmBundler);

	var hasRequiredVue_cjs_prod;

	function requireVue_cjs_prod () {
		if (hasRequiredVue_cjs_prod) { return vue_cjs_prod; }
		hasRequiredVue_cjs_prod = 1;
		(function (exports) {

			Object.defineProperty(exports, '__esModule', { value: true });

			var compilerDom = require$$0;
			var runtimeDom = require$$1;
			var shared = require$$2;

			function _interopNamespaceDefault(e) {
			  var n = Object.create(null);
			  if (e) {
			    for (var k in e) {
			      n[k] = e[k];
			    }
			  }
			  n.default = e;
			  return Object.freeze(n);
			}

			var runtimeDom__namespace = /*#__PURE__*/_interopNamespaceDefault(runtimeDom);

			var compileCache = /* @__PURE__ */ Object.create(null);
			function compileToFunction(template, options) {
			  if (!shared.isString(template)) {
			    if (template.nodeType) {
			      template = template.innerHTML;
			    } else {
			      return shared.NOOP;
			    }
			  }
			  var key = template;
			  var cached = compileCache[key];
			  if (cached) {
			    return cached;
			  }
			  if (template[0] === "#") {
			    var el = document.querySelector(template);
			    template = el ? el.innerHTML : "";
			  }
			  var opts = shared.extend(
			    {
			      hoistStatic: true,
			      onError: void 0,
			      onWarn: shared.NOOP
			    },
			    options
			  );
			  if (!opts.isCustomElement && typeof customElements !== "undefined") {
			    opts.isCustomElement = function (tag) { return !!customElements.get(tag); };
			  }
			  var ref = compilerDom.compile(template, opts);
			  var code = ref.code;
			  var render = new Function("Vue", code)(runtimeDom__namespace);
			  render._rc = true;
			  return compileCache[key] = render;
			}
			runtimeDom.registerRuntimeCompiler(compileToFunction);

			exports.compile = compileToFunction;
			Object.keys(runtimeDom).forEach(function (k) {
			  if (k !== 'default' && !exports.hasOwnProperty(k)) { exports[k] = runtimeDom[k]; }
			}); 
		} (vue_cjs_prod));
		return vue_cjs_prod;
	}

	var vue_cjs = {};

	var hasRequiredVue_cjs;

	function requireVue_cjs () {
		if (hasRequiredVue_cjs) { return vue_cjs; }
		hasRequiredVue_cjs = 1;
		(function (exports) {

			Object.defineProperty(exports, '__esModule', { value: true });

			var compilerDom = require$$0;
			var runtimeDom = require$$1;
			var shared = require$$2;

			function _interopNamespaceDefault(e) {
			  var n = Object.create(null);
			  if (e) {
			    for (var k in e) {
			      n[k] = e[k];
			    }
			  }
			  n.default = e;
			  return Object.freeze(n);
			}

			var runtimeDom__namespace = /*#__PURE__*/_interopNamespaceDefault(runtimeDom);

			var compileCache = /* @__PURE__ */ Object.create(null);
			function compileToFunction(template, options) {
			  if (!shared.isString(template)) {
			    if (template.nodeType) {
			      template = template.innerHTML;
			    } else {
			      runtimeDom.warn("invalid template option: ", template);
			      return shared.NOOP;
			    }
			  }
			  var key = template;
			  var cached = compileCache[key];
			  if (cached) {
			    return cached;
			  }
			  if (template[0] === "#") {
			    var el = document.querySelector(template);
			    if (!el) {
			      runtimeDom.warn(("Template element not found or is empty: " + template));
			    }
			    template = el ? el.innerHTML : "";
			  }
			  var opts = shared.extend(
			    {
			      hoistStatic: true,
			      onError: onError ,
			      onWarn: function (e) { return onError(e, true); } 
			    },
			    options
			  );
			  if (!opts.isCustomElement && typeof customElements !== "undefined") {
			    opts.isCustomElement = function (tag) { return !!customElements.get(tag); };
			  }
			  var ref = compilerDom.compile(template, opts);
			  var code = ref.code;
			  function onError(err, asWarning) {
			    if ( asWarning === void 0 ) asWarning = false;

			    var message = asWarning ? err.message : ("Template compilation error: " + (err.message));
			    var codeFrame = err.loc && shared.generateCodeFrame(
			      template,
			      err.loc.start.offset,
			      err.loc.end.offset
			    );
			    runtimeDom.warn(codeFrame ? (message + "\n" + codeFrame) : message);
			  }
			  var render = new Function("Vue", code)(runtimeDom__namespace);
			  render._rc = true;
			  return compileCache[key] = render;
			}
			runtimeDom.registerRuntimeCompiler(compileToFunction);

			exports.compile = compileToFunction;
			Object.keys(runtimeDom).forEach(function (k) {
			  if (k !== 'default' && !exports.hasOwnProperty(k)) { exports[k] = runtimeDom[k]; }
			}); 
		} (vue_cjs));
		return vue_cjs;
	}

	if (process.env.NODE_ENV === 'production') {
	  vue.exports = requireVue_cjs_prod();
	} else {
	  vue.exports = requireVue_cjs();
	}

	var vueExports = vue.exports;

	// DOM helper functions

	// public
	function selectAll(selector, parent) {
	  if ( parent === void 0 ) parent = document;

	  if (typeof selector === 'string') {
	    return Array.from(parent.querySelectorAll(selector));
	  } else if (selector instanceof Element) {
	    return [selector];
	  } else if (selector instanceof NodeList) {
	    return Array.from(selector);
	  } else if (selector instanceof Array) {
	    return selector;
	  }
	  return [];
	}

	// SETUP
	function create(className) {
		var el = document.createElement("div");
		el.className = "scrollama__debug-step " + className;
		el.style.position = "fixed";
		el.style.left = "0";
		el.style.width = "100%";
		el.style.zIndex = "9999";
		el.style.borderTop = "2px solid black";
		el.style.borderBottom = "2px solid black";

		var p = document.createElement("p");
		p.style.position = "absolute";
		p.style.left = "0";
		p.style.height = "1px";
		p.style.width = "100%";
		p.style.borderTop = "1px dashed black";

		el.appendChild(p);
		document.body.appendChild(el);
		return el;
	}

	// UPDATE
	function update(ref) {
		var id = ref.id;
		var step = ref.step;
		var marginTop = ref.marginTop;

		var index = step.index;
		var height = step.height;
		var className = "scrollama__debug-step--" + id + "-" + index;
		var el = document.querySelector(("." + className));
		if (!el) { el = create(className); }

		el.style.top = (marginTop * -1) + "px";
		el.style.height = height + "px";
		el.querySelector("p").style.top = (height / 2) + "px";
	}

	function generateId() {
	    var alphabet = "abcdefghijklmnopqrstuvwxyz";
	    var date = Date.now();
	    var result = [];
	    for (var i = 0; i < 6; i += 1) {
	      var char = alphabet[Math.floor(Math.random() * alphabet.length)];
	      result.push(char);
	    }
	    return ("" + (result.join("")) + date);
	  }

	function err$1(msg) {
		console.error(("scrollama error: " + msg));
	}

	function getIndex(node) {
		return +node.getAttribute("data-scrollama-index");
	}

	function createProgressThreshold(height, threshold) {
	    var count = Math.ceil(height / threshold);
	    var t = [];
	    var ratio = 1 / count;
	    for (var i = 0; i < count + 1; i += 1) {
	      t.push(i * ratio);
	    }
	    return t;
	  }

	function parseOffset(x) {
		if (typeof x === "string" && x.indexOf("px") > 0) {
			var v = +x.replace("px", "");
			if (!isNaN(v)) { return { format: "pixels", value: v }; }
			else {
				err("offset value must be in 'px' format. Fallback to 0.5.");
				return { format: "percent", value: 0.5 };
			}
		} else if (typeof x === "number" || !isNaN(+x)) {
			if (x > 1) { err("offset value is greater than 1. Fallback to 1."); }
			if (x < 0) { err("offset value is lower than 0. Fallback to 0."); }
			return { format: "percent", value: Math.min(Math.max(0, x), 1) };
		}
		return null;
	}

	function indexSteps(steps) {
		steps.forEach(function (step) { return step.node.setAttribute("data-scrollama-index", step.index); }
		);
	}

	function getOffsetTop(node) {
	  var ref = node.getBoundingClientRect();
	  var top = ref.top;
	  var scrollTop = window.pageYOffset;
	  var clientTop = document.body.clientTop || 0;
	  return top + scrollTop - clientTop;
	}

	var currentScrollY;
	var comparisonScrollY;
	var direction;

	function onScroll(container) {
		var scrollTop = container ? container.scrollTop : window.pageYOffset;

		if (currentScrollY === scrollTop) { return; }
		currentScrollY = scrollTop;
		if (currentScrollY > comparisonScrollY) { direction = "down"; }
		else if (currentScrollY < comparisonScrollY) { direction = "up"; }
		comparisonScrollY = currentScrollY;
	}

	function setupScroll(container) {
		currentScrollY = 0;
		comparisonScrollY = 0;
		document.addEventListener("scroll", function () { return onScroll(container); });
	}

	function scrollama() {
		var cb = {};

		var id = generateId();
		var steps = [];
		var globalOffset;
		var containerElement;
		var rootElement;

		var progressThreshold = 0;

		var isEnabled = false;
		var isProgress = false;
		var isDebug = false;
		var isTriggerOnce = false;

		var exclude = [];

		/* HELPERS */
		function reset() {
			cb = {
				stepEnter: function () { },
				stepExit: function () { },
				stepProgress: function () { },
			};
			exclude = [];
		}

		function handleEnable(shouldEnable) {
			if (shouldEnable && !isEnabled) { updateObservers(); }
			if (!shouldEnable && isEnabled) { disconnectObservers(); }
			isEnabled = shouldEnable;
		}

		/* NOTIFY CALLBACKS */
		function notifyProgress(element, progress) {
			var index = getIndex(element);
			var step = steps[index];
			if (progress !== undefined) { step.progress = progress; }
			var response = { element: element, index: index, progress: progress, direction: direction };
			if (step.state === "enter") { cb.stepProgress(response); }
		}

		function notifyStepEnter(element, check) {

			var index = getIndex(element);
			var step = steps[index];
			var response = { element: element, index: index, direction: direction };

			step.direction = direction;
			step.state = "enter";

			// if (isPreserveOrder && check && direction !== "up")
			//   notifyOthers(index, "above");
			// if (isPreserveOrder && check && direction === "up")
			//   notifyOthers(index, "below");

			if (!exclude[index]) { cb.stepEnter(response); }
			if (isTriggerOnce) { exclude[index] = true; }
		}

		function notifyStepExit(element, check) {

			var index = getIndex(element);
			var step = steps[index];

			if (!step.state) { return false; }

			var response = { element: element, index: index, direction: direction };

			if (isProgress) {
				if (direction === "down" && step.progress < 1) { notifyProgress(element, 1); }
				else if (direction === "up" && step.progress > 0)
					{ notifyProgress(element, 0); }
			}

			step.direction = direction;
			step.state = "exit";

			cb.stepExit(response);
		}

		/* OBSERVERS - HANDLING */
		function resizeStep(ref) {
			var entry = ref[0];

			var index = getIndex(entry.target);
			var step = steps[index];
			var h = entry.target.offsetHeight;
			if (h !== step.height) {
				step.height = h;
				disconnectObserver(step);
				updateStepObserver(step);
				updateResizeObserver(step);
			}
		}

		function intersectStep(ref) {
			var entry = ref[0];

			onScroll(containerElement);

			var isIntersecting = entry.isIntersecting;
			var target = entry.target;
			if (isIntersecting) { notifyStepEnter(target); }
			else { notifyStepExit(target); }
		}

		function intersectProgress(ref) {
			var entry = ref[0];

			var index = getIndex(entry.target);
			var step = steps[index];
			var isIntersecting = entry.isIntersecting;
			var intersectionRatio = entry.intersectionRatio;
			var target = entry.target;
			if (isIntersecting && step.state === "enter")
				{ notifyProgress(target, intersectionRatio); }
		}

		/*  OBSERVERS - CREATION */
		function disconnectObserver(ref) {
			var observers = ref.observers;

			Object.keys(observers).map(function (name) {
				observers[name].disconnect();
			});
		}

		function disconnectObservers() {
			steps.forEach(disconnectObserver);
		}

		function updateResizeObserver(step) {
			var observer = new ResizeObserver(resizeStep);
			observer.observe(step.node);
			step.observers.resize = observer;
		}

		function updateResizeObservers() {
			steps.forEach(updateResizeObserver);
		}

		function updateStepObserver(step) {
			var h = window.innerHeight;
			var off = step.offset || globalOffset;
			var factor = off.format === "pixels" ? 1 : h;
			var offset = off.value * factor;
			var marginTop = step.height / 2 - offset;
			var marginBottom = step.height / 2 - (h - offset);
			var rootMargin = marginTop + "px 0px " + marginBottom + "px 0px";
			var root = rootElement;

			var threshold = 0.5;
			var options = { rootMargin: rootMargin, threshold: threshold, root: root };
			var observer = new IntersectionObserver(intersectStep, options);

			observer.observe(step.node);
			step.observers.step = observer;

			if (isDebug) { update({ id: id, step: step, marginTop: marginTop, marginBottom: marginBottom }); }
		}

		function updateStepObservers() {
			steps.forEach(updateStepObserver);
		}

		function updateProgressObserver(step) {
			var h = window.innerHeight;
			var off = step.offset || globalOffset;
			var factor = off.format === "pixels" ? 1 : h;
			var offset = off.value * factor;
			var marginTop = -offset + step.height;
			var marginBottom = offset - h;
			var rootMargin = marginTop + "px 0px " + marginBottom + "px 0px";

			var threshold = createProgressThreshold(step.height, progressThreshold);
			var options = { rootMargin: rootMargin, threshold: threshold };
			var observer = new IntersectionObserver(intersectProgress, options);

			observer.observe(step.node);
			step.observers.progress = observer;
		}

		function updateProgressObservers() {
			steps.forEach(updateProgressObserver);
		}

		function updateObservers() {
			disconnectObservers();
			updateResizeObservers();
			updateStepObservers();
			if (isProgress) { updateProgressObservers(); }
		}

		/* SETUP */
		var S = {};

		S.setup = function (ref) {
			var step = ref.step;
			var parent = ref.parent;
			var offset = ref.offset; if ( offset === void 0 ) offset = 0.5;
			var threshold = ref.threshold; if ( threshold === void 0 ) threshold = 4;
			var progress = ref.progress; if ( progress === void 0 ) progress = false;
			var once = ref.once; if ( once === void 0 ) once = false;
			var debug = ref.debug; if ( debug === void 0 ) debug = false;
			var container = ref.container; if ( container === void 0 ) container = undefined;
			var root = ref.root; if ( root === void 0 ) root = null;


			setupScroll(container);

			steps = selectAll(step, parent).map(function (node, index) { return ({
				index: index,
				direction: undefined,
				height: node.offsetHeight,
				node: node,
				observers: {},
				offset: parseOffset(node.dataset.offset),
				top: getOffsetTop(node),
				progress: 0,
				state: undefined,
			}); });

			if (!steps.length) {
				err$1("no step elements");
				return S;
			}

			isProgress = progress;
			isTriggerOnce = once;
			isDebug = debug;
			progressThreshold = Math.max(1, +threshold);
			globalOffset = parseOffset(offset);
			containerElement = container;
			rootElement = root;

			reset();
			indexSteps(steps);
			handleEnable(true);
			return S;
		};

		S.enable = function () {
			handleEnable(true);
			return S;
		};

		S.disable = function () {
			handleEnable(false);
			return S;
		};

		S.destroy = function () {
			handleEnable(false);
			reset();
			return S;
		};

		S.resize = function () {
			updateObservers();
			return S;
		};

		S.offset = function (x) {
			if (x === null || x === undefined) { return globalOffset.value; }
			globalOffset = parseOffset(x);
			updateObservers();
			return S;
		};

		S.onStepEnter = function (f) {
			if (typeof f === "function") { cb.stepEnter = f; }
			else { err$1("onStepEnter requires a function"); }
			return S;
		};

		S.onStepExit = function (f) {
			if (typeof f === "function") { cb.stepExit = f; }
			else { err$1("onStepExit requires a function"); }
			return S;
		};

		S.onStepProgress = function (f) {
			if (typeof f === "function") { cb.stepProgress = f; }
			else { err$1("onStepProgress requires a function"); }
			return S;
		};
		return S;
	}

	var script = {
	  __name: 'ScroLlama',
	  setup: function setup(__props, ref$1) {
	var emit = ref$1.emit;

	/* eslint-disable */



	var rootElement = vueExports.ref(null);
	var _scroller = vueExports.ref(null);
	var attrs = new Proxy({}, { 
	  get: function (_, prop) { return rootElement.value.getAttribute(prop); },
	  has: function (_, prop) { return rootElement.value.hasAttribute(prop); },
	});

	vueExports.onMounted(function () {
	  _scroller.value = scrollama();
	  setup();
	});

	vueExports.onBeforeUnmount(function () {
	  if (_scroller.value) {
	    _scroller.value.destroy();
	  }
	  window.removeEventListener('resize', handleResize);
	});

	vueExports.watchEffect(function () {
	  setup();
	});

	function setup() {
	  if (_scroller.value) {
	    _scroller.value.destroy();
	  }

	  if(rootElement.value) {
	    var opts = Object.assign({}, {step: Array.from(rootElement.value.children),
	      progress: 'step-progress' in attrs},
	      attrs);

	    _scroller.value = scrollama().setup(opts)
	      .onStepProgress(function (resp) {
	        emit('step-progress', resp);
	      })
	      .onStepEnter(function (resp) {
	        emit('step-enter', resp);
	      })
	      .onStepExit(function (resp) {
	        emit('step-exit', resp);
	      });

	    window.addEventListener('resize', handleResize);
	  }
	}

	function handleResize() {
	  if (_scroller.value) {
	    _scroller.value.resize();
	  }
	}

	return function (_ctx, _cache) {
	  return (vueExports.openBlock(), vueExports.createElementBlock("div", {
	    class: "scrollama__steps",
	    ref_key: "rootElement",
	    ref: rootElement
	  }, [
	    vueExports.renderSlot(_ctx.$slots, "default")
	  ], 512 /* NEED_PATCH */))
	}
	}

	};

	script.__file = "src/components/ScroLlama.vue";

	exports.default = script;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
