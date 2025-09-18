import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div className="min-h-screen w-full relative bg-black">
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",}}/>
        {
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <MainContent />
            <Footer />
          </div>
        }
      </div>
    </>
  )
}

export default App
