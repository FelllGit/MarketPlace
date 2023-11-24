// import { useQuery } from 'react-query';

// import Button from '@mui/material/Button';
import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import React, { useState } from 'react';
import BannerAd from './BannerAd';
import CardComponent from './CardComponent';

import NestedMenu from './NestedMenu';

const Content = styled('div')({
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});

const MainCategories = styled('div')({
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '24px',
    width: '100%',
    overflow: 'scroll',
});

const MainCategoriesButton = styled(Button)({
    whiteSpace: 'nowrap',
    minWidth: 'fit-content',
});

const NestedMenuWrapper = styled('div')({
    width: '100%',
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 2,
    backgroundColor: '#FFFFFF',
});

const DropdownContainer = styled('div')({
    position: 'relative',
});

const Home = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    //   const handleClose = () => {
    //     setAnchorEl(null);
    //   };
    return (
        <Content>
            <Grid container marginBottom={'100px'} width={'100%'}>
                <Grid
                    item
                    sm={12}
                    md={6}
                    lg={4}
                    padding={'8px'}
                    margin={'auto'}>
                    <BannerAd />
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={6}
                    lg={4}
                    padding={'8px'}
                    margin={'auto'}>
                    <BannerAd />
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={6}
                    lg={4}
                    padding={'8px'}
                    margin={'auto'}>
                    <BannerAd />
                </Grid>
            </Grid>

            <DropdownContainer>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onMouseDown={handleButtonClick}
                    sx={{
                        backgroundColor: '#868686',
                        color: '#FFFFFF',
                        width: '102px',
                        zIndex: 1,
                    }}>
                    Категорії
                </Button>
                {anchorEl && (
                    <NestedMenuWrapper>
                        <NestedMenu />
                    </NestedMenuWrapper>
                )}
            </DropdownContainer>

            <MainCategories>
                <MainCategoriesButton>Все</MainCategoriesButton>
                <MainCategoriesButton>Дитячі товари</MainCategoriesButton>
                <MainCategoriesButton>Дім і сад</MainCategoriesButton>
                <MainCategoriesButton>Інструменти</MainCategoriesButton>
                <MainCategoriesButton>Одяг та взуття</MainCategoriesButton>
                <MainCategoriesButton>Спорт і відпочинок</MainCategoriesButton>
                <MainCategoriesButton>
                    Техніка та електроніка
                </MainCategoriesButton>
            </MainCategories>

            <Grid
                container
                display={'flex'}
                sx={{ flexDirection: { sm: 'column', md: 'row' } }}
                marginBottom={'100px'}
                width={'100%'}>
                <Grid
                    item
                    sm={12}
                    md={6}
                    lg={3}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={6}
                    lg={3}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={6}
                    lg={3}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={6}
                    lg={3}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={6}
                    lg={3}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={6}
                    lg={3}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
            </Grid>
            {/* <div>
				<p>{counter}</p>
				<Button variant='contained' onClick={decrement}>
					-
				</Button>
				<Button variant='contained' onClick={increment}>
					+
				</Button>
			</div> */}
            {/* <div>
				<div>
					{isLoading || isRefetching ? <p>Cat Fact: Loading</p> : ''}
					{isError || isRefetchError ? <p>Cat Fact: Error</p> : ''}
					{catFact ? <p>Cat Fact: {catFact}</p> : ''}

					<Button variant='contained' onClick={onButtonClick}>
						Refetch Cat Fact
					</Button>
				</div>
			</div> */}
        </Content>
    );
};

export default Home;
