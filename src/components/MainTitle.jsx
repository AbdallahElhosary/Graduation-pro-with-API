import React from 'react'

const MainTitle = ({ title ,color }) => {
  return (
    <h3 className={`m-3 relative main-title w-fit py-2 blod ${color ? `text-${color}-600` : ""}`} >
          {title}
    </h3>
  )
}

export default MainTitle
