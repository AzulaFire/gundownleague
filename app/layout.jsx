import { Roboto } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'GunDown League - Fast-Paced Action & Sports Gameplay',
  description:
    'Experience the thrill of Ultimate Sports FPS, the fast-paced game that combines intense first-person shooter action with exciting sports gameplay. Join the action now!',
  keywords: [
    'GunDown League',
    'GDL',
    'FPS game',
    'sports video game',
    'first-person shooter',
    'action sports game',
    'multiplayer FPS',
    'competitive gaming',
    'eSports',
    'online gaming',
    'Ultimate Sports FPS',
  ],
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
