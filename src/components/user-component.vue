<template>
    <ul class="list-group">
        <li class="list-group-item">{{ user.name }}</li>
        <li class="list-group-item">{{ user.email }}</li>
    </ul>
</template>

<script>
export default {
    name: "user-component",
    props: {
        user: Array
    }
}
</script>
