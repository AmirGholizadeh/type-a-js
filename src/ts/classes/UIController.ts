import UIConfig from "../interfaces/UIConfig";
import UIInterface from "../interfaces/UIInterface";
export default class UIController implements UIInterface {
  private config: UIConfig;
  constructor(config: UIConfig) {
    this.config = config;
  }
  createCursor(speed: number): void {
    const cursor = document.createElement("span");
    cursor.id = this.config.cursorId;
    cursor.textContent = "|";
    cursor.setAttribute(
      "style",
      `animation:cursorAnimation ${speed / 100}s infinite;`
    );
    if (document.getElementById(this.config.cursorId))
      document.getElementById(this.config.cursorId).remove();
    document.getElementById(this.config.containerId).appendChild(cursor);
  }
  private createTextContainer(): void {
    const textContainer = document.createElement("span");
    textContainer.id = this.config.textContainerId;
    document.getElementById(this.config.containerId).appendChild(textContainer);
  }
  addText(text: string): void {
    const textContainer = document.getElementById(this.config.textContainerId);
    textContainer.textContent = `${textContainer.textContent}${text}`;
  }
  deleteText(): void {
    document.getElementById(
      this.config.textContainerId
    ).textContent = document
      .getElementById(this.config.textContainerId)
      .textContent.slice(
        0,
        document.getElementById(this.config.textContainerId).textContent
          .length - 1
      );
  }
  clear(): void {
    if (document.getElementById(this.config.cursorId))
      document.getElementById(this.config.cursorId).remove();
    if (document.getElementById(this.config.textContainerId))
      document.getElementById(this.config.textContainerId).remove();
  }
  createContainer(): void {
    const container = document.createElement("div");
    container.id = this.config.containerId;
    this.config.parentId.charAt(0) === "#"
      ? document
          .getElementById(
            this.config.parentId.slice(1, this.config.parentId.length)
          )
          .appendChild(container)
      : document.querySelector(this.config.parentId).appendChild(container);
    this.createTextContainer();
  }
}
