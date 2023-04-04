<!--
 * @Author: wangqiaoling
 * @Date: 2023-04-04 14:19:45
 * @LastEditTime: 2023-04-04 14:20:52
 * @LastEditors: wangqiaoling
 * @Description: 斑马纹表格
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
    <pure-table :data="tableData" :columns="columns" stripe />
  </div>
</template>
