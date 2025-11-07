import {db} from "../config/db.js"


export async function criarAvaliacoes(req, res) {
  try {
    const {id, nome, titulo, avaliacao} = req.body;
    if (!id || !nome || !titulo || !avaliacao)
      return res.status(400).json({ erro: "Campos obrigatórios" });

    await db.execute(
      "INSERT INTO avaliacoes (id, nome, titulo, avaliacao) VALUES (?, ?, ?)",
      [id, nome, titulo, avaliacao]
    );

    res.json({ mensagem: "Avaliação realizada" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

export async function listarAvaliacoes(req, res) {
  try {
    const {id, nome, titulo, avaliacao} = req.body;
    if (!id || !nome || !titulo || !avaliacao)
      return res.status(400).json({ erro: "Campos obrigatórios" });

    await db.execute(
      "INSERT INTO avaliacoes (id, nome, titulo, avaliacao) VALUES (?, ?, ?)",
      [id, nome, titulo, avaliacao]
    );

    res.json({ mensagem: "Avaliações listadas" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};