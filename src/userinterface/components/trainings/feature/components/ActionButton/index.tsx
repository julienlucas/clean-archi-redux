import { ReactNode } from 'react';

import { HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface ActionLinkProps {
  children: ReactNode;
  href: string | undefined;
  wrapper: any;
}

export const ActionButton = ({
  children,
  onClick,
  href,
}: ActionButtonProps) => {
  const ActionLink = ({ href, wrapper, children }: ActionLinkProps) =>
    href ? wrapper(children) : children;

  return (
    <ActionLink
      href={href}
      wrapper={(children: ReactNode) => {
        return <>{href ? <Link to={href}>{children}</Link> : undefined}</>;
      }}
    >
      <HStack
        as="button"
        width="4rem"
        height="4rem"
        borderRadius="0.4rem"
        transition="background 0.15s"
        justifyContent="center"
        onClick={onClick}
        _hover={{ bg: 'gray.700' }}
      >
        {children}
      </HStack>
    </ActionLink>
  );
};
