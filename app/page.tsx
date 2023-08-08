import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen ">
      <div className="max-w-5xl mx-auto py-16">
        <form className="py-4 space-y-4">
          <div className="flex item-center justify-center">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="name" />
          </div>
        </form>
      </div>
    </main>
  );
}
