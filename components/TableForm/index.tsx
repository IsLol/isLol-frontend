import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Button from '../Button';
import { RowItem, TableColumn } from '../Table';
import { TextField } from '../TextField';
import Typography from '../Typography';
import style from './index.module.scss';

export interface TableFormRow {
  id?: string;
  /** td 배열 */
  items: RowItem[];
}

export interface FormListType {
  [key: string]: TableFormRow[];
}

export interface TableFormProps {
  /** style 재정의 */
  className?: string;
  /** header 항목 */
  columns: TableColumn[];
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
  /** 테이블 타이틀 */
  title?: ReactNode;
  /** row 수정여부 */
  isModify?: boolean;
}

const cx = classNames.bind(style);
const rootClass = 'table-root';

export const TableForm = ({
  className,
  columns,
  onSort,
  sortItems,
  sortOrder,
  gutter,
  rowHeight = 30,
  title,
  isModify = false,
}: TableFormProps) => {
  const methods = useFormContext();
  const { register, control } = methods;
  const { fields, append } = useFieldArray<FormListType>({
    control,
    name: 'memberList',
  });
  console.log(fields);
  return (
    <div className={cx(rootClass)}>
      {title && (
        <Typography
          type="H3"
          tag="h3"
          weight="medium"
          className={cx(`${rootClass}__title`)}
        >
          {title}
        </Typography>
      )}
      <table className={cx(className)}>
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
                    <Button
                      variant="text"
                      underline
                      onClick={() => onSort?.(headerId)}
                    >
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
          {fields ? (
            fields.map(({ items, id }: any, index) => {
              return (
                <tr key={index} style={{ height: `${rowHeight}px` }}>
                  {items &&
                    items.map(
                      (
                        {
                          item,
                          colspan: thisColspan,
                          rowspan: thisRowspan,
                          className: thisClassName,
                        }: RowItem,
                        i: number
                      ) => {
                        return (
                          <td
                            className={thisClassName}
                            colSpan={thisColspan}
                            rowSpan={thisRowspan}
                            key={i}
                            style={{
                              paddingBottom: gutter,
                              paddingTop: gutter,
                            }}
                          >
                            {isModify ? <TextField value={item} /> : item}
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
    </div>
  );
};

export default TableForm;
