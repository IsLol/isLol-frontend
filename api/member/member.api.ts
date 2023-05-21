import axios from 'axios';

/**
 * 회원목록 조회
 * @param
 */
export async function getMemberList(): Promise<any> {
  const { data } = await axios.get('http://localhost:8080/member/member-list');
  return data;
}
