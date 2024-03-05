// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, isStarButtonClicked} = props

  const {id, title, date, isStarred} = eachAppointment

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const isButtonClicked = () => {
    isStarButtonClicked(id)
  }

  return (
    <li className="listItem">
      <div className="titleContainer">
        <h1 className="titleHeading">{title}</h1>

        <button
          type="button"
          className="starButtonEL"
          onClick={isButtonClicked}
          data-testid="star"
        >
          <img src={starImgUrl} alt="star" className="" />
        </button>
      </div>
      <p className="dateString">
        Date:
        {date}
      </p>
    </li>
  )
}

export default AppointmentItem
