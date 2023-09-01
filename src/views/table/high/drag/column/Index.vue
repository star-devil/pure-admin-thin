<!--
 * @Author: wangqiaoling
 * @Date: 2023-09-01 16:11:59
 * @LastEditTime: 2023-09-01 16:21:20
 * @LastEditors: wangqiaoling
 * @Description: 表格列拖拽
-->
<script setup lang="ts">
import { useColumns } from "./columns";
const { columns, dataList, columnsDrag } = useColumns();
</script>

<template>
  <div class="flex">
    <el-scrollbar height="700px">
      <code>
        <pre class="w-[700px]">{{ columnsDrag }}</pre>
      </code>
    </el-scrollbar>
    <pure-table row-key="id" :data="dataList" :columns="columns" />
  </div>
</template>
