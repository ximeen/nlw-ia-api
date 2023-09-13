import {fastify} from 'fastify'
import { promptsRoutes } from './promptsRoutes'

export const app =fastify()

app.register(promptsRoutes)
