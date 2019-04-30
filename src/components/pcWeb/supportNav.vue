<template>
	<div><router-view :config="config"></router-view></div>

</template>

<script>
module.exports = {
	props : ['config'],
}
</script>
<style lang="sass" scoped>
.page-wrapper{
	background-color: #f8f8f8;
	width: 100%;
	text-decoration: left;
	display: inline-block;
	padding:5%;}
</style>