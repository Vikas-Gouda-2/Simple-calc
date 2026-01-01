import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const handleClick = (val) => {
    setExpression(expression + val)
    setError('')
  }

  const handleClear = () => {
    setExpression('')
    setResult('')
    setError('')
  }

  const handleBackspace = () => {
    setExpression(expression.slice(0, -1))
    setError('')
  }

  const handleEquals = async () => {
    setError('')
    setResult('')
    try {
      const response = await fetch('http://127.0.0.1:5000/api/calc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression })
      })
      const data = await response.json()
      if (response.ok) {
        setResult(data.result)
      } else {
        setError(data.error || 'Error')
      }
    } catch (err) {
      setError('Server error')
    }
  }

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-pink-100 to-yellow-100">
      <h1 className="font-extrabold text-5xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 drop-shadow-lg animate-pulse">React + Flask Calculator</h1>
      <div className="bg-white/80 rounded-3xl shadow-2xl p-8 w-96 border-4 border-pink-200 backdrop-blur-md">
        <div className="mb-3 text-right text-2xl font-mono min-h-[2.5rem] break-all border-b-2 border-blue-200 pb-3 px-2 bg-blue-50/60 rounded-t-xl shadow-inner">{expression || '0'}</div>
        <div className="mb-3 text-right text-3xl font-extrabold text-green-600 min-h-[2.5rem] px-2 bg-green-50/60 rounded-b-xl shadow-inner">{result !== '' && `= ${result}`}</div>
        {error && <div className="text-red-500 text-right mb-2 font-semibold animate-bounce">{error}</div>}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {buttons.map((btn, idx) =>
            btn === '=' ? (
              <button
                key={idx}
                className="col-span-1 bg-gradient-to-r from-blue-500 to-pink-400 hover:from-pink-400 hover:to-yellow-400 text-white text-2xl font-extrabold py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
                onClick={handleEquals}
              >
                =
              </button>
            ) : (
              <button
                key={idx}
                className="col-span-1 bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-100 hover:from-pink-200 hover:to-blue-200 text-xl font-bold py-3 rounded-xl shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            )
          )}
        </div>
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-pink-400 hover:to-yellow-400 text-white text-xl font-bold py-3 rounded-xl shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300" onClick={handleBackspace}>⌫</button>
          <button className="flex-1 bg-gradient-to-r from-red-400 to-pink-400 hover:from-pink-500 hover:to-yellow-400 text-white text-xl font-bold py-3 rounded-xl shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300" onClick={handleClear}>C</button>
        </div>
      </div>
      <footer className="mt-8 text-gray-500 text-sm opacity-80">Made with <span className="text-pink-400">♥</span> using React, Vite, TailwindCSS & Flask</footer>
    </div>
  )
}

export default App
