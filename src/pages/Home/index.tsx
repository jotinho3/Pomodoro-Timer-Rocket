import { HandPalm, Play } from "phosphor-react";
import {  HomeContainerStyled, StopButtonCountdownStyled , StartButtonCountdownStyled } from "./styles";
import { motion } from 'framer-motion'
import {  useContext } from 'react'
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { useForm, FormProvider } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from "../../contexts/CyclesContext";


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


export function Home() {

  const {createNewCycle, interruptCurrentCycle, activeCycle} = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
       task: '',
       minutesAmount: 5,

    }
  })

  const {handleSubmit, watch, resetField} = newCycleForm


  function handleCreateNewCylce(data: NewCycleFormData) {
    createNewCycle(data)
    resetField('task')

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
      <form action="" onSubmit={handleSubmit(handleCreateNewCylce)} >

        
           
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
        
        <Countdown />
       
        

      { activeCycle ? (
        <StopButtonCountdownStyled onClick={interruptCurrentCycle} type="button">
        <HandPalm size={25} /> Interromper 
      </StopButtonCountdownStyled>
      ) : (
        <StartButtonCountdownStyled disabled={isSubmitDisabled} type="submit">
        <Play size={25} /> Começar 
      </StartButtonCountdownStyled>
      )}
       
      </form>
    </HomeContainerStyled>
    </motion.div>
    
  );
}
