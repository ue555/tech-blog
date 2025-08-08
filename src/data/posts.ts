import type {BlogPost} from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "React 19の新機能とパフォーマンス改善について",
    excerpt:
      "React 19では、Suspenseの改善、Server Componentsの強化、そして新しいHooksが導入されました。本記事では、これらの新機能を実際のコード例とともに詳しく解説します。",
    content: `
## はじめに

React 19のリリースにより、フロントエンド開発に新たな可能性が広がりました。本記事では、主要な新機能と改善点について詳しく解説していきます。

## 主な新機能

### 1. Suspenseの改善

Suspenseがより使いやすくなり、データフェッチングやコード分割がさらに簡単になりました。

### 2. Server Componentsの強化

サーバーサイドレンダリングのパフォーマンスが大幅に向上し、初期ロード時間が短縮されました。

### 3. 新しいHooks

useTransitionやuseDeferredValueなど、パフォーマンス最適化のための新しいHooksが追加されました。

## パフォーマンスの改善

- バンドルサイズの削減: 約20%の削減を実現
- レンダリング速度: 最大30%の高速化
- メモリ使用量: より効率的なメモリ管理

## まとめ

React 19は、開発者体験とパフォーマンスの両面で大きな進化を遂げています。これらの新機能を活用することで、より高速で使いやすいアプリケーションを構築できるでしょう。
    `,
    author: "田中太郎",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tanaka",
    date: "2025-01-20",
    readTime: "5分",
    tags: ["React", "JavaScript", "フロントエンド"],
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    title: "TypeScript 5.0で変わる型システムの未来",
    excerpt:
      "TypeScript 5.0の新機能により、より安全で表現力豊かな型システムが実現されました。Decoratorsの標準化やconst type parametersなど、注目の機能を紹介します。",
    content: `
## TypeScript 5.0の革新

TypeScript 5.0は、JavaScriptの型システムに革命をもたらす重要なアップデートです。

## 主要な新機能

### Decoratorsの標準化

ついにDecoratorが正式にサポートされ、メタプログラミングがより簡単になりました。

### const type parameters

型パラメータをconstとして宣言できるようになり、より厳密な型推論が可能になりました。

## 実装例とベストプラクティス

実際のプロジェクトでこれらの機能を活用する方法を、具体的なコード例とともに紹介します。
    `,
    author: "佐藤花子",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sato",
    date: "2025-01-18",
    readTime: "8分",
    tags: ["TypeScript", "型システム", "JavaScript"],
    imageUrl:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    likes: 38,
    comments: 12,
  },
  {
    id: 3,
    title: "Next.js 14でのApp Routerベストプラクティス",
    excerpt:
      "App Routerの登場により、Next.jsの開発体験が大きく変わりました。実際のプロジェクトで得られた知見とベストプラクティスを共有します。",
    content: `
## App Routerの基本

Next.js 14のApp Routerは、従来のPages Routerとは異なる新しいアプローチを提供します。

## ベストプラクティス

1. **ファイル構造の最適化**: 機能ごとにディレクトリを整理
2. **Server Componentsの活用**: パフォーマンスの向上
3. **エラーハンドリング**: error.tsxとnot-found.tsxの活用

## 実装のポイント

実際のプロジェクトで遭遇した課題と、その解決方法を詳しく解説します。
    `,
    author: "山田次郎",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yamada",
    date: "2025-01-15",
    readTime: "10分",
    tags: ["Next.js", "React", "SSR"],
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    likes: 56,
    comments: 15,
  },
];
