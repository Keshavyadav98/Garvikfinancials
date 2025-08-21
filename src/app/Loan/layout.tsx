"use client";
import { useEffect, useState } from "react";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000); // default ₹1L
  const [months, setMonths] = useState(1); // start with 1 month
  const interestRate = 15; // %

  // Calculate monthly payment safely
  const monthlyPay =
    months > 0
      ? Math.round((loanAmount * (1 + interestRate / 100)) / months)
      : 0;

  const totalPay = monthlyPay * months;

  return (
    <div className="loan-calculator__box max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <form className="loan-calculator__form">
        {/* Loan Amount Slider */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>₹1,00,000</span>
            <span>₹40,00,000</span>
          </div>
          <input
            type="range"
            value={loanAmount}
            min="100000"
            max="4000000"
            step="100000"
            onChange={(e) => setLoanAmount(Number(e.currentTarget.value))}
            className="appearance-none w-full h-2 bg-gray-200 rounded-lg
              [&::-webkit-slider-runnable-track]:rounded-full
              [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          />
        </div>

        {/* Months Slider */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>1 Month</span>
            <span>12 Months</span>
          </div>
          <input
            type="range"
            id="range-slider-month"
            value={months}
            min="1"
            max="12"
            step="1"
            onChange={(e) => setMonths(Number(e.currentTarget.value))}
            className="appearance-none w-full h-2 bg-gray-200 rounded-lg
              [&::-webkit-slider-runnable-track]:rounded-full
              [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          />
        </div>

        {/* Results */}
        <div className="space-y-2 text-gray-700">
          <p className="flex justify-between">
            <span>Pay Monthly</span>
            <b>₹{monthlyPay.toLocaleString("en-IN")}</b>
          </p>
          <p className="flex justify-between">
            <span>Term of Use</span>
            <b>{months} Months</b>
          </p>
          <p className="flex justify-between">
            <span>Total Pay Back</span>
            <b>₹{totalPay.toLocaleString("en-IN")}</b>
          </p>
        </div>

        {/* Apply Button */}
        <a
          href="/apply-now"
          className="block mt-6 text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
        >
          Apply For Loan
        </a>

        <div className="loan-calculator__form__terms mt-3 text-xs text-gray-500">
          {'*These calculators are provided only as general self-help Planning Tools. Results depend on other factors.'}
        </div>
      </form>
    </div>
  );
}
