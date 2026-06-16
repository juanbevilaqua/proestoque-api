import { Router } from "express";
import { ProdutoController } from "../controllers/produto.controller";
import { autenticar } from "../middlewares/auth";

const router = Router();
const controller = new ProdutoController();

// Aplicar o middleware autenticar em TODAS as rotas deste router
// router.use() aplica para todas as rotas declaradas DEPOIS dele
router.use(autenticar);
// A partir daqui, TODA requisição para /api/produtos precisa de JWT válido

router.get("/",        controller.listar.bind(controller));
router.get("/:id",     controller.buscarPorId.bind(controller));
router.post("/",       controller.criar.bind(controller));
router.put("/:id",     controller.atualizar.bind(controller));
router.delete("/:id",  controller.deletar.bind(controller));

// Mesma coisa para categorias (readonly, mas ainda privada)
export { router as produtoRouter };