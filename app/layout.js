import './globals.css';

export const metadata = {
  title: 'ANPEX | Agência Internacional de Pesquisa Extraterrestre',
  description: 'Site institucional e portal de pesquisa da ANPEX, agência internacional de investigação extraterrestre.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
