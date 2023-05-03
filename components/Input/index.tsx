import Form from 'react-bootstrap/Form';

export interface InputProps {
  id: number;
  type: string;
  placeholder: string;
  className?: string;
}

export function Input({ type, placeholder, className }: InputProps) {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      className={className + ' p-3'}
    />
  );
}

export interface FormInputsProps {
  inputs: InputProps[];
}

export function Inputs({ inputs }: FormInputsProps) {
  const inputElements = inputs.map((input) => (
    <Input key={input.id} {...input} />
  ));

  return <>{inputElements}</>;
}

export default Inputs;
