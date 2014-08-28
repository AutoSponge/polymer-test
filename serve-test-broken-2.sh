#!/bin/bash
#
# Starts a basic web server on the port specified.
#
# ./serve.sh 3000 -> http://localhost:3000
#
# Copyright 2012 Eric Bidelman <ebidel@gmail.com>

port=$1
if [ $#  -ne  1 ]
then
  port=8003
fi

if [ $(uname -s) == "Darwin" ]
then
  open=open
else
  open=xdg-open
fi

$open http://localhost:$port/test/index-broken-2.html && python -m SimpleHTTPServer $port;