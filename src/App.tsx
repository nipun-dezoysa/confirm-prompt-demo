import './App.css'
import { showConfirm } from 'react-confirm-prompt'

function App() {

  return (
    <>
    <button onClick={() => showConfirm('Are you sure?')}/>
    </>
  )
}

export default App