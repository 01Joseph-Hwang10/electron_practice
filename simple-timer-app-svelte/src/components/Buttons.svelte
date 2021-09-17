<script>
import { classNameConcatenator } from "src/functions/inline-processor";
import { TimerStore } from "src/store/timer";
import RoundedButton from "./RoundedButton.svelte";

const startTimer = () => TimerStore.startTimer()
const pauseTimer = () => TimerStore.pauseTimer()
const resetTimer = () => TimerStore.resetTimer()

</script>

<section id="buttons" class="grid gap-2 grid-cols-3">
    <RoundedButton
        onClick={startTimer}    
    >
        <i class={classNameConcatenator("bi bi-caret-right-fill", "text-secondary")}></i>
    </RoundedButton>
    <RoundedButton 
        onClick={pauseTimer}
    >
        <i class={classNameConcatenator("bi bi-pause-fill", "text-secondary")}></i>
    </RoundedButton>
    <RoundedButton 
        onClick={resetTimer}
    >
        <i class={classNameConcatenator("bi bi-arrow-repeat", "text-secondary")}></i>
    </RoundedButton>
</section>

<style lang="scss">
    #buttons {
        i {
            font-size: x-large;
            opacity: 1;
            transition-timing-function: linear;
            transition-property: all;
            transition-duration: 0.1s;
        }
        i:hover {
            opacity: 1;
            transform: scale(1.5);
        }
        i:active {
            opacity: 0.5;
            transform: scale(1.5);
        }
    }
</style>
