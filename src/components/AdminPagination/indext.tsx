import React from 'react';

interface PaginationProps {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    goToPreviousPage: () => void;
    goToNextPage: () => void;
    paginate: (pageNumber: number) => void;
}

const AdminPagination: React.FC<PaginationProps> = ({
    currentPage,
    itemsPerPage,
    totalItems,
    goToPreviousPage,
    goToNextPage,
    paginate,
}) => {
    const indexOfFirstItem: number = (currentPage - 1) * itemsPerPage;
    const indexOfLastItem: number = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="flex justify-between items-center mt-5">
            <p>
                Mostrando dados de {indexOfFirstItem + 1} a {indexOfLastItem} de {totalItems} entradas
            </p>
            <ul className="flex">
                <li
                    onClick={goToPreviousPage}
                    className="cursor-pointer rounded-md h-6 w-6 text-sm flex items-center justify-center mx-1 bg-gray-200 text-gray-700"
                >
                    {"<"}
                </li>
                {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => (
                    <li
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`cursor-pointer rounded-md h-6 w-6 text-sm flex items-center justify-center mx-1 ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        {i + 1}
                    </li>
                ))}
                <li
                    onClick={goToNextPage}
                    className="cursor-pointer rounded-md h-6 w-6 text-sm flex items-center justify-center mx-1 bg-gray-200 text-gray-700"
                >
                    {">"}
                </li>
            </ul>
        </div>
    );
};

export default AdminPagination;
