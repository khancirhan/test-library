import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ForwardedRef } from 'react';
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    ref?: ForwardedRef<HTMLButtonElement>;
}
declare const Button: FC<ButtonProps>;
export default Button;
