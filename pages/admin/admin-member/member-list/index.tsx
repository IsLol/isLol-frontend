import { handleTableFormRowList, handleTableRowList } from '@/utils';
import { prefetchMemberList, useMemberList } from '@islol-api';
import {
  Button,
  FormListType,
  TableColumn,
  TableForm,
} from '@islol-components';
import { dehydrate } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import style from './index.module.scss';

const COLUMN_LIST: TableColumn[] = [
  {
    header: '계정(이메일)',
    headerId: 'email',
  },
  {
    header: '이름',
    headerId: 'name',
  },
  {
    header: '닉네임',
    headerId: 'nickName',
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
  const [isModify, setIsModify] = useState<boolean>(false);
  console.log(data);
  const methods = useForm<FormListType>({
    defaultValues: {
      memberList: (data && handleTableRowList(data, COLUMN_LIST)) || [],
    },
  });

  useEffect(() => {
    if (data) {
      methods.setValue('memberList', handleTableFormRowList(data, COLUMN_LIST));
    }
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className={cx(rootClass)}>
      <div className={cx(`${rootClass}__button-wrap`)}>
        <Button
          color={isModify ? 'orange' : 'blue'}
          onClick={() => {
            if (isModify) {
              if (
                confirm(
                  '일괄수정을 취소 하시겠습니까?\n작성했던 내용은 사라지게 됩니다.'
                )
              ) {
                setIsModify(false);
              }
            } else {
              setIsModify(!isModify);
            }
          }}
        >
          {isModify ? '수정취소' : '일괄수정'}
        </Button>
        {isModify && <Button color="blue">일괄저장</Button>}

        <Button>탈퇴</Button>
      </div>
      <FormProvider {...methods}>
        <TableForm
          columns={COLUMN_LIST}
          title="회원 목록"
          rowHeight={70}
          isModify={isModify}
        />
      </FormProvider>
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
