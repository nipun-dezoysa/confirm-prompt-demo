import React from "react";

const values = [
  { op: "description", des: "description for conirmation box", ty: "string" },
  {
    op: "type",
    des: "pre-defined types(themes) of confirmation box. 'info' is the defualt value",
    ty: `string ("info", "warning", "success", "question")`,
  },
];

export default function Options() {
  return (
    <div className="main-container overflow-x-auto relative">
      <h1 className="text-2xl font-semibold">Options</h1>
      <table className="w-full text-sm text-left rtl:text-right  text-gray-400 border-gray-700 border">
        <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Option
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              type(s)
            </th>
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <tr
              key={index}
              className=" odd:bg-gray-900  even:bg-gray-800 border-b border-gray-700"
            >
              <td className="px-6 py-4">
                <span className="bg-gray-700 px-2 rounded">{value.op}</span>
              </td>
              <td className="px-6 py-4">{value.des}</td>
              <td className="px-6 py-4">{value.ty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
