# graphql-demo

GraphQL demo using Apollo Server.

Includes:
- Resolving from a REST endpoint (Hacker news API)
- Resolving from mocked data

## Setup
```
npm i
```

## Run
```
npm run dev:start
```

Server will be available at: http://localhost:4000

### Example queries to try

#### Resolving get all books

```
{
    books {
        title
        author
    }
}

```

#### Resolving get book by Id

```
{
    book(id: 1) {
        title
        author
        rating
    }
}

```

#### Resolving get book by Id using an alias on a field

```
{
    book(id: 1) {
        title
        by: author
        rating
    }
}

```

#### Resolving get all top stories

```
{
    topStories(max: 2) {
        title
        author: by
        score
        commentCount
        url
  }
}

```

#### Resolving get all top stories with nested fields

```
{
    topStories(max: 1) {
        title
        author: by
        score
        commentCount
        url
        kids {
        text
        }
    }
}
```

### Health check

http://localhost:4000/.well-known/apollo/server-health

## References
- https://www.apollographql.com/docs/apollo-server/
- https://graphql.org/
- https://github.com/HackerNews/API

