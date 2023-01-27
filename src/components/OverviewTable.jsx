import React, {useMemo, useEffect, useState} from 'react'
import { useTable,
   useGlobalFilter, 
   useAsyncDebounce,  
   usePagination, 
   useRowSelect} from "react-table";
import { useRowSelectColumn } from '@lineup-lite/hooks';
import { customersData } from '../data/dummy';
import { Button, PageButton } from '../contexts/Button'
import { classNames } from '../contexts/utils';
import { GrFormSearch } from 'react-icons/gr';
import {DOTS, useCustomPagination} from './useCustomPagination';

 export function GlobalFilter({
    globalFilter,
    setGlobalFilter,
    placeholder
  }) {
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <span className='flex justify-between  -pt-6 pb-7 '>
       {/* <GrFormSearch fontSize={30} color='gray' className='absolute text-center text-gray-500 mt-3 ml-3 min-w-40'/> */}
        <input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          className='w-4/12 h-10 rounded-xl text-sm border p-4 text-myblue cursor' 
          type="search"  
          placeholder={placeholder}
        />
         <button 
        className='bg-white rounded-xl p-4 border-1 cursor-pointer'>
            programmer
        </button>
      </span>
    )
  };  

export function StatusPill({ value }) {
  const status = value ? value : "unknown";

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("cloturé") ? "bg-green-100 text-green-700" : null,
        status.startsWith("en attente") ? "bg-yellow-100 text-yellow-700" : null,
        status.startsWith("annulé") ? "bg-red-100 text-red-700" : null
      )}
    >
      {status}
    </span>
  );
}





const OverviewTable = ({placeholder}) => {

  const data = useMemo(() => customersData(), []);
  
  
    const columns = useMemo(() => [
      {
        Header: "Id",
        accessor: "customer",
       imgAccessor: "imgUrl",
       numAccessor: "customerNumber",
      },
      {
        Header: "Niveau",
        accessor: "deposit",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Semestre",
        accessor: "voucherNo",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
     
], []);

    const { getTableProps,
            getTableBodyProps, 
            headerGroups, 
            prepareRow,
            page, 
            canPreviousPage,
            canNextPage,
            nextPage,
            previousPage,
            gotoPage,
            pageCount,
            setPageSize,
            state, 
            preGlobalFilteredRows,
            setGlobalFilter,  } =
            useTable({
            columns,
            data,
            },
            useGlobalFilter,
            usePagination, 
            useRowSelect,
            useRowSelectColumn
            );
            const {pageIndex} = state;
            const paginationRange = useCustomPagination({
              totalPageCount: pageCount,
              currentPage: pageIndex
          });
          console.log(paginationRange);
      
            useEffect(() => {
                  setPageSize(5);
            }, [setPageSize]);
            
        
  return (
    <div>
        <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
        placeholder={placeholder}
         />
         <div className="-mt-3 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-2 sm:-mx-6 lg:-mx-8">
              <div  className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className=" overflow-hidden  sm:rounded-lg">
                    <table {...getTableProps()} className="min-w-full divide-y ">
                      <thead className="">
                      {headerGroups.map((headerGroup) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column) => (
                                  <th {...column.getHeaderProps()}
                                  className="px-6 py-5 text-left text-sm  text-gray-400  rounded-sm tracking-wider"
                                  >
                                    {column.render("Header")}
                                    {column.id === 'selection' && column.render('Summary')}
                                    </th>
                              ))}
                          </tr>
                      ))}
                  </thead>
                  <tbody {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200">
                    {page.map((row, i) => {
                      prepareRow(row);
                      return (
                          <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                              return <td {...cell.getCellProps()} className="px-6 py-5 whitespace-nowrap text-xs">{cell.render("Cell")}</td>
                          })}
                          </tr>
                      );
                      })}
                  </tbody>
                    </table>
                </div>
              </div>
          </div>
         </div>

         <div className="py-3 flex items-center text-center justify-center pt-10">
        <div className="flex-1 flex justify-between md:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between" aria-label="Pagination">
          <div className="relative z-0 inline-flex items-center ml-auto mr-auto rounded-md shadow-sm space-x-10" aria-label="Pagination">
                {paginationRange?.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return (
                            <PageButton
                            key={index}>...</PageButton>
                        );
                    }

                    if ((pageNumber - 1) === pageIndex) {
                        return (
                            <PageButton
                                key={index}
                                className=' active:bg-myred active:border-gray-300'
                                onClick={() => gotoPage(pageNumber - 1)}>{pageNumber}</PageButton>
                        );
                    }

                    return (
                        <PageButton
                            key={index}
                            className='active:bg-myred active:border-gray-300'
                            onClick={() => gotoPage(pageNumber - 1)}>{pageNumber}</PageButton>
                    );
                })}
             </div>
          </div>
            </div>
          </div>
  )
}

export default OverviewTable