import Logo from '../images/Horbank.png'
import IconeEntrada from '../images/icon_entrada_branco.png'

function Header(){
    return(
        <header className='flex justify-between items-center text-white py-6 md:px-32 bg-[rgb(20,31,130)] drop-shadow-md'>

            <a href='#'>
                <img src={Logo} alt="Logo Horbank" className='w-32 hover:scale-105 transition-all' />
            </a>

            <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
                <li className='p-3 hover:text-sky-300 transition-all cursor-pointer font-roboto-flex text-[2vh] font-thin'>Início</li>
                <li className='p-3 hover:text-sky-300 transition-all cursor-pointer font-roboto-flex text-[2vh] font-thin'>Sobre nós</li>
                <li className='p-3 hover:text-sky-300 transition-all cursor-pointer font-roboto-flex text-[2vh] font-thin'>Para você</li>
                <li className='p-3 hover:text-sky-300 transition-all cursor-pointer font-roboto-flex text-[2vh] font-thin'>Investimentos</li>
            </ul>

            <div>
                <button className='hover:bg-blue-700 border-solid border-2 border-white transition-all py-1 px-6 rounded-lg mx-2 font-roboto-flex text-[2vh] font-thin'>Fazer Login<img src={IconeEntrada} className='w-9 pl-2 float-right'/></button>
                <button className='bg-white hover:bg-blue-500 hover:text-white text-blue-900 transition-all py-2 px-6 mx-2 rounded-lg font-roboto-flex text-[2vh] font-thin'>Abrir conta</button>
            </div>
        </header>
    )
}

export default Header