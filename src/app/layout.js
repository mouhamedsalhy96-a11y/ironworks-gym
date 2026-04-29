import './globals.css';

export const metadata = {
  title: 'Ironworks Gym',
  description: 'Build your legacy at Ironworks Gym in Dalton-in-Furness.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}