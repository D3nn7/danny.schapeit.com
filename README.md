# Website from Danny Schapeit (D3nn7)

This website is build with [Next.js](https://nextjs.org), [TailwindCSS](https://tailwindcss.com) and [Heroicons](https://heroicons.com).

### Development
To start development server, run the following command:

```shell
npm run dev
```

### Production
For the reason that I will run this wesbsite using a Docker container, I provided a `Dockerfile`, so you can easily setup a container with the content of this website.

Build your container: 
```shell
docker build -t danny-schapeit-com .
```

Run your container: 
```shell
docker run -d -p 3000:3000 --name danny-schapeit-com danny-schapeit-com
```

Access site on [IP/Domain]:3000
