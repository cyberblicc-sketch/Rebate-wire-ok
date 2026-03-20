import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RebateWire – Oklahoma HVAC Rebate Manager',
  description: 'Rebates made simple for Oklahoma HVAC contractors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
