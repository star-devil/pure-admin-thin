<!--
 * @Author: wangqiaoling
 * @Date: 2023-10-10 14:42:27
 * @LastEditTime: 2023-10-10 14:42:32
 * @LastEditors: wangqiaoling
 * @Description: 编辑行表格页面
-->
<script setup lang="ts">
import { useColumns } from "./columns";

const { columns, dataList } = useColumns();
</script>

<template>
  <pure-table row-key="id" border :data="dataList" :columns="columns" />
</template>
