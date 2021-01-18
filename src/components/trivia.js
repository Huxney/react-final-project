import { useState, useEffect } from "react";

function Trivia(props) {
  const [query, setQuery] = useState(props.interactive ? "" : props.query);
  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (!isNaN(parseInt(query))) {
        fetch(`http://numbersapi.com/${query}`)
          .then((value) => value.text())
          .then((value) => setDisplayMessage(value));
      } else if (query === "") {
        setDisplayMessage("Please provide a value!");
      } else {
        setDisplayMessage(`${query} is not a valid integer in this context.`);
      }
    }, 500);

    if (!props.interactive) {
      setTimeout(() => props.onComplete(), props.disappearAfter);
    }

    return () => clearTimeout(timeOutId);
  }, [query, props]);

  return props.interactive ? (
    <section style={{ maxWidth: "720px" }}>
      <h1 style={{ padding: "24px" }}>Number Trivia!</h1>
      <div className="input-group mb-3" style={{ padding: "24px" }}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Integer
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="256"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <p style={{ padding: "24px" }}>{displayMessage}</p>
    </section>
  ) : (
    <p style={{ padding: "24px" }}>{displayMessage}</p>
  );
}

export default Trivia;
