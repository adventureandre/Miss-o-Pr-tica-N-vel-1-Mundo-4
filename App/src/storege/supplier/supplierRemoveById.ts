import AsyncStorage from "@react-native-async-storage/async-storage";
import { supplierGetAll } from "./supplierGetAll";
import { SUPPLIERS_COLLECTION } from "../storegeConfig";

export async function suppliersRemoveById (supplierId: string){
    try {
        const supplierdata = await supplierGetAll();
        const supplierfilter = supplierdata.filter(supplier => supplier.id !== supplierId);

        if (!supplierfilter) {
            new Error("erro ao buscar o fornecedor");
        }

        await AsyncStorage.setItem(SUPPLIERS_COLLECTION,JSON.stringify(supplierfilter));

    } catch (error) {
        throw error
    }
}