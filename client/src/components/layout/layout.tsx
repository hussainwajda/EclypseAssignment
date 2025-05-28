import { Outlet } from "react-router-dom";
import Header from "./header";
// import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-primary)] text-[var(--color-text-light)]">
      <Header />

      <main className="flex-1">
        <Outlet /> {/* Injects the current route's component */}
      </main>

    </div>
  );
}
