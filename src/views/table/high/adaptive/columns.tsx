/*
 * @Author: wangqiaoling
 * @Date: 2023-07-03 17:17:09
 * @LastEditTime: 2023-07-07 11:05:47
 * @LastEditors: wangqiaoling
 * @Description: 自适应内容区高度
 */
import { clone, delay } from "@pureadmin/utils";
import { onMounted, reactive, ref } from "vue";
import { tableData } from "../data";
import {
  AdaptiveConfig,
  LoadingConfig,
  PaginationProps
} from "@pureadmin/table";

export function useColumns() {
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
    }
  ];
  const loading = ref(true);
  const dataList = ref([]);

  /** 分页配置 */
  const pagination = reactive<PaginationProps>({
    pageSize: 20,
    currentPage: 1,
    pageSizes: [20, 40, 60],
    total: 0,
    align: "right",
    background: true,
    small: false
  });
  /** 撑满内容区自适应高度相关配置 */
  const adaptiveConfig: AdaptiveConfig = {
    /** 表格距离页面底部的偏移量，默认值为 `96` */
    offsetBottom: 110
    /** 是否固定表头，默认值为 `true`（如果不想固定表头，fixHeader设置为false并且表格要设置table-layout="auto"） */
    // fixHeader: true
    /** 页面 `resize` 时的防抖时间，默认值为 `60` ms */
    // timeout: 60
    /** 表头的 `z-index`，默认值为 `100` */
    // zIndex: 100
  };

  onMounted(() => {
    delay(600).then(() => {
      const newList = [];
      Array.from({ length: 6 }).forEach(() => {
        newList.push(clone(tableData, true));
      });
      newList.flat(Infinity).forEach((item, index) => {
        dataList.value.push({ id: index, ...item });
      });
      pagination.total = dataList.value.length;
      // loading.value = false;
    });
  });

  /** 加载动画配置 */
  const loadingConfig = reactive<LoadingConfig>({
    text: "正在加载第一页...",
    viewBox: "-10, -10, 50, 50",
    spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
    // svg: "",
    // background: rgba()
  });
  function onCurrentChange(val) {
    loadingConfig.text = `正在加载第${val}页...`;
    loading.value = true;
    delay(600).then(() => {
      loading.value = false;
    });
  }

  function onSizeChange(val) {
    console.log("onSizeChange", val);
  }
  return {
    columns,
    dataList,
    pagination,
    adaptiveConfig,
    onCurrentChange,
    onSizeChange
  };
}
