import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Avatars from "./Avatars";

const CusTable = () => {
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
          <TableColumn className="">COMPANY</TableColumn>
          <TableColumn className="">STATUS</TableColumn>
          <TableColumn className="">ABOUT</TableColumn>
          <TableColumn className="">USERS</TableColumn>
          <TableColumn className="">ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" className="hover:bg-gray-700">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell><Avatars /></TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2" className="hover:bg-gray-700">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell><Avatars /></TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="3" className="hover:bg-gray-700">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
            <TableCell><Avatars /></TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        
        </TableBody>
      </Table>
      </div>
    </div>
  );
};

export default CusTable;
