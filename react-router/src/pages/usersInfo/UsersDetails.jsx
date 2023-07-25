// BU KODDAKI HATA ODUR KI, BU KODDA BIZ THEN ISTIFADE EDEREK NETICE DONDERMEK ISTEYIRIK AMMA BU MUMKUN DEYIL
// BUNUN YERINE ASYNC/AWAIT KULLANMAQ LAZIMDIR
// export const usersDetailsLoader = ( data ) => {
//     const userDetails = window.fetch("https://jsonplaceholder.typicode.com/users/" + data.params.userID);
//     userDetails.then((response)=>{
//       console.log(response);
//         return response.json();
//     }).then((response)=>{
//        console.log(response);
//     });
// }

import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export const UsersDetails = () => {
  const userData = useLoaderData();

  return (
    <div className="userDetails">
      <h3>
        <i className="fa-solid fa-caret-right"></i>
        {userData.name}
      </h3>
        <ul>
          <li>Username : {userData.username}</li>
          <li>Email : {userData.email}</li>
          <li>Phone number : {userData.phone}</li>
          <li>Company name : {userData.company.name}</li>
          <li>Address City : {userData.address.city}</li>
        </ul>
        <Link to={"/users"}>Back <i className="fa-solid fa-backward"></i></Link>
    </div>
  );
};

export const usersDetailsLoader = async (data) => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + data.params.userID
  );
  return result.json();
};
