"use client";
import { useState } from "react";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000); // ₹25,00,000
  const [years, setYears] = useState(3); // in years
  const [interestRate, setInterestRate] = useState(15); // Annual %

  // Calculate EMI properly
  const months = years * 12;
  const monthlyRate = interestRate / 12 / 100;
  const emi =
    monthlyRate > 0
      ? Math.round(
          (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1)
        )
      : Math.round(loanAmount / months);

  const totalPay = emi * months;

  return (
    <div className="loan-calculator__box max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <form className="loan-calculator__form">
        {/* Loan Amount Slider */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>₹25,00,000</span>
            <span>₹50,00,00,000</span>
          </div>
          <input
            type="range"
            value={loanAmount}
            min="2500000"
            max="500000000"
            step="100000"
            onChange={(e) => setLoanAmount(Number(e.currentTarget.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none
              [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
        </div>

        {/* Years Slider */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>3 years</span>
            <span>15 years</span>
          </div>
          <input
            type="range"
            value={years}
            min="3"
            max="15"
            step="1"
            onChange={(e) => setYears(Number(e.currentTarget.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none
              [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
        </div>

        {/* Interest Rate Slider */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>6%</span>
            <span>24%</span>
          </div>
          <input
            type="range"
            value={interestRate}
            min="6"
            max="24"
            step="1"
            onChange={(e) => setInterestRate(Number(e.currentTarget.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none
              [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
          />
        </div>

        {/* Results */}
        
        <div className="space-y-2 text-gray-700">
          <p className="flex justify-between">
            <span>Amount</span>
            <b>{loanAmount}</b>
          </p>
          <p className="flex justify-between">
            <span>Intrest Rate</span>
            <b>{interestRate} %</b>
          </p>
          <p className="flex justify-between">
            <span>Monthly EMI</span>
            <b>₹{emi.toLocaleString("en-IN")}</b>
          </p>
          
          <p className="flex justify-between">
            <span>Loan Tenure</span>
            <b>{years} Years ({months} Months)</b>
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
