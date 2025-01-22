import React, {useState} from "react";
import Buttons from "../ui/Buttons";
import { MdOutlineAddBox } from "react-icons/md";
import SearchInput from "../ui/SearchInput";
import { IoFilter } from "react-icons/io5";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChargingTable from "./ChargingTable";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import InputField from "../ui/InputField";

const ChargeTable: React.FC = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="w-full bg-main-dark-bg rounded-md mt-2 px-3 overflow-x-auto">
      <div className="flex md:justify-between gap-3 mt-1">
        <div className="flex gap-2">
          <SearchInput value={searchValue} placeholder="Search charging point..." onChange={handleSearch}/>
          <Buttons name="Filter" icon={<IoFilter size={20} />} />
          <Buttons name="Export" icon={<PiMicrosoftExcelLogoFill size={20} />} />
        </div>
        <Button className="bg-blue-800 p-3 h-10 flex items-center justify-center gap-2 rounded-md" onPress={onOpen}>
          <MdOutlineAddBox className="text-[22px] hidden md:block" />
          Add
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="min-w-[670px]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Charge Point</ModalHeader>
              <ModalBody>
                <div className="flex gap-5">
                  <div>
                    <InputField type="text" label="CHARGE POINT NAME"/>
                    <InputField type="text" label="LOCATION"/>
                    <InputField type="text" label="STREET"/>
                    <InputField type="text" label="COUNTRY"/>
                  </div>
                  <div>
                  <InputField type="text" label="COMPANY NAME"/>
                  <InputField type="text" label="CITY"/>
                  <InputField type="text" label="DIGITAL ADDRESS"/>
                  <InputField type="text" label="DESCRIPTION"/>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
      <ChargingTable />
    </div>
  );
};

export default ChargeTable;
