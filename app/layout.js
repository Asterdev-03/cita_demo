import "@styles/globals.css";

export const metadata = {
  title: "CITA",
  description: "Conversational Interview and Training Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
