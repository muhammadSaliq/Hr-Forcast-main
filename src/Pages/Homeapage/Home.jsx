import Navbars from "../../Ccomponents/Header/Navbar/Navbars";
import Section2 from "../../Ccomponents/Main/Home Component/Section2/Section2";
import Footer from "../../Ccomponents/Footer/Footer";
import Section3 from "../../Ccomponents/Main/Home Component/Sectiion3/section3";
import Section4 from "../../Ccomponents/Main/Home Component/Section4/section4";
import Section5 from "../../Ccomponents/Main/Home Component/Section5/section5";
import Subimage from "../../Ccomponents/Main/Home Component/Subimage/Subimage";
const Home = () => {

    return (
        <>
        <Navbars />
        <Subimage/>
        <Section2 />
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
        </>
    )
};
export default Home;