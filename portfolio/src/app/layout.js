import './globals.css'

export const metadata = {
  title: 'Rayan Aghmer Portfolio',
  description: 'Portfolio van Rayan Aghmer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
