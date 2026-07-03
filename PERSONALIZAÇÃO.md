# 🎯 Guia Rápido de Personalização

## Passo 1: Informações Básicas

**Arquivo:** `index.html`

### Alterar seu nome e profissão
Procure pela linha da Hero Section (~linha 20):
```html
<h1>BUILD YOUR <span class="highlight">FUTURE</span></h1>
```
Mude conforme desejado.

### Sua descrição profissional
```html
<p>Desenvolvedor Full Stack criando soluções web modernas, escaláveis e inovadoras. Transformando ideias em código de qualidade.</p>
```

### Alterar email e telefone
Procure na seção Contact (~linha 280):
```html
<a href="mailto:seu.email@gmail.com">seu.email@gmail.com</a>
<a href="tel:+5511999999999">+55 (11) 99999-9999</a>
```

---

## Passo 2: Sobre Você (About Section)

Altere o texto em (~linha 96):
```html
<p>Sou um desenvolvedor Full Stack apaixonado por criar experiências web incríveis. 
Com <span class="highlight">X anos</span> de experiência...</p>
```

### Adicionar seus números:
Em (~linha 110):
```html
<div class="stat-card">
    <div class="stat-number">15+</div>
    <div class="stat-label">Projetos Concluídos</div>
</div>
```

---

## Passo 3: Suas Skills

**Arquivo:** `index.html` - Skills Section (~linha 130)

### Editar Frontend Skills
```html
<div class="skill-item">
    <span>React / Next.js</span>
    <div class="progress-bar">
        <div class="progress" style="width: 95%"></div>
    </div>
</div>
```

**Altere:**
- `React / Next.js` - nome da skill
- `width: 95%` - seu nível (0-100%)

### Adicionar nova skill
Copie um bloco `<div class="skill-item">` e cole abaixo:
```html
<div class="skill-item">
    <span>Sua Skill</span>
    <div class="progress-bar">
        <div class="progress" style="width: 85%"></div>
    </div>
</div>
```

---

## Passo 4: Seus Projetos

**Arquivo:** `index.html` - Projects Section (~linha 170)

### Editar um projeto existente
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">E-COMMERCE</div>
    </div>
    <div class="project-info">
        <h3>Plataforma E-commerce</h3>
        <p>Descrição do seu projeto...</p>
        <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
        </div>
        <a href="link-do-seu-projeto" class="project-link">Ver Projeto →</a>
    </div>
</div>
```

**Altere:**
- `E-COMMERCE` - Nome/placeholder
- `Plataforma E-commerce` - Título
- Descrição, tags e link

### Adicionar novo projeto
Copie um `.project-card` inteiro e cole antes de fechar `</div class="projects-grid">`.

---

## Passo 5: Cores e Design

**Arquivo:** `styles.css` (~linha 7)

### Alterar cores
```css
:root {
    --primary-color: #00d4ff;      /* Cor azul ciano */
    --secondary-color: #ff006e;    /* Cor rosa */
    --dark-bg: #0a0e27;            /* Background escuro */
}
```

**Exemplos de cores:**
- Roxo: `#9945ff`
- Verde: `#00d084`
- Laranja: `#ff6b35`
- Vermelho: `#e63946`

---

## Passo 6: Redes Sociais

Na seção Contact (~linha 300):
```html
<div class="social-links">
    <a href="https://linkedin.com/in/seu-usuario" class="social-link">LinkedIn</a>
    <a href="https://github.com/seu-usuario" class="social-link">GitHub</a>
    <a href="https://twitter.com/seu-usuario" class="social-link">Twitter</a>
</div>
```

---

## Passo 7: Integrar Formulário de Contato

Por padrão, o form mostra um `alert()`. Para integrar com email:

### Opção 1: Formspree (Recomendado)
1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta
3. Copie seu ID
4. Altere o HTML:

```html
<form action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
    <!-- seu form aqui -->
</form>
```

### Opção 2: EmailJS
1. Acesse [emailjs.com](https://emailjs.com)
2. Configure seu serviço de email
3. Adicione no seu HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>

<form onsubmit="sendEmail(event)">
    <!-- seu form aqui -->
</form>
```

---

## ✅ Checklist Final

- [ ] Alterei meu nome e profissão
- [ ] Atualizei a descrição sobre mim
- [ ] Adicionar/alterar minhas skills
- [ ] Adicionei meus projetos
- [ ] Alterei email e telefone
- [ ] Atualizei links de redes sociais
- [ ] Testei o formulário de contato
- [ ] Escolhi uma paleta de cores

---

## 🚀 Deploy (Publicar Online)

### GitHub Pages (Grátis)
```bash
git add .
git commit -m "Portfolio inicial"
git push origin main
```

Ative GitHub Pages em Configurações → Pages

### Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Conecte seu repositório GitHub
3. Deploy automático!

### Vercel
```bash
npm install -g vercel
vercel
```

---

## 💡 Dicas

1. **Adicione imagens reais** aos projetos em vez do placeholder
2. **Use links reais** para seus projetos (GitHub, live demo, etc)
3. **Atualize regularmente** sua experiência e skills
4. **Teste em mobile** (F12 → Toggle device toolbar)
5. **Otimize imagens** para carregar mais rápido

---

## 📞 Suporte

Se tiver dúvidas:
- Verifique o console (F12)
- Procure o comentário no código
- Consulte o README.md

**Bom sorte com sua carreira! 🚀**
