import {style} from '@vanilla-extract/css';


export const story = style({
    color: '#000',
    
})

export const storyHeader = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: 'none',
    lineHeight: '24px',
    
})

export const storyFooter = style({
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    lineHeight: '24px',
    fontSize: '0.8rem',
    marginBottom: '15px'
    


})

export const domainLink = style({
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '14px',
    


})

export const storyLink = style({
    textDecoration: 'none',
    color: '#888',
    ':hover': {
        textDecoration: 'underline',
    },
})