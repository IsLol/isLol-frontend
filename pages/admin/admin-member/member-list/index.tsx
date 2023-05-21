import style from './index.module.scss';
import classNames from 'classnames/bind';
import { Button, Table } from '@islol-components';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { prefetchMemberList } from '@islol-api';
import { dehydrate } from '@tanstack/react-query';

//TODO 임시 데이터
const COLUMN_LIST = [
  {
    header: '헤더1',
    headerId: 'H01',
  },
  {
    header: '헤더2',
    headerId: 'H02',
  },
  {
    header: '헤더3',
    headerId: 'H03',
  },
];

const ROW_LIST = [
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
];

const cx = classNames.bind(style);
const rootClass = 'member-list';
export function MemberListPage(props: any) {
  console.log(props);
  const [memberList, setMemberList] = useState<any>();

  return (
    <div className={cx(rootClass)}>
      <div className={cx(`${rootClass}__button-wrap`)}>
        <Button color="blue">일괄저장</Button>
        <Button>탈퇴</Button>
      </div>
      <Table
        columns={COLUMN_LIST}
        rows={ROW_LIST}
        title="회원 목록"
        rowHeight={50}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = await prefetchMemberList();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MemberListPage;
