import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  onClick: () => void;
  href: string;
  label: string;
};

export const ActionButton = ({ onClick, href, label }: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
      onClick={onClick}
      href={href}
    >
      {label}
    </AnchorLink>
  );
};
