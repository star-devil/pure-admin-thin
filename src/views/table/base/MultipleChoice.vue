<!--
 * @Author: wangqiaoling
 * @Date: 2023-04-06 13:47:58
 * @LastEditTime: 2023-04-06 14:01:08
 * @LastEditors: wangqiaoling
 * @Description: 多选表格
-->
<script setup lang="ts">
import { ref } from "vue";
import { tableData } from "./data";

const tableRef = ref();

const multipleSelection = ref([]);

const handleSelectionChange = val => {
  multipleSelection.value = val;
  console.log(
    "%cselected row ===>",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    val
  );
};

const toggleSelection = (rows?: any) => {
  const { toggleRowSelection, clearSelection } = tableRef.value.getTableRef();
  if (rows) {
    rows.forEach(row => {
      toggleRowSelection(row, undefined);
    });
  } else {
    clearSelection();
  }
};

const columns: TableColumnList = [
  {
    type: "selection",
    align: "left"
  },
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
    <pure-table
      ref="tableRef"
      :data="tableData"
      :columns="columns"
      @selection-change="handleSelectionChange"
    />
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">
        Toggle selection status of second and third rows
      </el-button>
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div>
  </div>
</template>
