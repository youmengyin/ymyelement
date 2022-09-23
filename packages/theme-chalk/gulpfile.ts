import { parallel, series, src, dest } from 'gulp';
import { resolve } from 'path';
// es module 方式需要node14以上版本支持
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minifyCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import chalk from 'chalk';
const sass = gulpSass(dartSass);

const distDir = resolve(__dirname, 'dist');
const distBundle = resolve(__dirname, '../../dist/theme-chalk');
const noPrefixFile = /(index|display|base)/;
function buildThemeChalk() {
	return src(resolve(__dirname, "src/*.scss"))
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(minifyCss({}, (details) => {
			// console.log(`${details.name}: ${details.stats.originalSize}`);
			// console.log(`${details.name}: ${details.stats.minifiedSize}`);
			console.log(`${chalk.cyan(details.name)}: ${chalk.yellow(
				details.stats.originalSize / 1000
			)} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`);
		}))
		.pipe(rename((path) => {
			if (!noPrefixFile.test(path.basename)) {
				path.basename = `qx-${path.basename}`;
			}
			return path;
		}))
		.pipe(dest(distDir));// 压缩后的css存放位置
}
function copyThemeChalkBundle() {
	return src(`${distDir}/**`).pipe(dest(distBundle));
}
export function copyThemeChalkSource() {
	return src(resolve(__dirname, 'src/**')).pipe(
		dest(resolve(distBundle, 'src'))
	);
}
export const build = parallel(
	copyThemeChalkSource,
	series(buildThemeChalk, copyThemeChalkBundle)
);
export default build;
