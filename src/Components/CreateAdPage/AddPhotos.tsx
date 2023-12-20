import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { DndContext, closestCenter, MouseSensor, TouchSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, useSortable, rectSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableItemProps {
    id: string;
    image: string;
}

const SortableItem = ({ id, image }: SortableItemProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <Grid item xs={3} margin={'0px'} ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <img
                src={image}
                alt={`upload-${id}`}
                style={{
                    width: '270px',
                    height: '270px',
                    border: '1px solid',
                    objectFit: 'cover',
                }}
            />
        </Grid>
    );
};

function arrayMove(array: string[], fromIndex: number, toIndex: number): string[] {
    const newArray = array.slice();
    const [movedItem] = newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, movedItem);
    return newArray;
};

const AddPhotos = () => {
    const [images, setImages] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
            setImages((prevImages) => [...prevImages, ...fileArray]);
        }
    };

    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor)
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setImages((items) => {
                const oldIndex = items.indexOf(active.id.toString());
                const newIndex = items.indexOf(over.id.toString());
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={images} strategy={rectSortingStrategy}>
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
                    {images.map((image) => (
                        <SortableItem key={image} id={image} image={image} />
                    ))}
                </Grid>
            </SortableContext>
        </DndContext>
    );
};

export default AddPhotos;
