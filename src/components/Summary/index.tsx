import { SummaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
    </SummaryContainer>
  )
}
