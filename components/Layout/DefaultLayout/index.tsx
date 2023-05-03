import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

export interface DefaultLayoutProps {
  /** 레이아웃 타입 */
  layoutType?: 'base' | 'admin';
  /** 페이지 타이틀 */
  title?: ReactNode;
  /** 페이지 내용 */
  children: ReactNode | string;
}

export const DefaultLayout = ({
  layoutType = 'base',
  title,
  children,
}: DefaultLayoutProps) => {
  return (
    <div>
      디폴트 레이아웃 테스트입니다.
      {children}
    </div>
  );
};

export default DefaultLayout;
