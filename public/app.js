import { h, render } from "https://esm.sh/preact";
import htm from "https://esm.sh/htm";

// Initialize htm with Preact
const html = htm.bind(h);

import { Greeting } from "/greeting.js";

function App() {
  return html`
    <${Greeting} message="Hello, from the app!" />
  `;
}

function start() {
  render(html`<${App} />`, document.getElementById("app"));
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
