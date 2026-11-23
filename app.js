const GROUPS = [
  { name: "Research", agents: ["Trend Scout", "Audience Listener", "Comment Miner", "Competitor Watch", "Post Writer", "Email Writer"] },
  { name: "Content", agents: ["Visual Designer", "Carousel Builder", "Voiceover", "Video Editor", "Brand Check", "Approval Desk"] },
  { name: "Publish", agents: ["Scheduler", "TikTok Poster", "Reels Poster", "Shorts Poster", "X Poster", "Newsletter"] },
  { name: "The loop", agents: ["Post Analyst", "Revenue Tracker", "Call Tracker", "Email Analyst", "Weekly Report", "Loop Feeder"] },
  { name: "Sales", agents: ["Lead Scorer", "Call Booker", "Reminder", "Follow-up", "Payment Link", "CRM Sync"] },
  { name: "Community", agents: ["Comment Replier", "DM Agent", "FAQ Builder", "Review Asker", "Lead Catcher", "Escalation"] }
];

const STEPS = [
  { name: "1. Research", body: "Claude finds what your audience is asking this week, and writes the posts and the emails." },
  { name: "2. Content", body: "Claude designs the visuals. ElevenLabs adds your voice. Everything waits at the Approval Desk." },
  { name: "3. You approve", body: "Nothing goes live until you tap approve. In the demo, three posts are waiting at the You step." },
  { name: "4. Publish and answer", body: "On approve, it posts to every channel (TikTok, Reels, Shorts, X, newsletter) and answers the comments in your voice." },
  { name: "5. The loop", body: "It checks which posts made money and feeds that into next week's plan." },
  { name: "6. Connected", body: "Claude Code connects all of it to your CRM, your calendar, and your channels. One command: run the marketing loop." }
];

const EXAMPLE = [
  { name: "Audience Listener, last 7 days", lines: ["\"Why does my espresso taste sour?\" TikTok comments, 1,048 mentions", "\"Is a $100 grinder good enough?\" r/espresso, 427 mentions"] },
  { name: "Post Writer, 2 drafts", lines: ["TikTok script, 0:32: \"Sour espresso isn't the beans.\"", "Newsletter, Tue 7:00"] },
  { name: "Approval Desk, needs you", lines: ["Carousel: \"Sour espresso?\" / \"Grind 2 steps finer.\" / \"Taste again in 20 sec.\"", "Voice clip, 0:32: \"Sour espresso isn't the beans. It's your grind.\"", "Ready to post: TikTok, Reels, Shorts, X"] },
  { name: "Revenue Tracker, last 7 days", lines: ["Sour espresso fix: 212k views, $3,933", "Morning routine: 96k views, $119", "Oat milk myth: 48k views, $587", "Bean storage: 31k views, $77"] },
  { name: "Connecting the stack", lines: ["HubSpot: 1,284 contacts", "Google Calendar: 12 open slots"] },
  { name: "Morning page, Tue 7:00", lines: ["What worked: Sour espresso fix, 212k views, 41 orders, $3,940", "Who booked a call: 10:00 Café Lindner, then Studio Fern"] }
];

function fill(id, items, render) {
  const el = document.getElementById(id);
  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";
    render(card, item);
    el.appendChild(card);
  }
}

fill("groups", GROUPS, (card, g) => {
  const h = document.createElement("h3");
  h.textContent = g.name;
  const c = document.createElement("div");
  c.className = "count";
  c.textContent = g.agents.length + " agents";
  card.append(h, c);
  for (const a of g.agents) {
    const p = document.createElement("p");
    p.textContent = a;
    card.appendChild(p);
  }
});

fill("steps", STEPS, (card, s) => {
  const h = document.createElement("h3");
  h.textContent = s.name;
  const p = document.createElement("p");
  p.textContent = s.body;
  card.append(h, p);
});

fill("example", EXAMPLE, (card, e) => {
  const h = document.createElement("h3");
  h.textContent = e.name;
  card.appendChild(h);
  for (const line of e.lines) {
    const p = document.createElement("p");
    p.textContent = line;
    card.appendChild(p);
  }
});
