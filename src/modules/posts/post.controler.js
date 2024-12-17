import connection from "../../../db/connection.js"


// export const getposts=(req,res,next)=>{
   

//      const query=`select * from posts`
//     connection.execute(query,(err,result)=>{
//         if(err){
//             return res.json("catch error",err)
//          }
//           return res.json({msg:"done",result})
//     })
 
// }
// export const addpost=(req,res,next)=>{
//     const{title,description,price}=req.body

//      const query =`insert into posts(title,description,price)values("${title}","${description}","${price}")`
//     connection.execute(query,(err,result)=>{
//         if(err){
//             return res.json("catch error",err)
//          }
     
         
//          return res.json(result)
//     })
 
// }
// export const updatepost=(req,res,next)=>{
//     const{ price,title,description,id}=req.body
     

//      const query=`update posts  set price="${price}", title="${title}", description="${description}" where  id="${id}"`
//     connection.execute(query,(err,result)=>{
//         if(err){
//             return res.json("catch error",err)
//          }
         
         
//          return res.json(result)
//     })
 
// }
// export const deletepost=(req,res,next)=>{
     
//      const{id}=req.body

//      const query=`delete from posts where  id="${id}"`
//     connection.execute(query,(err,result)=>{
//         if(err){
//             return res.json("catch error",err)
//          }
         
         
//          return res.json(result)
//     })
 
// }


export const getposts = (req, res, next) => {
    const query = `SELECT * FROM posts`;
    connection.execute(query, (err, result) => {
        if (err) {
            console.error("Error fetching posts:", err);
            return res.status(500).json({ error: "An error occurred while fetching posts." });
        }
        return res.status(200).json({ message: "Posts retrieved successfully", result });
    });
};

export const addpost = (req, res, next) => {
    const { title, description, price } = req.body;

    // Validate inputs
    if (!title || !description || !price) {
        return res.status(400).json({ error: "All fields (title, description, price) are required." });
    }

    const query = `INSERT INTO posts (title, description, price) VALUES (?, ?, ?)`;
    connection.execute(query, [title, description, price], (err, result) => {
        if (err) {
            console.error("Error adding post:", err);
            return res.status(500).json({ error: "An error occurred while adding the post." });
        }
        return res.status(201).json({ message: "Post added successfully", result });
    });
};

export const updatepost = (req, res, next) => {
    const { id, title, description, price } = req.body;

    // Validate inputs
    if (!id || !title || !description || !price) {
        return res.status(400).json({ error: "All fields (id, title, description, price) are required." });
    }

    const query = `UPDATE posts SET title = ?, description = ?, price = ? WHERE id = ?`;
    connection.execute(query, [title, description, price, id], (err, result) => {
        if (err) {
            console.error("Error updating post:", err);
            return res.status(500).json({ error: "An error occurred while updating the post." });
        }
        return res.status(200).json({ message: "Post updated successfully", result });
    });
};

export const deletepost = (req, res, next) => {
    const { id } = req.body;

    // Validate input
    if (!id) {
        return res.status(400).json({ error: "Post ID is required." });
    }

    const query = `DELETE FROM posts WHERE id = ?`;
    connection.execute(query, [id], (err, result) => {
        if (err) {
            console.error("Error deleting post:", err);
            return res.status(500).json({ error: "An error occurred while deleting the post." });
        }
        return res.status(200).json({ message: "Post deleted successfully", result });
    });
};