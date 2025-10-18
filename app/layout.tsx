import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Prompt Gallery",
  description: "Библиотека промптов с примерами изображений",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="p-6 shadow-sm bg-white sticky top-0 z-50">
          <h1 className="text-2xl font-bold">🎨 Prompt Gallery</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
