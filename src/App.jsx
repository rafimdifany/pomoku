import Navbar from './component/Navbar'
import ProgressBar from './component/ProgressBar'
import Timer from './component/Timer'
import Todo from './component/Todo'



function App() {
  return (
    <div className='max-w-[620px] py-6 px-6 m-auto'>
      <Navbar />
      <ProgressBar />
      <Timer />
      <Todo />
    </div>
  )
}

export default App
