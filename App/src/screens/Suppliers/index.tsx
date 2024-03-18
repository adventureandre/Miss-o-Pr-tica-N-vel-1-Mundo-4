import { Header } from "@components/Header";
import { Container } from "./styles";
import { InfoSuppliers } from "@components/InfoSuppliers";
import EmpresaCard from "@components/EmpresaCard";
import ImgLogo from "@assets/favicon.png"
import { Button } from "@components/Button";

export function Suppliers(){

    return(
        <Container>
        <Header/>
        <InfoSuppliers/>
        <EmpresaCard logoSource={ImgLogo} companyName="Alfa Acessorios" companyDesc="Destruiçao de produtos e alimentos"/>
        <EmpresaCard logoSource={ImgLogo} companyName="Atende mais" companyDesc="novo"/>
        <EmpresaCard logoSource={ImgLogo} companyName="MillyArtesanatos" companyDesc="milly"/>
        
        <Button title="Cadastrar Fornecedor" type="PRIMARY"/>
        </Container>
    )
}