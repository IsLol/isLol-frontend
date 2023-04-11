import Inputs from '@/components/Input';
import { Button } from 'react-bootstrap';
import CenterForm from '@/components/layout/centerForm';

function SiginUp() {
  const inputProps = [
    {
      id: 1,
      type: 'text',
      placeholder: 'email',
      margin: 'mb-2',
    },
    {
      id: 2,
      type: 'password',
      placeholder: 'password',
    },
    {
      id: 3,
      type: 'password',
      placeholder: 'password',
    },
    {
      id: 4,
      type: 'text',
      placeholder: 'name',
    },
    {
      id: 5,
      type: 'text',
      placeholder: 'nickname',
    },
    {
      id: 6,
      type: 'text',
      placeholder: 'phone',
    },
  ];

  return (
    <CenterForm className="signup" title="회원가입">
      <Inputs inputs={inputProps} />
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          가입하기
        </Button>
      </div>
    </CenterForm>
  );
}

export default SiginUp;
