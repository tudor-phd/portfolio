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

export const Navigation = () => (
    <motion.ul variants={variants}>
        {itemIds.map(i => (
            <MenuItem i={i.id} key={i.id} title={i.title} />
        ))}
    </motion.ul>
);

const itemIds = [
    {
        id: '0',
        title: 'ABOUT'
    },
    {
        id: '1',
        title: 'WORK'
    },
    {
        id: '2',
        title: 'SKILLS'
    },
];
