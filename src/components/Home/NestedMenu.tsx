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
  {
    title: "Краса та здоров'я",
    subcategories: [
      'Парфумерія',
      'Декоративна косметика',
      'Догляд за обличчям',
      'Догляд за тілом',
      'Догляд за волоссям',
      'Манікюр та педикюр',
      'Засоби гігієни',
      'Органічна косметика',
      'Професійна косметика',
      'Засоби для гоління',
      'Сонцезахисні засоби',
      'Засоби для ванни',
      'Ароматерапія',
      'Дієтичні добавки',
      'Вітаміни',
      'Медичні прилади',
    ],
  },
  {
    title: 'Дім і сад',
    subcategories: [
      'Меблі для вітальні',
      'Кухонні меблі',
      'Меблі для спальні',
      'Офісні меблі',
      'Садові меблі',
      'Освітлення',
      'Постільні приналежності',
      'Предмети інтер`єру',
      'Килими та підлогові покриття',
      'Кухонне начиння',
      'Домашній текстиль',
      'Інструменти для саду',
      'Рослини та квіти',
      'Городні товари',
      'Декор для саду',
      'Системи поливу',
    ],
  },
  {
    title: 'Одяг та взуття',
    subcategories: [
      'Жіночі сукні',
      'Чоловічі костюми',
      'Джинси',
      'Спортивний одяг',
      'Верхній одяг',
      'Нижня білизна',
      'Взуття для чоловіків',
      'Взуття для жінок',
      'Дитяче взуття',
      'Аксесуари',
      'Сумки',
      'Головні убори',
      'Шарфи',
      'Рукавички',
      'Пояси',
      'Окуляри',
    ],
  },
  {
    title: 'Техніка та електроніка',
    subcategories: [
      'Смартфони',
      'Планшети',
      'Ноутбуки',
      'Настільні комп`ютери',
      'Телевізори',
      'Аудіотехніка',
      'Фотоапарати',
      'Відеокамери',
      'Ігрові консолі',
      'Розумні годинники',
      'Побутова техніка',
      'Кліматичне обладнання',
      'Кухонна техніка',
      'Пилососи',
      'Прилади для догляду за одягом',
      'Електроінструменти',
    ],
  },
  {
    title: 'Товари для дітей',
    subcategories: [
      'Іграшки для малюків',
      'Розвиваючі іграшки',
      'Конструктори',
      'Ігрові комплекси',
      'Настільні ігри',
      'Пазли',
      'Дитячі книжки',
      'Товари для новонароджених',
      'Дитячий одяг',
      'Дитяче взуття',
      'Дитячі коляски',
      'Автокрісла',
      'Шкільні товари',
      'Дитячі меблі',
      'Велосипеди',
      'Спортивні товари для дітей',
    ],
  },
  {
    title: 'Спорт і відпочинок',
    subcategories: [
      'Тренажери',
      'Велосипеди',
      'Роликові ковзани',
      'Скейтборди',
      'Лижі та сноуборди',
      'Туристичне спорядження',
      'Намети',
      'Спальні мішки',
      'Рюкзаки',
      'Фітнес-браслети',
      'Спортивне харчування',
      'Бойові мистецтва',
      'Водний спорт',
      'Гольф',
      'Теніс',
      'Футбол',
    ],
  },
  {
    title: 'Книги',
    subcategories: [
      'Сучасна проза',
      'Класична література',
      'Детективи',
      'Фантастика',
      'Фентезі',
      'Бізнес-книги',
      'Саморозвиток',
      'Психологія',
      'Дитяча література',
      'Науково-популярна література',
      'Історія',
      'Мистецтво',
      'Релігія та езотерика',
      'Кулінарія',
      'Мовні курси',
      'Енциклопедії',
    ],
  },
  {
    title: 'Аксесуари та прикраси',
    subcategories: [
      'Годинники',
      'Ювелірні вироби',
      'Біжутерія',
      'Сумки',
      'Гаманці',
      'Шарфи та хустки',
      'Ремені',
      'Окуляри від сонця',
      'Запонки',
      'Краватки',
      'Шапки',
      'Рукавички',
      'Зонт',
      'Візитниці',
      'Ключниці',
      'Чохли для техніки',
    ],
  },
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
                    paddingRight={1}
                    paddingLeft={1}>
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
