export default interface UIInterface{
    createCursor(speed: number): void,
    addText(text:string): void,
    deleteText(): void,
    clear(): void,
    createContainer(): void
}