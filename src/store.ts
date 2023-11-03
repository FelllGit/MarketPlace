import { create } from 'zustand';

interface IExample {
  counter: number
  increment: () => void
  decrement: () => void
  catFact: string | undefined
  setCatFact: (fact: string) => void
  catFactFetcher: () => Promise<string>
}

// Create the store
const useStore = create<IExample>((set) => ({
  // States
  counter: 0,
  catFact: undefined,

  // Actions
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  setCatFact: (fact) => set({ catFact: fact }),
  // Fetching
  catFactFetcher: async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    return data.fact;
  },
}));

export default useStore;
