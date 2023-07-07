/*
 * @Author: wangqiaoling
 * @Date: 2023-04-03 15:15:07
 * @LastEditTime: 2023-07-03 16:28:16
 * @LastEditors: wangqiaoling
 * @Description: 表格组件菜单
 */
import { $t } from "@/plugins/i18n";
import { table } from "@/router/enums";
import hot from "@/assets/svg/hot.svg?component";

export default {
  path: "/table-component",
  redirect: "/table/index",
  meta: {
    icon: hot,
    title: "pure-admin-table",
    // showLink: false,
    rank: table // 菜单排序，值越高排的越后（只针对顶级路由）
  },
  children: [
    {
      path: "/table/index",
      name: "PureBaseTable",
      component: () => import("@/views/table/Index.vue"),
      meta: {
        title: $t("menus.hsPureTableBase"),
        showParent: true
      }
    },
    {
      path: "/table/high",
      name: "PureHighTable",
      component: () => import("@/views/table/High.vue"),
      meta: {
        title: $t("menus.hsPureTableHigh"),
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
