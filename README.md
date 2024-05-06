# T3

## Introduction

This project is intended to be used to manage table tennis tournaments.

Some unique features:

- [ ] Introduce multiple events
- [ ] Don't require players to registered to create a match
- [ ] Add authorization
- [ ] Add cryptographic proof for events
- [ ] Introduce backplane for match events (since we might have multiple services running)

## Developer Quick Start

Required tools:
- docker
- npm

```sh
docker compose -f dockercompose.yaml up -d
npm install
npm run start:dev
```

If all goes well the application runs on http://localhost:3000/
Swagger: http://localhost:3000/api/