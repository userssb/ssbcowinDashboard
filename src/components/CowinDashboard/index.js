import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    vaccinationData: {},
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    // const {vaccinationData, apiStatus} = this.state
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)

    // console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(each => ({
          vaccinationDate: each.vaccine_date,
          dose1: each.dose_1,
          dose2: each.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age.map(each => ({
          age: each.age,
          count: each.count,
        })),
        vaccinationByGender: data.vaccination_by_gender.map(each => ({
          count: each.count,
          gender: each.gender,
        })),
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        vaccinationData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVaccinationStats = () => {
    const {vaccinationData} = this.state
    // console.log(vaccinationData)
    return (
      <>
        <VaccinationCoverage
          vaccinationCoverageDetails={vaccinationData.last7DaysVaccination}
        />
        <VaccinationByGender
          vaccinationCoverageDetails={vaccinationData.vaccinationByGender}
        />
        <VaccinationByAge
          vaccinationCoverageDetails={vaccinationData.vaccinationByAge}
        />
      </>
    )
  }

  renderByViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVaccinationStats
      case apiStatusConstants.failure:
        return null
      case apiStatusConstants.inProgress:
        return null
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-cont">
        <div className="app-cont">
          <div className="logo-head-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="website-logo"
            />
            <h1 className="logo-head">Co-Win</h1>
          </div>
          <h1 className="title-name">CoWIN Vaccination In India</h1>
          <div className="chart-cont">{this.renderVaccinationStats()}</div>
        </div>
      </div>
    )
  }
}
export default CowinDashboard
