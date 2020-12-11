<template>
  <div>
    <div class="container text-center mx-auto mt-6">
      <HLg>Program</HLg>
      <Box class="mb-3 mt-3">
        <Content>
          <font-awesome-icon :icon="['fas', 'search']" class="mr-2" />
          <input
            v-model="query"
            type="text"
            placeholder="incremental search (title / authors)"
            class="p-1 w-4/5"
          />
        </Content>
        <Content>
          <font-awesome-icon :icon="['fas', 'user']" />
          <span>: 発表者</span>
        </Content>
        <Content>発表時間：10分（目安：7分発表+3分質疑）</Content>
      </Box>
      <Box>
        <Content v-for="session in queryFilter" :key="session.sessionId">
          <TextBlock v-if="session.sessionId === '1'" class="w-full">
            <HMd>{{ session.date }}</HMd>
          </TextBlock>
          <TextBlock v-if="session.sessionId === '15'" class="w-full">
            <HMd>{{ session.date }}</HMd>
          </TextBlock>
          <TextBlock
            v-if="
              !query ||
              (session.hasPresentation && session.presentations.length > 0)
            "
            class="shadow rounded-lg mt-2 mb-2 sm:px-5"
          >
            <TextBlock class="w-full">
              <HMd class="mx-auto text-center">
                {{ session.duration }}
              </HMd>
              <HLg class="mx-auto text-center">
                {{ session.sessionName }}
              </HLg>
            </TextBlock>
            <Box v-if="session.hasPresentation" class="md:mx-6 md:px-6">
              <div class="mb-3 text-center">
                座長: {{ session.chairPerson }}
              </div>
              <Content>
                <ul style="list-style: disc" class="md:mx-6 md:px-6 px-3">
                  <li
                    v-for="presentation in session.presentations"
                    :key="presentation.presentationId"
                  >
                    <TextBlock class="mb-0 text-lg text-center">
                      {{ presentation.title }}
                    </TextBlock>
                    <TextBlock class="md:ml-1 text-sm">
                      {{ presentation.authors }}
                    </TextBlock>
                    <TextBlock>
                      <font-awesome-icon :icon="['fas', 'user']" class="mr-2" />
                      {{ presentation.speaker }}
                      （{{ presentation.affiliation }}）
                    </TextBlock>
                  </li>
                </ul>
              </Content>
            </Box>
          </TextBlock>
        </Content>
      </Box>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  asyncData({ store }) {
    const programList = store.getters['program/getProgramList']
    return {
      programList,
    }
  },
  data() {
    return {
      query: '',
      programList: [],
    }
  },
  computed: {
    queryFilter() {
      const programList = this.programList
      const query = this.query
      const filteredList = JSON.parse(JSON.stringify(programList))
      if (!query) {
        return filteredList
      } else {
        for (const index in filteredList) {
          if (filteredList[index].hasPresentation) {
            const queryResults = filteredList[index].presentations.filter(
              (presentation: any) => {
                return (
                  presentation.title.includes(query) ||
                  presentation.authors.includes(query)
                )
              }
            )
            filteredList[index].presentations = queryResults
          }
        }
        return filteredList
      }
    },
  },
  methods: {
    addUrlPrefix(url: string) {
      return this.$router.options.base + url
    },
  },
})
</script>

<style></style>
