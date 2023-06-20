import React, { useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  topContainer: {
    border: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "35rem",
    marginLeft: "3rem",
    marginTop: "1rem",
  },
  todoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },

  postTitle: {
    marginRight: "8px",
  },
  postContainer: {
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

const Posts = ({
  userId,
  selectedPosts,
  posts,
  setShowAddPost,
  setSelectedPosts,
}) => {
  const classes = useStyles();
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    setSelectedPosts(posts.filter((post) => post.userId === userId));
  }, []);
  return (
    <>
      <div className={classes.topContainer}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginLeft: "45px" }}>Posts - User {userId}</h2>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "green" }}
            onClick={() => setShowAddPost(true)}
          >
            ADD
          </Button>
        </div>
        <div
          className={classes.scrollableContainer}
          ref={scrollableContainerRef}
        >
          {selectedPosts?.map((post) => (
            <Box className={classes.container} key={post.id}>
              <strong>Title: </strong> {post.title}
              <div>
                <strong>Body: </strong>
                {post.body}
              </div>
            </Box>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
