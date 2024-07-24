/*En el root layout cualquier interfaz de usuario que se añada al layout raiz se compartira en todas las paginas de la aplicación.
Se puede usar el root layout para modificar las etiquetas <html> y <body> y añadir metadatos.*/
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
