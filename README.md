# T3

## Introduction

This project is intended to be used to manage table tennis tournaments.

Some unique features:

- [x] Don't require players to be registered to create a match
- [ ] Associate players with tournaments
- [ ] Have support for coach and other NPC
- [ ] Have support for expidite (and allow attaching policies)
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