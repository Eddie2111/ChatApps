import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { user,login } = useAuth();
  React.useEffect(() => {
    if (user) {
      // const {id, username} = user;
      window.location.href = "/chat";
    } else {
      console.log("No user");
    }
  }, [user]);
  const SubmitHandle = async () => {
    console.log(email, password);
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
