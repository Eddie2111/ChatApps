import React from 'react';
import { useAuth } from '../../context/AuthContext';
import {Button, ButtonGroup} from "@nextui-org/react";

export default function Home(){
    const { user, login, logout } = useAuth();
    React.useEffect(()=>{
        if(user){
            const {id, username} = user;
        }else{
            console.log("No user")
            window.location.href = "/login"
        }
    },[])
    return(
        <div>
            Home
            {user ? (
                <Button color="primary" onClick={logout}>Logout</Button>
            ) : (
                <Button color="primary" onClick={() => login({ id: 1, username: 'bob' })}>
                    Login
                </Button>
            )}
        </div>
    )
}