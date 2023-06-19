/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
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
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
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
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
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
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
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
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
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
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
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
export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $input: CreateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    createMenuItem(input: $input, condition: $condition) {
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
export const updateMenuItem = /* GraphQL */ `
  mutation UpdateMenuItem(
    $input: UpdateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    updateMenuItem(input: $input, condition: $condition) {
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
export const deleteMenuItem = /* GraphQL */ `
  mutation DeleteMenuItem(
    $input: DeleteMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    deleteMenuItem(input: $input, condition: $condition) {
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
export const createSEO = /* GraphQL */ `
  mutation CreateSEO(
    $input: CreateSEOInput!
    $condition: ModelSEOConditionInput
  ) {
    createSEO(input: $input, condition: $condition) {
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
export const updateSEO = /* GraphQL */ `
  mutation UpdateSEO(
    $input: UpdateSEOInput!
    $condition: ModelSEOConditionInput
  ) {
    updateSEO(input: $input, condition: $condition) {
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
export const deleteSEO = /* GraphQL */ `
  mutation DeleteSEO(
    $input: DeleteSEOInput!
    $condition: ModelSEOConditionInput
  ) {
    deleteSEO(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createSprint = /* GraphQL */ `
  mutation CreateSprint(
    $input: CreateSprintInput!
    $condition: ModelSprintConditionInput
  ) {
    createSprint(input: $input, condition: $condition) {
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
export const updateSprint = /* GraphQL */ `
  mutation UpdateSprint(
    $input: UpdateSprintInput!
    $condition: ModelSprintConditionInput
  ) {
    updateSprint(input: $input, condition: $condition) {
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
export const deleteSprint = /* GraphQL */ `
  mutation DeleteSprint(
    $input: DeleteSprintInput!
    $condition: ModelSprintConditionInput
  ) {
    deleteSprint(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
