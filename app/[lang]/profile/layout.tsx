import { ProfileProvider } from "@/app/[lang]/profile-context";
import { PropsWithChildren } from "react";

export default function ProfileLayout({ children }: PropsWithChildren) {
  return <ProfileProvider>{children}</ProfileProvider>;
}
