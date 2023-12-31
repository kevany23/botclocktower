/**
 * Root layout as the basis for generating other web pages and for routing
 */

import React from "react";
import ReactDOM from "react-dom/client";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from './provider'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Botclocktower',
  description: 'Play Blood on the Clocktower',
  icons: {
    icon: "/Icon_ravenkeeper.png"
  }
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ReduxProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
        </html>
      </ReduxProvider>
    </>
  )
}

export default RootLayout;
