
import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TicketContainer from './Components/TicketContainer'
import Footer from './Components/Footer'

const ticketPromise = fetch("/ticket.json").then(res => res.json())

function App() {
  
  return (
    <div className='bg-[#F5F5F5]'>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Suspense fallback="Ticket is loading">
            <TicketContainer ticketPromise={ticketPromise}></TicketContainer>
        </Suspense>
        
      </section>

      <footer className='w-full bg-[#000000] mt-10'>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
