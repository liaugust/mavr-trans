import { ChooseYourTrip } from "@/app/_sections/ChooseYourTrip";
import { WithLang } from "@/app/types";
import { options } from "@/config/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function TipPage({ params }: { params: WithLang }) {
  const session = await getServerSession(options);

  if (!session?.user) {
    redirect(`/${params.lang}/?modal=login`);
  }

  return <ChooseYourTrip lang={params.lang} />;
}
