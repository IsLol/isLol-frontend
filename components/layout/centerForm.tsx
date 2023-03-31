import styles from '@/pages/auth/login.module.css';
import { ReactNode } from 'react';

interface LayoutProps {
  className?: string;
  title?: string;
  children: ReactNode;
}

function CenterForm({ children, className, title }: LayoutProps) {
  return (
    <div className="container" id={styles.container}>
      <div className={`${className}_form`} id={styles.loginForm}>
        <h1 className="text-center mb-5">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default CenterForm;
