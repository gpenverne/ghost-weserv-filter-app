# ghost-weserv-helper

Use images.weserv.nl to cache your images on your ghost blog

## Install

git clone on your ``content/apps/`` folder

## Activate app

Edit your databse, to change the ``settings`` table. Update the ``active_apps`` values to add ``ghost-weserv-helper`` in the json array.

Example:
``
["ghost-weserv-helper","otherapp"]
``

## Use it
In your template, you can now write:  
``
{{weserv "https://gkdv.net/content/images/2018/02/gkdv-1.png"}}
``
