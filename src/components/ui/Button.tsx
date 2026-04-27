import type { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  className?:string;
  onClick?: () => void;
  width?:'w-full'| 'w-fit'
}

const Button = ({children , className , width="w-full" , ...rest }: Iprops) => {
  return (
  
   <button className={`${className} ${width} 
    p-2 rounded-md text-white` }
   {...rest}> {children} </button>
    
  )
}

export default Button;