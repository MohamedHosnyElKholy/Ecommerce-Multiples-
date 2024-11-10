"use client";
import { Pagination } from "flowbite-react";
import { useState } from "react";

export default function PaginationTeamDash() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination  className="!text-black paginationTeamDash" nextLabel=">" previousLabel="<" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
    </div>
  );
}
