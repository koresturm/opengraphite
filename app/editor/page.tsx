"use client"

import TwitterLogo from '@/components/shared/TwitterLogo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { useOpenGraphContext } from '@/lib/state/opengraph-context'
import { Opengraph } from '@/lib/type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const EditorPage = () => {
  const { openGraphData: form, setOpenGraphData: setForm } = useOpenGraphContext()

  const [formIsValid, setFormIsValid] = useState(false)

  const checkValidity = (form: Opengraph) => {
    return Object.values(form).map(v => {
      if(typeof v === 'string' && v.trim().length > 0) {
        return true
      }

      if(typeof v === 'object' && Object.values(v).every(v => v.trim().length > 0)){
        return true
      }

      return false
    }).every(v => v)
  }

  const toggleTwitter = (checked: boolean) => {

     if(checked) setForm({ ...form, twitter: { card: 'summary_large_image' , creator: '', site: '' } })
     else setForm({...removeKey('twitter')})
  }

  const removeKey = (key: string) => {
    let newObject: Record<string , any> = {}

    for (const [k, v] of Object.entries(form)) {
      if (k !== key) {
        newObject[k] = v
      }
    }

    return newObject as Opengraph
  }

  useEffect(() => {
    setFormIsValid(checkValidity(form))
  }, [form])

  return (
    <div className='size-full flex items-center justify-center p-4 overflow-auto'>
      <div className='w-full md:w-[400px] flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Opengraph Editor</h1>
        <Input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder='Title'
        />

        <Input
          value={form.domain}
          onChange={(e) => setForm({ ...form, domain: e.target.value })} placeholder='Site Domain e.g example.com'
        />

        <Textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder='Description' className='resize-none'
        />

        <Select
          value={form.type}
          onValueChange={type => setForm({ ...form, type })}
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

        <div className='w-full flex flex-col gap-4 p-2 border rounded-md'>
          <div className='w-full flex gap-4 p-2 rounded-md justify-between items-center'>
            <TwitterLogo />

            <Switch onCheckedChange={toggleTwitter} />
          </div>

          {
            form.twitter 
            &&
            <>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="What twitter card?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Twitter Cards</SelectLabel>
                    <SelectItem value="summary">Summary</SelectItem>
                    <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
                    <SelectItem value="app">App</SelectItem>
                    <SelectItem value="player">Player</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Input
                value={form.twitter.site}
                onChange={(e) => setForm({ ...form, twitter: { ...form.twitter, site: e.target.value } } as any)}
                placeholder='Site' className='resize-none'
              />

              <Input
                value={form.twitter.creator}
                onChange={(e) => setForm({ ...form, twitter: { ...form.twitter, creator: e.target.value } } as any)}
                placeholder='Creator' className='resize-none'
              />
            </>
          }
        </div>

        {
          formIsValid &&
          <Button asChild>
            <Link href='/code' className='font-bold'>
              Generate
            </Link>
          </Button>
        }

        <Button variant={'secondary'} asChild>
          <Link href='/' className='font-bold'>
            Cancel
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default EditorPage
