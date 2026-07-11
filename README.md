# SpaceGuessr

![HTML](https://img.shields.io/badge/HTML-plain-white?style=flat-square&labelColor=111111)
![CSS](https://img.shields.io/badge/CSS-responsive-white?style=flat-square&labelColor=111111)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-white?style=flat-square&labelColor=111111)
![NASA Images](https://img.shields.io/badge/images-NASA-green?style=flat-square&labelColor=111111)
![Supabase](https://img.shields.io/badge/leaderboard-Supabase-green?style=flat-square&labelColor=111111)

SpaceGuessr is a browser game in the spirit of GeoGuessr, but set in space.  
Instead of streets and cities, players are dropped into real NASA imagery and have to identify what they are seeing: planets, moons, nebulae, galaxies, and other iconic locations from across the solar system and beyond.

Built for the Stardance Hackathon hosted by Hack Club and supported by NASA, AMD, and GitHub.

Live demo: [blizz606.github.io/SpaceGuessr](https://blizz606.github.io/SpaceGuessr/)

![SpaceGuessr preview](preview.png)

## Why It Is Fun

- Real NASA image sources instead of placeholder art
- Fast, arcade-style guessing rounds
- Multiple modes for quick runs, score chasing, and daily competition
- Lightweight stack: plain HTML, CSS, and JavaScript
- Works without a build step or backend inside this repo

## Features

- Curated library of 73 NASA space images with facts, source metadata, and difficulty tags
- Six playable modes: `Quick`, `Classic`, `Timed`, `Daily`, `Blind Reveal`, and `Learn`
- Casual and Special mode groups with a smooth menu background transition
- Responsive UI for desktop and mobile
- Animated score flow, result states, confetti, streak effects, and polished game feedback
- Lightweight in-browser audio feedback for hints, answers, streaks, and run endings
- Online leaderboard support for score-chasing modes
- Local fallback storage if the online leaderboard is unavailable
- Automatic leaderboard saving for non-daily runs with compact name capture
- Simple static deployment, including GitHub Pages

## Game Modes

| Mode | Format | Description |
| --- | --- | --- |
| `Quick` | 3 rounds | A short run for fast sessions |
| `Classic` | 5 rounds | The standard SpaceGuessr experience |
| `Timed` | 5 rounds, 10 seconds each | Answer before the clock runs out |
| `Daily` | 1 shared image per day | Same challenge for everyone on that date |
| `Blind Reveal` | 5 rounds, 15 seconds each | The image starts hidden and reveals more over time |
| `Learn` | 4 guided rounds | Beginner-friendly explanations after every answer, with no leaderboard pressure |

Leaderboard-supported modes submit scores automatically after a run.  
If Supabase is unavailable, the game falls back to local score storage.
Runs with `0` points are not saved.

## Scoring

- Correct answers are worth `+50` points in normal modes.
- Blind Reveal starts at `+80` points, then drops to `70`, `60`, `50`, `40`, `30`, and `20` as more of the image is revealed.
- Learn Mode uses lighter `+35` point rewards and does not punish wrong answers, because the goal is practice.
- Streaks add bonus points on top of the base reward: `+10` at a 2x streak, `+20` at 3x, `+30` at 4x, and so on.
- Wrong answers cost `-25` points and reset the current streak.
- The visible score never drops below `0`.
- A continued streak adds more points each time, so fast clean runs scale better than cautious low-streak runs.

## Tech Stack

- `index.html` for structure and screens
- `style.css` for layout, effects, responsiveness, and visual polish
- `script.js` for game logic, mode handling, scoring, transitions, audio, and leaderboard integration
- `game-config.js` for mode configuration and rank tiers
- `game-data.js` for the NASA image question pool
- Supabase for online leaderboard storage
- NASA Image and Video Library as the primary content source
- GitHub Actions for GitHub Pages deployment

## Run Locally

You can either use the live version or run the project locally.

Because the app uses JavaScript modules, a local static server is the most reliable way to run it.

### Option 1: Start a local static server

```bash
npx serve .
```

Then open the local URL shown in your terminal.

### Option 2: Use Python

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

## Project Structure

```txt
.
|-- .github/
|   `-- workflows/
|       `-- deploy-pages.yml
|-- .nojekyll
|-- index.html
|-- style.css
|-- script.js
|-- game-config.js
|-- game-data.js
|-- media/
|   |-- BackgroundImage.png
|   |-- BG_Image2.png
|   |-- SpaceGuesrr.png
|   `-- icons/
|       `-- flame.svg
|-- favicon.ico
`-- preview.png
```

## Content Model

The image pool is stored in `game-data.js` as a JavaScript array and imported by `script.js`.  
Each entry includes:

- `imageUrl`
- `nasaId`
- `source`
- `correctAnswer`
- `wrongAnswers`
- `fact`
- `difficulty`

Example:

```js
{
  imageUrl: "https://images-assets.nasa.gov/image/PIA15691/PIA15691~medium.jpg",
  nasaId: "PIA15691",
  source: "NASA Image and Video Library",
  correctAnswer: "Mars",
  wrongAnswers: ["The Moon", "Earth", "Mercury"],
  fact: "Curiosity captured this early color landscape after landing in Gale Crater."
}
```

That setup makes it easy to expand the question pool without changing the overall game system.  
The current pool includes 73 curated NASA-based targets across planets, moons, nebulae, galaxies, and iconic deep-space imagery.

Mode settings and rank thresholds live in `game-config.js`. That keeps game rules separate from the question data and the DOM-heavy runtime code.

## Leaderboard Setup

The online leaderboard uses Supabase and is wired up for score submission in leaderboard-supported modes.

Suggested table:

```sql
create table public.leaderboard (
  id bigint generated by default as identity primary key,
  name text not null,
  score bigint not null,
  mode text not null,
  rounds integer not null,
  created_at timestamptz default now()
);
```

Suggested RLS policies:

```sql
alter table public.leaderboard enable row level security;

create policy "Anyone can read leaderboard"
on public.leaderboard
for select
to anon
using (true);

create policy "Anyone can submit leaderboard score"
on public.leaderboard
for insert
to anon
with check (
  char_length(name) between 1 and 18
  and score >= 0
  and rounds > 0
  and mode in ('quick', 'classic', 'timed', 'daily', 'blind')
);
```

The game also compares scores by player name and only replaces an existing score when the new result is better.
Daily and Learn modes do not save scores, and runs with `0` points are intentionally excluded from saving.

## Deployment

Because the project is fully static, it works well with:

- GitHub Pages
- Netlify
- Vercel static hosting
- Any simple web server

### GitHub Pages

The repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` for deploying the static site.

Recommended setup:

1. Push to `main`
2. In GitHub repository settings, open `Pages`
3. Set the publishing source to `GitHub Actions`

The `.nojekyll` file is included so GitHub Pages serves the project as a plain static site without Jekyll processing.



## Reviews
"I love space and I could genuinely play this for hours on end, well done!"

"Fun game, I quite enjoyed it. Design is good, animations are smooth, overall just high quality and I can tell a lot of care went into it."



## Credits

- NASA Image and Video Library for the imagery
- Hack Club Stardance for the hackathon theme and challenge
- Supabase for lightweight leaderboard infrastructure

## AI Use

AI was used as a development aid for parts of the JavaScript workflow, mainly around debugging and structuring logic.  
ChatGPT was also used to help research and shortlist additional NASA images for the expanded question pool.  
The project itself was still manually tested, integrated, and iterated on during development.
