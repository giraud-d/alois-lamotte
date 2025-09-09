#!/usr/bin/env bash
set -euo pipefail

sudo apt update
sudo apt install -y imagemagick jpegoptim

convert -version || magick -version
jpegoptim --version

