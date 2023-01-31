// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props
  const data = vaccinationCoverageDetails
  console.log('data => ', data)
  //   const {vaccinationDate, dose1, dose2} = vaccinationCoverageDetails

  return (
    <div className="vaccination-by-coverage-container">
      <h1 className="vaccination-by-coverage-heading">
        Vaccination by Coverage
      </h1>
      <BarChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="vaccinationDate" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          barSize="20%"
          dataKey="dose1"
          fill=" #2d87bb"
          radius={[5, 5, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          fill="#f54394"
          radius={[4, 4, 0, 0]}
          barSize="20%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
