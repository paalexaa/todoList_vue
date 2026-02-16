import axios from "axios";
import { defineStore } from "pinia";

export const useTodoStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0,
    }),
    actions: {
        async init() {
            const saved = localStorage.getItem('todoList')
            if (saved) {
                this.todoList = JSON.parse(saved)
                const maxId = this.todoList.reduce((m, t) => Math.max(m, t.id), -1)
                this.id = maxId + 1 
                return
            } 
            await this.fetchFromAPI();
        },
        async fetchFromAPI() {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')

            this.todoList = res.data.map(t => ({ 
                title: t.title, 
                id: t.id, 
                completed: t.completed,
                createdAt: Date.now() }))

            const maxId = this.todoList.reduce((m, t) => Math.max(m, t.id), -1)
            this.id = maxId + 1

            this.persist()

        },
        persist() {
            localStorage.setItem('todoList', JSON.stringify(this.todoList))
        },
        addTask(title) {
            if (!title || title.trim() === '') return

            this.todoList.unshift({ 
                title: title, 
                id: Date.now(), 
                completed: false,
                createdAt: Date.now() })
            this.persist()
        },
        editTask(titleID, newVal) {
            const task = this.todoList.find(object => object.id === titleID)

            if (task && newVal.trim() !== ''){
                task.title = newVal
            }
            this.persist()
        },
        deleteTask(titleID) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== titleID;
            });
            this.persist()
        },
        toggleCompleted(idToFind) {
            const todo = this.todoList.find(obj => obj.id === idToFind)
            if (todo) todo.completed = !todo.completed
            this.persist()
        }

    },
})