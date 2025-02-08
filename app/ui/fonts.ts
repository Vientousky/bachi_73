import { Montserrat , Sofia } from 'next/font/google'

export const montserrat = Montserrat({
    subsets:['latin'],
    weight:['400','500','600','700'],
    variable:'--fonts-montserrat'
});

export const sofia = Sofia({
    subsets:['latin'],
    weight:['400'],
    variable:'--fonts-Sofia'
})