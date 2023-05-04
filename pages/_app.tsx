import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '@/components/Layout/DefaultLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="anonymous"
      />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
