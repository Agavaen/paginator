const express = require("express");
const app = express();

app.set("view engine", "ejs");

// тестовые данные
const tasks = [
  { id: 1, title: "Задача 1" },
  { id: 2, title: "Задача 2" },
  { id: 3, title: "Задача 3" },
  { id: 4, title: "Задача 4" },
  { id: 5, title: "Задача 5" },
  { id: 6, title: "Задача 6" }
];

// ПАГИНАЦИЯ
app.get("/", (req, res) => {

  let page = parseInt(req.query.page) || 1; 
  let limit = 2; 

  let startIndex = (page - 1) * limit;
  let endIndex = page * limit;

  let paginatedTasks = tasks.slice(startIndex, endIndex);

  let totalPages = Math.ceil(tasks.length / limit);

  res.render("index", {
    tasks: paginatedTasks,
    currentPage: page,
    totalPages: totalPages
  });

});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});