#!/usr/bin/env bash

mkdir -p out

node test/GoldenMaster.js > /dev/null

for file in $(ls goldenmaster/*.csv)
do
  diff {goldenmaster/,out/}$(basename $file)
done
