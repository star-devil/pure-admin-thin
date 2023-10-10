<!--
 * @Author: wangqiaoling
 * @Date: 2023-10-10 13:51:51
 * @LastEditTime: 2023-10-10 14:33:29
 * @LastEditors: wangqiaoling
 * @Description: 右键菜单表格页面
-->
<script setup lang="ts">
import { useColumns } from "./columns";

const { columns, dataList, showMouseMenu } = useColumns();
</script>

<template>
  <pure-table
    row-key="id"
    border
    :data="dataList"
    :columns="columns"
    @row-contextmenu="showMouseMenu"
  />
</template>
