import Navbar from "@/components/Soporte/navbar/Navbar";
import Sidebar from "@/components/Soporte/sidebar/Sidebar";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getServerSession();

  // if (!session) {
  //   redirect("/");
  // }

  return (
    <div className="bg-neutral-50 flex w-full">
      <SessionAuthProvider>
        <div className="flex-1 bg-neutral-400 p-5 h-lvh">
          <Sidebar />
        </div>
        <div className="flex-4 p-5 w-full">
          <Navbar />
          {children}
        </div>
      </SessionAuthProvider>
    </div>
  );
}
