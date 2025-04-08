# Portfolio

Bootstrap written portfolio for meeting assignment specifications.
Not for production use!

## Warnings

### Images

#### One version

1. `wolf.avif` only have one size because I don't have a higher-res version.

2. `icon.svg` only have one size because it's an svg image and generating other versions won't reduce bandwidth consumption.

#### Encoding

All other images are of [`avif` format](https://en.wikipedia.org/wiki/AVIF), the image format most optimized for the web.

```sh
ffmpeg -i slinky.jpg -vf "crop=in_h:in_h" -vcodec libsvtav1 -svtav1-params avif=1 slinky.avif
```

## Used

### [Google Material Design Icons](https://fonts.google.com/icons)

### [Bootstrap CSS Library](https://getbootstrap.com)

JS is not included because it's not required.

### [Gutenberg](https://github.com/BafS/Gutenberg)

So the page prints correctly.

### [Inter](https://rsms.me/inter)

### [Monaspace Neon](https://monaspace.githubnext.com)

### Images

Branding assets downloaded directly from LinkedIn, Bluesky, and Dribbble.

## To run locally

### Install [Bun](https://bun.sh):

(Linux/Mac)

```sh
curl -fsSL https://bun.sh/install | bash
```

(Windows)

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Install dependencies

```sh
bun i
```

### Run vite

```sh
bun run vite
```

*I've never hated web dev so much.*

## To deploy

### Run vite build

```sh
bun run vite build
```

### Commit & Push

```sh
git add .

git commit -m 'fix build'

git push
```

## [Figma Design Share](https://www.figma.com/design/kbocALxI9u9E65K8XuFvvM/portfolio-2025APR08?node-id=0-1\&m=dev)

## Learnt

### Never use Bootstrap in production.

1. It has components, but many aspects of them cannot be customized with CSS variables.

2. The official recommendation seems to be adding utility classes to those components, which diminishes the benefits of using components.

3. Bootstrap prompts a utility-class based approach. However, it lacks many basic utility classes, such as `backdrop-filter: blur(...)`, forcing users to add them using the API.

4. Bootstrap's utility API is very limited. It doesn't allow adding two CSS properties inside one utility class.

### Don't be afraid of diving into the source code.

1. It's the only way to understand why Bootstrap is doing what it's doing.

2. Gained an appreciation of engineers worked with Bootstrap.

3. Cascade Layers can help with overriding stuff, but diving into the source code is the only way sometimes, especially with `!important` littered all around.

### Prefer a real Static Site Generator

1. Vite serves all HTML files without extra config, but doesn't build them without a workaround.

2. A real SSG handles all of these automatically.

---

## Requirements

https://aquaticat.github.io/portfolio

DONE Create a new repository folder named portfolio

DONE Follow the convention for adding file and folder names. All lowercase including file extensions, no special characters, no spaces, must start with a letter, and may use hyphens or underscores.

DONE You must use the Bootstrap framework for building your portfolio.

DONE Utilize CSS variables to customize the default colour scheme of Bootstrap.

DONE Your design must be optimized for a variety of screen sizes.

DONE Your design should strive to meet accessibility standards. This should include semantic markup in a logical order, readable text, alternative text for visual elements, and functional using only the keyboard. ARIA roles, Schema, and skip links as required. *No skip links required because there are only three items in header.*

DONE You must use one publicly available CSS library in addition to the Bootstrap framework. You may also use a JavaScript library for functionality. See the list of CSS libraries.

DONE If you choose to use web fonts, which is encouraged, use only fonts that you have the right to use, for example, Google fonts.

DONE All text, images, illustrations, videos, or any other asset, must be your own where possible. If you are using any stock images please identify them, in the README.md file. No copyrighted materials.

NOT YET Make sure that any images and illustrations are optimized, and that they respond (grow and shrink) to the layout. Create a minimum of two sizes of your images and utilize tag and srcset, sizes, and media attributes as needed.

DONE Create a README.md file and save it at the root of your site. In the readme file add information assuming that you are asked to explain the following about your portfolio in an interview, "Tell us about your process, challenges you faced during development and how you overcame those changes. What have you learned by creating your web portfolio?" Finally, include a list of any assets or resources you used that was not your own, including any frameworks, libraries, plugins, fonts, or images. You will need to use the markdown language to format your README.md file.

DONE Do not forget to include your design in the project folder. It could be a link to your figma in README.md file or screen capture in the assets folder for different view ports.

DONE Your web portfolio MUST be published on the GitHub Pages site. This means going to http://your-username.github.io/portfolio will display your web portfolio.
