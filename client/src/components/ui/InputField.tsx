import React from "react";
import { Input } from "@heroui/input";



interface InputFieldProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  description?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  placeholder,
  label,
  description,
}) => {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      labelPlacement="outside" 
      description={description} 
    />
  );
};

export default InputField;
