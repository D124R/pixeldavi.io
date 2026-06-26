'use client';

import styles from './styles.module.css';

export default function ProjectCard({title='Projeto Exemplo',progress=42, leader='Líder', due='2026-07-01'}){
  return (
    <div className={styles.projectCard}>
      <h4>{title}</h4>
      <div>Progresso: {progress}%</div>
      <div>Líder: {leader}</div>
      <div>Vence: {due}</div>
    </div>
  )
}
