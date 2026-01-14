"use client";
import React from 'react'
import './globals.css'
import AppProviders from '@/src/providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <div className="min-h-screen flex">
            <aside className="w-64 bg-gray-50 p-4">Sidebar</aside>
            <main className="flex-1 p-6">{children}</main>
          </div>
        </AppProviders>
      </body>
    </html>
  )
}
