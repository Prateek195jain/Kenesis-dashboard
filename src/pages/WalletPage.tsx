import { ArrowUp } from "lucide-react";
import { TransactionTable } from "../components/TransactionTable";
import FilterSortBar from "../components/FilterSortBar";

const cards = [
  {
    title: "Balance",
    value: "$833.00",
    change: (
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-1">
          <span className="bg-green-950 border border-transparent rounded-md px-1 text-green-500 flex items-center gap-1">
            <ArrowUp className="w-4 h-4 rotate-[45deg]" />
            4.8%
          </span>
          <span className="text-white">from yesterday</span>
        </div>
        <button className="p-2 bg-[linear-gradient(to_right,_#0680FF,_#022ED2)] text-white text-sm rounded-md">
          Request Withdrawl
        </button>
      </div>
    ),
  },
  {
    title: "To Receive",
    value: "$833.00",
    change: (
      <>
        <div className="flex items-center space-x-1">
          <span className="bg-green-950 border border-transparent rounded-md px-1 text-green-500 flex items-center gap-1">
            <ArrowUp className="w-4 h-4 rotate-[45deg]" />
            4.8%
          </span>
          <span className="text-white">Future values you will receive</span>
        </div>
      </>
    ),
  },
  {
    title: "Withdrawals Made",
    value: "$745.000",
    change: (
      <>
        <div className="flex items-center space-x-1">
          <span className="bg-green-950 border border-transparent rounded-md px-1 text-green-500 flex items-center gap-1">
            <ArrowUp className="w-4 h-4 rotate-[45deg]" />
            4.8%
          </span>
          <span className="text-white">Amount already withdrawn</span>
        </div>
      </>
    ),
  },
];

export const WalletPage = () => {
  return (
    <div className="mx-4 mt-10">
      <div className="bg-gradient-to-b from-[#0680FF] via-[#022ED2] to-transparent p-px mx-4 rounded-md">
        <div className="max-w-full h-fit p-4 bg-[#0a0a1a] rounded-md">
          <div className="m-10 flex flex-col gap-3 text-white ">
            <h1 className="border-b-2 border-transparent border-gradient w-fit ">
              Wallet
            </h1>
            <p>
              Withdrawals are automatically processed after 72 hours and sent to
              your designated wallet if no dispute is raised by the buyer.
            </p>
            <p>Notice: A 1.5% fee is deducted from all your sales.</p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 w-full h-fit gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-center bg-[linear-gradient(to_bottom_right,#031c39,#000004)] border border-blue-600 rounded-md items-center p-10 gap-5"
              >
                <h1 className="text-lg md:text-xl text-center text-gray-300">
                  {card.title}
                </h1>
                <h1 className="text-4xl md:text-6xl text-white text-center">
                  {card.value}
                </h1>
                <p className="text-md md:text-xl text-gray-300 text-center">
                  {card.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 bg-gradient-to-b from-[#0680FF] via-[#022ED2] to-transparent p-px mx-6 rounded-md">
        <div className="h-fit p-4 bg-[#0a0a1a] rounded-md">
          <div className="flex flex-col lg:flex-row">
            <h1 className="flex-1 text-white text-xl lg:px-8 py-4">
              Latest Transaction
            </h1>
            <FilterSortBar />
          </div>
          <TransactionTable />
        </div>
      </div>
    </div>
  );
};
