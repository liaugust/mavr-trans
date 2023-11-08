import { FC } from "react";
import NextLink from "next/link";

type NextLinkProps = React.ComponentProps<typeof NextLink>;
interface LinkProps extends NextLinkProps {}

export const Link: FC<LinkProps> = ({ ...rest }) => {
  return <NextLink {...rest} />;
};
