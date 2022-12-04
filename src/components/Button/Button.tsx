import React,{FC,ButtonHTMLAttributes,AnchorHTMLAttributes} from 'react'
import classNames from 'classnames'

export type ButtonSize='lg'|'sm'

export type ButtonType='primary'|'default'|'dander'|'link'

interface BaseButtonProps{
    clasName?:string,
    /**Button的禁用 */
    disabled?:boolean,
    size?:ButtonSize,
    btnType?:ButtonType,
    childen:React.ReactNode,
    href?:string
}

// ButtonHTMLAttributes 是button所有原生属性类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
// a 链接原生属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
// TS Utility Types : Partial 属性可选，并不是都有的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;


 export const Button:FC<ButtonProps>=(props)=>{
    const {
        btnType,
        className, // 用户自定义className
        disabled,
        size,
        children,
        href,
        ...restProps //  包含了其他的所有原生属性
      } = props;
      const classes=classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        disabled:btnType==='link'&&disabled
      })
      if(btnType==='link' && href){
        return (
            <a className={classes} href={href} {...restProps}>
              {children}
            </a>
          );
      }else{
        return (
            <button className={classes} disabled={disabled} {...restProps}>
              {children}
            </button>
          );
      }

}
Button.defaultProps = {
    disabled: false,
    btnType: "default",
  };

export default Button