const mongoose = require ('mongoose');

const dadosSchema = new mongoose.Schema({
    dadosTabela: [[String]],
    dadosTabela2: [[String]],
    dadosTabela3: [[String]],
    dadosTabela4: [[String]],
    dadosTabela5: [[String]],
    dadosTabela6: [[String]],
    dadosTabela7: [[String]],
    dadosTabela8: [[String]],
    dadosTabela9: [[String]],
    dadosTabela10: [[String]],
    dadosTabela11: [[String]],
    anoAtual: String,
    anoAtual2: String,
    anoAtual3: String,
    anoAtual4: String,
    anoAtual5: String,
    anoAtual6: String,
    anoAtual7: String,
    anoAtual8: String,
    anoAtual9: String,
    anoAtual10: String,
    anoAtual11: String,
    clubeSelecionado1: String,
    clubeSelecionado2: String,
    clubeSelecionado3: String,
    clubeSelecionado4: String,
    clubeSelecionado5: String,
    clubeSelecionado6: String,
    clubeSelecionado7: String,
    clubeSelecionado8: String,
    clubeSelecionado9: String,
    clubeSelecionado10: String,
    clubeSelecionado11: String
});

const Dados = mongoose.model('Dados', dadosSchema);

module.exports = Dados;
