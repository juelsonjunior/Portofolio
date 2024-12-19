function CardProject({ nameProject, img, description }) {
    return (
        <>
            <div className="bg-slate-800 col-span-1 row-span-1 effect-project relative">
                <img
                    src={img}
                    alt={nameProject}
                    className="w-full object-cover h-60"
                />
                <div className="absolute top-0 flex-col items-center justify-center text-white bg-slate-800 bg-opacity-85 py-3 hidden info-project w-full h-full">
                    <h2 className="text-lg tracking-widest">{nameProject}</h2>
                    <p className="text-center text-xs px-2 font-bold">{description}</p>
                </div>
            </div>
        </>
    );
}
export default CardProject;
