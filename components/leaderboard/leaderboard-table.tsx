import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Award, Medal, Trophy } from "lucide-react"

export default function LeaderboardTable() {
  const leaderboardData = [
    {
      rank: 1,
      name: "Rahul Sharma",
      avatar: "/diverse-student-studying.png",
      score: 980,
      accuracy: "92%",
      streak: 14,
      isCurrentUser: false,
    },
    {
      rank: 2,
      name: "Priya Patel",
      avatar: "/diverse-students-studying.png",
      score: 945,
      accuracy: "89%",
      streak: 21,
      isCurrentUser: false,
    },
    {
      rank: 3,
      name: "Amit Kumar",
      avatar: "/diverse-students-studying.png",
      score: 920,
      accuracy: "87%",
      streak: 10,
      isCurrentUser: false,
    },
    {
      rank: 4,
      name: "Sneha Gupta",
      avatar: "/diverse-group-studying.png",
      score: 890,
      accuracy: "85%",
      streak: 7,
      isCurrentUser: false,
    },
    {
      rank: 5,
      name: "Vikram Singh",
      avatar: "/student5-artwork.png",
      score: 860,
      accuracy: "82%",
      streak: 5,
      isCurrentUser: false,
    },
    {
      rank: 6,
      name: "Neha Verma",
      avatar: "/student6-artwork.png",
      score: 830,
      accuracy: "80%",
      streak: 9,
      isCurrentUser: false,
    },
    {
      rank: 7,
      name: "Rajesh Khanna",
      avatar: "/student7-artwork.png",
      score: 810,
      accuracy: "78%",
      streak: 4,
      isCurrentUser: true,
    },
    {
      rank: 8,
      name: "Ananya Desai",
      avatar: "/student8-artwork.png",
      score: 790,
      accuracy: "76%",
      streak: 3,
      isCurrentUser: false,
    },
    {
      rank: 9,
      name: "Karan Malhotra",
      avatar: "/student9-artwork.png",
      score: 770,
      accuracy: "74%",
      streak: 6,
      isCurrentUser: false,
    },
    {
      rank: 10,
      name: "Meera Joshi",
      avatar: "/diverse-students-studying.png",
      score: 750,
      accuracy: "72%",
      streak: 2,
      isCurrentUser: false,
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-700" />
      default:
        return null
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">Rank</TableHead>
            <TableHead>Student</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="hidden text-right sm:table-cell">Accuracy</TableHead>
            <TableHead className="hidden text-right sm:table-cell">Streak</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((user) => (
            <TableRow key={user.rank} className={user.isCurrentUser ? "bg-muted" : undefined}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-1">
                  {getRankIcon(user.rank)}
                  <span>{user.rank}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    {user.isCurrentUser && (
                      <Badge variant="outline" className="w-fit">
                        You
                      </Badge>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">{user.score}</TableCell>
              <TableCell className="hidden text-right sm:table-cell">{user.accuracy}</TableCell>
              <TableCell className="hidden text-right sm:table-cell">{user.streak} days</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
