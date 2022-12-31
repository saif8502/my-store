import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [darkMode,setDarkMode] = React.useState(false)
  function toggleDarkMode(){
      setDarkMode((prevMode)=>{
          return !prevMode
      })
  }
  return (
    <div className={"layout " + (darkMode? 'dark' : 'white')}>
      <Head>
        <title>myStore</title>
      </Head>
      <header>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout