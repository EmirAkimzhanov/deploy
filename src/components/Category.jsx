import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Box,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";

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

  return (
    <Box sx={{ display: "flex", p: 5 }}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" sx={{mb: 4}}>Categories</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("category", e.target.value)}
        >
          <Box sx={{display: 'flex', justifyContent: 'space-between', width: '90vw'}}>
            <Box>
              <FormControlLabel value="all" control={<Radio />} label="All" />
            </Box>
            <Box>
              <FormControlLabel
                value="clothes"
                control={<Radio />}
                label="Clothes"
              />
            </Box>
            <Box>
              <FormControlLabel value="sport" control={<Radio />} label="Sport" />
            </Box>
            <Box>
              <FormControlLabel
                value="office"
                control={<Radio />}
                label="Office"
              />
            </Box>
          </Box>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Category;
