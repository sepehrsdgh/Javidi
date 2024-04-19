import React from 'react'

export default function SmallRec(props) {
    const {height="h-8",rotate}=props
  return (
    <div className={`bg-[#5BA446] w-[1.5px] ${height}  ${rotate}`}></div>
  )
}
