import { useContext } from 'react'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { useTheme } from '../../hooks/Theme'
import { CyclesContext } from '../../context/CyclesContext'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { Tooltip } from '../../components/Tooltip'

import { HandPalm, Play } from 'phosphor-react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no maximo 60 minutos.')
    .max(60, 'O ciclo precisa ser de no maximo 60 minutos.'),
})

type NewCicleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { createNewCycle, activeCycle, interruptCurrentCycle } =
    useContext(CyclesContext)
  const { theme } = useTheme()

  const newCycleForm = useForm<NewCicleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: undefined,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCicleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const minutesAmount = watch('minutesAmount')
  const isSubmitDisabled = !!minutesAmount && !!task
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountDownButton
            isDark={theme.title === 'dark'}
            type="button"
            onClick={interruptCurrentCycle}
          >
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        ) : isSubmitDisabled ? (
          <StartCountDownButton type="submit">
            <Play size={24} />
            Começar
          </StartCountDownButton>
        ) : (
          <Tooltip title="Preencha o nome e a duração antes de começar.">
            <StartCountDownButton type="submit" disabled>
              <Play size={24} />
              Começar
            </StartCountDownButton>
          </Tooltip>
        )}
      </form>
    </HomeContainer>
  )
}
