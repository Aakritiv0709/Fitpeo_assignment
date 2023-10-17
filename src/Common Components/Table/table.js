import React from "react";

const Table = ({ tableType, data, columns, onActionClick }) => {
  return (
    <div className="overflow-x-auto">
      <div className="w-full">
        <div className="flex bg-[#040440] rounded-md overflow-x-auto">
          {columns.map((column, index) => {
            return (
              <div key={index} className="flex-1 p-4 text-white">
                {column.title}
              </div>
            );
          })}

          {tableType !== "appointments" && (
            <div className="flex-1 p-4 text-white">Download</div>
          )}
          {tableType !== "appointments" && (
            <div className="flex-1 p-4 text-white">Delete</div>
          )}
        </div>
        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center bg-white border border-[#E9EFF4] my-3 rounded-lg overflow-auto"
          >
            {columns.map((col) => (
              <div key={col.key} className="flex-1 p-4 text-[#828282]">
                {row[col.key]}
              </div>
            ))}

            {tableType !== "appointments" && (
              <div className="flex-1 p-4">
                <div className="bg-primary inline-block rounded-lg">
                  <button
                    onClick={() => onActionClick(row)}
                    className="text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-[0.3s]"
                  >
                    Download
                  </button>
                </div>
              </div>
            )}

            {tableType !== "appointments" && (
              <div className="flex-1 p-4">
                <div className="bg-[#FF0000] bg-opacity-[5%] inline-block rounded-lg">
                  <button
                    onClick={() => onActionClick(row)}
                    className="text-[#FF0000] px-4 py-2 rounded-lg hover:bg-[#FF0000] hover:text-white transition-all duration-[0.3s]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
