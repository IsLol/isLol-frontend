import { Inputs, CenterForm } from '@islol-components';
import { Button } from 'react-bootstrap';

function SiginUp() {
  const inputProps = [
    {
      id: 1,
      type: 'text',
      placeholder: 'email',
      className: 'mb-2',
    },
    {
      id: 2,
      type: 'password',
      placeholder: 'password',
      className: 'mb-2',
    },
    {
      id: 3,
      type: 'password',
      placeholder: 'password',
      className: 'mb-2',
    },
    {
      id: 4,
      type: 'text',
      placeholder: 'name',
      className: 'mb-2',
    },
    {
      id: 5,
      type: 'text',
      placeholder: 'nickname',
      className: 'mb-2',
    },
    {
      id: 6,
      type: 'text',
      placeholder: 'phone',
      className: 'mb-4',
    },
  ];

  return (
    <CenterForm className="signup" title="회원가입" defaultWidth="3">
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
