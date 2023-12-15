import { ActiveRides } from "@/app/_sections/ActiveRides";
import { ProfileCard } from "@/app/_sections/ProfileCard";
import { RidesHistory } from "@/app/_sections/RidesHistory";
import { WithLang } from "@/app/types";
import { options } from "@/config/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProfilePage({ params }: { params: WithLang }) {
  const session = await getServerSession(options);

  if (!session?.user) {
    redirect(`/${params.lang}/?modal=login`);
  }

  return (
    <>
      <div className="container">
        <div className="inner py-5 md:py-[45px] flex flex-col md:flex-row gap-y-[60px] lg:gap-y-0 gap-x-10 items-start">
          <div className="order-2 w-full max-w-[660px]">
            <ActiveRides lang={params.lang} />
            <RidesHistory lang={params.lang} />
          </div>
          <ProfileCard
            user={session.user}
            lang={params.lang}
            className="order-1 md:order-3 w-full max-w-[460px]"
          />
        </div>
      </div>
    </>
  );
}
