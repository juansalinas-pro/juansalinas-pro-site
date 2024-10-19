import Footer from '../components/Footer'
import Header from '../components/Header'
import Testimonials from '../components/Testimonials';

export default function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <Header /> 
      <Testimonials />
      <Footer/>    
      </body>
    </html>
  )
}