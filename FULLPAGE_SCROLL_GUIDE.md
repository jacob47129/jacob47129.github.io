# Full Page Scroll Component Guide

## 概述

这个全屏滚动组件实现了类似苹果官网的垂直幻灯片效果，每次滚动都会固定到下一个屏幕。

## 功能特性

### 🎯 核心功能
- **全屏滚动**: 每次滚动都会切换到下一个完整的屏幕
- **平滑过渡**: 使用CSS scroll-behavior实现平滑滚动效果
- **响应式设计**: 适配桌面和移动设备
- **防抖处理**: 防止快速滚动时跳过多个页面

### 🎮 交互方式
- **鼠标滚轮**: 上下滚动切换页面
- **键盘导航**: 
  - ↑↓ 箭头键
  - Page Up/Page Down
  - Home/End 键
- **触摸滑动**: 移动设备上支持上下滑动
- **点击导航**: 右侧导航点可直接跳转

### 🎨 视觉元素
- **导航点**: 右侧垂直排列，显示当前页面位置
- **滚动指示**: 实时更新当前位置
- **平滑动画**: 页面切换时的过渡效果

## 使用方法

### 1. 基本用法

```tsx
import FullPageScroll from "@/components/FullPageScroll";

function MyPage() {
  return (
    <FullPageScroll>
      <section className="min-h-screen">
        {/* 第一页内容 */}
      </section>
      
      <section className="min-h-screen">
        {/* 第二页内容 */}
      </section>
      
      <section className="min-h-screen">
        {/* 第三页内容 */}
      </section>
    </FullPageScroll>
  );
}
```

### 2. 添加页面ID

```tsx
<FullPageScroll>
  <section id="hero" className="min-h-screen">
    {/* 首页 */}
  </section>
  
  <section id="about" className="min-h-screen">
    {/* 关于页面 */}
  </section>
  
  <section id="contact" className="min-h-screen">
    {/* 联系页面 */}
  </section>
</FullPageScroll>
```

### 3. 自定义样式

```tsx
<FullPageScroll className="custom-scroll-container">
  <section className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700">
    {/* 自定义背景 */}
  </section>
</FullPageScroll>
```

## CSS 类名

### 主要类名
- `.fullpage-scroll` - 主容器
- `.fullpage-scroll section` - 页面部分
- `.navigation-dots` - 导航点容器

### 自定义样式示例

```css
/* 自定义导航点样式 */
.fullpage-scroll .navigation-dots button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.fullpage-scroll .navigation-dots button:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.2);
}

/* 当前页面导航点 */
.fullpage-scroll .navigation-dots button.active {
  background: white;
  transform: scale(1.25);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
```

## 技术实现

### 核心原理
1. **事件监听**: 监听滚轮、键盘、触摸事件
2. **状态管理**: 跟踪当前页面和滚动状态
3. **DOM操作**: 使用scrollIntoView进行页面切换
4. **防抖处理**: 避免快速滚动导致的冲突
5. **方向锁定**: 防止快速滚动时方向改变

### 关键代码片段

```tsx
// 滚动到指定页面
const scrollToSection = (index: number) => {
  if (isScrolling || index < 0 || index >= sectionsRef.current.length) return;
  
  setIsScrolling(true);
  setCurrentSection(index);
  
  const targetSection = sectionsRef.current[index];
  if (targetSection?.ref.current) {
    targetSection.ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  setTimeout(() => {
    setIsScrolling(false);
    scrollDirection.current = null;
  }, 1000);
};
```

## 浏览器兼容性

### 支持的浏览器
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### 移动设备
- ✅ iOS Safari 12+
- ✅ Android Chrome 60+
- ✅ Samsung Internet 8+

## 性能优化

### 已实现的优化
- **事件节流**: 防止频繁触发滚动事件
- **内存管理**: 正确清理事件监听器
- **CSS优化**: 使用transform和opacity进行动画
- **懒加载**: 支持图片和内容的懒加载
- **方向锁定**: 防止快速滚动时的方向冲突

### 建议的优化
```tsx
// 使用React.memo优化组件渲染
const FullPageScroll = React.memo(({ children, className = '' }) => {
  // 组件内容
});

// 使用useCallback优化事件处理函数
const handleWheel = useCallback((e: WheelEvent) => {
  // 事件处理逻辑
}, [currentSection, isScrolling]);
```

## 常见问题

### Q: 如何禁用某些页面的滚动？
A: 可以通过CSS或JavaScript动态控制：

```tsx
const [isScrollEnabled, setIsScrollEnabled] = useState(true);

<FullPageScroll className={isScrollEnabled ? '' : 'scroll-disabled'}>
  {/* 页面内容 */}
</FullPageScroll>
```

### Q: 如何自定义滚动速度？
A: 修改scrollToSection函数中的延迟时间：

```tsx
setTimeout(() => setIsScrolling(false), 1000); // 改为1秒
```

### Q: 如何添加页面切换动画？
A: 使用CSS动画或Framer Motion：

```css
.fullpage-scroll section {
  transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
}

.fullpage-scroll section.fade-in {
  opacity: 1;
  transform: translateY(0);
}
```

### Q: 快速滚动时会跳过多个页面怎么办？
A: 组件已经实现了防抖处理和方向锁定机制：
- 增加了滚动间隔时间（150ms）
- 锁定滚动方向，防止快速改变方向
- 延长滚动状态重置时间（1000ms）

## 演示页面

访问 `/demo` 页面查看完整的功能演示：
- 6个不同主题的页面
- 完整的导航功能展示
- 代码示例和说明

## 更新日志

### v1.1.0
- ✅ 移除进度条，简化界面
- ✅ 优化导航点样式和位置
- ✅ 修复快速滚动多页问题
- ✅ 增加方向锁定机制
- ✅ 改进防抖处理

### v1.0.0
- ✅ 基础全屏滚动功能
- ✅ 键盘和触摸支持
- ✅ 导航点和进度条
- ✅ 响应式设计
- ✅ TypeScript支持

## 贡献

欢迎提交Issue和Pull Request来改进这个组件！

## 许可证

MIT License
