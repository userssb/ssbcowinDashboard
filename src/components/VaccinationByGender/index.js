// Write your code here
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationCoverageDetails} = props
  console.log('data=+>', vaccinationCoverageDetails)
  return (
    <div className="vaccination-gender-cont">
      <h1 className="heading">Vaccination By Gender</h1>
      <PieChart width={940} height={300}>
        <Pie
          dataKey="count"
          isAnimationActive={false}
          data={vaccinationCoverageDetails}
          cx="50%"
          cy="60%"
          innerRadius={30}
          outerRadius={60}
          startAngle={0}
          endAngle={180}
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Tooltip />
        <Legend
          iconType="square"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByGender
