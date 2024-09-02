import { ISaleRequest } from "../../interface/ISaleRequest"
class UpdateSaleService{
    async execute({productId, clientID, userId, quantity, value}: ISaleRequest){
        if (!userId){
            throw new Error("Nao foi possível cadastrar")
        }
        if (!productId){
            throw new Error("N deu")
        }
        if(!clientID){
            throw new Error("Nao foi possivel cadastrar")
        }
    }
}
export{ UpdateSaleService }