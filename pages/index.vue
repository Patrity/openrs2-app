<script setup lang="ts">
const dataSources = [
	{ label: "Displee's Archive", to: 'https://displee.com/archive/' },
	{ label: "Greg's Archive", to: 'https://gregs.world/archive/' },
	{ label: 'HDOS', to: 'https://www.hdos.dev/' },
	{ label: "Polar's Archive", to: 'https://archive.runestats.com/' },
	{ label: "Moparisthebest's Archive", to: 'https://www.moparisthebest.com/rs/' },
	{ label: 'RS-Hacking', to: 'https://rs-hacking.com/' },
	{ label: 'RuneArchive', to: 'https://runearchive.org/' },
	{ label: 'RuneLite', to: 'https://runelite.net/' },
	{ label: 'The Runescape Archive', to: 'https://rs-archive.github.io/' },
	{ label: 'The Runescape Preservation Unit', to: 'https://runescape.wiki/w/User:Manpaint55/RPU' },
	{ label: 'RuneStar', to: 'http://runestar.org/' },
	{ label: 'RuneWiki', to: 'https://www.runewiki.org/' },
]

</script>

<template>
	<ULandingHero>
		<template #title>
			OpenRS2 Archive
		</template>
		<template #description>
			The OpenRS2 Archive is a collection of caches and XTEA keys for all
			versions of RuneScape that use JS5, and its precursor, to manage
			assets (mainline RuneScape builds 234 and greater, and all builds
			of Old School RuneScape).
		</template>
		<template #links>
			<UButton to="/caches">Explore Caches</UButton>
			<UButton to="/developers" variant="soft">API Reference</UButton>
		</template>
		<template #default>
			<UContainer class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<ULandingCard
					title="Content-Addressable Storage"
					description="The archive uses content-addressable storage, converting caches to the
					client's native .dat2/.idx format on demand. This provides several benefits: the disk
					space required to store all available caches is reduced, and groups or XTEA keys missing
					from one copy of the cache can be sourced automatically from other copies - provided
					the checksums and version numbers match."
				/>
				<ULandingCard
					title="Automated Updates"
					description="The archive is highly automated: OSRS and RuneScape 3 cache updates are
					downloaded automatically, and XTEA keys are pulled from various sources
					and verified automatically. However, third-party contributions must be imported
					manually to verify the data's provenance (see the 'Contributing' section below)."
				/>
				<ULandingCard
					title="Contributing"
					description="The archive is a community project, and contributions are welcome. If you
					have a cache, XTEA key, or other data that you would like to contribute, please
					contact us on Discord or GitHub. We will verify the data's provenance and import
					it into the archive if it is accurate."
				/>
			</UContainer>
		</template>
	</ULandingHero>
	<ULandingSection title="Data Sources" description="A significant amount of data in the archive was, or is, obtained from the following projects, which we'd like to thank:">
		<ULandingGrid class="grid-cols-12">
				<ULandingCard v-for="source in dataSources" :key="source.label" :title="source.label" :to="source.to" class="col-span-4" />
		</ULandingGrid>
	</ULandingSection>
	<ULandingSection title="Contributing">
		<template #description>
			<UContainer class="max-w-2xl">
				<p class="py-2">
					Please contact Graham in OpenRS2's Discord server if you have data (old clients/gamepacks, loaders,
					native libraries, caches and XTEA keys - ideally original or only lightly modified copies) to contribute.
				</p>
				<p class="py-2">
					Contributing data is important even if the cache or keyset already exists in the archive. Older copies
					of the cache are often incomplete, and your copy may have data missing from the archive.
				</p>
				<p class="py-2">
					By pooling all the community's data together in a single location, the whole community will benefit
					from access to more complete caches and keysets.
				</p>
			</UContainer>
		</template>
		<ULandingGrid>
			<ULandingCard
				title="Discord"
				icon="i-fa-brands-discord"
				description="Join our Discord server to chat with other contributors and get help with contributing."
				to="https://chat.openrs2.org/"
				class="col-span-6"
			/>
			<ULandingCard
				title="GitHub"
				icon="i-fa-brands-github"
				description="The archive is open-source. If you'd like to contribute, please submit a pull request."
				to="https://github.com/openrs2/"
				class="col-span-6"
			/>
		</ULandingGrid>
	</ULandingSection>
	<ULandingSection title="Mirroring" >
		
		<UContainer class="max-w-2xl">
			<p class="py-2">
				An rsync server is available at
				<span class="bg-neutral-500 text-white font-mono px-1">rsync://archive.openrs2.org/pub</span>.
				Daily Postgres dumps are available in the db subdirectory in the
				custom dump format.
			</p>
			<p class="py-2">
				A public-facing Postgres instance, for complex queries and
				replication, may be made available in the future.
			</p>
			<p class="py-2">
				The <ULink class="text-primary underline" to="https://git.openrs2.org/openrs2/openrs2/src/branch/master/archive/src/main/kotlin/org/openrs2/archive">software</ULink>
				used to import and export data is open-source. Combined
				with the database dumps, this ensures the longevity of
				the archive if the main instance ever disappears.
			</p>
		</UContainer>
	</ULandingSection>
</template>