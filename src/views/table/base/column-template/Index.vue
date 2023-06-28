<!--
 * @Author: wangqiaoling
 * @Date: 2023-04-06 14:30:17
 * @LastEditTime: 2023-06-21 10:30:50
 * @LastEditors: wangqiaoling
 * @Description: 自定义列-表格
-->
<script setup lang="ts">
import { useColumns } from "./columns";
const { columns, tableData } = useColumns();
</script>

<template>
  <pure-table :data="tableData" :columns="columns" />
</template>

<style scoped></style>
