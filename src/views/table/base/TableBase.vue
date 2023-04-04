<!--
 * @Author: wangqiaoling
 * @Date: 2023-04-03 15:17:45
 * @LastEditTime: 2023-04-04 14:20:27
 * @LastEditors: wangqiaoling
 * @Description: 基础用法表格
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
  <div class="pure-table-demo">
    <pure-table :data="tableData" :columns="columns" />
  </div>
</template>
