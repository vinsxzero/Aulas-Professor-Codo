import {ICategoryRequest} from "../../interface/ICategoryRequest"

class UpdateCategoryService{
    async execute({name, description}:ICategoryRequest){

        if(!name){
            throw new Error("Essa categoria nao existe")
        }
        return { message: "Registro incluído com sucesso" }
    }
}
export {UpdateCategoryService}