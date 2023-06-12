import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from './components/components';


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Navbar />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Hero />
          </ErrorBoundary>
        </div>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <About />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Experience />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Tech />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Works />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Feedbacks />
        </ErrorBoundary>
        <div className='relative z-0'>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Contact />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <StarsCanvas />
          </ErrorBoundary>
        </div>

      </div>
    </BrowserRouter>

  )
}

export default App
