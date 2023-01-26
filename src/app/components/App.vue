<template>
  <div>
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a href="/" class="navbar-brand">MEVN Stack</a>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-5 pt-3">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="sendTask">
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="task.title"
                    placeholder="Insert a task"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    v-model="task.description"
                    cols="30"
                    rows="10"
                    class="form-control"
                    placeholder="Insert a description"
                  ></textarea>
                </div>
                <div class="d-grid">
                  <button class="btn btn-primary">
                    {{ edit ? 'Update' : 'Send' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-7 pt-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">Description</th>
                <th scope="col" colspan="2"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task of tasks">
                <td>{{ task.title }}</td>
                <td>{{ task.description }}</td>
                <td>
                  <button @click="deleteTask(task._id)" class="btn btn-danger">
                    Delete
                  </button>
                </td>
                <td>
                  <button @click="editTask(task._id)" class="btn btn-secondary">
                    Edit task
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Task {
  id

  constructor(title, description) {
    this.title = title
    this.description = description
  }
}

export default {
  data() {
    return {
      task: new Task(),
      tasks: [],
      edit: false,
    }
  },
  created() {
    this.getTasks()
  },
  methods: {
    getTasks() {
      fetch('/api/tasks')
        .then((res) => res.json())
        .then((data) => (this.tasks = data))
    },
    sendTask() {
      if (this.edit) {
        fetch('/api/tasks/' + this.task.id, {
          method: 'PUT',
          body: JSON.stringify(this.task),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.text())
          .then((data) => {
            console.log(data)
            this.getTasks()
            this.edit = false
            this.task = new Task()
          })

        return
      }

      fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(this.task),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data)
          this.getTasks()
          this.task = new Task()
        })
    },
    deleteTask(id) {
      fetch('/api/tasks/' + id, {
        method: 'DELETE',
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data)
          this.getTasks()
        })
    },
    editTask(id) {
      fetch('/api/tasks/' + id, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.task = new Task(data.title, data.description)
          this.task.id = data._id
          this.edit = true
        })
    },
  },
}
</script>
