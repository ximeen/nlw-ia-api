import {FastifyInstance} from 'fastify'
import { listAllPromptsController } from '../controllers/listAllPrompts.controller'

export async function promptsRoutes(app: FastifyInstance){
  app.get('/prompts', listAllPromptsController)
}
