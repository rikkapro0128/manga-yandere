<template>
  <Popover class="relative bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link class="flex items-center" to="/">
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="" />
            <span class="ml-2 font-bold">Truyện</span>
          </router-link>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div as="nav" class="hidden space-x-10 md:flex">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900']">
              <span>Thể loại</span>
              <ChevronDownIcon
                :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 w-screen w-fit transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid lg:grid-cols-menu-genres bg-white lg:gap-4 sm:gap-8 sm:p-8 sm:pb-4">
                    <p @mouseenter="handleDescGenres(item.desc)" @mouseleave="handleDescGenres('')"
                      v-for="item in genres" :key="item.type"
                      class="text-sm font-medium text-gray-900 whitespace-nowrap cursor-pointer hover:text-indigo-600">
                      {{ item.type }}</p>
                  </div>
                  <div class="text-sm space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    {{ descMain }}
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Xếp hạng</a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Hội nhóm</a>
        </div>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <router-link to="/sign?type=in"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Đăng
            nhập</router-link>
          <router-link to="/sign?type=up"
            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            Đăng ký</router-link>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in genres" :key="item.name" :href="item.href"
                  class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="space-y-6 py-6 px-5">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>
              <a v-for="item in resources" :key="item.name" :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700">{{ item.name }}</a>
            </div>
            <div>
              <a href="#"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Đăng
                ký</a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500">Đăng nhập</a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue';

