# React Project - Client-Side Database Management

This project aims to demonstrate client-side database management using React.

The project utilizes server data from the following links:

- Users: https://jsonplaceholder.typicode.com/users
- Posts: https://jsonplaceholder.typicode.com/posts
- Todos: https://jsonplaceholder.typicode.com/todos

## Prerequisites

<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" width="124" height="124">

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="124" height="124">

<img src="https://upload.wikimedia.org/wikipedia/he/a/a7/React-icon.svg" width="124" height="124">

## Installation

### Client

1. Open a new terminal.
2. Install dependencies: `npm/yarn install`.
3. Run the client: npm/yarn start.

## Case 1: Application Start

- The UI displays all users' data ordered by their ID.
- Users with uncompleted tasks (todos) are marked with a red border, while other users have a green border.

<img src = "https://imgtr.ee/images/2023/06/20/ZWJ4I.png" height="100%">

## Case 2: Search

- Entering text in the search text box filters the user list to display only users whose name or email contains the entered text.

<img src = "https://imgtr.ee/images/2023/06/20/ZWv27.png" height="100%">

## Case 3: Other Data

- Mouse over the "Other Data" section to reveal additional data.
- Clicking on the "Mouse Over" section closes the expanded section.
  <img src = "https://imgtr.ee/images/2023/06/20/ZW2xA.png" height="100%">

## Case 4: Update/Delete Data

- Editing user data and clicking "Update" updates the user's data.
- Clicking "Delete" removes all data associated with the user.

<img src = "https://imgtr.ee/images/2023/06/20/ZWWDX.png" width="800" height="400">

## Case 5: Selecting User

- Clicking on the ID label highlights the user's region in orange.
- The user's posts and todos are displayed.
- Uncompleted todos have a "Mark Completed" button to complete the task.

<img src = "https://imgtr.ee/images/2023/06/20/ZWQDr.png" width="800" height="400">

## Case 6: Add New ToDo

- Clicking "Add" above the "ToDo" list replaces the list with a form to add a new todo.
- Clicking "Cancel" brings back the "ToDo" list.

<img src = "https://imgtr.ee/images/2023/06/24/d0nOb.png" width="800" height="400">

## Case 7: Add New Post

- Clicking "Add" above the "Posts" list replaces the list with a form to add a new post.
- Clicking "Cancel" brings back the "Posts" list.

<img src = "https://imgtr.ee/images/2023/06/24/d0yb7.png" width="800" height="400">

## Case 8: Add New User

- Clicking "Add" above the "Users" list navigates to a new user screen.
- The "Other Data" section is not available during user creation but only when updating user data.

<img src = "https://imgtr.ee/images/2023/06/20/ZWrjs.png" width="800" height="400">
