import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
const Table = ({ data, columns }) => {
  const [sorting, setSorting] = useState();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const totalPages = table.getPageOptions();

  return (
    <div className="w-full">
      <div className="border-2 border-color7 rounded-t">
        <table className="text-left w-full">
          <thead>
            {table?.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-5 py-4 text-sm text-color1 font-semibold cursor-pointer sticky top-0 z-10"
                  >
                    <div>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {
                        { asc: "↑", desc: "↓" }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>
      </div>
      <div className="max-h-96 overflow-y-scroll w-full">
        <table className="w-full">
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr className="w-full border-2 border-color7" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="px-5 py-4 text-[#7A8C99] text-sm font-medium"
                    key={cell.id}
                  >
                    {cell.column.id === "Status" ? (
                      cell.value === "true" ? (
                        <img src="/assets/practice/false.svg" alt="icon" />
                      ) : (
                        <img src="/assets/practice/true.svg" alt="icon" />
                      )
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="flex items-center justify-end gap-4 mt-7">
        <span className="text-sm font-semibold text-[#7A8C99]">
          Showing{" "}
          <span className="text-color4">{table.getPageCount()}Records</span> on
          a page
        </span>
        <div className=" flex items-center justify-between gap-4">
          <button
            onClick={() => table.previousPage()}
            className="text-[#26A4FF] disabled:text-[#7A8C99] disabled:cursor-not-allowed"
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <div className="flex items-center gap-2">
            {totalPages?.map((page, index) => (
              <button
                key={index}
                onClick={() => table.setPageIndex(index)}
                className={`w-6 h-6 rounded-full border-2 border-[#7A8C99] text-xs ${
                  index ? "text-gray-800" : "text-red-700"
                } `}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="text-[#26A4FF] disabled:text-[#7A8C99] disabled:cursor-not-allowed "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
