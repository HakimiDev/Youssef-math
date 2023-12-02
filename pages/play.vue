<script setup>
import { useGame } from "~/hooks/gameStore";

const { getType, getMode } = useGame();

onMounted(() => {
  const type = getType();
  const mode = getMode();

  if (!type || !mode) {
    navigateTo("/");

    return;
  }
});

const isReady = ref(false);

const eq = ref(null);
const time = ref(null);
const result = ref('');

const handelReady = () => {
  if (isReady.value) return;
  isReady.value = true;
  start();
};

onMounted(() => {
  setInterval(() => {
    if (time.value === null) return;
    if (time.value <= 0) {
      start();
      return;
    }
    time.value--;
  }, 1000);
});

function start() {
  const type = getType();
  const mode = getMode();

  eq.value = generateEquation(type, mode);
  time.value = getTime(mode);
}

function getTime(mode) {
  const times = {
    easy: 5,
    mid: 10,
    hard: 15,
  };

  return times[mode];
}

function generateEquation(type, mode) {
  const operations = {
    sum: "+",
    sub: "-",
    mul: "*",
    div: "/",
  };

  const operationKeys = Object.keys(operations);

  const ranges = {
    easy: [1, 10],
    mid: [1, 100],
    hard: [1, 1000],
  };

  const range = ranges[mode];

  if (!range) {
    return "Invalid mode";
  }

  const [min, max] = range;
  const num1 = getRandomNumber(min, max);
  const num2 = getRandomNumber(min, max);

  let operation;

  if (type === "random") {
    operation =
      operations[
        operationKeys[Math.floor(Math.random() * operationKeys.length)]
      ];
  } else if (operations[type]) {
    operation = operations[type];
  } else {
    return "Invalid equation type";
  }

  const equation = `${num1} ${operation} ${num2}`;
  return equation;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const score = ref(0);

const handleSubmit = () => {
    const rr = eval(eq.value);
    console.log(rr);
    if (result.value.trim() == rr) {
        score.value++;
    } else {
        score.value--;
    }
    start();
    result.value = '';
};
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <button
      @click="handelReady"
      :class="isReady ? 'bg-primary-200' : 'bg-primary-400'"
      type="button"
      class="p-2 px-4 text-white rounded"
    >
      Ready
    </button>
    <div
      v-if="isReady"
      class="p-2 w-full border-b-2 border-primary-500 flex flex-col justify-center items-center"
    >
    <div class="p-4 text-center text-xl">
        <h2>Time:</h2>
        <h1 class="text-3xl text-primary-500">{{ time }}</h1>
        <h2>Score:</h2>
        <h1 class="text-3xl text-primary-500">{{ score }}</h1>        
      </div>
      <h2 class="text-2xl">Solve this:</h2>
      <h1 class="text-center text-xl text-primary-500 font-bold">
        {{ eq }} = ?
      </h1>
      <div>
        <form @submit="handleSubmit" onsubmit="return false;" class="flex flex-col justify-center items-center p-2 gap-4">
          <input
            v-model="result"
            required
            type="text"
            placeholder="Result"
            class="p-2 bg-primary-300 text-white rounded outline-none placeholder-gray-50"
          />
          <button
            type="submit"
            class="bg-primary-400 text-white p-2 px-8 rounded font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
