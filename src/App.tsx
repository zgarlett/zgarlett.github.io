import './App.css'
import Header from './pages/Header'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import WorkExperience from './pages/WorkExperience'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Projects />
        <Resume />
        <WorkExperience />
      </main>
    </>
  )
}

export default App
