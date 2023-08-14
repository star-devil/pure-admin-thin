<!--
 * @Author: wangqiaoling
 * @Date: 2023-07-21 14:27:04
 * @LastEditTime: 2023-08-14 10:50:35
 * @LastEditors: wangqiaoling
 * @Description: 表格单选选择器组件
-->
<script setup lang="ts">
import { useColumns } from "./columns";
import { tableDataEdit } from "../../data";
import { ref } from "vue";

const selectRef = ref();
const { selectValue, columns, pagination, rowStyle, onRowClick } =
  useColumns(selectRef);
</script>

<template>
  <el-select ref="selectRef" v-model="selectValue" clearable>
    <template #empty>
      <div class="w-[600px] m-4">
        <pure-table
          height="355"
          row-key="id"
          :header-cell-style="{
            background: '#f5f7fa',
            color: '#303133'
          }"
          :data="
            tableDataEdit.slice(
              (pagination.currentPage - 1) * pagination.pageSize,
              pagination.currentPage * pagination.pageSize
            )
          "
          :columns="columns"
          :pagination="pagination"
          :rowStyle="rowStyle"
          @row-click="onRowClick"
        />
      </div>
    </template>
  </el-select>
</template>
