# To-Do List App

Simple todo list application built with Vue 3 and Pinia for a frontend assignment.

## Technologies Used

- **Vue 3** - Composition API
- **Pinia** - state management
- **Axios** - for API calls
- **LocalStorage** - data persistence
- **JSONPlaceholder API** - fake REST API for initial data
- CSS - plain CSS, no frameworks

## Setup Instructions

1. Clone the repo:
```bash
git clone https://github.com/paalexaa/todoList_vue.git
cd todoList_vue/todoList
```

2. Install dependencies:
```bash
npm install
```

3. Run the app:
```bash
npm run dev
```

4. Open in browser (usually `http://localhost:5173`)

## Features

- Add new todos
- Edit existing todos (click the edit icon)
- Delete todos
- Mark as complete/incomplete
- Filter by All/Active/Done
- Lazy loading (shows 20 at a time, click "Load More")
- Everything saves to localStorage automatically
