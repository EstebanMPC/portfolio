import React, {useEffect, useState } from 'react';
import { Layout } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {Work_Sans} from '@next/font/google'

const worksans= Work_Sans({
  subsets:['latin'],
  weight: ['100','400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <main className="{worksans.className}">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
    
    
        
  ) 
  
}

export default MyApp
