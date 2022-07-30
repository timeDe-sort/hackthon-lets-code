# EducaDrinhos
![Logo educaDrinhos](https://github.com/timeDe-sort/hackthon-lets-code/blob/main/images/logo-educadrinhos-fundo-branco.png)

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre e Equipe](#sobre-e-equipe)
   * [Golden Circle](#golden-circle)
   * [Aplicação - EduCadrinhos](#app-educadrinhos)
      * [Tecnologias Utilizadas](#tecnologias-utilizadas)
      * [Modelagem do Banco de Dados](#modelagem-bd)
      * [Passos Futuros](#passos-futuros)
   * [Setup do Ambiente](#setup)
<!--te-->


## Sobre e Equipe <a name="sobre-e-equipe"></a>
O projeto da aplicação EducaDrinhos foi desenvolvido para o Hackathon da [Let's Code](https://letscode.com.br/), promovido para os alunos do curso **Vem Ser Tech**, em parceria com o iFood. O curso foi realizado entre os meses de janeiro e dezembro de 2022, focado em desenvolvimento web Fullstack. O hackathon teve por tema **Democratização da Educação** e aconteceu de 25/07/2022 a 03/08/2022, de forma online.

Nós somos a equipe **timeDe.sort()**, composta pelos alunos do curso:
- Ana Clara Barbeta
  - [GitHub](https://github.com/acbarbeta)
  - [LinkedIn](https://www.linkedin.com/in/ana-clara-barbeta-vicente/)
- Bruna Luchini
  - [GitHub](https://github.com/Luvlore)
  - [LinkedIn](https://www.linkedin.com/in/brunaluchini/)
- Lincoln Melo
  - [GitHub](https://github.com/LinkolnR)
  - [LinkedIn](https://www.linkedin.com/in/lincolnr-melo/)
  
## Golden Circle <a name="golden-circle"></a>
A metodologia proposta para a resolução do problema proposto (democratização da educação) chama-se [Golden Circle](https://neilpatel.com/br/blog/golden-circle/), que consiste na reposta das perguntas "Por quê?", "Como?" e "O quê?", nessa ordem. Para definir a ideia de desenvolvimento, utilizamos um Canvas, como mostrado abaixo, para aplicar o método sugerido.
  
![Metodologia golden circle aplicada](https://github.com/timeDe-sort/hackthon-lets-code/blob/main/images/Golden%20Circle%20hackathon.png)
  
## Aplicação - EducaDrinhos <a name="app-educadrinhos"></a>
A aplicação EducaDrinhos visa conectar alunos de ensino médio provenientes das classes D e E da sociedade com padrinhos que possam fornecer recursos de estudo, seja por meio do oferecimento de recursos materiais e financeiros (pelos **DOADORES**) ou pelo oferecimento de aulas de reforço (pelos **VOLUNTÁRIOS**). 
De forma sucinta, um **ALUNO** é capaz de se inscrever no programa por meio de um celular ou procurando um **CENTRO DE ATENDIMENTO**, que seria uma escola de rede pública, subprefeitura ou secretaria de educação localizada na região do aluno. Durante o cadastro, o aluno informa o tipo de ajuda requerida e pode detalhar horários e materiais ou  Da mesma forma, utilizando nosso aplicativo, o **VOLUNTÁRIO** pode se cadastrar oferecendo aulas na região de sua preferêcia (desde que nela haja um centro de atendimento), detalhando a disciplina oferecida e os turnos disponíveis. Por fim, o **DOADOR** tem a possibilidade de cadastro detalhando o tipo de ajuda oferecida (**material**, **financeira** ou ambas) e especificando o que pode doar.
Cabe dizer que há uma página para cadastro de centro de atendimento, para que concentre os alunos, voluntários e doadores. Hoje, ainda, o match de interesses é feito manualmente pelo centro de atendimento, por meio de página de acompanhamento de doações e aulas.
Cada usuário possui uma página de acompanhamento de suas requisições ou seus oferecimentos e pode modificar seu perfil.
  
### Tecnologias utilizadas <a name="tecnologias-utilizadas"></a>
O projeto foi desenvolvido usando as seguintes tecnologias e bibliotecas:
- FRONT-END:
  - [React](https://pt-br.reactjs.org/)
    - React native
    - [Expo](https://expo.dev/)
    - [Axios](https://axios-http.com/ptbr/docs/intro)
    - Bootstrap
   
- BACK-END:
  - [Node.js](https://nodejs.org/en/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [Prisma](https://www.prisma.io/)
  - [Typescript]()
  - [Axios](https://axios-http.com/ptbr/docs/intro)
    
  
### Passos Futuros <a name="passos-futuros"></a>
  
Como próximos passos, pretendemos:
- Criar versão web para a aplicação;
- Automatizar o "match" entre alunos e voluntários e/ou doadores, utilizando conceitos de data science;
- Aumentar o público-alvo para crianças e adolescentes em fase escolar e, posteriormente, adultos buscando a Educação de Jovens e Adultos.
  
## Setup de Ambiente <a name="setup"></a>
  
FRONT-END:
- Entrar na pasta de front (\hackthon)
- Instalar as dependências:
  - `npm install expo-cli`
  - `npm install @react-navigation/native-stack`
  - `npm install @react-navigation/native`
  - `expo install react-native-screens react-native-safe-area-context`
  - `npm install react-native-paper`
  - `npm install bootstrap --save`
  - `npm install react-bootstrap bootstrap`
  - `npm install react-native-dropdown-picker`
- Para rodar o frontend:
  - `expo start`
   
BACK-END:
- Entrar na pasta de back (\backend)
- Instalar as dependências:
  - `npm install body-parser`
  - `npm install dotenv`
  - `npm install express`
  - `npm install pg`
  - `npm install reflect-metadata`
  - `npm install uuid`
  - `npm install prisma`
  - `npm install --global yarn`
- Para rodar as migrations:
  - `yarn prisma migrate dev`
- Para rodar o backend:
  - `yarn dev`
