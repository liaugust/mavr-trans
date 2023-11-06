import { ProfileProvider } from "@/app/profile-context";
import { PropsWithChildren } from "react";

export default function ProfileLayout({ children }: PropsWithChildren) {
  return <ProfileProvider>{children}</ProfileProvider>;
}
