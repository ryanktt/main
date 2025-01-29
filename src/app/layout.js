// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       {/* <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       > */}
//       <body>
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }

//CODE 2
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar"; // ✅ Correct import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> ✅ Navbar is now properly imported */}
        <main>{children}</main>
      </body>
    </html>
  );
}
