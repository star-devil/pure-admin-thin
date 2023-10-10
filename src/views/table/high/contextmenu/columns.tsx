/*
 * @Author: wangqiaoling
 * @Date: 2023-10-10 13:52:15
 * @LastEditTime: 2023-10-10 14:32:55
 * @LastEditors: wangqiaoling
 * @Description: 右键菜单表格逻辑
 */
import { clone } from "@pureadmin/utils";
import { tableDataDrag } from "../data";
import { ref } from "vue";
import { message } from "@/utils/message";
import { CustomMouseMenu } from "@howdyjs/mouse-menu";

export function useColumns() {
  const dataList = ref(clone(tableDataDrag, true));

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
    }
  ];

  // 配置参考：https://kongfandong.cn/howdy/mouse-menu/readme
  const menuOptions = {
    menuList: [
      {
        label: ({ id }) => `ID为：${id}`,
        disabled: true
      },
      {
        label: "编辑",
        tips: "Edit",
        fn: row =>
          message(
            // eslint-disable-next-line prettier/prettier
            `您编辑了第 ${
              dataList.value.findIndex(v => v.id === row.id) + 1
            } 行，数据为：${JSON.stringify(row)}`,
            { type: "success" }
          )
      }
    ]
  };

  function showMouseMenu(row, columns, event) {
    event.preventDefault();
    const { x, y } = event;
    const ctx = CustomMouseMenu({
      el: event.currentTarget,
      params: row,
      // 菜单容器的CSS设置
      menuWrapperCss: {
        background: "var(--el-bg-color)"
      },
      menuItemCss: {
        labelColor: "var(--el-text-color)",
        hoverLabelColor: "var(--el-color-primary)",
        hoverTipsColor: "var(--el-color-primary)"
      },
      ...menuOptions
    });
    ctx.show(x, y);
  }

  return {
    columns,
    dataList,
    menuOptions,
    showMouseMenu
  };
}
