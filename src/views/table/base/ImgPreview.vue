<!--
 * @Author: wangqiaoling
 * @Date: 2023-07-03 15:55:42
 * @LastEditTime: 2023-07-03 16:38:22
 * @LastEditors: wangqiaoling
 * @Description: 
-->
<script setup lang="ts">
import { tableDataImage } from "./data";

const columns: TableColumnList = [
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
  },
  {
    label: "视频",
    slot: "video"
  },
  {
    label: "图像",
    slot: "image"
  }
];
</script>

<template>
  <pure-table :data="tableDataImage" :columns="columns">
    <template #video="{ row }">
      <video width="180" height="180" controls>
        <source :src="row.video" type="video/mp4" />
      </video>
    </template>
    <template #image="{ row, index }">
      <el-image
        preview-teleported
        loading="lazy"
        :src="row.image"
        :preview-src-list="tableDataImage.map(v => v.image)"
        :initial-index="index"
        fit="cover"
        class="w-[100px] h-[100px]"
      />
    </template>
  </pure-table>
</template>
