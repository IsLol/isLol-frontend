import classNames from 'classnames/bind';
import style from './index.module.scss';
import React, { ReactNode } from 'react';
import Button from '../Button';

export interface TableColumn {
  header: ReactNode;
  width?: number;
  headerId: string;
  isSortable?: boolean;
}

export interface RowItem {
  /** td 내용 */
  item: ReactNode;
  /** 세로 병합 */
  colspan?: number;
  /** 가로 병합 */
  rowspan?: number;
  /** 해당 셀 스타일 재정의 */
  className?: string;
}

export interface TableRow {
  /** td 배열 */
  items: RowItem[];
  /** 해당 tr 하이라이트 */
  rowHighlight?: boolean;
}

export interface TableProps {
  /** style 재정의 */
  className?: string;
  /** header 항목 */
  columns: TableColumn[];
  /** row items */
  rows?: TableRow[];
  /** 정렬 event handler */
  // eslint-disable-next-line no-unused-vars
  onSort?: (headerId: string) => void;
  /** 정렬 항목 */
  sortItems?: string;
  /** 오름차, 내림차 */
  sortOrder?: 'ASC' | 'DESC';
  /** 행 간격 */
  gutter?: number;
  /** tr 높이 */
  rowHeight?: number;
}

const cx = classNames.bind(style);
const rootClass = 'table-root';

export const Table = ({
  className,
  columns,
  onSort,
  rows,
  sortItems,
  sortOrder,
  gutter,
  rowHeight,
}: TableProps) => {
  return (
    <table className={cx(rootClass, className)}>
      <thead>
        <tr>
          {columns.map(
            ({ header, width, headerId, isSortable }: TableColumn) => (
              <th
                id={headerId}
                key={headerId}
                style={{ ...(width && { width: width }) }}
              >
                {isSortable ? (
                  <Button onClick={() => onSort?.(headerId)}>
                    <span>{header}</span>
                  </Button>
                ) : (
                  <span>{header}</span>
                )}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {rows ? (
          rows.map(({ items, rowHighlight: thisRowHighlight }, index) => {
            return (
              <tr
                key={index}
                className={cx({
                  __highlight: thisRowHighlight,
                  __rowHeight: rowHeight,
                })}
              >
                {items &&
                  items.map(
                    (
                      {
                        item,
                        colspan: thisColspan,
                        rowspan: thisRowspan,
                        className: thisClassName,
                      },
                      i
                    ) => {
                      return (
                        <td
                          className={thisClassName}
                          colSpan={thisColspan}
                          rowSpan={thisRowspan}
                          key={i}
                          style={{ paddingBottom: gutter, paddingTop: gutter }}
                        >
                          {item}
                        </td>
                      );
                    }
                  )}
              </tr>
            );
          })
        ) : (
          <tr>
            <td>결과 값이 없습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
