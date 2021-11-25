export const state = () => ({
    closed: true,
    project: 'MusicPlayer',
    techs: {
        html5: {
            logo: '/img/icons/html5.png',
            name: 'HTML 5'
        },
        javascript: {
            logo: '/img/icons/javascript.png',
            name: 'JAVASCRIPT'
        },
        vue: {
            logo: '/img/icons/vue.png',
            name: 'VUE'
        },
        nuxt: {
            logo: '/img/icons/nuxt.png',
            name: 'NUXT'
        },
        wordpress: {
            logo: '/img/icons/wordpress.png',
            name: 'WORDPRESS'
        },
        css3: {
            logo: '/img/icons/css3.png',
            name: 'CSS 3'
        },
        sass: {
            logo: '/img/icons/sass.png',
            name: 'SASS'
        },
        materialize: {
            logo: '/img/icons/materialize.png',
            name: 'MATERIALIZE'
        },
        vuetify: {
            logo: '/img/icons/vuetify.png',
            name: 'VUETIFY'
        },
        bootstrap: {
            logo: '/img/icons/bootstrap.png',
            name: 'BOOTSTRAP'
        },
        node: {
            logo: '/img/icons/node.png',
            name: 'NODE'
        },
        php: {
            logo: '/img/icons/php.png',
            name: 'PHP'
        },
        laravel: {
            logo: '/img/icons/laravel.png',
            name: 'LARAVEL'
        },
        mongodb: {
            logo: '/img/icons/mongodb.png',
            name: 'MONGO DB'
        },
        mysql: {
            logo: '/img/icons/mysql.png',
            name: 'MYSQL'
        },
        firebase: {
            logo: '/img/icons/firebase.png',
            name: 'FIREBASE'
        },
        vscode: {
            logo: '/img/icons/vscode.png',
            name: 'VISUAL STUDIO CODE'
        },
        git: {
            logo: '/img/icons/git.png',
            name: 'GIT'
        },
        webpack: {
            logo: '/img/icons/webpack.png',
            name: 'WEBPACK'
        },
        docker: {
            logo: '/img/icons/docker.png',
            name: 'DOCKER'
        },
        jest: {
            logo: '/img/icons/jest.png',
            name: 'JEST'
        },
        electron: {
            logo: '/img/icons/electron.png',
            name: 'ELECTRON'
        },
        selenium: {
            logo: '/img/icons/selenium.png',
            name: 'SELENIUM'
        },
        threejs: {
            logo: '/img/icons/threejs.jpg',
            name: 'THREEJS'
        },
        greensock: {
            logo: '/img/icons/greensock.png',
            name: 'GREENSOCK'
        },
        howler: {
            logo: '/img/icons/howler.png',
            name: 'HOWLER'
        },
    },
    projects: {
        MusicPlayer: {
            id: 'MusicPlayer',
            title: 'Music Player',
            techs: [
                'vue',
                'materialize',
                'sass', 
                'electron', 
                'howler', 
            ],
            description: `
               Music player for Windows with many of the typical functionalities and also news that I have always been missing. The MP3 files are associated with a JSON to be able to save additional information about each song, a fact that allows:
                <br> <br>
                1 - Assign several TAGS to each song (It can define styles, eras, voices or as many concepts as the user wants). Once all the songs are classified, I can create dynamic playlists by combining TAGS. An example might be: Relaxing (TAG) English (TAG) songs with a female voice (TAG).
                   <br> <br>
                2 - Play the songs in an accelerated way (nightcore) or slowed down (lowcore) in real time to enjoy versions (lively or melancholic) with a single base song.
                <br> <br>
                I am passionate about music and this desktop application has covered many needs that traditional players do not cover for me.
            `,
            github: 'https://github.com/xScripted/ScriptedTune',
            web: 'https://drive.google.com/file/d/1YSV3bdfwlHVQqt4fNeSL7hZO1hIwQLn4/view?usp=sharing',
            media: 'img/portfolio/music.png'
        },
        CryptoTracker: {
            id: 'CryptoTracker',
            title: 'Crypto Tracker',
            techs: [
                'vue',
                'vuetify',
            ],
            description: `
                Very simple application that makes a request to the API of <a style="color: orange" href="https://www.coingecko.com/en/api" target="_blank"> CoinGecko </a> to display a list of cryptocurrencies.            
            `,
            github: 'https://github.com/xScripted/cryptotracker',
            web: 'https://miquelcryptotracker.000webhostapp.com/',
            media: 'img/portfolio/crypto.png'
        },
        eSportsWeb: {
            id: 'eSportsWeb',
            title: 'eSports Web',
            techs: [
                'vue',
                'laravel',
                'bootstrap',
                'sass',
                'mysql',
            ],
            description: `
                Website for an electronic sports team (eSports), the objective is to display information about the team (news, calendar, players, events)
                <br> It also has a backend so the staff can manage all the information offered by the page.
                <br> <br>
                Currently the team is inactive, if you want to test the backend you can do it from <a style="color: orange" href="http://zerokills.ddns.net/adminzk/register" target="_blank"> here </ a >.
            `,
            github: 'https://github.com/xScripted/zerokills',
            web: 'http://zerokills.ddns.net',
            media: 'img/portfolio/zerokills.png'
        },
        aje3d: {
            id: 'aje3d',
            title: 'Ajedrez 3D',
            techs: [
                'node',
                'threejs',
                'mongodb',
            ],
            description: `
                Project carried out as a final phase of the higher degree (DAW), in a period of 30 days.
                It is a 3D Chess in which you can, among other things, create games in multiplayer mode, chat or create a user with game statistics thanks to a user system with node. <br> <br>
                Given the limitations of time and experience, the project has shortcomings that make it difficult for the web application to flow properly. Also, the code has a lot of room for refactoring. If I had to redo the project again I would focus on creating a more readable and maintainable code.
            `,
            github: 'https://github.com/xScripted/3DCHESSDAW2',
            web: 'https://aje3d.herokuapp.com/',
            media: 'img/portfolio/aje3d.png'
        }
    }
})

export const getters = {
    allProjects: (state) => state.projects,
    project: (state) => state.projects[state.project],
    techs: (state) => state.techs,
    closed: (state) => state.closed,
}

export const mutations = {
    updateClosed(state, value) {
        state.closed = value;
    },
    updateProject(state, value) {
        console.log(value);
        state.project = value;
    }

}