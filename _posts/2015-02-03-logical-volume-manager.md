---
layout: post
title:  "Logical Volume Manager"
date:   2015-02-03 17:17:17
categories: linux
---

# Introduction

Logical Volumes give an abstacted view of disk storage, which doesn't concern itself with traditional partitions.  A logical volume can be resized and moved easily on or between disks.

The ability to move or adjust volumes after their creation allows easier maintenance.  It is especially helpful when working with virtual machines and anticipating uncertain host environments.

# Context: Disk Storage Media

## Magnetic Disks

Characteristics

## Partitioning

## Typical Allocations

Constraints

Booting

## RAID

Striping, Mirroring

## Journaling

### Barriers

## New Media

Flash, solid state

# Logical Abstraction

## Uses

# References

1. [Logical Volume Manager (Linux), Wikipedia](https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux))
1. [LVM HOWTO](http://www.tldp.org/HOWTO/LVM-HOWTO/)
1. [RAID, Wikipedia](https://en.wikipedia.org/wiki/RAID)
1. [Empirical Measurements of Disk Failure Rates and Error Rates, Gray and Van Ingen](http://research.microsoft.com/apps/pubs/default.aspx?id=64599)
