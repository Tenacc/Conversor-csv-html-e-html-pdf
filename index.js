var Reader = require('./Reader')

var leitor = new Reader()



async function main() {
    var dados = await leitor.Read('./planilha alvo.csv')
    console.log(dados)
}

main()