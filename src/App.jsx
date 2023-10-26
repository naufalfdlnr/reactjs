import { useState } from 'react'
import Modal from './modal';
import './App.css'
import './global.css'
import sopwerLogo from './assets/sopwer.png'
import love from './assets/love.png'
import search from './assets/search.png'
import filter from './assets/filter.png'
import menu from './assets/menu.png'
import notify from './assets/notify.png'



export default function App() {

  return(
    <>

      <Header />

    </>
  );
}

function Header() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <header className='header'>
        
        <div className='header1'>
          <button className='modalBtn' onClick={() => setOpenModal(true)}>
            <img src={menu} alt=""  className='logo'/>
          </button>
          <img src={sopwerLogo} alt="sopwer-logo" className='logo'/>
        </div>

        <div className="header2">
          <button className='loveButton'>
            <img src={love} alt=""  className='logo'/>
          </button>
          <button>
            <img src={notify} alt=""  className='logo'/>
          </button>
        </div>

      </header>

      <Modal open={openModal} onClose={() => setOpenModal(false)} />

    </>
    
  );
}

function Main() {

  return (
    <>
      
    </>
  )
}
