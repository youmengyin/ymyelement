import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		target: 'modules',
		outDir: resolve(__dirname, "dist/lib"),
		emptyOutDir: false,
		minify: true, // 压缩
		chunkSizeWarningLimit: 100, // 触发警告的 chunk 大小
		reportCompressedSize: false, // 是否gizp文件压缩大小信息报告
		lib: {
			entry: resolve(__dirname, "packages/components/index.ts"),
			formats: ["cjs"],
			fileName: (target: string) => {
				return `index.${target}.js`;
			}
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				preserveModules: true // 按原始目录结构进行打包
			}
		}
	},
	plugins: [vue()]
});
