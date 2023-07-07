/*
 * @Author: wangqiaoling
 * @Date: 2023-07-03 17:24:58
 * @LastEditTime: 2023-07-03 17:27:37
 * @LastEditors: wangqiaoling
 * @Description: 高级表格数据
 */
import dayjs from "dayjs";
const date = dayjs(new Date()).format("YYYY-MM-DD");

const tableData = [
  {
    date,
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Jack",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Dick",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Harry",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Sam",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Lucy",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Mary",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Mike",
    address: "No. 189, Grove St, Los Angeles"
  }
];

export { tableData };
