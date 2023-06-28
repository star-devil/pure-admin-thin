<!--
 * @Author: wangqiaoling
 * @Date: 2023-06-26 17:06:13
 * @LastEditTime: 2023-06-26 17:13:55
 * @LastEditors: wangqiaoling
 * @Description: 自定义表头页面
-->
<script setup lang="ts">
import { useColumns } from "./columns";
const { filterTableData, columns } = useColumns();
</script>

<template>
  <pure-table :data="filterTableData" :columns="columns" />
</template>
