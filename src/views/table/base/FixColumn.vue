<!--
 * @Author: wangqiaoling
 * @Date: 2023-04-04 17:43:12
 * @LastEditTime: 2023-04-04 18:26:48
 * @LastEditors: wangqiaoling
 * @Description: 
-->
<script setup lang="ts">
import { tableDataMore } from "./data";

const props = withDefaults(
  defineProps<{
    height?: number;
  }>(),
  {
    height: null
  }
);

const columns: TableColumnList = [
  {
    label: "日期",
    prop: "date",
    width: "260",
    fixed: true
  },
  {
    label: "姓名",
    prop: "name"
  },
  {
    label: "地区",
    prop: "state",
    width: "260"
  },
  {
    label: "城市",
    prop: "city",
    width: "260"
  },
  {
    label: "地址",
    prop: "address",
    width: "260"
  },
  {
    label: "邮编",
    prop: "post-code",
    width: "260"
  },
  {
    label: "操作",
    width: "120",
    fixed: "right",
    slot: "operation"
  }
];

function handleClick(row) {
  console.log(
    "%crow===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    row
  );
}
</script>

<template>
  <pure-table
    :data="
      props.height
        ? tableDataMore.concat(tableDataMore).concat(tableDataMore)
        : tableDataMore
    "
    :columns="columns"
    :height="props.height"
  >
    <template #operation="{ row }">
      <el-button link type="primary" size="small" @click="handleClick(row)">
        Detail
      </el-button>
      <el-button link type="primary" size="small">Edit</el-button>
    </template>
  </pure-table>
</template>
