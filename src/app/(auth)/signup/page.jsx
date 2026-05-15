"use client";
import { authClient } from "@/lib/auth-client";
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
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user, "user sign up info!");
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      password: user.password,
      image: user.image,
    });
    console.log({ data, error });
    if (data) {
      redirect("/login");
    }
    if (error) {
      alert("Registration user failed!");
    }
  };
  return (
    <div className="w-xl mx-auto justify-center my-4 border-1 rounded-md py-2">
      
        <h2 className="text-2xl text-center">Create an account</h2>
        <p className="text-center text-[#647489]">
          Start your adventure with Wanderlust.
        </p>
        <Form
          onSubmit={onSubmit}
          className="flex w-lg mx-auto flex-col gap-4 my-4 px-4 rounded-md"
        >
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="image" type="url">
            <Label>Image Url</Label>
            <Input placeholder="Enter your image url" />
            <FieldError />
          </TextField>
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
          <div className="flex gap-2 justify-center ">
            <Button className="w-full rounded-md bg-cyan-500" type="submit">
              Create account
            </Button>
          </div>
        </Form>
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
          
            <p className="text-[#647489]">Already have an account?</p>
            <Link className="text-blue-500 font-bold" href={'/login'}>Login</Link>
            </div>
        </div>
      </div>
   
  );
};

export default RegisterPage;
