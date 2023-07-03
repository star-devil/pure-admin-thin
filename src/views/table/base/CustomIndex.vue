<!--
 * @Author: wangqiaoling
 * @Date: 2023-07-03 13:37:59
 * @LastEditTime: 2023-07-03 14:06:29
 * @LastEditors: wangqiaoling
 * @Description: 自定义索引表格页
-->
<script setup lang="ts">
import { tableData } from "./data";

const indexMethod = (index: number) => {
  return index * 2;
};

const columns: TableColumnList = [
  {
    type: "index",
    index: indexMethod
  },
  {
    label: "日期",
    prop: "date"
  },
  {
    label: "姓名",
    prop: "name"
  },
  {
    label: "地址",
    prop: "address"
  }
];
</script>

<template>
  <pure-table :data="tableData" :columns="columns" />
</template>
