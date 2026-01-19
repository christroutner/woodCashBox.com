---
sidebar_position: 2
---

# Hardware

This page describes the off-the-shelf hardware components used by the Cash Box. It includes links to Amazon pages for the computational hardware used by the Cash Box.

## Touch Screen

The Cash Box is built around the touch screen. This is for two reasons: 

1. The touch screen is the primary user interface
2. The screen market is extremely competitive and screen hardware is constantly changing.

The current screen used has great mounting features and good cable management, but is currently out of stock:

- [10.1" 1024x600 Touchscreen Monitor](https://amzn.to/4qMkTP8)

However, the same company makes a second product with the screen assembled into a plastic case. This plastic case can be removed to get to the screen underneath:

- [10.1" touchscreen with case](https://amzn.to/4jBefZH)

If this screen stops become available, the Cash Box wood frame will be modified to fit a similar screen.

## Raspberry Pi

The Raspberry Pi 5 is computational heart of the  Cash Box. Previous versions of the Raspberry Pi lacked the computational horsepower and memory to function well as a BCH-based appliance. But the newest generation has both.

- [Raspberry Pi 5 16GB](https://amzn.to/4aNBiOs)


## Hard Drive

A large, fast hard drive is needed to make a good blockchain appliance. The BCH blockchain is around 250GB, the Fulcrum Indexer is around 50GB, and the SLP indexer is also around 50GB. Plus room is needed for backups of these databases and other software. 1 TB of space can work, but it quickly becomes crowded. 2TB is much easier to work with.

This is the recommended NVMe hard drive. It has been verified to work with the RPi. Many lower priced models are not compatible with the Raspberry Pi:
- [2TB NVMe M.2 Hard Drive](https://amzn.to/454d2UE)

In order to load Ubuntu onto the NVMe SSD, you'll need a USB adapter:
- [NVMe to USB adapter](https://amzn.to/49MOF0j)

In order to connect the NVMe SSD to the Pi 5, you'll need a HAT adapter that can convert the M.2 connection to a PCIe connection.
- [PCIe to M.2 HAT](https://amzn.to/49hCJ6M)