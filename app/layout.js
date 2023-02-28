import "./globals.css";
import { Montserrat } from "@next/font/google";
import FilterGenre from "@/components/filter/genreList";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body className={`${montserrat.className} px-4 lg:px-12  bg-gray-900 h-full   `}>
        <nav className="sticky  top-0 z-50 bg-slate-800 rounded-b-3xl px-4  py-4 w-full  ">
          <FilterGenre />
        </nav>
        {children}{" "}
      </body>
    </html>
  );
}
