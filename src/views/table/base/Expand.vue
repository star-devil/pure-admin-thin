<!--
 * @Author: wangqiaoling
 * @Date: 2023-06-28 14:14:04
 * @LastEditTime: 2023-06-28 14:29:05
 * @LastEditors: wangqiaoling
 * @Description: 可展开表格
-->
<script setup lang="ts">
import { ref } from "vue";
import { expandTableData } from "./data";

const border = ref(false);
const childBorder = ref(false);

const columns: TableColumnList = [
  {
    type: "expand",
    slot: "expand"
  },
  {
    label: "日期",
    prop: "date"
  },
  {
    label: "姓名",
    prop: "name"
  }
];

const childColumns: TableColumnList = [
  {
    label: "Name",
    prop: "name"
  },
  {
    label: "State",
    prop: "state"
  },
  {
    label: "City",
    prop: "city"
  },
  {
    label: "Address",
    prop: "address"
  },
  {
    label: "Zip",
    prop: "zip"
  }
];
</script>

<template>
  <div>
    切换父表格边框：<el-switch v-model="border" /> 切换子表格边框：<el-switch
      v-model="childBorder"
    />
    <pure-table :data="expandTableData" :columns="columns" :border="border">
      <template #expand="{ row }">
        <div class="m-4">
          <p class="mb-2">State: {{ row.state }}</p>
          <p class="mb-2">City: {{ row.city }}</p>
          <p class="mb-2">Address: {{ row.address }}</p>
          <p class="mb-4">Zip: {{ row.zip }}</p>
          <h3>Family</h3>
          <pure-table
            :data="row.family"
            :columns="childColumns"
            :border="childBorder"
          />
        </div>
      </template>
    </pure-table>
  </div>
</template>
