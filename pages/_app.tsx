import type { AppProps } from 'next/app';
import type { DefaultSeoProps } from 'next-seo';
import { DefaultSeo } from 'next-seo';
import { useState } from 'react';
import Script from 'next/script';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  dehydrate,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '../styles';

const title = '더와이컨설팅 - The Why Consulting';

const DefaultSEO: DefaultSeoProps = {
  title,
  description:
    '더와이컨설팅은 개인과 조직의 행복한 관계를 꿈꾸는 커뮤니케이션 교육 전문기업입니다.',
  canonical: 'https://thewhy.kr',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://thewhy.kr',
    title,
    siteName: 'The Y Consulting',
    images: [
      {
        url: '/images/main-logo.png',
        width: 285,
        height: 167,
        alt: 'Image',
      },
    ],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const dehydratedState = dehydrate(queryClient);

  return (
    <SessionProvider>
      <DefaultSeo {...DefaultSEO} />
      <Script
        strategy="beforeInteractive"
        src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
      />
      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

      <ToastContainer draggable={false} position="top-center" />
      <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cec30f2d8f996a53cca24b45925dea37&libraries=services" />
    </SessionProvider>
  );
}

export default MyApp;
