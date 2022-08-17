import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Box,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

const Category = () => {
  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              defaultValue="all"
              sx={{
                border: 1,
                p: 1,
                bgcolor: "background.paper",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                value="all"
                onClick={(e) => fetchByParams("category", e.target.value)}
              >
                ALL
              </Button>
              <Button
                value="sport"
                onClick={(e) => fetchByParams("category", e.target.value)}
              >
                sport
              </Button>
              <Button
                value="clothes"
                onClick={(e) => {
                  fetchByParams("category", e.target.value);
                  handleClick();
                }}
              >
                clothes
              </Button>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default Category;
