import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ForwardedRef, forwardRef } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    ref?: ForwardedRef<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = forwardRef((props, ref) => {
    const { children, ...rest } = props;

    return (
        <button ref={ref} {...rest}>
            {children}
        </button>
    );
});

export default Button;
