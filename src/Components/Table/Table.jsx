import React, { useEffect, useState } from "react";

export default function Table({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [amountFilter, setAmountFilter] = useState(null);

  const filteredData = data?.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const amountMatch = amountFilter === null || item.amount === amountFilter;
    return nameMatch && amountMatch;
  });

  useEffect(() => {
    console.log("Search term changed:", searchTerm);
    console.log("Amount filter changed:", amountFilter);
    console.log("Filtered data:", filteredData);
  }, [searchTerm, amountFilter, filteredData]);

  return (
    <>
      <div className=" my-10 mx-4 w-full">
        <div className=" rounded-lg shadow mt-6 overflow-auto w-full">
          <div>
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
              type="number"
              placeholder="Filter by amount"
              value={amountFilter || ""}
              onChange={(e) =>
                setAmountFilter(
                  e.target.value ? parseInt(e.target.value) : null
                )
              }
            />
          </div>

          <table className=" w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200 sm-table-cell">
              <tr className="">
                <th className="w-5  py-3 text-sm font-semibold traking-wide text-center ">
                  ID
                </th>
                <th className="w-32 py-3 text-sm font-semibold traking-wide text-center ">
                  Name
                </th>
                <th className="w-28 py-3 text-sm font-semibold traking-wide text-center ">
                  Date
                </th>
                <th className="w-20 py-3 text-sm font-semibold traking-wide textcenter ">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 ">
              {filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="py-3 bg-white cursor-pointer duration-300 hover:bg-cyan-100 "
                >
                  <td className="py-3 text-sm  font-bold text-blue-500 hover:underline text-center whitespace-nowrap">
                    {item.id}
                  </td>
                  <td className="py-3 text-sm text-gray-700 text-center whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="py-3 text-sm text-gray-700 text-center whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="whitespace-nowrap  text-sm  text-gray-700">
                    <p className="p-1.5 text-xs font-bold   text-green-800 bg-green-200 rounded-lg bg-opacity-50   text-center ">
                      {item.amount} L.E
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
