import style from './index.module.scss';
import classNames from 'classnames/bind';
import { Button, Table, TableColumn } from '@islol-components';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { prefetchMemberList, useMemberList } from '@islol-api';
import { dehydrate } from '@tanstack/react-query';

//TODO 임시 데이터
const COLUMN_LIST: TableColumn[] = [
  {
    header: '계정',
    headerId: 'account',
  },
  {
    header: '이름',
    headerId: 'name',
  },
  {
    header: '닉네임',
    headerId: 'nick',
  },
  {
    header: '현재티어',
    headerId: 'curTier',
  },
  {
    header: '최고티어',
    headerId: 'topTier',
  },
  {
    header: '주포지션',
    headerId: 'mainPosition',
  },
  {
    header: '부포지션',
    headerId: 'subPosition',
  },
  {
    header: '명예포인트',
    headerId: 'point',
  },
];

const cx = classNames.bind(style);
const rootClass = 'member-list';
export function MemberListPage() {
  const { data, refetch, isError, isLoading } = useMemberList();

  //table list 핸들링 함수 제네릭은 공통으로 빼기위해 넣어둠
  const handleTableRowList = <T extends Record<string, any>>() => {
    const tableRowList = data.map((member: T) => {
      return {
        items: COLUMN_LIST.map((column) => {
          return {
            item: member[column.headerId],
          };
        }),
      };
    });
    return tableRowList;
  };

  return (
    <div className={cx(rootClass)}>
      <div className={cx(`${rootClass}__button-wrap`)}>
        <Button color="blue">일괄저장</Button>
        <Button>탈퇴</Button>
      </div>
      <Table
        columns={COLUMN_LIST}
        rows={data && handleTableRowList()}
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
