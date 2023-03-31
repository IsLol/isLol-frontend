import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  <Script
    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossOrigin="anonymous"
  />;
  return <Component {...pageProps} />;
}
