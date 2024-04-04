<script setup lang="ts">
interface Cache {
	id: number
	scope: string
	game: string
	environment: string
	language: string
	builds: { major: number, minor: number | null }[]
	formattedBuilds?: string
	timestamp: string
	sources: string[]
	formattedSources?: string
	valid_indexes: number
	indexes: number
	indexesFormatted?: string
	valid_groups: number
	groups: number
	groupsFormatted?: string
	valid_keys: number
	keys: number
	keysFormatted?: string
	size: number
	sizeFormatted?: string
	blocks: number
	disk_store_valid: boolean
}

const columns = [
	{ key: 'game', label: 'Game' },
	{ key: 'environment', label: 'Environment' },
	{ key: 'language', label: 'Language' },
	{ key: 'formattedBuilds', label: 'Builds' },
	{ key: 'timestamp', label: 'Timestamp' },
	{ key: 'formattedSources', label: 'Sources' },
	{ key: 'indexesFormatted', label: 'Indexes' },
	{ key: 'groupsFormatted', label: 'Groups' },
	{ key: 'keysFormatted', label: 'Keys' },
	{ key: 'sizeFormatted', label: 'Size' },
	{ key: 'blocks', label: 'Blocks' },
	{ key: 'disk_store_valid', label: 'Disk Store Valid' }
]

const {data: caches, error} = await useFetch<Cache[]>('https://archive.openrs2.org/caches.json')
if (error.value) console.error(error.value)

//TODO: dropdown for available results/page
const resultsPerPage = ref(20)
const currentPage = ref(1)
const totalResults = computed(() => caches.value?.length ?? 0)
const search = ref('')

const currentRows = computed(() => {
	//TODO: implement search
	const start = (currentPage.value - 1) * resultsPerPage.value
	const end = start + resultsPerPage.value
	const filtered = caches.value?.slice(start, end)
	
	if (filtered) {
		for (const cache of filtered) {
			cache.indexesFormatted = `${cache.valid_indexes}/${cache.indexes} (${(cache.valid_indexes / cache.indexes * 100).toFixed(0)}%)`
			cache.groupsFormatted = `${cache.valid_groups}/${cache.groups} (${(cache.valid_groups / cache.groups * 100).toFixed(0)}%)`
			cache.keysFormatted = `${cache.valid_keys} / ${cache.keys} (${cache.keys === 0 ? 100 : (cache.valid_keys / cache.keys * 100).toFixed(0)}%)`
			cache.sizeFormatted = `${convertBytes(cache.size)}`
			cache.timestamp = formatDate(new Date(cache.timestamp))
			cache.formattedBuilds = formatBuilds(cache.builds)
			cache.formattedSources = cache.sources.join(', ')
		}
	}
	return filtered
})

function convertBytes(bytes: number) {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	if (bytes === 0) return 'n/a'
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString())
	if (i === 0) return `${bytes} ${sizes[i]}`
	return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`
}

function formatBuilds(builds: { major: number, minor: number | null }[]) {
	return builds.map(build => `${build.major}${build.minor ? '.'+build.minor : ''}`).join(', ')
}

function formatDate(date: Date) {
	return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
	
}
</script>

<template>
	<UTable v-if="caches" :columns="columns" :rows="currentRows" >
	</UTable>
	<div class="flex justify-center px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
		<UPagination v-model="currentPage" :page-count="resultsPerPage" :total="totalResults" />
	</div>
</template>

<style scoped>

</style>