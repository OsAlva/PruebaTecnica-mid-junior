import {style} from '@vanilla-extract/css';

export const headerContainer = style({
    backgroundColor: '#ff6600',

})

export const header = style({
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    gap: '20px',
    padding: '0 22px'
});

export const logo = style({
    maxWidth: '37px',
})

export const link = style({
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '1.5rem',
    margin: '0',
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',

})


// export const listUl = style({
//     textDecoration: 'none',
//     display: 'flex',
//     gap: '20px',
//     justifyContent: 'space-between',
//     listStyle: 'none',
// })


export const headerOption = style({
    textDecoration: 'none',
    color: 'inherit',
})