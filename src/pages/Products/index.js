import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function Products(){
    return (
        <div>
            <Header/>
            <Menu active="products"/>
            <Banner/>
            Página de produtos
        </div>
    );
}