/*
 * @Author: wangqiaoling
 * @Date: 2023-04-04 13:43:05
 * @LastEditTime: 2023-04-04 18:20:14
 * @LastEditors: wangqiaoling
 * @Description: 渲染表格的数据list
 */
import Base from "./TableBase.vue";
import Stripe from "./Stripe.vue";
import Border from "./Border.vue";
import Status from "./Status.vue";
import FixHeader from "./FixHeader.vue";
import FixColumn from "./FixColumn.vue";

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
  }
];
