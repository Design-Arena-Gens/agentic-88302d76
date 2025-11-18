'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* ナビゲーション */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">美</span>
              </div>
              <span className="text-xl font-bold text-slate-800">モダンサイト</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-red-500 transition-colors duration-200 font-medium">ホーム</a>
              <a href="#features" className="text-slate-700 hover:text-red-500 transition-colors duration-200 font-medium">特徴</a>
              <a href="#services" className="text-slate-700 hover:text-red-500 transition-colors duration-200 font-medium">サービス</a>
              <a href="#contact" className="text-slate-700 hover:text-red-500 transition-colors duration-200 font-medium">お問い合わせ</a>
            </div>
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              美しい
              <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent"> デザイン</span>
              <br />
              革新的な体験
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              最新のテクノロジーと洗練されたデザインで、あなたのビジネスを次のレベルへ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                今すぐ始める
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-lg font-semibold border-2 border-slate-300 hover:border-red-500 hover:text-red-500 transition-all duration-300">
                詳しく見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">私たちの特徴</h2>
            <p className="text-xl text-slate-600">最高のサービスを提供するための3つの柱</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">高速パフォーマンス</h3>
              <p className="text-slate-600 leading-relaxed">
                最新の技術を活用し、驚くほど高速な読み込み速度を実現。ユーザー体験を最優先に設計されています。
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">美しいデザイン</h3>
              <p className="text-slate-600 leading-relaxed">
                モダンで洗練されたデザイン。あなたのブランドを際立たせる、視覚的に魅力的なインターフェース。
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-3xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">セキュアな環境</h3>
              <p className="text-slate-600 leading-relaxed">
                最高水準のセキュリティ対策。お客様のデータと信頼を守るための万全の体制を整えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">提供サービス</h2>
            <p className="text-xl text-slate-600">あなたのニーズに合わせた最適なソリューション</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">ビジネスコンサルティング</h3>
                  <p className="text-slate-600 leading-relaxed">
                    豊富な経験と専門知識を活かし、お客様のビジネス成長をサポート。戦略立案から実行まで、包括的なサービスを提供します。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">デジタルトランスフォーメーション</h3>
                  <p className="text-slate-600 leading-relaxed">
                    最新のデジタル技術を活用し、業務効率化とイノベーションを実現。持続可能な成長をサポートします。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">アプリ開発</h3>
                  <p className="text-slate-600 leading-relaxed">
                    ユーザーファーストの思想で、直感的で使いやすいアプリケーションを開発。あなたのアイデアを形にします。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">データ分析</h3>
                  <p className="text-slate-600 leading-relaxed">
                    ビッグデータとAIを活用した高度な分析サービス。データドリブンな意思決定を支援します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">お問い合わせ</h2>
            <p className="text-xl text-slate-600">お気軽にご連絡ください</p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12 rounded-2xl shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">美</span>
                </div>
                <span className="text-xl font-bold">モダンサイト</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                美しいデザインと革新的な技術で、あなたのビジネスをサポートします。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">コンサルティング</a></li>
                <li><a href="#" className="hover:text-white transition-colors">アプリ開発</a></li>
                <li><a href="#" className="hover:text-white transition-colors">データ分析</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DX支援</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 モダンサイト. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
