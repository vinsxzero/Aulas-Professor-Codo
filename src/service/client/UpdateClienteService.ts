import { IClientRequest } from "../../interface/IClientRequest";
import { hash } from "bcryptjs";

class UpdateClientRequest{
    async execute({name, email, cpf, address, phone}:IClientRequest){
        if (!name){
            throw new Error("Este cliente não consta no banco de dados")
        }
        if (!cpf){
            throw new Error("Este cliente não consta no banco de dados")
        }
        if (!address){
            throw new Error("Este cliente não consta no banco de dados")
        }
        if (!phone){
            throw new Error("Este cliente não consta no banco de dados")
        }
        var vclient = {
            name: name, email: email, cpf: cpf, address: address, phone: phone
        }
        return{message:"Registro incluído com sucesso"}
    }
}
export {UpdateClientRequest}