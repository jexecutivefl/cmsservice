/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      posts {
        items {
          id
          title
          body
          createdAt
          updatedAt
          tagPostsId
          categoryPostsId
          userPostsId
          postSeoId
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          userCommentsId
          __typename
        }
        nextToken
        __typename
      }
      pages {
        items {
          id
          title
          body
          createdAt
          updatedAt
          userPagesId
          pageMenuId
          pageSeoId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        posts {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        pages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      sprints {
        items {
          id
          state
          name
          priority
          projectID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        sprints {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSprint = /* GraphQL */ `
  query GetSprint($id: ID!) {
    getSprint(id: $id) {
      id
      state
      name
      priority
      tasks {
        items {
          id
          name
          description
          priority
          complexity
          duration
          cost
          sprintID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      project {
        id
        name
        description
        sprints {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      projectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSprints = /* GraphQL */ `
  query ListSprints(
    $filter: ModelSprintFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSprints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        state
        name
        priority
        tasks {
          nextToken
          __typename
        }
        project {
          id
          name
          description
          createdAt
          updatedAt
          __typename
        }
        projectID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      name
      description
      priority
      complexity
      duration
      cost
      sprint {
        id
        state
        name
        priority
        tasks {
          nextToken
          __typename
        }
        project {
          id
          name
          description
          createdAt
          updatedAt
          __typename
        }
        projectID
        createdAt
        updatedAt
        __typename
      }
      sprintID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        priority
        complexity
        duration
        cost
        sprint {
          id
          state
          name
          priority
          projectID
          createdAt
          updatedAt
          __typename
        }
        sprintID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sprintsByProjectIDAndPriority = /* GraphQL */ `
  query SprintsByProjectIDAndPriority(
    $projectID: ID!
    $priority: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSprintFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sprintsByProjectIDAndPriority(
      projectID: $projectID
      priority: $priority
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        state
        name
        priority
        tasks {
          nextToken
          __typename
        }
        project {
          id
          name
          description
          createdAt
          updatedAt
          __typename
        }
        projectID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tasksBySprintIDAndPriority = /* GraphQL */ `
  query TasksBySprintIDAndPriority(
    $sprintID: ID!
    $priority: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksBySprintIDAndPriority(
      sprintID: $sprintID
      priority: $priority
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        priority
        complexity
        duration
        cost
        sprint {
          id
          state
          name
          priority
          projectID
          createdAt
          updatedAt
          __typename
        }
        sprintID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      body
      author {
        id
        username
        posts {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        pages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          userCommentsId
          __typename
        }
        nextToken
        __typename
      }
      tags {
        items {
          id
          name
          createdAt
          updatedAt
          postTagsId
          __typename
        }
        nextToken
        __typename
      }
      categories {
        items {
          id
          name
          createdAt
          updatedAt
          postCategoriesId
          __typename
        }
        nextToken
        __typename
      }
      media {
        items {
          id
          createdAt
          updatedAt
          postMediaId
          sectionMediaId
          __typename
        }
        nextToken
        __typename
      }
      seo {
        id
        title
        description
        keywords
        post {
          id
          title
          body
          createdAt
          updatedAt
          tagPostsId
          categoryPostsId
          userPostsId
          postSeoId
          __typename
        }
        page {
          id
          title
          body
          createdAt
          updatedAt
          userPagesId
          pageMenuId
          pageSeoId
          __typename
        }
        createdAt
        updatedAt
        sEOPostId
        sEOPageId
        __typename
      }
      createdAt
      updatedAt
      tagPostsId
      categoryPostsId
      userPostsId
      postSeoId
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        body
        author {
          id
          username
          createdAt
          updatedAt
          __typename
        }
        comments {
          nextToken
          __typename
        }
        tags {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        media {
          nextToken
          __typename
        }
        seo {
          id
          title
          description
          keywords
          createdAt
          updatedAt
          sEOPostId
          sEOPageId
          __typename
        }
        createdAt
        updatedAt
        tagPostsId
        categoryPostsId
        userPostsId
        postSeoId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      title
      body
      author {
        id
        username
        posts {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        pages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      sections {
        items {
          id
          name
          body
          createdAt
          updatedAt
          pageSectionsId
          __typename
        }
        nextToken
        __typename
      }
      menu {
        id
        items {
          nextToken
          __typename
        }
        page {
          id
          title
          body
          createdAt
          updatedAt
          userPagesId
          pageMenuId
          pageSeoId
          __typename
        }
        createdAt
        updatedAt
        menuPageId
        __typename
      }
      seo {
        id
        title
        description
        keywords
        post {
          id
          title
          body
          createdAt
          updatedAt
          tagPostsId
          categoryPostsId
          userPostsId
          postSeoId
          __typename
        }
        page {
          id
          title
          body
          createdAt
          updatedAt
          userPagesId
          pageMenuId
          pageSeoId
          __typename
        }
        createdAt
        updatedAt
        sEOPostId
        sEOPageId
        __typename
      }
      createdAt
      updatedAt
      userPagesId
      pageMenuId
      pageSeoId
      __typename
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        body
        author {
          id
          username
          createdAt
          updatedAt
          __typename
        }
        sections {
          nextToken
          __typename
        }
        menu {
          id
          createdAt
          updatedAt
          menuPageId
          __typename
        }
        seo {
          id
          title
          description
          keywords
          createdAt
          updatedAt
          sEOPostId
          sEOPageId
          __typename
        }
        createdAt
        updatedAt
        userPagesId
        pageMenuId
        pageSeoId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      post {
        id
        title
        body
        author {
          id
          username
          createdAt
          updatedAt
          __typename
        }
        comments {
          nextToken
          __typename
        }
        tags {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        media {
          nextToken
          __typename
        }
        seo {
          id
          title
          description
          keywords
          createdAt
          updatedAt
          sEOPostId
          sEOPageId
          __typename
        }
        createdAt
        updatedAt
        tagPostsId
        categoryPostsId
        userPostsId
        postSeoId
        __typename
      }
      author {
        id
        username
        posts {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        pages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      postCommentsId
      userCommentsId
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        post {
          id
          title
          body
          createdAt
          updatedAt
          tagPostsId
          categoryPostsId
          userPostsId
          postSeoId
          __typename
        }
        author {
          id
          username
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        postCommentsId
        userCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          body
          createdAt
          updatedAt
          tagPostsId
          categoryPostsId
          userPostsId
          postSeoId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      postTagsId
      __typename
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        postTagsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          body
          createdAt
          updatedAt
          tagPostsId
          categoryPostsId
          userPostsId
          postSeoId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      postCategoriesId
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        postCategoriesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      name
      body
      page {
        id
        title
        body
        author {
          id
          username
          createdAt
          updatedAt
          __typename
        }
        sections {
          nextToken
          __typename
        }
        menu {
          id
          createdAt
          updatedAt
          menuPageId
          __typename
        }
        seo {
          id
          title
          description
          keywords
          createdAt
          updatedAt
          sEOPostId
          sEOPageId
          __typename
        }
        createdAt
        updatedAt
        userPagesId
        pageMenuId
        pageSeoId
        __typename
      }
      media {
        items {
          id
          createdAt
          updatedAt
          postMediaId
          sectionMediaId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      pageSectionsId
      __typename
    }
  }
`;
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        body
        page {
          id
          title
          body
          createdAt
          updatedAt
          userPagesId
          pageMenuId
          pageSeoId
          __typename
        }
        media {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        pageSectionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
      id
      file {
        bucket
        region
        key
        __typename
      }
      post {
        id
        title
        body
        author {
          id
          username
          createdAt
          updatedAt
          __typename
        }
        comments {
          nextToken
          __typename
        }
        tags {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        media {
          nextToken
          __typename
        }
        seo {
          id
          title
          description
          keywords
          createdAt
          updatedAt
          sEOPostId
          sEOPageId
          __typename
        }
        createdAt
        updatedAt
        tagPostsId
        categoryPostsId
        userPostsId
        postSeoId
        __typename
      }
      section {
        id
        name
        body
        page {
          id
          title
          body
          createdAt
          updatedAt
          userPagesId
          pageMenuId
          pageSeoId
          __typename
        }
        media {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        pageSectionsId
        __typename
      }
      createdAt
      updatedAt
      postMediaId
      sectionMediaId
      __typename
    }
  }
`;
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedia(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        file {
          bucket
          region
          key
          __typename
        }
        post {
          id
          title
          body
          createdAt
          updatedAt
          tagPostsId
          categoryPostsId
          userPostsId
          postSeoId
          __typename
        }
        section {
          id
          name
          body
          createdAt
          updatedAt
          pageSectionsId
          __typename
        }
        createdAt
        updatedAt
        postMediaId
        sectionMediaId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
      id
      items {
        items {
          id
          title
          link
          createdAt
          updatedAt
          menuItemsId
          __typename
        }
        nextToken
        __typename
      }
      page {
        id
        title
        body
        author {
          id
          username
          createdAt
          updatedAt
          __typename
        }
        sections {
          nextToken
          __typename
        }
        menu {
          id
          createdAt
          updatedAt
          menuPageId
          __typename
        }
        seo {
          id
          title
          description
          keywords
          createdAt
          updatedAt
          sEOPostId
          sEOPageId
          __typename
        }
        createdAt
        updatedAt
        userPagesId
        pageMenuId
        pageSeoId
        __typename
      }
      createdAt
      updatedAt
      menuPageId
      __typename
    }
  }
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
          nextToken
          __typename
        }
        page {
          id
          title
          body
          createdAt
          updatedAt
          userPagesId
          pageMenuId
          pageSeoId
          __typename
        }
        createdAt
        updatedAt
        menuPageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMenuItem = /* GraphQL */ `
  query GetMenuItem($id: ID!) {
    getMenuItem(id: $id) {
      id
      title
      link
      menu {
        id
        items {
          nextToken
          __typename
        }
        page {
          id
          title
          body
          createdAt
          updatedAt
          userPagesId
          pageMenuId
          pageSeoId
          __typename
        }
        createdAt
        updatedAt
        menuPageId
        __typename
      }
      createdAt
      updatedAt
      menuItemsId
      __typename
    }
  }
`;
export const listMenuItems = /* GraphQL */ `
  query ListMenuItems(
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        link
        menu {
          id
          createdAt
          updatedAt
          menuPageId
          __typename
        }
        createdAt
        updatedAt
        menuItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSEO = /* GraphQL */ `
  query GetSEO($id: ID!) {
    getSEO(id: $id) {
      id
      title
      description
      keywords
      post {
        id
        title
        body
        author {
          id
          username
          createdAt
          updatedAt
          __typename
        }
        comments {
          nextToken
          __typename
        }
        tags {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        media {
          nextToken
          __typename
        }
        seo {
          id
          title
          description
          keywords
          createdAt
          updatedAt
          sEOPostId
          sEOPageId
          __typename
        }
        createdAt
        updatedAt
        tagPostsId
        categoryPostsId
        userPostsId
        postSeoId
        __typename
      }
      page {
        id
        title
        body
        author {
          id
          username
          createdAt
          updatedAt
          __typename
        }
        sections {
          nextToken
          __typename
        }
        menu {
          id
          createdAt
          updatedAt
          menuPageId
          __typename
        }
        seo {
          id
          title
          description
          keywords
          createdAt
          updatedAt
          sEOPostId
          sEOPageId
          __typename
        }
        createdAt
        updatedAt
        userPagesId
        pageMenuId
        pageSeoId
        __typename
      }
      createdAt
      updatedAt
      sEOPostId
      sEOPageId
      __typename
    }
  }
`;
export const listSEOS = /* GraphQL */ `
  query ListSEOS(
    $filter: ModelSEOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSEOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        keywords
        post {
          id
          title
          body
          createdAt
          updatedAt
          tagPostsId
          categoryPostsId
          userPostsId
          postSeoId
          __typename
        }
        page {
          id
          title
          body
          createdAt
          updatedAt
          userPagesId
          pageMenuId
          pageSeoId
          __typename
        }
        createdAt
        updatedAt
        sEOPostId
        sEOPageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
