'use client';

import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

export default function ChatLayout(){
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const wsRef = useRef(null);
  const authorId = 'u1';

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:4000');
    wsRef.current = ws;
    ws.addEventListener('message', (ev)=>{
      try{
        const data = JSON.parse(ev.data);
        if(data.type === 'message'){
          setMessages(prev=>[...prev,{authorId: data.authorId, text: data.text, createdAt: data.createdAt}]);
        }
      }catch(e){}
    });
    return ()=> ws.close();
  },[]);

  function send(){
    if(!text) return;
    const payload = { type: 'message', authorId, text };
    wsRef.current?.send(JSON.stringify(payload));
    setText('');
  }

  return (
    <div className={styles.chat}>
      <div style={{fontWeight:600,marginBottom:8}}>Chat do Projeto</div>
      <div className={styles.chatMessages}>
        {messages.map((m, i)=> (
          <div key={i} style={{marginBottom:8}}><strong>{m.authorId}:</strong> {m.text}</div>
        ))}
      </div>
      <div className={styles.chatInput}>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Escreva uma mensagem..." style={{flex:1,padding:8,borderRadius:6,border:'1px solid #e5e7eb'}} />
        <button onClick={send} className="btn">Enviar</button>
      </div>
    </div>
  )
}
