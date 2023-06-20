import { useEffect, useState } from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Posts from "./components/Posts";
import { getAllPosts, getAllTodos, getAllUsers } from "./ServerAPI";
import AddTodo from "./components/AddTodo";
import AddPost from "./components/AddPost";
import NewUser from "./components/NewUser";

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const { data } = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    const fetchAllTodos = async () => {
      try {
        const { data } = await getAllTodos();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTodos();
  }, []);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const { data } = await getAllPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPosts();
  }, []);

  const updateTodo = (todoId, completed) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: completed } : todo
      )
    );
    setSelectedTodos((prevSelectedTodos) =>
      prevSelectedTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: completed } : todo
      )
    );
  };

  const addTodo = (userId, newTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [
        ...prevTodos,
        {
          userId: userId,
          id: newTodo.id,
          title: newTodo.title,
          completed: newTodo.completed,
        },
      ];
      return updatedTodos;
    });
  };

  const addPost = (userId, newPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = [
        ...prevPosts,
        {
          userId: userId,
          id: newPost.id,
          title: newPost.title,
          body: newPost.body,
        },
      ];
      return updatedPosts;
    });
  };

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
  };

  const addNewUser = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [
        ...prevUsers,
        {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          address: {
            street: "",
            city: "",
            zipcode: "",
          },
        },
      ];
      return updatedUsers;
    });
  };

  return (
    <div className="App">
      <ButtonAppBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: "0 0 auto" }}>
          <Users
            users={users}
            todos={todos}
            posts={posts}
            setPosts={setPosts}
            setTodos={setTodos}
            setUsers={setUsers}
            setSelectedPosts={setSelectedPosts}
            selectedTodos={selectedTodos}
            setSelectedTodos={setSelectedTodos}
            selectedUserId={selectedUserId}
            handleUserSelect={handleUserSelect}
            setShowAddUser={setShowAddUser}
          />
        </div>
        {showAddUser && (
          <NewUser
            addNewUser={addNewUser}
            setShowAddUser={setShowAddUser}
            users={users}
          />
        )}
        {selectedUserId && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            {!showAddTodo ? (
              <Todos
                setShowAddTodo={setShowAddTodo}
                selectedTodos={selectedTodos}
                setSelectedTodos={setSelectedTodos}
                userId={selectedUserId}
                todos={todos}
                updateTodo={updateTodo}
              />
            ) : (
              <AddTodo
                selectedTodos={selectedTodos}
                setSelectedTodos={setSelectedTodos}
                userId={selectedUserId}
                addNewTodo={addTodo}
                setTodos={setTodos}
                setShowAddTodo={setShowAddTodo}
              />
            )}
            {!showAddPost ? (
              <Posts
                userId={selectedUserId}
                posts={posts}
                selectedPosts={selectedPosts}
                setShowAddPost={setShowAddPost}
                setSelectedPosts={setSelectedPosts}
              />
            ) : (
              <AddPost
                setPosts={setPosts}
                setShowAddPost={setShowAddPost}
                userId={selectedUserId}
                addNewPost={addPost}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
