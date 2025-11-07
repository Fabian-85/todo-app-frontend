import React from 'react'
import './App.css'
import BoardColumn from './components/BoardColumn/BoardColumn'

function App() {



  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <BoardColumn title="TO DO"/>
        <BoardColumn title="IN PROGRESS"/>
        <BoardColumn title="REVIEW"/>
        <BoardColumn title="DONE"/>
      </div>
    </div>
  )
}

export default App
