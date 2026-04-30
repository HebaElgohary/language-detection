import { cn } from '@/lib/cn'
import  { ComponentType } from 'react'

interface Props {
      size?: number,
      color?: 'black' | 'primary' |'primary-300'|'primary-200'| 'disabled'| 'light' | 'muted',
     Icon:ComponentType<{size: number, className?:string}>,
    className?:string
}
export default function Icon(
  {  size=50,
    color='black',
    Icon,
    className}: Props
) {
const colors = {
  'black': 'ds-text-alt',
   'light': 'ds-color-bg',
    'primary': 'ds-text-primary',
    'primary-200': 'ds-text-primary-200',
    'primary-300': 'ds-text-primary-300',


    'muted': 'ds-text-muted',
    'disabled': 'ds-text-disabled',
    
}
  return (
    <Icon size={size}  className={cn(colors[color],className)} />
  )
}
