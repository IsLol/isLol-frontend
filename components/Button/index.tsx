import classNames from 'classnames/bind';
import React, {
  MouseEventHandler,
  forwardRef,
  ForwardedRef,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import style from './index.module.scss';

export interface ButtonProps {
  /** 스타일 재정의 */
  className?: string;
  /** 클릭이벤트 */
  onClick?: MouseEventHandler<HTMLButtonElement & HTMLAnchorElement>;
  /** 버튼 스타일 구분 */
  variant?: 'default' | 'text';
  /** 버튼 색상 */
  color?: 'orange' | 'blue' | 'gray' | 'green' | 'violet' | 'white';
  /** 비활성화 유무 */
  disabled?: boolean;
  /** 버튼 타입 */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /** 버튼 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 밑줄 */
  underline?: boolean;
  children: ReactNode;
}

const cx = classNames.bind(style);

const Button = forwardRef(function Button(
  {
    className,
    onClick,
    variant = 'default',
    color = 'gray',
    disabled = false,
    children,
    size = 'medium',
    underline = false,
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const classes = cx(
    'button',
    variant,
    size,
    color,
    underline && 'underline',
    disabled && 'disabled',
    className
  );

  return (
    <button className={classes} ref={ref} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
