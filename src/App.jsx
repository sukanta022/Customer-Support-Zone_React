import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TicketContainer from './Components/TicketContainer'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'
import Loading from './Components/Loading'

const ticketPromise = fetch("/ticket.json").then(res => res.json())

function App() {
  
  return (
    <div className='bg-[#F5F5F5]'>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Suspense fallback={<Loading></Loading>}>
            <TicketContainer ticketPromise={ticketPromise}></TicketContainer>
        </Suspense>
        
      </section>

      <footer className='w-full bg-[#000000] mt-10'>
        <Footer></Footer>
      </footer>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        
      />
    </div>
  )
}

export default App
