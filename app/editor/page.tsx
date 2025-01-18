
"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useOpenGraphContext } from '@/lib/state/opengraph-context'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const EditorPage = () => {
    const {  openGraphData: form, setOpenGraphData: setForm } = useOpenGraphContext()

    const [ formIsValid , setFormIsValid ] = useState(false)
  
    useEffect(() => {
      console.log(form)
      setFormIsValid(Object.values<string>(form).every(v => v.trim().length > 0))
    }, [form])
  
    return (
      <div className='size-full flex items-center justify-center p-4'>
        <div className='w-full md:w-[400px] flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Opengraph Editor</h1>
          <Input 
            value={form.title}
            onChange={(e) => setForm({...form, title: e.target.value})} placeholder='Title' 
          />
  
          <Input 
            value={form.url} 
            onChange={(e) => setForm({...form, url: e.target.value})} placeholder='Site URL' 
          />
  
          <Textarea 
            value={form.description} 
            onChange={(e) => setForm({...form, description: e.target.value})}
            placeholder='Description' className='resize-none' 
          />
  
          <Select
            value={form.type} 
            onValueChange={type => setForm({...form, type })}
           >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="What type of opengragh?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Opengraph types</SelectLabel>
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="article">Article</SelectItem>
                <SelectItem value="video">Video</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
  
          {
            formIsValid &&
            <Button asChild>
              <Link href='/code' className='font-bold'>
                Generate
              </Link>
            </Button>
          }
        </div>
      </div>
    )
}

export default EditorPage
