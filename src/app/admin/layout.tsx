import { Toaster } from "react-hot-toast"
import { Providers } from "../(app)/providers"

export const metadata = {
  title: 'Estória | Admin',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <header>
        <link rel="shortcut icon" href="../../../../../logo2.png" type="image/x-icon" />
      </header>
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
