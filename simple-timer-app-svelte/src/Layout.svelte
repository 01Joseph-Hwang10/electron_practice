<script>
import RoundedButton from "./components/rounded-button.svelte";

const iconSize = 24;

</script>

<div id="root" class="center flex-col bg-base w-full h-full">
    <section id="timer-section" class="center">
        <span class="font-bold text-highlight">00:00</span>
    </section>
    <section id="buttons">
        <RoundedButton size={iconSize}>
            <i class="bi bi-caret-right-fill"></i>
        </RoundedButton>
        <RoundedButton size={iconSize}>
            <i class="bi bi-pause-fill"></i>
        </RoundedButton>
        <RoundedButton size={iconSize}>
            <i class="bi bi-arrow-repeat"></i>
        </RoundedButton>
    </section>
</div>

<style>
    #timer-section span {
        font-size: 10rem;
    }
</style>
