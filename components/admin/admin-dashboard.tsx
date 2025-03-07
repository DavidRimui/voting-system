"use client"

import { useState, useEffect } from "react"
import { getCandidates, type Candidate } from "@/lib/data"
import { CandidateCard } from "@/components/voting/candidate-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Search, BarChart2, Users, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AdminDashboard() {
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [positionFilter, setPositionFilter] = useState("all")
  const [partyFilter, setPartyFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  // Get unique positions and parties for filters
  const positions = candidates.length > 0 ? ["all", ...Array.from(new Set(candidates.map((c) => c.position)))] : ["all"]

  const parties = candidates.length > 0 ? ["all", ...Array.from(new Set(candidates.map((c) => c.party)))] : ["all"]

  // Stats
  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0)
  const topCandidate =
    candidates.length > 0 ? candidates.reduce((prev, current) => (prev.votes > current.votes ? prev : current)) : null

  useEffect(() => {
    // Load candidates data
    setIsLoading(true)
    setTimeout(() => {
      const allCandidates = getCandidates()
      setCandidates(allCandidates)
      setFilteredCandidates(allCandidates)
      setIsLoading(false)
    }, 1000)
  }, [refreshTrigger])

  useEffect(() => {
    // Apply filters
    let filtered = candidates

    if (searchTerm) {
      filtered = filtered.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    if (positionFilter !== "all") {
      filtered = filtered.filter((c) => c.position === positionFilter)
    }

    if (partyFilter !== "all") {
      filtered = filtered.filter((c) => c.party === partyFilter)
    }

    setFilteredCandidates(filtered)
  }, [searchTerm, positionFilter, partyFilter, candidates])

  const refreshData = () => {
    setRefreshTrigger((prev) => prev + 1)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Votes</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalVotes}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Candidates</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{candidates.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leading Candidate</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{topCandidate?.name || "N/A"}</div>
            <p className="text-xs text-muted-foreground">
              {topCandidate ? `${topCandidate.votes} votes` : "No votes recorded"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="table" className="mb-8">
        <TabsList>
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="relative">
            <Label htmlFor="search" className="mb-2 block">
              Search Candidates
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search by name..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="position" className="mb-2 block">
              Filter by Position
            </Label>
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger id="position">
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position === "all" ? "All Positions" : position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="party" className="mb-2 block">
              Filter by Party
            </Label>
            <Select value={partyFilter} onValueChange={setPartyFilter}>
              <SelectTrigger id="party">
                <SelectValue placeholder="Select party" />
              </SelectTrigger>
              <SelectContent>
                {parties.map((party) => (
                  <SelectItem key={party} value={party}>
                    {party === "all" ? "All Parties" : party}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="table">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Party</TableHead>
                  <TableHead className="text-right">Votes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCandidates.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell className="font-medium">{candidate.id}</TableCell>
                    <TableCell>{candidate.name}</TableCell>
                    <TableCell>{candidate.position}</TableCell>
                    <TableCell>{candidate.party}</TableCell>
                    <TableCell className="text-right">{candidate.votes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCandidates.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} showVotes={true} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

