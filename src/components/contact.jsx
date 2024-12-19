import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact({ icon, name, text,conection, link }) {
    return (
        <>
            <div className="shadow-xl px-5 py-14 flex items-center justify-center flex-col text-center gap-5 w-80">
                <div className='w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={icon} className='text-green-500 text-2xl animate-pulse'/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-medium mb-5 text-lg'>{name}</span>
                    {link ? (
                        <a href={conection} target='_blank' className="text-blue-500 text-lg">
                            {text}
                        </a>
                    ) : (
                        <p className='text-lg'>{text}</p>
                    )}
                </div>
            </div>
        </>
    );
}
export default Contact;
