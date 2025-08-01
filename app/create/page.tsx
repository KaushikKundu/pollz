import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreatePollPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Polls
            </Button>
          </Link>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{poll.title}</CardTitle>
                  {poll.description && <CardDescription className="text-base">{poll.description}</CardDescription>}
                </div>
                <Badge variant="secondary" className="ml-4">
                  <Users className="w-3 h-3 mr-1" />
                  {poll.totalVotes} votes
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {!hasVoted ? (
                <>
                  <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                    {poll.options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                      >
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="flex gap-3">
                    <Button onClick={handleVote} disabled={selectedOption === "" || isVoting} className="flex-1">
                      {isVoting ? "Submitting..." : "Submit Vote"}
                    </Button>
                    <Button variant="outline" onClick={handleViewResults} className="gap-2 bg-transparent">
                      <BarChart3 className="w-4 h-4" />
                      View Results
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-green-600 font-medium text-lg mb-2">Thank you for voting!</div>
                  <div className="text-gray-600 mb-4">Your vote has been recorded anonymously</div>
                  <Button onClick={handleViewResults} className="gap-2">
                    <BarChart3 className="w-4 h-4" />
                    View Results
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
