import React from 'react'

const Button = ({passName,bgColor,cursorChange,textColor}) => {
  return (
    <div>
      <button className={`p-2 m-2 h-10 ${bgColor ? bgColor: 'bg-white'} ${cursorChange ? cursorChange:'cursor-pointer'} ${textColor ? textColor:'text-black'} border border-blue-950 rounded-md `}>{passName}</button>
    </div>
  )
}

export default Button
