import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Sidebar from '../Sidebar';

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
  layoutType = 'admin',
  title,
  children,
}: DefaultLayoutProps) => {
  return (
    <div className={cx('default-layout')}>
      {layoutType === 'admin' ? (
        <Sidebar>{children}</Sidebar>
      ) : (
        <div>layout</div>
      )}
    </div>
  );
};

export default DefaultLayout;
