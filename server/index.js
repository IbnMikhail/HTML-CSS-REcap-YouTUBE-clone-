import express from 'express';
import cors from "cors"


const app = express();

//middleware
app.use(cors(/*{
    origin: ["http://localhost:5173"],
}*/)
);
app.use(express.json());

//ROUTES
// CREATE A TODO
app.post("/todos", async (req,res) => {
    try {
        const {task, is_completed} = req.body;  
        const todos = await sql `INSERT INTO  * FROM todos (task, is_completed) VALUES (${task}, ${is_completed}) RETURNING *`;
        res.json(todos);
        console.log(todos)
    } catch (error) {
        console.error(err.message);
    }
})
//GET ALL TODO
//GET A TODO
//UPDATE A TODO
//DELETE A TODO

app.listen(8000, () => {
    console.log("server has started on port 8000")
}) 