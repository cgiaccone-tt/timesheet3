import Reddit from './RedditUseQuery';
import Joke from './JokeUseQuery';
import { useState } from 'react';
import RedditUseQuery from "./RedditUseQuery";
import JokeUseQuery from "./JokeUseQuery";

function RedditJokeUseQuery() {
    const [redditVisible, setRedditVisible] = useState(false);
    const [jokeVisible, setJokeVisible] = useState(false);

    return (
        <div>
            <div className="buttons">
                <button
                    onClick={() => setRedditVisible(prevRedditVisible => !redditVisible)}
                >
                    Toggle Reddit
                </button>
                <button onClick={() => setJokeVisible(prevJokeVisible => !jokeVisible)}>
                    Toggle Joke
                </button>
            </div>
            {redditVisible && <RedditUseQuery />}
            {jokeVisible && <JokeUseQuery />}
        </div>
    );
}

export default RedditJokeUseQuery;
