# React Project - Client-Side Database Management

This project aims to demonstrate client-side database management using React.

The project utilizes server data from the following links:

- Users: https://jsonplaceholder.typicode.com/users
- Posts: https://jsonplaceholder.typicode.com/posts
- Todos: https://jsonplaceholder.typicode.com/todos

## Prerequisites

- **VSCODE**

<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" width="124" height="124">

- **NodeJS**
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="124" height="124">

- **REACT**
  <img src="https://upload.wikimedia.org/wikipedia/he/a/a7/React-icon.svg" width="124" height="124">

- **MATERIAL UI**
  <a href="https://ibb.co/VtWN1my"><img src="https://i.ibb.co/wRNLksH/mui-logo.png" width="124" height="124" alt="mui-logo" border="0"></a>

## Installation

### Client

1. Open a new terminal.
2. Install dependencies: `npm/yarn install`.
3. Run the client: npm/yarn start.

## Case 1: Application Start

- The UI displays all users' data ordered by their ID.
- Users with uncompleted tasks (todos) are marked with a red border, while other users have a green border.

<a href="https://ibb.co/FYM5PCB"><img src="https://i.ibb.co/R6m35dC/Home.png" alt="Home" border="0"></a>

## Case 2: Search

- Entering text in the search text box filters the user list to display only users whose name or email contains the entered text.

<a href="https://ibb.co/ZYF3thF"><img src="https://i.ibb.co/8dfJTjf/Search.png" alt="Search" border="0"></a>

## Case 3: Other Data

- Mouse over the "Other Data" section to reveal additional data.
- Clicking on the "Mouse Over" section closes the expanded section.
  <a href="https://ibb.co/vDYmcBL"><img src="https://i.ibb.co/0QtZnXY/Other-Data.png" alt="Other-Data" border="0"></a>

## Case 4: Update/Delete Data

- Editing user data and clicking "Update" updates the user's data.
- Clicking "Delete" removes all data associated with the user.

<a href="https://ibb.co/47SbPWm"><img src="https://i.ibb.co/c18WDJg/Update-Delete.png" alt="Update-Delete" border="0"></a>

## Case 5: Selecting User

- Clicking on the ID label highlights the user's region in orange.
- The user's posts and todos are displayed.
- Uncompleted todos have a "Mark Completed" button to complete the task.

<a href="https://ibb.co/BjfPYmd"><img src="https://i.ibb.co/82mBQJT/Selecting-user.png" alt="Selecting-user" border="0"></a>

## Case 6: Add New ToDo

- Clicking "Add" above the "ToDo" list replaces the list with a form to add a new todo.
- Clicking "Cancel" brings back the "ToDo" list.

<a href="https://ibb.co/BPMxfgZ"><img src="https://i.ibb.co/mBWwRHq/Add-new-todo.png" alt="Add-new-todo" border="0"></a>

## Case 7: Add New Post

- Clicking "Add" above the "Posts" list replaces the list with a form to add a new post.
- Clicking "Cancel" brings back the "Posts" list.

<a href="https://ibb.co/1m9MRYx"><img src="https://i.ibb.co/nLDBQqS/Add-new-post.png" alt="Add-new-post" border="0"></a>

## Case 8: Add New User

- Clicking "Add" above the "Users" list navigates to a new user screen.
- The "Other Data" section is not available during user creation but only when updating user data.

<a href="https://ibb.co/pzjLgPK"><img src="https://i.ibb.co/d245Scp/Add-new-user.png" alt="Add-new-user" border="0"></a>
