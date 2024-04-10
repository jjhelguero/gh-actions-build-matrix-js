#!/bin/bash

MACHINES=$1

MACHINES=${MACHINES:-1}

if [ $MACHINES -lt 1 ]
then
    MACHINES=1
fi

if [ $MACHINES -gt 15 ]
then
    MACHINES=15
fi

# Start building the string
OUTPUT="{\"containers\":["
for (( i=1; i<=$MACHINES; i++ )); do
    OUTPUT+="$i"
    # Add a comma after each container except the last one
    if [ $i -lt $MACHINES ]; then
        OUTPUT+=","
    fi
done
OUTPUT+="]}"

echo "matrix=$OUTPUT" >> $GITHUB_OUTPUT
echo "$OUTPUT"
