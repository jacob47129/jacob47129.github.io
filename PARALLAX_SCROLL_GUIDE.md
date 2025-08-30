# 视差滚动组件使用指南

## 概述

我们已经将 `FullPageScroll` 组件升级为使用 `react-scroll-parallax` 实现，提供了更流畅的视差滚动效果和更好的性能。

## 主要特性

- ✅ 基于 `react-scroll-parallax` 的高性能视差滚动
- ✅ 保持原有的全屏滚动功能
- ✅ 支持键盘导航（方向键、Page Up/Down、Home/End）
- ✅ 支持触摸滑动（移动端）
- ✅ 导航点指示器
- ✅ 可自定义视差效果

## 安装依赖

```bash
npm install react-scroll-parallax
```

## 基本用法

### 1. 导入组件

```tsx
import FullPageScroll, { ParallaxBackground, ParallaxContent } from '@/components/FullPageScroll';
```

### 2. 基本结构

```tsx
<FullPageScroll>
  {/* Hero Section */}
  <section id="hero" className="relative z-10 flex items-center justify-center min-h-screen">
    <ParallaxBackground speed={-20}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
    </ParallaxBackground>
    
    <ParallaxContent speed={10} direction="up">
      <div className="text-center text-white">
        <h1>标题</h1>
        <p>描述</p>
      </div>
    </ParallaxContent>
  </section>

  {/* 其他 Section */}
  <section id="content" className="relative py-20">
    <ParallaxContent speed={5}>
      <div>内容</div>
    </ParallaxContent>
  </section>
</FullPageScroll>
```

## 组件说明

### FullPageScroll

主要的容器组件，提供全屏滚动功能。

**Props:**
- `children`: ReactNode - 子组件
- `className`: string - 额外的CSS类名

### ParallaxBackground

用于创建视差背景效果。

**Props:**
- `children`: ReactNode - 背景内容
- `speed`: number - 视差速度（默认: -20）

### ParallaxContent

用于创建视差内容效果。

**Props:**
- `children`: ReactNode - 内容
- `speed`: number - 视差速度（默认: 5）
- `direction`: 'up' | 'down' - 视差方向（默认: 'up'）
- `className`: string - 额外的CSS类名

## 使用技巧

### 1. 视差速度设置

- **负值**: 元素移动方向与滚动方向相反（背景效果）
- **正值**: 元素移动方向与滚动方向相同（前景效果）
- **数值大小**: 控制移动速度，数值越大效果越明显

### 2. 性能优化

- 使用 `will-change: transform` 优化动画性能
- 避免在视差元素中使用复杂的CSS动画
- 合理设置视差速度，避免过度使用

### 3. 响应式设计

```tsx
<ParallaxContent 
  speed={window.innerWidth > 768 ? 10 : 5} 
  direction="up"
>
  <div>响应式内容</div>
</ParallaxContent>
```

## 示例

### 完整的页面示例

```tsx
import FullPageScroll, { ParallaxBackground, ParallaxContent } from '@/components/FullPageScroll';

const MyPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <FullPageScroll>
        {/* Hero Section */}
        <section id="hero" className="relative z-10 flex items-center justify-center min-h-screen">
          <ParallaxBackground speed={-15}>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
              style={{
                backgroundImage: `url('/assets/images/bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </ParallaxBackground>
          
          <ParallaxContent speed={10} direction="up">
            <div className="relative z-10 text-center text-white">
              <h1 className="text-6xl font-bold mb-4">欢迎</h1>
              <p className="text-xl opacity-90">探索视差滚动的魅力</p>
            </div>
          </ParallaxContent>
        </section>

        {/* Content Section */}
        <section id="content" className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ParallaxContent speed={5}>
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">标题</h2>
                  <p className="text-lg">内容描述</p>
                </div>
              </ParallaxContent>

              <ParallaxContent speed={-5}>
                <div className="relative">
                  <img src="/image.jpg" alt="描述" className="w-full h-96 object-cover rounded-lg" />
                </div>
              </ParallaxContent>
            </div>
          </div>
        </section>

        {/* Floating Elements */}
        <ParallaxContent speed={-15} className="absolute top-1/4 left-10 opacity-30">
          <div className="w-20 h-20 bg-blue-500 rounded-full blur-sm" />
        </ParallaxContent>
      </FullPageScroll>
    </div>
  );
};
```

## 注意事项

1. **依赖安装**: 确保已安装 `react-scroll-parallax` 依赖
2. **性能考虑**: 避免在移动设备上使用过多的视差效果
3. **浏览器兼容性**: 确保目标浏览器支持CSS transform
4. **SEO友好**: 视差效果不影响页面的SEO和可访问性

## 故障排除

### 常见问题

1. **视差效果不工作**
   - 检查是否正确安装了 `react-scroll-parallax`
   - 确保组件被 `ParallaxProvider` 包裹

2. **性能问题**
   - 减少同时使用的视差元素数量
   - 降低视差速度值
   - 使用 `will-change: transform` 优化

3. **移动端问题**
   - 在移动端禁用或减少视差效果
   - 使用媒体查询调整视差参数

## 更新日志

- **v2.0.0**: 升级到 `react-scroll-parallax` 实现
- **v1.0.0**: 原始的全屏滚动实现
