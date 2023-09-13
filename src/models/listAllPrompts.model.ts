import {prisma} from '../lib/prisma'

export async function listAllPromptsModel(){
  const prompts = await prisma.prompt.findMany()
  return {prompts}
}