import React from 'react'

/* components */
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Project from './components/Project/Project'

const App = () => {
    return (
        <body>
            <Navbar />
            <Hero />
            <Project />
            <Footer />
        </body>
    )
}

export default App
