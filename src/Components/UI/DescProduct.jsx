import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export default function DescProduct() {
  const dataTable = [
    {
      title: "Mainboard",
      desc: "ASUS PRIME H610M-K DDR4",
    },
    {
      title: "CPU",
      desc: "Intel Core i3 12100F / 3.3GHz Turbo 4.3GHz / 4 Nhân 8 Luồng / 12MB / LGA 1700",
    },
    {
      title: "RAM",
      desc: "V-Color Skywalker Plus 1x8 3600 RGB Silver DDR4",
    },
    {
      title: "VGA",
      desc: "ASUS Dual GeForce GTX 1650 4GB GDDR6 EVO",
    },
    {
      title: "SSD",
      desc: "Verbatim Vi550 256GB Sata3",
    },
    {
      title: "PSU",
      desc: "Deepcool PF450D - 80 Plus",
    },
    {
      title: "Case ",
      desc: "Xigmatek PHANTOM 3F",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const maxItemsToShow = 6;

  const handleClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <table className="table-auto w-full border">
        <tbody className="border">
          {dataTable
            .slice(0, showAll ? dataTable.length : maxItemsToShow)
            .map((data, index) => (
              <tr key={index} className="border-b">
                <td className="w-1/2 border-r p-3 font-semibold">
                  {data.title}
                </td>
                <td className="w-1/2 p-3">{data.desc}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {dataTable.length > maxItemsToShow && (
        <button
          onClick={handleClick}
          className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          {showAll ? (
            <div className="flex gap-2 items-center">
              Thu gọn <IoIosArrowUp />
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              Xem thêm <IoIosArrowDown />
            </div>
          )}
        </button>
      )}
    </div>
  );
}
