import { ReactNode } from 'react';

interface LayoutProps {
  className?: string;
  title?: string;
  children: ReactNode;
}

function CenterForm({ children, className, title }: LayoutProps) {
  return (
    <div className="container-fluid px-0 h-100">
      <div className="row justify-content-center align-items-center no-gutters h-100">
        <div
          className={`col-10 col-sm-10 col-md-8 col-lg-6 col-xl-3 ${className}_form`}
        >
          <h1 className="text-center mb-5">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CenterForm;
