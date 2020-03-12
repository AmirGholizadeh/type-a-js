import typeConfig from "./interfaces/typeConfig";
import UIController from "./classes/UIController";
import UIConfig from "./interfaces/UIConfig";
import random from "./functions/random";
import UIInterface from "./interfaces/UIInterface";

export default class TypeJS {
  private config: typeConfig;
  private parentId: string;
  private uiConfig: UIConfig;
  private ui: UIInterface;
  private startPermission = true;
  private addPermissionF = false;
  private deletePermission = false;
  private addPermissionIn = false;
  // a variable to store splitted add characters from config variable(addText)
  private addTextArr: string[];
  // get the initText from the config and split to characters
  private initTextArr: string[];
  constructor(parentId: string, config: typeConfig) {
    this.config = config;
    this.parentId = parentId;
    this.addTextArr = this.config.add && this.config.add.text.split("");
    // Default values for the two config variable objects
    this.config.init.delay = !this.config.init.delay
      ? 1
      : this.config.init.delay;
    this.config.init.delayBetween = !this.config.init.delayBetween
      ? 50
      : this.config.init.delayBetween;
    this.config.cursorSpeed = !this.config.cursorSpeed
      ? 50
      : this.config.cursorSpeed;
    this.config.clearDelay = !this.config.clearDelay
      ? 1
      : this.config.clearDelay;
    if (this.config.delete) {
      this.config.delete.delay = !this.config.delete.delay
        ? this.config.init.delay
        : this.config.delete.delay;
      this.config.delete.delayBetween = !this.config.delete.delayBetween
        ? this.config.init.delayBetween
        : this.config.delete.delayBetween;
    }
    if (this.config.add) {
      this.config.add.delay = !this.config.add.delay
        ? this.config.init.delay
        : this.config.add.delay;
      this.config.add.delayBetween = !this.config.add.delayBetween
        ? this.config.init.delayBetween
        : this.config.add.delayBetween;
    }
    // use random numbers to avoid duplicate IDs
    this.uiConfig = {
      parentId: this.parentId,
      cursorId: `${random(0, 9999999999999)}`,
      containerId: `${random(0, 9999999999999)}`,
      textContainerId: `${random(0, 9999999999999)}`
    };
    this.ui = new UIController(this.uiConfig);
  }
  init(): void {
    this.typeIt();
  }
  private handle(): void {
    this.ui.createContainer();
    this.ui.createCursor(this.config.cursorSpeed);
    this.initTextArr = this.config.init.text.split("");
    window.setTimeout(() => {
      this.ui.createContainer();
      this.ui.createCursor(this.config.cursorSpeed);
      this.initTextArr.forEach((el: string, i: number) => {
        window.setTimeout(() => {
          this.ui.addText(el);
          // When it's ended writing
          if (i === this.config.init.text.length - 1) {
            if (this.config.delete) {
              window.setTimeout(() => {
                for (let i = 0; i < this.config.delete.count; i++) {
                  window.setTimeout(() => {
                    this.ui.deleteText();
                    if (i === this.config.delete.count - 1 && this.config.add)
                      // let the addtext operation start
                      this.addPermissionF = true;
                  }, i * this.config.delete.delayBetween);
                }
              }, this.config.delete.delay);
            } else {
              // let the addtext operation start
              if (this.config.add) this.addPermissionF = true;
            }
            if (this.config.add) {
              // check if it has permission to start
              window.setInterval(() => {
                if (this.addPermissionF) {
                  // we don't want the interval to go on forever
                  this.addPermissionF = false;
                  window.setTimeout(() => {
                    this.addTextArr.forEach((el, i) => {
                      window.setTimeout(() => {
                        this.ui.addText(el);
                      }, i * this.config.add.delayBetween);
                    });
                  }, this.config.add.delay);
                }
              }, 0);
            }
          }
        }, i * this.config.init.delayBetween);
      });
    }, this.config.init.delay);
  }
  private handleInfinite() {
    window.setInterval(() => {
      if (this.startPermission) {
        this.initTextArr = this.config.init.text.split("");
        // we don't want this to repeat forever unless it's become true in the set timeout
        this.startPermission = false;
        this.ui.createContainer();
        this.ui.createCursor(this.config.cursorSpeed);
        window.setTimeout(() => {
          this.initTextArr.forEach((el: string, i: number) => {
            window.setTimeout(() => {
              this.ui.addText(el);
              // if it's finished writing
              if (this.initTextArr.length - 1 === i) {
                if (this.config.delete) {
                  window.setTimeout(() => {
                    for (let i = 0; i < this.config.delete.count; i++) {
                      window.setTimeout(() => {
                        this.ui.deleteText();
                        if (
                          i === this.config.delete.count - 1 &&
                          this.config.add
                        ) {
                          if (!this.config.infinite.deleteInfinite) {
                            const temp = this.config.init.text.split("");
                            temp.splice(
                              temp.length - this.config.delete.count,
                              temp.length
                            );
                            this.config.init.text = temp
                              .toString()
                              .replace(/,/g, "");
                            this.initTextArr = this.config.init.text.split("");
                            this.config.delete = null;
                          }
                          this.addPermissionIn = true;
                        }
                      }, this.config.delete.delayBetween * i);
                    }
                  }, this.config.delete.delay);
                } else {
                  if (this.config.add) {
                    this.deletePermission = false;
                    this.addPermissionIn = true;
                  } else this.deletePermission = true;
                }
                if (this.config.add) {
                  window.setInterval(() => {
                    if (this.addPermissionIn === true) {
                      this.addPermissionIn = false;
                      window.setTimeout(() => {
                        this.addTextArr.forEach((el, i) => {
                          window.setTimeout(() => {
                            this.ui.addText(el);
                            if (this.addTextArr.length - 1 === i) {
                              if (!this.config.infinite.addInfinite) {
                                this.config.init.text = `${this.config.init.text}${this.config.add.text}`;
                                this.initTextArr = this.config.init.text.split(
                                  ""
                                );
                                this.config.add = null;
                              }
                              this.deletePermission = true;
                            }
                          }, i * this.config.add.delayBetween);
                        });
                      }, this.config.add.delay);
                    }
                  }, 0);
                } else {
                  this.deletePermission = true;
                }
                // clear it
                const clear = window.setInterval(() => {
                  // if there is no deleting or adding text and or it's finished
                  if (this.deletePermission) {
                    // we don't went this operation to go on forever
                    this.deletePermission = false;
                    window.setTimeout(() => {
                      this.ui.clear();
                      // now repeat the operation
                      this.startPermission = true;
                      window.clearInterval(clear);
                    }, this.config.clearDelay);
                  }
                }, 0);
              }
            }, i * this.config.init.delayBetween);
          });
        }, this.config.init.delay);
      }
    }, 0);
  }
  private typeIt(): void {
    if (this.config.infinite) {
      this.handleInfinite();
    } else {
      this.handle();
    }
  }
}
