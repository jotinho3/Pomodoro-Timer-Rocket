import { Play } from "phosphor-react";
import { ButtonCountdownStyled, CountdownContainerStyled, FormContainerStyled, HomeContainerStyled, MinutesAmountInput, Separator, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainerStyled>
      <form action="">
        <FormContainerStyled>
          <label htmlFor="task">Vou trabalhar em:</label>
          <TaskInput id="task" type="text" placeholder="Dê um nome para o seu projeto"/>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput id="minutesAmount" type="number" placeholder="00" step={5} min={5} max={60} defaultValue={5}/>

          <span>minutos</span>
        </FormContainerStyled>


        <CountdownContainerStyled>
          <span> 0 </span>
          <span> 0 </span>
          <Separator> : </Separator>
          <span> 0 </span>
          <span> 0 </span>
        </CountdownContainerStyled>

        <ButtonCountdownStyled type="submit">
          <Play size={25} /> Começar 
        </ButtonCountdownStyled>
      </form>
    </HomeContainerStyled>
  );
}
