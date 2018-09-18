webpackJsonp([0],{"NX/y":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("3cXf"),i=e.n(s),r={name:"volume-measure",data:function(){return{customTr:0,resultList:[],activeNames1:["1"],activeNames2:[],activeNames3:["1"],activeNames4:[],xlsxData:null,trList:[],selectValue:"",form:{},paramHeight:0,paramList:[],autoMeasure:"",maxVolume:"",fileName:"",sheet:"",leftTr:"",rightTr:""}},watch:{customTr:function(t){t==parseInt(t)&&(this.selectValue=this.$dataTransform.numToTr(t)),console.log("parseInt",parseInt(t));var a=null,e=null;t<0?(a=parseInt(t)-1,e=parseInt(t)):(a=parseInt(t),e=parseInt(t)+1);var s=this.$dataTransform.numToTr(a),i=this.$dataTransform.numToTr(e);console.log("parseInt",s,i),this.leftTr=s,this.rightTr=i},paramHeight:function(t){parseFloat(t)>this.maxGauge&&this.$message({message:"输入的液位大于数据最大值",type:"warning"}),this.paramList=this.getCalParam()},resultList:function(t){localStorage.setItem("resultList",i()(t))}},computed:{maxGauge:function(){return parseFloat(this.xlsxData[this.xlsxData.length-1].GAUGE)},manualMeasure:function(){if(0==this.paramList.length)return"";if(this.customTr!=parseInt(this.customTr)){var t=this.paramList[0][this.selectValue],a=this.paramList[1][this.selectValue];console.log(t,a);var e=null;return e=this.customTr<0?this.customTr-parseInt(this.customTr)+1:this.customTr-parseInt(this.customTr),t=(this.paramList[0][this.rightTr]-this.paramList[0][this.leftTr])/1*e+parseFloat(this.paramList[0][this.leftTr]),a=(this.paramList[1][this.rightTr]-this.paramList[1][this.leftTr])/1*e+parseFloat(this.paramList[1][this.leftTr]),console.log(t,a),console.log("使用自定义tr"),(a-t)*(this.paramHeight-parseFloat(this.paramList[0].GAUGE))/(parseFloat(this.paramList[1].GAUGE)-parseFloat(this.paramList[0].GAUGE))+parseFloat(t)}return this.customTr==parseInt(this.customTr)?(console.log("使用表格的tr"),(this.paramList[1][this.selectValue]-this.paramList[0][this.selectValue])*(this.paramHeight-parseFloat(this.paramList[0].GAUGE))/(parseFloat(this.paramList[1].GAUGE)-parseFloat(this.paramList[0].GAUGE))+parseFloat(this.paramList[0][this.selectValue])):void 0},errorMeasure:function(){return""==this.manualMeasure||""==this.maxVolume?"":parseInt((this.manualMeasure-parseFloat(this.autoMeasure))/this.maxVolume*1e4)/100+"%"}},mounted:function(){this.$store.commit("changeTitle","舱容测量"),this.resultList=localStorage.resultList&&"[]"!=localStorage.resultList?JSON.parse(localStorage.resultList):[]},methods:{setXlsxInfo:function(t){this.fileName=t.fileName,this.sheet=t.sheet},saveResult:function(){var t={};for(var a in t["文件名"]=this.fileName,t["舱室"]=this.sheet,t["纵倾"]=this.selectValue,t["液位"]=this.paramHeight,t["遥测舱容"]=this.autoMeasure,t["手测舱容"]=this.manualMeasure,t["误差"]=this.errorMeasure,t["测量时间"]=this.$common.dateFormatter((new Date).getTime()),t)if(!this.$common.verify(a,t[a],"require"))return;this.resultList.unshift(t),this.resultList.length>productConfig.maxResultList&&this.resultList.pop(),this.$message({message:"保存成功",type:"success"})},setXlsxData:function(t){this.xlsxData=t,this.maxVolume=this.getMaxVolume(t),this.trList=this.getTrList(t),this.selectValue=this.trList[0],this.calculate()},trChange:function(t){},calculate:function(t){var a=this.getCalParam();this.paramList=a,a.length},getTrList:function(t){var a=[],e=t[0];for(var s in e)"GAUGE"!=s&&"ULL"!=s&&a.push(s);return a},getMaxVolume:function(t){var a=t[t.length-1],e=0;for(var s in a)"GAUGE"!=s&&"ULL"!=s&&parseFloat(a[s])>e&&(e=parseFloat(a[s]));return e},getCalParam:function(){var t=[];if(!this.xlsxData)return this.$message.info("暂无数据，请上传excel！"),t;for(var a=0;a<this.xlsxData.length;a++)if(parseFloat(this.xlsxData[a].GAUGE)>this.paramHeight){t.push(this.xlsxData[a-1]),t.push(this.xlsxData[a]);break}return t}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"volume-measure"},[e("div",{staticClass:"page_panel mgb"},[e("el-collapse",{model:{value:t.activeNames1,callback:function(a){t.activeNames1=a},expression:"activeNames1"}},[e("el-collapse-item",{attrs:{title:"数据选择",name:"1"}},[e("xlsx-analyze",{on:{xlsxData:function(a){t.setXlsxData(a)},xlsxInfo:t.setXlsxInfo}})],1)],1)],1),t._v(" "),e("div",{staticClass:"page_panel mgb"},[e("el-collapse",{model:{value:t.activeNames2,callback:function(a){t.activeNames2=a},expression:"activeNames2"}},[e("el-collapse-item",{attrs:{title:"数据列表",name:"1"}},[e("xlsx-table",{attrs:{data:t.xlsxData}})],1)],1)],1),t._v(" "),e("div",{staticClass:"page_panel mgb"},[e("el-collapse",{model:{value:t.activeNames3,callback:function(a){t.activeNames3=a},expression:"activeNames3"}},[e("el-collapse-item",{attrs:{title:"参数",name:"1"}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[t.trList?e("el-form-item",{attrs:{label:"纵倾"}},[t._v("\n            tr=\n            "),e("el-input",{staticStyle:{width:"95px"},attrs:{type:"number",step:"0.1"},model:{value:t.customTr,callback:function(a){t.customTr=a},expression:"customTr"}})],1):t._e(),t._v(" "),e("el-form-item",{attrs:{label:"液位"}},[e("el-input",{staticClass:"input_normal",attrs:{type:"number"},model:{value:t.paramHeight,callback:function(a){t.paramHeight=a},expression:"paramHeight"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"遥测舱容"}},[e("el-input",{staticClass:"input_normal",attrs:{type:"number"},model:{value:t.autoMeasure,callback:function(a){t.autoMeasure=a},expression:"autoMeasure"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"手测舱容"}},[t._v("\n            "+t._s(t.manualMeasure)+"\n          ")]),t._v(" "),e("el-form-item",{attrs:{label:"误差"}},[t._v("\n            "+t._s(t.errorMeasure)+"\n          ")])],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"float_panel_br_1"},[e("el-button",{attrs:{type:"primary",circle:""},on:{click:t.saveResult}},[e("i",{staticClass:"iconfont icon-qianyuejilu"})])],1)])},staticRenderFns:[]};var n=e("46Yf")(r,l,!1,function(t){e("m4Nq"),e("kCqx")},"data-v-342ee421",null);a.default=n.exports},kCqx:function(t,a){},m4Nq:function(t,a){}});