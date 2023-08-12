import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { micromark } from 'micromark';

export class StTest extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--st-test-text-color, #000);
    }
  `;
  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    const content = micromark('# Hello!');
    console.log(content);
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <h3>markdown:</h3>
      <div>${content}</div>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
