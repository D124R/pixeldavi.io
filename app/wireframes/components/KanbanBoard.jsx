'use client';

import styles from './styles.module.css';
import TaskCard from './TaskCard';

export default function KanbanBoard(){
  return (
    <div className={styles.board}>
      <div className={styles.column}>
        <h4>A Fazer</h4>
        <TaskCard title="Design do menu" assignee="Lucky" due="2026-06-20" />
        <TaskCard title="Criar protótipo" assignee="Matheus" due="2026-06-22" />
      </div>
      <div className={styles.column}>
        <h4>Em Andamento</h4>
        <TaskCard title="Implementar auth" assignee="Luan" due="2026-06-18" />
      </div>
      <div className={styles.column}>
        <h4>Revisão</h4>
        <TaskCard title="Revisar assets" assignee="Lucky" due="2026-06-17" />
      </div>
      <div className={styles.column}>
        <h4>Concluído</h4>
        <TaskCard title="Config CI" assignee="Matheus" due="2026-06-10" />
      </div>
    </div>
  )
}
