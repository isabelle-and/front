import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function Home(){
    return (
        <div>
        <Header/>
        <Menu active = "home"/>

        <Banner/>
        </div>
    );
}