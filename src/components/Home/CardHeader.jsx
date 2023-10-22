import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Header = ({ selectedValue, setSelectedValue, value }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm font-semibold">TICKER</span>
      <div className="hidden sm:flex w-1/2 justify-between">
        <span className="text-sm font-semibold">PRICE</span>
        <span className="text-sm font-semibold">CHANGE AMOUNT</span>
        <span className="text-sm font-semibold">CHANGE PERCENTAGE</span>
        <span className="text-sm font-semibold">VOLUME</span>
      </div>
      <div className="flex sm:hidden w-1/3 justify-between">
        <Select
          defaultValue={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
        >
          <SelectTrigger className="w-full text-[12px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Top {value}s</SelectLabel>
              <SelectItem value="price">PRICE</SelectItem>
              <SelectItem value="change_amount">CHANGE AMOUNT</SelectItem>
              <SelectItem value="change_percentage">
                CHANGE PERCENTAGE
              </SelectItem>
              <SelectItem value="volume">VOLUME</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Header;
