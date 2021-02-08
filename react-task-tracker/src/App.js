import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  return (
    <div className="container">
        <Header />
        <Tasks />
    </div>
  )
}

export default App



// Class based React

//import React from 'react'
//import Header from './components/Header'
//
//class App extends React.Component {
//    render() {
//        return <h1> Hello from a class </h1>
//    }
//}
//
//
//export default App