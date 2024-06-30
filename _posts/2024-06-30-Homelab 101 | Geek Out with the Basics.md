---
layout: post
category: notes
title: "Homelab 101 | Geek Out with the Basics"
tags:
  - Homelab
publish: true
---

Have you ever seen movies where hackers have their setups in their basements and they’re geeking out over it? Big monitors, flashing lights, and you’re thinking, **"How the heck do they have this setup?!"** You’ve wondered, "How can I do this?" Well, you’re in the right place.

Until now, you’ve probably scrolled through dozens of YouTube videos about setting up a homelab but only found titles like "What I Have in My Homelab" and "My Homelab Tour." And you’ve wondered, **"Where are the basics? How can I start with these things?"**

Well, here you’ll learn all the **basics to get started with your own homelab.** This blog will cover everything you need to know to embark on your homelab journey.

## Homelab
A homelab is a personal setup of hardware and software that you deploy on your own network.

### But, Why Do I Need a Homelab?
- Home automation
- Learning new tech
- Simulating how cloud tech works
- Understanding distributed systems
- Your personal cloud storage (dump Google Drive, Dropbox, etc.)
- Hosting your web workloads on your network

## Let's Get to the Core! Understanding the Building Blocks

- ### Servers
  Servers are the machines that run operating systems. These servers can range from your old PC, laptop, to even a Raspberry Pi.

- ### Virtual Machine
  As the name suggests, virtual machines (VMs) are like physical servers, but they run multiple operating systems simultaneously. VMs are essential for running different OS environments on a single server.

- ### Virtualization
  Wondering how to spawn VMs on a physical server? Well, using software like Proxmox, VMware, or Hyper-V, you can create and manage virtual machines.

- ### Storage
  Where will the data be stored? There are multiple ways to store data in a homelab:
  - **Disk Drives**: Drives of the physical servers, external SSDs.
  - **NAS (Network Attached Storage)**: A separate server which has one or more storage devices connected to it. NAS exposes the data via the network, accessible by any device connected to the network.
  - **Ceph**: Distributed storage system. Using Ceph, you can create a pool of disks that acts as a single storage volume for your homelab.

- ### Networking
  - **Router**: Manages network traffic between devices and the internet. You may already have this.
  - **Switches**: Directs data within a local network to specific devices. You will only need this if you don't have enough patch cable ports in your router.
  - **Ethernet (patch) cables**: Cables that connect devices to the network. These cables will be required to connect each of your machines.

## Homelab Architecture

To set up a basic homelab, you can use two Lenovo ThinkCentre machines with i5 processors and 8GB RAM each. These will act as your servers. Connect them to your router using Ethernet cables. If your router doesn't have enough ports, use a network switch. Your data can be stored on the internal drives of these servers or on a dedicated NAS.

In the next series, we will dive deeper into **Proxmox**, exploring how to set up and manage virtual machines on your homelab. Stay tuned!
