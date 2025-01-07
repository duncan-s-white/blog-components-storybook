# Storybook for Tailwind Blog

This is the component library for my Next.js Tailwind [blog & portfolio](https://duncanwhite.co.uk/) app.

It was set up as an example of using an [npm component library package](https://www.npmjs.com/package/tailwind-blog-storybook) with Storybook, which is installed into the main project.

The npm package can be installed into any next.js application.

`npm i tailwind-blog-storybook`

For my projects I am using Yarn so will show the yarn commands:

`yarn add tailwind-blog-storybook`

## Developing Locally

Pull the repo down from [github](https://github.com/duncan-s-white/blog-components-storybook)

To build the package using rollup use:

`yarn run rollup`

The old build can be removed using `yarn run pre-rollup`

I am using [Yalc](https://www.npmjs.com/package/yalc) to publish and consume the package while in local development, use:

`yalc push`

to both publish to the local yalc repository and propagate all changes to existing yalc package installations.

alternatively use `yalc publish` if you just wish to publish without updating.

When local development work has been completed, build with rollup and deploy to the npm register with:

`npm publish`

You will be prompted for login details.
