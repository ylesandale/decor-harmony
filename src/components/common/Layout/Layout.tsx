import React from 'react';
import { getLogo } from 'utils/getLogo';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: ILayoutProps) => {
  const logo = getLogo();
  return (
    <>
      <Header logo={logo} />
      <main className={className}>{children}</main>
      <FeedbackForm />
      <Footer logo={logo} />
    </>
  );
};

export default Layout;
