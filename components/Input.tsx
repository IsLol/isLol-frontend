import Form from 'react-bootstrap/Form';
import styles from '@/pages/auth/login.module.css';

interface InputProps {
  id: number;
  type: string;
  placeholder: string;
  margin?: string;
}

function Input({ type, placeholder, margin }: InputProps) {
  return (
    <div className="mb-3" id={styles.idPwWrap}>
      <Form.Control type={type} placeholder={placeholder} className={margin} />
    </div>
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
