'use client';

import styles from './styles.module.css';

export default function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <h3>Menu</h3>
      <nav>
        <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:8}}>
          <li>Dashboard</li>
          <li>Projetos</li>
          <li>Tarefas</li>
          <li>Equipe</li>
          <li>Assets</li>
          <li>Chat</li>
          <li>Relatórios</li>
          <li>Financeiro</li>
        </ul>
      </nav>
    </aside>
  );
}