const genres = [
  {
    "type": "Action",
    "desc": "Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh"
  },
  {
    "type": "Adult",
    "desc": "Thể loại Adult đề cập đến vấn đề nhạy cảm, chỉ dành cho tuổi 17+"
  },
  {
    "type": "Adventure",
    "desc": "Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật"
  },
  {
    "type": "Anime",
    "desc": "Truyện đã được chuyển thể thành film Anime"
  },
  {
    "type": "Chuyển Sinh",
    "desc": "Thể loại này là những câu chuyện về người ở một thế giới này xuyên đến một thế giới khác, có thể là thế giới mang phong cách trung cổ với kiếm sĩ và ma thuật, hay thế giới trong game, hoặc có thể là bạn chết ở nơi này và được chuyển sinh đến nơi khác"
  },
  {
    "type": "Comedy",
    "desc": "Thể loại có nội dung trong sáng và cảm động, thường có các tình tiết gây cười, các xung đột nhẹ nhàng"
  },
  {
    "type": "Comic",
    "desc": "Truyện tranh Châu Âu và Châu Mĩ"
  },
  {
    "type": "Cooking",
    "desc": "Thể loại có nội dung về nấu ăn, ẩm thực"
  },
  {
    "type": "Cổ Đại",
    "desc": "Truyện có nội dung xảy ra ở thời cổ đại phong kiến."
  },
  {
    "type": "Doujinshi",
    "desc": "Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình"
  },
  {
    "type": "Drama",
    "desc": "Thể loại mang đến cho người xem những cảm xúc khác nhau: buồn bã, căng thẳng thậm chí là bi phẫn"
  },
  {
    "type": "Đam Mỹ",
    "desc": "Truyện tình cảm giữa nam và nam."
  },
  {
    "type": "Ecchi",
    "desc": "Thường có những tình huống nhạy cảm nhằm lôi cuốn người xem"
  },
  {
    "type": "Fantasy",
    "desc": "Thể loại xuất phát từ trí tưởng tượng phong phú, từ pháp thuật đến thế giới trong mơ thậm chí là những câu chuyện thần tiên"
  },
  {
    "type": "Gender Bender",
    "desc": "Là một thể loại trong đó giới tính của nhân vật bị lẫn lộn: nam hoá thành nữ, nữ hóa thành nam..."
  },
  {
    "type": "Harem",
    "desc": "Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính"
  },
  {
    "type": "Historical",
    "desc": "Thể loại có liên quan đến thời xa xưa"
  },
  {
    "type": "Horror",
    "desc": "Horror là: rùng rợn, nghe cái tên là bạn đã hiểu thể loại này có nội dung thế nào. Nó làm cho bạn kinh hãi, khiếp sợ, ghê tởm, run rẩy, có thể gây sock - một thể loại không dành cho người yếu tim"
  },
  {
    "type": "Josei",
    "desc": "Thể loại của manga hay anime được sáng tác chủ yếu bởi phụ nữ cho những độc giả nữ từ 18 đến 30. Josei manga có thể miêu tả những lãng mạn thực tế , nhưng trái ngược với hầu hết các kiểu lãng mạn lí tưởng của Shoujo manga với cốt truyện rõ ràng, chín chắn"
  },
  {
    "type": "Live action",
    "desc": "Truyện đã được chuyển thể thành phim"
  },
  {
    "type": "Manga",
    "desc": "Truyện tranh của Nhật Bản"
  },
  {
    "type": "Manhua",
    "desc": "Truyện tranh của Trung Quốc"
  },
  {
    "type": "Manhwa",
    "desc": "Truyện tranh Hàn Quốc, đọc từ trái sang phải"
  },
  {
    "type": "Martial Arts",
    "desc": "Giống với tên gọi, bất cứ gì liên quan đến võ thuật trong truyện từ các trận đánh nhau, tự vệ đến các môn võ thuật như akido, karate, judo hay taekwondo, kendo, các cách né tránh"
  },
  {
    "type": "Mature",
    "desc": "Thể loại dành cho lứa tuổi 17+ bao gồm các pha bạo lực, máu me, chém giết, tình dục ở mức độ vừa"
  },
  {
    "type": "Mecha",
    "desc": "Mecha, còn được biết đến dưới cái tên meka hay mechs, là thể loại nói tới những cỗ máy biết đi (thường là do phi công cầm lái)"
  },
  {
    "type": "Mystery",
    "desc": "Thể loại thường xuất hiện những điều bí ấn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra câu trả lời thỏa đáng"
  },
  {
    "type": "Ngôn Tình",
    "desc": "Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính."
  },
  {
    "type": "One shot",
    "desc": "Những truyện ngắn, thường là 1 chapter"
  },
  {
    "type": "Psychological",
    "desc": "Thể loại liên quan đến những vấn đề về tâm lý của nhân vật ( tâm thần bất ổn, điên cuồng ...)"
  },
  {
    "type": "Romance",
    "desc": "Thường là những câu chuyện về tình yêu, tình cảm lãng mạn. Ớ đây chúng ta sẽ lấy ví dụ như tình yêu giữa một người con trai và con gái, bên cạnh đó đặc điểm thể loại này là kích thích trí tưởng tượng của bạn về tình yêu"
  },
  {
    "type": "School Life",
    "desc": "Trong thể loại này, ngữ cảnh diễn biến câu chuyện chủ yếu ở trường học"
  },
  {
    "type": "Sci-fi",
    "desc": "Bao gồm những chuyện khoa học viễn tưởng, đa phần chúng xoay quanh nhiều hiện tượng mà liên quan tới khoa học, công nghệ, tuy vậy thường thì những câu chuyện đó không gắn bó chặt chẽ với các thành tựu khoa học hiện thời, mà là do con người tưởng tượng ra"
  },
  {
    "type": "Seinen",
    "desc": "Thể loại của manga thường nhằm vào những đối tượng nam 18 đến 30 tuổi, nhưng người xem có thể lớn tuổi hơn, với một vài bộ truyện nhắm đến các doanh nhân nam quá 40. Thể loại này có nhiều phong cách riêng biệt , nhưng thể loại này có những nét riêng biệt, thường được phân vào những phong cách nghệ thuật rộng hơn và phong phú hơn về chủ đề, có các loại từ mới mẻ tiên tiến đến khiêu dâm"
  },
  {
    "type": "Shoujo",
    "desc": "Đối tượng hướng tới của thể loại này là phái nữ. Nội dung của những bộ manga này thường liên quan đến tình cảm lãng mạn, chú trọng đầu tư cho nhân vật (tính cách,...)"
  },
  {
    "type": "Shoujo Ai",
    "desc": "Thể loại quan hệ hoặc liên quan tới đồng tính nữ, thể hiện trong các mối quan hệ trên mức bình thường giữa các nhân vật nữ trong các manga, anime"
  },
  {
    "type": "Shounen",
    "desc": "Đối tượng hướng tới của thể loại này là phái nam. Nội dung của những bộ manga này thường liên quan đến đánh nhau và/hoặc bạo lực (ở mức bình thường, không thái quá)"
  },
  {
    "type": "Shounen Ai",
    "desc": "Thể loại có nội dung về tình yêu giữa những chàng trai trẻ, mang tính chất lãng mạn nhưng ko đề cập đến quan hệ tình dục"
  },
  {
    "type": "Slice of Life",
    "desc": "Nói về cuộc sống đời thường"
  },
  {
    "type": "Smut",
    "desc": "Những truyện có nội dung hơi nhạy cảm, đặc biệt là liên quan đến tình dục"
  },
  {
    "type": "Soft Yaoi",
    "desc": "Boy x Boy. Nặng hơn Shounen Ai tí."
  },
  {
    "type": "Soft Yuri",
    "desc": "Girl x Girl. Nặng hơn Shoujo Ai tí"
  },
  {
    "type": "Sports",
    "desc": "Đúng như tên gọi, những môn thể thao như bóng đá, bóng chày, bóng chuyền, đua xe, cầu lông,... là một phần của thể loại này"
  },
  {
    "type": "Supernatural",
    "desc": "Thể hiện những sức mạnh đáng kinh ngạc và không thể giải thích được, chúng thường đi kèm với những sự kiện trái ngược hoặc thách thức với những định luật vật lý"
  },
  {
    "type": "Thiếu Nhi",
    "desc": "Truyện tranh dành cho lứa tuổi thiếu nhi"
  },
  {
    "type": "Tragedy",
    "desc": "Thể loại chứa đựng những sự kiện mà dẫn đến kết cục là những mất mát hay sự rủi ro to lớn"
  },
  {
    "type": "Trinh Thám",
    "desc": "Các truyện có nội dung về các vụ án, các thám tử cảnh sát điều tra..."
  },
  {
    "type": "Truyện scan",
    "desc": "Các truyện đã phát hành tại VN được scan đăng online"
  },
  {
    "type": "Truyện Màu",
    "desc": "Tổng hợp truyện tranh màu, rõ, đẹp"
  },
  {
    "type": "Webtoon",
    "desc": "Là truyện tranh được đăng dài kỳ trên internet của Hàn Quốc chứ không xuất bản theo cách thông thường"
  },
  {
    "type": "Xuyên Không",
    "desc": "Xuyên Không, Xuyên Việt là thể loại nhân vật chính vì một lý do nào đó mà bị đưa đến sinh sống ở một không gian hay một khoảng thời gian khác. Nhân vật chính có thể trực tiếp xuyên qua bằng thân xác mình hoặc sống lại bằng thân xác người khác."
  }
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

const descMain = ref('');

function handleDescGenres(value) {
  descMain.value = value;
}
</script>