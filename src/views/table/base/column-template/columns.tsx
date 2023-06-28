/*
 * @Author: wangqiaoling
 * @Date: 2023-04-06 14:36:20
 * @LastEditTime: 2023-06-26 16:29:41
 * @LastEditors: wangqiaoling
 * @Description: 自定义列-表格渲染
 */
import { message } from "@/utils/message";
import { tableData } from "../data";

export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "日期",
      prop: "date",
      cellRenderer: ({ row }) => (
        <div style="display: flex; align-items: center">
          <iconify-icon-online icon="ep:timer" />
          <span style="margin-left: 10px">{row.date}</span>
        </div>
      )
    },
    {
      label: "姓名",
      prop: "name",
      cellRenderer: ({ row }) => (
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          {{
            default: () => (
              <>
                <div>name: {row.name}</div>
                <div>address: {row.address}</div>
              </>
            ),
            reference: () => <el-tag>{row.name}</el-tag>
          }}
        </el-popover>
      )
    },
    {
      label: "地址",
      prop: "address"
    },
    {
      label: "操作",
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

  const handleEdit = (index: number, row) => {
    message(`您编辑了第 ${index} 行， 数据为：${JSON.stringify(row)}`, {
      type: "success"
    });
  };

  const handleDelete = (index: number, row) => {
    message(`您删除了第 ${index} 行， 数据为：${JSON.stringify(row)}`);
  };
  return {
    columns,
    tableData
  };
}
