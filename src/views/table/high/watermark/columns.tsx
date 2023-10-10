/*
 * @Author: wangqiaoling
 * @Date: 2023-10-10 17:25:48
 * @LastEditTime: 2023-10-10 17:26:10
 * @LastEditors: wangqiaoling
 * @Description: 表格水印逻辑
 */
import { tableDataEdit } from "../data";
import { ref, onMounted, type Ref } from "vue";
import { clone, useWatermark, delay } from "@pureadmin/utils";

export function useColumns(waterRef: Ref) {
  const dataList = ref(clone(tableDataEdit, true));

  const columns: TableColumnList = [
    {
      label: "ID",
      prop: "id"
    },
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

  onMounted(() => {
    delay().then(() => {
      // https://pure-admin-utils.netlify.app/hooks/useWatermark/useWatermark.html
      const { setWatermark } = useWatermark(
        waterRef.value.getTableDoms().tableWrapper
      );
      setWatermark("编程即艺术", {
        font: "16px Microsoft YaHei",
        globalAlpha: 0.8,
        forever: true,
        width: 252,
        height: 80
      });
    });
  });

  return {
    columns,
    dataList
  };
}
