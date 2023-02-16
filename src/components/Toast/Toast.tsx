import React from 'react'

export interface BaseToastProps{
  text?:string,
  position?:'center'|'top'|'bottom'
}

export type ToastProps = Partial<BaseToastProps>;

export const Toast:React.FC<ToastProps> =()=>{
  return <div>1</div>
}

Toast.defaultProps={
  text:'hello',
  position:'center'
}

export default Toast