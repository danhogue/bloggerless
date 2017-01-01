#!/usr/bin/env bash

aws s3 sync data/ s3://bloggerless-data/ --delete --profile danscloud
