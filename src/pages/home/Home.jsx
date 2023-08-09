import './home.css'
import Header from "../../components/header/Header"
import AppearingComponent from "../../components/sideEffect/sideEffect"
import Horaires from "../../components/horaires/Horaires"

const Home = () => {
    return(
        <div className="homeContainer">
            <Header/>
            <AppearingComponent breakpoint={200} direction={'left'}  content={<Horaires/>} />
        </div>
        
    )
}

export default Home