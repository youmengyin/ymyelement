import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		target: 'modules',
		outDir: resolve(__dirname, "dist/umd"),
		emptyOutDir: false,
		minify: true, // 压缩
		chunkSizeWarningLimit: 100, // 触发警告的 chunk 大小
		reportCompressedSize: false, // 是否gizp文件压缩大小信息报告
		lib: {
			name: "YMY", // umd规范需要name
			entry: resolve(__dirname, "packages/components/index.ts"),
			formats: ["umd"],
			fileName: (target: string) => {
				return `index.${target}.mjs`;
			}
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				format: "umd",
				exports: "named",
				globals: {
					vue: "Vue"
				}
			}
		}
	},
	plugins: [vue()]
});
