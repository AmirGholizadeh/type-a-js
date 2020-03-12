export default interface typeConfig {
  init:{
    text:string;
    delay?: number;
    delayBetween?: number;
  }
  infinite?: {
    deleteInfinite: boolean,
    addInfinite: boolean
  };
  delete?: 
    {
      count: number;
      delayBetween?: number;
      delay?:number;
    }
  add?: {
      text: string;
      delayBetween?: number;
      delay?: number
    };
  cursorSpeed?: number;
  clearDelay?: number;
}
