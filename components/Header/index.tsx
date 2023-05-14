import React from 'react';
import Button from '../Button';
import classNames from 'classnames/bind';
import style from './index.module.scss';
import Typography from '../Typography';

const cx = classNames.bind(style);

export interface HeaderProps {
  type?: 'base' | 'admin';
}

/* TODO admin 임시로 넣어줌. */
export const Header = ({ type = 'admin' }: HeaderProps) => {
  return (
    <header
      className={cx('header-root', type === 'admin' && `header-root--${type}`)}
    >
      {type !== 'admin' && <div className={cx('header-root__logo')}>LOGO</div>}
      <nav
        className={cx(
          'header-root__nav',
          type === 'admin' && `header-root__nav--${type}`
        )}
      >
        <Button
          variant="text"
          color={(type !== 'admin' && 'white') || undefined}
        >
          <Typography type="B1" weight="medium">
            Home
          </Typography>
        </Button>
        <Button
          variant="text"
          color={(type !== 'admin' && 'white') || undefined}
        >
          <Typography type="B1" weight="medium">
            LCI영상
          </Typography>
        </Button>
        <Button
          variant="text"
          color={(type !== 'admin' && 'white') || undefined}
        >
          <Typography type="B1" weight="medium">
            명예의전당
          </Typography>
        </Button>
        <Button
          variant="text"
          color={(type !== 'admin' && 'white') || undefined}
        >
          <Typography type="B1" weight="medium">
            커뮤니티
          </Typography>
        </Button>
        <Button
          variant="text"
          color={(type !== 'admin' && 'white') || undefined}
        >
          <Typography type="B1" weight="medium">
            모임 운영현황
          </Typography>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
