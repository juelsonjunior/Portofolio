function About() {
    return (
        <>
            <div className="bg-slate-800 w-full md:w-1/2 h-full">
            <img src="../../foto.png" alt="" className="h-full object-cover"/></div>
            <div className="w-full md:w-1/2">
                <h3 className="text-4xl uppercase font-bold mt-14 text-center md:text-left">
                    Sobre mim
                </h3>
                <p className="my-5 text-justify">
                    Profissional qualificado como Desenvolvedor FullStack, com
                    sólida experiência em criação de APIs RESTFULL, elaboração
                    de interfaces intuitivas e desenvolvimento de websites com
                    alto desempenho. Movido pelo desejo de integrar a equipe,
                    trazendo expertise, dedicação e comprometimento em alavancar
                    soluções eficazes.
                </p>
                <div className="flex flex-col gap-8 text-lg">
                    <div className="flex gap-10">
                        <span className="font-bold">Nome:</span>
                        <span className="">Juelson Junior</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="font-bold">Endereço:</span>
                        <span className="">Luanda, Angola</span>
                    </div>
                    <div className="flex gap-11">
                        <span className="font-bold">Email:</span>
                        <span className="">juelsonjunior27@gmail.com</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="font-bold">Telefone:</span>
                        <span className="">(+244) 949 489 473</span>
                    </div>
                </div>
                <button className="mt-10 bg-slate-900 py-4 px-14 rounded-full text-green-500 uppercase">
                    <a href="https://drive.google.com/file/d/1nB-XpIaL0sED7NfSZ1ttQgMTGc5y4MLB/view?usp=drive_link" target="_blank">
                        Baixar CV
                    </a>
                </button>
            </div>
        </>
    );
}

export default About;
