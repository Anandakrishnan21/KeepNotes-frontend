import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";

export default async function HomeLayout({ children }) {
  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div className="bg-sky-50 h-screen grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="overflow-x-hidden dark:bg-neutral-950">
          <div className="box-border dark:bg-neutral-950">{children}</div>
        </div>
      </div>
    </div>
  );
}
