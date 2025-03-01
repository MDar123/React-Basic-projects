/* eslint-disable no-unused-vars */
"use client"

import { useState } from "react"

function InputBox({
  label,
  currencyArr,
  onAmountChange,
  onCurrencyChange,
  disableInputBox,
  amountReceived,
  selectCurrency = "usd",
}) {
  const [amount, setAmount] = useState(0)

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-1">
          <label htmlFor="amount" className="block text-white text-sm font-medium mb-2">
            {label}
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Amount"
            value={amountReceived}
            disabled={disableInputBox}
            onChange={(e) => {
              setAmount(e.target.value)
              onAmountChange(e.target.value)
            }}
            className={`w-full bg-white/20 text-white border border-white/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-white/50 transition-all ${disableInputBox ? "opacity-80 cursor-not-allowed" : "hover:bg-white/30"}`}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="currency-type" className="block text-white text-sm font-medium mb-2">
            Currency Type
          </label>
          <select
            name="currency"
            id="currency-type"
            onChange={(e) => onCurrencyChange(e.target.value)}
            value={selectCurrency}
            className="w-full bg-white/20 text-white border border-white/30 rounded-lg px-4 py-2.5 outline-none cursor-pointer focus:ring-2 focus:ring-white/50 transition-all hover:bg-white/30 appearance-none"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
            }}
          >
            {currencyArr && Object.keys(currencyArr).length > 0 ? (
              Object.keys(currencyArr).map((value) => (
                <option key={value} value={value} className="bg-blue-600 text-white">
                  {value.toUpperCase()}
                </option>
              ))
            ) : (
              <option value="Loading..." className="bg-blue-600 text-white">
                Loading...
              </option>
            )}
          </select>
        </div>
      </div>
    </div>
  )
}

export default InputBox

