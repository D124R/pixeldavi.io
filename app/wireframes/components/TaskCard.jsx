'use client';

import styles from './styles.module.css';

export default function TaskCard({title='Nova tarefa',assignee='—',due='—'}){
  return (
    <div className={styles.task}>
      <strong>{title}</strong>
      <div style={{fontSize:12,color:'#666'}}>{assignee} • {due}</div>
    </div>
  )
}
