/*
 * @Author: wangqiaoling
 * @Date: 2023-07-18 09:25:32
 * @LastEditTime: 2023-07-21 10:05:44
 * @LastEditors: wangqiaoling
 * @Description: 分页、加载动画、动态列逻辑实现
 */
import { delay, clone } from "@pureadmin/utils";
import { onMounted, ref, reactive, watchEffect } from "vue";
import { tableData } from "../data";
import { LoadingConfig, PaginationProps, Align } from "@pureadmin/table";

export function useColumns() {
  // 按钮键
  const select = ref("no");
  const hideVal = ref("nohide");
  const tableSize = ref("default");
  const pagenationSmall = ref(false);
  const paginationAlign = ref("right");
  // 表格
  /** 列配置 */
  const columns: TableColumnList = [
    {
      type: "selection",
      align: "left",
      reserveSelection: true,
      hide: () => select.value === "no"
    },
    {
      label: "日期",
      prop: "date",
      hide: () => (hideVal.value === "hideDate" ? true : false)
    },
    {
      label: "姓名",
      prop: "name",
      hide: () => (hideVal.value === "hideName" ? true : false)
    },
    {
      label: "地址",
      prop: "address",
      hide: () => (hideVal.value === "hideAddress" ? true : false)
    }
  ];
  /** 数据 */
  const dataList = ref([]);
  /** 分页配置 */
  const pagination = reactive<PaginationProps>({
    pageSize: 10,
    currentPage: 1,
    pageSizes: [10, 15, 20],
    total: 0,
    align: "right",
    background: true,
    small: false
  });

  function onChange(val) {
    pagination.small = val;
  }
  function onSizeChange(val) {
    console.log("onSizeChange", val);
  }
  function onCurrentChange(val) {
    loadingConfig.text = `正在加载第${val}页...`;
    loading.value = true;
    delay(600).then(() => {
      loading.value = false;
    });
  }
  watchEffect(() => {
    pagination.align = paginationAlign.value as Align;
  });
  /** 加载动态 */
  const loading = ref(false);
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
      loading.value = false;
    });
  });
  return {
    select,
    hideVal,
    tableSize,
    pagenationSmall,
    paginationAlign,
    dataList,
    pagination,
    loading,
    loadingConfig,
    columns,
    onChange,
    onSizeChange,
    onCurrentChange
  };
}
