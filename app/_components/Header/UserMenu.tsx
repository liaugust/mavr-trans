import { FC } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { WithLang } from "@/app/types";
import { Button } from "../Button";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { useTranslation } from "@/app/_i18n/client";

interface UserMenuProps extends WithLang {
  onCloseModal: () => void;
  className?: string;
}

export const UserMenu: FC<UserMenuProps> = ({
  className,
  lang,
  onCloseModal,
}) => {
  const { t } = useTranslation(lang);
  const router = useRouter();
  const session = useSession();

  return (
    <div className={`flex items-center gap-x-[15px] ${className}`}>
      <LanguageSelector lang={lang} />

      {session.data?.user ? (
        <>
          <Button
            variant="outlined_primary"
            onClick={() => {
              router.push(`/${lang}/profile`);
              onCloseModal();
            }}
          >
            {t("header.buttons.profile")}
          </Button>

          <button
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/?modal=login`,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.9451 0.038269C1.46196 0.144681 1.0949 0.351244 0.718431 0.723685C0.401569 1.03979 0.22902 1.31208 0.0847059 1.72833L0 1.97871V14.0283L0.0847059 14.2786C0.22902 14.6918 0.401569 14.9672 0.718431 15.2833C1.03529 15.5994 1.31137 15.7715 1.72549 15.9155L1.97647 16H9.31765L9.56863 15.9155C9.98275 15.7715 10.2588 15.5994 10.5757 15.2833C10.8957 14.9641 11.0682 14.6886 11.2063 14.2786C11.291 14.0314 11.291 14.0126 11.3035 13.0643C11.3129 12.1254 11.3129 12.0972 11.2471 11.9595C11.2031 11.8719 11.1278 11.7842 11.0494 11.7341C10.9396 11.6622 10.8894 11.6496 10.6824 11.6496C10.4753 11.6496 10.4251 11.6622 10.3153 11.7341C10.24 11.7842 10.1616 11.8719 10.1208 11.9532C10.0612 12.0816 10.0549 12.1441 10.0549 12.7638C10.0549 13.1331 10.0392 13.5306 10.0235 13.6527C9.94196 14.2223 9.51216 14.6511 8.94118 14.7325C8.64628 14.7731 2.64784 14.7731 2.35294 14.7325C1.78196 14.6511 1.35216 14.2223 1.27059 13.6527C1.2298 13.3522 1.2298 2.65474 1.27059 2.35428C1.35216 1.78467 1.78196 1.35589 2.35294 1.27452C2.64784 1.23383 8.64628 1.23383 8.94118 1.27452C9.51216 1.35589 9.94196 1.78467 10.0235 2.35428C10.0392 2.47322 10.0549 2.87382 10.0549 3.24313C10.0549 3.86282 10.0612 3.92542 10.1208 4.05374C10.1616 4.13511 10.24 4.22275 10.3153 4.27282C10.4251 4.34481 10.4753 4.35733 10.6824 4.35733C10.8894 4.35733 10.9396 4.34481 11.0494 4.27282C11.1278 4.22275 11.2031 4.13511 11.2471 4.04748C11.3129 3.90977 11.3129 3.8816 11.3035 2.94268C11.291 1.99436 11.291 1.97558 11.2063 1.72833C11.0682 1.31834 10.8957 1.04292 10.5757 0.723685C10.2588 0.40758 9.98275 0.235443 9.56863 0.0914748L9.31765 0.00697148L5.72549 0.000711975C2.83608 -0.00241778 2.09569 0.00384173 1.9451 0.038269Z"
                fill="#EBB200"
              />
              <path
                d="M13.4588 5.3964C13.1514 5.55602 13.0196 5.90342 13.1451 6.21327C13.1765 6.28525 13.3961 6.52937 13.7349 6.86739L14.2745 7.40883H6.59137L6.45333 7.47456C6.37177 7.51524 6.28392 7.59349 6.23373 7.6686C6.16157 7.77814 6.14902 7.82822 6.14902 8.03478C6.14902 8.24135 6.16157 8.29142 6.23373 8.40096C6.28392 8.47608 6.37177 8.55432 6.45333 8.59501L6.59137 8.66073H14.2745L13.7349 9.19905C13.3961 9.54019 13.1765 9.78432 13.1451 9.8563C13.0541 10.0785 13.1043 10.3633 13.2643 10.5323C13.4431 10.7264 13.7976 10.7858 14.0329 10.6669C14.0957 10.6325 14.5161 10.235 14.9678 9.78119C15.6894 9.05508 15.7992 8.93302 15.8933 8.73898C15.8933 8.73898 16 8.69575 16 8.05229C16 7.40883 15.8933 7.33059 15.8933 7.33059C15.7992 7.13655 15.6894 7.01448 14.9678 6.28838C14.5161 5.83457 14.0957 5.43709 14.0329 5.40266C13.8886 5.32755 13.5937 5.32442 13.4588 5.3964Z"
                fill="#EBB200"
              />
            </svg>
          </button>
        </>
      ) : (
        <>
          <SignIn lang={lang} />
          <SignUp lang={lang} />
        </>
      )}
    </div>
  );
};