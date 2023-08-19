import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@nextui-org/react";
import Notifications from "../../components/notification";
export default function Home() {
  const { user, login, logout } = useAuth();
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
    </div>
  );
}
