import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"


export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen ">
      <div className="max-w-5xl mx-auto py-16">
      <h1 className="text-center">Example Form</h1>
        <form className="py-4 space-y-4 px-4">
          <div className=" grid w-full max-w-sm items-center gap-1.5">
          <Label  htmlFor="name">Name</Label>
      <Input type="name" id="name" placeholder="Name" />
          </div>
          <div className=" grid w-full max-w-sm items-center gap-1.5">
          <Label  htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className=" grid w-full max-w-sm items-center gap-1.5">
          <Label  htmlFor="phone">Phone</Label>
      <Input type="tel" id="phone" placeholder="Phone" />
          </div>
          <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea className="bg-white" placeholder="Type your message here." id="message" />
    </div>
        </form>
      </div>
    </main>
  );
}
