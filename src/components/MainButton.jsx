import React from 'react'

const MainButton = ({title , type}) => {
  return (
      <button
          className={`w-full py-2 mt-6 rounded-lg  bg-blue-600 hover:bg-blue-700 text-white`}
        //   type={type ? type : "submit"}
      >
          {title}
      </button>
  )
}

export default MainButton
