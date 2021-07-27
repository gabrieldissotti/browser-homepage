import React from 'react';

import { faMedapps } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Menu.module.scss'

const Menu: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <button type="button" className={styles.activeItem}>
        <FontAwesomeIcon icon={faMedapps} />
        <span>produtos</span>
      </button>
      <button type="button" className={styles.activeItem}>
        <FontAwesomeIcon icon={faMailBulk}  />
        <span>contas</span>
      </button>
      
    </nav>
  )
}

export default Menu;