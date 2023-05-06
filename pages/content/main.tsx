import CenterForm from '@/components/Layout/CenterForm';
import { Inputs, Table } from '@components';
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
            rowHighlight: true,
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
