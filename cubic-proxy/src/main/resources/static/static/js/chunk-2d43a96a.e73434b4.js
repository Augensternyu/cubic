(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d43a96a"],{"20d6":function(t,e,a){"use strict";var i=a("5ca1"),s=a("0a49")(6),n="findIndex",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},"2f21":function(t,e,a){"use strict";var i=a("79e5");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,e,a){"use strict";var i=a("5ca1"),s=a("d8e8"),n=a("4bf8"),o=a("79e5"),l=[].sort,r=[1,2,3];i(i.P+i.F*(o((function(){r.sort(void 0)}))||!o((function(){r.sort(null)}))||!a("2f21")(l)),"Array",{sort:function(t){return void 0===t?l.call(n(this)):l.call(n(this),s(t))}})},9406:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container case-list-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"case-info"},[a("el-tag",[t._v("在线应用："+t._s(t.caseInfo.services))]),t._v(" "),a("el-tag",{attrs:{type:"success"}},[t._v("在线实例数："+t._s(t.caseInfo.instances))]),t._v(" "),a("el-input",{staticStyle:{width:"220px"},attrs:{size:"mini",placeholder:"应用名称:输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("span",{staticStyle:{float:"right",padding:"4px 10px"}},[a("el-date-picker",{attrs:{"picker-options":t.pickerOptions,type:"datetime",size:"mini",placeholder:"选择启动时间","value-format":"yyyy-MM-dd HH:mm:ss",format:"yyyy-MM-dd HH:mm:ss",align:"right"},model:{value:t.searchForm.date,callback:function(e){t.$set(t.searchForm,"date",e)},expression:"searchForm.date"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.getList}},[t._v("搜索")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return!t.search||e.instanceName.toLowerCase().includes(t.search.toLowerCase())})),border:"",size:"small","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"instanceName",label:"应用唯一标识","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tooltip",{attrs:{content:i.appId,placement:"top",effect:"dark"}},[a("el-button",{staticStyle:{"font-size":"12px"},attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.goCmd(i)}}},[t._v(t._s(i.appId))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"instanceName",label:"实例名称"}}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"host",label:"主机名称"}}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"ip",label:"IP"}}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"version",label:"Agent版本"}}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"startDate",label:"启动时间"}}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"startDate",label:"在线时长"}}),t._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"lastHeartbeat",label:"最后心跳"}})],1)],1)],1)},s=[],n=(a("55dd"),a("20d6"),a("b775"));function o(t){return Object(n["a"])({url:"/app/getList",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(n["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}var u={name:"Dashboard",data:function(){return{caseInfo:{services:0,instances:0},search:"",tableData:[],listLoading:!0,searchForm:{date:null},dialogVisible:!1,drawerVisible:!1,sort:"id_desc",pickerOptions:{shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,o({date:this.searchForm.date}).then((function(e){t.tableData=e.data.informations,t.total=e.data.total,t.caseInfo.services=e.data.services,t.caseInfo.instances=e.data.instances,setTimeout((function(){t.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作Success",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="vue-element-admin",r(t.temp).then((function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);a.timestamp=+new Date(a.timestamp),c(a).then((function(){var e=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(e,1,t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handleDelete:function(t,e){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.list.splice(e,1)},handleFetchPv:function(t){var e=this;l(t).then((function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-69c64115"),a.e("chunk-58293907")]).then(a.bind(null,"4bf8d")).then((function(e){var a=["timestamp","title","type","importance","status"],i=["timestamp","title","type","importance","status"],s=t.formatJson(i);e.export_json_to_excel({header:a,data:s,filename:"table-list"}),t.downloadLoading=!1}))},goCmd:function(t){console.log(t),this.$router.push({name:"WebShell",query:{id:t.appId}})},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"}}},d=u,p=a("2877"),m=Object(p["a"])(d,i,s,!1,null,null,null);e["default"]=m.exports}}]);