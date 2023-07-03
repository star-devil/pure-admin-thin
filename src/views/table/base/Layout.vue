<!--
 * @Author: wangqiaoling
 * @Date: 2023-07-03 14:08:08
 * @LastEditTime: 2023-07-03 15:23:36
 * @LastEditors: wangqiaoling
 * @Description: 表格布局
-->
<script setup lang="ts">
import { ref } from "vue";
import { tableData } from "./data";

type TableLayout = "fixed" | "auto";

const tableLayout = ref<TableLayout>("fixed");

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
  <div>
    <el-link
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout"
      target="_blank"
      style="padding-top: 7px; margin: 0 4px; font-size: 14px"
    >
      #table-layout
    </el-link>
    <el-radio-group v-model="tableLayout">
      <el-radio-button label="fixed" />
      <el-radio-button label="auto" />
    </el-radio-group>

    <pure-table
      :data="tableData"
      :columns="columns"
      :table-layout="tableLayout"
    />
  </div>
</template>
