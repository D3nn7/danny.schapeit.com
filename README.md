# Website from Danny Schapeit (D3nn7)
[![❤️ Sponsor](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)](https://github.com/sponsors/D3nn7)


This website is build with [TailwindCSS](https://tailwindcss.com) and [Fontawesome Free](fontawesome.com) It's a static website, so no backend is needed.

### Development
So you not need to restart the TailwindCSS build process every time you change something, you can use the watch flag so ton every change the css file will be rebuild.

```shell
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```