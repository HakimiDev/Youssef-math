<script setup>
import {useGame} from '@/hooks/gameStore';

const { setType, setMode } = useGame();

const formData = ref({
    type: 'sum',
    mode: 'easy'
});

const handleSubmit = () => {
    setType(formData.value.type);
    setMode(formData.value.mode);

    navigateTo('/play');

    return false;
};
</script>

<template>
    <div class="h-[85vh] flex flex-col justify-center items-center">
        <div class="w-full p-8">
            <form @submit="handleSubmit" class="flex flex-col justify-between" onsubmit="return false;">
                <label>Select the type of the eq:</label>
                <select v-model="formData.type" class="p-1 px-3 bg-primary-400 text-white font-bold rounded" required>
                    <option value="sum">Sum</option>
                    <option value="sub">Sub</option>
                    <option value="mul">Mul</option>
                    <option value="div">Div</option>
                    <option value="random">Random</option>
                </select>
                <label>Select the type of the mode:</label>
                <select v-model="formData.mode" class="p-1 px-3 bg-primary-400 text-white font-bold rounded" required>
                    <option value="easy">Easy</option>
                    <option value="mid">Mid</option>
                    <option value="hard">Hard</option>
                </select>

                <div class="w-full flex justify-center items-center p-3">
                    <button type="submit" class="w-[70%] p-3 bg-primary-500 text-white rounded font-semibold">Start</button>
                </div>
            </form>
        </div>
    </div>
</template>