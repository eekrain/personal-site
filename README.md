# Welcome to My [Personal Site](https://personal-site-eekrain.vercel.app/)

![image](https://github.com/eekrain/personal-site/assets/65037854/c5246104-ee93-4208-b4b3-34e96ca92bce)

<p align="center">
⚒️ Built with <a text="bold" href="https://astro.build"><strong>Astro</strong></a> and <a text="bold" href="https://docs.solidjs.com"><strong>SolidJS</strong></a>
<br/><br/>
</p>

## 🚀 Project Structure

```
/
├── public/
│   └── files
│   └── img
├── src/
│   ├── components/
│   ├── constants/
│   └── layouts/
│   └── pages/
│   └── utils/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
