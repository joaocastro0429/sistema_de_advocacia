import { Router } from 'express';
import { CreateProcessController } from '../controllers/process.controller';
import { GetprocessController } from '../controllers/get.controller';
import { GetProcessById } from '../controllers/getById';
import { updateController } from '../controllers/update.controller';
import { deleteController } from '../controllers/delete.controller';
export const ProcessRouter = Router();
ProcessRouter.get("/process", GetprocessController);
ProcessRouter.get("/process/:id", GetProcessById);
ProcessRouter.post("/process", CreateProcessController);
ProcessRouter.put("/process/:id", updateController);
ProcessRouter.delete("/process/:id", deleteController);
//# sourceMappingURL=routes.js.map