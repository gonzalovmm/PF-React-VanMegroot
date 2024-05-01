import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { BrowserRouter} from 'react-router-dom'
import './App.css'
function App() {
  return (
   <BrowserRouter>

    <Header></Header>
    <Main></Main>
    <Footer></Footer>

    </BrowserRouter>
  )
}


export default App
