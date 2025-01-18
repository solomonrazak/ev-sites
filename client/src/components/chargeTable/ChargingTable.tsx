import React from 'react'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
  } from "@nextui-org/react";
  import { GiCancel } from "react-icons/gi";
  import { IoIosCheckmarkCircle } from "react-icons/io";
  import { BsThreeDotsVertical } from "react-icons/bs";

const ChargingTable = () => {
  return (
    <div className="flex flex-col gap-3 mt-3 pb-5">
        <div className="min-w-[800px]">
      <Table
        aria-label="Example static collection table"
        defaultSelectedKeys={["2", "3"]}
        selectionMode="multiple"
        className="bg-none overflow-x-auto"
      >
        <TableHeader className="bg-gray-800">
        <TableColumn className="">ID</TableColumn>
          <TableColumn className="">CHARGE POINT</TableColumn>
          <TableColumn className="">CHARGING SITE</TableColumn>
          <TableColumn className="">CONNECTION</TableColumn>
          <TableColumn className="">REGISTRATION STATUS</TableColumn>
          <TableColumn className="">CREATED AT</TableColumn>
          <TableColumn className="">ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" className="hover:bg-gray-700">
            <TableCell>8</TableCell>
            <TableCell>1 new site</TableCell>
            <TableCell>KNUST</TableCell>
            <TableCell><div className="flex w-20 items-center justify-center gap-1 text-red-500 border border-red-500 py-1 bg-gray-300 rounded-[16px]"><GiCancel className='mt-[1.5px]'/><p className="">Offline</p></div></TableCell>
            <TableCell><div className="flex w-24 py-1 items-center justify-center gap-1 text-green-500 border border-green-500 bg-gray-300 rounded-[16px]"><IoIosCheckmarkCircle className='mt-[1.5px]'/><p>Accepted</p></div></TableCell>
            <TableCell>Jan 17, 2025</TableCell>
            <TableCell className=""><BsThreeDotsVertical className="ml-4 text-[20px]"/></TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
      </div>
    </div>
  )
}

export default ChargingTable;