/*
 * @Author: wangqiaoling
 * @Date: 2023-04-04 13:43:05
 * @LastEditTime: 2023-04-04 14:25:48
 * @LastEditors: wangqiaoling
 * @Description: 渲染表格的数据list
 */
import Base from "./TableBase.vue";
import Stripe from "./Stripe.vue";
import Border from "./Border.vue";

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
  }
];
