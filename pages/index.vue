<template>
  <div>
    <h1>{{data.page.title}}</h1>
    <p>Data: <code>{{ data }}</code></p>
  </div>
</template>

<script setup>
const QUERY = `
  query {
    page(filter:{id:{eq: "QS1LLvUZSr2gG0uZULfcIQ"}}) {
      id
      title
      _status
    }
  }
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>