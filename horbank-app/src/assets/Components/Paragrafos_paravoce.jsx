

function Paragrafos({image, titulo, descricao}){
    return(
        <div className="content-center my-14 ml-4">
            <div className="bg-[rgb(20,31,130)] w-16 justify-center flex rounded-lg mb-2">
            <img src={image} className='w-14 py-2 px-2'/>
            </div>
            
            <p className='flex font-alexandria text-3xl mb-2'>{titulo}</p>
            <p className='font-roboto-flex text-[2vh]'>{descricao}</p>
            <a href="#" className='text-blue-500 font-normal text-[2vh] underline decoration-solid hover:text-blue-700'>Saiba mais</a>
        </div>
    )
}

export default Paragrafos