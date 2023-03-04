/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';

import ExternalLinkIcon from "./external-link.svg";

type Props = React.ComponentPropsWithoutRef<'a'>;

const CustomLink = ({ href, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <span {...rest}></span>
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
      {typeof children === "string" && (
        <ExternalLinkIcon className="ml-1 inline-block h-4 w-4" />
      )}
    </a>
  );
};

export default CustomLink;
