# Senar.ai

A crowdsourcing platform for children education.

- [Senar.ai](#senarai)
  - [Deployment](#deployment)
  - [Development](#development)
  - [Useful resources](#useful-resources)
    - [How to use FontAwesome in the project](#how-to-use-fontawesome-in-the-project)
  - [Frequently Used Commands](#frequently-used-commands)
    - [Prisma commands](#prisma-commands)
    - [PlanetScale commands](#planetscale-commands)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a
deployment target, you only need to
[import your Git repository](https://vercel.com/new) into Vercel, and it will be
deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory
by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will
then automatically be deployed by Vercel, through its
[Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run the app locally, make sure your project's already run the setup scripts
(this will install dependencies and setup the database):

```sh
npm run setup
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready
to go!

If you're used to using the `vercel dev` command provided by
[Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's
not needed.

## Useful resources

### How to use FontAwesome in the project

1. Search [FontAwesome Icons](https://fontawesome.com/icons)
2. Download the SVG code (if it's a Pro icon, please ask @zainfathoni to
   download it for you)
3. Paste the SVG code into the `SVG INPUT` panel of
   [SVGR with these params](https://react-svgr.com/playground/?svgProps=role%3Dimg%2Cfill%3DcurrentColor&typescript=true)
4. Copy the resulting `<svg>` tag in the `JSX OUTPUT` panel
5. Paste the `<svg>` tag into the corresponding file under the
   [icons](/app/icons/) directory

## Frequently Used Commands

### Prisma commands

Learn more about this [Prisma schema file](prisma/schema.prisma) in the docs:
<https://pris.ly/d/prisma-schema>

Commands to know:

- `npx prisma generate` - update TypeScript definitions based on this schema
- `npx prisma db push` - push the schema changes to the database
- `npx prisma studio` - open the Studio, which allows you to edit the schema.
- `npx prisma migrate reset` - reset the migrations to the last version. This
  will reset the DB and run the seed script
- `npx prisma migrate dev --name <descriptive-name>` - generate a migration file
  for any changes you make to the schema (this will be committed).

### PlanetScale commands

Learn more about Planetscale CLI in the docs:
<https://docs.planetscale.com/reference/planetscale-cli>

Commands to know:

- `pscale connect <DATABASE_NAME> <BRANCH_NAME> --port 3309` - create a secure
  connection to a database branch for a local client
- `pscale database dump <DATABASE_NAME> <BRANCH_NAME> --output prisma/dumps/xx` -
  backup and dump the specified database
