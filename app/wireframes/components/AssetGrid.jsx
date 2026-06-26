'use client';

import styles from './styles.module.css';

export default function AssetGrid(){
  return (
    <div className={styles.assetGrid}>
      <div className={styles.asset}>Logo.png</div>
      <div className={styles.asset}>IconSet.zip</div>
      <div className={styles.asset}>Model.fbx</div>
    </div>
  )
}
