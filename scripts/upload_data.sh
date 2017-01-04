#!/usr/bin/env bash

aws s3 sync exampledata/ s3://bloggerless-data/ --delete --profile danscloud
