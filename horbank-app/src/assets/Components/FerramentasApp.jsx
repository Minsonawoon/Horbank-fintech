import CelularApp from '../images/celular-com-app-fundo-branco.png'
import Paragrafos from '../Components/Paragrafos_paravoce.jsx'
import Protection from '../images/protection-icon.png'
import Robot from '../images/robot-icon.png'
import Pig from '../images/pig-icon.png'

function FerramentasApp(){
    return(
        <div className='flex justify-center w-[90%] m-auto mt-32'>
                <div className='w-[40vh] mr-20'>
                <img src={CelularApp} alt="Celular com aplicativo Horbank" />
                </div>
                <section className='w-[60%] ml-10'>
                    <Paragrafos image={Protection} titulo='Proteção garantida' descricao='Monitore em tempo real e ative as ferramentas de segurança que garantem proteção total para o seu cartão.' />
                    <Paragrafos image={Robot} titulo='HorbIA' descricao='A HorbIA é a inteligência artificial da Horbank. Ela analisa e sugere ações que ajudam a otimizar seus gastos, investimentos e planejamento.' />
                    <Paragrafos image={Pig} titulo='CDB Automático' descricao='Permite que você invista de forma simples e prática, com rendimento automático. Ideal para quem deseja investir sem complicação.' />
                </section>
        </div>
    )
}

export default FerramentasApp