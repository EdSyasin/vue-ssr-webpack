<template>
	<div class="hello-world" id="app">
		<ul>
			<li><router-link to="/">главная</router-link></li>
			<li><router-link to="/about">о приложении</router-link></li>
		</ul>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
export default {
	name: "App",
	data: () => ({
		test: "hello world"
	})
	
}
</script>

<style scoped>
	.hello-world{
		color: darkred;
	}
</style>