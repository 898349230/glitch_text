export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Glitch Text Generator</title>
        <meta name="description" content="Glitch Text Generate" />
      </head>
      <body className="vsc-initialized">{children}</body>
    </html>
  )
}