import React from 'react';
import Image from 'next/image'

import NuCalcLogo from '../../resources/nucalc-logo-512x512.png'
import styles from './Product.module.scss'

const Product: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src={NuCalcLogo} alt="NuCalc" className={styles.image} />

      <div>
        <p>NuCalc (v)</p>

        <a href="http://google.com">nucalc.vercel.app</a>
      </div>
    </div>
  );
}

export default Product;