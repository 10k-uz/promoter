import { Pagination } from "antd";

interface paginationProps {
  page: number;
  limit: number;
  total_length: number;
  setCurrentPage: (page: number) => void;
  setCurrentLimit: (pageSize: number) => void;
}

const CustomPagination = ({
  limit,
  page,
  total_length,
  setCurrentLimit,
  setCurrentPage,
}: paginationProps) => {
  return (
    <div className="flex justify-center pb-10">
      <Pagination
        current={page}
        total={total_length}
        pageSize={limit}
        onChange={(page, pageSize) => {
          setCurrentPage(page);
          setCurrentLimit(pageSize);
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </div>
  );
};

export default CustomPagination;
