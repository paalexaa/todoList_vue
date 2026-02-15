import { defineStore } from "pinia";

export const useTodoStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0,
    }),
    actions: {
        init() {
            const saved = localStorage.getItem('todoList')
            if (saved) {
                this.todoList = JSON.parse(saved)

                const maxId = this.todoList.reduce((m, t) => Math.max(m, t.id), -1)
                this.id = maxId + 1
            }
        },
        persist() {
            localStorage.setItem('todoList', JSON.stringify(this.todoList))
        },
        addTask(title) {
            this.todoList.push({ 
                title: title, 
                id: this.id++, 
                completed: false })
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