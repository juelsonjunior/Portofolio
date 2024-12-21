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
                    Sou estudante de Desenvolvimento FullStack com uma certa inclinação para o back-end já criei e consumi algumas APIs e sigo estudando, por gostar de trabalhar com a parte visual das coisas optei por estudar o melhor dos dois mundos já faz alguns anos que estudo programação mais de forma firme e focada faz uns mêses e nesse periodo de tempo pode estudar tecnologias como <strong>JavaScript, TypeScript, Node Js, React JS</strong> e alguns framework e libs e pode conhecer muita gente legal estudando programação, se estiver interessado em desenvolver alguma coisa comigo é só chamar no privado.
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
            </div>
        </>
    );
}

export default About;
