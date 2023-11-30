# EpTech Themeable Components

This library is a collection of independent themeable components built on top of Shadcn UI

## Usage

We use this library from local machine using `npm link` mechanism. First we need to clone this repository on our machine and install dependencies.

```sh
git clone https://github.com/ep-techsolutions/eptech-themeable-components
cd eptech-themeable-components
npm install
```

### Themeing

- Copy `env.example` to `.env` and edit the theme values of colors, spacing and font-family according to your needs.
  Colors are accepted in HSL format, spacing in `rem` units and font-family needs to be the name of a Google Font (from [Google Fonts](https://fonts.google.com/))
- Use `npm run build`. This will update the library output in `dist` folder with the theme configuration of your choice.

### Link

From inside the `eptech-themeable-components` folder run `npm link`

### Installing in your project

Move into your project and load the library as a linked dependency.

```sh
cd <your-project-dir>
npm link eptech-themeable-components
```

### Remove depdendency from project

```sh
npm unlink --no-save eptech-themeable-components
npm install
```
