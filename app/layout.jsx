import { Inter } from "next/font/google";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.scss";
import Navbar from "./(Components)/navbar/Navbar";
import Footer from "./(Components)/footer/Footer";
import Sidebar from "./(Components)/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-vh-100 ${inter.className} d-flex flex-column`}>
        <Navbar></Navbar>
        <main className=" container-sm mx-auto space">
          <div className="row g-4">
            <div className="col-lg-8">{children}</div>
            <div className="col-lg-4 pt-5">
              <Sidebar></Sidebar>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
