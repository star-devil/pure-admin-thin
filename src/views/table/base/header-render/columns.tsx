/*
 * @Author: wangqiaoling
 * @Date: 2023-06-26 16:50:20
 * @LastEditTime: 2023-06-26 17:18:21
 * @LastEditors: wangqiaoling
 * @Description: 自定义表头
 */
import { computed, ref } from "vue";
import { tableData } from "../data";
import { message } from "@/utils/message";

export function useColumns() {
  const search = ref("");
  const filterTableData = computed(() =>
    tableData.filter(
      data =>
        !search.value ||
        data.name.toLowerCase().includes(search.value.toLowerCase())
    )
  );

  const handleEdit = (index: number, row: any) => {
    message(`您编辑了第 ${index} 行， 数据为：${JSON.stringify(row)}`, {
      type: "success"
    });
  };

  const handleDelete = (index: number, row: any) => {
    message(`您删除了第 ${index} 行， 数据为：${JSON.stringify(row)}`);
  };

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
      label: "姓名",
      prop: "name"
    },
    {
      align: "right",
      // 自定义表头
      headerRenderer: () => (
        <el-input
          v-model={search.value}
          size="small"
          clearable
          placeholder="请输入姓名"
        />
      ),
      cellRenderer: ({ index, row }) => (
        <>
          <el-button size="small" onClick={() => handleEdit(index + 1, row)}>
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            onClick={() => handleDelete(index + 1, row)}
          >
            Delete
          </el-button>
        </>
      )
    }
  ];

  return {
    filterTableData,
    columns
  };
}
