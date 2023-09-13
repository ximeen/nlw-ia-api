import { listAllPromptsModel } from "../models/listAllPrompts.model";

export async function listAllPromptsController(){
  const prompt = await listAllPromptsModel()
  return prompt
}