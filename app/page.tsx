import { Widget } from '@/components/Widget'
import { WidgetEvents } from '@/components/WidgetEvents'

export default function Home() {
  return (
    <main>
      <WidgetEvents />
      <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <div>
          <Widget />
        </div>
      </div>
    </main>
  )
}
