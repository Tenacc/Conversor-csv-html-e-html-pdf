var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')
var HtmlParser = require('./HtmlParser')
var Writer = require('./Writer')

var leitor = new Reader()
var escritor = new Writer()


async function main() {
    var dados = await leitor.Read('./planilha alvo.csv')
    

    var dadosProcessados = Processor.Process(dados)

    var tabela = new Table(dadosProcessados)

    var html = await HtmlParser.Parse(tabela)

    escritor.Write('htmlgerado.html',html)
}

main()