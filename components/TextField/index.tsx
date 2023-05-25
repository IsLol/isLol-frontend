import React, {
  FocusEventHandler,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react';

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** custom style  */
  className?: string;
  /** textField 지정 너비, '100px' 형식 */
  width?: string;
  /** Textfield Label */
  label?: string | ReactNode;
  isShowLabel?: boolean;
  /** labelFont weight Label */
  weight?: 'regular' | 'medium' | 'bold';
  /** label default style이 필요 여부 */
  isLabelStyle?: boolean;
  /** 텍스트 삭제 기능 없으면 동작하지 않고, value | defaultValue 주입시 length에 따라 동작 */
  clearable?: string;
  /** 에러 스타일 적용을 위한 props */
  isError?: boolean;
  /** 에러 메시지 적용을 위한 props */
  errorMessage?: string;
  /** 성공 스타일 적용을 위한 props */
  isSuccess?: boolean;
  /** 성공 메시지 적용을 위한 props */
  successMessage?: string;
  /** 성공이나 에러 아닌 경우 보일 메시지 적용을 위한 props */
  normalMessage?: string;
  /** 텍스트 정렬 */
  align?: 'left' | 'right';
  /** 전화번호 자동 - 추가*/
  isPhoneNumber?: boolean;
  /** 사업자번호 자동 - 추가*/
  isBusinessNumber?: boolean;
  /** 왼쪽 아이콘 */
  iconLeft?: ReactNode;
  /** 오른쪽 아이콘 */
  iconRight?: ReactNode;
  /** onFocus Event*/
  onFocus?: FocusEventHandler;
  disabled?: boolean;
  /** 숫자만 입력 가능 여부 */
  onlyNumbers?: boolean;
  /** 숫자일 때 3자리마다 콤마 추가 여부 */
  hasComma?: boolean;
  /** 특수문자 제거 여부 */
  isBlockSpecialCharacter?: boolean;
  /** Textfield 오른쪽에 있는 button의 라벨. 라벨 안 주는 경우 버튼이 없음 */
  buttonLabel?: string;
  /** Textfield 오른쪽에 있는 button의 색깔 */
  buttonColor?: 'black' | 'white';
  /** Textfield 오른쪽에 있는 button의 event handler */
  onButtonClick?: () => void;
}

export function TextField(
  props: TextFieldProps,
  ref?: ForwardedRef<HTMLInputElement>
) {
  const {
    width,
    className,
    name,
    id,
    label,
    isShowLabel = true,
    isLabelStyle = true,
    type,
    required,
    clearable,
    isError,
    errorMessage,
    isSuccess,
    successMessage,
    normalMessage,
    align,
    isPhoneNumber,
    isBusinessNumber,
    iconLeft,
    iconRight,
    children,
    onFocus,
    onlyNumbers,
    weight = 'bold',
    hasComma,
    isBlockSpecialCharacter,
    buttonLabel,
    buttonColor = 'black',
    onButtonClick,
    ...rest
  } = props;

  return <input />;
}

export default forwardRef(TextField);
