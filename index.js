//Write an async function to call an api and log its response

const api_call = async()=>{
  let api_1 = await fetch  ("https://reqres.in/api/users?page=1")
  let api_2 = await api_1.json()
  console.log(api_2)
}
api_call()

 //Write an async function that fetches data from multiple APIs and returns the combined result

const api_call1 = async()=>{
  let api_3 = await fetch ("https://reqres.in/api/users?page=1")
  let api_4 = await fetch ("https://reqres.in/api/users?page=1")
  let api_5 = await fetch ("https://reqres.in/api/users?page=1")
  let res = await api_3.json()
  let res_1 = await api_4.json()
  let res_2 = await api_5.json()
  let res_3 = {...res,...res_1,...res_2}
console.log(res_3)

}
api_call1()

//Write 3 async functions(2 child, 1 parent), use 1 to fetch data from api, 2nd to convert it to json and third to initiate the call. Handle errors in the parent only.

const ok = async()=>{
  let fetching = await fetch ("https://reqres.in/api/users?page=1")
  return fetching
  
}
const ok_1 = async()=>{
  let converting = await ok()
  let converting_1 = await converting.json()
  console.log(converting_1)
}
ok_1()

try {
  const level = async()=>{
  let converting_2 = await fetch (" https://reqres.in/api/users?page=1")
  let converting_3 = await converting_2.json()
  console.log(converting_3)
  }
  
} catch (error) {
  console.error("server is busy")
  
}

//Write 3 async functions(2 child, 1 parent), use 1 to fetch data from api, 2nd to convert it to json and third to initiate the call. Handle errors individually for each function. 

try {
    const new_5 = async()=>{
      let new_6 = await fetch ("https://reqres.in/api/users?page=1")
      console.log(new_6)
    }
    new_5()
    
  } catch (error) {
    console.error("server busy")
    
  }
  
  try {
    const new_7 = async()=>{
      let new_8 = await fetch("https://reqres.in/api/users?page=1")
      let new_9 = await new_8.json()
      console.log(new_9)
      
    }
    new_7()
    
  } catch (error) {
    console.error("server is busy!")
    
  }
  try {
    const new_12 = async()=>{
    new_10 = await fetch ("https://reqres.in/api/users?page=1")
    new_11 = await new_10.json()
    console.log(new_11)
    }
    new_12()
  } catch (error) {
    console.error("server busy")
    
  }
const fs = require('fs');
  const read = async()=>{
    let filedata = await fs.promises.readFile("C://Users//HP//Documents//read.txt","utf-8");
    return filedata
  }
  read()
  


