import Navbar from "@/components/Ramble/Navbar/Navbar";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  // if (!session) {
  //   redirect("/auth/login");
  // }

  return (
    <div>
      <div className=" bg-white z-10 w-full">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
