import { reactive, ref, type Ref } from "vue";
import { tableDataEdit } from "../../data";
import { PaginationProps } from "@pureadmin/table";

export function useColumns(selectRef: Ref, tableRef: Ref) {
  const selectVal = ref([]);
  const columns: TableColumnList = [
    {
      type: "selection",
      align: "left",
      reserveSelection: true // 翻页后回选上次的选择
    },
    {
      label: "ID",
      prop: "id",
      width: 80
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

  /** 分页配置 */
  const pagination = reactive<PaginationProps>({
    pageSize: 5,
    currentPage: 1,
    layout: "prev, pager, next, sizes",
    total: tableDataEdit.length,
    background: true,
    small: true
  });

  /** 翻页数据处理 */
  const onSizeChange = () => {
    // 解决切换size时下拉框失去焦点，表格收起的问题
    selectRef.value.visible = true;
  };
  const handleSelectionChange = val => {
    const arr = [];
    val.forEach(v => {
      arr.push(v.name);
    });
    // 翻页后保留上一页的选择，使用【reserveSelection】属性即可
    // if (selectVal.value.length > 0) {
    //   arr.push(...selectVal.value);
    // }
    // selectVal.value = Array.from(new Set(arr));
    selectVal.value = arr;
  };
  // const onCurrentChange = () => {
  // 翻页后回选上次的选择, 使用【reserveSelection】属性即可
  // const { toggleRowSelection } = tableRef.value.getTableRef();
  // nextTick(() => {
  //   selectVal.value.map(val => {
  //     toggleRowSelection(tableDataEdit.filter(v => v.name === val)[0], true);
  //   });
  // });
  // };

  const onSure = () => {
    selectRef.value.blur();
  };

  const removeTag = val => {
    const { toggleRowSelection } = tableRef.value.getTableRef();
    toggleRowSelection(tableDataEdit.filter(v => v.name === val)[0], false);
  };

  const onClear = () => {
    const { clearSelection } = tableRef.value.getTableRef();
    clearSelection();
  };
  return {
    selectVal,
    columns,
    pagination,
    handleSelectionChange,
    onSure,
    removeTag,
    onClear,
    onSizeChange
  };
}
