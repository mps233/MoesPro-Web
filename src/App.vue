
<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <!-- Header -->
    <header class="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-3">
            <img 
              :src="iconImage" 
              alt="MoviePilot" 
              class="w-10 h-10 rounded-lg"
            />
            <h1 class="text-2xl font-bold text-white">Moes Pro</h1>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a href="#features" class="text-white/80 hover:text-white transition-colors">功能特性</a>
            <a href="https://status.moes.pro/" class="text-white/80 hover:text-white transition-colors">服务监控</a>
            <a href="http://fn.moes.pro:8091" class="text-white/80 hover:text-white transition-colors">立即观看</a>
            <a href="#features" class="text-white/80 hover:text-white transition-colors">文档</a>
            <a href="https://github.com/mps233/MoesPro-Web" class="text-white/80 hover:text-white transition-colors flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-center lg:text-left">
            <img 
              :src="iconImage" 
              alt="MoviePilot Logo" 
              class="w-20 h-20 mx-auto lg:mx-0 mb-8 rounded-2xl shadow-2xl"
            />
            <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Moes Pro
              <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                智能观影系统
              </span>
            </h1>
            <p class="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
              Moes Pro 是基于插件化架构的新一代智能观影系统<br />
              让您的影视观看体验变得简单高效
            </p>
            <div class="flex flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="http://fn.moes.pro:8091"
                target="_blank"
                class="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl group"
              >
                <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                立即观看
              </a>
              <a 
                href="#features"
                target="_blank"
                class="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                查看文档
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Right Carousel -->
          <div class="relative">
            <div class="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 overflow-hidden">
              <!-- Carousel Container -->
              <div class="relative h-96 rounded-2xl overflow-hidden">
                <div 
                  v-for="(image, index) in carouselImages" 
                  :key="index"
                  :class="[
                    'absolute inset-0 transition-transform duration-500 ease-in-out',
                    index === currentSlide ? 'translate-x-0' : 
                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  ]"
                >
                  <img
                    :src="image.url"
                    :alt="image.title"
                    class="w-full h-full object-cover rounded-2xl"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl">
                    <div class="absolute bottom-6 left-6 right-6">
                      <h3 class="text-white font-bold text-xl mb-2">{{ image.title }}</h3>
                      <p class="text-white/80 text-sm leading-relaxed">{{ image.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <button
                @click="prevSlide"
                class="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click="nextSlide"
                class="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                </button>

              <!-- Dots Indicator -->
              <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                <button
                  v-for="(_, index) in carouselImages"
                  :key="index"
                  @click="currentSlide = index"
                  :class="[
                    'w-2 h-2 rounded-full transition-all duration-200',
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  ]"
                />
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-black/20 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            强大的功能特性
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Moes Pro 提供全方位的自助式观影解决方案，从搜索到下载，一站式解决您的所有需求
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="feature.iconSvg"></svg>
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">{{ feature.title }}</h3>
            <p class="text-white/70 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Plugin System Section -->
    <section id="plugins" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            🧩 强大的Oneman管理系统
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            Moes Pro 采用私人专政管理制度，拥有 1000+ 电影和剧集，<br />
            让您可以根据需求自由观影，体验专属的媒体观看方案
          </p>
        </div>

        <!-- Plugin Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(highlight, index) in pluginHighlights" 
            :key="index"
            class="text-center"
          >
            <div class="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="highlight.iconSvg"></svg>
            </div>
            <h4 class="text-xl font-semibold text-white mb-2">{{ highlight.title }}</h4>
            <p class="text-white/70">{{ highlight.description }}</p>
          </div>
        </div>
        
        <div class="text-center mt-10">
          <a 
            href="http://fn.moes.pro:8091"
            class="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-200 border border-white/20"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0z" />
            </svg>
            浏览影视仓库
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="py-20 bg-black/20 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            完美兼容
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            支持主流emby类观影软件，网页客户端、甚至TV端，无缝融入您现有的媒体生态系统
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div 
            v-for="(integration, index) in integrations" 
            :key="index"
            class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="mb-3 flex justify-center">
              <img 
                :src="integration.icon" 
                :alt="integration.name"
                class="w-12 h-12 object-contain"
              />
            </div>
            <h3 class="text-white font-medium">{{ integration.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section id="installation" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            多种资源
          </h2>
          <p class="text-xl text-white/70 max-w-3xl mx-auto">
            多种资源渠道，总有一种适合您的网络环境。开箱即用，几分钟内即可开始观看
          </p>
        </div>

        <!-- Deployment Methods -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            v-for="(method, index) in deploymentMethods" 
            :key="index"
            class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <div class="text-center mb-6">
              <div class="text-4xl mb-3">{{ method.icon }}</div>
              <h3 class="text-2xl font-semibold text-white mb-2">{{ method.title }}</h3>
              <p class="text-white/70">{{ method.description }}</p>
            </div>
            

          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-black/20 backdrop-blur-sm">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            开始您的观影之旅
          </h2>
          <p class="text-xl text-white/80 mb-10 leading-relaxed">
            加入数十名用户的行列，体验最智能的媒体库管理解决方案
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="http://fn.moes.pro:8091"
              class="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl group"
            >
              <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              立即进入
            </a>
            <a 
              href="https://wiki.movie-pilot.org/"
              class="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              完整文档
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black/30 backdrop-blur-md border-t border-white/10 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <img 
                :src="iconImage" 
                alt="MoviePilot" 
                class="w-8 h-8 rounded-lg"
              />
              <h3 class="text-xl font-bold text-white">Moes Pro</h3>
            </div>
            <p class="text-white/70 mb-6 max-w-md">
              基于插件化架构的新一代智能观影系统，让您的影视观看体验变得简单高效。
            </p>
            <div class="flex space-x-4">
              <a href="https://github.com/jxxghp/MoviePilot" class="text-white/60 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex justify-start sm:justify-between space-x-16">
            <div>
              <h4 class="text-white font-semibold mb-4">产品</h4>
              <ul class="space-y-2">
                <li><a href="#features" class="text-white/60 hover:text-white transition-colors">功能特性</a></li>
                <li><a href="#plugins" class="text-white/60 hover:text-white transition-colors">插件系统</a></li>
                <li><a href="#installation" class="text-white/60 hover:text-white transition-colors">安装指南</a></li>
                <li><a href="https://wiki.movie-pilot.org/" class="text-white/60 hover:text-white transition-colors">使用文档</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-white font-semibold mb-4">社区</h4>
              <ul class="space-y-2">
                <li><a href="https://github.com/jxxghp/MoviePilot" class="text-white/60 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://wiki.movie-pilot.org/plugin" class="text-white/60 hover:text-white transition-colors">插件市场</a></li>
                <li><a href="https://wiki.movie-pilot.org/" class="text-white/60 hover:text-white transition-colors">Wiki</a></li>
                <li><a href="https://github.com/jxxghp/MoviePilot/issues" class="text-white/60 hover:text-white transition-colors">问题反馈</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="border-t border-white/10 mt-12 pt-8 text-center">
          <p class="text-white/60">
            © 2025 Moes Pro. 开源项目，遵循 GPL-3.0 许可证。
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 导入图标
import iconImage from './assets/icon.png'
import plexIcon from './assets/plex.png'
import embyIcon from './assets/emby.png'
import jellyfinIcon from './assets/jellyfin.png'
import wangyiIcon from './assets/wangyi.webp'
import vidhubIcon from './assets/vidhub.png'
import wechatIcon from './assets/wechat.png'
import telegramIcon from './assets/telegram.webp'
import slackIcon from './assets/slack.webp'
import dashboardImage from './assets/dashboard.png'
import rankingImage from './assets/ranking.png'
import pluginImage from './assets/plugin.png'
import subscribeImage from './assets/subscribe.png'

// 轮播图数据
const carouselImages = ref([
  {
    url: rankingImage,
    title: "流行趋势 - 智能推荐",
    description: "基于热度和评分的智能推荐系统，发现最新最热的影视内容"
  },
  {
    url: subscribeImage,
    title: "订阅管理 - 自动追剧",
    description: "智能订阅管理，自动追踪剧集更新，永不错过精彩内容"
  },
  {
    url: pluginImage,
    title: "插件市场 - 丰富生态",
    description: "200+ 官方和社区插件，一键安装，扩展无限可能"
  },
  {
    url: dashboardImage,
    title: "仪表盘 - 统一管理",
    description: "直观的数据统计和媒体库管理，一目了然掌控全局"
  }
])

// 当前轮播图索引
const currentSlide = ref(0)

// 自动轮播定时器
let autoSlideTimer: number | null = null

// 下一张
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.value.length
}

// 上一张
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselImages.value.length) % carouselImages.value.length
}

