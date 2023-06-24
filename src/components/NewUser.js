import React, { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";

const useStyles = makeStyles(() => ({
  todoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },

  todoTitle: {
    marginRight: "8px",
  },
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

  additionalInfoContainer: {
    border: "1px solid #000",
    borderBottom: "1px solid #000",
    padding: "16px",

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px",
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "8px",
  },
}));

const AddPost = ({ addNewUser, setShowAddUser, users }) => {
  const classes = useStyles();

  const scrollableContainerRef = useRef(null);
  const [newUser, setNewUser] = useState({
    id: users.length + 1,
    name: "",
    email: "",
  });

  const addUser = () => {
    addNewUser(newUser);
    setShowAddUser(false);
  };

  return (
    <div className={classes.topContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginLeft: "45px" }}>Add New User </h2>
      </div>
      <div className={classes.scrollableContainer} ref={scrollableContainerRef}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={newUser.name}
          onChange={(e) =>
            setNewUser((prevNewUser) => ({
              ...prevNewUser,
              name: e.target.value,
            }))
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={newUser.email}
          onChange={(e) =>
            setNewUser((prevNewUser) => ({
              ...prevNewUser,
              email: e.target.value,
            }))
          }
        />

        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "green" }}
            onClick={addUser}
            disabled={!newUser.email || !newUser.name}
          >
            ADD
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "red" }}
            onClick={() => setShowAddUser(false)}
          >
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
