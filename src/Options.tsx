const values = [
  { op: "description", des: "description for conirmation box", ty: "string" },
  {
    op: "type",
    des: "pre-defined types(themes) of confirmation box. 'info' is the defualt value",
    ty: `string ("info", "warning", "success", "question")`,
  },
  {
    op: "animation",
    des: "confirm box animations. 'scale' is the defualt value",
    ty: `string ("none", "scale", "fade",  "blur", "slide-up", "slide-down", "slide-right", "slide-left")`,
  },
  {
    op: "confirmLabel",
    des: "custom text that should display in confirm button",
    ty: `string`,
  },
  {
    op: "confirmColor",
    des: "confirm button color",
    ty: `string (hex or rgb color codes)`,
  },
  {
    op: "confirmTextColor",
    des: "confirm button text color",
    ty: `string (hex or rgb color codes)`,
  },
  {
    op: "cancelLabel",
    des: "custom text that should display in cancel button",
    ty: `string`,
  },
  {
    op: "cancelColor",
    des: "cancel button color",
    ty: `string (hex or rgb color codes)`,
  },
  {
    op: "cancelTextColor",
    des: "cancel button text color",
    ty: `string (hex or rgb color codes)`,
  },
  {
    op: "hideCancel",
    des: "hiding cancel button",
    ty: `boolean`,
  },
  {
    op: "disableBlur",
    des: "disabling background click cancellation",
    ty: `boolean`,
  },
  {
    op: "color",
    des: "define color for both icon & confirm button",
    ty: `string (hex or rgb color codes)`,
  },
  {
    op: "hoverColor",
    des: "define button hover color",
    ty: `string (hex or rgb color codes)`,
  },
  {
    op: "hoverTextColor",
    des: "define button's hover text color",
    ty: `string (hex or rgb color codes)`,
  },
  {
    op: "icon",
    des: "define custom icon",
    ty: `JSX.Element`,
  },
  {
    op: "iconColor",
    des: "define icon color",
    ty: `string (hex or rgb color codes)`,
  },
  {
    op: "hideBackground",
    des: "hiding dark background",
    ty: `boolean`,
  },
  {
    op: "hideShadow",
    des: "hiding confirm box shadow",
    ty: `boolean`,
  },
];

export default function Options() {
  return (
    <div className="main-container overflow-x-auto relative flex flex-col gap-2">
      <div>
        <h1 className="text-2xl font-semibold">Options</h1>
        <p>
          You can customize the confirm box with the following options,</p>
      </div>
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
