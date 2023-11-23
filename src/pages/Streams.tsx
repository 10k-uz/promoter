import { useState } from "react";
import { TopBar } from "../components/fixed";
import { Input, Select, StreamCard } from "../components/ui";
import { useCategories, useStreams } from "../hooks/";
import { categoriesType, streamsType } from "../interfaces";
import { CustomPagination, StateShower } from "../components/shared";

const Streams = () => {
  const [categoryId, setCategoryId] = useState("default");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  // react-queries
  const { getCategories } = useCategories();
  const { getStreams } = useStreams(
    {
      page,
      limit,
      keyword,
      categoryId,
    },
    "GET_STREAMS"
  );

  const streamsData: streamsType = getStreams.data?.data;
  const categoriesData: categoriesType = getCategories.data?.data;

  return (
    <div className="pb-10 max-md:pb-20">
      <TopBar name="Oqimlar" />
      <div className="grid grid-cols-2 gap-2 max-lg:grid-cols-1">
        <Input type="text" setValue={setKeyword} />
        <Select
          defaultValue="Barcha bo'limlar"
          items={categoriesData?.categories}
          setCategoryId={setCategoryId}
        />
      </div>
      {getStreams.isFetching ? (
        <StateShower name="Loading..." />
      ) : streamsData?.streams?.length === 0 ? (
        <StateShower name="No data" />
      ) : (
        <>
          <div className="grid grid-cols-3 mt-5 gap-5  max-md:grid-cols-1">
            {streamsData?.streams?.map((items) => {
              return <StreamCard key={items.id} {...items} />;
            })}
          </div>

          {/* Pagination */}
          <div className="my-10">
            <CustomPagination
              page={page}
              limit={limit}
              total_length={streamsData?.meta?.total_length}
              setCurrentLimit={setLimit}
              setCurrentPage={setPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Streams;
