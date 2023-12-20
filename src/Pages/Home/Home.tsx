import { Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import CardComponent from '../../Components/Home/StoreCard';
import ThirdButton from '../../Components/ThirdButton';

import SecondaryButton from '../../Components/SecondaryButton';
import HomeSlider from '../../Components/Home/HomeSlider';
import HomeNestedCategoriesMenu from '../../Components/Home/HomeNestedCategoriesMenu';
import Search from '../../Components/Search';

const Content = styled('div')({
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
})

const Home = () => {
    const typographyTheme = useTheme();

    return (
        <Content>
            <Search />
            <HomeSlider />
            <HomeNestedCategoriesMenu />
            <MainCategories>
                <ThirdButton selected>Все</ThirdButton>
                <ThirdButton selected>Дитячі товари</ThirdButton>
                <ThirdButton selected>Дім і сад</ThirdButton>
                <ThirdButton selected>Інструменти</ThirdButton>
                <ThirdButton selected>Одяг та взуття</ThirdButton>
                <ThirdButton selected>Спорт і відпочинок</ThirdButton>
                <ThirdButton selected>
                    Техніка та електроніка
                </ThirdButton>
            </MainCategories>

            <Grid
                container
                display={'flex'}
                sx={{ flexDirection: { xxs: 'column', xs: 'row', "& > .MuiGrid-item": { marginBottom: '30px' } } }}
                marginBottom={'100px'}
                width={'100%'}>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>

            </Grid>
            <SecondaryButton style={{ width: 'fit-content', alignSelf: 'center', marginBottom: '77px' }}>Show more</SecondaryButton>

            <Typography sx={{ ...typographyTheme.typography.heading.xl3.bold }}>Clothes and shoes</Typography>
            <Grid
                container
                display={'flex'}
                sx={{ flexDirection: { s: 'column', xs: 'row', marginBottom: '30px', "& > .MuiGrid-item": { marginBottom: '30px' } } }}
                marginBottom={'100px'}
                width={'100%'}>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
            </Grid>

            <Typography sx={{ ...typographyTheme.typography.heading.xl3.bold }}>Technology and electronics</Typography>
            <Grid
                container
                display={'flex'}
                sx={{ flexDirection: { s: 'column', xs: 'row', marginBottom: '30px', "& > .MuiGrid-item": { marginBottom: '30px' } } }}
                marginBottom={'100px'}
                width={'100%'}>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
            </Grid>

            <Typography sx={{ ...typographyTheme.typography.heading.xl3.bold }}>Goods for children</Typography>
            <Grid
                container
                display={'flex'}
                sx={{ flexDirection: { s: 'column', xs: 'row', marginBottom: '30px', "& > .MuiGrid-item": { marginBottom: '30px' } } }}
                marginBottom={'100px'}
                width={'100%'}>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
            </Grid>

            <Typography sx={{ ...typographyTheme.typography.heading.xl3.bold }}>Sports and recreation</Typography>
            <Grid
                container
                display={'flex'}
                sx={{ flexDirection: { s: 'column', xs: 'row', marginBottom: '30px', "& > .MuiGrid-item": { marginBottom: '30px' } } }}
                marginBottom={'100px'}
                width={'100%'}>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
            </Grid>

            <Typography sx={{ ...typographyTheme.typography.heading.xl3.bold }}>House and garden</Typography>
            <Grid
                container
                display={'flex'}
                sx={{ flexDirection: { s: 'column', xs: 'row' } }}
                width={'100%'}>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
                    display={'flex'}
                    justifyContent={'center'}>
                    <CardComponent />
                </Grid>
                <Grid
                    item
                    xxs={12}
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    xl={1}
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
        </Content >
    );
};

export default Home;
