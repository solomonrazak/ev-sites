import React from 'react';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
  } from "@nextui-org/react";
  import { BsThreeDotsVertical } from "react-icons/bs";


const ChargingSiteTable = () => {
  return (
    <div className="flex flex-col gap-3 mt-3 ">
        <div className="min-w-[800px]">
      <Table
        aria-label="Example static collection table"
        defaultSelectedKeys={["2", "3"]}
        selectionMode="multiple"
        className="bg-none overflow-x-auto"
      >
        <TableHeader className="bg-gray-800">
        <TableColumn className="">ID</TableColumn>
          <TableColumn className="">COMPANY</TableColumn>
          <TableColumn className="">CHARGING SITE</TableColumn>
          <TableColumn className="">CONNECTION</TableColumn>
          <TableColumn className="">CITY</TableColumn>
          
          <TableColumn className="">ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" className="hover:bg-gray-700">
            <TableCell>8</TableCell>
            <TableCell>NewMount Ghana</TableCell>
            <TableCell>KNUST</TableCell>
            <TableCell>1</TableCell>
            <TableCell>Accra</TableCell>
            <TableCell className=""><BsThreeDotsVertical className="ml-4 text-[20px]"/></TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
      </div>
    </div>
  )
}

export default ChargingSiteTable