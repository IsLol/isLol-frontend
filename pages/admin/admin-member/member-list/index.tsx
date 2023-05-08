import React from 'react';
import { Table } from '@components';

const index = () => {
  return (
    <div>
      <Table
        columns={[
          {
            header: '헤더1',
            headerId: 'H01',
            isSortable: true,
          },
          {
            header: '헤더2',
            headerId: 'H02',
          },
          {
            header: '헤더3',
            headerId: 'H03',
          },
        ]}
        rows={[
          {
            items: [
              {
                item: '테스트1',
              },
              {
                item: '테스트1',
              },
              {
                item: '테스트1',
              },
            ],
          },
          {
            items: [
              {
                item: '테스트2',
              },
              {
                item: '테스트2',
              },
              {
                item: '테스트2',
              },
            ],
            rowHighlight: true,
          },
          {
            items: [
              {
                item: '테스트3',
              },
              {
                item: '테스트3',
              },
              {
                item: '테스트3',
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default index;
