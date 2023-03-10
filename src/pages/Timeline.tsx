import Header from "../components/Header";
import { Separator } from "../components/Separator";
import Tweet from "../components/Tweet";
import React, { useState, FormEvent, KeyboardEvent } from "react";

import "./Timeline.css";

const tweets = [
  "O coração é o músculo mais forte! - Braum",
  "O ego sempre deixa todos de joelhos. - Camille",
  "Posso falhar, mas não vou desistir. - Ryze",
  "Se estiverem esperando que eu desista, é bom esperarem sentados. - Poppy",
];

let newTweets = ''

export default function TimeLine() {
  const [newTweet, setNewTweet] = useState('');
  const [tweet, setTweet] = useState(tweets);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweet([newTweet, ...tweet])
    setNewTweet("")
  }


  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweet([newTweet, ...tweet])
      setNewTweet("")
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/erickbrdev.png" alt="Erick Dev" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)              
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweet.map((tweets, index) => {
        return <Tweet key={index} content={tweets} />;
      })}
    </main>
  );
}
