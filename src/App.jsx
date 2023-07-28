import React, { useEffect, useState } from "react";
//import components
import ViewUsers from "./components/ViewUsers";
import AddUsers from "./components/AddUsers";

const App = () => {
  //component to save data on "users" from API 
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  //Fetch API
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  //Add users using method POST
  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Remove users using method DELETE
  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-cyan-200 to-teal-50 min-h-screen">
        <div className="flex flex-col items-center justify-center">
          {/*Header starts here*/}
          <header className="border-b border-black flex items-center justify-center w-full sm:w-4/5 mx-auto pt-8 pb-4">
            <h1 className="text-2xl font-bold">Welcome to SendIT test</h1>
          </header>
          {/*Header ends here*/}
          {/*Main section starts here*/}
          <section className="py-10">
            <AddUsers onAdd={onAdd} />
            {users.map((user) => (
              <ViewUsers
                onDelete={onDelete}
                id={user.id}
                key={user.id}
                name={user.name}
                email={user.email}
              />
            ))}
          </section>
          {/*Main section ends here*/}
          {/*Footer starts here*/}
          <footer className="border-t border-black flex items-center justify-center w-full sm:w-4/5 mx-auto pt-8 pb-4">
            <h1 className="text-2xl text-center font-bold">Diaz David</h1>
          </footer>
          {/*Footer ends here*/}
        </div>
      </div>
    </>
  );
};

export default App;
