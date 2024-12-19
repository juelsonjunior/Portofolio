import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Navbar from './components/navbar';
import Project from './components/project';
import {
    faGlobe,
    faLocationDot,
    faPaperPlane,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

function App() {
    return (
        <div className="bg-gray-300">
            <div
                className="w-full h-lvh flex items-center justify-center"
                id="home"
            >
                <div className="fixed top-3 left-0 right-0 flex items-center justify-center z-10">
                    <Navbar />
                </div>
                <Home />
            </div>
            <div
                className="w-full h-lvh flex justify-between flex-col md:flex-row gap-12 p-5"
                id="about"
            >
                <About />
            </div>

            <div
                className="w-full h-lvh flex flex-col gap-5 p-5 my-36"
                id="project"
            >
                <Project />
            </div>
            <div className="w-full mb-24 flex flex-col gap-5 p-5" id="contact">
                <h3 className="text-4xl uppercase text-center font-bold">
                    Contacto
                </h3>
                <p className="text-center my-5">
                    Se entere em alguma coisa que viu deixa uma mensagem nas
                    redes abaixo para trocarmos uma ideia e quem sabe eu resolva
                    um dos seus prolemas..
                </p>

                <div className="flex items-center justify-center flex-col md:flex-row gap-5 ">
                    <Contact
                        icon={faLocationDot}
                        name={'Endereço'}
                        text={'Luanda, Angola'}
                        link={false}
                    />
                    <Contact
                        icon={faPhone}
                        name={'Contacto'}
                        text={'(+244) 949 489 473'}
                        conection={
                            'https://wa.me/949489473?text=Olá Juelson Júnior como estás'
                        }
                        link={true}
                    />
                    <Contact
                        icon={faPaperPlane}
                        name={'Email'}
                        text={'juelsonjunior27@gmail.com'}
                        conection={'mailto:juelsonjunior27@gmail.com'}
                        link={true}
                    />
                    <Contact
                        icon={faGlobe}
                        name={'GitHub'}
                        text={'Juelson Júnior'}
                        conection={'https://github.com/juelsonjunior'}
                        link={true}
                    />
                </div>
            </div>

            <div className="bg-slate-800 py-5">
                <p className="text-center text-white">
                    Todos os direitos reservados
                </p>
            </div>
        </div>
    );
}

export default App;
