"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        //console.log(user, 'user login info!');
        const { data, error } = await authClient.signIn.email({
            email: user?.email,
            password: user?.password
        });
        if (data) {
            redirect('/');
        } 
        if (error) {
            alert('User is not recognized!');
        }
    
    }
  return (
    <div className="w-xl  mx-auto my-4 rounded-md border-1 px-4 py-2">
      <h2 className="text-center text-2xl">Login </h2>
      <Form onSubmit={onSubmit} className="flex w-lg mx-auto flex-col gap-4 px-8 py-4">
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={5}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 5) {
              return "Password must be at least 5 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2 justify-center">
          <Button className="rounded-md mx-auto w-full bg-cyan-500" type="submit">
            
            Login
          </Button>
          
        </div>
      </Form>
      {/* <div className="flex mx-auto justify-center gap-2 my-1 items-center">
        <p className="text-[#647489]">Don't have any account?</p>
        <Link className="text-blue-600 font-bold" href={'/signup'}>SignUp</Link>
      </div> */}
       {/* <div className="mx-auto justify-center items-center flex my-2 px-10 ">
            <Link className="bg-blue-500 mx-auto justify-center w-full text-center px-4 py-2 rounded-md" href="/signup">Sign Up</Link>
        </div> */}


        <div className="flex justify-center items-center gap-2">
            <Separator className="w-32"/>
                <p className="whitespace-nowrap">Or signup with Google</p>
            <Separator className="w-32"/>
        </div>
        <div className="my-2">
            <div className=" w-full mx-auto justify-center flex">
                <Button className="bg-purple-300 w-full mx-12 rounded-md my-1" href={'/google'}>
                    <FcGoogle />
                    SignIn with Google
                </Button>
                
            </div>
          <div className="text-center flex justify-center gap-2">
          
            <p className="text-[#647489]">Don't have an account?</p>
            <Link className="text-blue-600 font-bold" href={'/signup'}>SignUp</Link>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;
