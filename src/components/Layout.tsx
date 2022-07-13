import { useRouter } from 'next/router';
import Head from 'next/head';

import TopHeader from './Global/TopHeader';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Nav from './Global/Nav';

const Layout = ({ children, pageMeta }) => {
  const router = useRouter();

  const meta = {
    title: 'HighTable',
    description: 'HighTable is a platform for restaurants to connect with their customers and grow their business.',
    // url: 'https://www.hightable.africa',
    type: 'website',
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/logo1.jpg" />
        <meta name="description" content={meta.description} key="title" />

        <meta property="og:url" content={`http://localhost:3000${router.asPath}`} key="url" />

        <meta property="og:type" content={meta.type} key="og:type" />
        <meta property="og:title" content={meta.title} key="og:title" />
        <meta property="og:description" content={meta.description} key="og:description" />
        {meta.date && <meta property="og:date" content={meta.date} key="og:date" />}
      </Head>
      {router.pathname === '/forgotpassword' || <TopHeader />}

      {router.pathname === '/login' ||
        router.pathname === '/signup' ||
        router.pathname === '/signupsteps' ||
        router.pathname === '/recommended' ||
        router.pathname === '/forgotpassword' || <Header />}
      {/* {router.pathname === '/restaurantDetails' && <Nav />} */}
      {children}
      {router.pathname === '/login' ||
        router.pathname === '/signup' ||
        router.pathname === '/signupsteps' ||
        router.pathname === '/recommended' ||
        router.pathname === '/forgotpassword' ||
        router.pathname === '/profileSettings' ||
        router.pathname === '/profileOverviewReviews' ||
        router.pathname === '/adCreation' ||
        router.pathname === '/accountSettings' ||
        router.pathname === '/paymentPreference' ||
        router.pathname === '/notificationSettings' ||
        router.pathname === '/eventReservations' || <Footer />}
    </>
  );
};

export default Layout;
