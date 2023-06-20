import React, { useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";

const useStyles = makeStyles(() => ({
  topContainer: {
    border: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "40rem",
    marginLeft: "3rem",
    marginTop: "1rem",
  },
  container: {
    border: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    padding: "16px",
    width: "30rem",
    marginLeft: "3rem",
    marginTop: "1rem",
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "3rem",
    marginBottom: "1rem",
  },
  searchInput: {
    marginRight: "8px",
    width: "32rem",
  },
  scrollableContainer: {
    maxHeight: "500px",
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "#888888 #f4f4f4",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888888",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555555",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f4f4f4",
      borderRadius: "4px",
    },
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "8px",
  },
}));

const SearchBar = ({ searchTerm, handleSearch, setShowAddUser }) => {
  const classes = useStyles();
  const inputRef = useRef(null);

  const handleAdd = () => {
    setShowAddUser(true);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [searchTerm]);

  return (
    <div className={classes.searchContainer}>
      <TextField
        variant="outlined"
        margin="normal"
        id="search"
        label="Search"
        name="search"
        autoComplete="search"
        autoFocus
        value={searchTerm}
        onChange={handleSearch}
        className={classes.searchInput}
        inputRef={inputRef}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ backgroundColor: "green", marginLeft: "20px" }}
        onClick={handleAdd}
      >
        ADD
      </Button>
    </div>
  );
};

export default SearchBar;
