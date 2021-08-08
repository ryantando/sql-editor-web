const RightSidebarQuery = ({ className = '', onExecute = () => null }) => {
  return (
    <div className={className}>
      <div className="flex flex-col justify-between h-full overflow-hidden w-full">
        <div>
          <h2 className="font-bold">Options</h2>
          <div className="my-2">
            <h3>Environment</h3>
            <div className="border-blue-300 border-2 rounded py-2 px-1">
              <select id="environment" name="environment" className="h-5 w-full py-0 pl-2 pr-7 bg-transparent text-gray-500 sm:text-sm outline-none">
                <option>Production</option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <h3>Schema</h3>
            <div className="border-blue-300 border-2 rounded py-2 px-1">
              <select id="schema" name="schema" className="h-5 w-full py-0 pl-2 pr-7 bg-transparent text-gray-500 sm:text-sm outline-none">
                <option>Default</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="bg-blue-300 text-main-primary p-3 rounded mb-3">
            Save
          </button>
          <button onClick={onExecute} className="bg-main-primary text-white p-3 rounded">
            Execute Query
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightSidebarQuery
