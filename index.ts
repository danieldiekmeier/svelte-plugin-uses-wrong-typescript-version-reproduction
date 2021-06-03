import { z } from 'zod'
export let x: number = 10

const unionSchema = z.number().or(z.string())
