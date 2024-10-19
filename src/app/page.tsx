import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'


export default function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <Header /> 
      <Home />
      <Footer/>    
      </body>
    </html>
  )
}