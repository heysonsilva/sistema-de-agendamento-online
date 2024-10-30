import logotipo from '../assets/logotipo.jpg'


export default function Header() {
    return (
        <>
        <header>
            <img src={logotipo} width={'100px'} heigth={'100px'} alt='Logo do Estabelecimento'/>
        </header>
        </>
    )
}