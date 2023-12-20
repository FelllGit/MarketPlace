import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import styles from '../styles/CustomAccordion.module.scss';

type CustomAccordionProps = {
    name: React.ReactNode;
    component: React.ReactNode;
};

const CustomAccordion: React.FC<CustomAccordionProps> = ({ name, component }) => (
    <Accordion className={styles.accordionContainer}>
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '0' }}>
                {name} <i className="ri-arrow-down-s-line" />
            </Box>
        </AccordionSummary>
        <AccordionDetails className={styles.content}>
            {component}
        </AccordionDetails>
    </Accordion>
);

export default CustomAccordion;