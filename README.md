# Vitta — V0 visual

Início, Questionário, Alimentação, Corrida, Ranking e Perfil. Temas claro e escuro, com layout responsivo.

## Abrir no VS Code
1. Instale Node.js 22.13 ou superior (LTS) e VS Code.
2. Extraia o ZIP. Abra a pasta `vitta` que contém `package.json` em Arquivo > Abrir Pasta.
3. No terminal integrado, execute:

```sh
npm install
npm run dev
```

Abra http://localhost:3000 (ou o endereço informado pelo terminal). Para parar: Ctrl+C.
Se o PowerShell bloquear npm.ps1, selecione o terminal Command Prompt no VS Code ou use `npm.cmd` no lugar de `npm`.

## Colocar no GitHub
Crie um repositório vazio chamado `vitta`, de preferência privado. Não marque a criação de README, licença ou .gitignore.
No terminal da pasta do projeto:

```sh
git init
git add .
git commit -m "Adiciona V0 visual do Vitta"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/vitta.git
git push -u origin main
```

Troque SEU_USUARIO pelo seu usuário real e conclua o login quando solicitado. Se o Git pedir identidade, configure seu nome e email de commit.
Alternativa: use o painel Controle do Código-Fonte do VS Code para inicializar, fazer o primeiro commit e Publicar no GitHub como privado.
O repositório guarda o código; esse envio não publica automaticamente um site.

## Onde editar
- `app/page.tsx`: telas, dados fictícios e interações. Na V0 estão reunidos neste arquivo; podemos dividir juntos em componentes.
- `app/globals.css`: cores, temas, espaçamento e responsividade.
- `app/layout.tsx`: idioma, título e estrutura geral.
- `public/`: imagens e ícone.
- `package.json`: comandos e dependências.

## Estado real da V0
Não há banco de dados, autenticação de usuário, API de supermercado, IA ou GPS. Os dados ficam em memória e se perdem ao atualizar a página. Fotos são apenas prévias locais. Receitas, mercados, preços, atividades e rankings são demonstrativos. As respostas ao questionário não geram prescrição nutricional.

## Sobre esta cópia
Telas e estilos foram copiados da V0 publicada. A hospedagem original usa Vinext e infraestrutura de Sites. Esta cópia local usa Next.js diretamente para facilitar o trabalho no Windows e VS Code. Não contém credenciais, histórico Git ou dependências instaladas. O site atual não foi alterado. O novo repositório GitHub não sincroniza automaticamente com a publicação existente.

## Verificação
`npm run typecheck`: checagem TypeScript.
`npm run build`: compilação de produção.
`npm start`: inicia o resultado da compilação.
O pacote foi validado com as dependências já instaladas no ambiente de origem; a instalação limpa no Windows não foi executada aqui.

## Foto demonstrativa
Fonte: https://www.arise-app.com/dish/High-Protein-Black-Bean
Imagem: https://www.arise-app.com/images/dishes/en/high-protein-black-bean-m8w9vc.webp
Licença de redistribuição não verificada; substituir por imagem própria ou licenciada antes de um lançamento público.
