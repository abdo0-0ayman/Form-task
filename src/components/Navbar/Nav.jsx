import React, { useEffect, useState } from "react";

export default function Nav() {
  const [users, setUsers] = useState([
    { id: 1, name: "abdo" },
    { id: 2, name: "abdo" },
    { id: 3, name: "abdo" },
    { id: 4, name: "abdo" },
  ]);

  const [auth,setAuth]=useState(true);

  const function_name=()=>{
        setAuth(!auth)
}

useEffect(()=>{
console.log("mouting");
},[]);

useEffect(()=>{
  console.log("watch auth updating");

},[auth]);

useEffect(()=>{
  console.log("any updates");
});

  return (<>
        <ul>
                {users.map(user=>{
                        return <li key={user.id}>{user.name}</li>
                })}
        </ul>
        <h1>{auth?"auth":"not auth"}</h1>
        <button onClick={()=>function_name()}>Change</button>
        </>
  );
}
