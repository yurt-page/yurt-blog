# Yurt Blog
A lightweight blog engine for devices with limited resources.
Unlike others blog engines it's intended for usual non-technical people.
That's why it should provide a well known design as from social networks.
Small posts, more images and media and a feed of others posts.
Main usage is a small group of people like family or classmates.

For a design base we'll use VKUI library form a vk.com social network.
It's nice and simple enough but also based on React.JS from FaceBook.
So we literally reuse existing social networks solutions but without dark patterns for addiction.

Design and ideas https://github.com/yurt-page/docs/blob/main/blog.md

## How to install

`npx @vkontakte/create-vk-app <folder name>`

## How to start

Go to created folder and run:
`yarn start` || `npm start` — this will start dev server with hot reload on `localhost:10888`.

`yarn run build` || `npm run build` — this will build production bundle, with treeshaking, uglify and all this modern fancy stuff
