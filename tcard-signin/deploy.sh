#!/bin/sh
# scp -r ./ablank root@apps.sitebuilt.net:/home/apps/public_html/
rsync -av -e ssh --exclude='node_modules' --exclude='package-lock.json' prod/ root@apps.sitebuilt.net:/home/apps/public_html/tcard-signin

rsync -av -e ssh --exclude='node_modules' --exclude='package-lock.json' prod/ root@sitebuilt.net:/home/timecards/public_html/signin

rsync -av -e ssh --exclude='node_modules' --exclude='package-lock.json' prod/ root@apps.sitebuilt.net:/home/timecards/public_html/signin
