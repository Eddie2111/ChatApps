import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@nextui-org/react";
import Notifications from "../../components/notification";
import UserPost from '../../components/posts/userpost';
import CreatePost from '../../components/posts/createpost';
export default function Home() {
  const { user, login, logout } = useAuth();
  const testArray = [1,2,4,6,7,9,41,42,2,865];
  /**
   * This function handles the authentication
   * @param {any} User
   * @return {Promise<void>}
   */
  // React.useEffect(() => {
  //   if (user) {
  //     // const {id, username} = user;
  //   } else {
  //     console.log("No user");
  //     window.location.href = "/login";
  //   }
  // }, [user]);
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <CreatePost />
        {testArray.map((item, index) => {
          return <UserPost key={index} />
        })}
      </div>
    </div>
  );
}
/*
      Home
      <Notifications />
      {user ? (
        <Button color="primary" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button
          color="primary"
          onClick={() => login({ id: 1, username: "bob" })}
        >
          Login
        </Button>
      )}
      */
