"use client";

import { Label, Select } from "flowbite-react";

export default function SelectFlowBite() {
  return (
    <div className="max-w-md flex items-center">
      <div className="block">
        <Label htmlFor="sort" value="Sort by :" />
      </div>
      <Select id="sort" required className='selectTeam'>
        <option>Newest</option>
        <option>Oldest</option>
      </Select>
    </div>
  );
}