/*
 * @Author: wangqiaoling
 * @Date: 2023-04-04 13:43:05
 * @LastEditTime: 2023-06-28 14:21:23
 * @LastEditors: wangqiaoling
 * @Description: 渲染表格的数据list
 */
import Base from "./TableBase.vue";
import Stripe from "./Stripe.vue";
import Border from "./Border.vue";
import Status from "./Status.vue";
import FixHeader from "./FixHeader.vue";
import FixColumn from "./FixColumn.vue";
import GroupHeader from "./GroupHeader.vue";
import FluidHeight from "./FluidHeight.vue";
import RadioTable from "./RadioTable.vue";
import MultipleChoice from "./MultipleChoice.vue";
import Sortable from "./Sortable.vue";
import Filter from "./Filter.vue";
import ColumnTemplate from "./column-template/Index.vue";
import HeaderRender from "./header-render/Index.vue";
import Expand from "./Expand.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/table/base/${val}.vue`;

export const list = [
  {
    key: "base",
    content: rendContent("TableBase"),
    title: "基础表格",
    component: Base
  },
  {
    key: "stripe",
    content: rendContent("Stripe"),
    title: "带斑马纹表格",
    component: Stripe
  },
  {
    key: "border",
    content: rendContent("Border"),
    title: "带边框表格",
    component: Border
  },
  {
    key: "status",
    content: rendContent("Status"),
    title: "带状态表格",
    component: Status
  },
  {
    key: "fixHeader",
    content: rendContent("FixHeader"),
    title: "固定表头",
    component: FixHeader
  },
  {
    key: "fixColumn",
    content: rendContent("FixColumn"),
    title: "固定列",
    component: FixColumn
  },
  {
    key: "fixColumnHeader",
    content: rendContent("FixColumn"),
    title: "固定列和表头",
    component: () => <FixColumn height={360} />
  },
  {
    key: "groupHeader",
    content: rendContent("GroupHeader"),
    title: "多级表头（表头分组）",
    component: GroupHeader
  },
  {
    key: "fluidHeight",
    content: rendContent("FluidHeight"),
    title: "流体高度",
    component: FluidHeight
  },
  {
    key: "radioTable",
    content: rendContent("RadioTable"),
    title: "单选",
    component: RadioTable
  },
  {
    key: "multipleChoice",
    content: rendContent("MultipleChoice"),
    title: "多选",
    component: MultipleChoice
  },
  {
    key: "sortable",
    content: rendContent("Sortable"),
    title: "排序和格式化",
    component: Sortable
  },
  {
    key: "filter",
    content: rendContent("Filter"),
    title: "筛选",
    component: Filter
  },
  {
    key: "column-template",
    content: rendContent("column-template/Index"),
    title: "自定义列模板",
    component: ColumnTemplate
  },
  {
    key: "header-render",
    content: rendContent("header-render/Index"),
    title: "自定义表头",
    component: HeaderRender
  },
  {
    key: "expand",
    content: rendContent("expand"),
    title: "展开行",
    component: Expand
  }
];
