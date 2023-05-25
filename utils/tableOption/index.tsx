import { TableColumn, TableRow } from '@islol-components';

export const handleTableRowList = <T extends Record<string, any>>(
  DataList: T[],
  columnList: TableColumn[]
): TableRow[] => {
  const tableRowList = DataList.map((member: T) => {
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
