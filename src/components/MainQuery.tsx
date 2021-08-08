import dynamic from 'next/dynamic'
import { useState } from 'react';
import { queryResultColumns } from '../const/tableColumns';
import { productsData } from '../const/tableDummyData';
import { LoadingMessage } from './Loading';
import RightSidebarQuery from './RightSidebarQuery';

const ResizePanel = dynamic(() => import("react-resize-panel-ts"), { ssr: false });
const Table = dynamic(() => import('./Table'), {});
const AceEditor = dynamic(() => import("./AceEditorSSR"), { ssr: false });

const MainQuery = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [value, setValue] = useState("SELECT *\nFROM products\nLIMIT 100")

  const executeQuery = () => {
    setLoading(true)
    setTimeout(() => {
      setData(productsData)
      setLoading(false)
    }, 1000);
  }

  const onChangeVal = (e) => setValue(e)

  return (
    <div className="flex-1 bg-white text-gray-600 pt-10 overflow-y-scroll max-h-screen">
      <div className="w-full flex flex-col">
        <h1 className="px-10 text-xl font-bold">SQL Editor</h1>
        <div className="border-b-2 border-gray-200 pt-6">
          <ul className='flex cursor-pointer px-10'>
            <li className='py-2 px-6 border-t-2 border-l-2 border-r-2 border-gray-200 rounded-t-lg'>products-query</li>
            <li className='py-2 px-6 rounded-t-lg bg-gray-200 text-xl text-gray-600'>+</li>
          </ul>
        </div>
        <RightSidebarQuery className="block col-span-4 px-10 py-2 md:hidden" onExecute={executeQuery} />
        <ResizePanel direction="s" style={{ height: '40vh', minHeight: '50vh' }}>
          <div className="grid grid-cols-4 gap-4 px-6 py-4 h-full">
            <div className="col-span-4 md:col-span-3 p-2">
              <AceEditor
                mode="sql"
                theme="chrome"
                name="query"
                showPrintMargin={false}
                fontSize={15}
                style={{ height: '100%',  width: '100%' }}
                value={value}
                onChange={onChangeVal}
              />
            </div>
            <RightSidebarQuery className="hidden md:block md:col-span-1" onExecute={executeQuery} />
          </div>
        </ResizePanel>

        <div className="z-20 flex-grow">
          <div className="table-style max-w-full overflow-scroll bg-gray-100 mt-2 p-4" style={{ minHeight: '30vh' }}>
            <LoadingMessage loading={loading} message="Querying..." />
            {data.length > 0 ? (
              <Table
                columns={queryResultColumns}
                data={productsData}
              />
            ) : (
              <p className="p-5 text-md">Click <b>Execute Query</b> to show the results</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainQuery
