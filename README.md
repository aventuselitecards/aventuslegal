# Aventus Legal

Static site for [aventuslegal.com](https://aventuslegal.com). Rosie Avalos, California LDA #24-046. Independent of Aventus Elite Cards.

## Local

Open `index.html` or any static server in this folder.

## Deploy

Netlify → add site from GitHub `aventuselitecards/aventuslegal` → publish directory `.` → assign domain `aventuslegal.com`.

## Gavel

Rosie uses [Gavel](https://www.gavel.io/) for client interviews.

1. In Gavel, open a workflow → three dots → **Copy workflow link**.
2. Paste into `js/config.js`:

```js
gavel: {
  portal: "",
  workflows: [
    { title: "Intake", blurb: "Start here", url: "https://..." }
  ]
}
```

Pro/Scale plans can iframe the same URL on `start.html`. Custom subdomain (for Safari) can be `start.aventuslegal.com` later.

## Swap later

Phone, email, LDA number: `js/config.js` and the HTML. Portrait: `css/portrait.css` (generated from her brand card).
