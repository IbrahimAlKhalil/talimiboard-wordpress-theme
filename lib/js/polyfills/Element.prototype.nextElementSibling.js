'use strict';(function(a){a.forEach(function(b){b.hasOwnProperty('nextElementSibling')||Object.defineProperty(b,'nextElementSibling',{configurable:!0,enumerable:!0,get:function get(){for(var c=this;c=c.nextSibling;)if(1===c.nodeType)return c;return null},set:void 0})})})([Element.prototype,CharacterData.prototype]);