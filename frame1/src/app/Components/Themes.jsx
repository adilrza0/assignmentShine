import { Button } from '@/components/ui/button'
import React from 'react'
import ThemeChanger from './ThemeChanger'


export default function Themes() {
  return (
    <div className='w-4/5 p-5' >
        <div className='flex justify-between pr-8'>
            <div className='text-2xl font-solid'>Themes</div>
            <Button variant="secondary">Kushagra Singh</Button>
        </div>
        <div className='flex justify-between p-8 bg-slate-100 m-4 rounded-lg border border-slate-400'>
            <div className='text-2xl font-solid'>Apply a skin to your profile </div>
            <div className='flex gap-6 pr-8'>
                <Button variant="outline">+ Custom</Button>
                <Button>Save</Button>
                
            </div>
        </div>
        <div>
            <ThemeChanger/>
        </div>
    </div>
  )
}
