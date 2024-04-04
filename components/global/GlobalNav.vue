<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
import {mapContentNavigation} from "#ui-pro/modules/pro/runtime/utils/content";

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))
	const navItems = [
		{ label: 'Caches', to: '/caches' },
		{ label: 'Clients', to: '/clients' },
		{ label: 'Keys', to: '/keys' },
		{ label: 'API', to: '/developers' },
		{ label: 'Other', to: '/other' }
	]
</script>

<template>
	<UHeader :links="navItems">
		<template #logo>
			OpenRS2 Archive
		</template>
		
		<template #right>
			<GlobalThemeSwitcher />
		</template>
		
		<template #panel>
			<UNavigationTree :links="mapContentNavigation(navigation)" default-open />
		</template>
		
	</UHeader>
</template>

<style scoped>

</style>