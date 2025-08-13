# 苹果 App 官方网站

一个可配置的苹果 App 官方网站项目，通过环境变量配置 App ID，自动从 iTunes API 获取 App 信息并展示。

## 🚀 特性

- ⚡ **Vite + React + TypeScript** - 现代化技术栈，快速开发体验
- 🎨 **Tailwind CSS** - 科技风格 UI 设计
- 🌍 **智能地理检测** - 自动根据用户位置选择中国区或美国区 App Store
- 📱 **响应式设计** - 完美适配手机、平板和桌面设备
- 🔄 **自动容错** - 如果 App 在一个区域未上架，自动尝试其他区域
- 🚀 **一键部署** - 支持 Vercel 一键部署

## 📦 安装

```bash
# 克隆项目
git clone <your-repo-url>
cd app_official_web

# 安装依赖
npm install

# 复制环境变量文件
cp .env.example .env

# 编辑 .env 文件，填入你的 App ID
# 例如：VITE_APP_ID=414478124 (微信的 App ID)
```

## 🔧 配置

在 `.env` 文件中配置以下环境变量：

```env
# 必填：App Store 应用 ID
VITE_APP_ID=你的AppID

# 可选：公司信息
VITE_APP_NAME=我的应用
VITE_COMPANY_NAME=我的公司
VITE_SUPPORT_EMAIL=support@example.com
VITE_WEBSITE_URL=https://yourapp.vercel.app
```

### 如何获取 App ID？

1. 打开 App Store，搜索你的应用
2. 点击分享按钮，复制链接
3. 链接格式：`https://apps.apple.com/cn/app/应用名/id123456789`
4. 其中 `123456789` 就是 App ID

## 💻 开发

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 🌐 地理位置检测逻辑

网站会自动检测用户的地理位置来决定使用哪个区域的 App Store：

1. **时区检测** - 如果用户时区为 Asia/Shanghai，使用中国区
2. **语言检测** - 如果浏览器语言为中文，使用中国区
3. **默认策略** - 其他情况使用美国区
4. **自动容错** - 如果 App 在检测的区域未上架，自动切换到另一个区域

## 🚀 部署到 Vercel

### 方法一：通过 GitHub

1. 将项目推送到 GitHub
2. 登录 [Vercel](https://vercel.com)
3. 导入 GitHub 仓库
4. 配置环境变量：
   - `VITE_APP_ID` - 你的 App ID
   - 其他可选变量
5. 点击部署

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel

# 按提示操作，记得设置环境变量
```

## 📝 URL 参数支持

除了环境变量配置，你也可以通过 URL 参数动态指定 App ID：

```
https://yoursite.com/?appId=123456789
```

这在测试不同 App 或创建通用展示页面时很有用。

## 🎨 自定义样式

项目使用 Tailwind CSS，你可以：

1. 修改 `src/index.css` 调整全局样式
2. 修改 `src/App.tsx` 自定义组件和布局
3. 在 `tailwind.config.js` 中扩展主题配置

## 📄 许可

MIT

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 💡 常见问题

**Q: 为什么看不到 App 信息？**
A: 请检查：
1. App ID 是否正确
2. App 是否已在 App Store 上架
3. 网络连接是否正常

**Q: 如何支持更多地区？**
A: 目前支持中国区和美国区，可以在 `src/lib/api.ts` 中添加更多地区支持。

**Q: 如何修改页面标题？**
A: 编辑 `index.html` 中的 `<title>` 标签。