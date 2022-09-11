import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCycleAction,
  InterruptedCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { Cycle, cycleReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  valueInputAmountMinutes: number | null
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (second: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
  IncrementMinutesAmount: () => void
  DecrementMinutesAmount: () => void
  ResetMinutesAmount: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextData)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cycleReducer,
    {
      cycles: [],
      activeCycleId: null,
      valueInputMinutesAmount: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@iginite-timer:cycles-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        cycles: [],
        activeCycleId: null,
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((clycle) => clycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecoundsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })
  const [valueInputAmountMinutes, setValueInputAmountMinutes] = useState<
    null | number
  >(null)

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecoundsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch(InterruptedCurrentCycleAction())
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecoundsPassed(seconds)
  }

  function IncrementMinutesAmount() {
    setValueInputAmountMinutes((state) => {
      if (state === 60) {
        return 60
      }

      return state! + 5
    })
  }

  function DecrementMinutesAmount() {
    setValueInputAmountMinutes((state) => {
      if (state === 0) {
        return 0
      }

      if (state === null) {
        return 0
      }

      return state! - 5
    })
  }

  function ResetMinutesAmount() {
    setValueInputAmountMinutes((state) => {
      return (state = null)
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@iginite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        cycles,
        DecrementMinutesAmount,
        IncrementMinutesAmount,
        valueInputAmountMinutes,
        ResetMinutesAmount,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
