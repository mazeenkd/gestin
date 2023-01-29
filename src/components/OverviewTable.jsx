import React, {useMemo, useEffect, useRef,useState} from 'react'
import { useTable,
   useGlobalFilter, 
   useAsyncDebounce,  
   usePagination, 
   useRowSelect} from "react-table";
import { useRowSelectColumn } from '@lineup-lite/hooks';
import { useNavigate } from "react-router-dom";
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
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
    const [date, setDate] = useState('');
      const dateInputRef = useRef(null);
    
      const handleChange = (e) => {
        setDate(e.target.value);
      };
    return (
      <span className='flex justify-between ml-60  -pt-6 pb-7 '>
       {/* <GrFormSearch fontSize={30} color='gray' className='absolute text-center text-gray-500 mt-3 ml-3 min-w-40'/> */}
        <input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          className='w-4/12 ml-auto mr-8 h-10 rounded-xl text-sm border p-2 text-myblue cursor' 
          type="search"  
          placeholder={placeholder}
        />
         <button 
        className='text-white bg-myblue border-1 border-white hover:bg-white hover:text-myblue hover:border-1 hover:border-myblue font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 cursor-pointer'
        onClick={() => setShowModal(true) }>
          programmer
        </button>
        {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-myblue shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-sm font-medium ">programmer une comité pédagogique</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-white shadow-xs rounded px-8 pt-6 pb-8 w-full">
                    <label className="block my-2 text-black text-xs font-bold mb-1">
                      niveau
                    </label>
                    <select niveau={value} onChange={handleChange} className="shadow  my-2 appearance-none border-1 border-black outline-none rounded w-full py-2 px-1 text-black">
                    <option value={1}>1 CP</option>
                    <option value={2}>2 CP</option>
                    <option value={3}>1 CS</option>
                    <option value={4}>2 CS</option>
                    <option value={5}>3 CS</option>
                    </select>
                    <label className="block  my-2 text-black text-xs font-bold mb-1" >
                      date
                    </label>
                    <input type="date" className="shadow  my-2 appearance-none border outline-none rounded w-full py-2 px-1 text-black" onChange={handleChange} ref={dateInputRef} />
                    <label className="block  my-2 text-black text-xs font-bold mb-1">
                      heure
                    </label>
                    <input type="time" className="shadow  my-2 appearance-none border-1 border-black outline-none rounded w-full py-2 px-1 text-black" />
                    
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-myred background-transparent font-bold uppercase px-6 py-2 text-xs outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    annuler
                  </button>
                  <button
                    className="text-white bg-myblue font-medium uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    confirmer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
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
            // useRowSelectColumn
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
            
            
            const navigate = useNavigate();
            
            const handleRowClick = (row) => {
            navigate(`/Infos`, {replace: true});
            }  
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
                          <tr className='hover:bg-myblue hover:bg-opacity-30 cursor-pointer' {...row.getRowProps()} onClick={()=> handleRowClick(row)}>
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