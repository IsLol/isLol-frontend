import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultLayout } from '@islol-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <>
      <Script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="anonymous"
      />
      <QueryClientProvider client={queryClient}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </QueryClientProvider>
    </>
  );
}
