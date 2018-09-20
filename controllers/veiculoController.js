
exports.listarTodos = (req, res) => {
    res.json([
        {id: 1, marca: "FIAT", modelo: "UNO"},
        {id: 2, marca: "FIAT", modelo: "Palio"},
        {id: 3, marca: "VW", modelo: "Gol"},
    ]);
}

exports.listarUm = (req, res) => {
    res.json({
        id: 1,
        marca: "FIAT",
        modelo: "UNO"
    });
}

exports.salvar = (req, res) => {
    res.json({
        message: "Salvo"
    })
}

exports.alterar = (req, res) => {
    res.json({
        message: "Alterado"
    });
}

exports.deletar = (req, res) => {
    res.json({
        message: "Excluído"
    });
}