import React from 'react';
import { action } from '@storybook/addon-actions';
import {Star} from "./Rating";

export default {
    title: 'Star',
    component: Star,
};

export const EmptyStar = () => <Star changeValue={x => x} selected={false} i={0}/>;

// export const Emoji = () => (
//     <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//     </Button>
// );