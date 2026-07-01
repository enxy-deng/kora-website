import { MapPin, Star } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

const places = [
  {
    name: '京味小馆 · 工体北路',
    reason: '菜品稳定，空间不吵，两个人点 3 个菜刚好。',
    price: '人均 160-190',
    feature: '烤鸭小份、乾隆白菜',
    date: '适合轻松约会',
    booking: '建议预约',
  },
  {
    name: '胡同私房菜 · 朝阳里',
    reason: '不像网红店，口味偏家常，服务节奏舒服。',
    price: '人均 180',
    feature: '老北京炖菜、杏仁豆腐',
    date: '适合聊天',
    booking: '周末需要预约',
  },
  {
    name: '新派中餐 · 太古里西区',
    reason: '离三里屯近，环境更现代，外地朋友也容易接受。',
    price: '人均 200 左右',
    feature: '创意小炒、低度酒',
    date: '很适合约会',
    booking: '晚 7 点后建议预约',
  },
];

export function ChatExample() {
  return (
    <AnimatedSection className="py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">CHAT EXAMPLE</p>
          <h2 className="section-title">聊天示例</h2>
          <p className="section-copy">
            你不用学习复杂筛选器。像问朋友一样问，KORA 会把推荐理由和实际决策信息一起给你。
          </p>
        </div>
        <div className="rounded-[8px] border border-slate-200 bg-[#eff4f8] p-4 shadow-soft sm:p-6">
          <div className="mb-4 flex items-center gap-3 rounded-[8px] bg-white px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-bold text-white">K</div>
            <div>
              <p className="font-semibold">KORA</p>
              <p className="text-xs text-mint">AI 本地朋友</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="max-w-[82%] rounded-[8px] bg-brand px-4 py-3 text-sm leading-6 text-white">
                我在北京三里屯，预算200，两个人吃饭。
              </div>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-white p-4">
              <p className="text-sm leading-6 text-slate-700">推荐三家真正本地人喜欢、适合两个人吃饭的餐厅：</p>
              <div className="mt-4 space-y-4">
                {places.map((place) => (
                  <article key={place.name} className="rounded-[8px] bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold">{place.name}</h3>
                      <MapPin className="h-4 w-4 shrink-0 text-brand" />
                    </div>
                    <dl className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-2">
                      <div>
                        <dt className="font-semibold text-ink">为什么推荐</dt>
                        <dd>{place.reason}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink">价格</dt>
                        <dd>{place.price}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink">特色</dt>
                        <dd>{place.feature}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink">约会与预约</dt>
                        <dd>
                          {place.date} · {place.booking}
                        </dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-mint">
                <Star className="h-4 w-4 fill-mint" />
                可以继续问：“哪家离我最近？”或“直接给我高德地图链接。”
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
