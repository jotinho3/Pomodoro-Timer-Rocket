import { HistoryContainer, HistoryList, Status } from "./styles";
import { motion } from "framer-motion";

export function History() {
  return (
    <motion.div
    initial={{scale: '0%'}}
    animate={{scale: '100%', transition: { duration: 0.2}}}
    exit={{opacity: '0%'}}
    >
      <HistoryContainer>
        <h1>Meu histórico</h1>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td><Status statusColor="green">Concluído</Status></td>
              </tr>

              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td><Status statusColor="yellow">Em andamento</Status></td>
              </tr>

              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td><Status statusColor="red">Interrompido</Status></td>
              </tr>

              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td><Status statusColor="green">Concluído</Status></td>
              </tr>

              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td><Status statusColor="green">Concluído</Status></td>
              </tr>

              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td><Status statusColor="green">Concluído</Status></td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>
    </motion.div>
  );
}
