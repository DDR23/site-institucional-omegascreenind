import ButtonAtv from '../../buttonAtv/ButtonAtv'
import './index.scss'

export default function Cta() {
  return (
    <>
      <div className="cta">
        <h1>Quer ter uma vida com mais cor e intensidade?</h1>
        <h2>Inscreva-se já no curso Estampador de Sucesso</h2>
        <ButtonAtv link={process.env.NEXT_PUBLIC_URL_ESTAMPADOR_DE_SUCESSO} target="_blank" largura='65rem' nome="Quero me tornar um Estampador de Sucesso" />
      </div>
    </>
  )
}