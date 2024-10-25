import MocaFeliz from '../images/moca-feliz.png'
import Paragrafos from '../Components/Paragrafos_paravoce.jsx'
import Bag from '../images/icon-bag.png'
import Cartao from '../images/credit-card-icon.png'
import Conta from '../images/conta-icon.png'

function ParaVoce(){
    return(
        <div className='flex justify-center w-[90%] m-auto mt-10'>
                <div className='w-1/3'>
                <img src={MocaFeliz} alt="Mulher feliz olhando o celular e segurando um cartão" />
                </div>
                <section className='w-[60%] ml-10'>
                    <Paragrafos image={Bag} titulo='Parcelamento de compras' descricao='Nosso app facilita suas compras, permitindo parcelar com flexibilidade e controle total, tudo de forma simples e segura.' />
                    <Paragrafos image={Cartao} titulo='Cartão Virtual ' descricao='Com o cartão virtual da Horbank, suas compras online ficam mais seguras e fáceis. Gere e gerencie pelo app de forma rápida, protegendo suas transações.' />
                    <Paragrafos image={Conta} titulo='Conta e PIX no Crédito' descricao='Use o limite do seu cartão de crédito para fazer PIX, transferindo dinheiro sem complicações e pagando na próxima fatura. Mais flexibilidade para suas finanças.' />
                </section>
        </div>
    )
}

export default ParaVoce