var tasks = require("../controllers/tasks.js");

module.exports = function(app){
    app.get("/", tasks.index)

    app.get("/tasks/:id", tasks.details)

    app.post("/tasks", tasks.create)

    app.put("/tasks/:id", tasks.update)

    app.delete('/tasks/:id', tasks.delete)
}