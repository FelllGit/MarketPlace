import React from 'react';
import { useQuery } from 'react-query';

import Button from '@mui/material/Button';
import useStore from './store';

function App() {
  const {
    counter,
    catFact,
    setCatFact,
    catFactFetcher,
    increment,
    decrement,
  } = useStore();

  const {
    isLoading, isError, refetch, isRefetching, isRefetchError,
  } = useQuery('catFact', catFactFetcher, {
    onSuccess: (data) => setCatFact(data),
    cacheTime: 1000 * 60 * 10, // 10 minutes
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const onButtonClick = () => {
    setCatFact('');
    refetch();
  };

  return (
        <>
            <div>
                <p>{counter}</p>
                <Button variant="contained" onClick={decrement}>
                    -
                </Button>
                <Button variant="contained" onClick={increment}>
                    +
                </Button>
            </div>
            <div>
                <div>
                    {isLoading || isRefetching ? <p>Cat Fact: Loading</p> : ''}
                    {isError || isRefetchError ? <p>Cat Fact: Error</p> : ''}
                    {catFact ? <p>Cat Fact: {catFact}</p> : ''}

                    <Button variant="contained" onClick={onButtonClick}>
                        Refetch Cat Fact
                    </Button>
                </div>
            </div>
        </>
  );
}

export default App;
