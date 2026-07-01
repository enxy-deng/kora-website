import {
  BadgeCheck,
  Coffee,
  CreditCard,
  HeartHandshake,
  Map,
  MapPin,
  MessageCircle,
  Navigation,
  Search,
  Sparkles,
  Train,
  Utensils,
  Wine,
} from 'lucide-react';

export const whatCards = [
  {
    title: '本地推荐',
    description: '推荐真正本地人会去的餐厅、咖啡馆、酒吧，而不是游客排行榜。',
    icon: MapPin,
  },
  {
    title: 'AI 旅行助手',
    description: '告诉它你的城市、预算和需求，它就能生成适合你的推荐。',
    icon: Sparkles,
  },
  {
    title: '一站式出行',
    description: '支持导航、地铁、打车、支付建议、旅行注意事项。',
    icon: Navigation,
  },
];

export const whyKoraReasons = [
  {
    title: '像朋友一样问',
    description: '不用翻攻略、做筛选题。直接告诉 KORA 你在哪、想干嘛、预算多少，它会用聊天的方式给答案。',
    icon: MessageCircle,
    color: 'bg-sky-100 text-sky-600',
  },
  {
    title: '本地人视角',
    description: '优先推荐日常会去、当下还适合去的地方，关注营业时间、距离、排队和是否需要预约。',
    icon: HeartHandshake,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: '能直接行动',
    description: '每条推荐都尽量给出价格、地址、导航、支付方式和注意事项，看到就能决定下一步。',
    icon: Navigation,
    color: 'bg-violet-100 text-violet-600',
  },
  {
    title: '越具体越好用',
    description: '深夜食堂、安静咖啡馆、约会餐厅、一个人吃饭、素食或忌口，都可以直接说。',
    icon: Sparkles,
    color: 'bg-amber-100 text-amber-600',
  },
];

export const features = [
  { title: '找餐厅', description: '按城市、预算、口味和场景筛选。', icon: Utensils },
  { title: '找咖啡馆', description: '安静工作、拍照好看、豆子靠谱都能说。', icon: Coffee },
  { title: '推荐酒吧', description: '从微醺约会到精酿小馆，避开游客线。', icon: Wine },
  { title: '出行建议', description: '地铁、打车、步行路线和避坑提醒。', icon: Train },
  { title: '支付方式', description: '告诉你哪里能用支付宝、微信或现金。', icon: CreditCard },
  { title: '高德地图直达', description: '拿到推荐后，一步打开本地地图。', icon: Map },
];

export const steps = [
  { title: '打开 Telegram', description: '从你已经熟悉的聊天入口开始。', icon: MessageCircle },
  { title: '搜索 @Kora_china_bot', description: '在 Telegram 里找到 KORA 官方 Bot，并开始对话。', icon: Search },
  {
    title: '说出你的需求',
    description: '例如：“我在上海静安寺，预算150，想吃本帮菜”。',
    icon: Sparkles,
  },
  { title: '立即获得推荐', description: '得到理由、价格、路线和注意事项。', icon: BadgeCheck },
];

export const testimonials = [
  {
    quote: '第一次来中国，全靠 KORA 找吃的，推荐都很像当地朋友会带我去的地方。',
    name: 'Mina',
    context: '上海 · 3 天短途旅行',
  },
  {
    quote: '终于不用刷半小时小红书。把预算和位置发过去，几秒钟就有答案。',
    name: 'Ryan',
    context: '北京 · 周末约会',
  },
  {
    quote: 'KORA 推荐的店几乎没有踩雷，还会提醒我哪些地方需要提前预约。',
    name: 'Jess',
    context: '成都 · 美食探索',
  },
  {
    quote: '像有个中国朋友一直陪着我，比单纯看地图安心很多。',
    name: 'Leo',
    context: '广州 · 商务出差',
  },
];

export const faqs = [
  {
    question: 'KORA 免费吗？',
    answer: '基础推荐可以免费体验。未来如果加入更深度的行程规划或会员能力，也会保持清晰透明的价格说明。',
  },
  {
    question: '需要下载 App 吗？',
    answer: '不需要额外下载独立 App。KORA 运行在 Telegram 上，打开聊天就能使用。',
  },
  {
    question: '为什么使用 Telegram？',
    answer: 'Telegram 适合跨城市、跨语言的轻量聊天体验。对旅行者来说，它比重新安装一个陌生 App 更快进入状态。',
  },
  {
    question: '支持哪些城市？',
    answer: '优先覆盖北京、上海、广州、深圳、成都、杭州等常见旅行城市，并会持续扩展更多本地推荐。',
  },
];
