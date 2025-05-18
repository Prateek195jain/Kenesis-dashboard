import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import LayoutContent from "./LayoutContent";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <LayoutContent />
    </SidebarProvider>
  );
}
