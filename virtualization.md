---
layout: post
title: Xen Hypervisor
description: A Hypervisor allows multiple operating systems to coexist simultaneously on the same hardware, sharing access to the CPU.  Xen is a free microkernel hypervisor in widespread use, powering production clouds including Amazon Web Services, Rackspace and Linode.  It was originally developed at Cambridge University and is supported by the Linux Foundation.
---

# Types of Hypervisor

## Bare-Metal Hypervisor

A pure hypervisor that exists between hardware and guest operating systems.  It provides higher reliability and security through isolation.

## OS Hosted Hypervisor

A hypervisor that runs within a Host OS and hosts Guest OS's inside.  It uses the Host OS services to provide the virtual environment and doesn't require additional drivers.

## Xen Hypervisor

The Xen hypervisor is conceptually similar to a bare-metal hypervisor but hosts a Control Domain, from which it exposes Device Models and Drivers to Guest OS's.  The hypervisor itself is not in the Linux kernel, but the Linux kernel is Xen-enabled and includes everything Xen needs to run.

# Installation Process

1. Install the Control Domain (Dom0) operating system.
1. Install Xen packages/metapackage.
1. Reboot.
1. Configure devices: disks, peripherals etc.

# Xen Concepts

- Console: Interface to the outside world.
- Control Domain (Dom0): Kernel with drivers.  Xen management toolstack.
- Guest Domains.
- Driver/Stub/Service Domains: isolated, de-priviliged models and control services.

# Types of Virtualization

## Paravirtualizaton

Guest domains have access to a limited subset of virtual hardware.

Uses paravirtualized back- and front-ends.  Works on any system.

Driver Domains (e.g. disk, network) provide higher isolation and security.

# Hardware-Assisted Virtualization (HVM)

Software virtualization uses the QEMU/Device Model, or hardware can be used.  Emulation is slower than paravirtualization, particularly for IO devices.  No kernel support is needed.

Stub domains provide higher isolation and security.

# References 

- [Xen Wikipedia Entry](https://en.wikipedia.org/wiki/Xen)
- [The Hypervisor](http://www.xenproject.org/developers/teams/hypervisor.html)


