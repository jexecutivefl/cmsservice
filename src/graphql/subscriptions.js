/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateSprint = /* GraphQL */ `
  subscription OnCreateSprint($filter: ModelSubscriptionSprintFilterInput) {
    onCreateSprint(filter: $filter) {
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
export const onUpdateSprint = /* GraphQL */ `
  subscription OnUpdateSprint($filter: ModelSubscriptionSprintFilterInput) {
    onUpdateSprint(filter: $filter) {
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
export const onDeleteSprint = /* GraphQL */ `
  subscription OnDeleteSprint($filter: ModelSubscriptionSprintFilterInput) {
    onDeleteSprint(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage($filter: ModelSubscriptionPageFilterInput) {
    onCreatePage(filter: $filter) {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage($filter: ModelSubscriptionPageFilterInput) {
    onUpdatePage(filter: $filter) {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage($filter: ModelSubscriptionPageFilterInput) {
    onDeletePage(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection($filter: ModelSubscriptionSectionFilterInput) {
    onCreateSection(filter: $filter) {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection($filter: ModelSubscriptionSectionFilterInput) {
    onUpdateSection(filter: $filter) {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection($filter: ModelSubscriptionSectionFilterInput) {
    onDeleteSection(filter: $filter) {
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
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onCreateMedia(filter: $filter) {
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
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onUpdateMedia(filter: $filter) {
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
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
    onDeleteMedia(filter: $filter) {
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
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu($filter: ModelSubscriptionMenuFilterInput) {
    onCreateMenu(filter: $filter) {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu($filter: ModelSubscriptionMenuFilterInput) {
    onUpdateMenu(filter: $filter) {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu($filter: ModelSubscriptionMenuFilterInput) {
    onDeleteMenu(filter: $filter) {
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
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onCreateMenuItem(filter: $filter) {
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
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onUpdateMenuItem(filter: $filter) {
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
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onDeleteMenuItem(filter: $filter) {
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
export const onCreateSEO = /* GraphQL */ `
  subscription OnCreateSEO($filter: ModelSubscriptionSEOFilterInput) {
    onCreateSEO(filter: $filter) {
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
export const onUpdateSEO = /* GraphQL */ `
  subscription OnUpdateSEO($filter: ModelSubscriptionSEOFilterInput) {
    onUpdateSEO(filter: $filter) {
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
export const onDeleteSEO = /* GraphQL */ `
  subscription OnDeleteSEO($filter: ModelSubscriptionSEOFilterInput) {
    onDeleteSEO(filter: $filter) {
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
