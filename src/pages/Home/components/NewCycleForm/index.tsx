import { useContext, useEffect } from 'react'
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
  const {
    activeCycle,
    DecrementMinutesAmount,
    IncrementMinutesAmount,
    valueInputAmountMinutes,
  } = useContext(CyclesContext)
  const { register, setValue } = useFormContext()

  function handleDecrementMinutesAmount() {
    DecrementMinutesAmount()
  }

  function handleIncrementMinutesAmount() {
    IncrementMinutesAmount()
  }

  useEffect(() => {
    function changeMinutesAmountValue() {
      setValue('minutesAmount', valueInputAmountMinutes)
    }

    changeMinutesAmountValue()
  }, [setValue, valueInputAmountMinutes])

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
