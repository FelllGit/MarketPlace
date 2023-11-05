import { create } from 'zustand';

interface IExample {
  category: string | undefined
  counter: number
  increment: () => void
  decrement: () => void
  catFact: string | undefined
  setCatFact: (fact: string) => void
  catFactFetcher: () => Promise<string>
  setCategory: (category: string) => void
}

// Create the store
const useStore = create<IExample>((set) => ({
  // States
  category: undefined,
  counter: 0,
  catFact: undefined,

  // Actions
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
  setCatFact: (fact) => set({ catFact: fact }),
  setCategory: (selectedCategory) => set({ category: selectedCategory }),
  // Fetching
  catFactFetcher: async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    return data.fact;
  },
}));

export default useStore;
