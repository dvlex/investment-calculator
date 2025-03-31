function InvestmentForm({ investmentData, setInvestmentData }) {
  const handleInvestmentChange = (e) => {
    const { name, value } = e.target
    setInvestmentData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value)
    }))
  }

  return (
    <div className="investment-form">
      <h2>Investment Form</h2>
      <form>
        <div>
          <label htmlFor="initialInvestment">Initial Investment:</label>
          <input
            type="number"
            id="initialInvestment"
            name="initialInvestment"
            value={investmentData.initialInvestment}
            onChange={handleInvestmentChange}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment:</label>
          <input
            type="number"
            id="annualInvestment"
            name="annualInvestment"
            value={investmentData.annualInvestment}
            onChange={handleInvestmentChange}
          />
        </div>
        <div>
          <label htmlFor="expectedReturn">Expected Return (%):</label>
          <input
            type="number"
            id="expectedReturn"
            name="expectedReturn"
            value={investmentData.expectedReturn}
            onChange={handleInvestmentChange}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration (years):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={investmentData.duration}
            onChange={handleInvestmentChange}
          />
        </div>
      </form>
    </div>
  )
}

export default InvestmentForm
