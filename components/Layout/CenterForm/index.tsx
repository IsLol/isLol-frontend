import { ReactNode } from 'react';

export interface LayoutProps {
  className?: string;
  title?: string;
  children: ReactNode;
  defaultWidth: string;
}

export function CenterForm({
  children,
  className,
  title,
  defaultWidth,
}: LayoutProps) {
  return (
    <div className="row justify-content-center align-items-center no-gutters h-100">
      <div
        className={`col-10 col-sm-10 col-md-8 col-lg-6 col-xl-${defaultWidth} ${className}_form`}
      >
        <h1 className="text-center mb-5">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default CenterForm;
