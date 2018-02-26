# ghost-weserv-helper

Use images.weserv.nl to cache your images on your ghost blog

## Install
git clone on your ``content/apps/`` folder  
go to ``content/apps/ghost-weserve-helper``  
run: ``nodejs install.js`` (it will update active_apps in DB)  
restert ghost ``ghost restart``

## Use it
In your template, you can now write:  
``
{{weserv "https://gkdv.net/content/images/2018/02/gkdv-1.png"}}
``
