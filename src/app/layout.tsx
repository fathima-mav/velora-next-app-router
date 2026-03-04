"use client"

import { useState, useEffect } from "react"
import type { ReactNode } from "react"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"
import LoadingScreen from "@/components/LoadingScreen"
import CartDrawer from "@/components/CartDrawer"
import { SearchProvider } from "@/context/SearchContext"

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <body className="bg-[#F7E7CE] text-[#3E2C23]">
        {loading && <LoadingScreen />}

        {!loading && (
          <CartProvider>
            <SearchProvider>
              <Navbar />
              <CartDrawer />
              <main className="min-h-screen">{children}</main>
            </SearchProvider>
            <Footer />
          </CartProvider>
        )}
      </body>
    </html>
  )
}