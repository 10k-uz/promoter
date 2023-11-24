import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import {
  transactionStatus,
  transactionsType,
} from "../../interfaces/transactions";
import { dateFormatter, numberSpacer } from "../../utils";
import { StateShower } from "../shared";

const PaymentTable = ({
  data,
  isLoading,
}: {
  data: transactionsType[];
  isLoading?: boolean;
}) => {
  return isLoading ? (
    <StateShower name="Loading..." />
  ) : data.length === 0 ? (
    <StateShower name="No data" />
  ) : (
    <TableContainer
      component={Paper}
      className="mt-5 max-md:max-w-[395px] shadow-md "
    >
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="font-semibold">
              <span className="p-0  font-semibold">ID</span>
            </TableCell>
            <TableCell align="left">
              <span className="p-0  font-semibold">Karta raqam</span>
            </TableCell>
            <TableCell align="left" className="font-semibold">
              <span className="p-0  font-semibold">Karta nomi</span>
            </TableCell>
            <TableCell align="left" className="font-semibold">
              <span className="p-0  font-semibold">Summa</span>
            </TableCell>
            <TableCell align="left" className="font-semibold">
              <span className="p-0  font-semibold">Holat</span>
            </TableCell>
            <TableCell align="left" className="font-semibold">
              <span className="p-0  font-semibold">Sana</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((items) => {
            return (
              <TableRow key={items.id}>
                <TableCell align="left"># {items.id}</TableCell>
                <TableCell align="left">{items.card_number}</TableCell>
                <TableCell align="left">{items.card_name}</TableCell>
                <TableCell align="left">
                  {numberSpacer(items.amount!)} uzs
                </TableCell>
                <TableCell align="left" className="text-yellow-500">
                  {items.status === transactionStatus.NEW ? (
                    <AccessTimeIcon color="info" />
                  ) : items.status === transactionStatus.PAID ? (
                    <span className="text-green-500">
                      <CheckCircleOutlineIcon />
                    </span>
                  ) : items.status === transactionStatus.REJECTED ? (
                    <CancelOutlinedIcon color="error" />
                  ) : (
                    <h1>no info</h1>
                  )}
                </TableCell>
                <TableCell align="left">
                  {dateFormatter(String(items.createdAt))}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaymentTable;
