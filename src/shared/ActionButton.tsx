import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';
import { isNotNull } from '@/utils/isNotNull';

type Props = {
  children: React.ReactNode;
  dataTestId?: string | undefined;
  setSelectedPage: (value: SelectedPage) => void;
};

export const ActionButton = ({
  children,
  dataTestId,
  setSelectedPage,
}: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      data-testid={isNotNull(dataTestId) ? dataTestId : undefined}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
