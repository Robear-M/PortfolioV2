import { useState } from 'react'
import styles from './App.module.css'
import { Topbar } from './components/Topbar/Topbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Picture } from './components/Picture/Picture'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Project } from './components/Project/Project'
import { Contact } from './components/Contact/Contact'

function App() {
  return (
    <div className={styles.App}>
      <Topbar />
      <Picture />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Sidebar />
    </div>
  )
}

export default App
