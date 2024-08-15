'use client'

import { ThemeProvider } from 'next-themes'
import CartProvider from '@/lib/context/CartProvider'
import ShoppingCart from '@/components/ShoppingCart'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <CartProvider>
        <ShoppingCart />
        {children}
      </CartProvider>
    </ThemeProvider>
  )
}

export default Providers;
