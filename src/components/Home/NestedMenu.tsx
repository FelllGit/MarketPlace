import {
  Button, Grid, alpha, styled,
} from '@mui/material';
import React, { useState } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const NestedMenuWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex', // Add this line to make Search a flex container
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  alignItems: 'center',
  border: '1px solid',
  borderColor: theme.palette.divider,
}));

const CategoryButton = styled(Button)(() => ({
  justifyContent: 'initial',
  border: '0px',
}));

const SubCategoryButton = styled(Button)(() => ({
  border: '0px',
  borderBottom: '1px solid',
}));

interface Category {
  title: string;
  subcategories: string[];
}

const categories: Category[] = [
  { title: "Краса та здоров'я", subcategories: ['Парфумерія', 'Косметика'] },
  {
    title: 'Дім і сад',
    subcategories: ['Меблі', 'Декор', 'Меблі', 'Декор', 'Меблі', 'Декор'],
  },
  // ... інші категорії
];

const NestedMenu: React.FC = () => {
  // Initialize with null or the first category
  const [selectedCategory, selectCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryTitle: string) => {
    selectCategory(categoryTitle);
  };

  const selectedCategoryDetails = categories.find(
    (category) => category.title === selectedCategory,
  );

  return (
        <NestedMenuWrapper>
            <Grid container>
                <Grid
                    item
                    lg={3}
                    md={4}
                    sm={5}
                    borderRight="1px solid"
                    margin={0}>
                    {categories.map((category) => (
                        <CategoryButton
                            fullWidth
                            key={category.title}
                            onClick={() => handleCategoryClick(category.title)}>
                            {category === selectedCategoryDetails ? (
                                <CheckBoxIcon />
                            ) : (
                                <CheckBoxOutlineBlankIcon />
                            )}
                            {category.title}
                            <ArrowForwardIosIcon />
                        </CategoryButton>
                    ))}
                </Grid>
                <Grid
                    item
                    lg={9}
                    md={8}
                    sm={7}
                    margin={0}
                    paddingRight={4}
                    paddingBottom={2}>
                    <Grid container spacing={2}>
                        {selectedCategoryDetails?.subcategories.map(
                          (subcategory, index) => (
                                <Grid
                                    item
                                    xs={6}
                                    sm={4}
                                    md={3}
                                    lg={2}
                                    key={`${selectedCategoryDetails.title}-${subcategory}-${index}`}>
                                    <SubCategoryButton fullWidth>
                                        {subcategory}
                                    </SubCategoryButton>
                                </Grid>
                          ),
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </NestedMenuWrapper>
  );
};

export default NestedMenu;
