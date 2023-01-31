// Write your code here
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationCoverageDetails} = props
  return (
    <div className="vaccination-age-cont">
      <h1 className="heading">Vaccination By Age</h1>
      <PieChart width={940} height={300}>
        <Pie
          dataKey="count"
          data={vaccinationCoverageDetails}
          cx="50%"
          cy="30%"
          outerRadius={80}
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>
        <Tooltip />
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
