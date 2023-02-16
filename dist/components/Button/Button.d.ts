import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'dander' | 'link';
interface BaseButtonProps {
    clasName?: string;
    /**Button的禁用 */
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    childen: React.ReactNode;
    href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: FC<ButtonProps>;
export default Button;
