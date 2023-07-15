import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { About, Contact, Services, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Services />
              <Tech />
              <Works />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
