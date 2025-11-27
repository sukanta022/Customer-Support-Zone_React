
import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TicketContainer from './Components/TicketContainer'

const ticketPromise = fetch("/ticket.json").then(res => res.json())

function App() {
  
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Suspense fallback="Ticket is loading">
            <TicketContainer ticketPromise={ticketPromise}></TicketContainer>
        </Suspense>
        
      </section>
    </>
  )
}

export default App
