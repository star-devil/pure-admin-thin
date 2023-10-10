<!--
 * @Author: wangqiaoling
 * @Date: 2023-10-10 16:57:39
 * @LastEditTime: 2023-10-10 16:58:04
 * @LastEditors: wangqiaoling
 * @Description: 可打印的表格
-->
<script setup lang="ts">
import { ref } from "vue";
import { useColumns } from "./columns";

const waterRef = ref();
const { columns, dataList } = useColumns(waterRef);
</script>

<template>
  <pure-table
    ref="waterRef"
    row-key="id"
    border
    :data="dataList"
    :columns="columns"
  />
</template>
