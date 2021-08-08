import { useState } from "react"

const Menus = () => {
  return (
    <>
      <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">SQL Editor</a>
      <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-200 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Insights</a>
      <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-200 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Visualization</a>
      <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-200 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Contact</a>
    </>
  )
}

const HeadMenus = ({ show = false, toggleShow = () => null }) => {
  return (
    <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between bg-main-primary z-20">
      <a href="#" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
        SQL Web Editor
      </a>
      <button onClick={toggleShow} className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" >
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
          {!show ?
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
            :
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          }
        </svg>
      </button>
    </div>
  )
}

const LeftSidebar = () => {
  const [show, setShow] = useState(true)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <div className={`${!show ? 'h-16' : ''} flex flex-col w-full md:hidden xl:w-64 text-white bg-main-primary dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink`}>
        <HeadMenus show={show} toggleShow={toggleShow} />
        <nav className={`flex-grow bg-main-primary transform duration-500 opacity-100 ${!show ? '-translate-y-full opacity-0 -mt-8' : ''} md:block px-4 pb-4 md:pb-0 md:overflow-y-auto`}>
          <Menus />
        </nav>
      </div>
      <div className={`hidden md:flex flex-col w-full md:w-40 xl:w-64 text-white bg-main-primary dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink`}>
        <HeadMenus show={show} toggleShow={toggleShow} />
        <nav className={`flex-grow bg-main-primary md:block px-4 pb-4 md:pb-0 md:overflow-y-auto`}>
          <Menus />
        </nav>
      </div>
    </>
  )
}

export default LeftSidebar
