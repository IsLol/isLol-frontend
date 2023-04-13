import Form from 'react-bootstrap/Form';

interface InputProps {
  id: number;
  type: string;
  placeholder: string;
  className?: string;
}

function Input({ type, placeholder, className }: InputProps) {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      className={className + ' p-3'}
    />
  );
}

interface FormInputsProps {
  inputs: InputProps[];
}

function Inputs({ inputs }: FormInputsProps) {
  const inputElements = inputs.map((input) => (
    <Input key={input.id} {...input} />
  ));

  return <>{inputElements}</>;
}

export default Inputs;
