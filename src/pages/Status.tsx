import { FormEvent, useState, KeyboardEvent } from "react";
import Header from "../components/Header";
import { Separator } from "../components/Separator";
import Tweet from "../components/Tweet";

import "./Status.css";

const defaultAnswers = [
  "Não concordo e nem discordo, muito pelo contrário",
  "Você não está errado, errado é quem te dá a razão",
  "Você é um poeta, mas quando está calado!",
];

export default function Status() {
  const [newAnswers, setNewAnsrwers] = useState("");
  const [answers, setAnswers] = useState(defaultAnswers);

  function createNewAnswers(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswers, ...answers]);
    setNewAnsrwers("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers]);
      setNewAnsrwers("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Algumas frases do league of legends são inspiradoras!" />

      <Separator />

      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/erickbrdev.png" alt="Erick Dev" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswers}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnsrwers(event.target.value);
            }}
          />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer, index) => {
        return <Tweet key={index} content={answer} />;
      })}
    </main>
  );
}
