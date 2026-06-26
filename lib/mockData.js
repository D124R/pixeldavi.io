// Simple in-memory mock data for development/demo purposes
const projects = [
  { id: 'p1', name: 'Jogo A', description: 'Projeto A', leaderId: 'u2', status: 'active', startDate: '2026-05-01', dueDate: '2026-07-20', teamIds: ['u1','u2'] },
  { id: 'p2', name: 'Jogo B', description: 'Projeto B', leaderId: 'u1', status: 'active', startDate: '2026-06-01', dueDate: '2026-09-01', teamIds: ['u3'] }
];

const users = [
  { id: 'u1', name: 'Luan', email: 'luan@example.com', role: 'member', title: 'Scripter', skills: [{name:'Lua',level:'senior'}], availabilityHoursPerWeek: 20 },
  { id: 'u2', name: 'Matheus', email: 'matheus@example.com', role: 'leader', title: 'Builder', skills: [{name:'Unity',level:'senior'}], availabilityHoursPerWeek: 30 },
  { id: 'u3', name: 'Lucky', email: 'lucky@example.com', role: 'member', title: 'UI Designer', skills: [{name:'Figma',level:'mid'}], availabilityHoursPerWeek: 15 }
];

const tasks = [
  { id: 't1', title: 'Design do menu', projectId: 'p1', column: 'todo', assigneeId: 'u3', reporterId: 'u2', estimateHours: 6, spentHours: 0, dueDate: '2026-06-20' },
  { id: 't2', title: 'Criar protótipo', projectId: 'p1', column: 'todo', assigneeId: 'u2', reporterId: 'u1', estimateHours: 12, spentHours: 3, dueDate: '2026-06-22' },
  { id: 't3', title: 'Implementar auth', projectId: 'p2', column: 'in_progress', assigneeId: 'u1', reporterId: 'u2', estimateHours: 8, spentHours: 2, dueDate: '2026-06-18' }
];

export function getSummary(){
  const activeProjects = projects.filter(p=>p.status==='active').length;
  const pendingTasks = tasks.filter(t=>t.column!=='done').length;
  const membersOnline = users.length; // placeholder
  const upcomingDeadlines = tasks.filter(t=>new Date(t.dueDate) >= new Date()).slice(0,5).map(t=>t.dueDate);
  return { activeProjects, pendingTasks, membersOnline, upcomingDeadlines };
}

export function getProjects(){
  return projects;
}

export function getProjectById(id){
  return projects.find(p=>p.id===id);
}

export function createProject(payload){
  const id = 'p'+(projects.length+1);
  const project = { id, ...payload };
  projects.push(project);
  return project;
}

export function getTasksByProject(projectId){
  return tasks.filter(t=>t.projectId===projectId);
}

export function createTask(payload){
  const id = 't'+(tasks.length+1);
  const task = { id, ...payload };
  tasks.push(task);
  return task;
}

export function suggestMembers({role, limit=3}){
  // simple heuristic: match by title or skill name
  const score = users.map(u=>{
    let s = 0;
    if(u.title && u.title.toLowerCase().includes(role.toLowerCase())) s+=50;
    if(u.skills && u.skills.some(sk=>sk.name.toLowerCase().includes(role.toLowerCase()))) s+=30;
    s += Math.max(0, 20 - (u.availabilityHoursPerWeek||0));
    return { userId: u.id, score: s, reasons: ['heuristic match'] };
  });
  score.sort((a,b)=>b.score-a.score);
  return score.slice(0,limit);
}

export { users, tasks, projects };
