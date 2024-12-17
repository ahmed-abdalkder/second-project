

const posttitle=document.getElementById("title")
const postdescription=document.getElementById("description")
const postprice=document.getElementById("price")

let post=[];

function getdata(){
fetch('http://localhost:3000/posts')
.then(response => response.json())
.then(data =>{ console.log(data.result)
    post= data.result;
    display()
});  
}  
getdata()

function display(){
let box=''
for (let i = 0; i < post.length; i++) {
    box +=` <tr>
                <td>"${[i]}"</td>
                <td>"${post[i].title}"</td>
                <td>"${post[i].description}"</td>
                <td>"${post[i].price}"</td>
                <td>
                 <button  onclick="setdata(${i})" class="btn btn-success">update</button>
                 <button onclick="deletepost(${i})" class="btn btn-danger">delete</button>
                </td>
              </tr>`
    
}
 document.getElementById("tbody").innerHTML=box
}
 function addpost(){
   let data={ title:posttitle.value,
    description:postdescription.value,
    price:postprice.value
   }
   api ("POST",data)
   claer()
 }
 let Id=''
 function setdata(i){
   Id=post[i].id
    posttitle.value=post[i].title,
     postdescription.value=post[i].description,
    postprice.value=post[i].price
   
    document.getElementById("add").style.display="none"
    document.getElementById("update").style.display="block"
  
  }
function updatepost(){
 
  let data={ id:Id,
     title:posttitle.value,
    description:postdescription.value,
    price:postprice.value
   }
   api ("PATCH",data)
   document.getElementById("add").style.display="block"
    document.getElementById("update").style.display="none"
    claer()
}
function deletepost(i){
  let data={
    id:post[i].id
  }
  api("DELETE",data)
}
function claer(){
   posttitle.value="",
   postdescription.value="",
  postprice.value=""
}
function api(method,data){
fetch('http://localhost:3000/posts', {
    method ,
    headers: {
         'Accept':'application/json',
      'Content-Type': 'application/json',
    },
     body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then((response)=>{
    getdata()
    });  
}















