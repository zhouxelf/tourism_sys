webpackJsonp([12],{241:function(a,t,e){var n=e(242);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e(9)("1299e544",n,!0,{})},242:function(a,t,e){(a.exports=e(2)(!1)).push([a.i,".card-container[data-v-1f1583da]{overflow:hidden}.area-title[data-v-1f1583da]{font-size:18px;font-weight:600}.spot-content>h3[data-v-1f1583da]{text-align:center;margin-bottom:50px}.card-panel[data-v-1f1583da]{margin-top:20px;float:left}.card-panel-left[data-v-1f1583da]{width:25%}.card-panel-right[data-v-1f1583da]{width:70%;margin-left:4%}",""])},243:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{areas:[],areaSpot:[],spot:{name:"",content:"",created_at:""}}},methods:{handleChange:function(a){var t=this;if(1===a.length)return t.spot.name="",t.spot.content="当前旅游地域暂无景点",void(t.spot.created_at="");var e={id:a.pop()};axios.get("/front/spot/get",{params:e}).then(function(a){0===a.data.code?(t.spot.name=a.data.result.name,t.spot.content=a.data.result.content,t.spot.created_at=a.data.result.created_at):t.$message({message:a.data.msg,type:"warning"})})},formatAreaSpot:function(a){var t=[];return a.areas.forEach(function(e){var n=[];a.spots.forEach(function(a){e.id===a.area_id&&n.push({value:a.id,label:a.name})},n),n.length>0?t.push({value:e.id,label:e.name,children:n}):t.push({value:e.id,label:e.name})},t),t},getData:function(){var a=this;axios.get("/front/area/lists").then(function(t){t?a.areas=a.formatAreaSpot(t.data):console.log(t.data.msg)})}},mounted:function(){var a=Number.parseInt(this.$route.query.id);if(a>0){var t=new Array;t[0]=0,t.push(a),this.handleChange(t)}this.getData()}}},244:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card-container"},[e("el-card",{staticClass:"card-panel card-panel-left"},[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"area-title"},[a._v("请选择旅游地域")])]),a._v(" "),e("div",[e("el-cascader",{attrs:{options:a.areas,filterable:""},on:{change:a.handleChange},model:{value:a.areaSpot,callback:function(t){a.areaSpot=t},expression:"areaSpot"}})],1)]),a._v(" "),e("el-card",{staticClass:"card-panel card-panel-right",attrs:{data:a.spot}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"area-title"},[a._v("景点介绍")])]),a._v(" "),e("div",{staticClass:"spot-content"},[e("h3",[a._v(a._s(a.spot.name))]),a._v(" "),e("p",{domProps:{innerHTML:a._s(a.spot.content)}})])])],1)},staticRenderFns:[]}},275:function(a,t,e){var n=e(5)(e(243),e(244),!1,function(a){e(241)},"data-v-1f1583da",null);a.exports=n.exports}});