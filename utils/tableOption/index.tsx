import { TableColumn, TableFormRow, TableRow } from '@islol-components';

export const handleTableRowList = <T extends Record<string, any>>(
  dataList: T[],
  columnList: TableColumn[]
): TableRow[] => {
  const tableRowList = dataList.map((member: T) => {
    return {
      items: columnList.map((column) => {
        return {
          item: member[column.headerId],
        };
      }),
    };
  });
  return tableRowList;
};
export const handleTableFormRowList = <T extends Record<string, any>>(
  dataList: T[],
  columnList: TableColumn[]
): TableFormRow[] => {
  const tableRowList = dataList.map((member: T) => {
    return {
      items: columnList.map((column) => {
        return {
          item: member[column.headerId],
        };
      }),
    };
  });
  return tableRowList;
};