// 启动自动轮播
const startAutoSlide = () => {
  autoSlideTimer = window.setInterval(() => {
    nextSlide()
  }, 5000) as unknown as number
}

// 停止自动轮播
const stopAutoSlide = () => {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer)
    autoSlideTimer = null
  }
}

// 功能特性数据
const features = ref([
  {
    title: "丰富的影视资源",
    description: "拥有 1000+ 电影和剧集，让您可以根据需求自由观影，体验专属的媒体观看方案",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0z" />'
  },
  {
    title: "智能搜索与订阅",
    description: "自动搜索和匹配电影、电视剧，智能订阅管理",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />'
  },
  {
    title: "自动下载管理",
    description: "根据用户选择的资源自动下载资源，支持选择清晰度以及视频格式",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />'
  },
  {
    title: "智能重命名整理",
    description: "自动重命名和整理媒体文件，确保您的媒体库界面结构清晰有序",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />'
  },
  {
    title: "媒体服务器兼容",
    description: "无缝集成 Infuse、Emby、网易爆米花 等主流观影软件，自动刷新媒体库",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />'
  },
  {
    title: "多样化通知系统",
    description: "支持微信、Telegram、Slack等多种通知方式，及时了解下载进度和系统状态",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4 19l5-5 5 5M4 7l5 5 5-5" />'
  }
])

