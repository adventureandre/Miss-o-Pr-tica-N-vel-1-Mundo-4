import { supplierGetAll } from "./supplierGetAll";

export async function suppliersGetById(supplierId: string) {
    try {
        const supplierdata = await supplierGetAll();
        const supplierFind = supplierdata.filter(supplier => supplier.id === supplierId);

        if (!supplierFind) {
            new Error("erro ao buscar o fornecedor");
        }

        return supplierFind[0];

    } catch (error) {
        throw error
    }
}