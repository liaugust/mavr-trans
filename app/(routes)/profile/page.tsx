import { ActiveRides } from "@/app/_sections/ActiveRides";
import { ProfileCard } from "@/app/_sections/ProfileCard";
import { RidesHistory } from "@/app/_sections/RidesHistory";

export default function ProfilePage() {
  return (
    <>
      <div className="container">
        <div className="inner py-5 md:py-[45px] flex flex-col md:flex-row gap-y-[60px] lg:gap-y-0 gap-x-10 items-start">
          <div className="order-2 w-full max-w-[660px]">
            <ActiveRides />
            <RidesHistory />
          </div>
          <ProfileCard className="order-1 md:order-3 w-full max-w-[460px]" />
        </div>
      </div>
    </>
  );
}
