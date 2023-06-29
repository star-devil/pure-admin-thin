<!--
 * @Author: wangqiaoling
 * @Date: 2023-06-29 13:32:19
 * @LastEditTime: 2023-06-29 15:43:52
 * @LastEditors: wangqiaoling
 * @Description: 表尾合计行
-->
<script setup lang="ts">
interface Product {
  id: string;
  name: string;
  amount1: string;
  amount2: string;
  amount3: number;
}

const tableData: Product[] = [
  {
    id: "12987122",
    name: "Tom",
    amount1: "234",
    amount2: "3.2",
    amount3: 10
  },
  {
    id: "12987123",
    name: "Tom",
    amount1: "165",
    amount2: "4.43",
    amount3: 12
  },
  {
    id: "12987124",
    name: "Tom",
    amount1: "324",
    amount2: "1.9",
    amount3: 9
  },
  {
    id: "12987125",
    name: "Tom",
    amount1: "621",
    amount2: "2.2",
    amount3: 17
  },
  {
    id: "12987126",
    name: "Tom",
    amount1: "539",
    amount2: "4.1",
    amount3: 15
  }
];
const columns: TableColumnList = [
  {
    label: "ID",
    prop: "id"
  },
  {
    label: "Name",
    prop: "name"
  },
  {
    label: "Amount 1",
    prop: "amount1",
    sortable: true
  },
  {
    label: "Amount 2",
    prop: "amount2",
    sortable: true
  },
  {
    label: "Amount 3",
    prop: "amount3",
    sortable: true
  }
];

const columns1: TableColumnList = [
  {
    label: "ID",
    prop: "id"
  },
  {
    label: "Name",
    prop: "name"
  },
  {
    label: "Cost 1 ($)",
    prop: "amount1"
  },
  {
    label: "Cost 2 ($)",
    prop: "amount2"
  },
  {
    label: "Cost 3 ($)",
    prop: "amount3"
  }
];
interface SummaryMethodProps<T = Product> {
  columns: any[];
  data: T[];
}

const getSummaries = (param: SummaryMethodProps) => {
  const { data, columns } = param;
  const sums: string[] = [];
  columns.forEach((columns, index) => {
    if (index === 0) {
      sums[index] = "Total Cost";
      return;
    }
    const values = data.map(item => Number(item[columns.property]));
    if (!values.every(value => Number.isNaN(value))) {
      sums[index] = `$ ${values.reduce((prev, curr) => {
        const value = Number(curr);
        if (!Number.isNaN(value)) {
          return prev + curr;
        } else {
          return prev;
        }
      }, 0)}`;
    } else {
      sums[index] = "N/A";
    }
  });
  return sums;
};
</script>

<template>
  <pure-table
    :data="tableData"
    :columns="columns"
    border
    show-summary
    class="mb-6"
  />
  <pure-table
    :data="tableData"
    :columns="columns1"
    border
    :summary-method="getSummaries"
    show-summary
  />
</template>
