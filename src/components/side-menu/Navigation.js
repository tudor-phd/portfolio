import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./ManuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = ({isOpen}) => (
    <motion.ul variants={variants}>
        {itemIds.map(i => (
            <MenuItem i={i.id} key={i.id} title={i.title} anchor={i.anchor}/>
        ))}
    </motion.ul>
);

const itemIds = [
    {
        id: '0',
        title: 'WELCOME',
        anchor: 'first-section'
    },
    {
        id: '1',
        title: 'ABOUT',
        anchor: 'second-section'
    },
    {
        id: '2',
        title: 'WORK',
        anchor: 'third-section'
    },
];
