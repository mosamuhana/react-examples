export class FadeInAnimation {
  private frameId: number | null = null;
  private startTime: number = 0;
  private duration: number = 0;

  public constructor(private readonly node: HTMLElement) {}

  public get started() { return this.frameId != null; }

  public start(duration: number) {
    console.log('Animation start');
    this.duration = duration;
    this.onProgress(0);
    this.startTime = performance.now();
    this.frameId = requestAnimationFrame(() => this.onFrame());
  }

  public stop() {
    console.log('Animation stop');
    if (!this.frameId) return;
    cancelAnimationFrame(this.frameId);
    this.startTime = 0;
    this.duration = 0;
    this.frameId = null;
  }

  private onFrame() {
    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      // We still have more frames to paint
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  private onProgress(progress: number) {
    this.node.style.opacity = `${progress}`;
  }
}
