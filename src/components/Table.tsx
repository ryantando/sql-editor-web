import React from 'react'
import { useTable, useSortBy, useRowSelect, useBlockLayout, Column } from 'react-table'
import { useSticky } from "react-table-sticky";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest } : any, ref: any) => {
    const defaultRef = React.useRef<any>()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      if (resolvedRef?.current) {
        resolvedRef.current.indeterminate = indeterminate
      }
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} style={{ ...rest?.style, width: 20, height: 20 }} />
      </>
    )
  }
)

const Table = ({
  columns,
  data,
}: {
  columns: Column<object>[]
  data: any
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn: {
        minWidth: 50,
        maxWidth: 400,
      }
    },
    useSortBy,
    useRowSelect,
    useSticky,
    useBlockLayout,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          width: 10,
          // @ts-ignore
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div className="w-full h-full flex justify-center items-center">
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div className="w-full h-full flex justify-center items-center">
              {/* @ts-ignore */}
              <IndeterminateCheckbox {...row?.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  return (
    <>
      <div>Showing {rows.length} rows</div>
      <br />
      <div
        {...getTableProps()}
        className="table sticky"
      >
        <div className="header">
          {headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr flex">
              {headerGroup.headers.map(column => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ maxHeight: '50vh' }} {...getTableBodyProps()} className="body overflow-y-scroll">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="flex tr">
                {row.cells.map(cell => {
                  return (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render("Cell")}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Table
