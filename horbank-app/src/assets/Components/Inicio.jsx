import Cartao from '../images/mockup-cartao-sombra.png'

function Inicio(){
    return(
        <section className=' w-full h-auto justify-center items-center py-24 flex'>
            <div>
                <h1 className='font-["Alexandria"] text-blue-950 text-5xl font-medium w-auto leading-tight'>HORBANK, ONDE SUA <br />VIDA FINANCEIRA GANHA <br />NOVOS HORIZONTES</h1>
                <p className='text-[2vh] font-["Roboto-flex"] mt-3'>Em cada solução que oferecemos, tudo é pensado <br />para trazer novas possibilidades para você.</p>
                <button className='hover:bg-blue-500 transition-all bg-blue-600 text-white py-2 px-7 rounded-lg mt-5 font-roboto-flex text-[2vh] font-thin'>Abra sua conta grátis</button>
            </div>

            <img src={Cartao} alt="cartão azul e cartão branco"/>
        </section>
    )
}

export default Inicio