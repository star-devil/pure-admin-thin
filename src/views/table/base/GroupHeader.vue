<!--
 * @Author: wangqiaoling
 * @Date: 2023-04-06 10:19:07
 * @LastEditTime: 2023-04-06 10:33:39
 * @LastEditors: wangqiaoling
 * @Description: 多级表头表格
-->
<script setup lang="ts">
import { tableDataMore } from "./data";

const columns: TableColumnList = [
  {
    label: "日期",
    prop: "date",
    fixed: true
  },
  {
    label: "姓名",
    prop: "name",
    children: [
      {
        label: "地区",
        children: [
          {
            label: "城市",
            prop: "city"
          },
          {
            label: "地址",
            prop: "address"
          }
        ]
      }
    ]
  },
  {
    label: "邮编",
    prop: "post-code"
  }
];
</script>

<template>
  <pure-table :data="tableDataMore" :columns="columns" align-whole="center" />
</template>
