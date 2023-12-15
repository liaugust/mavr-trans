import { Sidebar } from "@/app/_components/Sidebar";
import { WithLang } from "@/app/types";
import { options } from "@/config/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

interface AdminLayoutProps extends PropsWithChildren {
  params: WithLang;
}

export default async function AdminLayout({
  children,
  params,
}: AdminLayoutProps) {
  const session = await getServerSession(options);

  if (!session?.user.isAdmin) {
    redirect(`/${params.lang}`);
  }

  return (
    <>
      <Sidebar lang={params.lang} />
      {children}
    </>
  );
}
