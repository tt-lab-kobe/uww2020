<template>
  <div>
    <Hero
      :img-src="addUrlPrefix('uww2020-topimage.jpg')"
      class="text-gray-100 text-shadow"
    >
      <div>
        <p class="head-font">
          <span class="text-4xl lg:text-5xl">U</span
          ><span class="text-3xl lg:text-4xl">biquitous </span>
          <span class="text-4xl lg:text-5xl">W</span
          ><span class="text-3xl lg:text-4xl">earable </span>
          <span class="text-4xl lg:text-5xl">W</span
          ><span class="text-3xl lg:text-4xl">orkshop </span>
          <span class="text-4xl lg:text-5xl">2020</span>
        </p>
      </div>
      <div class="m-0 p-0 lg:my-3 lg:py-3">
        <p class="md:text-lg lg:text-xl">2020年12月12日（土）- 13日（日）</p>
        <p class="md:text-lg lg:text-xl">@神戸大学百年記念館 六甲ホール</p>
        <p class="md:text-lg lg:text-xl">
          〒657-8501 兵庫県神戸市灘区六甲台町1-1
        </p>
        <p class="md:text-lg lg:text-xl">
          ※オンラインとオフラインのハイブリッド開催を予定
        </p>
      </div>
    </Hero>
    <div class="container text-center mx-auto mt-6">
      <HLg>Welcome to UWW2020</HLg>
      <Box class="flex flex-wrap">
        <Content class="w-full md:w-1/2 px-3">
          <TextBlock>
            ユビキタス・ウェアラブル技術の発展はめざましく、これらの技術に関する研究開発が活発に行われています。神戸大学塚本・寺田研究室およびNPO法人ウェアラブルコンピュータ研究開発機構では、ユビキタス・ウェアラブルワークショップを2007年以来毎年開催し、今年は14回目となります。昨年はユビキタス・ウェアラブル技術に関する70件の密度の濃い発表と議論を行いました。
          </TextBlock>
          <TextBlock>
            これまで現地での開催を行ってきましたが、本年度は新型コロナウイルス
            (SARS-CoV-2)
            の状況を踏まえまして、オンライン開催、もしくは、オンラインとオフラインのハイブリッド開催を予定しております。下記の通りの企画をしておりますので、是非ご参加いただけますようお願い致します。
          </TextBlock>
        </Content>
        <Content class="w-full md:w-1/2 px-3">
          <TextBlock>
            <HighLighter class="m-1 p-6">
              <p>本ワークショップの特色は以下の通りです。</p>
              <ul class="list-disc mx-4 pt-4 px-6">
                <li>A4原稿1枚記述</li>
                <li>一人15分程度のショートプレゼンテーション</li>
                <li>参加者間の交流を目指したワークショップ</li>
                <li>
                  実践的な情報処理技術に関する特別企画などを含んだ
                  「ナイトセッション」
                </li>
              </ul>
            </HighLighter>
          </TextBlock>
        </Content>
      </Box>
      <Box class="flex flex-wrap">
        <Content class="md:w-1/2">
          <HLg>Updates</HLg>
          <TextBlock
            class="border-solid border border-gray-400 my-2 scrollbarless"
            style="height: 5em; overflow: scroll"
          >
            <ul class="px-3">
              <li v-for="(news, index) in updates" :key="index" class="pb-1">
                <Budge>{{ news.date }}</Budge>
                <span>{{ news.description }}</span>
              </li>
            </ul>
          </TextBlock>
        </Content>
        <Content class="md:w-1/2">
          <HLg>Deadlines</HLg>
          <TextBlock style="min-height: 5em">
            <ColorList :items="deadlines"></ColorList>
          </TextBlock>
        </Content>
        <Content class="md:w-1/3">
          <HLg>Registration fee</HLg>
          <TextBlock>
            <HighLighter>
              <p class="text-2xl px-2 py-4 text-center">無料（予定）</p>
            </HighLighter>
          </TextBlock>
        </Content>
        <Content class="md:w-1/3">
          <HLg>Registration</HLg>
          <TextBlock>
            <div class="text-center">
              <p>
                <GradientButton class="my-2">
                  <a href="./reg/">参加登録</a>
                </GradientButton>
              </p>
              <p>
                <GradientButton class="my-2">
                  <a href="./reg/login.php">原稿提出</a>
                </GradientButton>
              </p>
            </div>
          </TextBlock>
        </Content>
        <Content class="md:w-1/3">
          <HLg>Download</HLg>
          <TextBlock>
            <div class="text-center">
              <p>
                <GradientButton class="my-2">
                  <a :href="addUrlPrefix('UWW2020_Format_LaTeX.zip')">テンプレート（LaTeX）</a>
                </GradientButton>
              </p>
              <p>
                <GradientButton class="my-2">
                  <a :href="addUrlPrefix('word_UWW2020.docx')">テンプレート（Word）</a>
                </GradientButton>
              </p>
            </div>
          </TextBlock>
        </Content>
        <Content class="flex-auto md:w-1/2">
          <HLg>Schedule</HLg>
          <HMd>12月12日（土）</HMd>
          <p class="text-center">場所：完全オンライン</p>
          <TextBlock>
            <ColorList :items="day1"></ColorList>
          </TextBlock>
          <HMd>12月13日（日）</HMd>
          <p class="text-center">場所：完全オンライン または ハイブリッド</p>
          <TextBlock>
            <ColorList :items="day2"></ColorList>
          </TextBlock>
          <TextBlock>
            <HighLighter class="text-center">
              上記は暫定のタイムテーブルであり、参加者数やオンライン発表の希望者数等により変更が生じる場合がございます。
            </HighLighter>
          </TextBlock>
        </Content>
        <Content class="flex-auto md:w-1/2">
          <HLg>Organizers</HLg>
          <TextBlock>
            <ColorList :items="organizers"></ColorList>
          </TextBlock>
        </Content>
        <Content class="w-full flex flex-wrap">
          <HLg class="flex-none text-center w-full">Sponsors</HLg>
          <div class="w-full md:w-1/2 p-4">
            <p class="text-center p-2">
              神戸大学大学院工学研究科 塚本・寺田研究室
            </p>
            <img
              :src="addUrlPrefix('tsukamototerada-logo.png')"
              class="mx-auto"
              style="max-height: 4em"
            />
          </div>
          <div class="w-full md:w-1/2 p-4">
            <p class="text-center p-2">
              NPO法人ウェアラブルコンピュータ研究開発機構
            </p>
            <img
              :src="addUrlPrefix('teamtsukamoto-logo.png')"
              class="mx-auto"
              style="max-height: 4em"
            />
          </div>
          <HighLighter class="text-justify w-full bg-gray-400 mx-6 px-6 py-5">
            本ワークショップは、科学技術振興機構戦略的創造研究推進事業(CREST)の成果報告会を兼ねています。
          </HighLighter>
        </Content>
      </Box>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      updates: [
        {
          date: '2020-11-05',
          description: '原稿テンプレートを公開しました。',
        },
        {
          date: '2020-10-19',
          description: '参加登録ページをオープンしました。',
        },
        {
          date: '2020-10-01',
          description: 'UWW2020のサイトをオープンしました。',
        },
      ],
      deadlines: [
        {
          header: '参加申込',
          description: '2020年11月1日（日） 23:59（JST）',
        },
        {
          header: '原稿提出',
          description: '2020年11月23日（月） 23:59（JST）',
        },
      ],
      day1: [
        {
          header: '10:00 – 10:15',
          description: 'オープニング',
        },
        {
          header: '10:15 – 17:00',
          description: '口頭発表セッション（途中休憩あり）',
        },
        {
          header: '19:00 – 21:00',
          description: 'ナイトセッション',
        },
      ],
      day2: [
        {
          header: '9:00 – ',
          description: '受付開始',
        },
        {
          header: '10:15 – 17:00',
          description: '口頭発表セッション（途中休憩あり）',
        },
        {
          header: '17:00 – 17:15',
          description: '表彰・クロージング',
        },
      ],
      organizers: [
        {
          header: 'ワークショップ委員長',
          description: '塚本昌彦（神戸大）',
        },
        {
          header: 'ワークショップ副委員長',
          description: '寺田 努（神戸大）',
        },
        {
          header: '実行委員長',
          description: '村尾和哉（立命館大）',
        },
        {
          header: '実行副委員長',
          description: '磯山直也（奈良先端大）',
        },
        {
          header: 'プログラム',
          description: '渡邉拓貴（北海道大）',
        },
        {
          header: 'ローカル',
          description: '大西鮎美（神戸大）',
        },
        {
          header: '出版',
          description: '後藤佑介（岡山大）・双見京介（立命館大）',
        },
        {
          header: '会計',
          description: '土田修平（神戸大）',
        },
        {
          header: '広報',
          description: '清水友順（神戸大）',
        },
        {
          header: 'ウェブシステム',
          description: '毛 昊珉（神戸大）',
        },
      ],
    }
  },
  methods: {
    addUrlPrefix(url: string) {
      return this.$router.options.base + url
    },
  },
})
</script>

<style>
.scrollbarless {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbarless::-webkit-scrollbar {
    display:none;
}
</style>
