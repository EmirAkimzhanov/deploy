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
      <Box
        sx={{
          margin: "10vw auto",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "40vw",
          height: "20vw",
          backgroundColor: "#2986cc",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "3vw",
            backgroundColor: "#102124",
            top: 0,
          }}
        ></div>
        <TextField
          sx={{
            backgroundColor: "#9fc5e8",
            width: "70%",
            margin: "0 auto",
            borderRadius: "8px",
          }}
          placeholder="card number"
        ></TextField>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            sx={{
              backgroundColor: "#9fc5e8",
              width: "40%",

              borderRadius: "8px",
            }}
            placeholder="card holder"
          ></TextField>
          <TextField
            sx={{
              backgroundColor: "#9fc5e8",
              width: "13.5%",
              marginLeft: "20px",
              borderRadius: "8px",
            }}
            placeholder="MM"
          ></TextField>
          <TextField
            sx={{
              backgroundColor: "#9fc5e8",
              width: "13.5%",

              borderRadius: "8px",
            }}
            placeholder="YY"
          ></TextField>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography
            sx={{ color: "white", marginLeft: "10px", fontSize: "3vmin" }}
          >
            Paying:${cart.totalPrice}
          </Typography>
          <Button sx={{ color: "white", fontSize: "2.5vmin" }}>Submit</Button>
        </Box>
      </Box>
    </Box>
  );
}
