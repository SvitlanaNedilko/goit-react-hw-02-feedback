import React from 'react'
import PropTypes from 'prop-types'

import './Notification.scss'

const Notification = ({ message }) => {
  return <p className="Notification">{message}</p>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification
