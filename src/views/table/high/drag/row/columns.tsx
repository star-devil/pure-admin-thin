/*
 * @Author: wangqiaoling
 * @Date: 2023-08-14 15:36:37
 * @LastEditTime: 2023-09-01 09:09:08
 * @LastEditors: wangqiaoling
 * @Description: 表格行拖拽方法
 */
import { clone } from "@pureadmin/utils";
import { ref } from "vue";
import { tableDataDrag } from "../../data";
import { nextTick } from "process";
import Sortable from "sortablejs";

export function useColumns() {
  const dataList = ref(clone(tableDataDrag, true));

  const rowDrop = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    nextTick(() => {
      const wrapper: HTMLElement = document.querySelector(
        ".el-table__body-wrapper tbody"
      );
      Sortable.create(wrapper, {
        animation: 300,
        handle: ".drag-btn",
        onEnd: ({ newIndex, oldIndex }) => {
          const currentRow = dataList.value.splice(oldIndex, 1)[0];
          dataList.value.splice(newIndex, 0, currentRow);
        }
      });
    });
  };

  const columns: TableColumnList = [
    {
      label: "ID",
      prop: "id",
      cellRenderer: ({ row }) => (
        <div class="flex items-center">
          <iconify-icon-online
            icon="icon-park-outline:drag"
            class="drag-btn cursor-grab"
            onMouseenter={(event: { preventDefault: () => void }) =>
              rowDrop(event)
            }
          />
          <p class="ml-[16px]">{row.id}</p>
        </div>
      )
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

  return {
    dataList,
    columns
  };
}
