const data = [
    {
        id: "hello-world",
        title: "Hello World",
        body: "Hi there. Thanks for stopping by. Have a gander below.",
        tech: null,
        videoLink: null,
        link: null,
        githubLink: null
    },
    {
        id: "about-me",
        title: "This is Me.",
        body: "I think simple is usually the best way. Books + Coffee = favorite. I'm a bit of a nerd. I write code and occassionally build things out of wood.",
        tech: null,
        videoLink: null,
        link: null,
        githubLink: null
    },
    {
        id: "doppel",
        title: "Doppel",
        body: "A flower inventory management system that I built for a local business.",
        tech: "MEAN stack app bundled up with Webpack. This was my capstone project for Galvanize. Note: Working through deploying to AWS so the app isn't live yet.",
        videoLink: null,
        link: null,
        githubLink: "https://github.com/petahcole/doppel"
    },
    {
        id: "johnny-four",
        title: "Johnny-Four",
        body: "An IoT robot with live-streaming video that you drive from the browswer.",
        tech: "Raspberry Pi 3, Angular, Node, Express, Socket.io, h264 Live Player.",
        videoLink: null,
        link: "https://johnny-four.firebaseapp.com/",
        githubLink: "https://github.com/Johnny-Four/johnny-ssr"
    },
    {
        id: "dashbored",
        title: "DASHBored",
        body: "An app that aims to centralize most of the tools used to suppress your boredom.",
        tech: "Express, Node, PostgreSQL, jQuery, HTML, custom CSS.",
        videoLink: null,
        link: "https://q2dashbored.herokuapp.com/",
        githubLink: "https://github.com/Respected-Wizards/DashBored"
    },
    {
        id: "scrible",
        title: "Scrible",
        body: "A daily writing app that provides a prompt, word count, and ability to store in local storage",
        tech: "jQuery, HTML, custom CSS.",
        videoLink: null,
        link: "https://scrible-11933.firebaseapp.com/",
        githubLink: "https://github.com/petahcole/scrible"
    },
    {
        id: "contact",
        title: "Contact",
        body: "email me: cbatson89@gmail.com | github: https://github.com/petahcole | linkedIn: https://www.linkedin.com/in/petahcole",
        tech: "jQuery, HTML, custom CSS.",
        videoLink: null,
        link: null,
        githubLink: null
    }
]

class DataApi {
    static getAllData() {
        return new Promise((resolve, reject)    =>  {
            resolve(Object.assign([], data))
        })
    }
}

export default DataApi;