import { useEffect, useState } from "react";
import { TopBar } from "../components/fixed";
import { Input } from "../components/ui";
import { useStatistics } from "../hooks";
import { statisticsType } from "../interfaces";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CustomPagination, StateShower } from "../components/shared";
import { numberSpacer } from "../utils";

const Statistics = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { getStats } = useStatistics(
    {
      page,
      limit,
      keyword,
    },
    "GET_STATS"
  );

  const statsData: statisticsType = getStats.data?.data;

  return (
    <div className="pb-10 max-md:pb-20">
      <TopBar name="Statistika" />
      <div className="grid grid-cols-2 gap-2 max-lg:grid-cols-1">
        <Input type="text" setValue={setKeyword} />
      </div>

      {getStats.isFetching ? (
        <StateShower name="Loading..." />
      ) : statsData.stats.length === 0 ? (
        <StateShower name="No data" />
      ) : (
        <>
          <TableContainer component={Paper} className="mt-5 responsive_table ">
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <span className="p-0  font-semibold">ID</span>
                  </TableCell>
                  <TableCell>
                    <span className="p-0  font-semibold">Oqim nomi</span>
                  </TableCell>
                  <TableCell align="left" className="font-semibold">
                    <span className="p-0  font-semibold">Ko'rishlar</span>
                  </TableCell>
                  <TableCell align="left" className="font-semibold">
                    <span className="p-0  font-semibold">Daromad</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {statsData?.stats?.map((items) => {
                  return (
                    <TableRow key={items.Id}>
                      <TableCell align="left"># {items.Id}</TableCell>
                      <TableCell align="left">{items.name}</TableCell>
                      <TableCell align="left">
                        {numberSpacer(items.views)} ta
                      </TableCell>
                      <TableCell align="left">
                        {numberSpacer(items.profit)} uzs
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <div className="my-10">
            <CustomPagination
              page={page}
              limit={limit}
              total_length={statsData?.meta?.total_length}
              setCurrentLimit={setLimit}
              setCurrentPage={setPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Statistics;
