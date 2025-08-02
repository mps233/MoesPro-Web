
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
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
