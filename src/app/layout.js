import "./globals.css";

export const metadata = {
  title: "PDV | Chiang Mai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel = "icon" href = "/logo.png"/>
        <link rel = "preconnect" href = "https://fonts.googleapis.com"/>
        <link rel = "preconnect" href = "https://fonts.gstatic.com" crossOrigin = "true"/>
        <link href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap" rel = "stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className = "antialiased">
        {children}
      </body>
    </html>
  );
}
