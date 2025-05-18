import "./App.css";
import Layout from "./components/Layout";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <div className="bg-[#010519]">
      <SidebarProvider>
        <Layout />
      </SidebarProvider>
    </div>
  );
}

export default App;
