import {z} from 'zod';
import { patterns } from '../../../shared/utils/regex';

export const schema = z.object({
    name: z.string()
        .min(1),
    email: z.string()
        .min(1)
        .refine((text) => patterns.email.test(text), {message: 'Email not valid'}),
    message: z.string()
        .min(1),
})

export type Schema = z.infer<typeof schema>

export const defaultValues: Schema = {
    name: '',
    email: '',
    message: ''
}