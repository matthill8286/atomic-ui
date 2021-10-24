#!/bin/sh

start=`date +%s`
# install dependencies
export BUILD="BUILD"
# execute the config setup only in ci env
if [ ! -z "$NPM_TOKEN" ];
then
    npm config set @excelwithbusiness:registry https://npm.pkg.github.com
    git remote set-url origin https://github.com/excelWithBusiness/TS-Filtered-SC-Components.git
    git config --global url."https://x-access-token:${NPM_TOKEN}@github.com/excelWithBusiness".insteadOf "https://github.com/excelWithBusiness"
    git fetch origin
    echo "config setup done."
else
    echo "Ignoring config setup..."
fi

yarn install
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "Dependencies were installed"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "Dependencies could not be installed!" >&2
    echo "**********************************************************"
    cat ../yarn-error.log
    exit 1
fi

# build the app
yarn build:noPreBuild
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "Components have been built"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "Component build failed!" >&2
    echo "**********************************************************"
    cat ../yarn-error.log
    exit 1
fi

end=`date +%s`
echo Execution time was `expr $end - $start` seconds.
