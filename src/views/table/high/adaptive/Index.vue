<!--
 * @Author: wangqiaoling
 * @Date: 2023-07-03 16:49:54
 * @LastEditTime: 2023-07-07 13:52:58
 * @LastEditors: wangqiaoling
 * @Description: 自适应内容区高度表格，包括分页盒loading设置
-->
<script setup lang="ts">
import { ref } from "vue";
import { useColumns } from "./columns";

const tableRef = ref();

const {
  columns,
  dataList,
  pagination,
  adaptiveConfig,
  loading,
  loadingConfig,
  onCurrentChange,
  onSizeChange
} = useColumns();
</script>

<template>
  <pure-table
    ref="tableRef"
    border
    adaptive
    row-key="id"
    alignWhole="center"
    showOverflowTooltip
    :columns="columns"
    :data="
      dataList.slice(
        (pagination.currentPage - 1) * pagination.pageSize,
        pagination.currentPage * pagination.pageSize
      )
    "
    :pagination="pagination"
    :adaptiveConfig="adaptiveConfig"
    :loading="loading"
    :loading-config="loadingConfig"
    @page-size-change="onSizeChange"
    @page-current-change="onCurrentChange"
  />
</template>
