import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: {
      name: "User One",
      avatar: "/placeholder.svg"
    },
    action: "moved",
    subject: "Cloud Functionality",
    detail: "task to Completed",
    time: "5 minutes ago"
  },
  {
    user: {
      name: "System",
      avatar: "/placeholder.svg"
    },
    action: "billed quote",
    subject: "$16,850.00",
    detail: "is sent to Sterling Cooper",
    time: "3 hours ago"
  }
]

export  default function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, i) => (
            <div key={i} className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={activity.user.avatar} />
                <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-gray-500">{activity.time}</p>
                <p>
                  <span className="font-medium">{activity.user.name}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-medium">{activity.subject}</span>
                  {' '}{activity.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

