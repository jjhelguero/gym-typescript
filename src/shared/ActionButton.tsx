import AnchorLink from 'react-anchor-link-smooth-scroll';
import { isNotNull } from '@/utils/isNotNull';

type Props = {
  onClick: () => void;
  href: string;
  label: string;
  dataTestId?: string | undefined;
};

export const ActionButton = ({ onClick, href, label, dataTestId }: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
      onClick={onClick}
      href={href}
      data-testid={isNotNull(dataTestId) ? dataTestId : undefined}
    >
      {label}
    </AnchorLink>
  );
};
