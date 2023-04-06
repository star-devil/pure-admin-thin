<!--
 * @Author: wangqiaoling
 * @Date: 2023-04-06 14:03:16
 * @LastEditTime: 2023-04-06 14:06:28
 * @LastEditors: wangqiaoling
 * @Description: 排序和格式化
-->
<script setup lang="ts">
import { tableDataSortable } from "./data";

const columns: TableColumnList = [
  {
    label: "日期",
    prop: "date",
    sortable: true
  },
  {
    label: "姓名",
    prop: "name"
  },
  {
    label: "地址",
    prop: "address",
    formatter: ({ address }) => `格式化后的内容：${address}`
  }
];
</script>

<template>
  <pure-table
    :data="tableDataSortable"
    :columns="columns"
    :default-sort="{ prop: 'date', order: 'ascending' }"
  />
</template>
