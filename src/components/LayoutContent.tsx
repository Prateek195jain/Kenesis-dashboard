import { useSidebar } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar } from "./Navbar";
import WalletTabs from "./WalletTabs";
import { Route, Routes } from "react-router-dom";
import { Withdrawls } from "@/pages/Withdrawls";
import { Reimbursement } from "@/pages/Reimbursement";
import { WalletPage } from "../pages/WalletPage";
import ProfilePage from "@/Features/Settings/pages/ProfilePage";

export default function LayoutContent() {
  const { open } = useSidebar();

  const mainWidthClass = open
    ? "w-full md:w-2/3 lg:w-full h-fit"
    : "w-full md:w-full lg:w-full h-fit";

  return (
    <main className={mainWidthClass}>
      <div className="flex items-center">
        <SidebarTrigger className="fixed z-50 m-4 p-2 text-white rounded" />
        <Navbar />
      </div>

      <WalletTabs />

      <Routes>
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/withdrawals" element={<Withdrawls />} />
        <Route path="/reimbursement" element={<Reimbursement />} />
        <Route path="*" element={<WalletPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </main>
  );
}
