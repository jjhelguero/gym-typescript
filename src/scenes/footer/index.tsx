import Logo from '@/assets/Logo.png';

export const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='jsutify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img
            src={Logo}
            alt='logo'
          />
          <p className='my-5'>We are a great gym so come here already.</p>
          <p>Evogym All Rights Reserved</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Link 1</p>
          <p className='my-5'>Link 2</p>
          <p>Something Something</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>This is how to contact us</p>
          <p>(999)999-9999</p>
        </div>
      </div>
    </footer>
  );
};
