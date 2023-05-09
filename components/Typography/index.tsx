import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import style from './index.module.scss';

export const TypographyType = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  B1: 'B1',
  B2: 'B2',
  B3: 'B3',
  C1: 'C1',
  C2: 'C2',
  C3: 'C3',
} as const;

export type TypographyTag = keyof Omit<
  HTMLElementTagNameMap,
  | 'audio'
  | 'base'
  | 'body'
  | 'br'
  | 'button'
  | 'canvas'
  | 'cider'
  | 'data'
  | 'details'
  | 'dialog'
  | 'embed'
  | 'fieldset'
  | 'form'
  | 'head'
  | 'hgroup'
  | 'html'
  | 'iframe'
  | 'img'
  | 'input'
  | 'link'
  | 'main'
  | 'map'
  | 'menu'
  | 'meta'
  | 'meter'
  | 'object'
  | 'optgroup'
  | 'picture'
  | 'progress'
  | 'q'
  | 'script'
  | 'section'
  | 'select'
  | 'source'
  | 'textarea'
  | 'title'
  | 'track'
  | 'video'
>;

export interface TypographyType {
  /** 텍스트 타입 */
  type?: keyof typeof TypographyType;
  /** html 태그 */
  tag?: TypographyTag;
  /** font weight */
  weight?: 'regular' | 'medium' | 'bold';
  /** 스타일 재정의 */
  className?: string;
  /** text */
  children: ReactNode;
}

const cx = classNames.bind(style);

const Typography = ({
  type = 'B2',
  tag = 'span',
  weight = 'regular',
  className,
  children,
}: TypographyType) => {
  const Component = tag;
  return (
    <Component
      className={cx(
        'typography',
        {
          [`typography--${type}`]: type,
          [`typography--${weight}`]: weight,
        },
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
