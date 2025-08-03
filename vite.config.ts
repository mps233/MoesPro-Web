
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Moes Pro',
        short_name: 'MoesPro',
        description: '智能观影系统',
        theme_color: '#1e293b',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        // 固定 JS 文件名
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          // 固定 CSS 文件名
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name].css'
          }
          // 其他资源文件
          return 'assets/[name].[ext]'
        }
      }
    }
  }
})
