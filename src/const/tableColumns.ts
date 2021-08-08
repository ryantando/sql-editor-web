import { Column } from "react-table";

export const queryResultColumns: Column<object>[] = [
  {
    Header: 'productID',
    accessor: 'productID',
    width: 90
  },
  {
    Header: 'productName',
    accessor: 'productName',
  },
  {
    Header: 'supplierID',
    accessor: 'supplierID',
    width: 90
  },
  {
    Header: 'categoryID',
    accessor: 'categoryID',
    width: 90
  },
  {
    Header: 'quantityPerUnit',
    accessor: 'quantityPerUnit',
  },
  {
    Header: 'unitPrice',
    accessor: 'unitPrice',
    width: 90
  },
  {
    Header: 'unitsInStock',
    accessor: 'unitsInStock',
    width: 110
  },
  {
    Header: 'unitsOnOrder',
    accessor: 'unitsOnOrder',
    width: 120
  },
  {
    Header: 'reorderLevel',
    accessor: 'reorderLevel',
    width: 110
  },
  {
    Header: 'discontinued',
    accessor: 'discontinued',
    width: 110
  },
]
