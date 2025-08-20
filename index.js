const express = require('express');

const app = express();

app.get("/", (req, res)=> {
    res.json(
        [
            {
                id: 1,
                employeeName: "Vaishnavi",
                employeeSalary: 70000
            },
            {
                id: 2,
                employeeName: "Poonam",
                employeeSalary: 60000
            },
            {
                id: 3,
                employeeName: "Reen",
                employeeSalary: 10000
            },
            {
                id: 4,
                employeeName: "Prit",
                employeeSalary: 90000
            }
        ]
    )
})

app.listen(3000, () => {
    console.log("App is running on Port No: 3000")
})

