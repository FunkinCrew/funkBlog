# funkin.me source code

This is the source code repository for the FUNKIN CREW WEBSITE,
[`funkin.me`](https://funkin.me)

It is a static site generated website, using [Zola](https://www.getzola.org/)
for generation, [Tailwind CSS](https://tailwindcss.com/) for styling, and [Iconify Design](https://iconify.design/) for icons.

# Setup

- Installation instructions for
  [zola are here](https://www.getzola.org/documentation/getting-started/installation/).
  It is just a binary file you either add to your path, or install via package
  manager!
- We get Pico CSS from NPM, so you need to [install node](https://nodejs.org) if
  you don't already have it.
  - Then you can just `npm ci` to get Pico CSS

# Running the site

- locally using `npm run dev`
- in production using `npm run build` and then `zola build`