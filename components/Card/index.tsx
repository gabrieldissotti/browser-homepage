import React from 'react';


import { faBell, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Card.module.scss'

type Props = {
  isOk?: boolean;
}

const Card: React.FC<Props> = ({
  isOk
}) => (
  <div className={styles.card}>
    <p>Feedbacks não respondidos</p>
    <strong>5</strong>

    

    {
      isOk ? (
        <>
          <span className={styles.isOk}></span>
          <span className={styles.isOk}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </>
      ) : (
        <>
          <span></span>
          <span >
            <FontAwesomeIcon icon={faBell} />
          </span>
        </>
      )
    }
  </div>
)

export default Card;