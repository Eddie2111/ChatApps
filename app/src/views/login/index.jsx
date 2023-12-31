import React from "react";
import axios from "axios";

import { Input, Button } from "@nextui-org/react";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
//import { LoginValidation } from "../../validations/loginValidation";

/**
 * This is a login component
 * @return {JSX.Element}
 */
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { user,login, getLogin } = useAuth();

  React.useEffect(() => {
    if (user) {
      // const {id, username} = user;
      window.location.href = "/chat";
    } else {
      console.log("No user");
    }
  }, [user]);
  
  const Test = async() => {
    await getLogin();
  }
  /**
   * This function handles the submit
   * @param {string} email
   * @param {string} password
   * @requires LoginValidation, credentials
   * @return {Promise<void>}
   */
  const SubmitHandle = async () => {
    //console.log(email, password);
    const userData = {
      email,
      password,
    };
    const errors = {}; //await LoginValidation(userData);
    console.log(errors)
    if (errors?.errors?.email){
      alert(errors?.errors?.email)
    }
    else if (errors?.errors?.password){
      alert(errors?.errors?.password)
    }
    else {
      await axios.post("http://localhost:3100/login", userData, {withCredentials:true})
      .then((res) => {
        if(res.data.token) {
          login(res.data.token);
          console.log(res.data.token);
          //window.location.href="/chat"
        }
        else return alert('no user found')
       } )
      .catch((err) => { console.log(err) } )
      //login(userData);
    }
    // put it inside your axios.then statement → login(userData);
  };
  return (
    <section className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
    <button onClick={Test}>get user</button>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>

            <form className="space-y-4 md:space-y-6">
              <div>
                <Input
                  type="email"
                  variant="faded"
                  label="Email"
                  placeholder="Enter your email"
                  labelPlacement="outside"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <Input
                  type="password"
                  variant="faded"
                  label="Password"
                  placeholder="*********"
                  labelPlacement="outside"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button
                radius="full"
                onClick={SubmitHandle}
                className="bg-gradient-to-tr from-blue-500 to-violet-500 text-white shadow-lg w-[100%]"
              >
                Submit{" "}
              </Button>

              <p className="text-sm font-light text-gray-500 text-center">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up{" "}
                </a>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
