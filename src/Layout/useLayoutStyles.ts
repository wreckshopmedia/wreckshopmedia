import { createStyles } from '@mantine/core';

export const useLayoutStyles = createStyles((theme) => ({  
    layout: {
        minHeight: '100dvh',
        background: theme.colors.peach,
        paddingInline: 'max(6vw, -640px + 50vw)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
 }))