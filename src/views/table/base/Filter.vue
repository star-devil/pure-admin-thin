<!--
 * @Author: wangqiaoling
 * @Date: 2023-04-06 14:09:28
 * @LastEditTime: 2023-04-06 14:29:25
 * @LastEditors: wangqiaoling
 * @Description: 筛选表格
-->
<script setup lang="ts">
import { ref } from "vue";

const tableRef = ref();

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Home"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Office"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Home"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Office"
  }
];

const filterHandler = (value, row, column) => {
  // 数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。
  const property = column["property"];
  return row[property] === value;
};

const filterTag = (value, row) => row.tag === value;

const columns: TableColumnList = [
  {
    label: "日期",
    prop: "date",
    sortable: true,
    columnKey: "date",
    filters: [
      { text: "2016-05-01", value: "2016-05-01" },
      { text: "2016-05-02", value: "2016-05-02" },
      { text: "2016-05-03", value: "2016-05-03" },
      { text: "2016-05-04", value: "2016-05-04" }
    ],
    filterMethod: filterHandler
  },
  {
    label: "姓名",
    prop: "name"
  },
  {
    label: "地址",
    prop: "address"
  },
  {
    label: "标签",
    prop: "tag",
    filters: [
      { text: "Home", value: "Home" },
      { text: "Office", value: "Office" }
    ],
    filterMethod: filterTag,
    filterPlacement: "bottom-end",
    slot: "tag"
  }
];

const clearFilter = val => {
  const { clearFilter } = tableRef.value.getTableRef();
  clearFilter(val);
};

const resetDateFilter = () => {
  clearFilter(["date"]);
};
</script>

<template>
  <el-button @click="resetDateFilter">reset date filter</el-button>
  <el-button @click="clearFilter">reset all filters</el-button>
  <pure-table ref="tableRef" :data="tableData" :columns="columns">
    <template #tag="{ row }">
      <el-tag :type="row.tag === 'Home' ? '' : 'success'">
        {{ row.tag }}
      </el-tag>
    </template>
  </pure-table>
</template>
