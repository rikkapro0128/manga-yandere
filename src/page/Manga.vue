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
        <div class="overflow-hidden p-2">
          <img class="object-cover w-full shadow-sm shadow-slate-500 rounded-sm"
            src="https://st.ntcdntempv3.com/data/comics/32/vo-luyen-dinh-phong.jpg" alt="[võ luyện đông phong]">
        </div>
        <!-- THIS IS INFORMATION MANGA -->
        <div class="pl-8 -my-2 text-sm">
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
      <!-- THIS IS DESCRIPTION MANGA -->
      <div class="pt-2">
        <el-divider class="inline-block border-t-2 border-indigo-600" content-position="left">
          <div class="my-4 flex flex-nowrap items-center text-indigo-600">
            <ChatBubbleBottomCenterTextIcon class="w-5 h-5" />
            <h4 class="ml-2 font-bold">Nội dung</h4>
          </div>
        </el-divider>
        <p ref="expand" :style="{ lineClamp: expandStatus.isExpand ? 'unset' : '4' }" class="text-sm line-clamp-4">{{
        demoDesc }}</p>
        <div class="py-2 mt-2 text-right" v-if="expandStatus.shouldExpand">
          <el-button @click="expandStatus.isExpand = !expandStatus.isExpand" type="primary">
            <ArrowsPointingOutIcon class="w-4 h-4 mr-2" />
            {{ expandStatus.isExpand ? 'Thu gọn' : 'Xem thêm' }}
          </el-button>
        </div>
      </div>
      <!-- THIS IS LIST CHAPTER MANGA -->
      <div>
        <el-divider class="inline-block border-t-2 border-indigo-600" content-position="left">
          <div class="my-4 flex flex-nowrap items-center text-indigo-600">
            <QueueListIcon class="w-5 h-5" />
            <h4 class="ml-2 font-bold">Danh sách chapter</h4>
          </div>
        </el-divider>
        <el-table-v2 :columns="columnsChapter" :data="datasChapter" :width="800" :height="400" fixed />
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';
import { WifiIcon, QuestionMarkCircleIcon, UserIcon, TagIcon, EyeIcon, ChatBubbleBottomCenterTextIcon, QueueListIcon, ArrowsPointingOutIcon } from '@heroicons/vue/24/solid'

const snipetType = {
  'author': { vnsub: 'Tác giả', icon: UserIcon },
  'status': { vnsub: 'Trạng thái', icon: WifiIcon },
  'genres': { vnsub: 'Thể loại', icon: TagIcon },
  'numViewer': { vnsub: 'Lượt xem', icon: EyeIcon },
  'none': { vnsub: 'none', icon: QuestionMarkCircleIcon },
}
const demoDesc = 'Một s.át thủ và một kẻ tống tình đã bắt đầu một cuộc chiến giành lấy hôn nhân khốc liệt nhất thế giới. Gero là một chàng trai trẻ đến từ một gia tộc sát thủ đã tồn tại hàng trăm năm. Là một người chưa bao giờ tới trường và sống một cuộc đời đen tối trong giới sát thủ, cậu tự cho mình là “vô vọng với phái nữ” và hôn nhân “không phải là thứ dành cho cậu”. Tuy nhiên, vào một ngày nọ, vì lo sợ rằng gia tộc sẽ không còn tồn tại nữa, người bà đã cảnh báo với Gero rằng, nếu cậu không kết hôn và sinh ra một người thừa kế, thì em gái của cậu sẽ làm “điều đó”. Nỗ lực đến cùng với trí thông minh của mình, Gero đã hỏi mục tiêu của mình, một kẻ tống tiền, để…';

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

const columnsChapter = [
  {
    key: `miru-chapter`,
    dataKey: `miru-chapter`,
    title: `Chapter`,
    width: 150,
  },
  {
    key: `miru-update`,
    dataKey: `miru-update`,
    title: `Cập nhật`,
    width: 150,
  },
  {
    key: `miru-viewer`,
    dataKey: `miru-viewer`,
    title: `Lượt xem`,
    width: 150,
  },
]

const datasChapter = [
  // foreach row
  {
    id: `chapter 1`,
    parentId: null,
    // foreach Column
    'miru-chapter': 'Chapter 1',
    'miru-update': '15 ngày trước',
    'miru-viewer': '3.768'
  },
  // foreach row
  {
    id: `chapter 2`,
    parentId: null,
    // foreach Column
    'miru-chapter': 'Chapter 2',
    'miru-update': '34 ngày trước',
    'miru-viewer': '1.728'
  },
]

const expand = ref(null)
const expandStatus = reactive({ shouldExpand: false, isExpand: false })

onMounted(() => {
  if (expand.value.clientHeight === expand.value.scrollHeight) {
    expandStatus.shouldExpand = false;
  } else {
    expandStatus.shouldExpand = true;
  }
})

</script>

<style scoped>

</style>