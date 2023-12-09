import { h } from "https://esm.sh/preact";
import { useState } from "https://esm.sh/preact/hooks";
import htm from "https://esm.sh/htm";

// Initialize htm with Preact
const html = htm.bind(h);

function Greeting({ message }) {
  const [counter, setCounter] = useState(0);

  return html`
    <p>${ message }</p>
    <p>Counter: ${ counter }</p>
    <p>
      <button
        type="button"
        onClick=${() => setCounter(counter + 1)}
      >
        Update counter
      </button>
    </p>
  `;
}

export {
  Greeting,
}
