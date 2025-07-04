import React, { useState } from "react";

const columns = [
  "site", "type", "Designation", "Code Inserer", "Parent", "brand", "model",
  "ip", "category", "supplier", "Floor", "price", "UID", "N° Teleph"
];

export default function TableCamera() {
  const [rows, setRows] = useState([
    Object.fromEntries(columns.map((col) => [col, ""])),
  ]);

  const handleChange = (index, key, value) => {
    const updatedRows = [...rows];
    updatedRows[index][key] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    const newRow = Object.fromEntries(columns.map((col) => [col, ""]));
    setRows([...rows, newRow]);
  };

  const deleteRow = (indexToDelete) => {
    const updatedRows = rows.filter((_, index) => index !== indexToDelete);
    setRows(updatedRows);
  };

  return (
    <div className="p-4 overflow-auto">
      <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
            {columns.map((col, idx) => (
              <th key={idx} className="px-2 py-1 border dark:border-gray-700">
                {col}
              </th>
            ))}
            <th className="px-2 py-1 border dark:border-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white even:bg-gray-100 dark:bg-gray-900 dark:even:bg-gray-800 text-black dark:text-white"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="border px-2 py-1 dark:border-gray-700">
                  <input
                    type="text"
                    value={row[col]}
                    onChange={(e) => handleChange(rowIndex, col, e.target.value)}
                    className="w-full bg-transparent outline-none text-black dark:text-white"
                  />
                </td>
              ))}
              <td className="border px-2 py-1 text-center dark:border-gray-700">
                <button
                  onClick={() => deleteRow(rowIndex)}
                  className="text-red-600 hover:text-red-800 font-semibold"
                  title="Supprimer la ligne"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button
          onClick={addRow}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          +
        </button>
      </div>
    </div>
  );
}
