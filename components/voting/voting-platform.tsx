"use client"

import { useState, useEffect } from "react"
import { getCandidates, type Candidate } from "@/lib/data"
import { CandidateCard } from "@/components/voting/candidate-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

export function VotingPlatform() {
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [positionFilter, setPositionFilter] = useState("all")
  const [partyFilter, setPartyFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  // Get unique positions and parties for filters
  const positions = candidates.length > 0 ? ["all", ...Array.from(new Set(candidates.map((c) => c.position)))] : ["all"]

  const parties = candidates.length > 0 ? ["all", ...Array.from(new Set(candidates.map((c) => c.party)))] : ["all"]

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true)
    setTimeout(() => {
      const allCandidates = getCandidates()
      setCandidates(allCandidates)
      setFilteredCandidates(allCandidates)
      setIsLoading(false)
    }, 1000)
  }, [])

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

  const handleVote = (candidateId: string) => {
    // Update local state to reflect vote
    setCandidates((prev) => prev.map((c) => (c.id === candidateId ? { ...c, votes: c.votes + 1 } : c)))
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
      <h1 className="text-3xl font-bold mb-8">Vote for Your Candidate</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

      {filteredCandidates.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No candidates found</h2>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} onVote={handleVote} />
          ))}
        </div>
      )}
    </div>
  )
}

