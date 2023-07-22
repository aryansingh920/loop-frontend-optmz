#!/bin/bash
git add .
current_date=$(date +%Y-%m-%d)
current_time=$(date +%H:%M:%S)

current_datetime="$current_date $current_time"
git commit -m "$current_datetime"
git push -u origin main 
