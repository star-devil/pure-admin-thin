<!--
 * @Author: wangqiaoling
 * @Date: 2023-07-21 11:14:53
 * @LastEditTime: 2023-08-14 15:07:58
 * @LastEditors: wangqiaoling
 * @Description: 表格选择器
-->
<script setup lang="ts">
import { ref } from "vue";
import radioSelectTable from "./radio/Index.vue";
import multipleSelectTable from "./multiple/Index.vue";

const model = ref("radio");
</script>

<template>
  <el-space>
    <el-radio-group v-model="model">
      <el-radio-button label="radio"> 单选 </el-radio-button>
      <el-radio-button label="multiple"> 多选 </el-radio-button>
    </el-radio-group>
    <el-divider direction="vertical" />
  </el-space>
  <component :is="model === 'radio' ? radioSelectTable : multipleSelectTable" />
</template>
