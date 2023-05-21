import CenterForm from '@/components/Layout/CenterForm';
import { Inputs } from '@islol-components';
import { Button, InputGroup } from 'react-bootstrap';

function Main() {
  const inputProps = [
    {
      id: 1,
      type: 'text',
      placeholder: '검색어입력',
    },
  ];

  return (
    <div className="container-fluid px-0">
      <h2 className="text-center">검색</h2>
      <CenterForm className="login" defaultWidth="4">
        <InputGroup>
          <Inputs inputs={inputProps} />
          <Button variant="primary">로그인</Button>
        </InputGroup>
      </CenterForm>
    </div>
  );
}

export default Main;
