import { Button } from "@/app/_components/Button";
import { Text, Title } from "@/app/_components/Typography";
import { options } from "@/config/options";
import { DefaultSession, getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FC } from "react";
import { SuccessfulRides } from "./SuccessfulRides";
import { ChangePassword } from "@/app/_components/ChangePassword";
import { WithLang } from "@/app/types";

interface ProfileCardProps extends WithLang {
  className?: string;
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    phoneNumber?: string | null;
    provider?: "google" | "credentials";
  };
}

export const ProfileCard: FC<ProfileCardProps> = async ({
  className,
  lang,
  user,
}) => {
  return (
    <div
      className={`bg-white rounded-[10px] overflow-hidden shadow-[0px_4px_14px_0px_rgba(0,0,0,0.20)], ${className}`}
    >
      <div className="pt-[30px] pb-10 md:pb-[60px] px-5 flex flex-col items-center">
        <div className="mb-5 w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-[50%] overflow-hidden bg-primary">
          {user.image && (
            <Image
              alt={""}
              width={200}
              height={200}
              objectFit="cover"
              src={user.image}
            />
          )}
        </div>
        <Title
          weight="1"
          Component="p"
          level="5"
          className="mb-[30px] md:mb-5 capitalize"
        >
          {user.name}
        </Title>
        <Text Component="a" href="tel:+11231233456" className="mb-[14px]">
          {user.phoneNumber}
        </Text>
        <Text
          Component="a"
          href="mailto:test@gmail.com"
          className="mb-[30px] md:mb-10"
        >
          {user.email}
        </Text>
        {user.provider !== "google" && <ChangePassword lang={lang} />}
      </div>
      <SuccessfulRides lang={lang} />
    </div>
  );
};
