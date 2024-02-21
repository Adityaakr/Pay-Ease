import React, { useEffect, useState } from "react";
import axios from "axios";
import DashButton from "./Dash-Button";

export function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/user/bulk", {
        params: {
          filter,
          firstName,
          lastName,
        }
      })
      .then((response) => {
        setUsers(response.data.user);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [filter, firstName, lastName]);

  return (
    <>
      <div className="ml-7 mb-3 font-semibold text-3xl mt-10">Users</div>
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        type="text"
        placeholder="Search Users ..."
        className="lg:w-5/6 w-96 h-12 text-sm rounded-lg border-gray-300 
                -mt-1 ml-6 border-2 p-2 py-2 
                focus:outline-none focus:border-blue-500 "
      />

      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
}

export default function User({ user }) {
  return (
    <>
      {user && (
        <div className="flex justify-between">
          <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mr-2 m-5 mt-5">
              <div className="flex flex-col justify-center h-full text-xl ">
                {user.firstName[0]}
              </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
              <div>
                {user.firstName} {user.lastName}
              </div>
            </div>
          </div>

        <button className="border m-5 w-36 rounded-lg bg-gray-600 text-white lg:mr-80">
        <DashButton buttonText={"Send Money"} to={"/send?id=" + user._id + "&name=" + user.firstName}/>
        </button>
        </div>
      )}
    </>
  );
}
