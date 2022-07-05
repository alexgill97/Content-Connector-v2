import '../styles/globals.scss';
import { AuthProvider } from '../firebase/context';
import Navbar from '../components/Navbar';
import Head from 'next/head';

import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log('router', router);

  return (
    <AuthProvider>
      <Head>
        <title>Content Connector</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {router.pathname !== '/' && <Navbar />}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
