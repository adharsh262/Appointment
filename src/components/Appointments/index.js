// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const initalAppointmentList = [
  {
    id: uuidv4(),
    title: 'To Visit the Doctor',
    date: '12/08/2024',
    isStarred: false,
  },
  {
    id: uuidv4(),
    title: 'To Visit the Profissor',
    date: '22/06/2024',
    isStarred: true,
  },
]

class Appointments extends Component {
  state = {
    title: '',
    dateTime: '',
    isListFiltered: true,
    appointmentList: initalAppointmentList,
  }

  onSubmitAppointment = event => {
    event.preventDefault()
    const {title, dateTime} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date: dateTime,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      dateTime: '',
    }))
  }

  onChangingTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangingDate = event => {
    this.setState({dateTime: event.target.value})
  }

  isStarButtonClicked = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onClickStartFilter = () => {
    const {appointmentList, isListFiltered} = this.state

    let filteredAppointment

    if (isListFiltered === true) {
      filteredAppointment = appointmentList.filter(
        eachAppointment => eachAppointment.isStarred === isListFiltered,
      )
    } else {
      filteredAppointment = appointmentList.filter(
        eachAppointment => eachAppointment,
      )
    }
    this.setState({
      appointmentList: filteredAppointment,
      isListFiltered: !isListFiltered,
    })
  }

  render() {
    const {title, dateTime, appointmentList, isListFiltered} = this.state

    const changeStyleofButton = isListFiltered ? '' : 'applyStyles'

    return (
      <div className="bgContainer">
        <div className="bgCont">
          <div className="totalFormContainer">
            <form onSubmit={this.onSubmitAppointment} className="formEl">
              <h1 className="heading">Add Appointment</h1>
              <div className="labelContainer">
                <lable className="labelEL">TITLE</lable>
                <input
                  type="text"
                  placeholder="Title"
                  className="inputEl"
                  onChange={this.onChangingTitle}
                  value={title}
                />
              </div>
              <div className="labelContainer">
                <lable className="labelEL">DATE</lable>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="inputEl"
                  onChange={this.onChangingDate}
                  value={dateTime}
                />
              </div>
              <button type="submit" className="btnEl">
                Add
              </button>
            </form>

            <div className="imgContaoner">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="imgMainHead"
              />
            </div>
          </div>
          <hr className="seperator" />
          <div className="headingContainer">
            <h1 className="heading">Appointments</h1>
            <button
              type="button"
              className={`starredBtn ${changeStyleofButton}`}
              onClick={this.onClickStartFilter}
            >
              Starred
            </button>
          </div>
          <ul className="unorderListContainer">
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                eachAppointment={eachAppointment}
                isStarButtonClicked={this.isStarButtonClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
