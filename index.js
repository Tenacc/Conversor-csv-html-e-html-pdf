var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')

var leitor = new Reader()



async function main() {
    var dados = await leitor.Read('./planilha alvo.csv')
    

    var dadosProcessados = Processor.Process(dados)

    var tabela = new Table(dadosProcessados)

    console.log(tabela.header)
}

main()