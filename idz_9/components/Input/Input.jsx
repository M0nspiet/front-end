import React from "react"

export const Input = ({children,lableTitle ,...props}) => {
  return (
    <label>
        <span>{children}</span>
        <input {...props}/>
    </label>
  )

};