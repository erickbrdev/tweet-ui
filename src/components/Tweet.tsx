import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

interface TweetProps {
  content: string;
}

export default function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/erickbrdev.png" alt="Erick Dev" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Erick Dev</strong>
          <span>@erickdev</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            10
          </button>

          <button>
            15
            <ArrowClockwise />
          </button>
          <button>
            9
            <Heart />
          </button>
        </div>
      </div>
    </Link>
  );
}
