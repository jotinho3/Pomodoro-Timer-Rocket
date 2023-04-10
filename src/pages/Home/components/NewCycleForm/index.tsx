import { FormContainerStyled, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import {useFormContext} from 'react-hook-form'
import { CyclesContext } from "../../../../contexts/CyclesContext";






export function NewCycleForm() {

  const {activeCycle} = useContext(CyclesContext)
  const { register } = useFormContext()
  


    return (
        <FormContainerStyled>
          <label htmlFor="task">Vou trabalhar em:</label>
          <TaskInput 
          id="task" 
          type="text"
          placeholder="Dê um nome para o seu projeto"
          disabled={!!activeCycle}
          {...register('task')}

           />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
           id="minutesAmount"
            type="number"
            step={5}
            min={5}
            max={60}
            defaultValue={5}
            disabled={!!activeCycle}
            {...register('minutesAmount', {valueAsNumber: true})}
            />

          <span>minutos</span>
        </FormContainerStyled>
    )
}