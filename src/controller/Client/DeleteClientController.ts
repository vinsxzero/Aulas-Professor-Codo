import { Request, Response } from "express";

class DeleteClientController{
    async handle(request:Request, response: Response){
        const id = request.params.id;
        return response.json({message:"Resultado deletado com sucesso!"})
    }
}
export {DeleteClientController}