'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Sidebar from './Sidebar';
import ProjectCard from './ProjectCard';
import KanbanBoard from './KanbanBoard';
import MemberCard from './MemberCard';
import AssetGrid from './AssetGrid';
import ChatLayout from './ChatLayout';

export default function Dashboard(){
  const [summary, setSummary] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    fetch('/api/dashboard')
      .then(r=>r.json())
      .then(setSummary)
      .catch(()=>{});

    fetch('/api/projects')
      .then(r=>r.json())
      .then(setProjects)
      .catch(()=>{});
  },[]);

  return (
    <div className={styles.root}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.kpis}>
          <div className={styles.kpi}><strong>Projetos Ativos</strong><div>{summary?.activeProjects ?? '—'}</div></div>
          <div className={styles.kpi}><strong>Tarefas Pendentes</strong><div>{summary?.pendingTasks ?? '—'}</div></div>
          <div className={styles.kpi}><strong>Membros Online</strong><div>{summary?.membersOnline ?? '—'}</div></div>
        </div>

        <div className={styles.projects}>
          {projects.slice(0,3).map(p=> (
            <ProjectCard key={p.id} title={p.name} progress={Math.floor(Math.random()*90)} leader={p.leaderId} due={p.dueDate} />
          ))}
        </div>

        <h3>Board — Kanban</h3>
        <KanbanBoard />

        <div style={{display:'flex',gap:12}}>
          <div style={{flex:1}}>
            <h4>Equipe</h4>
            <div className={styles.memberList}>
              <MemberCard name="Luan" role="Scripter" skills={["Lua","TS"]} />
              <MemberCard name="Matheus" role="Builder" skills={["C#","Unity"]} />
            </div>
          </div>
          <div style={{flex:1}}>
            <h4>Assets Recentes</h4>
            <AssetGrid />
          </div>
          <div style={{width:360}}>
            <h4>Chat</h4>
            <ChatLayout />
          </div>
        </div>
      </main>
    </div>
  )
}
