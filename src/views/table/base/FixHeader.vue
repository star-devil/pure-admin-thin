<!--
 * @Author: wangqiaoling
 * @Date: 2023-04-04 17:18:30
 * @LastEditTime: 2023-04-04 17:44:08
 * @LastEditors: wangqiaoling
 * @Description: 固定表头表格
-->
<script setup lang="ts">
import { tableData } from "./data";

const columns: TableColumnList = [
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
  <pure-table
    :data="tableData.concat(tableData).concat(tableData)"
    :columns="columns"
    height="360"
  />
</template>
