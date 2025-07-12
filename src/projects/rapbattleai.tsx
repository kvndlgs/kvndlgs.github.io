import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music2, Sparkles, User, Code2, Globe } from "lucide-react";

export default function RapBattleAIPortfolioShowcase() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">🎤 RapBattle.AI</h1>
        <p className="text-lg text-muted-foreground">
          AI-Powered Rap Battles with Personality & Flow
        </p>
        <a
          href="http://rapbattleai.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-4">Try it Live</Button>
        </a>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Sparkles className="w-6 h-6" /> What is RapBattle.AI?
          </h2>
          <p>
            RapBattle.AI is an AI-powered rap battle simulator that generates
            lyrical battles between custom or pre-made characters. Think
            freestyle rap meets RPG—with satire and swagger.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <User className="w-6 h-6" /> Features
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🎭 Context-aware lyrical battles with personal banter</li>
            <li>👤 Fully customizable rappers with skills and personality</li>
            <li>😂 Funny pre-made characters for quick battles</li>
            <li>🔊 AI-generated audio with ElevenLabs</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Code2 className="w-6 h-6" /> Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>⚛️ React + Vite (Frontend)</div>
            <div>🧠 GROQ API (Text Generation)</div>
            <div>🗣️ ElevenLabs (Voice Synthesis)</div>
            <div>📦 Supabase (Backend & Storage)</div>
            <div>🧩 Custom instruction logic for context awareness</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Globe className="w-6 h-6" /> Why It Stands Out
          </h2>
          <blockquote className="border-l-4 pl-4 italic">
            "RapBattle.AI isn't just a gimmick—it blends AI creativity,
            customization, and humor to deliver reactive, dynamic performances."
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}
