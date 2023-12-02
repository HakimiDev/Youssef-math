import { defineStore } from 'pinia';

export const useGame = defineStore('game', () => {
    // Define vars ...
    const type = ref(null);
    const mode = ref(null);

    const getType = () => { 
        return type.value;
    };
    
    const setType = (value) => {
        type.value = value;
    };

    const getMode = () => { 
        return mode.value;
    };
    
    const setMode = (value) => {
        mode.value = value;
    };
    
  return { getType, getMode, setType, setMode };
});