import React from 'react';
import Button from '../Button';
import classNames from 'classnames/bind';
import style from './index.module.scss';

const cx = classNames.bind(style);
export interface HeaderProps {
  type?: 'default' | 'admin';
}

/* TODO admin 임시로 넣어줌. */
export const Header = ({ type = 'admin' }: HeaderProps) => {
  return (
    <header className={cx('header-root')}>
      {type === 'admin' && <div className={cx('header-root__logo')}>LOGO</div>}
      <nav className={cx('header-root__nav')}>
        <Button variant="text" color="white">
          Home
        </Button>
        <Button variant="text" color="white">
          LCI영상
        </Button>
        <Button variant="text" color="white">
          명예의전당
        </Button>
        <Button variant="text" color="white">
          커뮤니티
        </Button>
        <Button variant="text" color="white">
          모임 운영현황
        </Button>
      </nav>
    </header>
  );
};

export default Header;
