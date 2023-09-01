/*
 * @Author: wangqiaoling
 * @Date: 2023-07-03 16:43:39
 * @LastEditTime: 2023-08-14 15:23:03
 * @LastEditors: wangqiaoling
 * @Description: 高级表格渲染列表
 */
import Adaptive from "./adaptive/Index.vue";
import Page from "./page/Index.vue";
import TableSelect from "./table-select/Index.vue";
import RowDrag from "./drag/row/Index.vue";

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
  }
];
