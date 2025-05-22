import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { Transaction } from "./type";

const mockData: Transaction[] = [
  {
    logo: "/images/blue_logo.png",
    hash: "0xd46fe8f649371...",
    from: "0xee226379db83cffc689522436489425415788596515...",
    to: "0x0000000000000000000000000000000000000000",
    amount: "0.11221 USDT",
    timeAgo: "17 secs ago",
  },
  {
    logo: "/images/blue_logo.png",
    hash: "0xd46fe8f649371...",
    from: "0xee226379db83cffc6458217695224444151585741381...",
    to: "0x0000000000000000000000000000000000000000",
    amount: "8.562 BTC",
    timeAgo: "29 secs ago",
  },
  {
    logo: "/images/blue_logo.png",
    hash: "0xd46fe8f649371...",
    from: "0xee226379db83cffc6854286931572871369952346481...",
    to: "0x0000000000000000000000000000000000000000",
    amount: "1.091 SOL",
    timeAgo: "32 secs ago",
  },
  {
    logo: "/images/blue_logo.png",
    hash: "0xd46fe8f649371...",
    from: "0xee226379db83cffc6845879363391254354698217891...",
    to: "0x0000000000000000000000000000000000000000",
    amount: "3.111 BTC",
    timeAgo: "45 secs ago",
  },
  {
    logo: "/images/blue_logo.png",
    hash: "0xd46fe8f649371...",
    from: "0xee226379db83cffc68786432896931424578932741...",
    to: "0x0000000000000000000000000000000000000000",
    amount: "4.1895 ETH",
    timeAgo: "51 secs ago",
  },
];

export function TransactionTable() {
  return (
    <div className="w-full overflow-x-auto text-white">
      <Table className="min-w-[600px]">
        <TableBody className="">
          {mockData.map((row) => (
            <TableRow
              key={row.hash}
              className="flex justify-between px-8 items-center py-6"
            >
              <div className="flex items-center">
                <TableCell className="font-medium flex bg-blue bg-white p-2 w-10 h-10 rounded-sm">
                  <img src={row.logo}></img>
                </TableCell>
                <div className="px-2 flex flex-col items-start">
                  <TableCell className="font-medium">
                    <span className="text-blue-500">{row.hash}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-gray-500">{row.timeAgo}</span>
                  </TableCell>
                </div>
              </div>
              <div className="flex flex-col">
                <TableCell className="font-medium">
                  From: <span className="text-blue-500">{row.from}</span>
                </TableCell>
                <TableCell>
                  To: <span className="text-blue-500">{row.to}</span>
                </TableCell>
              </div>
              <TableCell className="bg-white text-gray-500 text-center p-2 border rounded-md w-[100px]">
                {row.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
