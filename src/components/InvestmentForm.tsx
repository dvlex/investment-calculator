import './InvestmentForm.css'

function InvestmentForm({ investmentData, setInvestmentData }) {
  const handleInvestmentChange = (e) => {
    const { name, value } = e.target
    setInvestmentData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value)
    }))
  }

  return (
    <div className="form">
      <div className="form-element">
        <label htmlFor="initialInvestment">Initial Investment:</label>
        <input
          type="number"
          id="initialInvestment"
          name="initialInvestment"
          value={investmentData.initialInvestment}
          onChange={handleInvestmentChange}
        />
      </div>
      <div className="form-element">
        <label htmlFor="annualInvestment">Annual Investment:</label>
        <input
          type="number"
          id="annualInvestment"
          name="annualInvestment"
          value={investmentData.annualInvestment}
          onChange={handleInvestmentChange}
        />
      </div>
      <div className="form-element">
        <label htmlFor="expectedReturn">Expected Return (%):</label>
        <input
          type="number"
          id="expectedReturn"
          name="expectedReturn"
          value={investmentData.expectedReturn}
          onChange={handleInvestmentChange}
        />
      </div>
      <div className="form-element">
        <label htmlFor="duration">Duration (years):</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={investmentData.duration}
          onChange={handleInvestmentChange}
        />
      </div>
    </div>
  )
}

export default InvestmentForm
