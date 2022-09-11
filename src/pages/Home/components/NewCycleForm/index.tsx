import { useContext, useState, useEffect } from 'react'
import {
  FormContainer,
  MinutesAmountContainer,
  MinutesAmountInput,
  TaskInput,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../context/CyclesContext'

import { Plus, Minus } from 'phosphor-react'
export function NewCycleForm() {
  const [minutesAmount, setMinutesAmount] = useState<number | null>(null)
  const { activeCycle } = useContext(CyclesContext)
  const { register, setValue } = useFormContext()

  function handleIncrementMinutesAmount() {
    setMinutesAmount((state) => {
      if (state === 60) {
        return 60
      }

      return state! + 5
    })
  }

  function handleDecrementMinutesAmount() {
    setMinutesAmount((state) => {
      if (state === 0) {
        return 0
      }
      if (state === null) {
        return 0
      }
      return state! - 5
    })
  }
  console.log(minutesAmount)

  useEffect(() => {
    function changeMinutesAmountValue() {
      setValue('minutesAmount', minutesAmount)
    }

    changeMinutesAmountValue()
  }, [minutesAmount, setValue])

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-sugestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-sugestions"></datalist>

      <label htmlFor="minutesAmount">durante</label>

      <MinutesAmountContainer>
        <button type="button" onClick={handleDecrementMinutesAmount}>
          <Minus size={16} />
        </button>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <button type="button" onClick={handleIncrementMinutesAmount}>
          <Plus size={16} />
        </button>
      </MinutesAmountContainer>

      <span>minutos.</span>
    </FormContainer>
  )
}
