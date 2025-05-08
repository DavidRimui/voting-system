import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Vote } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <Vote className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Welcome to the Voting System</h1>
        <p className="mt-6 text-xl text-muted-foreground">A secure and transparent platform for casting your vote.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <Button asChild size="lg">
            <Link href="/voting">Vote Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/admin/login">Admin Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
