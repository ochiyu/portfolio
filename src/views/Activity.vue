<template>
  <div class="activity">
    <div class="title">
      <h1>Activity</h1>
      </div>
    <div class ="main-content">
      <v-timeline dense>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">{{year.title}}</h2>
        <div>
          <a :href="year.url">{{year.text}}</a>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '2018 4月',
        title: '新谷・大囿研究室に配属',
        url: '',
        text: ''
      },
      {
        color: 'green',
        year: '2018 9月',
        title: '電気・電子・情報関係学会 東海支部連合大会に参加',
        url: 'https://www.ieice.org/~tokai/rengo2018/',
        text: '台風により中止'
      },
      {
        color: 'pink',
        year: '2018 10月',
        title: 'JPHacks 2018 Hack Day参加',
        url: 'https://jphacks.com/',
        text: 'JPHacks2018'
      },
      {
        color: 'amber',
        year: '2018 11月',
        title: 'JPHacks 2018 Award Day進出',
        url: 'https://github.com/jphacks/NG_1805',
        text: 'コード'
      },
      {
        color: 'orange',
        year: '2019 3月',
        title: '名古屋工業大学卒業',
        url: '',
        text: ''
      },
      {
        color: 'cyan',
        year: '2019 4月',
        title: '名古屋工業大学大学院入学 工学研究科情報工学専攻',
        url: '',
        text: ''
      },
      {
        color: 'green',
        year: '2019 6月',
        title: 'SPAJAM2019に参加',
        url: 'https://spajam.jp/',
        text: 'SPAJAM2019'
      },
      {
        color: 'orange',
        year: '2019 9月',
        title: 'Hack Aichiに参加',
        url: 'https://jellyware.jp/hackaichi/award/',
        text: '企業賞(バッファロー賞)と特別賞を受賞'
      },
      {
        color: 'pink',
        year: '2019 10月',
        title: 'JPHacks 2019 Hack Day参加',
        url: 'https://jphacks.com/',
        text: 'JPHacks2019'
      },
      {
        color: 'amber',
        year: '2019 11月',
        title: 'JPHacks 2019 Award Day進出',
        url: 'https://github.com/jphacks/NG_1906',
        text: 'コード'
      },
      {
        color: 'green',
        year: '2020 2月',
        title: 'Geospatial Hackers Program 2019に参加',
        url: 'https://ghp.connpass.com/',
        text: 'Geospatial Hackers Program'
      }
    ]
  })
}
</script>
<style scoped>
a {
text-decoration: none;
}
</style>
