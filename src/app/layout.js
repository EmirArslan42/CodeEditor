import "./globals.css";

export const metadata = {
  title: "Code Editor",
  description: "This is a Code Editor web app",
  icons:"/Icons/code-editor-logo.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
