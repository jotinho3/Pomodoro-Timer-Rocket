import { Play } from "phosphor-react";
import { ButtonCountdownStyled, CountdownContainerStyled, FormContainerStyled, HomeContainerStyled, MinutesAmountInput, Separator, TaskInput } from "./styles";
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

  const {register, handleSubmit, watch, resetField} = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
       task: '',
       minutesAmount: 0,

    }
  })



  function handleCreateNewCycle(data: any) {
    console.log(data)
    resetField('task');

  }

  const task = watch('task')
  const isSubmitDisabled = !task
    
  return (
    <motion.div 
    initial={{scale: '0%'}}
    animate={{scale: '100%', transition: { duration: 0.2}}}
    exit={{opacity: '0%'}}
    > 
    <HomeContainerStyled>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainerStyled>
          <label htmlFor="task">Vou trabalhar em:</label>
          <TaskInput 
          id="task" 
          type="text"
          placeholder="Dê um nome para o seu projeto"
          {...register('task')}

           />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
           id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            defaultValue={5}
            {...register('minutesAmount', {valueAsNumber: true})}
            />

          <span>minutos</span>
        </FormContainerStyled>


        <CountdownContainerStyled>
          <span> 0 </span>
          <span> 0 </span>
          <Separator> : </Separator>
          <span> 0 </span>
          <span> 0 </span>
        </CountdownContainerStyled>

        <ButtonCountdownStyled disabled={isSubmitDisabled} type="submit">
          <Play size={25} /> Começar 
        </ButtonCountdownStyled>
      </form>
    </HomeContainerStyled>
    </motion.div>
  );
}
