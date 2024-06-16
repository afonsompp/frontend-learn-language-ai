import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function PlaygroundPage() {
  return (
    <div className="grid grid-cols-12 gap-4 w-full px-8">
      {/* History */}
      <aside className={'grid gap-6 col-span-2 h-full'}>
        <fieldset className="rounded-lg border p-4 col-span-1 overflow-scroll h-[calc(100vh-10rem)]">
          <legend className="-ml-1 px-1 text-sm font-medium">History</legend>

          <div>
            {Array.from(Array(99).keys()).map((_, i) => (
              <p key={i}>History {i}</p>
            ))}
          </div>
        </fieldset>
      </aside>
      {/* History */}

      {/* Settings */}
      <div className={'grid gap-6 col-span-4'}>
        <fieldset className="rounded-lg border p-4 col-span-1">
          <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>

          <form className={'grid w-full items-start gap-6'}>
            <div className="grid gap-3">
              <Label htmlFor="temperature">Temperature</Label>
              <Input id="temperature" type="number" placeholder="0.4" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="top-p">Top P</Label>
                <Input id="top-p" type="number" placeholder="0.7" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="top-k">Top K</Label>
                <Input id="top-k" type="number" placeholder="0.0" />
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="role">Native Language</Label>

              <Select defaultValue="pt">
                <SelectTrigger>
                  <SelectValue placeholder="Select a lang" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="pt">Pt</SelectItem>
                  <SelectItem value="eng">En</SelectItem>
                  <SelectItem value="fr">Fr</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="role">Language</Label>

              <Select defaultValue="pt">
                <SelectTrigger>
                  <SelectValue placeholder="Select a lang" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="pt">Pt</SelectItem>
                  <SelectItem value="eng">En</SelectItem>
                  <SelectItem value="fr">Fr</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>

              <Textarea
                id="content"
                placeholder="You are a..."
                className="min-h-[9.5rem]"
              />
            </div>

            <Button>Generate</Button>
          </form>
        </fieldset>
      </div>
      {/* Settings */}

      {/* Output */}
      <div className={'grid gap-6 col-span-6 '}>
        <fieldset className="rounded-lg border bg-muted/50 p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Output</legend>

          <div className={'flex flex-col justify-between h-full'}>
            <p className={'text-muted-foreground'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              enim hic laborum odit perferendis veritatis voluptate. Adipisci
              corporis cumque ea illum impedit iste molestias nisi obcaecati
              possimus, totam ullam voluptatum.
            </p>

            <audio id="song" className="block w-full" controls>
              <source src="#" type="audio/mpeg" />
            </audio>
          </div>
        </fieldset>
      </div>
      {/* Output */}
    </div>
  )
}
