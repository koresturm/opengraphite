"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useOpenGraphContext } from "@/lib/state/opengraph-context"
import templates from "@/lib/templates"
import { useState, useEffect } from "react"
import { codeToHtml } from 'shiki'
import { Clipboard } from "lucide-react"
import Link from "next/link"

const code = () => {

  const { openGraphData } = useOpenGraphContext()

  const [framework, setFramework] = useState('html')

  const [highlightedCode, setHighlightedCode] = useState('')

  const [rawText, setRawText] = useState('')

  const runHighlighting = async () => {

    const { code , lang  } = templates[framework]

    const raw_text = code(openGraphData)

    setRawText(raw_text)

    const highlighted = await codeToHtml(raw_text, {
      lang,
      theme: 'vitesse-dark'
    })

    setHighlightedCode(highlighted)
  }

  useEffect(() => {
    runHighlighting()
  }, [framework])

  return (
    <div className='size-full flex flex-col items-center justify-center gap-4 p-4'>

      <div className='w-full md:w-[600px] flex flex-col gap-4'>
        <Select
          value={framework}
          onValueChange={type => setFramework(type)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Frameworks</SelectLabel>
              {Object.entries(templates).map(([key, value]) =>
                <SelectItem value={key} key={key}>
                  <div className='flex items-center gap-2 w-full'>
                    <value.icon />
                    <p>{key.toUpperCase()}</p>
                  </div>
                </SelectItem>
              )
              }
            </SelectGroup>
          </SelectContent>
        </Select>

        <div dangerouslySetInnerHTML={{ __html: highlightedCode }} className='w-full overflow-hidden rounded'></div>

        <Button variant={'secondary'} onClick={() => navigator.clipboard.writeText(rawText)} className='w-full'>
          Copy <Clipboard />
        </Button>

        <Button variant={'secondary'} asChild>
          <Link href='/' className='font-bold'>
            Cancel
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default code  