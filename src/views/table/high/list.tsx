/*
 * @Author: wangqiaoling
 * @Date: 2023-07-03 16:43:39
 * @LastEditTime: 2023-10-10 14:45:21
 * @LastEditors: wangqiaoling
 * @Description: 高级表格渲染列表
 */
import Adaptive from "./adaptive/Index.vue";
import Page from "./page/Index.vue";
import TableSelect from "./table-select/Index.vue";
import RowDrag from "./drag/row/Index.vue";
import ColumnDrag from "./drag/column/Index.vue";
import Contextmenu from "./contextmenu/index.vue";
import Edit from "./edit/index.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/pure-table/high/${val}/index.vue`;

export const list = [
  {
    key: "adaptive",
    content: rendContent("adaptive"),
    title: "自适应内容区高度",
    component: Adaptive
  },
  {
    key: "page",
    content: rendContent("page"),
    title: "分页、加载动画、动态列",
    component: Page
  },
  {
    key: "tableSelect",
    content: rendContent("table-select"),
    title: "表格选择器",
    component: TableSelect
  },
  {
    key: "rowDrag",
    content: rendContent("drag/row"),
    title: "拖拽表格（行拖拽）",
    component: RowDrag
  },
  {
    key: "columnDrag",
    content: rendContent("drag/column"),
    title: "拖拽表格（列拖拽）",
    component: ColumnDrag
  },
  {
    key: "contextmenu",
    content: rendContent("contextmenu"),
    title: "右键菜单",
    component: Contextmenu
  },
  {
    key: "edit",
    content: rendContent("edit"),
    title: "单元格编辑",
    component: Edit
  }
];
