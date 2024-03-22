import AsyncStorage from "@react-native-async-storage/async-storage";
import { supplierGetAll } from "./supplierGetAll";
import { suppliersGetById } from "./supplierGetById";
import { SUPPLIERS_COLLECTION } from "../storegeConfig";

export async function supplierSetImage(supplierId: string, logo: string) {
    try {
        const supplierFind = await suppliersGetById(supplierId);
        supplierFind.logo = `data:image/png;base64,${logo}`;

        const storedSuppliers = await supplierGetAll();

        const supplierIndex = storedSuppliers.findIndex(s => s.id === supplierId);
        if (supplierIndex === -1) {
            throw new Error("Fornecedor não encontrado.");
        }

        storedSuppliers[supplierIndex] = supplierFind;

        await AsyncStorage.setItem(SUPPLIERS_COLLECTION, JSON.stringify(storedSuppliers));

    } catch (error) {
        throw error;
    }

}