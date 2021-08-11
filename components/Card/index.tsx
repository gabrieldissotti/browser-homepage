import React from 'react';


import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Card.module.scss'

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <p>Feedbacks não respondidos</p>
      <strong>5</strong>

      <span></span>

      <span>
        <FontAwesomeIcon icon={faBell} />
      </span>
    </div>
  )
}

export default Card;