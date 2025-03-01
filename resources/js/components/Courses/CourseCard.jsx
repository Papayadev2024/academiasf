import Tippy from "@tippyjs/react"
import React from "react"
import html2string from "../../Utils/html2string"

const CourseCard = ({ imagen, producto, extract, description, hasShadow = false, ...props }) => {
  return <Tippy content={producto}>
    <button className={`w-full max-w-sm relative inline-flex items-center text-sm text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400 bg-white px-4 py-3 rounded-md ${hasShadow && 'shadow-md'}`} {...props}>
      <div className="flex-shrink-0">
        <img className="rounded-md w-11 h-11 object-cover object-center" src={`/${imagen}`} onError={e => e.target.src = '/images/img/noimagen.jpg'} alt={producto} />
      </div>
      <div className="w-full ps-3 text-start">
        <h4 className='w-[calc(100%-40px)] font-semibold text-ellipsis text-nowrap overflow-hidden '>{producto}</h4>
        <div className="w-[calc(100%-40px)] text-gray-500 text-xs mb-1.5 dark:text-gray-400 line-clamp-2 text-ellipsis">
          {extract || (description ? html2string(description) : '- Sin descripción -')}
        </div>
      </div>
    </button>
  </Tippy>
}

export default CourseCard