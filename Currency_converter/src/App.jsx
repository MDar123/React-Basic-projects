"use client"

import { useState, useEffect } from "react"
import InputBox from "./components/InputBox"

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [currency, setCurrency] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  function convert(e) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setConvertedAmount(amount * currency[from][to])
      setIsLoading(false)
    }, 500)
  }

  function useCurrency(from) {
    useEffect(() => {
      const fetchCurrency = async () => {
        try {
          const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
          const response = await fetch(url)
          const data = await response.json()
          setCurrency(data)
        } catch (error) {
          console.error("Failed to fetch currency data:", error)
        }
      }

      fetchCurrency()
    }, [from])
    return currency
  }

  const response = useCurrency(from)

  function swap() {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 p-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/20 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <circle cx="12" cy="12" r="8" />
              <line x1="3" y1="3" x2="6" y2="6" />
              <line x1="21" y1="3" x2="18" y2="6" />
              <line x1="3" y1="21" x2="6" y2="18" />
              <line x1="21" y1="21" x2="18" y2="18" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white text-center ml-3 tracking-wide">Currency Converter</h1>
        </div>

        <form onSubmit={convert} className="space-y-6">
          <InputBox
            label="From"
            amountReceived={amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(value) => setFrom(value)}
            currencyArr={response[from]}
            selectCurrency={from}
          />

          <div className="flex justify-center">
            <button
              type="button"
              className="bg-white/20 text-white p-3 rounded-full transition transform hover:scale-110 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={swap}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 10v12" />
                <path d="M11 14v8" />
                <path d="M11 2v8" />
                <path d="m3 6 4 4 4-4" />
                <path d="m17 6 4 4 4-4" />
              </svg>
            </button>
          </div>

          <InputBox
            label="To"
            disableInputBox={true}
            onCurrencyChange={(value) => setTo(value)}
            amountReceived={convertedAmount}
            currencyArr={response[from]}
            selectCurrency={to}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-white text-indigo-700 py-3 px-4 rounded-lg shadow-lg font-medium transition transform hover:scale-105 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isLoading ? "opacity-70 cursor-wait" : ""}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Converting...
              </span>
            ) : (
              `Convert ${from.toUpperCase()} to ${to.toUpperCase()}`
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-white/70 text-sm">
          <p>Exchange rates updated in real-time</p>
        </div>
      </div>
    </div>
  )
}

export default App

