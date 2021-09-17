import { writable } from "svelte/store";

export namespace TimerStore {
  export const elapsed = writable<number>(0);
  export const paused = writable<boolean>(true);
  export const timer = writable<NodeJS.Timer | null>(null);

  export const resetTimer = (): void => {
    paused.set(true);
    elapsed.set(0);
  };

  export const incrementTimer = (): void => {
    elapsed.update((time) => time + 1);
  };

  export const startTimer = (): void => {
    paused.set(false);
    timer.update((_) =>
      setInterval(() => {
        incrementTimer();
      }, 1000)
    );
  };

  export const pauseTimer = (): void => {
    paused.set(true);
    timer.update((current) => {
      clearInterval(current);
      return null;
    });
  };
}
