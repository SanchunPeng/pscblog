(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2131d3"],{aafc:function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},l=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("ELement采坑之旅")]),t("h2",[s._v("1、el-table添加的选择框部分disable")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("<el-table-column\n    type="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"selection"')]),s._v("\n    align="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v("\n    :selectable="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'selectInit'")]),s._v(">\n"),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v(">")])]),s._v("\n")])]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("methods:{\n    selectInit(row,index){\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(row.propery==xxx){\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//不可勾选disabled")]),s._v("\n        }"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v("{\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//可勾选")]),s._v("\n        }\n    }\n}\n")])]),t("h2",[s._v("2、el-table的某些列动态变化，比如说对某些列el-table-column设置v-if，经常会出现数据与表头渲染错乱的情况。")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("    <el-table-column\n        prop="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v("\n        label="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"素材名称"')]),s._v("\n        header-align="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        align="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        show-overflow-tooltip\n        min-width="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"180"')]),s._v(">\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"taskCreateTime"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("header-align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"创建任务时间"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"currentStatus !== 1"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"140"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"productUserName"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("header-align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"操作人"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"currentStatus !== 1"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"140"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v(">")])]),s._v("\n    ...\n")])]),t("p",[s._v("这时会出现将操作人的值显示在创建任务时间下，出现错乱。\n原因："),t("br"),s._v('\n这是因为在v-for或者v-if切换标签时，多个相同的标签被渲染的时候，vue是有一个性能优化的机制，把多个相同的标签进行复用。而原本这些标签每一个都是独立的，所以需要添加key来做区分。:key="Math.random()"')]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("    <el-table-column\n        prop="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v("\n        label="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"素材名称"')]),s._v("\n        header-align="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        align="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        show-overflow-tooltip\n        :key="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Math.random()"')]),s._v("\n        min-width="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"180"')]),s._v(">\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"taskCreateTime"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("header-align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"创建任务时间"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Math.random()"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"currentStatus !== 1"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"140"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"productUserName"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("header-align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"操作人"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Math.random()"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"currentStatus !== 1"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"140"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-table-column")]),s._v(">")])]),s._v("\n    ...\n")])]),t("h2",[s._v('3、当使用element-ui的el-menu组件时，:router="true"当点击当前tab时会报错')]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("NavigationDuplicated {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("_name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"NavigationDuplicated"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"NavigationDuplicated"')]),s._v("}\n")])]),t("p",[s._v("原因：这是因为element将this.$router.push的异常给打印出来了\n解决办法：")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Router "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-router'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" originalPush = Router.prototype.push\nRouter.prototype.push = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("push")]),s._v(" ("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("location")]),s._v(") ")]),s._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" originalPush.call("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(", location).catch("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("err")]),s._v(" =>")]),s._v(" err)\n}\nVue.use(Router)\n")])])])}],n=t("2877"),e={},p=Object(n["a"])(e,r,l,!1,null,null,null);a["default"]=p.exports}}]);