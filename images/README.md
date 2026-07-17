# Pasta de imagens — guia rápido

Esta pasta está vazia de propósito: as fotos reais (caminhão, equipe, atendimentos)
são suas. Abaixo está o guia para adicionar imagens seguindo boas práticas de SEO.

## Regras gerais
1. **Formato**: sempre `.webp` (menor peso, mesma qualidade). Se só tiver `.jpg/.png`,
   converta antes de subir (ex: https://squoosh.app ou `cwebp arquivo.jpg -o arquivo.webp`).
2. **Nome do arquivo**: descritivo, com palavra-chave, em minúsculas e com hífen
   (nunca `IMG_2345.jpg`). Exemplos:
   - `guincho-24-horas-itajai-br-101.webp`
   - `guincho-reboque-carro-balneario-camboriu.webp`
   - `guincho-moto-itapema.webp`
   - `caminhao-plataforma-guincho-tijucas.webp`
3. **Texto ALT**: descreva a cena + cidade/serviço, sem "keyword stuffing".
   - Bom: `alt="Guincho J.Batista fazendo reboque de carro na BR-101 em Itajaí"`
   - Ruim: `alt="guincho guincho itajai guincho 24h guincho barato guincho"`
4. **Tamanho**: comprima antes de subir (ideal < 200KB por imagem no hero,
   < 100KB nos cards). Use `loading="lazy"` em todas as imagens fora da
   primeira dobra (já configurado nos componentes — basta adicionar o atributo
   ao inserir a tag `<img>`).

## Onde inserir cada imagem (arquivos já preparados para receber `<img>`)
| Página | Sugestão de imagem | Nome sugerido |
|---|---|---|
| index.html (hero) | Guincho em ação, de dia, com o caminhão visível | `guincho-24-horas-itajai-santa-catarina.webp` |
| sobre.html | Foto da equipe ou do caminhão parado | `equipe-jbatista-guincho-itajai.webp` |
| cidades/itajai.html | Guincho atuando em Itajaí (Centro, BR-101) | `guincho-itajai-br-101.webp` |
| cidades/balneario-camboriu.html | Guincho na orla / Av. Atlântica | `guincho-balneario-camboriu-avenida-atlantica.webp` |
| cidades/camboriu.html | Guincho na SC-410 | `guincho-camboriu-rodovia-interpraias.webp` |
| cidades/itapema.html | Guincho em Meia Praia | `guincho-itapema-meia-praia.webp` |
| cidades/tijucas.html | Guincho na BR-101 sentido Tijucas | `guincho-tijucas-br-101.webp` |
| Open Graph (compartilhamento) | Imagem 1200x630px | `og-home.webp` |

## Exemplo de tag `<img>` já no padrão do site
```html
<img
  src="/images/guincho-itajai-br-101.webp"
  alt="Guincho J.Batista reboca carro na BR-101 em Itajaí, Santa Catarina"
  width="800" height="500"
  loading="lazy">
```

Depois de adicionar as imagens reais, atualize também o `og:image` no `<head>`
de cada página para apontar para a imagem correta.
