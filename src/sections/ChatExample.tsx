import { MapPin, Navigation, Phone, Star, Timer } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const places = [
  {
    rank: '①',
    name: '巷口小馆（武大附近）',
    rating: '4.6',
    price: '¥42/人',
    tag: '现在就开着 ✅',
    quote: '本地学生和附近居民常去的小馆，热菜出得快，味道家常，适合想吃一顿踏实晚饭。',
    address: '大学路附近 · 步行约 8 分钟',
    phone: '可到店前电话确认',
    hours: '10:30–22:30',
    link: 'uri.amap.com/marker?name=巷口小馆',
  },
  {
    rank: '②',
    name: '晚风精酿（街道口店）',
    rating: '4.7',
    price: '¥88/人',
    tag: '适合微醺聊天',
    quote: '灯光舒服、音乐不吵，适合两三个人坐一会儿。想放松但不想太闹，可以选它。',
    address: '街道口商圈内 · 打车方便',
    phone: '高峰期建议先问座',
    hours: '18:00–02:00',
    link: 'uri.amap.com/marker?name=晚风精酿',
  },
];

export function ChatExample() {
  return (
    <AnimatedSection className="py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="eyebrow">CHAT EXAMPLE</p>
          <h2 className="section-title">聊天示例</h2>
          <p className="section-copy">
            KORA 的回答更像一个本地朋友发来的长消息：先给结论，再解释为什么推荐，最后附上地址、时间和导航。
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[8px] border border-emerald-200 bg-[#9acb88] p-4 shadow-soft sm:p-6">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="relative">
            <div className="mb-4 flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-200 to-orange-500 font-bold text-white">
                K
              </div>
              <div>
                <p className="font-semibold">Kora</p>
                <p className="text-sm text-slate-500">连接中...</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="max-w-[82%] rounded-[8px] bg-[#dff8c8] px-4 py-3 text-sm leading-7 text-slate-800 shadow-sm">
                  我在武汉街道口，预算100左右，想找现在还开着、别太游客的地方。
                </div>
              </div>

              <div className="rounded-[8px] bg-white px-5 py-5 text-slate-950 shadow-sm">
                <p className="text-base leading-7">
                  收到。你现在这个需求，我会优先找：离你近、现在营业、价格不虚高、适合马上去的地方。
                </p>

                <div className="mt-5 space-y-6">
                  {places.map((place) => (
                    <article key={place.name} className="border-t border-slate-100 pt-5 first:border-t-0 first:pt-0">
                      <h3 className="text-xl font-semibold leading-8">
                        <span className="mr-2 text-2xl">{place.rank}</span>
                        {place.name} <Star className="mb-1 inline h-5 w-5 fill-amber-300 text-amber-300" /> {place.rating}
                      </h3>
                      <p className="mt-1 text-base text-slate-700">
                        {place.price} —— {place.tag}
                      </p>
                      <div className="mt-4 rounded-[8px] border-l-4 border-sky-400 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">
                        “{place.quote}”
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                        <li className="flex gap-2">
                          <MapPin className="mt-1 h-4 w-4 shrink-0 text-rose-500" />
                          {place.address}
                        </li>
                        <li className="flex gap-2">
                          <Phone className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
                          {place.phone}
                        </li>
                        <li className="flex gap-2">
                          <Timer className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
                          {place.hours}
                        </li>
                        <li className="flex gap-2 text-sky-600">
                          <Navigation className="mt-1 h-4 w-4 shrink-0" />
                          {place.link}
                        </li>
                      </ul>
                    </article>
                  ))}
                </div>

                <p className="mt-6 rounded-[8px] bg-emerald-50 px-4 py-3 text-sm font-semibold leading-7 text-emerald-700">
                  说实话：如果你现在就出门，我会先选第 1 家；如果想坐久一点聊天，再选第 2 家。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
