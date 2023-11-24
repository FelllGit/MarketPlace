import {
  Autocomplete,
  Button,
  Grid,
  ListSubheader,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Content = styled('div')({
  marginTop: '20px',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

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

const options = categories.flatMap((category) => category.subcategories.map((subcategory) => ({
  group: category.title,
  title: subcategory,
})));

const reorder = (list: string[], startIndex: number, endIndex: number): string[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const CreateAdPage = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...fileArray]);
    }
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    setImages((prevImages) =>
      reorder(
        prevImages,
        result.source.index,
        result.destination.index
      )
    );
  };

  return (
    <Content>
      <Typography variant='h2'>Створити оголошення</Typography>
      <Typography variant='h6'>Опишіть в подробицях</Typography>
      <form>
        <Typography variant="subtitle2">Вкажіть назву</Typography>
        <TextField
          id='name'
          placeholder='Наприклад , ноутбук Lenovo новий з нарантіею'
          variant='outlined'
          sx={{ width: '60%' }}
        ></TextField>
        <Typography variant='subtitle2' marginTop={'15px'}>Виберіть категорію</Typography>
        <Autocomplete
          id='grouped-demo'
          options={options.sort((a, b) => -b.group.localeCompare(a.group))}
          groupBy={(option) => option.group}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} placeholder='Ноутбуки' />
          )}
          renderGroup={(params) => [
            <ListSubheader
              key={params.key}
              component='div'
              style={{
                backgroundColor: 'white',
                top: '-8px',
                padding: '4px 10px',
              }}
            >
              {params.group}
            </ListSubheader>,
            params.children,
          ]}
          sx={{ width: '40%' }}
        />
        <Typography variant='subtitle2' marginTop={'100px'}>Фото</Typography>
        <Typography variant='caption'>Перше фото буде на обкладинці оголошення. Перетягніть, щоб змінити порядок фото.</Typography>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='Images' direction='horizontal'>
            {(droppableProvided) => (
              <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Grid container justifyContent={'flex-start'} alignItems={'flex-start'}>
                  <Grid item xs={3} margin={'0px'}>
                    <Button
                      component='label'
                      sx={{
                        width: '270px',
                        height: '270px',
                        textDecoration: 'underline',
                        padding: '0px',
                      }}
                    >
                      Додати фото
                      <input type='file' hidden onChange={handleFileChange} />
                    </Button>
                  </Grid>
                  {images.map((image, index) => (
                    <Draggable key={index} draggableId={`image-${index}`} index={index}>
                      {(draggaleProvided) => (
                        <Grid item xs={3} margin={'0px'} {...draggaleProvided.draggableProps} {...draggaleProvided.dragHandleProps} ref={draggaleProvided.innerRef}>
                          <img
                            src={image}
                            alt={`upload-${index}`}
                            style={{
                              width: '270px',
                              height: '270px',
                              border: '1px solid',
                              objectFit: 'cover',
                            }}
                          />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </Grid>
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <Typography variant='subtitle2' marginTop={'100px'}>Опис</Typography>
        <TextField fullWidth multiline></TextField>

        <Typography variant='subtitle2' marginTop={'15px'}>Місцезнаходження</Typography>
        <TextField></TextField>
      </form>
    </Content >
  );
};

export default CreateAdPage;
