var assets = "./app/assets";

module.exports = {
  browserSync: {
    proxy: 'localhost:3000'
  },
  sass: {
    src: assets + "/stylesheets/*.{sass,scss}",
    dest: assets + "/stylesheets/compiled",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  images: {
    src: assets + "/images/**",
    dest: assets + "/images"
  },
  iconFonts: {
    name: 'Gulp Rails Icons',
    src: assets + "/images/icons/*.svg",
    dest: assets + '/fonts',
    sassDest: assets + '/stylesheets/base',
    template: './gulp/tasks/iconFont/template.sass.swig',
    sassOutputName: '_icons.sass',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'gulp-rails-icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  browserify: {
    bundleConfigs: [{
      entries: assets + '/javascripts/global.coffee',
      dest: assets + '/javascripts/compiled',
      outputName: 'global.js',
      extensions: ['.js','.coffee']
    }]
  }
};
