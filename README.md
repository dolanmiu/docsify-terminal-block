# docsify-terminal-block 🖥️

[![](https://data.jsdelivr.com/v1/package/npm/docsify-terminal-block/badge)](https://www.jsdelivr.com/package/npm/docsify-terminal-block)

A docsify plugin to add pretty terminal blocks to your docs. It has `Copy to Clipboard` functionality too.

## Screenshots

![Example](https://i.imgur.com/IZdOtLh.png)

## Installation

Add the docsify-terminal-block plugin to your index.html after docsify. The plugin is available on jsdelivr (below), unpkg, and other CDN services that auto-publish npm packages.

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-terminal-block@1.0.2"></script>
```

## Usage

Add the `terminal` tag to your markdown file to create a terminal block.

````

    ```terminal
    npm run start
    ```
````

You can add prefixes to the terminal block to change the style of the line. For example adding `$` or `>`:

````

    ```terminal
    $|npm run start
    >|npm run start
    ```
````

You can make the line a warning, info, error, or success by adding `warning`, `info`, `error`, or `success` after the prefix:

````

    ```terminal
    $|warning|npm run build
    >|info|npm run start
    >|error|npm run start
    >|success|npm run start
    ```
````

## Example

````

    ```terminal
    npm run start
    $|npm run start
    $|warning|npm run build
    >|info|npm run start
     |...
    >|error|npm run start
    >|success|npm run start

    warning|npm run build
    ```
````

---

Made with ❤️
