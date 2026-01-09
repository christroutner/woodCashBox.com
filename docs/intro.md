---
sidebar_position: 1
---

# Introduction

The **Cash Box** is a hardware appliance which runs the [Cash Stack](https://cashstack.info) suite of software. This is infrastructure and applications running on top of the Bitcoin Cash blockchain, Inter-Planetary File System ([IPFS](https://ipfs.tech/)), and [Nostr](https://nostr.org/).

The Cash Box is primarily an appliance for software developers and self-hosting advocates. But it's also very useful as a point of sale (PoS) device for merchants. It can be mounted to the wall, it can be customized, and the touch screen makes it a great appliance.

## Hardware

The computation of the Cash Box is built with the following hardware:
- Raspberry Pi 5 with 16GB of SRAM
- 10.5 inch touch screen
- 2TB NVMe SSD

The body of the Cash Box is built with 5mm laser-cut and engraved plywood. 3D printing brackets are used to hold everything together.

## Software

The Cash Box runs the following Cash Stack infrastructure and applications:

- Infrastructure
  - [BCHN](https://bitcoincashnode.org/en/) full node
  - [Fulcrum](https://github.com/cculianu/Fulcrum?tab=readme-ov-file) indexer
  - [SLP Token](https://slp-tokens.com) indexer
  - [bch-api](https://cashstack.info/docs/back-end/psf-bch-api) REST API
  - [ipfs-file-pin-service](https://cashstack.info/docs/IPFS/file-storage) IPFS file network

- Applications
  - [Electron Cash](https://electroncash.org/) wallet with Cash Fusion for financial privacy
  - [BCH Block Explorer](https://bch.loping.net/) (self-hosted) auditing tool
  - [Point of Sale](https://pos.cash/) (self-hosted) app for merchants to recieve BCH payments
  - [Web Wallet](https://wallet.psfoundation.info/) (self-hosted) wallet for BCH and SLP tokens.

## Build or Buy

This documentation site exists to encourage, educate, and promote the building of this the Cash Box. 3D print files, laser engraver files, links to open source software, tutorial videos, and written guides cover the various skill sets and activities required to build a Cash Box from scratch.

Parts, partial builds, and complete builds of the Cash Box are available [at the store](https://store.woodcashbox.com). We strive to provide access to all levels. The store also offers management plans to keep the software up-to-date.
