import { NavLink, useLoaderData } from "react-router-dom";

export const Users = () => {
  const users = useLoaderData();
  return (
    <div className="users">
        {
            users.map((user)=>{
                return (
                    <div className="card" key={user.id}>
                        <h3>
                            <i className="fa-solid fa-caret-right"></i>
                            {user.name}
                        </h3>
                        <NavLink to={user.id.toString()}>
                            <i className="fa-regular fa-circle-right"></i>
                        </NavLink>
                    </div>
                )
            })
        }
    </div>
  )
}

export const usersLoading = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   return res.json();
}
