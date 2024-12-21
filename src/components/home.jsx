import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    return (
        <>
            <div className="text-center relative">
                <p className="uppercase">Olá! eu sou </p>
                <h1 className="text-7xl font-bold my-2">Juelson Júnior</h1>
                <p className="text-2xl font-bold text-green-500">
                    Desenvolvedor FullStack
                </p>
                <button className="mt-6 bg-slate-900 py-4 px-14 rounded-full text-green-500 ">
                    <a href="https://drive.google.com/file/d/1nB-XpIaL0sED7NfSZ1ttQgMTGc5y4MLB/view?usp=drive_link" target="_blank">
                        Visualizar CV
                    </a>
                </button>

                <div className="absolute left-0 right-0 -bottom-32">
                    
                    <FontAwesomeIcon icon={faAngleDoubleDown} className="text-slate-800 animate-bounce text-2xl"/>
                </div>
            </div>
        </>
    );
}
export default Home;
