<!--
 * @Author: wangqiaoling
 * @Date: 2023-06-28 14:48:44
 * @LastEditTime: 2023-06-28 15:03:55
 * @LastEditors: wangqiaoling
 * @Description: 树形数据与懒加载
-->
<script setup lang="ts">
interface User {
  id: number;
  date: string;
  name: string;
  hasChildren?: boolean;
  children?: User[];
}
const columns: TableColumnList = [
  {
    label: "日期",
    prop: "date"
  },
  {
    label: "姓名",
    prop: "name"
  }
];
// 树形数据
const tableData: User[] = [
  {
    id: 1,
    date: "2016-05-02",
    name: "wangxiaohu"
  },
  {
    id: 2,
    date: "2016-05-04",
    name: "wangxiaohu"
  },
  {
    id: 3,
    date: "2016-05-01",
    name: "wangxiaohu",
    children: [
      {
        id: 31,
        date: "2016-05-01",
        name: "wangxiaohu"
      },
      {
        id: 32,
        date: "2016-05-01",
        name: "wangxiaohu"
      }
    ]
  },
  {
    id: 4,
    date: "2016-05-03",
    name: "wangxiaohu"
  }
];

// 懒加载数据
const load = (
  row: User,
  treeNode: unknown,
  resolve: (data: User[]) => void
) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: "2016-05-01",
        name: "wangxiaohu"
      },
      {
        id: 32,
        date: "2016-05-01",
        name: "wangxiaohu"
      }
    ]);
  }, 1000);
};
const tableData1: User[] = [
  {
    id: 1,
    date: "2016-05-02",
    name: "wangxiaohu"
  },
  {
    id: 2,
    date: "2016-05-04",
    name: "wangxiaohu"
  },
  {
    id: 3,
    date: "2016-05-01",
    name: "wangxiaohu",
    hasChildren: true
  },
  {
    id: 4,
    date: "2016-05-03",
    name: "wangxiaohu"
  }
];
</script>

<template>
  <div>
    <!-- 树形数据 -->
    <pure-table
      :columns="columns"
      :data="tableData"
      row-key="id"
      default-expand-all
      class="mb-6"
    />
    <!-- 懒加载 -->
    <pure-table
      :columns="columns"
      :data="tableData1"
      row-key="id"
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    />
  </div>
</template>
