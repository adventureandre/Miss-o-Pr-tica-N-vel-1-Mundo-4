import AsyncStorage from "@react-native-async-storage/async-storage";
import { SUPPLIERS_COLLECTION } from "../storegeConfig";
import { supplierGetAll } from "./supplierGetAll"
import { SuppliersProps } from "@screens/Suppliers";

export async function supplierCreate(newSupplier: SuppliersProps) {
    try {
        const storedSupplier = await supplierGetAll();

        const supplierExists = storedSupplier.find(supplier => supplier.name === newSupplier.name);

        if (supplierExists) {
            throw new Error('Já existe um Fornecedor cadastrado com esse nome.');
        }

        const storage = JSON.stringify([...storedSupplier, newSupplier])
        await AsyncStorage.setItem(SUPPLIERS_COLLECTION, storage)


    } catch (error) {
        throw error

    }
}