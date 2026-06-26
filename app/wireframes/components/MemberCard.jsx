'use client';

import styles from './styles.module.css';

export default function MemberCard({name='Membro',role='Scripter',skills=['Lua','JS']}){
  return (
    <div className={styles.member}>
      <div style={{width:40,height:40,borderRadius:20,background:'#d1d5db'}} />
      <div>
        <strong>{name}</strong>
        <div style={{fontSize:12,color:'#555'}}>{role} • {skills.join(', ')}</div>
      </div>
    </div>
  )
}
