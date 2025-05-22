import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  Package,
  Users,
  UserSquare,
  Wallet,
  ShoppingCart,
  LineChart,
  MailOpen,
  Flame,
  Settings,
  MessageCircle,
  LogOut,
} from "lucide-react";

import logo from "/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Initial Panel",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    url: "#",
    icon: Package,
  },
  {
    title: "Affiliate Showcase",
    url: "#",
    icon: Users,
  },
  {
    title: "Members Area",
    url: "#",
    icon: UserSquare,
  },
  {
    title: "Wallet",
    url: "#",
    icon: Wallet,
  },
  {
    title: "Affiliate Products",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Sales",
    url: "#",
    icon: LineChart,
  },
  {
    title: "NFT Automation - Email",
    url: "#",
    icon: MailOpen,
  },
  {
    title: "Hot Leads",
    url: "#",
    icon: Flame,
  },
];
export function AppSidebar() {
  const [active, setActive] = useState<string>("Initial Panel");
  return (
    <Sidebar>
      <SidebarContent className="bg-[linear-gradient(to_bottom_right,#031c39,#000004)] text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white mb-6 py-8 gap-2">
            <span className="font-medium flex bg-blue bg-blue-600 p-2 w-8 h-8 rounded-sm">
              <img src={logo}></img>
            </span>
            <span className="text-xl">KENESIS</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="p-2">
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      onClick={() => setActive(item.title)}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                        active === item.title
                          ? "bg-[linear-gradient(90deg,_#0C0A27_0%,_#022ED2_100%)]"
                          : "hover:bg-[linear-gradient(90deg,_#0C0A27_0%,_#022ED2_100%)]"
                      }`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent>
            <div className="mt-8 space-y-2 p-2">
              <Link to="/profile">
                <button className="w-full text-left p-2 hover:bg-[linear-gradient(90deg,_#0C0A27_0%,_#022ED2_100%)] rounded-lg flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
              </Link>
              <button className="w-full text-left p-2 hover:bg-[linear-gradient(90deg,_#0C0A27_0%,_#022ED2_100%)] rounded-lg flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Messages
                </span>
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  10
                </span>
              </button>
              <button className="w-full text-left p-2 hover:bg-[linear-gradient(90deg,_#0C0A27_0%,_#022ED2_100%)] rounded-lg flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Log out
              </button>
            </div>
          </SidebarGroupContent>
          <SidebarGroupContent>
            <div className="mt-10 border border-blue-600 rounded-xl p-3 flex items-center gap-3 bg-white/5 hover:bg-white/10 transition">
              <img
                src="/images/profile.png"
                alt="Zyan"
                className="w-10 h-10 rounded-full border border-white"
              />
              <div className="text-sm">
                <div className="font-semibold text-left">Zyan</div>
                <a href="#" className="text-xs text-white/70 hover:underline">
                  View Profile →
                </a>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
