import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../contexts/CartContextProvider";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Payment() {
  const { getCart, changeProductCount, deleteProductInCart, cart } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  const trHeadStyle = {
    backgroundColor: "#666699 !important",
  };

  return (
    <Box>
      <TableContainer
        style={{ overflow: "hidden" }}
        className="paper"
        component={Paper}
        sx={{ width: "15%" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableBody>
            {cart?.products.map((row) => (
              <StyledTableRow key={row.item.id}>
                <StyledTableCell>
                  {row.item.name} X {row.count}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          margin: "0 auto",
          width: "500px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder="cart number"
          variant="outlined"
        />
        <TextField id="outlined-basic" placeholder="cvv" variant="outlined" />
        <TextField id="outlined-basic" placeholder="YY/MM" variant="outlined" />
        <TextField
          id="outlined-basic"
          placeholder="something"
          variant="outlined"
        />
      </Box>
    </Box>
  );
}
