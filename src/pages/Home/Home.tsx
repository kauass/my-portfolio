import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "../../components/NavBar/NavBar"
import Hero from "./Hero/Hero"
import Projects from './Projects'
import Skills from './Skills'


const Home = () => {
  return (
    <> 
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      </Router>
    </>
  )
}
export default Home
