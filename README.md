# Sterile Manufacturing LLC website

Single-page Next.js static export for Sterile Manufacturing LLC, built around the supplied logo, product catalogue material and Ajman location details.

## Run locally

```bash
npm install
npm run clean
npm run dev
```

## Production build

```bash
npm run build
```

The static output is generated in `out/`.

## If Next reports a missing `routes-manifest.json`

Stop the running Next process, clear the generated cache, then start again:

```powershell
npm run clean
npm run dev
```

The project keeps generated Next files in `.next-local` so an old `.next` folder cannot be reused accidentally. If Windows reports that a cache file is in use, close the terminal running Next first and run `Remove-Item -LiteralPath '.next','.next-local' -Recurse -Force` from the project folder.
