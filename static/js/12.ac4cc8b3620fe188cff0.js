webpackJsonp([12],{"15Lz":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mui-slider"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showIs,expression:"showIs"}],staticClass:"top"},[e._v("推荐个性定制，点看看！")]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showIs,expression:"showIs"}],staticClass:"box"},[a("ul",e._l(e.testItems,function(t,i){return a("li",{class:{changeS:t.sets},on:{tap:function(a){return e.change(t,i)}}},[a("div",{staticClass:"test"},[e._v(e._s(t.name))])])}),0)])]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showIs,expression:"!showIs"}],staticClass:"tip",on:{tap:e.goIn}},[e._v("进入")])]),a("div",{staticClass:"mui-slider",attrs:{id:"slider"},on:{slide:e.changeTab}},[a("div",{staticClass:"mui-slider-group mui-slider-loop"},[a("div",{staticClass:"mui-slider-item mui-slider-item-duplicate"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:e.logo2}})])]),e._l(e.items,function(e){return a("div",{staticClass:"mui-slider-item"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:e.src}})])])}),a("div",{staticClass:"mui-slider-item mui-slider-item-duplicate"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:e.logo1}})])])],2),a("div",{staticClass:"mui-slider-indicator"},e._l(e.items,function(e,t){return a("div",{staticClass:"mui-indicator",class:{"mui-active ":0===t}})}),0)])],1)},s=[],r={render:i,staticRenderFns:s};t.a=r},"72UZ":function(e,t,a){"use strict";var i=a("BUCX"),s=a.n(i),r=a("S1gE"),o=a.n(r),n=a("omgE"),d=a.n(n);t.a={data:function(){return{items:[{src:o.a},{src:d.a}],logo1:o.a,logo2:d.a,testItems:[{name:"男",sets:!1,id:"m"},{name:"女",sets:!1,id:"w"},{name:"购物比较多",sets:!1,id:"buy"},{name:"住酒店多",sets:!1,id:"hotal"}],setindex:-1,showIs:!0}},mounted:function(){s()(".mui-slider").slider({interval:0})},methods:{change:function(e,t){e.sets=!e.sets},goIn:function(){var e=this,t="";this.testItems.filter(function(e,t){return e.sets}).forEach(function(e,a){t+=e.id+","});t?(console.log(t.substring(0,t.length-1)),MtaH5&&MtaH5.clickStat("1003",{1004:t.substring(0,t.length-1)}),localStorage.setItem("firstIn","first"),e.$router.push("/home")):s.a.confirm("还没设置标签？","商城",["跳过吧","去设置"],function(t){if(0==t.index)e.$router.push("/home");else{s()(".mui-slider").slider().gotoItem(0)}})},changeTab:function(e){console.log(e.detail.slideNumber),this.showIs=!this.showIs}}}},L36k:function(e,t,a){"use strict";function i(e){a("Nx4/")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("72UZ"),r=a("15Lz"),o=a("VU/8"),n=i,d=o(s.a,r.a,!1,n,"data-v-a0eea950",null);t.default=d.exports},"Nx4/":function(e,t,a){var i=a("ysf4");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("94cedd98",i,!0,{})},S1gE:function(e,t,a){e.exports=a.p+"static/img/item1.f2337d8.jpg"},omgE:function(e,t,a){e.exports=a.p+"static/img/item2.01cb85c.jpg"},ysf4:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".mui-slider-indicator .mui-active.mui-indicator[data-v-a0eea950]{background:#f0ad4e}.mui-slider[data-v-a0eea950]{position:absolute;top:0;bottom:0}.mui-slider-group[data-v-a0eea950],.mui-slider-item[data-v-a0eea950],.mui-slider-item a[data-v-a0eea950],.mui-slider-item a img[data-v-a0eea950]{height:100%}.tip[data-v-a0eea950]{height:2rem;background:#41a961;line-height:2rem;bottom:5rem;color:#fff;border-radius:.9rem}.box[data-v-a0eea950],.tip[data-v-a0eea950]{z-index:99;width:4rem;text-align:center;position:absolute;left:50%;margin-left:-2rem}.box[data-v-a0eea950]{height:11.5rem;top:5rem}.top[data-v-a0eea950]{z-index:99;width:8rem;height:2rem;text-align:center;position:absolute;top:.5rem;left:50%;margin-left:-4rem;line-height:2rem;background:rgba(240,173,78,.8);color:#9e2222;font-size:12px}.test[data-v-a0eea950]{width:4rem;height:2.5rem;line-height:2.5rem;background:rgba(77,197,170,.8);color:#555;margin-bottom:.4rem;font-size:.6rem}.changeS[data-v-a0eea950]{background:rgba(243,203,8,.98)}.changeS .test[data-v-a0eea950]{background:rgba(243,203,8,.98);color:#fff}.fade-enter-active[data-v-a0eea950],.fade-leave-active[data-v-a0eea950]{-webkit-transition:all 3s ease;transition:all 3s ease;opacity:1}.fade-enter[data-v-a0eea950],.fade-leave-to[data-v-a0eea950]{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])}});