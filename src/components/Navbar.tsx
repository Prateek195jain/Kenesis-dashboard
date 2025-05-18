import { Bell, Search, Wallet } from "lucide-react";

export function Navbar() {
  return (
    <div className="h-fit p-4 w-full">
      <div className="flex flex-col items-start lg:flex-row lg:justify-between gap-4">
        {" "}
        <div className="border border-blue-500 rounded-md w-full flex items-center">
          <div className="text-white opacity-50 pl-8 text-sm">
            <Search />
          </div>
          <input
            className="text-white w-full p-2 outline-0"
            type="text"
            placeholder="Seach"
          />
        </div>
        <div className="flex gap-4">
          <div className="text-white border border-blue-500 rounded-md p-2">
            <Bell />
          </div>
          <div className="flex gap-3 text-white border border-blue-500 rounded-md p-2">
            <p>0x6C4...FCF3741</p>
            <Wallet />
          </div>
        </div>
      </div>
    </div>
  );
}
