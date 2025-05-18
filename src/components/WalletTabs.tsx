import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Wallet", path: "/wallet" },
  { name: "Withdrawals", path: "/withdrawals" },
  { name: "Reimbursement", path: "/reimbursement" },
];

const WalletTabs = () => {
  const location = useLocation();

  return (
    <div className="mt-10 px-8 flex justify-start gap-4 border-b border-blue-600 w-full">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <Link
            key={tab.name}
            to={tab.path}
            className={`font-medium transition 
              ${
                isActive
                  ? "text-white border-gradient"
                  : "text-gray-400 border-b-2 border-transparent hover:text-white"
              }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};

export default WalletTabs;
