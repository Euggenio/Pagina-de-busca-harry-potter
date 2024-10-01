function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML =  "<p style='color: white;'>Nada foi encontrado. Você precisa digitar o nome do bruxo ou uma das quatro casas de Hogwarts</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let classificacao = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        classificacao = dado.classificacao.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || classificacao.includes(campoPesquisa) || descricao.includes(campoPesquisa)   || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
              <div class="item-resultado">
        
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                  <p class="classificacao-meta">${dado.classificacao}</p>
                <p class="descricao-meta">${dado.descricao}</p>

                
                 <a href=${dado.link}><button style="background: #4647AD; border-radius: 6px; padding: 11px; cursor: pointer; color: #F8FEF8; border: none; font-size: 16px;">Mais informações</button>
                </a>
            </div>
       


        `;
        }
    }

    if (!resultados) {
        resultados = "<p style='color: white;'>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}