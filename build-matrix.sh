#!/bin/bash

BATCHES=$1

BATCHES=${BATCHES:-1}

if [ $BATCHES -lt 1 ]
then
    BATCHES=1
fi

if [ $BATCHES -gt 15 ]
then
    BATCHES=15
fi

# Start building the string
OUTPUT="{\"containers\":["
for (( i=1; i<=$BATCHES; i++ )); do
    OUTPUT+="$i"
    # Add a comma after each container except the last one
    if [ $i -lt $BATCHES ]; then
        OUTPUT+=","
    fi
done
OUTPUT+="]}"

echo "matrix=$OUTPUT" >> $GITHUB_OUTPUT
echo "$OUTPUT"
