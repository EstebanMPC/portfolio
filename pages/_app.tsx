import React, {useEffect, useState } from 'react';
import { Layout } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {Roboto} from '@next/font/google'

const roboto= Roboto({
  subsets:['latin'],
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <main className="{roboto.className}">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
    
    
        
  ) 
  
}

export default MyApp
