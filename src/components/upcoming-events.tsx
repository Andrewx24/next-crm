import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const events = [
  {
    time: "Today, 5pm - 6pm",
    title: "Team Meeting",
    type: "meeting"
  },
  {
    time: "Tomorrow, All Day",
    title: "Product Demonstration Webinar",
    type: "webinar"
  },
  {
    time: "August 28, 8am - 11am",
    title: "Evaluation Meeting",
    type: "meeting"
  },
  {
    time: "August 28, 8am - 11am",
    title: "Sales Pitch Presentation",
    type: "presentation"
  }
]

export default function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {events.map((event, i) => (
            <div key={i} className="flex gap-4">
              <div className={cn(
                "w-2 h-2 mt-2 rounded-full",
                event.type === "meeting" ? "bg-blue-500" :
                event.type === "webinar" ? "bg-purple-500" :
                event.type === "presentation" ? "bg-orange-500" : "bg-gray-500"
              )} />
              <div>
                <p className="text-sm text-gray-500">{event.time}</p>
                <p className="font-medium">{event.title}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

