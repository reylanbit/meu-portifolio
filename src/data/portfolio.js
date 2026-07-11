export const portfolioData = {
  papel: "desenvolvedor front-end senior especializado em Framer Motion, React e portfolios interativos de alto impacto",

  conceito: {
    temaFundo: "#0a0a0a",
    acentoVerde: "#00ff88",
    detalheDourado: "#c9a84c",
    tipografiaMono: "'Fragment Mono', 'Fira Code', 'Consolas', monospace",
    tipografiaTexto: "'Plus Jakarta Sans', 'Inter', sans-serif",
  },

  estagios: [
    {
      ordem: 1,
      especie: "Australopithecus",
      faseProfissional: "Estagiario / Carregador de Bolsa",
      local: "Coca-Cola Manaus",
      periodo: "Inicio",
      imagem: "/images/evolucao_01_australopithecus.png",
      imagemAlt: "Australopithecus segurando uma bolsa termica da Coca-Cola, estilo pintura rupestre digital",
      promptIA: "Australopithecus holding a Coca-Cola thermal bag, digital cave painting style, dark background, green neon accents",
      corretivo: "#00ff88",
    },
    {
      ordem: 2,
      especie: "Homo habilis",
      faseProfissional: "Auxiliar Administrativo",
      local: "Jacimar da Silva Gama",
      periodo: "Crescimento",
      imagem: "/images/evolucao_02_habilis.png",
      imagemAlt: "Homo habilis organizando papeis em uma mesa, estilo pintura rupestre digital",
      promptIA: "Homo habilis organizing papers at a desk, digital cave painting style, dark background, green neon accents",
      corretivo: "#00cc6a",
    },
    {
      ordem: 3,
      especie: "Homo erectus",
      faseProfissional: "Agente de Portaria / Vigilante",
      local: "Transexcel, GR, Tawrus",
      periodo: "Protecao",
      imagem: "/images/evolucao_03_erectus.png",
      imagemAlt: "Homo erectus em posicao de vigilancia, estilo pintura rupestre digital",
      promptIA: "Homo erectus standing guard vigilantly, digital cave painting style, dark background, green neon accents",
      corretivo: "#00aa55",
    },
    {
      ordem: 4,
      especie: "Neanderthal",
      faseProfissional: "Motoqueiro de App",
      local: "iFood / Uber / Taxi",
      periodo: "Velocidade",
      imagem: "/images/evolucao_04_neanderthal.png",
      imagemAlt: "Neanderthal pilotando uma moto com mochila de entrega, estilo pintura rupestre digital",
      promptIA: "Neanderthal riding a motorcycle with delivery bag, digital cave painting style, dark background, green neon accents",
      corretivo: "#008844",
    },
    {
      ordem: 5,
      especie: "Homo sapiens",
      faseProfissional: "Programador / Monitor / Criador de Conteudo",
      local: "Codigo & Comunidade",
      periodo: "Evolucao Total",
      imagem: "/images/evolucao_05_sapiens_primitivo.png",
      imagemAlt: "Homo sapiens programando em um laptop, estilo pintura rupestre digital futurista",
      promptIA: "Homo sapiens coding on a laptop, digital cave painting style meets futuristic, dark background, green neon accents",
      corretivo: "#00ff88",
    },
    {
      ordem: 6,
      especie: "Homo sapiens moderno",
      faseProfissional: "Desenvolvedor Full Stack",
      local: "Projetos Proprios & Freelance",
      periodo: "Maturidade",
      imagem: "/images/evolucao_06_moderno.png",
      imagemAlt: "Desenvolvedor moderno trabalhando com multiplas telas, estilo digital futurista",
      promptIA: "Modern developer working with multiple screens, futuristic digital style, dark background, green neon accents",
      corretivo: "#00ffaa",
    },
    {
      ordem: 7,
      especie: "Homo sapiens futuro",
      faseProfissional: "Arquiteto de Solucoes & Lider Tecnico",
      local: "Inovacao & Impacto",
      periodo: "O Futuro",
      imagem: "/images/evolucao_07_futuro.png",
      imagemAlt: "Visionario tecnologico moldando o futuro com codigo, estilo cyberpunk",
      promptIA: "Visionary technologist shaping the future with code, cyberpunk style, dark background, green neon accents",
      corretivo: "#00ffcc",
    },
  ],

  navegacao: {
    abas: ["Evolucao", "Profissional", "Conhecimento", "Criativo", "Social"],
    rodape: {
      whatsapp: "558598170-2374",
      email: "darlannasa@gmail.com",
      links: ["YouTube", "GitHub"],
    },
  },

  metricas: {
    anosExperiencia: 16,
    projetosEntregues: 12,
    stackTecnologias: 8,
    comunidadeImpactada: 50,
  },

  conteudo: {
    evolucao: {
      fraseImpacto: "Da rua para o codigo, a evolucao nao para.",
      subFrase: "16 anos de transformacao. Cada fase uma licao. Cada linha de codigo uma conquista.",
    },

    profissional: {
      cases: [
        {
          nome: "Safe Travels",
          problema: "Seguranca em viagens era fragmentada e os usuarios nao tinham uma solucao unica para monitorar rotas, contatos de emergencia e status em tempo real.",
          abordagem: "Desenvolvimento de PWA React com notificacoes push, geolocalizacao em tempo real e dashboard para monitoramento.",
          codigo: "const useLocationTracker = () => {\n  const [position, setPosition] = useState(null);\n  useEffect(() => {\n    navigator.geolocation.watchPosition(\n      (pos) => setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude }),\n      (err) => console.error(err),\n      { enableHighAccuracy: true }\n    );\n  }, []);\n  return position;\n};",
          resultado: "Aplicativo utilizado por 200+ usuarios em fase de teste, com reducao de 40% no tempo de resposta a emergencias.",
          aprendizado: "Trabalhar com dados geograficos em tempo real exige tratamento robusto de erros e fallbacks offline.",
          metrica: { valor: "200+", label: "usuarios ativos" },
        },
        {
          nome: "Guardiao do Foco Tecnico",
          problema: "Desenvolvedores perdiam tempo alternando entre ferramentas de produtividade e nao tinham visao unificada do progresso tecnico.",
          abordagem: "Dashboard React com integracao de APIs de gestao de tarefas, visualizacao de metricas de codigo e gamificacao de aprendizado.",
          codigo: "const TechMetrics = ({ commits, reviews, prs }) => (\n  <div className=\"metrics-grid\">\n    <MetricCard icon=\"code\" value={commits} label=\"Commits\" />\n    <MetricCard icon=\"eye\" value={reviews} label=\"Reviews\" />\n    <MetricCard icon=\"git-pull\" value={prs} label=\"PRs\" />\n  </div>\n);",
          resultado: "Ferramenta adotada por equipe de 8 desenvolvedores, aumentando a visibilidade do progresso em 60%.",
          aprendizado: "Interfaces de dados precisam ser simples para serem adotadas. Complexidade mata a usabilidade.",
          metrica: { valor: "60%", label: "mais produtividade" },
        },
        {
          nome: "Script de Automacao Seguranca Patrimonial",
          problema: "Processos de monitoramento de seguranca patrimonial eram manuais, lentos e propensos a erros humanos.",
          abordagem: "Scripts de automacao com Node.js para coleta, processamento e alertas de dados de seguranca patrimonial.",
          codigo: "const monitorPatrimonial = async (endpoint) => {\n  const data = await fetch(endpoint);\n  const parsed = await data.json();\n  const alerts = parsed.filter(item => item.status === 'critico');\n  if (alerts.length > 0) await sendNotifications(alerts);\n  return { total: parsed.length, alerts: alerts.length };\n};",
          resultado: "Reducao de 70% no tempo de processamento de relatorios e eliminacao de 95% dos erros manuais.",
          aprendizado: "Automacao bem planejada economiza horas de trabalho repetitivo e libera tempo para tarefas de maior valor.",
          metrica: { valor: "70%", label: "mais eficiencia" },
        },
      ],
      processo: {
        ferramentas: ["Notion", "Linear", "Figma", "GitHub Projects"],
        rituais: ["Review da Madrugada", "Pair Programming", "Documentacao Assincrona"],
      },
      stack: [
        { nome: "React", nivel: "Avancado", status: "producao" },
        { nome: "Framer Motion", nivel: "Avancado", status: "producao" },
        { nome: "TypeScript", nivel: "Intermediario", status: "aprendizado" },
        { nome: "Node.js", nivel: "Intermediario", status: "producao" },
        { nome: "Tailwind CSS", nivel: "Avancado", status: "producao" },
        { nome: "Git/GitHub", nivel: "Avancado", status: "producao" },
        { nome: "Python", nivel: "Intermediario", status: "estudo" },
        { nome: "Docker", nivel: "Basico", status: "estudo" },
      ],
      timeline: "2010 a 2026 - 16 anos de evolucao profissional",
    },

    conhecimento: {
      artigos: [
        {
          titulo: "Framer Motion: Animacoes que Contam Historias",
          descricao: "Como usar hooks de scroll e transform para criar narrativas visuais imersivas em portfolios.",
          tempoLeitura: "8 min",
        },
        {
          titulo: "PWA para Iniciantes: Seu App Bolso",
          descricao: "Guia pratico de Progressive Web Apps com React, service workers e estrategias de cache offline.",
          tempoLeitura: "12 min",
        },
        {
          titulo: "React Custom Hooks: Padroes Reais",
          descricao: "Extraindo logica reutilizavel em hooks customizados com exemplos de projetos reais.",
          tempoLeitura: "6 min",
        },
      ],
      palestras: [
        {
          titulo: "Workshop: Animacoes com Framer Motion",
          descricao: "Workshop pratico de 2 horas cobrindo motion.div, variants, gestures e scroll-triggered animations.",
          link: "#",
          duracao: "2h",
        },
        {
          titulo: "Palestra: Da Rua ao Codigo",
          descricao: "Como a trajetoria de vida nao-tradicional pode ser uma vantagem na carreira de tech.",
          link: "#",
          duracao: "45min",
        },
        {
          titulo: "Mentoria: Montando seu Portfolio",
          descricao: "Sessao aberta sobre como construir um portfolio que destaca projetos reais e personalidade.",
          link: "#",
          duracao: "1h30",
        },
      ],
      livrosCursos: [
        "Refactoring UI - Adam Wathan & Steve Schoger",
        "Eloquent JavaScript - Marijn Haverbeke",
        "Curso React Avancado - Origamid",
        "The Pragmatic Programmer - Hunt & Thomas",
      ],
      faqs: [
        {
          pergunta: "O que e API REST?",
          resposta: "Imagina que voce e o vigilante do predio e alguem la de fora precisa de informacao. Voce nao deixa a pessoa entrar, mas voce leva o recado ate quem tem a resposta e traz o resultado de volta. A API REST e esse vigia: recebe pedido, busca o dado e devolve formatado. Nada de acesso direto ao banco.",
        },
        {
          pergunta: "Por que React e nao Angular ou Vue?",
          resposta: "React e como uma caixa de ferramentas aberta. Voce monta como quiser. Angular e um kit completo que voce segue as instrucoes. Vue e o meio-termo. React foi a escolha porque a comunidade e gigante, os recursos sao infinitos e o ecossistema de ferramentas como Framer Motion permite criar experiencias unicas.",
        },
        {
          pergunta: "Framer Motion e dificil?",
          resposta: "Na verdade e a lib mais intuitiva pra animacao que ja usei. Se voce sabe o basico de CSS transitions, Framer Motion e como escrever em portugues ao inves de latim. Voce descreve o que quer acontecer e ele faz acontecer.",
        },
        {
          pergunta: "Quanto tempo leva pra aprender React?",
          resposta: "Depende do seu ritmo, mas com dedicacao diaria de 2-3 horas, em 3 meses voce ja esta fazendo projetos proprios. Em 6 meses ja esta contribuindo em times. O segredo nao e a velocidade, e a consistencia. Todo dia um pouco, sem excecao.",
        },
      ],
    },

    criativo: {
      playground: [
        {
          nome: "Mapa de Calor Interativo",
          descricao: "Visualizacao de dados de temperatura com canvas e hover interativo",
          tipo: "demo",
        },
        {
          nome: "Fuja do Transito",
          descricao: "Minigame onde voce dirige escapando do caos urbano de Manaus",
          tipo: "game",
        },
      ],
      setup: {
        maquinas: ["PC Gamer com RTX 3060", "Monitor 27\" Ultrawide", "Notebook Dell para mobilidade"],
        software: ["VS Code", "Figma", "GitHub Desktop", "Docker Desktop", "Postman"],
        perifericos: ["Teclado Mecanico Redragon", "Mouse Logitech G502", "Webcam Logitech C920", "Headset HyperX Cloud"],
      },
      playlist:
        "https://open.spotify.com/user/31tqr6n5qdgyu4nmmey4dthnaity?si=a9432e277a4c4c3f",
    },

    social: {
      comoTrabalhar: {
        horarios: "Flexivel, pico de producao entre 22h e 04h (horario de Manaus)",
        comunicacao: "Assincrona por padrao. Reuniões so quando realmente necessario. Prefiro documentar do que falar.",
        feedback: "Direto e construtivo. Sem rodeios, sem eufemismos. Se ta bom, eu falo. Se pode melhorar, eu falo tambem.",
        oQueNaoFazer: "Nao me mande mensagem 'oi' sem contexto. Nao peca prazo sem definir escopo. Nao mude requisitos no dia da entrega.",
      },
      mentorias: "Contribuicao ativa em comunidades locais de Manaus. Mentoria informal para iniciantes que demonstram comprometimento real.",
      disponibilidade: "Aberto para freelas, mentorias e oportunidades CLT com time remoto ou hibrido em Manaus.",
    },

    extra: {
      capsulaTempo: {
        titulo: "2021 vs 2026",
        conteudo2021: "Um cara carregando bolsa termica da Coca-Cola, sonhando com o dia em que seu teclado seria sua ferramenta de trabalho.",
        conteudo2026: "Desenvolvedor construindo portfolios interativos, automatizando processos e ajudando outros a entrarem na area.",
      },
      erros: [
        {
          titulo: "Confundir velocidade com pressa",
          aprendizado: "Entendi que fazer rapido nao e a mesma coisa que fazer bem. Velocidade vem da pratica, nao da ansiedade.",
        },
        {
          titulo: "Nao documentar nada",
          aprendizado: "Perdi semanas de trabalho porque nao anotei decisoes. Hoje documento tudo, mesmo que seja rapido.",
        },
        {
          titulo: "Tentar aprender tudo ao mesmo tempo",
          aprendizado: "Foquei em React + Framer Motion primeiro. Dominar uma stack antes de sair caçando novidade e o caminho certo.",
        },
      ],
    },
  },
};
