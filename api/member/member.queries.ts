import { QueryClient } from '@tanstack/react-query';
import { getMemberList } from './member.api';

/**
 * 회원 목록
 * @param
 */
export const prefetchMemberList = async (): Promise<QueryClient> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['memberList'], () => getMemberList());

  return queryClient;
};
