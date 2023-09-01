<!--
 * @Author: wangqiaoling
 * @Date: 2023-08-14 15:17:06
 * @LastEditTime: 2023-09-01 09:31:14
 * @LastEditors: wangqiaoling
 * @Description: 表格行拖拽
-->
<script setup lang="ts">
import { useColumns } from "./columns";

const { dataList, columns } = useColumns();
</script>

<template>
  <div class="flex">
    <el-scrollbar height="700px">
      <code>
        <pre class="w-[400px]">
          {{ dataList }}
        </pre>
      </code>
    </el-scrollbar>
    <pure-table row-key="id" :data="dataList" :columns="columns" />
  </div>
</template>
