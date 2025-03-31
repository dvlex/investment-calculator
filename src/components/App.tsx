import { useState } from 'react'
import InvestmentsTable from './InvestmentsTable'
import InvestmentForm from './InvestmentForm'

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })
  return (
    <div className="">
      <InvestmentForm
        investmentData={investmentData}
        setInvestmentData={setInvestmentData}
      />
      <InvestmentsTable investmentData={investmentData} />
    </div>
  )
}

export default App
