# J.Batista Guincho 24 Horas — Site institucional

Site estático (HTML + CSS + JS puro) para a J.Batista Guincho 24 Horas,
cobrindo Itajaí, Balneário Camboriú, Camboriú, Itapema e Tijucas (SC).

## Estrutura de pastas
```
jbatista-guincho/
├── index.html                 → Página inicial
├── servicos.html               → Todos os serviços (guincho leve, moto, pesados, emergência)
├── sobre.html                  → Institucional
├── contato.html                → Formulário (envia para WhatsApp) + telefone
├── cidades/
│   ├── itajai.html
│   ├── balneario-camboriu.html
│   ├── camboriu.html
│   ├── itapema.html
│   └── tijucas.html
├── blog/
│   ├── index.html
│   ├── quando-chamar-guincho-24-horas.html
│   └── checklist-emergencia-veicular-br-101.html
├── css/style.css               → Todo o design (tokens de cor, tipografia, componentes)
├── js/script.js                → Menu mobile, ano automático, formulário → WhatsApp
├── images/                     → Vazia de propósito — veja images/README.md
├── sitemap.xml
├── robots.txt
└── README.md                   → Este arquivo
```

## Como testar localmente
Abra `index.html` direto no navegador, ou rode um servidor simples:
```bash
cd jbatista-guincho
python3 -m http.server 8080
# depois acesse http://localhost:8080
```

## O que já foi implementado (checklist de SEO)

**1. Estrutura do site** — URLs amigáveis e sem parâmetros:
`/cidades/itajai.html`, `/servicos.html`, `/blog/...` (ao publicar, se seu
servidor permitir, pode remover o `.html` das URLs via configuração).

**2. Títulos e meta tags** — Cada página tem `<title>` e `meta description`
únicos, com cidade/serviço no início (padrão: "O que é | Empresa").

**3. Conteúdo** — Um único `<h1>` por página, hierarquia `<h2>`/`<h3>`
correta, sem pular níveis.

**4. Palavras-chave** — Todos os termos que você passou (guincho, reboque,
socorro mecânico, auto socorro, resgate veicular, transporte de máquinas
etc.) foram distribuídos naturalmente em títulos, textos e nomes de página —
sem repetição forçada.

**5. SEO local** — 5 páginas de cidade com conteúdo único (bairros, rodovias,
pontos de referência reais), + orientações de Google Business Profile abaixo.

**6. Imagens** — Pasta preparada para `.webp`, com convenção de nomes e ALT
descritivo. Veja `images/README.md`.

**7. Performance** — `loading="lazy"` pronto para uso nas imagens, fontes
com `preconnect`, CSS/JS enxutos e sem dependências pesadas (nenhum
framework carregado à toa).

**8. SEO técnico** — `sitemap.xml`, `robots.txt` e recomendação de HTTPS
(depende do provedor de hospedagem — veja abaixo).

**9. Dados estruturados (Schema.org)**:
   - `AutomotiveBusiness` (LocalBusiness) em todas as páginas relevantes
   - `Service` com `hasOfferCatalog` em `servicos.html`
   - `FAQPage` na home, sincronizado com o conteúdo visível
   - `BreadcrumbList` nas páginas internas
   - `Review`/`AggregateRating`: **deixado comentado de propósito** — nunca
     publique nota/quantidade de avaliações fictícias (viola as diretrizes
     do Google). Ative apenas com números reais do Google Business Profile.

**10. Links internos** — Menu, rodapé, seção "Também atendemos" (cidades
vizinhas) e links contextuais dentro dos textos e artigos do blog.

**11. Backlinks** — Fora do escopo de código; veja recomendações abaixo.

**12. Marketing de conteúdo** — Blog com 2 artigos reais de exemplo,
prontos para servir de modelo a novos posts.

**13/14. UX e Mobile First** — Menu hambúrguer, barra fixa de ligação no
mobile, CSS responsivo (breakpoints em 980px e 620px), foco visível no
teclado, `prefers-reduced-motion` respeitado.

**15. SEO para React (SSR/SSG/Next.js)** — Não se aplica: você escolheu
HTML/CSS/JS puro, que já é 100% renderizado no servidor (sem necessidade de
SSR/SSG, pois não há JavaScript de renderização de conteúdo).

**18. Práticas que prejudicam SEO — evitadas**: sem texto oculto, sem
keyword stuffing, conteúdo de cada cidade reescrito (não duplicado).

---

## O que você ainda precisa fazer (fora do código)

### Domínio e hospedagem
Você optou por não definir domínio ainda. Todo o site usa
`https://www.jbatistaguincho.com.br` como placeholder em:
canonical, Open Graph, `sitemap.xml` e JSON-LD. **Assim que tiver o domínio
definitivo**, faça busca e substituição desse valor em todos os arquivos
antes de publicar.

### HTTPS
Contrate hospedagem com certificado SSL grátis (a maioria oferece via
Let's Encrypt) e force redirecionamento HTTP → HTTPS nas configurações do
servidor/painel de hospedagem.

### Google Business Profile
- Cadastre a empresa como **"empresa que atende em uma área"** (service-area
  business), já que o atendimento é móvel — isso permite ocultar o endereço
  exato e listar as 5 cidades como área de atendimento.
- Use exatamente o mesmo nome, telefone e categoria ("Serviço de guincho")
  em todos os lugares (Google, site, redes sociais) — consistência de NAP
  (Nome, Endereço, Telefone) é um fator importante de SEO local.
- Peça avaliações reais aos clientes atendidos; só então ative o bloco de
  `AggregateRating` comentado em `index.html`.

### Compressão, minificação e cache
Ao publicar, configure no seu provedor (ou build step, se usar um):
- Compressão Gzip/Brotli no servidor
- Minificação de `style.css` e `script.js` (ex: com `esbuild`, `terser`,
  ou o próprio painel da hospedagem)
- Cache-Control para arquivos estáticos (`css`, `js`, `webp`) — normalmente
  configurável via `.htaccess` (Apache) ou painel da Vercel/Netlify/Cloudflare

### Monitoramento
- Cadastre o site no **Google Search Console** e envie o `sitemap.xml`
- Instale o **Google Analytics 4** (o `js/script.js` já dispara
  `gtag('event','generate_lead', ...)` nos cliques de telefone/WhatsApp,
  assim que você inserir o snippet do GA4)
- Rode o site no **PageSpeed Insights** após adicionar as imagens reais

### Backlinks
- Cadastre a empresa em diretórios locais (Google Business Profile,
  guias de Itajaí/BC, sindicatos do setor)
- Parcerias com oficinas, seguradoras e postos de combustível da região
  podem gerar backlinks locais relevantes

### Segurança
- Ative HTTPS (acima)
- Se usar formulário de contato com backend no futuro, valide/sanitize
  os campos no servidor
- Mantenha o CMS/hospedagem sempre atualizado, se migrar para uma
  plataforma com painel administrativo

---

## Checklist pré-publicação (rápido)
- [ ] Substituir `jbatistaguincho.com.br` pelo domínio real em todo o site
- [ ] Adicionar imagens reais em `.webp` com ALT (ver `images/README.md`)
- [ ] Substituir depoimentos de exemplo por avaliações reais
- [ ] Ativar HTTPS no domínio final
- [ ] Cadastrar Google Business Profile como "área de atendimento"
- [ ] Enviar `sitemap.xml` ao Google Search Console
- [ ] Instalar Google Analytics 4
- [ ] Testar todos os links de telefone/WhatsApp em um celular real
- [ ] Rodar PageSpeed Insights e ajustar imagens pesadas, se houver
