"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      phone,
      message,
    };

    // console.log(form);

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
       "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();
    console.log(content);

    alert(content.data.tableRange);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    //todo submit via API
  };

  return (
    <main className="bg-gray-100 min-h-screen ">
      <div className="max-w-5xl mx-auto py-16">
        <h1 className="text-center">Example Form</h1>
        <form
          onSubmit={handleSubmit}
          className="py-4 space-y-4 px-4 w-full flex flex-col items-center"
        >
          <div className=" grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className=" grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="phone"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className=" grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
            />
          </div>
          <div className="grid w-full gap-1.5 max-w-sm">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white"
              placeholder="Type your message here."
              name="message"
              id="message"
            />
          </div>

          <div className="grid w-full gap-1.5 max-w-sm">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
