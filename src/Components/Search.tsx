import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import styles from '../styles/Search.module.scss';
import PrimaryButton from './PrimaryButton';

const SearchComponent: React.FC = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchText);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    return (
        <TextField
            className={styles.searchField}
            name='searchField'
            id='searchField'
            variant="outlined"
            value={searchText}
            onChange={handleInputChange}
            placeholder="Search..."
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {!searchText && ( // Only show the icon when searchText is empty
                            <IconButton>
                                <i className="ri-search-line"></i>
                            </IconButton>
                        )}
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <PrimaryButton style={{ padding: '15px 18px', marginLeft: '-14px' }} onClick={handleSearch}>
                            Search
                        </PrimaryButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchComponent;
