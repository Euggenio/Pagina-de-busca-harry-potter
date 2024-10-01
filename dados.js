let dados = [
    {
    
        titulo: "Harry Potter",
        classificacao:"Grifinória " ,
        descricao: "Harry Potter é um garoto órfão que descobre aos 11 anos ser um bruxo e está destinado a grandes coisas. Ele cresce no mundo da magia, enfrenta desafios perigosos e se torna um dos bruxos mais famosos de sua geração.",
        link: "https://pt.wikipedia.org/wiki/Harry_Potter_(personagem)",
         tags:" harry coruja grifinória grifinoria "
    },
    {
        
        titulo: "Hermione",
        classificacao:"Grifinória" ,
        descricao: "Hermione Granger é uma bruxa nascida trouxa, inteligente e leal, que se torna a melhor amiga de Harry Potter e Ron Weasley. Com sua sede por conhecimento e habilidade em feitiços, ela se torna uma aliada indispensável em suas aventuras em Hogwarts",
        link: " https://pt.wikipedia.org/wiki/Hermione_Granger",
        tags: "hermione granger grifinória grifinoria "
    },
    {
    
        titulo: "Ron Weasley",
        classificacao:"Grifinória" ,
        descricao: "Ron Weasley é o melhor amigo de Harry Potter e Hermione Granger. Vindo de uma família de bruxos de sangue puro, mas com poucos recursos financeiros, Ron é leal, engraçado e um pouco inseguro.",
        link: " https://pt.wikipedia.org/wiki/Ron_Weasley",
         tags: "ron weasley grifinória grifinoria  "
    },
    {
        
        titulo: "Ginny Weasley",
        classificacao:"Grifinória" ,
        descricao: "Ginny Weasley é a irmã mais nova de Ron e a única filha de Arthur e Molly Weasley. Inicialmente tímida, ela se desenvolve em uma bruxa habilidosa e confiante, tornando-se uma jogadora de Quadribol talentosa e uma bruxa poderosa.",
        link: "https://harrypotter.fandom.com/pt-br/wiki/Ginevra_Weasley",
        tags: "ginny weasley grifinória grifinoria "
    },
    {
        
        titulo: "Neville Longbottom",
        classificacao:"Grifinória" ,
        descricao: "Neville Longbottom é um bruxo da Grifinória, conhecido por sua timidez e dificuldades iniciais com os feitiços. Apesar de ser frequentemente subestimado, Neville se revela um bruxo corajoso e leal, disposto a enfrentar qualquer perigo para proteger seus amigos.",
        link: "https://en.wikipedia.org/wiki/Neville_Longbottom",
        tags: "neville longbottom grifinória grifinoria "
    },
    {
        
        titulo: "Draco Malfoy",
        classificacao:" Sonserina" ,
        descricao: "Draco Malfoy é um bruxo puro-sangue, rival de Harry Potter desde o primeiro ano em Hogwarts. Proveniente de uma família rica e com fortes laços com Lord Voldemort, Draco é arrogante, preconceituoso e busca constantemente humilhar aqueles que ele considera inferiores",
        link: "https://pt.wikipedia.org/wiki/Draco_Malfoy",
        tags: "malfoy sonserina"
         
    },
    {
    
        titulo: "Tom Riddle",
        classificacao:" Sonserina" ,
        descricao: "Tom Marvolo Riddle, mais conhecido como Lord Voldemort, é o principal antagonista da saga Harry Potter. Um bruxo extremamente poderoso e obssecado pela imortalidade, ele busca dominar o mundo mágico, eliminando aqueles que ele considera impuros.",
        link: "  https://harrypotter.fandom.com/pt-br/wiki/Tom_Riddle",
          tags: "riddle sonserina"
    },
    {
        
        titulo: "Regulus Black",
        classificacao:"Sonserina",
        descricao:"Regulus Black, irmão mais novo de Sirius Black, era um Sonserino puro-sangue e inicialmente um seguidor de Lord Voldemort. No entanto, após se dar conta dos horrores cometidos pelo Lorde das Trevas, Regulus tomou uma decisão corajosa e arriscada: roubou uma das Horcruxes de Voldemort e a substituiu por um objeto falso, planejando sua destruição.",
        link: "https://harrypotter.fandom.com/pt-br/wiki/R%C3%A9gulo_Black",
        tags: "regulus black sonserina "
    },
    {
        
        titulo: "Severus Snape",
        classificacao:"Sonserina",
        descricao:"Severus Snape é um personagem complexo e enigmático do universo Harry Potter. Professor de Poções em Hogwarts, ele é conhecido por sua personalidade fria e sarcástica, especialmente com Harry Potter.",
        link: "https://pt.wikipedia.org/wiki/Severus_Snape",
        tags: "severus sonserina"
    },
    {
    
        titulo: "Dolores Umbridge",
        classificacao:"Sonserina",
        descricao:"Dolores Umbridge é uma das vilãs mais odiadas da saga Harry Potter. Uma bruxa manipuladora e cruel, ela ascende ao poder em Hogwarts no quinto livro, impondo um regime de terror e repressão.",
        link: "https://en.wikipedia.org/wiki/Dolores_Umbridge",
        tags: "dolores sonserina"
    },
    {
        titulo: "Luna Lovegood",
        classificacao:" Corvinal",
        descricao:"Luna Lovegood é uma personagem adorável e excêntrica da saga Harry Potter. Aluna da casa Corvinal, ela é conhecida por sua imaginação fértil, sua crença em criaturas mágicas e sua visão única do mundo.",
        link: "harrypotter.fandom.com/pt-br/wiki/Luna_Lovegood",
        tags: "luna lovegood corvinal"

    },
    {

        titulo: "Cho-Chang",
        classificacao:"Corvinal",
        descricao:"Cho Chang é uma personagem que desperta a curiosidade de muitos fãs da saga Harry Potter. Apanhadora do time de Quadribol da Corvinal, ela é conhecida por sua beleza e habilidade no esporte.",
        link: "https://harrypotter.fandom.com/pt-br/wiki/Cho_Chang",
        tags: "chochang corvinal"

    },
    {

        titulo: "Padma Patil",
        classificacao:"Corvinal",
        descricao:"Padma Patil é uma das gêmeas Patil, aluna da casa Corvinal em Hogwarts. Apesar de muitas vezes ser ofuscada pela irmã, Parvati, Padma possui uma personalidade distinta e um papel importante na história de Harry Potter.",
        link: "https://harrypotter.fandom.com/pt-br/wiki/Padma_Patil",
        tags: "padma corvinal"

    },
    {
        titulo: "Cedric Diggory",
        classificacao:" Lufa-Lufa",
        descricao:"Cedric Diggory é um personagem que, apesar de ter um papel relativamente curto na saga Harry Potter, deixou uma marca profunda nos corações dos fãs. Representante da casa Lufa-Lufa, ele é conhecido por sua lealdade, honra e espírito esportivo.",
        link: "https://harrypotter.fandom.com/pt-br/wiki/Cedrico_Diggory#:~:text=Cedrico%20Diggory%20(setembro%2Foutubro%20de,para%20a%20Casa%20Lufa%2DLufa.",
        tags: "cedric lufa lufa"

    },
    {
        titulo: "Nymphadora Tonks",
        classificacao:" Lufa-Lufa",
        descricao:"Nymphadora Tonks, também conhecida como Tonks, é uma personagem divertida e versátil da saga Harry Potter. Uma metamorfa talentosa da casa Lufa-Lufa, ela é conhecida por sua capacidade de mudar sua aparência à vontade.",
        link: "https://harrypotter.fandom.com/pt-br/wiki/Ninfadora_Tonks#:~:text=Tonks%20come%C3%A7ou%20seu%20primeiro%20ano,sangue%20da%20Casa%20dos%20Black.",
        tags: "nymphadora tonks lufa lufa "

    },
    {
        
        titulo: "Newt Scamander",
        classificacao:" Lufa-Lufa",
        descricao:"Newt Scamander é um personagem encantador e excêntrico do universo de Harry Potter, introduzido na série de filmes Animais Fantásticos e Onde Habitam. Um magizoólogo renomado, Newt dedica sua vida ao estudo e à proteção de criaturas mágicas.",
        link: "https://harrypotter.fandom.com/pt-br/wiki/Newton_Scamander",
        tags: "scamander lufa lufa"

    },















];