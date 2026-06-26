# Portfólio Profissional - Template Moderno

Um template de portfólio moderno e responsivo inspirado no design do Pixelrogue, perfeito para desenvolvedores e profissionais de tech.

## 🎨 Features

✅ **Design Moderno** - Estilo contemporâneo com gradientes e animações  
✅ **Totalmente Responsivo** - Funciona perfeito em desktop, tablet e mobile  
✅ **Animações Suaves** - Transições e efeitos visuais elegantes  
✅ **Seções Completas** - Hero, About, Skills, Projects, Contact  
✅ **Fácil Personalização** - Altere cores, textos e conteúdo facilmente  
✅ **Performance** - Código otimizado e carregamento rápido  

## 📁 Estrutura de Arquivos

```
portfolio/
├── index.html      # Arquivo principal HTML
├── styles.css      # Estilos CSS
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### 1. Clonar ou Baixar
```bash
cd portfolio
```

### 2. Abrir Localmente
Simplesmente abra o arquivo `index.html` em seu navegador, ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com Live Server no VS Code
```

## ✏️ Personalização

### 1. Alterar Cores
Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-color: #00d4ff;      /* Cor principal (azul ciano) */
    --secondary-color: #ff006e;    /* Cor secundária (rosa) */
    --dark-bg: #0a0e27;            /* Background escuro */
}
```

### 2. Adicionar seu Conteúdo
Em `index.html`, altere:

- **Nome e Descrição** - Section Hero
- **Sobre você** - Section About
- **Skills** - Section Skills (altere as barras de progresso)
- **Seus Projetos** - Section Projects
- **Informações de Contato** - Section Contact

### 3. Adicionar Projetos
No HTML, duplica o `.project-card` e altere:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">NOME DO PROJETO</div>
    </div>
    <div class="project-info">
        <h3>Título do Projeto</h3>
        <p>Descrição do projeto...</p>
        <div class="project-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
        <a href="seu-link" class="project-link">Ver Projeto →</a>
    </div>
</div>
```

### 4. Integrar Formulário de Contato
Para realmente enviar emails, você pode usar serviços como:
- **Formspree** - Simples e grátis
- **EmailJS** - Sem backend necessário
- **Sendgrid** - Para soluções empresariais

Exemplo com Formspree:
```html
<form action="https://formspree.io/f/seu-id" method="POST">
    <!-- seus campos -->
</form>
```

## 🎯 Seções Disponíveis

### Hero
- Headline impactante
- Descrição profissional
- CTAs (Call-to-action)
- Skills badges

### About
- Biografia profissional
- Lista de competências
- Estatísticas (projetos, experiência, etc)

### Skills
- Categorias de habilidades (Frontend, Backend, Tools)
- Barras de progresso animadas
- Tecnologias específicas

### Projects
- Cards de projetos com imagem
- Descrição e tecnologias usadas
- Links para ver o projeto

### Contact
- Formulário de contato
- Informações de contato (email, telefone)
- Links para redes sociais

## 🎨 Temas Pré-definidos

Você pode mudar o tema alterando as cores raiz. Alguns exemplos:

### Tema Verde (Natural)
```css
--primary-color: #00d084;
--secondary-color: #29b369;
```

### Tema Roxo (Modern)
```css
--primary-color: #9945ff;
--secondary-color: #ff0080;
```

### Tema Laranja (Quente)
```css
--primary-color: #ff6b35;
--secondary-color: #f7931e;
```

## 📱 Responsividade

O template é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px
- **Tablet**: 768px
- **Mobile**: 480px

## ⚡ Performance

- Otimizado para Web Vitals
- Sem dependências externas (apenas HTML, CSS, JS puro)
- ~50KB total (não comprimido)
- Carregamento rápido

## 🔧 Troubleshooting

### Menu mobile não funciona
- Verifique se `script.js` está carregado
- Abra o console do navegador (F12) para erros

### Estilos não aparecem
- Limpe o cache (Ctrl + F5)
- Verifique os caminhos dos arquivos

### Animações lentas
- Diminua os valores em `--transition` em CSS
- Reduza o número de animações simultâneas

## 📦 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Add portfolio"
git push
```

Ative GitHub Pages nas configurações do repositório.

### Netlify
```bash
# Conecte seu repositório do GitHub
# Netlify detectará e publicará automaticamente
```

### Vercel
```bash
npm i -g vercel
vercel
```

### Traditional Hosting
Faça upload dos arquivos via FTP para seu servidor.

## 📝 License

Este template é livre para usar, modificar e distribuir.

## 🤝 Contribuições

Melhorias são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas features
- Enviar pull requests

---

**Desenvolvido com ❤️ - Pronto para sua carreira**