// 插件亮点数据
const pluginHighlights = ref([
  {
    title: "即登录即用",
    description: "一秒登录，无需等待，立即观影",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />'
  },
  {
    title: "多应用设计",
    description: "不固定应用，按需选择，避免审美疲劳",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />'
  },
  {
    title: "持续更新",
    description: "活跃的我，影视资源持续更新",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />'
  },
  {
    title: "求片友好",
    description: "完善的下载设计，易于自助求片",
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />'
  }
])

// 部署方式数据
const deploymentMethods = ref([
  {
    title: "本地存储",
    description: "直接存储在本地，适合拥有IPV6的用户",
    icon: "💻",
    command: "# 下载并运行\nhttps://github.com/developer-wlj/Windows-MoviePilot/releases"
  },
  {
    title: "天翼网盘",
    description: "专为电信用户优化的观影方案",
    icon: "🐳",
    command: "docker run -d \\\n  --name moviepilot \\\n  -p 3000:3000 \\\n  -v /path/to/config:/config \\\n  jxxghp/moviepilot-v2:latest"
  },
  {
    title: "夸克网盘",
    description: "有VIP的加持，适合大多数用户观影",
    icon: "📦",
    command: "# 通过群晖 Docker 套件\n# 或使用 https://spk7.imnks.com/ 套件源安装"
  }
])

// 集成服务数据
const integrations = ref([
  { name: "Infuse", icon: plexIcon },
  { name: "Emby", icon: embyIcon },
  { name: "Jellyfin", icon: jellyfinIcon },
  { name: "网易爆米花", icon: wangyiIcon },
  { name: "Vidhub", icon: vidhubIcon },
  { name: "Wechat", icon: wechatIcon },
  { name: "Telegram", icon: telegramIcon },
  { name: "Slack", icon: slackIcon },
])

// 组件挂载时启动自动轮播
onMounted(() => {
  startAutoSlide()
})

// 组件卸载时清理定时器
onUnmounted(() => {
  stopAutoSlide()
})
</script>
