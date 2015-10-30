# design

## goals

1.  lowest hanging fruit is to align with github pages, so basically a tool
that simplifies github pages for non-technical people, no need to understand
git commands
1.  second is to align with other hosting platforms
1.  third is to create own hosting platform

# workflows

## login

1.  username/password

## create site

1.  bind to github account (optional, requires oauth, second phase)
1.  choose a template or take default
1.  clone repository
1.  compile to static pages
1.  push

## tables
* users (name, password, email, mobile, icon, github_token)
* followers (user_id, follower_id)
* sites (domain, template_id, description)
* tags (tag)

## github translation layer
