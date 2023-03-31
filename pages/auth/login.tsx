import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Inputs from '@/components/Input';
import CenterForm from '@/components/layout/centerForm';

function Login() {
  const router = useRouter();
  const inputProps = [
    {
      id: 1,
      type: 'text',
      placeholder: 'id',
      margin: 'mb-2',
    },
    {
      id: 2,
      type: 'password',
      placeholder: 'password',
    },
  ];

  function handleClick() {
    router.push('signup');
  }

  return (
    <CenterForm className="login" title="로그인">
      <Inputs inputs={inputProps} />
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          로그인
        </Button>
      </div>
      <div className="mt-3 text-center">
        <a className="me-5" onClick={handleClick}>
          회원가입
        </a>
        <a href="" className="me-5">
          아이디찾기
        </a>
        <a href="">비밀번호찾기</a>
      </div>
    </CenterForm>
  );
}
export default Login;
