import { ReactNode, createContext, useState, useReducer, useEffect } from "react";
import { produce } from 'immer'
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
    task: string
    minutesAmount: number
}

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
  }
  


interface CyclesContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number;
    markCurrentCycleAsFinished: () => void;
    setSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;
    
  
  
  
  }

interface CyclesContextProviderProps {
    children: ReactNode;
}
  
interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider( { children }: CyclesContextProviderProps ) {
    
  const [cyclesStateData, dispatch] = useReducer((state: CyclesState, action: any) => {

    switch(action.type) {
      case 'ADD_NEW_CYCLE':

        // return {
        //   ...state,
        //   cycles: [...state.cycles, action.payload.newCycle],
        //   activeCycleId: action.payload.newCycle.id,
        // }

        return produce(state, (draft) => {
          draft.cycles.push(action.payload.newCycle)
          draft.activeCycleId = action.payload.newCycle.id
        })


      case 'INTERRUPT_CURRENT_CYCLE': {

      // return {
      //   ...state,

      //   cycles: state.cycles.map(cycle => {
      //     if (cycle.id === state.activeCycleId) {
      //       return {...cycle, interruptedDate: new Date()}
      //     } else {
      //       return cycle
      //     }
    
      //   }),

      //   activeCycleId: null,
      // }

      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()


      })

    }

      case 'MARK_CURRENT_CYCLE_AS_FINISHED':{

      // return {
      //   ...state,

      //   cycles: state.cycles.map(cycle => {
      //     if (cycle.id === state.activeCycleId) {
      //       return {...cycle, finishedDate: new Date()}
      //     } else {
      //       return cycle
      //     }
    
      //   }),

      //   activeCycleId: null,
      // }

      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()


      })

      }


      default:
        return state
    }


  }, {
    cycles:[],
    activeCycleId: null,
  }, (initialState) => { // terceiro parâmetro que o useReducer pode receber, que é o valor que será o initial value caso o padrão não exista/ não foi criado
    const storedStateAsJSON = localStorage.getItem('@pomodoro-timer:cycles-state-v1.0.0');

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }


    return initialState


  }
  
  ) 


  const { cycles, activeCycleId  } = cyclesStateData

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {

    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })
  
  
  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesStateData)

    localStorage.setItem('@pomodoro-timer:cycles-state-v1.0.0', stateJSON)  //salvar o nome na local storage com o prefixo da aplicação e por ultimo a versão que a aplicação está, assim, bugs em versões diferentes são evitados

  }, [cyclesStateData])



  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  } 

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: {
        activeCycleId,
      },
    })


  }


  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })

    setAmountSecondsPassed(0)


  }

  function interruptCurrentCycle() {
    
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        activeCycleId,
      },
    })

  }
    

    return (
        <CyclesContext.Provider value={{activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed, createNewCycle, interruptCurrentCycle, cycles}}>

            { children }

        </CyclesContext.Provider>
    )
}