import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, TextField } from "@mui/material";
import SearchBar from "./SearchBar";

const Users = ({
  setSelectedTodos,
  setSelectedPosts,
  posts,
  todos,
  users,
  setUsers,
  setPosts,
  setTodos,
  setShowAddUser,
  selectedTodos,
  selectedUserId,
  handleUserSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [completedTodos, setCompletedTodos] = useState({});
  const scrollableContainerRef = useRef(null);

  const useStyles = makeStyles(() => ({
    topContainer: {
      border: "1px solid #ccc",
      borderBottom: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      width: "40rem",

      marginTop: "1rem",
    },
    container: {
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

  useEffect(() => {
    const userTodos = todos.filter((todo) => todo.userId === selectedUserId);
    const areAllCompleted = userTodos.every((todo) => todo.completed);
    setCompletedTodos((prevCompletedTodos) => ({
      ...prevCompletedTodos,
      [selectedUserId]: areAllCompleted,
    }));
  }, [selectedUserId, todos]);

  const handleSelectedTodos = (userId) => {
    if (selectedUserId === userId) {
      setSelectedTodos((prevSelectedTodos) => {
        if (prevSelectedTodos.length === 0) {
          handleUserSelect(null);
          return todos.filter((todo) => todo.userId === userId);
        } else {
          handleUserSelect(null);
          return [];
        }
      });
    } else {
      setSelectedTodos(todos.filter((todo) => todo.userId === userId));
      handleUserSelect(userId);
    }
  };

  const handleSelectedPosts = (userId) => {
    if (selectedUserId === userId) {
      setSelectedPosts((prevSelectedPosts) => {
        if (prevSelectedPosts.length === 0) {
          handleUserSelect(null);
          return posts.filter((post) => post.userId === userId);
        } else {
          handleUserSelect(null);
          return [];
        }
      });
    } else {
      setSelectedPosts(posts.filter((post) => post.userId === userId));
      handleUserSelect(userId);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      scrollableContainerRef.current.scrollTop = 0;
    }, 150);
  }, []);

  useEffect(() => {
    if (searchTerm === "" || searchTerm)
      scrollableContainerRef.current.scrollTop = 0;
  }, [searchTerm]);

  const handleUpdate = (userId, updatedData) => {
    try {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, ...updatedData } : user
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (userId) => {
    try {
      setUsers((prevUsers) => {
        const userIndex = prevUsers.findIndex((user) => user.id === userId);
        if (userIndex !== -1) {
          const updatedUsers = [...prevUsers];
          updatedUsers.splice(userIndex, 1);
          return updatedUsers;
        }
        return prevUsers;
      });

      setPosts((prevPosts) => {
        const updatedPosts = prevPosts.filter((post) => post.userId !== userId);
        return updatedPosts;
      });

      setTodos((prevTodos) => {
        const updatedTodos = prevTodos.filter((todo) => todo.userId !== userId);
        return updatedTodos;
      });

      handleUserSelect(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOtherData = (userId) => {
    try {
      setSelectedUser(userId);
      setShowAdditionalInfo(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOtherDataClick = () => {
    setShowAdditionalInfo(false);
  };

  const handleNameChange = (userId, newName) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, name: newName } : user
      )
    );
  };

  const handleEmailChange = (userId, newEmail) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, email: newEmail } : user
      )
    );
  };

  const handleAddressChange = (userId, fieldName, newValue) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? { ...user, address: { ...user.address, [fieldName]: newValue } }
          : user
      )
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const selectUser = (userId) => {
    handleUserSelect(userId);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const classes = useStyles();

  return (
    <div className={classes.topContainer}>
      <SearchBar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        setShowAddUser={setShowAddUser}
      />
      <div className={classes.scrollableContainer} ref={scrollableContainerRef}>
        {filteredUsers.map((user) => (
          <Box
            className={classes.container}
            key={user.id}
            sx={{
              backgroundColor: selectedUserId === user.id ? "orange" : null,
              border: completedTodos[user.id]
                ? "3px solid green"
                : "3px solid red",
              borderBottom: completedTodos[user.id]
                ? "3px solid green"
                : "3px solid red",
              background:
                selectedUserId === user.id && selectedTodos.length === 0
                  ? "orange"
                  : null,
            }}
          >
            <label
              onClick={() => {
                handleSelectedTodos(user.id);
                handleSelectedPosts(user.id);
                selectUser(user.id);
              }}
            >
              ID:
            </label>
            {user.id}

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={user.name}
              onChange={(e) => handleNameChange(user.id, e.target.value)}
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
              value={user.email}
              onChange={(e) => handleEmailChange(user.id, e.target.value)}
            />

            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onMouseEnter={() => handleOtherData(user.id)}
                onClick={handleOtherDataClick}
                sx={{
                  backgroundColor: "primary",
                  "&:hover": {
                    backgroundColor: "primary",
                  },
                }}
              >
                Other Data
              </Button>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "purple",
                  "&:hover": {
                    backgroundColor: "purple",
                  },
                }}
                onClick={() =>
                  handleUpdate(user.id, {
                    name: user.name,
                    email: user.email,
                    address: user.address,
                  })
                }
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "red",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </div>
            {showAdditionalInfo && selectedUser === user.id && (
              <div className={classes.additionalInfoContainer}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  autoComplete="street"
                  autoFocus
                  value={user.address.street}
                  onChange={(e) =>
                    handleAddressChange(user.id, "street", e.target.value)
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  autoFocus
                  value={user.address.city}
                  onChange={(e) =>
                    handleAddressChange(user.id, "city", e.target.value)
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="zipcode"
                  label="Zipcode"
                  name="zipcode"
                  autoComplete="zipcode"
                  autoFocus
                  value={user.address.zipcode}
                  onChange={(e) =>
                    handleAddressChange(user.id, "zipcode", e.target.value)
                  }
                />
              </div>
            )}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Users;
