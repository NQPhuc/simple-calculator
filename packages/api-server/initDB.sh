#!/bin/bash
# abort on error
set -e

./node_modules/.bin/sequelize db:drop

./node_modules/.bin/sequelize db:create

./node_modules/.bin/sequelize db:migrate
