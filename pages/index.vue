<template>
  <div>
    <Hero :img-src="'/uww2020-topimage.jpg'">
      <div>
        <p class="font-mono">
          <span class="text-5xl lg:text-6xl">U</span
          ><span class="text-4xl lg:text-5xl">biquitous </span>
          <span class="text-5xl lg:text-6xl">W</span
          ><span class="text-4xl lg:text-5xl">earable </span>
          <span class="text-5xl lg:text-6xl">W</span
          ><span class="text-4xl lg:text-5xl">orkshop </span>
          <span class="text-5xl lg:text-6xl">2020</span>
        </p>
      </div>
      <div class="md:my-3 md:py-3">
        <p class="md:text-lg lg:text-xl">2020年12月12日（土） – 12日(日)</p>
        <p class="md:text-lg lg:text-xl">
          オンラインとオフラインのハイブリッド開催を予定
        </p>
        <p class="md:text-lg lg:text-xl">
          ※本ページに最新情報を掲載しますので適宜ご確認ください
        </p>
      </div>
    </Hero>
    <div class="container text-center mx-auto mt-6">
      <HLg>Welcome to UWW2020</HLg>
      <Box>
        <Content>
          <TextBlock>
            ユビキタス・ウェアラブル技術の発展はめざましく、これらの技術に関する研究開発が活発に行われています。神戸大学塚本・寺田研究室およびNPO法人ウェアラブルコンピュータ研究開発機構では、ユビキタス・ウェアラブルワークショップを2007年以来毎年開催し、今年は14回目となります。昨年はユビキタス・ウェアラブル技術に関する70件の密度の濃い発表と議論を行いました。
          </TextBlock>
          <TextBlock>
            これまで現地での開催を行ってきましたが、本年度は新型コロナウイルス
            (SARS-CoV-2)
            の状況を踏まえまして、オンライン開催、もしくは、オンラインとオンサイトのハイブリッド開催を予定しております。下記の通りの企画をしておりますので、是非ご参加いただけますようお願い致します。
          </TextBlock>
        </Content>
        <Content>
          <TextBlock>
            <div>
              <p>本ワークショップの特色は以下の通りです。</p>
              <ul class="list-disc p-6">
                <li>A4原稿1枚記述</li>
                <li>一人15分程度のショートプレゼンテーション</li>
                <li>参加者間の交流を目指したワークショップ</li>
                <li>
                  実践的な情報処理技術に関する特別企画などを含んだ
                  「夜のディスカッション」
                </li>
              </ul>
            </div>
          </TextBlock>
        </Content>
      </Box>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import hero from '~/components/layouts/Hero.vue'

export default Vue.extend({
  components: {
    hero,
  },
})
</script>

<style></style>
