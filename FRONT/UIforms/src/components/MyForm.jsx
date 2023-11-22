import React, { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  const [respostas, setRespostas] = useState([
    {
      numero: "A",
      pergunta: "Comparece assiduamente ao trabalho?",
      pontuacao: "1",
    },
    {
      numero: "B",
      pergunta: "É pontual e permanece no local de trabalho em seu horário obrigatório?",
      pontuacao: "1",
    },
    {
      numero: "C",
      pergunta: "Informa imprevistos que impeçam o seu comparecimento ou cumprimento do horário?",
      pontuacao: "1",
    },
    {
      numero: "D",
      pergunta: "Justifica à chefia imediata as faltas imprevistas?",
      pontuacao: "1",
    },
    {
      numero: "E",
      pergunta: "Cumpre as determinações legais estabelecidas sobre as faltas (atestado médico, etc.)?",
      pontuacao: "1",
    },
    {
      numero: "F",
      pergunta: "Dedica-se a execução das tarefas, evitando interrupções e interferências alheias?",
      pontuacao: "1",
    },
  ]);

  const calcularSubtotal = (respostas) => {
    const subtotal = respostas.reduce((acc, resposta) => {
      let pontuacao = parseInt(resposta.pontuacao, 10);
      return acc + pontuacao;
    }, 0);
    return subtotal;
  };

  const handleInputChange = (index, event) => {
    const values = [...respostas];
    values[index].pontuacao = event.target.value;
    setRespostas(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Subtotal: ${calcularSubtotal(respostas)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Avaliação de Desempenho</h2>
      <h3>Assiduidade</h3>
      <table>
        {respostas.map((resposta, index) => (
          <tr key={index}>
            <td>
              <label for={`questao_${index}`}>{resposta.numero}. {resposta.pergunta}</label>
            </td>
            <td>
              <input
                type="number"
                name={`questao_${index}`}
                value={resposta.pontuacao}
                min="1"
                max="4"
                onChange={(event) => handleInputChange(index, event)}
              />
            </td>
          </tr>
        ))}
      </table>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
