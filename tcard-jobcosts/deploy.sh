#!/bin/sh
# scp -r ./jobs2 root@sitebuilt.net:/home/timecards/public_html/
#!/bin/sh
rsync -av -e ssh --exclude='node_modules' --exclude='package-lock.json' prod/ root@apps.sitebuilt.net:/home/apps/public_html/tcard-jobcost

rsync -av -e ssh --exclude='node_modules' --exclude='package-lock.json' prod/ root@sitebuilt.net:/home/timecards/public_html/jobcost

rsync -av -e ssh --exclude='node_modules' --exclude='package-lock.json' dist/ root@apps.sitebuilt.net:/home/apps/public_html/jobcost
