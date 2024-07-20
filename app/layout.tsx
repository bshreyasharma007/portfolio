import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import ClientOnly from "./components/ClientOnly"

const font = Poppins({ subsets: ["latin"], weight: "600" })

export const metadata: Metadata = {
  title: "Shreya Sharma",
  description: "Lets build and iterate towards best!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ClientOnly>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  )
}
