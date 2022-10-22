<template>
  <div class="w-full grid grid-cols-[800px_1fr]">
    <div>
      <!-- THIS IS BREADCRUMB -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/manga' }">Manga</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="my-6">
        <!-- THIS IS NAME MANGA -->
        <h2 class="capitalize text-lg text-center">võ luyện đông phong</h2>
        <!-- THIS IS TIME UPDATE MANGA -->
        <p class="capitalize text-xs text-center text-slate-400">[Cập nhật lúc: 12:35 22/10/2022]</p>
      </div>
      <div class="grid grid-cols-[220px_1fr] box-border">
        <!-- THIS IS IMAGE MANGA -->
        <div class="overflow-hidden">
          <img class="object-cover w-full" src="https://st.ntcdntempv3.com/data/comics/32/vo-luyen-dinh-phong.jpg"
            alt="[võ luyện đông phong]">
        </div>
        <!-- THIS IS INFORMATION MANGA -->
        <div class="pl-8 -my-2">
          <!-- THIS IS INFORMATION MANGA -->
          <div :key="field" v-for="(info, field) in infoManga" class="grid grid-cols-[minmax(110px,_1fr)_6fr] py-2">
            <!-- $ -->
            <div class="flex flex-nowrap items-center">
              <component class="w-5 h-5 text-slate-500"
                :is="field in snipetType ? snipetType[field].icon : snipetType['none'].icon">
              </component>
              <h4 class="font-bold whitespace-nowrap ml-2 text-slate-500">{{ field in snipetType ?
              snipetType[field].vnsub : '_?_' }}
              </h4>
            </div>
            <div class="flex flex-wrap pl-5 -m-2" v-if="field === 'genres'">
              <p class="hover:text-indigo-600 whitespace-nowrap p-2 cursor-pointer" :key="genres"
                v-for="genres in info">{{ genres }}
              </p>
            </div>
            <p class="flex-1 ml-5" v-else>{{ info !== null ? info : 'N/A' }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { WifiIcon, QuestionMarkCircleIcon, UserIcon, TagIcon, EyeIcon } from '@heroicons/vue/24/solid'

const snipetType = {
  'author': { vnsub: 'Tác giả', icon: UserIcon },
  'status': { vnsub: 'Trạng thái', icon: WifiIcon },
  'genres': { vnsub: 'Thể loại', icon: TagIcon },
  'numViewer': { vnsub: 'Lượt xem', icon: EyeIcon },
  'none': { vnsub: 'none', icon: QuestionMarkCircleIcon },
}

const infoManga = reactive({
  author: 'Đang cập nhật',
  status: 'Đang tiến hành',
  genres: [
    'Action',
    'Fantasy',
    'Manhua',
    'Shounen',
    'Supernatural',
    'Truyện Màu'
  ],
  numViewer: null
});

</script>

<style scoped>

</style>