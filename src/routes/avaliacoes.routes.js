import express from "express";

const router = express.Router();
import {criarAvaliacoes} from "../controllers/avaliacoes.controller.js"
import {listarAvaliacoes} from "../controllers/avaliacoes.controller.js";

router.post('/', criarAvaliacoes);
router.get('/', listarAvaliacoes);

export default router;

