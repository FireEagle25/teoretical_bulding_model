webpackJsonp([3],{"5A/h":function(t,e,a){"use strict";var s=a("qPPZ");e.a={components:{CalculatorC:s.a}}},EnZ0:function(t,e,a){var s=a("GVg4");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("026c98bc",s,!1,{sourceMap:!1})},GVg4:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"button[data-v-93022214]{margin:15px}@media (max-width:760px){label[data-v-93022214]{width:100%}}img[data-v-93022214]{margin-bottom:10px}",""])},LDMI:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center",attrs:{id:"card"}},[a("div",{},[a("h5",[t._v("Результат")]),a("table",[t.show_c?a("tr",[a("td",[t._v("Удельное сцепление, c")]),a("td",{staticClass:"res"},[t._v(t._s(this.res.c)+" кПа")])]):t._e(),t.show_c?t._e():a("tr",[a("td",[t._v("Угол внутреннего трения, φ")]),a("td",{staticClass:"res"},[t._v(t._s(this.res.fi)+"°")])]),a("tr",[a("td",[t._v("Предельная нагрузка, F")]),a("td",{staticClass:"res"},[t._v(t._s(Math.round(this.res.f))+"кН")])]),t.material?a("tr",[a("td",[t._v("Грунт")]),a("td",{staticClass:"res"},[t._v(t._s(this.material))])]):t._e()])])])};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},MygK:function(t,e,a){"use strict";e.a={name:"CalcResult",props:["res","show_c"],computed:{material:function(){return this.res.c>=1&&this.res.c<=10&&this.res.fi>=23&&this.res.fi<=43?"Пески":this.res.c>=9&&this.res.c<=21&&this.res.fi>=18&&this.res.fi<=30?"Супеси":this.res.c>=15&&this.res.c<=47&&this.res.fi>=17&&this.res.fi<=26?"Суглинки":this.res.c>=29&&this.res.c<=81&&this.res.fi>=7&&this.res.fi<=21?"Глины":null}}}},N1Es:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("5A/h"),r=a("Nt4M"),i=a("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="pages/calc/clacc.vue",e.default=i.exports},Nt4M:function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"base-container"},[e("div",{staticClass:"container"},[e("calculator-c")],1)])};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},PDZ9:function(t,e,a){var s=a("RXNO");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("7db8f19e",s,!1,{sourceMap:!1})},RXNO:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"td[data-v-7550f526]{text-align:left}.res[data-v-7550f526]{text-align:right;font-size:34px}h5[data-v-7550f526]{font-weight:700;font-size:40px}table[data-v-7550f526]{width:100%;font-size:25px}a[data-v-7550f526]{margin:4vh}",""])},SlMO:function(t,e,a){"use strict";var s=a("MygK"),r=a("LDMI"),i=!1;var n=function(t){i||a("PDZ9")},o=a("VU/8")(s.a,r.a,!1,n,"data-v-7550f526",null);o.options.__file="components/CalcResult.vue",e.a=o.exports},qPPZ:function(t,e,a){"use strict";var s=a("uqLd"),r=a("utE/"),i=!1;var n=function(t){i||a("EnZ0")},o=a("VU/8")(s.a,r.a,!1,n,"data-v-93022214",null);o.options.__file="components/CalculatorC.vue",e.a=o.exports},uqLd:function(t,e,a){"use strict";var s=a("SlMO");e.a={name:"calculator",components:{CalcResult:s.a},data:function(){return{F:2794.35,D:10,n:1,gamma:11,HH:10,dd:3.33,k:1.2,c:20,fi_range:[5,50],res:!1}},computed:{results:function(){for(var t=[],e=this.fi_range[0];e<this.fi_range[1];)t.push({f:this.calc(e,this.c),c:this.c,fi:e}),e+=1;return t},closest_result:function(){var t=this.results,e=t[0],a=this;return t.forEach(function(t,s,r){Math.abs(Math.abs(e.f)-a.F)>Math.abs(Math.abs(t.f)-a.F)&&t.f>0&&(console.log(e.f,t.f),e=t)}),e}},watch:{c:function(t){(t<=0&&""!=t||"0"==t)&&(alert("Задайте удельное сцепление отличное от нуля "),this.c=20)}},methods:{calc:function(t,e){var a=t*(Math.PI/180),s=(1+Math.sin(a))/(1-Math.sin(a)),r=-1*this.n*this.gamma*this.HH*Math.PI*Math.pow(this.D,3)/(8*this.dd*this.k)*(this.gamma*this.HH/(e*Math.pow(Math.tan(a),-1)*(s*Math.pow(Math.E,Math.PI*Math.tan(a))-1))-1);return Math.round(r)}}}},"utE/":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",staticStyle:{padding:"2px"}},[t._m(0),a("div",{staticClass:"col-md-6"},[a("div",[a("H3",{staticStyle:{"font-weight":"bold","margin-bottom":"2vh"}},[t._v("Расчет")]),a("form",{staticClass:"text-center"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"F"}},[t._v("Введите горизонтальную нагрузку, F, кН")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.F,expression:"F",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"F",type:"number"},domProps:{value:t.F},on:{input:function(e){e.target.composing||(t.F=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"D"}},[t._v("Введите наружный диаметр оболочки, D, м")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.D,expression:"D",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"D",type:"number"},domProps:{value:t.D},on:{input:function(e){e.target.composing||(t.D=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"n"}},[t._v("Введите число оболочек в ряду, n, шт")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.n,expression:"n",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"n",type:"number"},domProps:{value:t.n},on:{input:function(e){e.target.composing||(t.n=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"gamma"}},[t._v("Введите удельный вес, γ, кН/м^3")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.gamma,expression:"gamma",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"gamma",type:"number"},domProps:{value:t.gamma},on:{input:function(e){e.target.composing||(t.gamma=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"HH"}},[t._v("Введите высоту оболочки, H, м")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.HH,expression:"HH",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"HH",type:"number"},domProps:{value:t.HH},on:{input:function(e){e.target.composing||(t.HH=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"dd"}},[t._v("Введите плечо приложения нагрузки, d, м")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.dd,expression:"dd",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"dd",type:"number"},domProps:{value:t.dd},on:{input:function(e){e.target.composing||(t.dd=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"k"}},[t._v("Введите коэффициент запаса, k")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.k,expression:"k",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"k",type:"number"},domProps:{value:t.k},on:{input:function(e){e.target.composing||(t.k=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"c"}},[t._v("Введите удельное сцепление, с, кПа")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.c,expression:"c",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"c",type:"number"},domProps:{value:t.c},on:{input:function(e){e.target.composing||(t.c=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),a("button",{staticClass:"btn btn-success",on:{click:function(e){t.res=t.closest_result}}},[t._v("Рассчитать")])],1)]),a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"rounded float-left",staticStyle:{"background-repeat":"no-repeat","background-size":"cover","max-width":"100%"},attrs:{src:"/teoretical_bulding_model/images/cover.jpg"}}),a("img",{staticClass:"rounded float-left",staticStyle:{"background-repeat":"no-repeat","background-size":"cover","max-width":"100%"},attrs:{src:"/teoretical_bulding_model/images/formulae.jpg"}}),t.res?a("calc-result",{attrs:{res:this.res,show_c:!1},on:{recalc:function(e){t.res=null}}}):t._e()],1)])};s._withStripped=!0;var r={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{margin:"10px",padding:"4px","font-weight":"bold","font-size":"16px","background-color":"white","border-radius":"10px",border:"1px solid grey","max-width":"100%","text-align":"justify"}},[this._v("      В данном разделе определяется предельная нагрузка, приложенная к оголовку сооружения, которую сооружение воспринимает без потери несущей способности основания."),e("br"),this._v("\n    Для того, чтобы определить предельную нагрузку задайтесь основными размерами оболочки (наружный диаметр –D, толщина стенки – t, высота конструкции – h , плечо равнодействующей нагрузки – d) , а также физико-механическими характеристиками грунта основания (угол внутреннего трения – φ, удельное сцепление – с).\n    Промежуточные значения могут быть определены интерполяцией.")])}]};e.a=r}});