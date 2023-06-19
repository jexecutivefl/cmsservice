type Post
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]},
{allow: groups, groups: ["CONTRIBUTOR"], operations: [create, read]},
{allow: public, operations: [read]}
]) {
id: ID!
title: String!
body: String
author: User @belongsTo
comments: [Comment] @hasMany
tags: [Tag] @hasMany
categories: [Category] @hasMany
media: [Media] @hasMany
seo: SEO @hasOne
}

type Page
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]},
{allow: public, operations: [read]}
]) {
id: ID!
title: String!
body: String
author: User @belongsTo
sections: [Section] @hasMany
menu: Menu @hasOne
seo: SEO @hasOne
}

type Comment
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR","CONTRIBUTOR"], operations: [create, update, delete, read]},
{allow: public, operations: [read]}
]) {
id: ID!
content: String
post: Post @belongsTo
author: User @belongsTo
createdAt: AWSDateTime
updatedAt: AWSDateTime
}

type Tag
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]},
{allow: public, operations: [read]}
]) {
id: ID!
name: String!
posts: [Post] @hasMany
}

type Category
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]},
{allow: public, operations: [read]}
]) {
id: ID!
name: String!
posts: [Post] @hasMany
}

type User
@model
@auth(rules: [{allow: groups, groups: ["ADMIN"], operations: [create, update, delete, read]}])
{
id: ID!
username: String!
posts: [Post] @hasMany
comments: [Comment] @hasMany
pages: [Page] @hasMany
}


type Section
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]},
{allow: public, operations: [read]}
]) {
id: ID!
name: String!
body: String
page: Page @belongsTo
media: [Media] @hasMany
}

type Media
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]},
{  allow: public, operations: [read]}
]) {
id: ID!
file: S3Object!
post: Post @belongsTo
section: Section @belongsTo
}

type Menu
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]},
{allow: public, operations: [read]}
]) {
id: ID!
items: [MenuItem] @hasMany
page: Page @belongsTo
}

type MenuItem
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]},
{allow: public, operations: [read]}
]) {
id: ID!
title: String!
link: AWSURL!
menu: Menu @belongsTo
}

type SEO
@model
@auth(rules: [
{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]},
{allow: public, operations: [read]}
]) {
id: ID!
title: String
description: String
keywords: [String]
post: Post @hasOne
page: Page @hasOne
}

type S3Object {
bucket: String!
region: String!
key: String!
}

enum Role {
ADMIN
EDITOR
CONTRIBUTOR
SUBSCRIBER
}

enum SwimlaneState {
TODO
IN_PROGRESS
BLOCKED
TESTING
DONE
}
type Project
@model
@auth(rules: [{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]}])
{
id: ID!
name: String!
description: String
sprints: [Sprint] @hasMany(indexName: "byProject", fields: ["id"])
}

type Sprint
@model
@auth(rules: [{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]}])
{
id: ID!
state: SwimlaneState
priority: Int!
tasks: [Task] @hasMany(indexName: "bySprint", fields: ["id"])
project: Project @belongsTo
projectID: ID! @index(name: "byProject", sortKeyFields: "priority")
}


type Task
@model
@auth(rules: [{allow: groups, groups: ["ADMIN","EDITOR"], operations: [create, update, delete, read]}])
{
id: ID!
name: String!
description: String
priority: Int!
sprint: Sprint @belongsTo(
sprintID: ID! @index(name: "bySprint", sortKeyFields: "priority")
}


