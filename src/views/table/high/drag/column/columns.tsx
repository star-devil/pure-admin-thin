/*
 * @Author: wangqiaoling
 * @Date: 2023-09-01 09:38:26
 * @LastEditTime: 2023-09-01 16:27:30
 * @LastEditors: wangqiaoling
 * @Description: 表格列拖拽方法
 */
import { onMounted, ref, nextTick } from "vue";
import { tableDataDrag } from "../../data";
import { clone } from "@pureadmin/utils";
import Sortable from "sortablejs";

export function useColumns() {
  const dataList = ref(clone(tableDataDrag, true));

  const columnsDrag = ref<TableColumnList>([
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
  ]);

  const columns = ref<TableColumnList>([
    {
      label: "ID",
      prop: index => columnsDrag.value[index].prop as string
    },
    {
      label: "日期",
      prop: index => columnsDrag.value[index].prop as string
    },
    {
      label: "姓名",
      prop: index => columnsDrag.value[index].prop as string
    }
  ]);

  const columnDrop = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    nextTick(() => {
      const wrapper: HTMLElement = document.querySelector(
        ".el-table__header-wrapper tr"
      );
      Sortable.create(wrapper, {
        animation: 300,
        delay: 0,
        onEnd: ({ newIndex, oldIndex }) => {
          const oldItem = columnsDrag.value[oldIndex];
          columnsDrag.value.splice(oldIndex, 1);
          columnsDrag.value.splice(newIndex, 0, oldItem);
        }
      });
    });
  };

  onMounted(() => {
    nextTick(() => {
      columnDrop(event);
    });
  });

  return {
    columns,
    dataList,
    columnsDrag
  };
}
