import Celular from '../images/homem-app.png'

function Aplicativo(){
    return(
        <>
        <div className='flex justify-center m-auto mt-32 bg-[rgb(20,31,130)] w-full'>

            <div className='flex flex-col pt-60 pr-10 pl-16'>
            <p className='text-white font-alexandria text-5xl w-auto pb-10'>Horbank na palma da sua mão</p>
            <p className='text-white font-roboto text-2xl w-auto pr-20 flex'>Facilite o seu dia a dia usando o App Horbank. Simples e fácil de usar, para todos os momentos e em todos os lugares.</p>
            <a href="#" className='text-blue-200 font-normal text-xl underline decoration-solid mt-10 hover:text-blue-400'>Saiba mais</a>
            </div>

            <img className='m-auto flex w-6/12 mx-5 py-14 pr-10' src={Celular} alt="Homem segurando celular com aplicativo Horbank" />
        </div>
        </>
        
    )
}

export default Aplicativo