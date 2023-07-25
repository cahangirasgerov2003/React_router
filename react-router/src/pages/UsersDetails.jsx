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
import { useLoaderData } from "react-router-dom";

export const UsersDetails = () => {

  const userData = useLoaderData();

  return (
    <>
      <div className="loaderData">
        <h2>
          { userData.name }
        </h2>
         <h3>
         { userData.username }
         </h3>
      </div>
    </>
  );
};

export const usersDetailsLoader = async ( data ) => {
  const result = await (fetch("https://jsonplaceholder.typicode.com/users/" + data.params.userID));
  return result.json();
}

