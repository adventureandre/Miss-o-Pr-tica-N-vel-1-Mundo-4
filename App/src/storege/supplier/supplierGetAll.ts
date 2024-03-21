import AsyncStorage from "@react-native-async-storage/async-storage";
import { SUPPLIERS_COLLECTION } from "../storegeConfig";
import { SuppliersProps } from "@screens/Suppliers";


export async function supplierGetAll() {
    try {
        const storege = await AsyncStorage.getItem(SUPPLIERS_COLLECTION)

        const suppliers: SuppliersProps[] = storege ? JSON.parse(storege) : [];

        return suppliers;

    } catch (error) {
        throw error
    }

}