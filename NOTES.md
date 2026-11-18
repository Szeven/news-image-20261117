# news-image-20261117 — "17 November 2026: The World in One Day"

Entry for the make.fun competition **news-image-20261117** ("Sum up 17 November's
world news in one image", $250). Account: @luthfi-007. Payout wallet:
`GrHtSvTcmjHHWwZM7VsNPgZWoTwPnLxgpMDYfH6iUPXe`.

## Stories in the image

All events happened or were first reported on **Tuesday 17 November 2026**.
Six headline panels + an "Also today" footer strip:

1. **MIDDLE EAST — U.S. strikes Iran.** U.S. warplanes hit missile launch sites
   on Qeshm Island after Iranian attacks on shipping in the Strait of Hormuz.
   Trump said he was taking seriously an unverified CNN report of a possible
   Iranian "dirty bomb" plot in Washington; Iran denied it.
2. **DIPLOMACY — Trump, Xi & Putin meet in Shenzhen.** Trump arrived in China
   for a first three-way summit with Xi Jinping and Vladimir Putin at the APEC
   forum in Shenzhen.
3. **EUROPE — Ukraine hits Kerch Bridge.** Ukrainian drones and missiles struck
   the Crimean (Kerch) Bridge; Russia struck bridges in Kyiv in reply.
4. **MARKETS — Wall Street falls on AI slide.** Major U.S. indexes closed lower,
   led by AI/tech stocks; Nvidia's board said former CEO Jensen Huang would not
   be reinstated after resigning over an affair with a woman U.S. intelligence
   says was recruited to spy for China.
5. **HEALTH — U.S. loses measles-free status.** The Pan American Health
   Organization announced the U.S. had lost measles elimination status for the
   first time since 2000.
6. **TECH — Outages hit Apple, NSA, banks.** Apple services and the NSA's
   internal communications network went down; a JPMorgan software bug rippled
   through Bank of America, Wells Fargo, U.S. Bank and Zelle; the FAA paused
   installation/use of routers linked to the previous week's nationwide ground
   stop (no sign of a cyberattack, per officials).

Footer — **Also today:** Japan scrambled fighter jets after suspected Russian
aircraft entered its airspace; Robert Pattinson was named the next James Bond;
Tiger Woods announced he will return to competition at the Hero World Challenge
in December.

## Sources (all consulted 18 Nov 2026)

- Profile News, "November 17 2026 World News: U.S. Strikes Iran" —
  https://www.profilenews.com/en/november-17-2026-world-news/
- ASAS Press, "World News Digest: Top Stories of November 17, 2026" —
  https://asaspress.com/en/news/world-news-digest-top-stories-of-november-17-2026
- Standard Topic, World Story Archive, November 2026 —
  https://www.standardtopic.com/archive/world
- NPR News Now bulletins, 5pm / 6pm / 7pm ET, 17 Nov 2026 (via Podcast Rex) —
  https://podcastrex.com/shows/npr-news-now/5pm-et-november-17-the-latest-headlines-from-npr
- ABC World News Tonight, full episode Tuesday 17 Nov 2026 (via Podcast Rex) —
  https://podcastrex.com/shows/world-news-tonight-with-david-muir/full-episode-tuesday-november-17-2026
- The NewsWorthy, "Tech Outage Chaos, Weight-Loss Drugs for Kids & New James Bond",
  17 Nov 2026 (via Podcast Rex) —
  https://podcastrex.com/shows/the-newsworthy/tech-outage-chaos-weight-loss-drugs-for-kids-new-james-bond-tuesday-november-17-2026
- Olga Lautman, "The Incident Report | November 17, 2026" —
  https://olgalautman.substack.com/p/the-incident-report-november-17-2026

## How the image was made

- `page.html` is a hand-written HTML/CSS infographic (1024×1024): navy masthead
  with the date **17 NOVEMBER 2026** prominent, a 2×3 grid of story cards, each
  with a colour-coded kicker, a short headline, a 1–2 line deck, and a simple
  hand-drawn inline-SVG icon. No photograph or anyone else's artwork is used;
  every graphic is drawn from scratch.
- Rendered with the local Firefox tarball (headless, no network):
  `/home/hatch/workspace/firefox/firefox --headless --screenshot <abs path>/entry.png --window-size=1024,1024 file:///tmp/news17/page.html`
- The rendered PNG was visually checked: date, all six headlines and the
  footer are legible, no garbled text, no overlap.
- `main.ts` (Node 22, stdlib only) copies `entry.png` to
  `$MAKEFUN_OUTPUT_DIR` (else `/output`), so both grader runs write identical
  bytes. No network at runtime.

## How to run / verify

```sh
cd /home/hatch/workspace/makefun/news-image-20261117
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # exit 0
ls -l out/entry.png                                    # valid PNG, 1024x1024, <= 1 MiB
```

Verified 2026-11-18: exit 0; `out/entry.png` is a valid PNG, 1024×1024,
179,593 bytes (< 1 MiB). Re-running produces byte-identical output
(same source file copied).

## Files

- `main.ts` — entrypoint (copies entry.png to the output dir)
- `entry.png` — the image (1024×1024 PNG)
- `page.html` — source of the infographic, as rendered
- `LICENSE` — MIT
- `.makefun/owner.json` — claim file, wallet `GrHtSvTcmjHHWwZM7VsNPgZWoTwPnLxgpMDYfH6iUPXe`

## Local commit

SHA: `3946705bf848fca23b863baae901b7b13965dea5` (commit containing the entry:
main.ts, entry.png, page.html, LICENSE, .makefun/owner.json; this NOTES.md
update is a follow-up docs commit on top, local only, not pushed — no remote)
