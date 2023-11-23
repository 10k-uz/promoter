import { useEffect, useState } from "react";
import { usePosts, useCategories } from "../hooks/";
import { TopBar } from "../components/fixed";
import { Input, PostCard, Select } from "../components/ui";
import { categoriesType, postsType } from "../interfaces";
import { CustomPagination, StateShower } from "../components/shared";

const Posts = () => {
  const [categoryId, setCategoryId] = useState("default");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const { getCategories } = useCategories();

  const { getPosts } = usePosts({
    page,
    limit,
    keyword,
    categoryId,
  });

  const postData: postsType = getPosts.data?.data;
  const categoriesData: categoriesType = getCategories.data?.data;

  return (
    <div>
      <TopBar name="Maqolalar" />
      <div className="grid grid-cols-2 gap-2 max-lg:grid-cols-1">
        <Input
          type="text"
          setValue={setKeyword}
          setCategoryId={setCategoryId}
        />
        <Select
          defaultValue="Barcha bo'limlar"
          items={categoriesData?.categories}
          setCategoryId={setCategoryId}
        />
      </div>

      {getPosts.isFetching || getCategories.isFetching ? (
        <StateShower name="Loading..." />
      ) : postData.posts.length === 0 ? (
        <StateShower name="No data" />
      ) : (
        <>
          <div className="grid grid-cols-4 mt-5 gap-6 max-lg:grid-cols-1">
            {postData?.posts?.map((items) => {
              return <PostCard key={items.id} data={items} />;
            })}
          </div>

          {/* Pagination */}
          <div className="my-10">
            <CustomPagination
              page={page}
              limit={limit}
              total_length={postData?.meta?.total_length}
              setCurrentLimit={setLimit}
              setCurrentPage={setPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
