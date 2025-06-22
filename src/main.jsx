import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AppContextProvider } from './store/appContext'
import './index.css'
import { Toaster } from 'react-hot-toast'
import Canvas from './pages/Canvas'
import AddCoursePage from './pages/AddCoursePage'
import ViewCourse from './pages/ViewCourse'

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <div style={{height: '100vh', width: '100vw'}} className='container-fluid overflow-y-scroll'>
       <Navbar />
       <HomePage />
        <AddCoursePage />  
        <ViewCourse />
        <Canvas />
        <Footer />
       <Toaster/>
    </div>
  </AppContextProvider>,
)
