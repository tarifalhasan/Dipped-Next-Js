
import { Footer, Navbar } from "./component/index"
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className='max-w-[1440px] mx-auto'>
         <Navbar/>
           <section >
              {children}  
          </section>
          <Footer/>
        </main>
        </body>
    </html>
  )
}
