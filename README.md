# funkin.me source code

This is the source code repository for the FUNKIN CREW WEBSITE,
[`funkin.me`](https://funkin.me)

It is a static site generated website, using [Zola](https://www.getzola.org/)
for generation, and [Pico CSS](https://picocss.com/) for styling.

# Setup

- Installation instrucitons for
  [zola are here](https://www.getzola.org/documentation/getting-started/installation/).
  It is just a binary file you either add to your path, or install via package
  manager!
- We get Pico CSS from NPM, so you need to [install node](https://nodejs.org) if
  you don't already have it.
  - Then you can just `npm ci` to get Pico CSS

# Running the site

From the
[Zola CLI usage docs](https://www.getzola.org/documentation/getting-started/cli-usage/)

> [Zola only has 4 commands: `init`, `build`, `serve` and `check`.](https://www.getzola.org/documentation/getting-started/cli-usage/)

So you just need to run `zola serve` to compile and run the site on a local web
server.
