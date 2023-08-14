<!--
 * @Author: wangqiaoling
 * @Date: 2023-08-14 10:48:06
 * @LastEditTime: 2023-08-14 15:06:30
 * @LastEditors: wangqiaoling
 * @Description: 表格多选选择器组件
-->
<script setup lang="ts">
import { useColumns } from "./columns";
import { tableDataEdit } from "../../data";
import { ref } from "vue";

const selectRef = ref();
const tableRef = ref();
const {
  selectVal,
  columns,
  pagination,
  handleSelectionChange,
  onSure,
  removeTag,
  onClear,
  onSizeChange
} = useColumns(selectRef, tableRef);
</script>

<template>
  <el-select
    ref="selectRef"
    v-model="selectVal"
    clearable
    multiple
    collapse-tags
    collapse-tags-tooltip
    @remove-tag="removeTag"
    @clear="onClear"
  >
    <template #empty>
      <div class="w-[600px] m-4">
        <pure-table
          ref="tableRef"
          height="355"
          row-key="id"
          :header-cell-style="{
            background: '#f5f7fa',
            color: '#303133'
          }"
          :columns="columns"
          :pagination="pagination"
          :data="
            tableDataEdit.slice(
              (pagination.currentPage - 1) * pagination.pageSize,
              pagination.currentPage * pagination.pageSize
            )
          "
          @selection-change="handleSelectionChange"
          @page-size-change="onSizeChange"
        />
        <el-button
          class="absolute bottom-[17px]"
          type="primary"
          size="small"
          text
          bg
          @click="onSure"
        >
          确定
        </el-button>
      </div>
    </template>
  </el-select>
</template>
